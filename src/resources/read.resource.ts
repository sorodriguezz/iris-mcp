import { fetchClassDoc } from "../loaders/docLoader.js";
import { fetchDocByKey } from "../loaders/htmlLoader.js";

export const readResource = async (request: any) => {
  const uri = request.params.uri;

  if (uri.startsWith("irisdoc://")) {
    const key = uri.replace("irisdoc://", "");
    const content = await fetchDocByKey(key);

    return {
      contents: [
        {
          uri,
          mimeType: content.mimeType,
          text: content.text,
        },
      ],
    };
  } else if (uri.startsWith("doc://")) {
    const cls = uri.slice("doc://".length);
    const doc = await fetchClassDoc(cls);

    return {
      contents: [
        {
          uri,
          mimeType: doc.mimeType,
          text: doc.text,
        },
      ],
    };
  } else {
    throw new Error("Unsupported URI");
  }
};
