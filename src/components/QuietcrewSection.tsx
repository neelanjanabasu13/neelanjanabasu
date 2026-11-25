import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PanelLabel } from "./PanelLabel";

const offers = [
  {
    name: "Goldmine",
    audience: "For agencies",
    price: "£49 per full scan",
    hook: "Finds local businesses in a London area and category you choose, checks their reputation against what Gemini, OpenAI and Claude actually say about them, and prepares the evidence and outreach drafts.",
    url: "https://quietcrew.ai/goldmine",
    accent: "#E8A33D",
  },
  {
    name: "Outshine",
    audience: "For UK trade businesses",
    price: "£19.99 Fix Pack",
    hook: "Compares a Google Business Profile against nearby rivals, then sells a Fix Pack with tailored instructions and ready-to-use wording so owners can apply the changes themselves.",
    url: "https://quietcrew.ai/outshine",
    accent: "#1B6E86",
  },
  {
    name: "Advisory and builds",
    audience: "For teams adopting AI",
    price: "£99 Workflow Audit",
    hook: "A Workflow Audit that finds where AI and automation can improve day-to-day work, plus 1:1 advisory sessions to help put those changes into practice.",
    url: "https://quietcrew.ai",
    accent: "#C1272D",
  },
];

export const QuietcrewSection = () => (
  <section id="quietcrew" className="py-12 bg-background relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <PanelLabel panel="Studio" name="Quietcrew" />
        <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
          What I <span className="italic">sell</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-justify">
          Alongside building, I founded{" "}
          <a href="https://quietcrew.ai" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-4 decoration-[#DC5A2E] hover:decoration-foreground">Quietcrew</a>
          , my own UK AI and automation consultancy, where I take products from idea to paying customers on my own: these are live, priced and on sale today, and Lovable has certified me as an Expert Partner for the client builds I take on there.
        </p>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-3">
        {offers.map((o, i) => (
          <motion.a
            key={o.name}
            href={o.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="folk-card group hover:border-foreground/30 flex flex-col p-6"
            style={{ borderTop: `6px solid ${o.accent}` }}
          >
            <span className="text-xs font-medium text-muted-foreground mb-2">{o.audience}</span>
            <h3 className="text-xl font-medium text-foreground mb-1">{o.name}</h3>
            <p className="text-sm font-medium text-foreground mb-3">{o.price}</p>
            <p className="text-muted-foreground text-sm flex-1 text-justify">{o.hook}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Visit <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
