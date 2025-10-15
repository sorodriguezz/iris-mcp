import type { Tool } from "./core.tool.js";

export const OPEN_CLASS: Tool = {
  name: "open_class",
  description: "Abre Documatic por nombre de clase (ej. %Library.String).",
  inputSchema: {
    type: "object",
    properties: {
      class: {
        type: "string",
        description: "Class name",
        minLength: 3,
      },
    },
    required: ["class"],
  },
};
