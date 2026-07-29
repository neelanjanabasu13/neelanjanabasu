import { defineTool } from "@lovable.dev/mcp-js";

type AiProject = {
  title: string;
  platform: string;
  hook: string;
  award?: string;
  links: { label: string; url: string }[];
};

const projects: AiProject[] = [
  {
    title: "Recipe2Reel",
    platform: "ElevenLabs",
    award: "Winner, ElevenLabs ElevenCreative Challenge",
    hook: "One-click AI reels for food creators: image, video, voiceover and music chained into a single template.",
    links: [
      { label: "Build story", url: "https://neelanjana.substack.com/p/i-entered-an-ai-challenge-on-a-whim" },
    ],
  },
  {
    title: "Slack Agent for Invisible Work",
    platform: "Slack + Replit",
    hook: "A Slack agent that surfaces the work nobody sees, built for the Devpost Agent Challenge.",
    links: [
      { label: "Build story", url: "https://neelanjana.substack.com/p/i-cooked-up-a-slack-agent-that-makes" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/receipts-app" },
    ],
  },
  {
    title: "PM Sandbox",
    platform: "Bolt.new",
    hook: "A flight simulator for product-manager interviews. Practice 3,400+ real product sense/execution/strategy questions with guided, gamified drills and AI feedback.",
    links: [
      { label: "Live", url: "https://product-sense-sandbox.bolt.host/" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/pm-sandbox" },
    ],
  },
  {
    title: "It's Day 1",
    platform: "Lovable",
    hook: "Turn the thing you just shipped into real distribution picks, with links, specific actions, and honest guidance on where to show up first.",
    links: [
      { label: "Live", url: "https://it-is-day1.lovable.app/" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/it-is-day1" },
    ],
  },
  {
    title: "Email Agent",
    platform: "Codex",
    hook: "My first AI agent: automating email triage and drafting end to end, the build that started the Shipping Anyway series.",
    links: [
      { label: "Build story", url: "https://neelanjana.substack.com/p/shipping-anyway-series" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/task-digest-agent" },
    ],
  },
  {
    title: "Assembli",
    platform: "Omma",
    hook: "Interactive 3D assembly guides for furniture retailers. Flat-pack returns cost $20-30 per unit; one in five is a comprehension failure.",
    links: [
      { label: "Live", url: "https://omma.build/p/matte-black-sneaker-studio-shot-xn5evb" },
      { label: "Build story", url: "https://substack.com/home/post/p-207773480" },
    ],
  },
  {
    title: "Decision Gym",
    platform: "Figma Make",
    hook: "Polymarket for life decisions: practice judgment, get scored, build calibration.",
    links: [
      { label: "Live", url: "https://flower-plugin-92759538.figma.site/" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/DecisionGym" },
    ],
  },
  {
    title: "VenueScout",
    platform: "Codex",
    hook: "An AI agent that sourced and contacted venues for a toddler's birthday party, end to end.",
    links: [
      { label: "Build story", url: "https://neelanjana.substack.com/p/building-an-ai-agent-to-find-my-toddlers" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/venuescout-automation" },
    ],
  },
  {
    title: "Product Genome Studio",
    platform: "Lovable",
    hook: "A hands-on simulator for product judgment: pick customer journey patterns from companies that nailed them, see the trade-offs, and synthesize the best of all worlds.",
    links: [
      { label: "Live", url: "https://productgenomestudio.lovable.app/" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/productgenomestudio" },
      { label: "Build story", url: "https://devpost.com/software/product-genome-studio" },
    ],
  },
  {
    title: "WhatNowKid Activity Finder",
    platform: "Lovable",
    hook: "An activity finder for parents scrambling to answer 'what now?'. It surfaces kid-friendly things to do based on the child's age, location, and mood.",
    links: [
      { label: "Live", url: "https://whatnowkid-activity-finder.lovable.app/" },
      { label: "GitHub", url: "https://github.com/neelanjanabasu13/whatnowkid-activity-finder" },
    ],
  },
];

export default defineTool({
  name: "list_ai_projects",
  title: "List AI projects",
  description:
    "List the AI products Neelanjana has built end to end during her career break, including platform, one-line hook, and links to live demos, build stories, or repos.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
