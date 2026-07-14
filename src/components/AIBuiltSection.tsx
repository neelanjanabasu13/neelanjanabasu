import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const aiProducts = [
  {
    id: 102,
    title: "Decision Gym",
    category: "Vibe Coded",
    description:
      "Compare your gut instinct against cold, hard math. Interactive decision-training tool with scenario simulations and expected value calculations.",
    impact: "EdTech",
    tags: ["Decision Science", "Gamification", "AI"],
    url: "https://decision-gym-buddy.lovable.app/",
    builtWith: "Lovable",
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
          className="mb-12"
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
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-foreground/20 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-foreground bg-lime-300/80 px-2.5 py-1 rounded-full">
                      {item.impact}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                      {item.builtWith}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-2 font-serif group-hover:text-foreground/80 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Try it live
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
