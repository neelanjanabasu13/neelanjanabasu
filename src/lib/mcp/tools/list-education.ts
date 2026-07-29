import { defineTool } from "@lovable.dev/mcp-js";

const education = [
  {
    institution: "Goa Institute of Management",
    url: "https://gim.ac.in/",
    qualification: "PGDM (MBA)",
  },
  {
    institution: "Gujarat University",
    url: "https://www.gujaratuniversity.ac.in/",
    qualification: "Undergraduate degree",
  },
];

export default defineTool({
  name: "list_education",
  title: "List education",
  description: "List the schools Neelanjana attended, with the qualification earned at each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(education, null, 2) }],
    structuredContent: { education },
  }),
});
