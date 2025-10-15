export const templateResource = async () => {
  return {
    resourceTemplates: [
      {
        uriTemplate: "irisdoc://{key}",
        name: "IRIS Doc by KEY",
        title: "InterSystems IRIS documentation by KEY",
        description: "Open a documentation page by its official KEY.",
        mimeType: "text/markdown",
      },
      {
        uriTemplate: "doc://{class}",
        name: "IRIS Class Doc (Documatic)",
        title: "Open class reference by CLASSNAME",
        description:
          "Abre referencia de clase por nombre (ej. %Library.Persistent).",
        mimeType: "text/markdown",
      },
    ],
  };
};
