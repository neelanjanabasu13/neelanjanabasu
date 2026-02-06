import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 font-serif">
            Skills & <span className="italic">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core competencies honed through years of product leadership
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {resumeData.skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-default border border-border"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            "E-commerce",
            "B2B Products",
            "Machine Learning",
            "UX Design",
            "Agile",
            "Data Analytics",
            "Market Research",
            "Revenue Growth",
            "Team Leadership",
            "Strategic Planning",
          ].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-default border border-border"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
