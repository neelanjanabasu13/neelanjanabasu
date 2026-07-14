import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import gimLogo from "@/assets/gim-logo.png";
import guLogo from "@/assets/gujarat-university-logo.png";

const logoMap: Record<string, string> = {
  gim: gimLogo,
  gu: guLogo,
};

export const EducationSection = () => {
  return (
    <section id="education" className="py-12 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4 font-serif">
            <span className="italic">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation for a product-driven career
          </p>
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
              className="bg-card rounded-2xl border border-border p-6 group hover:border-foreground/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={logoMap[edu.logo]}
                    alt={`${edu.institution} logo`}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-1 font-serif">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3">{edu.degree}</p>
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
