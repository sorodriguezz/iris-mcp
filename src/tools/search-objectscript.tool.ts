import type { Tool } from "./core.tool.js";

export const SEARCH_OBJECTSCRIPT: Tool = {
  name: "search_objectscript",
  description:
    "Search for ObjectScript documentation and examples (solo en caché local)",
  inputSchema: {
    type: "object",
    properties: {
      q: {
        type: "string",
        description: "Search query",
        minLength: 2,
      },
    },
    required: ["q"],
  },
};
