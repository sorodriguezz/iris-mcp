import { fetchClassDoc } from "../loaders/docLoader.js";
import { fetchDocByKey } from "../loaders/htmlLoader.js";
import { searchInCache, smartSearch } from "../search/smartSearch.js";

export const callShema = async (request: any) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "smart_search": {
      const query = args?.q as string;
      const suggestedKeys = args?.keys as string[] | undefined;

      if (!query) {
        throw new Error("Query is required");
      }

      const result = await smartSearch(query, suggestedKeys);
      return {
        content: [
          {
            type: "text",
            text: result.finalResults,
          },
        ],
      };
    }

    case "search_objectscript": {
      const query = args?.q as string;
      if (!query) {
        throw new Error("Query is required");
      }

      const results = await searchInCache(query);
      return {
        content: [
          {
            type: "text",
            text: `Resultados de búsqueda para "${query}":\n\n${results}`,
          },
        ],
      };
    }

    case "open_by_key": {
      const key = args?.key as string;
      if (!key) {
        throw new Error("Key is required");
      }

      const content = await fetchDocByKey(key);
      return {
        content: [
          {
            type: "text",
            text: content.text,
          },
        ],
      };
    }

    case "open_class": {
      const className = args?.class as string;
      if (!className) {
        throw new Error("Class name is required");
      }

      const doc = await fetchClassDoc(className);
      return {
        content: [
          {
            type: "text",
            text: doc.text,
          },
        ],
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
};
