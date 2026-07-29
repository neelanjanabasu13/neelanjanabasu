import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return Neelanjana Basu's public profile: name, current focus, location, and links to her site, GitHub, LinkedIn, and Substack.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Neelanjana Basu",
      headline: "I build AI products end to end.",
      bio: "Ten years in product before that, most of it at Amazon, most recently Senior Product Manager on Add to Cart in Search. Open to AI product roles.",
      location: "London, UK",
      email: "neelanjanabasu13@gmail.com",
      links: {
        site: "https://neelanjanabasu.lovable.app/",
        github: "https://github.com/neelanjanabasu13",
        linkedin: "https://www.linkedin.com/in/neelanjana-basu",
        substack: "https://neelanjana.substack.com/",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
