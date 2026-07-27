import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { AICarousel } from "./AICarousel";

export type Project = {
  id: number;
  title: string;
  award?: string;
  platform: string;
  hook: string;
  links: { label: string; url: string; icon?: "external" | "github" }[];
};

const aiProducts: Project[] = [
  {
    id: 1,
    title: "Recipe2Reel",
    award: "Winner, ElevenLabs ElevenCreative Challenge",
    platform: "ElevenLabs",
    hook: "One-click AI reels for food creators: image, video, voiceover and music chained into a single template.",
    links: [
      {
        label: "Build story",
        url: "https://neelanjana.substack.com/p/i-entered-an-ai-challenge-on-a-whim",
      },
    ],
  },
  {
    id: 2,
    title: "Slack Agent for Invisible Work",
    platform: "Slack + Replit",
    hook: "A Slack agent that surfaces the work nobody sees, built for the Devpost Agent Challenge.",
    links: [
      {
        label: "Build story",
        url: "https://neelanjana.substack.com/p/i-cooked-up-a-slack-agent-that-makes",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/receipts-app",
        icon: "github",
      },
    ],
  },
  {
    id: 7,
    title: "PM Sandbox",
    platform: "Bolt.new",
    hook: "A flight simulator for product-manager interviews. Practice 3,400+ real product sense/execution/strategy questions with guided, gamified drills and AI feedback.",
    links: [
      {
        label: "Live",
        url: "https://product-sense-sandbox.bolt.host/",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/pm-sandbox",
        icon: "github",
      },
    ],
  },
  {
    id: 10,
    title: "It's Day 1",
    platform: "Lovable",
    hook: "Turn the thing you just shipped into real distribution picks, with links, specific actions, and honest guidance on where to show up first.",
    links: [
      {
        label: "Live",
        url: "https://it-is-day1.lovable.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/it-is-day1",
        icon: "github",
      },
    ],
  },
  {
    id: 6,
    title: "Email Agent",
    platform: "Codex",
    hook: "My first AI agent: automating email triage and drafting end to end, the build that started the Shipping Anyway series.",
    links: [
      {
        label: "Build story",
        url: "https://neelanjana.substack.com/p/shipping-anyway-series",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/task-digest-agent",
        icon: "github",
      },
    ],
  },
  {
    id: 3,
    title: "Assembli",
    platform: "Omma",
    hook: "Interactive 3D assembly guides for furniture retailers. Flat-pack returns cost $20-30 per unit; one in five is a comprehension failure.",
    links: [
      {
        label: "Live",
        url: "https://omma.build/p/matte-black-sneaker-studio-shot-xn5evb",
      },
      {
        label: "Build story",
        url: "https://substack.com/home/post/p-207773480",
      },
    ],
  },
  {
    id: 4,
    title: "Decision Gym",
    platform: "Figma Make",
    hook: "Polymarket for life decisions: practice judgment, get scored, build calibration.",
    links: [
      {
        label: "Live",
        url: "https://flower-plugin-92759538.figma.site/",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/DecisionGym",
        icon: "github",
      },
      {
        label: "Build story",
        url: "https://substack.com/home/post/p-207773480",
      },
    ],
  },
  {
    id: 5,
    title: "VenueScout",
    platform: "Codex",
    hook: "An AI agent that sourced and contacted venues for a toddler's birthday party, end to end.",
    links: [
      {
        label: "Build story",
        url: "https://neelanjana.substack.com/p/building-an-ai-agent-to-find-my-toddlers",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/venuescout-automation",
        icon: "github",
      },
    ],
  },
  {
    id: 8,
    title: "Product Genome Studio",
    platform: "Lovable",
    hook: "A hands-on simulator for product judgment: pick customer journey patterns from companies that nailed them, see the trade-offs/conflicts, and synthesize the best of all worlds.",
    links: [
      {
        label: "Live",
        url: "https://productgenomestudio.lovable.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/productgenomestudio",
        icon: "github",
      },
      {
        label: "Build story",
        url: "https://devpost.com/software/product-genome-studio",
      },
    ],
  },
  {
    id: 9,
    title: "WhatNowKid Activity Finder",
    platform: "Lovable",
    hook: "An activity finder for parents scrambling to answer 'what now?'. It surfaces kid-friendly things to do based on the child's age, location, and mood.",
    links: [
      {
        label: "Live",
        url: "https://whatnowkid-activity-finder.lovable.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/neelanjanabasu13/whatnowkid-activity-finder",
        icon: "github",
      },
    ],
  },
];

export const AIBuiltSection = () => {
  return (
    <section id="ai-products" className="py-12 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 font-serif">
            WHAT I&apos;M BUILDING
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-justify">
            After a decade at Amazon and the arrival of my second child, I took a career break. It turned out to be the most useful thing that could have happened to my curiosity. I spent it tinkering with every AI tool I could get my hands on! He is in nursery now and delighted about it, and the itch to build properly has come back. So has the appetite for a mission worth returning for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AICarousel projects={aiProducts} />
        </motion.div>
      </div>
    </section>
  );
};

