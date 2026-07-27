import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "ai-products", label: "What I'm building" },
  { id: "portfolio", label: "What I built at Amazon" },
  { id: "experience", label: "Experience" },
  { id: "work-with-me", label: "References" },
  { id: "guestbook", label: "Guestbook" },
];

export const SectionRail = () => {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-auto fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            className="group block w-3 h-3 relative"
          >
            <svg viewBox="0 0 12 12" className="w-3 h-3">
              <polygon
                points="6,0 12,6 6,12 0,6"
                fill={isActive ? "#C1272D" : "none"}
                stroke={isActive ? "#C1272D" : "#E8A33D"}
                strokeWidth="1.5"
              />
            </svg>
          </a>
        );
      })}
    </nav>
  );
};
