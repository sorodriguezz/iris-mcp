export interface TopDoc {
  uri: string;
  name: string;
  title: string;
  description: string;
  mimeType: string;
}

export const docs = async () => {
  return {
    resources: [
      {
        uri: "irisdoc://RCOS",
        name: "ObjectScript Reference",
        title: "ObjectScript Reference",
        description:
          "Operadores, comandos, funciones, variables especiales, etc.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://GCOS_intro",
        name: "Intro to ObjectScript",
        title: "Introduction to ObjectScript",
        description: "Lenguaje integrado en InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://ALL",
        name: "All Documentation",
        title: "All Documentation (2025.2)",
        description: "Índice general y PDFs.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_deployment",
        name: "Deployment Guide",
        title: "Deployment Guide",
        description: "Guía de despliegue de InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_administration",
        name: "Administration Guide",
        title: "Administration Guide",
        description: "Guía de administración de InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_platform_arch_design",
        name: "Architecture Guide",
        title: "Architecture Guide",
        description: "Guía de arquitectura de InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_security",
        name: "Security Guide",
        title: "Security Guide",
        description: "Guía de seguridad de InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_embedded_language_development",
        name: "Embedded Language Guide",
        title: "Embedded Language Guide",
        description: "Guía de lenguajes embebidos en InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_interoperability",
        name: "Interoperability Guide",
        title: "Interoperability Guide",
        description: "Guía de interoperabilidad de InterSystems IRIS.",
        mimeType: "text/markdown",
      },
      {
        uri: "irisdoc://PAGE_data_science",
        name: "Data Science Guide",
        title: "Data Science Guide",
        description: "Guía de ciencia de datos en InterSystems IRIS.",
        mimeType: "text/markdown",
      },
    ],
  };
};
