import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, FolderOpen, Rocket } from "lucide-react";

// Placeholder portfolio items - can be easily extended
const portfolioItems = [
  {
    id: 1,
    title: "Add to Cart on Search",
    category: "Amazon",
    description:
      "Revolutionary feature enabling customers to add products directly from search results, scaling to 93% worldwide impressions.",
    impact: "$2B Revenue Impact",
    image: null, // Placeholder for screenshot
    tags: ["E-commerce", "Search", "UX"],
  },
  {
    id: 2,
    title: "Quantity Information System",
    category: "Amazon",
    description:
      "Redesigned how quantity data is surfaced across 5M+ products, improving customer decision clarity.",
    impact: "$250M Revenue Impact",
    image: null,
    tags: ["Data Systems", "ML", "UX"],
  },
  {
    id: 3,
    title: "EU Market Expansion Suite",
    category: "Amazon",
    description:
      "Adapted US product suite to European markets with five localized features addressing regional needs.",
    impact: "$140M Revenue",
    image: null,
    tags: ["Localization", "Market Expansion"],
  },
  {
    id: 4,
    title: "Range Review Automation",
    category: "Amazon Pantry",
    description:
      "Built automated tool for optimizing category curation based on customer expectations.",
    impact: "$25M Revenue",
    image: null,
    tags: ["Automation", "Analytics"],
  },
];

export const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(
    null
  );

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 font-serif">
            <span className="italic">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key products and features I've built and scaled
          </p>
        </motion.div>

        {/* Coming Soon Banner for Vibe Coded Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border flex items-center justify-center gap-4"
        >
          <div className="w-8 h-8 rounded-lg bg-lime-300 flex items-center justify-center">
            <Rocket className="w-4 h-4 text-foreground" />
          </div>
          <p className="text-foreground font-medium">
            <span className="font-serif italic">Vibe Coded Products</span> section coming soon!
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedItem(item)}
              className="bg-card rounded-2xl border border-border overflow-hidden cursor-pointer group hover:border-foreground/20 transition-all"
            >
              {/* Image placeholder */}
              <div className="aspect-video flex items-center justify-center relative overflow-hidden bg-secondary">
                <FolderOpen className="w-12 h-12 text-muted-foreground/40 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded">{item.impact}</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 font-serif group-hover:text-foreground/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-auto"
              >
                <div className="aspect-video flex items-center justify-center relative bg-secondary">
                  <FolderOpen className="w-16 h-16 text-muted-foreground/40" />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-secondary transition-all"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <span className="text-sm font-medium text-foreground bg-secondary px-2 py-1 rounded">
                      {selectedItem.impact}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-4 font-serif">
                    {selectedItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm rounded-full bg-secondary text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
