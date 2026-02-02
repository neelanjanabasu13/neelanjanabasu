import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation for a product-driven career
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-coral-warm to-amber-glow mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-interactive bg-card rounded-2xl border border-border p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-teal-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-primary font-medium mb-3">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
