import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Her super power is her exceptional writing skills. The high quality of her documentation and clarity of requirements helped [another team] pick up the Search projects and begin development in her absence.",
    source: "Peer review, 2023",
  },
  {
    quote:
      'She never says "it\'s not my job" and acts in the best interest of the entire company, wearing any hats needed, and taking any action the team needs help with.',
    source: "Peer review, 2024",
  },
  {
    quote:
      "One of the most structured PMs I have worked with. I know that the projects I rely on her will be done with the highest standards of quality and deep-dive. She is never afraid to take challenges outside her comfort zone and learn more, and also push back on stakeholders when needed.",
    source: "Peer review, 2025",
  },
  {
    quote:
      "Her super power is the ability to be deeply attuned to the pulse of Amazon and the surrounding world, allowing fantastic development of products from idea to execution.",
    source: "Peer review, 2023",
  },
  {
    quote:
      "She proposed exploring the use of generative AI tools to shape customers' expectations of adding products to the cart. It demonstrates how proactively she drives our collaboration to explore customer benefits before the roadmap is even defined.",
    source: "Peer review, user research, 2025",
  },
  {
    quote:
      "A pragmatic and structured product manager who has created more organisation and clarity. Stakeholders have been effusive about her never leaving any loose ends and always producing high quality deliverables.",
    source: "Manager review, 2025",
  },
];

export const WorkWithMeSection = () => {
  return (
    <section id="work-with-me" className="py-12 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 font-serif">
            What it&apos;s like to work with{" "}
            <span className="italic">me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-justify">
            Not my adjectives. These are verbatim from the peer feedback in my
            past performance reviews, written by the engineers, researchers and
            product managers who had to sit in rooms with me. The feedback was
            submitted anonymously, so I genuinely do not know who wrote which
            one, which is part of why I trust it.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 sm:p-8 hover:border-foreground/20 transition-colors relative"
            >
              <span
                className="absolute top-4 left-4 text-6xl leading-none text-primary/10 font-serif select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-foreground text-lg leading-relaxed mb-4 pt-6">
                {item.quote}
              </blockquote>
              <footer className="relative z-10 text-muted-foreground text-sm font-medium">
                {item.source}
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
