import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "./AIBuiltSection";

const ITEMS_PER_PAGE = 4;

interface AICarouselProps {
  projects: Project[];
}

export const AICarousel = ({ projects }: AICarouselProps) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const nextPage = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages - 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => Math.max(p - 1, 0));
  }, []);

  const currentProjects = projects.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  if (totalPages <= 0) return null;

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {currentProjects.map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={page === 0}
          aria-label="Previous projects"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
            page === 0
              ? "invisible pointer-events-none"
              : "text-foreground hover:text-foreground/70"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          back
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to project page ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === page
                  ? "bg-foreground w-4"
                  : "w-2 bg-foreground/25 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={page === totalPages - 1}
          aria-label="Next projects"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
            page === totalPages - 1
              ? "invisible pointer-events-none"
              : "text-foreground hover:text-foreground/70"
          }`}
        >
          more projects
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
