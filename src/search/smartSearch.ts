import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fetchDocByKey } from "../loaders/htmlLoader.js";

const cacheDir = path.join(process.cwd(), "data", "cache");

export interface SearchResult {
  fileName: string;
  matches: {
    lineNumber: number;
    line: string;
    context?: string;
  }[];
}

export interface SmartSearchResult {
  foundInCache: boolean;
  cacheResults?: string;
  downloadedDocs?: string[];
  finalResults: string;
}

export async function smartSearch(
  query: string,
  suggestedKeys?: string[]
): Promise<SmartSearchResult> {
  // Paso 1: Buscar en caché local
  const cacheResults = await searchInCache(query);
  const hasGoodCacheResults =
    cacheResults.length > 200 &&
    !cacheResults.includes("No se encontraron resultados");

  if (hasGoodCacheResults) {
    return {
      foundInCache: true,
      cacheResults,
      finalResults: `# Resultados encontrados en caché local\n\n${cacheResults}`,
    };
  }

  // Paso 2: Si no hay buenos resultados en caché, intentar descargar documentos relevantes
  const downloadedDocs: string[] = [];
  const potentialKeys = suggestedKeys || generatePotentialKeys(query);

  // Intentar descargar documentos que podrían contener la información buscada
  for (const key of potentialKeys) {
    const doc = await fetchDocByKey(key);
    downloadedDocs.push(key);
  }

  // Paso 3: Buscar nuevamente en caché después de las descargas
  let finalResults = "";
  if (downloadedDocs.length > 0) {
    const newCacheResults = await searchInCache(query);
    finalResults = `# Resultados después de descargar documentos\n\n## Documentos descargados:\n${downloadedDocs
      .map((key) => `- ${key}`)
      .join("\n")}\n\n## Resultados de búsqueda:\n\n${newCacheResults}`;
  } else {
    finalResults = `# No se encontraron resultados\n\nNo se pudieron encontrar documentos relevantes para "${query}".\n\n## Caché local:\n${cacheResults}\n\n## Sugerencias:\n- Verifica la ortografía del término\n- Intenta con términos más específicos\n- Usa las herramientas open_by_key u open_class directamente`;
  }

  return {
    foundInCache: false,
    cacheResults,
    downloadedDocs,
    finalResults,
  };
}

// Generar KEYs potenciales basados en la consulta
function generatePotentialKeys(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const keys: string[] = [];

  // Mapeo de términos comunes a KEYs conocidos
  const keyMappings: { [key: string]: string[] } = {
    // SQL relacionado
    sql: ["GSQL", "RSQL", "SQL"],
    select: ["GSQL", "RSQL"],
    insert: ["GSQL"],
    update: ["GSQL"],
    delete: ["GSQL"],
    query: ["GSQL", "RSQL"],
    database: ["GSQL"],

    // ObjectScript relacionado
    objectscript: ["RCOS", "GCOS_intro"],
    cos: ["RCOS", "GCOS_intro"],
    class: ["GOBJ"],
    method: ["GOBJ", "RCOS"],
    property: ["GOBJ"],
    function: ["RCOS"],
    command: ["RCOS"],

    // Interoperabilidad
    interoperability: ["EINTEGRATE", "GINTEGRATE"],
    business: ["EINTEGRATE", "GINTEGRATE_business_services"],
    service: ["GINTEGRATE_business_services"],
    process: ["GINTEGRATE"],
    operation: ["GINTEGRATE"],
    adapter: ["EINTEGRATE"],

    // Otros temas
    security: ["GSECURITY"],
    system: ["GSYSTEM"],
    performance: ["GPERFORMANCE"],
    installation: ["GINSTALL"],
    configuration: ["GCONFIG"],
    cache: ["GCACHE"],
    namespace: ["GNAMESPACE"],
  };

  // Buscar coincidencias exactas
  for (const [term, relatedKeys] of Object.entries(keyMappings)) {
    if (lowerQuery.includes(term)) {
      keys.push(...relatedKeys);
    }
  }

  // Si no hay coincidencias específicas, intentar con algunos KEYs generales
  if (keys.length === 0) {
    keys.push("RCOS", "GSQL", "GOBJ"); // Documentos más generales
  }

  // Remover duplicados y limitar a 3 intentos para no sobrecargar
  return [...new Set(keys)].slice(0, 3);
}

// Función original de búsqueda en caché (reutilizada)
export async function searchInCache(query: string): Promise<string> {
  const results: SearchResult[] = [];

  try {
    const files = await readdir(cacheDir);
    const mdFiles = files.filter((f) => f.endsWith(".md"));

    for (const file of mdFiles) {
      const filePath = path.join(cacheDir, file);
      const content = await readFile(filePath, "utf-8");

      // Buscar la query en el contenido (case insensitive)
      const lines = content.split("\n");
      const matches: SearchResult["matches"] = [];

      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
          // Agregar contexto (línea anterior y siguiente si existen)
          const contextLines: string[] = [];
          if (index > 0)
            contextLines.push(`  ${index}: ${lines[index - 1].trim()}`);
          contextLines.push(`> ${index + 1}: ${line.trim()}`);
          if (index < lines.length - 1)
            contextLines.push(`  ${index + 2}: ${lines[index + 1].trim()}`);

          matches.push({
            lineNumber: index + 1,
            line: line.trim(),
            context: contextLines.join("\n"),
          });
        }
      });

      if (matches.length > 0) {
        results.push({
          fileName: file
            .replace(".md", "")
            .replace("doc_", "")
            .replace("class_", ""),
          matches: matches.slice(0, 5), // Limitar a 5 coincidencias por archivo
        });
      }
    }

    if (results.length === 0) {
      return `No se encontraron resultados para "${query}" en el caché local.\n\nSugerencias:\n- Verifica la ortografía\n- Intenta con términos más específicos\n- Usa las herramientas open_by_key u open_class para buscar documentación específica`;
    }

    // Formatear resultados
    const formattedResults: string[] = [];
    formattedResults.push(
      `Se encontraron ${results.length} archivo(s) con coincidencias para "${query}":\n`
    );

    results.forEach((result, index) => {
      formattedResults.push(`## ${index + 1}. ${result.fileName}`);
      formattedResults.push(
        `Coincidencias encontradas: ${result.matches.length}\n`
      );

      result.matches.forEach((match, matchIndex) => {
        formattedResults.push(
          `### Coincidencia ${matchIndex + 1} (Línea ${match.lineNumber})`
        );
        if (match.context) {
          formattedResults.push("```");
          formattedResults.push(match.context);
          formattedResults.push("```\n");
        }
      });
    });

    return formattedResults.join("\n");
  } catch (error) {
    return `Error al buscar en el caché: ${
      error instanceof Error ? error.message : "Error desconocido"
    }`;
  }
}
