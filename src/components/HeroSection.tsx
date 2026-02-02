import { motion } from "framer-motion";
import { MapPin, Download, Linkedin, Mail, ChevronDown } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export const HeroSection = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden">
      {/* Soft animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-300/30 to-purple-400/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-300/30 to-teal-400/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-200/20 to-pink-300/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 section-container flex flex-col justify-center min-h-screen py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge - pill style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-lg text-muted-foreground text-sm font-semibold mb-8"
          >
            <MapPin className="w-4 h-4 text-primary" />
            {resumeData.personal.location}
          </motion.div>

          {/* Main heading with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{resumeData.personal.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground/80 mb-6"
          >
            {resumeData.personal.name.split(" ").slice(1).join(" ")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl gradient-text font-bold mb-6"
          >
            {resumeData.personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {resumeData.personal.summary}
          </motion.p>

          {/* CTA Buttons - gradient style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="/Neelanjana_Basu.pdf"
              download
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 text-lg transition-transform duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white shadow-lg text-foreground font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              LinkedIn
            </a>

            <a
              href={`mailto:${resumeData.personal.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white shadow-lg text-foreground font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <Mail className="w-5 h-5 text-primary" />
              Get in Touch
            </a>
          </motion.div>

          {/* Stats in cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {resumeData.highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
};
