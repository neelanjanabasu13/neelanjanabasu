import { motion } from "framer-motion";
import { MapPin, Download, Linkedin, Mail, ChevronDown, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { resumeData } from "@/data/resumeData";
import profilePhoto from "@/assets/profile-photo.png";
import resumePdf from "@/assets/Neelanjana_Basu.pdf.asset.json";
import { LotusLeaves, VineTendril, Fish, TreeOfLife } from "@/assets/motifs/Motifs";
import { MotifReveal } from "@/components/MotifReveal";
import { SkyMark } from "@/components/SkyMark";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-background overflow-hidden">
      {/* Sky mark: sun by day, moon by night, top-left corner */}
      <div className="absolute top-20 left-6 sm:top-24 sm:left-14 z-[60] pointer-events-auto">
        <SkyMark size={30} />
      </div>

      {/* Corner cluster: top-right */}
      <div className="absolute top-6 right-4 sm:top-10 sm:right-10 opacity-90">
        <MotifReveal><TreeOfLife size={56} /></MotifReveal>
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
              className="w-28 h-28 rounded-full object-cover mx-auto ring-2 ring-border shadow-lg"
              loading="eager"
              width={112}
              height={112}
            />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative inline-block mb-4"
          >
            <div className="hidden sm:block absolute -left-10 sm:-left-14 lg:-left-20 top-1/2 -translate-y-1/2 opacity-90">
              <MotifReveal><LotusLeaves size={36} /></MotifReveal>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground leading-tight">
              {resumeData.personal.name.split(" ")[0]}{" "}
              <span className="italic">{resumeData.personal.name.split(" ").slice(1).join(" ")}</span>
            </h1>
          </motion.div>


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
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 text-justify"
          >
            Ten years in product before that, most of it at Amazon, most recently Senior Product Manager on Add to Cart in Search. I like problems where nobody has agreed on the question yet. Permanently curious, reliably specific. Open to AI product roles.
            <span className="inline-block align-middle ml-2">
              <Fish size={20} />
            </span>
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

          {/* Divider as motif */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
            className="flex justify-center mb-10 opacity-80"
          >
            <VineTendril size={18} />
          </motion.div>

          {/* Social links row */}
          <motion.div
            id="contact"
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
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
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
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
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
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
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
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
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
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
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
                  className="flex items-center gap-1.5 text-sm text-foreground/80"
                >
                  <MapPin className="w-4 h-4" />
                  {resumeData.personal.location}
                </span>
              </TooltipTrigger>
              <TooltipContent>{resumeData.personal.location}</TooltipContent>
            </Tooltip>
          </motion.div>

          {/* Stats row */}
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
                <div className="text-3xl sm:text-4xl font-medium text-foreground mb-1">
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
