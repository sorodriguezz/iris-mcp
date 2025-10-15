import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { docs } from "./resources/docs.resource.js";
import { coreTools } from "./tools/core.tool.js";
import { templateResource } from "./resources/template.resource.js";
import { readResource } from "./resources/read.resource.js";
import { callShema } from "./request/call-schema.request.js";

const server = new Server(
  {
    name: "iris-objectscript-docs",
    version: "0.1.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

server.setRequestHandler(ListResourcesRequestSchema, docs);

server.setRequestHandler(ListResourceTemplatesRequestSchema, templateResource);

server.setRequestHandler(ReadResourceRequestSchema, readResource);

server.setRequestHandler(ListToolsRequestSchema, coreTools);

server.setRequestHandler(CallToolRequestSchema, callShema);

const transport = new StdioServerTransport();
await server.connect(transport);
