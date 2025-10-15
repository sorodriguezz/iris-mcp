import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import { request } from "undici";
import { load as $ } from "cheerio";

const cacheDir = path.join(process.cwd(), "data", "cache");

async function ensureDir() {
  await mkdir(cacheDir, { recursive: true });
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
    "Class not found",
    "Invalid class name",
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

export async function fetchClassDoc(cls: string) {
  await ensureDir();

  // Crear nombre de archivo seguro para el sistema de archivos
  const safeFileName = cls.replace(/[%<>:"/\\|?*]/g, "_");
  const file = path.join(cacheDir, `class_${safeFileName}.md`);

  // TTL más agresivo: si existe y es reciente (1 hora), devuélvelo
  try {
    const s = await stat(file);
    const ageMs = Date.now() - s.mtimeMs;
    if (ageMs < 1000 * 60 * 60) {
      // 1 hora en lugar de 7 días
      return {
        text: await readFile(file, "utf-8"),
        title: cls,
        mimeType: "text/markdown",
      };
    }
  } catch {}

  // Fetch desde la página oficial
  const base =
    "https://docs.intersystems.com/irislatest/csp/documatic/%25CSP.Documatic.cls";
  const url = `${base}?CLASSNAME=${encodeURIComponent(cls)}&LIBRARY=%25SYS`;
  const res = await request(url);
  const html = await res.body.text();
  const dom = $(html);

  // Verificar primero si es una página de error
  const bodyText = dom("body").text().toLowerCase();
  if (
    bodyText.includes("class not found") ||
    bodyText.includes("invalid class") ||
    bodyText.includes("error") ||
    bodyText.length < 100
  ) {
    throw new Error(
      `La clase '${cls}' no está disponible o contiene contenido no válido. Posibles causas:\n- La clase no existe en el sistema\n- El nombre '${cls}' no es válido\n- Problema temporal en Documatic\n\nVerifica el nombre de la clase o intenta con una clase diferente.`
    );
  }

  const title = dom("h1, title").first().text().trim() || cls;
  const text = dom("body")
    .text()
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const md = `> Fuente oficial: ${url}\n\n# ${title}\n\n${text}\n`;

  // Verificación adicional de contenido válido
  if (!isValidContent(text, title)) {
    throw new Error(
      `La clase '${cls}' no contiene suficiente contenido válido.`
    );
  }

  // Guardar en caché
  await writeFile(file, md, "utf-8");
  await sleep(100); // respiro para no saturar

  return { title, text: md, mimeType: "text/markdown" };
}
