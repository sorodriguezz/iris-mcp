import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import { load as loadHtml } from "cheerio";
import { request } from "undici";

const BASE =
  "https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=";

const cacheDir = path.join(process.cwd(), "data", "cache");

async function ensureDir() {
  await mkdir(cacheDir, { recursive: true });
}

// Extrae contenido estructurado de páginas de InterSystems
function extractStructuredContent($: any, url: string): string {
  const sections: string[] = [];

  // Buscar contenedor principal de contenido
  const mainContent = $("main, #content, .DocBookContent, body").first();

  // Extraer encabezados y su contenido
  mainContent.find("h1, h2, h3, h4, h5, h6").each((i: number, el: any) => {
    const $heading = $(el);
    const level = "#".repeat(parseInt(el.tagName.slice(1)) || 2);
    const headingText = $heading.text().trim();

    if (headingText) {
      sections.push(`\n${level} ${headingText}\n`);

      // Obtener contenido después del encabezado hasta el siguiente encabezado
      const content = getContentAfterHeading($, $heading);
      if (content) {
        sections.push(content);
      }
    }
  });

  // Si no hay encabezados, extraer todo el contenido principal
  if (sections.length === 0) {
    const fallbackContent = extractTextWithFormatting($, mainContent);
    sections.push(fallbackContent);
  }

  // Extraer y resaltar bloques de código
  const codeBlocks = extractCodeBlocks($);
  if (codeBlocks.length > 0) {
    sections.push("\n## Ejemplos de código\n");
    sections.push(codeBlocks.join("\n\n"));
  }

  return sections
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Obtiene contenido después de un encabezado hasta el siguiente encabezado del mismo nivel o superior
function getContentAfterHeading($: any, $heading: any): string {
  const headingLevel = parseInt($heading.prop("tagName").slice(1));
  const content: string[] = [];

  let $next = $heading.next();
  while ($next.length > 0) {
    const tagName = $next.prop("tagName");

    // Si encontramos otro encabezado del mismo nivel o superior, paramos
    if (tagName && tagName.match(/^H[1-6]$/)) {
      const nextLevel = parseInt(tagName.slice(1));
      if (nextLevel <= headingLevel) {
        break;
      }
    }

    const text = extractTextWithFormatting($, $next);
    if (text.trim()) {
      content.push(text);
    }

    $next = $next.next();
  }

  return content.join("\n").trim();
}

// Extrae texto preservando algún formato básico
function extractTextWithFormatting(cheerio: any, $element: any): string {
  // Preservar listas
  const lists = $element
    .find("ul, ol")
    .map((i: number, el: any) => {
      const $list = cheerio(el);
      const items = $list
        .find("li")
        .map((j: number, li: any) => {
          const bullet = el.tagName === "ul" ? "-" : `${j + 1}.`;
          return `${bullet} ${cheerio(li).text().trim()}`;
        })
        .get();
      return items.join("\n");
    })
    .get();

  // Extraer texto principal sin las listas (ya procesadas)
  const $copy = $element.clone();
  $copy.find("ul, ol, pre, code").remove();
  let text = $copy.text().replace(/\s+/g, " ").trim();

  // Agregar listas procesadas
  if (lists.length > 0) {
    text += "\n\n" + lists.join("\n\n");
  }

  return text;
}

// Extrae bloques de código específicamente
function extractCodeBlocks(cheerio: any): string[] {
  const codeBlocks: string[] = [];

  // Buscar diferentes tipos de bloques de código en la documentación de InterSystems
  cheerio("pre, code, .code, .example, .COS, .SQL").each(
    (i: number, el: any) => {
      const $el = cheerio(el);
      const code = $el.text().trim();

      if (code && code.length > 10) {
        // Filtrar snippets muy cortos
        // Intentar detectar el lenguaje
        let language = "objectscript";
        const className = $el.attr("class") || "";
        if (className.includes("SQL") || code.includes("SELECT ")) {
          language = "sql";
        } else if (
          className.includes("javascript") ||
          code.includes("function(")
        ) {
          language = "javascript";
        }

        codeBlocks.push(`\`\`\`${language}\n${code}\n\`\`\``);
      }
    }
  );

  return codeBlocks;
}

// Función para detectar contenido no válido que no debe guardarse en caché
function isValidContent(content: string, title: string): boolean {
  const invalidPatterns = [
    "Version Not Available",
    "page you are looking for does not exist",
    "Sorry, the page you are looking for",
    "404 Not Found",
    "Page Not Found",
    "Error 404",
    "Document not found",
  ];

  // Verificar si el título o contenido contiene patrones de error
  const textToCheck = `${title} ${content}`.toLowerCase();

  for (const pattern of invalidPatterns) {
    if (textToCheck.includes(pattern.toLowerCase())) {
      return false;
    }
  }

  // Verificar que el contenido tenga una longitud mínima razonable
  const cleanContent = content.replace(/\s+/g, " ").trim();
  if (cleanContent.length < 100) {
    return false;
  }

  return true;
}

export async function fetchDocByKey(
  key: string
): Promise<{ text: string; title: string; mimeType: string }> {
  await ensureDir();
  const file = path.join(cacheDir, `doc_${key}.md`);
  // TTL más agresivo: si existe y es reciente (1 hora), devuélvelo
  try {
    const s = await stat(file);
    const ageMs = Date.now() - s.mtimeMs;
    if (ageMs < 1000 * 60 * 60) {
      // 1 hora en lugar de 7 días
      return {
        text: await readFile(file, "utf-8"),
        title: key,
        mimeType: "text/markdown",
      };
    }
  } catch {}

  // Fetch desde la página oficial
  const url = `${BASE}${encodeURIComponent(key)}`;
  const res = await request(url);
  const html = await res.body.text();

  // Extracción semántica mejorada de HTML a Markdown
  const $ = loadHtml(html);
  const title = $("h1, title").first().text().trim() || key;

  // Verificar primero si es una página de error antes de procesar
  const bodyText = $("body").text().toLowerCase();
  if (
    bodyText.includes("version not available") ||
    bodyText.includes("page you are looking for does not exist") ||
    bodyText.includes("sorry, the page you are looking for")
  ) {
    throw new Error(
      `El documento '${key}' no está disponible o contiene contenido no válido. Posibles causas:\n- La página no existe en esta versión\n- El KEY '${key}' no es válido\n- Problema temporal en el servidor\n\nIntenta con un KEY diferente o verifica la documentación oficial.`
    );
  }

  // Extraer contenido estructurado
  const content = extractStructuredContent($, url);

  const disclaimer = `> Fuente oficial: ${url}\n\n`;
  const text = `${disclaimer}# ${title}\n\n${content}\n`;

  // Verificación adicional de contenido válido
  if (!isValidContent(content, title)) {
    throw new Error(
      `El documento '${key}' no contiene suficiente contenido válido.`
    );
  }

  await writeFile(file, text, "utf-8");
  await sleep(100); // respiro para no saturar
  return { text, title, mimeType: "text/markdown" };
}
