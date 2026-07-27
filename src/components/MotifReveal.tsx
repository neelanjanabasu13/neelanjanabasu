import { ReactNode } from "react";
import { useDrawIn } from "@/hooks/useDrawIn";

// Wraps a motif so its stroke draws in first, then its fills fade in.
// The animation runs exactly once per element (Intersection Observer disconnects
// after first entry). Styling lives in index.css under `.motif-reveal`.
export const MotifReveal = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useDrawIn<HTMLSpanElement>(0.4);
  return (
    <span
      ref={ref}
      className={`motif-reveal ${inView ? "in-view" : ""} ${className}`.trim()}
    >
      {children}
    </span>
  );
};
