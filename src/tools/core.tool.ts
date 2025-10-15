import { OPEN_BY_KEY } from "./open-by-key.tool.js";
import { OPEN_CLASS } from "./open-class.tool.js";
import { SEARCH_OBJECTSCRIPT } from "./search-objectscript.tool.js";
import { SMART_SEARCH } from "./smart-search.tool.js";

export interface Tool {
  name: string;
  description: string;
  inputSchema: inputSchema;
}

interface inputSchema {
  type: string;
  properties: object;
  required: string[];
}

export const coreTools = async () => {
  return {
    tools: [SMART_SEARCH, SEARCH_OBJECTSCRIPT, OPEN_BY_KEY, OPEN_CLASS],
  };
};
