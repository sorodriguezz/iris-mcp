import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const cacheDir = path.join(process.cwd(), "data", "cache");

export interface SearchResult {
  fileName: string;
  matches: {
    lineNumber: number;
    line: string;
    context?: string;
  }[];
}

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

export async function searchSpecificTerms(terms: string[]): Promise<string> {
  const results: { [key: string]: SearchResult[] } = {};

  for (const term of terms) {
    const termResults = await searchInCache(term);
    if (!termResults.includes("No se encontraron resultados")) {
      results[term] = [];
    }
  }

  if (Object.keys(results).length === 0) {
    return `No se encontraron resultados para ninguno de los términos: ${terms.join(
      ", "
    )}`;
  }

  return `Resultados encontrados para: ${Object.keys(results).join(", ")}`;
}
