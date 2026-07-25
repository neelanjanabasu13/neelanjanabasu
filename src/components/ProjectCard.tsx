import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";
import type { Project } from "./AIBuiltSection";

interface ProjectCardProps {
  item: Project;
  index?: number;
}

export const ProjectCard = ({ item, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-foreground/20 transition-all flex flex-col"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          {item.award && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime-300/80 text-foreground text-xs font-medium">
              <Trophy className="w-3.5 h-3.5" />
              {item.award}
            </div>
          )}
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium ${
              item.award ? "" : "ml-auto"
            }`}
          >
            {item.platform}
          </span>
        </div>
        <h4 className="text-lg font-medium text-foreground mb-2 font-serif group-hover:text-foreground/80 transition-colors">
          {item.title}
        </h4>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {item.hook}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {item.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              {link.label}
              {link.icon === "github" ? (
                <Github className="w-3.5 h-3.5" />
              ) : (
                <ExternalLink className="w-3.5 h-3.5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
