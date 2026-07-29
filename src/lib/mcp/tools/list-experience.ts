import { defineTool } from "@lovable.dev/mcp-js";

const experience = [
  {
    company: "Amazon",
    location: "London, UK",
    roles: [
      {
        title: "Senior Product Manager, Consumables",
        period: "Jul 2020 – Sep 2025",
        summary:
          "Owned end-to-end product strategy for Amazon's worldwide consumables business (200M+ customers, 20 countries). Shipped Add to Cart on Search ($2B), the Quantity Information System ($250M), and Visual Navigation on search ($71M annualised).",
      },
      {
        title: "Product Manager, Amazon Pantry",
        period: "2016 – 2020",
        summary:
          "Built the merchandising and range-review tooling for Amazon's essentials store across the UK and Europe, unlocking £25M of incremental revenue.",
      },
    ],
  },
  {
    company: "Meru Cabs",
    location: "Mumbai, India",
    roles: [
      {
        title: "Product Manager",
        period: "Before Amazon",
        summary:
          "Early product work on one of India's first radio-taxi platforms, learning how to ship into ambiguous consumer markets.",
      },
    ],
  },
];

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List Neelanjana's professional experience by company and role, with dates and a short summary of what she shipped.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
