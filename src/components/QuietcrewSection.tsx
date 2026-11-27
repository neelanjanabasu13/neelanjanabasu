import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
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
      <OfferDeck />
    </div>
  </section>
);

const OfferDeck = () => {
  const [i, setI] = useState(0);
  const n = offers.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  return (
    <div className="max-w-lg mx-auto pt-10 pr-10">
      <div className="relative h-64 sm:h-56">
        {offers.map((o, idx) => {
          const pos = (idx - i + n) % n;
          return (
            <motion.a
              key={o.name}
              href={o.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={pos === 0 ? `Visit ${o.name}` : `Bring ${o.name} to front`}
              onClick={(e) => { if (pos !== 0) { e.preventDefault(); setI(idx); } }}
              animate={{
                x: pos === 0 ? "0%" : `${6 + pos * 5}%`,
                y: pos === 0 ? "0%" : `${-(4 + pos * 3)}%`,
                rotate: pos === 0 ? -3 : 3 + pos * 3,
              }}
              whileHover={pos !== 0 ? { rotate: 6 + pos * 3, x: `${9 + pos * 5}%` } : { y: -4 }}
              transition={{ duration: 0.7, ease: [0.3, 0.8, 0.25, 1] }}
              style={{ zIndex: n - pos, borderTop: `6px solid ${o.accent}`, boxShadow: "0 30px 60px -30px hsl(var(--foreground) / 0.45)", cursor: "pointer" }}
              className="folk-card absolute inset-0 flex flex-col p-6 bg-card"
            >
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="text-xl font-medium text-foreground">{o.name}</h3>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{o.price}</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground mb-3">{o.audience}</span>
              <p className="text-muted-foreground text-sm flex-1 text-justify">{o.hook}</p>
              <ExternalLink className="w-4 h-4 self-end text-foreground" aria-hidden="true" />
            </motion.a>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={() => go(-1)} aria-label="Previous offer" title="Previous offer" className="p-1 text-foreground hover:text-foreground/70">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {offers.map((o, idx) => (
            <button key={o.name} onClick={() => setI(idx)} aria-label={`Show ${o.name}`} title={o.name}
              className={`h-2 rounded-full transition-all ${idx === i ? "bg-foreground w-4" : "w-2 bg-foreground/25 hover:bg-foreground/40"}`} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next offer" title="Next offer" className="p-1 text-foreground hover:text-foreground/70">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
