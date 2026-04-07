import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: resumeData.personal.linkedin,
    },
    {
      icon: Phone,
      label: "Phone",
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: resumeData.personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-foreground">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-background/5 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-background/5 blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-background mb-4 font-serif">
            Let's <span className="italic">Connect</span>
          </h2>
          <p className="text-background/60 text-lg max-w-2xl mx-auto">
            Let's talk about product strategy, AI-powered software, or
            building products that customers love
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const Wrapper = link.href ? motion.a : motion.div;
            const wrapperProps = link.href
              ? {
                  href: link.href,
                  target: link.href.startsWith("http") ? "_blank" : undefined,
                  rel: link.href.startsWith("http") ? "noopener noreferrer" : undefined,
                }
              : {};

            return (
              <Wrapper
                key={link.label}
                {...wrapperProps}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={link.href ? { y: -5, scale: 1.02 } : {}}
                className={`p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 ${
                  link.href ? "cursor-pointer group" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-background/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-background" />
                  </div>
                  {link.href && (
                    <ArrowUpRight className="w-5 h-5 text-background/50 group-hover:text-background transition-colors" />
                  )}
                </div>
                <h3 className="text-sm font-medium text-background/60 mb-1">
                  {link.label}
                </h3>
                <p className="text-background font-medium text-sm break-all">
                  {link.value}
                </p>
              </Wrapper>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-background/20 text-center"
        >
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
