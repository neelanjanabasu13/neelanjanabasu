import { useEffect, useMemo, useRef, useState } from "react";

// A wavy vermilion stem down the left gutter that grows with scroll progress.
// Leaves mark each section; the section currently in view blooms a flower.
// Clicking a leaf/flower scrolls to that section.

const STROKE = "#1A1A18";
const STEM = "#C1272D";
const SW = 1.5;

const SECTIONS: { id: string; name: string }[] = [
  { id: "hero", name: "Top" },
  { id: "ai-products", name: "What I'm building" },
  { id: "portfolio", name: "Amazon projects" },
  { id: "experience", name: "Experience" },
  { id: "work-with-me", name: "Working with me" },
  { id: "education", name: "Education" },
  { id: "guestbook", name: "Guestbook" },
];

// The stem lives in an SVG whose height matches the viewport. Because the SVG
// is fixed, the stem itself doesn't grow visually; instead, dashoffset shrinks
// so more of the drawn contour is revealed as the reader descends.
export const VineScrollbar = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [positions, setPositions] = useState<number[]>([]);
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800,
  );
  const stemRef = useRef<SVGPathElement | null>(null);
  const [stemLen, setStemLen] = useState(0);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Sinuous stem inside a viewBox of 24 wide x 1000 tall. Repeating S-curve.
  const stemPath = useMemo(() => {
    const amp = 6;
    const period = 100;
    const cx = 12;
    let d = `M ${cx} 0`;
    for (let y = 0; y < 1000; y += period) {
      const c1x = cx + amp;
      const c2x = cx - amp;
      d += ` C ${c1x} ${y + period / 3}, ${c2x} ${y + (period * 2) / 3}, ${cx} ${y + period}`;
    }
    return d;
  }, []);

  useEffect(() => {
    if (stemRef.current) {
      setStemLen(stemRef.current.getTotalLength());
    }
  }, [stemPath]);

  useEffect(() => {
    const measure = () => {
      setVh(window.innerHeight);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pos = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el || docH <= 0) return 0;
        return Math.max(0, Math.min(1, el.offsetTop / docH));
      });
      setPositions(pos);
    };
    measure();
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const docH =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = docH > 0 ? window.scrollY / docH : 0;
        setProgress(Math.max(0, Math.min(1, p)));
        // active = last section whose top is above viewport middle
        const mid = window.scrollY + window.innerHeight / 2;
        let idx = 0;
        SECTIONS.forEach(({ id }, i) => {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= mid) idx = i;
        });
        setActive(idx);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  const dashOffset = reducedMotion ? 0 : stemLen * (1 - progress);

  return (
    <nav
      aria-label="Section navigation vine"
      className="pointer-events-none fixed left-0 top-0 z-[6] hidden lg:block"
      style={{ width: 32, height: "100vh" }}
    >
      <svg
        width="32"
        height={vh}
        viewBox={`0 0 24 1000`}
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* faded full stem so the vine has ghost presence */}
        <path
          d={stemPath}
          stroke={STEM}
          strokeOpacity={0.18}
          strokeWidth={SW}
          fill="none"
          strokeLinecap="round"
        />
        {/* revealed stem */}
        <path
          ref={stemRef}
          d={stemPath}
          stroke={STEM}
          strokeWidth={SW}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={stemLen}
          strokeDashoffset={dashOffset}
          style={{ transition: reducedMotion ? "none" : "stroke-dashoffset 120ms linear" }}
        />
      </svg>

      {/* Leaves / flowers */}
      <ul className="absolute inset-0 m-0 p-0 list-none">
        {SECTIONS.map((s, i) => {
          const y = (positions[i] ?? i / (SECTIONS.length - 1)) * vh;
          const reached = progress + 0.005 >= (positions[i] ?? 0);
          const isActive = i === active;
          return (
            <li
              key={s.id}
              className="absolute pointer-events-auto"
              style={{
                top: `${Math.max(6, Math.min(vh - 20, y))}px`,
                left: 0,
                transform: "translateY(-50%)",
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo(s.id)}
                aria-label={`Jump to ${s.name}`}
                title={s.name}
                className="block bg-transparent border-0 p-0 cursor-pointer"
                style={{
                  width: 26,
                  height: 26,
                  opacity: reached ? 1 : 0.25,
                  transform: `scale(${reached ? 1 : 0.7})`,
                  transformOrigin: "left center",
                  transition: "transform 350ms ease-out, opacity 350ms ease-out",
                }}
              >
                {isActive ? <Flower /> : <Leaf side={i % 2 === 0 ? "right" : "left"} />}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Leaf = ({ side }: { side: "left" | "right" }) => (
  <svg viewBox="0 0 26 26" width="26" height="26" aria-hidden="true">
    {side === "right" ? (
      <path
        d="M12 14 C 14 8, 20 6, 24 8 C 22 14, 18 18, 12 14 Z"
        fill="#5FA83C"
        stroke={STROKE}
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M12 14 C 10 8, 4 6, 0 8 C 2 14, 6 18, 12 14 Z"
        fill="#3F6B2F"
        stroke={STROKE}
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
    )}
    <path
      d={side === "right" ? "M12 14 L 22 10" : "M12 14 L 2 10"}
      stroke={STROKE}
      strokeWidth={1}
      fill="none"
    />
  </svg>
);

const Flower = () => (
  <svg viewBox="0 0 26 26" width="26" height="26" aria-hidden="true">
    {Array.from({ length: 6 }).map((_, i) => {
      const a = (i * Math.PI) / 3;
      const cx = 13 + Math.cos(a) * 6;
      const cy = 13 + Math.sin(a) * 6;
      return (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="#E38FA8"
          stroke={STROKE}
          strokeWidth={1.25}
        />
      );
    })}
    <circle cx="13" cy="13" r="3" fill="#E8A33D" stroke={STROKE} strokeWidth={1.25} />
  </svg>
);
