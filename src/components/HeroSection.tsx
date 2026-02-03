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
          {/* Location badge - pill style with dot indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {resumeData.personal.title}
          </motion.div>

          {/* Main heading with italic serif styling */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-tight font-serif"
          >
            {resumeData.personal.name.split(" ")[0]}{" "}
            <span className="italic">{resumeData.personal.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {resumeData.personal.summary}
          </motion.p>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-10"
          >
            <p className="text-foreground/80 font-serif italic text-lg">
              "Turning complex challenges into elegant product solutions — with{" "}
              <span className="bg-amber-100/80 px-1 rounded">data-driven insights</span> and user-first thinking."
            </p>
          </motion.div>

          {/* CTA Buttons - filled + outline style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              Start Exploring
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>

            <a
              href="/Neelanjana_Basu.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border bg-card/50 text-foreground font-medium hover:bg-card transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex justify-center gap-4 mb-16"
          >

            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              {resumeData.personal.location}
            </span>
          </motion.div>

          {/* Stats row - minimal style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {resumeData.highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <ChevronDown className="w-5 h-5 mx-auto mt-2 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
