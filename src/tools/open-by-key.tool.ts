import type { Tool } from "./core.tool.js";

export const OPEN_BY_KEY: Tool = {
  name: "open_by_key",
  description: "Open a documentation page by its official KEY",
  inputSchema: {
    type: "object",
    properties: {
      key: {
        type: "string",
        description: "Document key",
        minLength: 3,
      },
    },
    required: ["key"],
  },
};
