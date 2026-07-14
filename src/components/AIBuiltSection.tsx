import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Trophy } from "lucide-react";

type Project = {
  id: number;
  title: string;
  award?: string;
  hook: string;
  link?: { label: string; url: string };
};

const aiProducts: Project[] = [
  {
    id: 1,
    title: "Recipe2Reel",
    award: "Winner, ElevenLabs ElevenCreative Challenge",
    hook: "One-click AI reels for food creators: image, video, voiceover and music chained into a single template.",
    link: {
      label: "Build story",
      url: "https://neelanjana.substack.com/p/i-entered-an-ai-challenge-on-a-whim",
    },
  },
  {
    id: 2,
    title: "Slack Agent for Invisible Work",
    hook: "A Slack agent that surfaces the work nobody sees, built for the Devpost Agent Challenge.",
    link: {
      label: "Build story",
      url: "https://neelanjana.substack.com/p/i-cooked-up-a-slack-agent-that-makes",
    },
  },
  {
    id: 3,
    title: "Assembli",
    hook: "Interactive 3D assembly guides for furniture retailers. Flat-pack returns cost $20-30 per unit; one in five is a comprehension failure.",
  },
  {
    id: 4,
    title: "Decision Gym",
    hook: "Polymarket for life decisions: practice judgment, get scored, build calibration.",
    link: {
      label: "Live",
      url: "https://flower-plugin-92759538.figma.site/",
    },
  },
  {
    id: 5,
    title: "VenueScout",
    hook: "An AI agent that sourced and contacted venues for a toddler's birthday party, end to end.",
    link: {
      label: "Build story",
      url: "https://neelanjana.substack.com/p/building-an-ai-agent-to-find-my-toddlers",
    },
  },
  {
    id: 6,
    title: "Email Agent",
    hook: "My first AI agent: automating email triage and drafting end to end, the build that started the Shipping Anyway series.",
    link: {
      label: "Build story",
      url: "https://neelanjana.substack.com/p/shipping-anyway-series",
    },
  },
];

export const AIBuiltSection = () => {
  return (
    <section id="ai-products" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 font-serif">
            AI products <span className="italic">I&apos;ve built</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shipping AI products end to end — from idea to live app
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-lime-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-foreground" />
            </div>
            <h3 className="text-2xl font-medium text-foreground font-serif">
              Vibe Coded <span className="italic">Products</span>
            </h3>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider bg-secondary px-3 py-1 rounded-full">
              Built with AI
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiProducts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-foreground/20 transition-all flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  {item.award && (
                    <div className="inline-flex items-center gap-1.5 mb-3 self-start px-2.5 py-1 rounded-full bg-lime-300/80 text-foreground text-xs font-medium">
                      <Trophy className="w-3.5 h-3.5" />
                      {item.award}
                    </div>
                  )}
                  <h4 className="text-lg font-medium text-foreground mb-2 font-serif group-hover:text-foreground/80 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {item.hook}
                  </p>
                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors self-start"
                    >
                      {item.link.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
