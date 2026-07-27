import { useEffect, useRef, useState } from "react";

// One-shot IntersectionObserver hook. Adds `in-view` state once the element
// enters view and never reverts. Respects prefers-reduced-motion by starting
// already in-view.
export function useDrawIn<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [inView, setInView] = useState<boolean>(prefersReducedMotion);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);

  return { ref, inView } as const;
}
