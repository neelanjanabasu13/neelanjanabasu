import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import addToCartImg from "@/assets/amazon-add-to-cart.jpg";
import quantityImg from "@/assets/amazon-quantity.png";
import pantryImg from "@/assets/amazon-pantry.png";
import visualNavImg from "@/assets/amazon-visual-nav-coffee.jpeg";
import { Peacock, VineTendril, LeafTrio, Sun } from "@/assets/motifs/Motifs";
import { PanelLabel } from "./PanelLabel";

const portfolioItems = [
  {
    id: 1,
    title: "Add to Cart on Search",
    category: "Amazon",
    description:
      "Revolutionary feature enabling customers to add products directly from search results, scaling to 93% worldwide impressions.",
    impact: "$2B Revenue Impact",
    image: addToCartImg,
    focus: "center 65%",

    tags: ["E-commerce", "Search", "UX"],
    story:
      "Believe it or not, you couldn't add products to your cart directly from Amazon's search results until 2023. The idea felt almost too obvious to justify a PRFAQ, so imagine our surprise when the first A/B test came back negative even as customers bought more items and built bigger baskets. After many rabbit holes, the culprit was caught: measurement models trained on three decades of a single happy path had learned that fewer product-page visits meant fewer purchases. A textbook case of Goodhart's law. Once we fixed the measurement, the experiment alone generated over half a billion dollars, and the broader charter ultimately drove more than $2B.",
  },
  {
    id: 2,
    title: "Quantity Information System",
    category: "Amazon",
    description:
      "Redesigned how quantity data is surfaced across 5M+ products, improving customer decision clarity.",
    impact: "$250M Revenue Impact",
    image: quantityImg,
    focus: "center 40%",

    tags: ["Data Systems", "ML", "UX"],
    story:
      "Customers kept receiving different quantities from what they ordered. In consumables, that is the end of a shopping habit, and habit is the whole business. The obvious fix was to make quantity bigger and bolder on the page, but the real problem ran deeper: only 1% of search results had structured quantity data, while the other 99% lived in free text written by hundreds of thousands of sellers across dozens of languages. A prettier label would have been a very confident lie. Instead, I rebuilt the foundation: a new ML model, quantity published as a derived attribute on its own API so seller content was never overwritten, and new listing templates so the catalog couldn't quietly decay again. Accuracy improved from 1% to 95% across 5M products, unlocked $250M in incremental revenue, and became the data layer for unit pricing, recommendations, and fraud detection.",
  },
  {
    id: 3,
    title: "Visual Navigation",
    category: "Amazon",
    description:
      "Visual category navigation on Amazon search, horizontal image carousels enabling customers to filter by product type at a glance.",
    impact: "Search UX",
    image: visualNavImg,
    focus: "center 22%",

    tags: ["Search", "Navigation", "UX"],
    story:
      "Most consumables searches were broad ones like cleaning products or healthy snacks, and customers kept telling us the same thing: they didn't know where to start because everything looked the same. We had taken the visual ease of walking a supermarket aisle and replaced it with a wall of text. My first attempt at fixing it failed within days, but the instrumentation I had insisted on made the problem obvious: we had chosen the right attribute, but many of its values led to dead ends that almost nobody clicked. Two weeks later we relaunched with image carousels built around what customers actually clicked across multiple attributes, rolled it out carefully while monitoring guardrails, and it delivered a $71M annualised uplift globally.",
  },
  {
    id: 4,
    title: "Range Review Automation",
    category: "Amazon Pantry",
    description:
      "Built automated tool for optimizing category curation based on customer expectations.",
    impact: "£25M Revenue",
    image: pantryImg,
    focus: "center center",

    tags: ["Automation", "Analytics"],
    story:
      "Pantry was meant to be Amazon's corner shop for everyday essentials, but the assortment reflected what suppliers listed rather than what customers actually bought. We had a national feed of live Nielsen point-of-sale data sitting almost unused, so I turned it into a merchandising tool organised the way a real supermarket allocates shelf space. £25M of extra cash earned just by choosing better selection for our customers.",
  },
];

export const AmazonShippedSection = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-12 bg-background relative">
      {/* Divider as motif */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-80">
        <VineTendril size={20} />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <PanelLabel panel="Two" name="Amazon" />
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
            What I built at <span className="italic">Amazon</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Some interesting stories of products I shipped and scaled.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {portfolioItems.map((item, index) => {
            const isFlipped = flippedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="folk-card hover:border-foreground/30 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <AnimatePresence mode="wait" initial={false}>
                    {!isFlipped ? (
                      <motion.div
                        key="image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top"
                        />

                        <button
                          onClick={() => setFlippedId(item.id)}
                          aria-label={`Read the story behind ${item.title}`}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold shadow-lg hover:bg-foreground/90 hover:scale-105 transition-all"
                        >
                          <BookOpen className="w-4 h-4" />
                          Read the story
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="story"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 bg-card p-5 overflow-y-auto"
                      >
                        <button
                          onClick={() => setFlippedId(null)}
                          aria-label="Back to image"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-2"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          Back
                        </button>
                        <p className="text-sm text-foreground/85 leading-relaxed">
                          {item.story}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded">
                      {item.impact}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
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
            );
          })}
        </div>

        {/* Bottom motif cluster */}
        <div className="flex items-center justify-center gap-6 opacity-80 mt-4">
          <Peacock size={32} />
          <LeafTrio size={24} />
          <Sun size={20} />
        </div>
      </div>
    </section>
  );
};
