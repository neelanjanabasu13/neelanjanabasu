import { motion } from "framer-motion";
import { LotusLeaves } from "@/assets/motifs/Motifs";
import { MotifReveal } from "./MotifReveal";

export const PostscriptSection = () => {
  return (
    <section id="postscript" className="py-12 bg-background relative">
      <div className="absolute bottom-6 right-6 sm:right-14 opacity-70">
        <MotifReveal>
          <LotusLeaves size={40} />
        </MotifReveal>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl sm:text-2xl font-body text-foreground leading-relaxed text-justify">
            <span className="font-heading text-3xl sm:text-4xl text-primary mr-2">P.S.</span>
            The colours and borders on this page come from my love of Indian folk art: Madhubani, Pattachitra, Pichwai and more. It is a practice I keep up badly and love anyway.<br className="hidden sm:block" />
            That love is the reason this site looks like this rather than like a template.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
