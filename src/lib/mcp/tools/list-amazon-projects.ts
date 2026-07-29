import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "Add to Cart on Search",
    impact: "$2B revenue impact",
    tags: ["E-commerce", "Search", "UX"],
    story:
      "Believe it or not, you couldn't add products to your cart directly from Amazon's search results until 2023. The idea felt almost too obvious to justify a PRFAQ, so imagine our surprise when the first A/B test came back negative even as customers bought more items and built bigger baskets. After many rabbit holes, the culprit was caught: measurement models trained on three decades of a single happy path had learned that fewer product-page visits meant fewer purchases. A textbook case of Goodhart's law. Once we fixed the measurement, the experiment alone generated over half a billion dollars, and the broader charter ultimately drove more than $2B.",
  },
  {
    title: "Quantity Information System",
    impact: "$250M revenue impact",
    tags: ["Data Systems", "ML", "UX"],
    story:
      "Customers kept receiving different quantities from what they ordered. In consumables, that is the end of a shopping habit, and habit is the whole business. The obvious fix was to make quantity bigger and bolder on the page, but the real problem ran deeper: only 1% of search results had structured quantity data, while the other 99% lived in free text written by hundreds of thousands of sellers across dozens of languages. Instead of a prettier label, I rebuilt the foundation: a new ML model, quantity published as a derived attribute on its own API so seller content was never overwritten, and new listing templates so the catalog couldn't quietly decay again. Accuracy improved from 1% to 95% across 5M products and unlocked $250M in incremental revenue.",
  },
  {
    title: "Visual Navigation",
    impact: "$71M annualised uplift globally",
    tags: ["Search", "Navigation", "UX"],
    story:
      "Most consumables searches were broad ones like cleaning products or healthy snacks, and customers kept telling us the same thing: they didn't know where to start because everything looked the same. We had taken the visual ease of walking a supermarket aisle and replaced it with a wall of text. My first attempt at fixing it failed within days, but the instrumentation I had insisted on made the problem obvious: we had chosen the right attribute, but many of its values led to dead ends. Two weeks later we relaunched with image carousels built around what customers actually clicked across multiple attributes, and it delivered a $71M annualised uplift globally.",
  },
  {
    title: "Range Review Automation (Amazon Pantry)",
    impact: "£25M revenue",
    tags: ["Automation", "Analytics"],
    story:
      "Pantry was meant to be Amazon's corner shop for everyday essentials, but the assortment reflected what suppliers listed rather than what customers actually bought. We had a national feed of live Nielsen point-of-sale data sitting almost unused, so I turned it into a merchandising tool organised the way a real supermarket allocates shelf space. £25M of extra cash earned just by choosing better selection for our customers.",
  },
];

export default defineTool({
  name: "list_amazon_projects",
  title: "List Amazon projects",
  description:
    "List the four products Neelanjana shipped and scaled at Amazon, including the impact, tags, and the full behind-the-scenes story for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
