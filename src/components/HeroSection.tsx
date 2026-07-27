import { motion } from "framer-motion";
import { MapPin, Download, Linkedin, Mail, ChevronDown, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { resumeData } from "@/data/resumeData";
import profilePhoto from "@/assets/profile-photo.png";
import resumePdf from "@/assets/Neelanjana_Basu.pdf.asset.json";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-background overflow-hidden">
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

      <div className="relative z-10 section-container flex flex-col justify-center py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <img
              src={profilePhoto}
              alt={resumeData.personal.name}
              className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-border/50 shadow-lg"
              loading="eager"
              width={112}
              height={112}
            />
          </motion.div>

          {/* Main heading with italic serif styling */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground mb-4 leading-tight font-serif"
          >
            {resumeData.personal.name.split(" ")[0]}{" "}
            <span className="italic">{resumeData.personal.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-2xl sm:text-3xl font-medium text-foreground mb-4"
          >
            I build AI products end to end.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            Ten years in product before that, most of it at Amazon, most recently Senior Product Manager on Add to Cart in Search. I like problems where nobody has agreed on the question yet.
          </motion.p>

          {/* Availability signal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base text-foreground/80 max-w-2xl mx-auto mb-8"
          >
            Open to AI product roles. Permanently curious, reliably specific.
          </motion.p>

          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <a
              href="#ai-products"
              className="text-foreground font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              What I am building now
            </a>
            <a
              href="#portfolio"
              className="text-foreground font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              What I built at Amazon
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex justify-center gap-4 mb-16"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/neelanjanabasu13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Neelanjana on GitHub"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Neelanjana on LinkedIn"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://neelanjana.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Neelanjana on Substack"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>Substack</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  aria-label="Email Neelanjana"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={resumePdf.url}
                  download="Neelanjana_Basu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Neelanjana's resume"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Download resume</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  aria-label={`Location: ${resumeData.personal.location}`}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <MapPin className="w-4 h-4" />
                  {resumeData.personal.location}
                </span>
              </TooltipTrigger>
              <TooltipContent>{resumeData.personal.location}</TooltipContent>
            </Tooltip>
          </motion.div>

          {/* Stats row - minimal style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
            transition={{ delay: 0.9 }}
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
