import type { Tool } from "./core.tool.js";

export const SMART_SEARCH: Tool = {
  name: "smart_search",
  description:
    "Búsqueda inteligente: primero en caché local, luego descarga documentos si es necesario",
  inputSchema: {
    type: "object",
    properties: {
      q: {
        type: "string",
        description: "Search query",
        minLength: 2,
      },
      keys: {
        type: "array",
        items: {
          type: "string",
        },
        description:
          "KEYs específicos de documentos a descargar si no hay resultados en caché (opcional)",
      },
    },
    required: ["q"],
  },
};
