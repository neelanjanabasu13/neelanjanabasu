import { motion } from "framer-motion";
import { MapPin, Download, Linkedin, Mail, ChevronDown } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export const HeroSection = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-coral-warm/15 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-teal-light/10 blur-3xl"
        />
        {/* Additional glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-amber-glow/10 blur-3xl" />
      </div>

      <div className="relative z-10 section-container flex flex-col justify-center min-h-screen py-20">
        <div className="max-w-4xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium mb-8 uppercase tracking-widest"
          >
            <MapPin className="w-4 h-4" />
            {resumeData.personal.location}
          </motion.div>

          {/* Main heading with italic flair */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display text-primary-foreground mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="italic text-coral-warm">{resumeData.personal.name.split(" ")[0]}</span>
            <span className="block mt-2">{resumeData.personal.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl text-primary-foreground/90 font-display italic mb-6"
          >
            {resumeData.personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            {resumeData.personal.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="/Neelanjana_Basu.pdf"
              download
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-full text-accent-foreground font-semibold transition-transform duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href={`mailto:${resumeData.personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>

          {/* Stats with bold styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {resumeData.highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="text-3xl sm:text-4xl font-display italic text-coral-warm mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToExperience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2 } }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
};
