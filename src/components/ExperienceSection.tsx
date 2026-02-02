import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ChevronDown, TrendingUp } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export const ExperienceSection = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>("amazon-0");

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A decade of building and scaling products that impact millions
          </p>
          <div className="w-20 h-1.5 mx-auto mt-6 rounded-full" style={{ background: 'var(--gradient-accent)' }} />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 rounded-full" style={{ background: 'var(--gradient-button)' }} />

          {resumeData.experience.map((company, companyIndex) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
              className="relative pl-12 md:pl-20 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-2 w-5 h-5 rounded-full ring-4 ring-background shadow-lg" style={{ background: 'var(--gradient-accent)' }} />

              {/* Company header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-extrabold text-foreground">
                      {company.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {company.location}
                  </div>
                </div>
              </div>

              {/* Roles */}
              <div className="space-y-4">
                {company.roles.map((role, roleIndex) => {
                  const roleId = `${company.company.toLowerCase().replace(/\s/g, "-")}-${roleIndex}`;
                  const isExpanded = expandedRole === roleId;

                  return (
                    <motion.div
                      key={roleId}
                      layout
                      className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <button
                        onClick={() => setExpandedRole(isExpanded ? null : roleId)}
                        className="w-full text-left p-6 focus:outline-none"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-foreground mb-2">
                              {role.title}
                            </h4>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4" />
                              {role.period}
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-1"
                          >
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          </motion.div>
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {role.description}
                          </p>

                          <div className="grid gap-4">
                            {role.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: achIndex * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                              >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-accent)' }}>
                                  <TrendingUp className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-2xl font-extrabold gradient-text">
                                    {achievement.metric}
                                  </span>
                                  <p className="text-muted-foreground text-sm mt-1">
                                    {achievement.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
