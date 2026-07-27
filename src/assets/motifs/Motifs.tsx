// Hand-drawn folk-art motifs. Deliberately imperfect curves, single black contour.
// All fills come from the brief palette; stroke is always contour black #1A1A18.

import type { SVGProps } from "react";

const STROKE = "#1A1A18";
const SW = 1.25;

type Props = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 40 40",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
});

// Symmetric tiered Madhubani lotus: two base leaves, five outer petals,
// three inner petals, a central bud with stamens.
export const LotusLeaves = ({ size = 32, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    {/* base leaves */}
    <path d="M4 36 C 6 30, 12 30, 14 34 C 12 37, 6 38, 4 36 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
    <path d="M36 36 C 34 30, 28 30, 26 34 C 28 37, 34 38, 36 36 Z" fill="#5FA83C" stroke={STROKE} strokeWidth={SW} />

    {/* five outer petals (pink), radiating from base (20,34) */}
    <path d="M20 34 C 8 32, 4 22, 6 14 C 12 18, 18 26, 20 34 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 34 C 12 30, 10 18, 12 10 C 16 16, 20 24, 20 34 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 34 C 18 26, 18 12, 20 6 C 22 12, 22 26, 20 34 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 34 C 28 30, 30 18, 28 10 C 24 16, 20 24, 20 34 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 34 C 32 32, 36 22, 34 14 C 28 18, 22 26, 20 34 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />

    {/* three inner petals (vermilion) */}
    <path d="M20 32 C 15 28, 14 20, 16 14 C 19 18, 20 24, 20 32 Z" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 32 C 19 24, 19 14, 20 10 C 21 14, 21 24, 20 32 Z" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 32 C 25 28, 26 20, 24 14 C 21 18, 20 24, 20 32 Z" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />

    {/* central bud + stamens */}
    <path d="M20 12 C 18 10, 18 6, 20 4 C 22 6, 22 10, 20 12 Z" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
    <circle cx="17" cy="9" r="0.9" fill={STROKE} />
    <circle cx="23" cy="9" r="0.9" fill={STROKE} />
  </svg>
);

export const VineTendril = ({ size = 40, ...rest }: Props) => (
  <svg {...base(size)} viewBox="0 0 120 24" width={size * 3} height={size * 0.6} fill="none" aria-hidden focusable={false} {...rest}>
    <path d="M2 12 C 20 4, 30 20, 50 12 C 70 4, 80 20, 100 12 C 108 9, 114 11, 118 12" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" fill="none" />
    <path d="M18 10 C 20 6, 26 6, 26 10 C 26 13, 20 14, 18 10 Z" fill="#5FA83C" stroke={STROKE} strokeWidth={SW} />
    <path d="M46 15 C 44 19, 50 21, 52 17 C 53 14, 48 12, 46 15 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
    <path d="M74 9 C 76 5, 82 6, 81 10 C 80 13, 74 13, 74 9 Z" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
    <circle cx="102" cy="14" r="2.4" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
  </svg>
);

export const Fish = ({ size = 24, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path d="M6 20 C 10 12, 22 12, 28 20 C 22 28, 10 28, 6 20 Z" fill="#1B6E86" stroke={STROKE} strokeWidth={SW} />
    <path d="M28 20 L 36 14 L 34 20 L 36 26 Z" fill="#2F8FBF" stroke={STROKE} strokeWidth={SW} />
    <path d="M12 20 C 16 17, 22 17, 26 20 C 22 23, 16 23, 12 20 Z" stroke={STROKE} strokeWidth={SW} />
    <circle cx="12" cy="19" r="1.2" fill={STROKE} />
  </svg>
);

export const Peacock = ({ size = 40, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path d="M12 30 C 12 24, 16 22, 18 22 C 18 18, 20 15, 22 15 C 24 15, 24 18, 23 20" fill="#1E3A5F" stroke={STROKE} strokeWidth={SW} />
    <circle cx="23" cy="14" r="1.6" fill="#1E3A5F" stroke={STROKE} strokeWidth={SW} />
    <path d="M24 13 L 27 11" stroke={STROKE} strokeWidth={SW} />
    <path d="M18 22 C 22 14, 30 12, 34 18" stroke="#1B6E86" strokeWidth={SW} fill="none" />
    <path d="M18 22 C 24 18, 32 20, 34 26" stroke="#3F6B2F" strokeWidth={SW} fill="none" />
    <path d="M18 22 C 22 24, 30 26, 32 32" stroke="#E8A33D" strokeWidth={SW} fill="none" />
    <circle cx="33" cy="18" r="1.6" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
    <circle cx="34" cy="26" r="1.6" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
    <circle cx="32" cy="32" r="1.6" fill="#1B6E86" stroke={STROKE} strokeWidth={SW} />
    <path d="M14 30 L 14 34 M 16 30 L 16 34" stroke={STROKE} strokeWidth={SW} />
  </svg>
);

export const LeafTrio = ({ size = 28, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path d="M20 30 L 20 14" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 22 C 14 20, 10 14, 12 8 C 18 10, 22 16, 20 22 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 22 C 26 20, 30 14, 28 8 C 22 10, 18 16, 20 22 Z" fill="#5FA83C" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 30 C 17 28, 15 24, 17 21 C 21 22, 22 27, 20 30 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
  </svg>
);

export const Sun = ({ size = 20, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <circle cx="20" cy="20" r="6" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * Math.PI) / 4;
      const x1 = 20 + Math.cos(a) * 9;
      const y1 = 20 + Math.sin(a) * 9;
      const x2 = 20 + Math.cos(a) * 14;
      const y2 = 20 + Math.sin(a) * 14;
      return <path key={i} d={`M${x1} ${y1} L ${x2} ${y2}`} stroke={STROKE} strokeWidth={SW} />;
    })}
    <path d="M17 20 C 18 21, 22 21, 23 20" stroke={STROKE} strokeWidth={SW} />
  </svg>
);

export const Moon = ({ size = 20, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path
      d="M28 22 A 10 10 0 1 1 18 12 A 8 8 0 1 0 28 22 Z"
      fill="#FAF7F1"
      stroke={STROKE}
      strokeWidth={SW}
    />
    <circle cx="15" cy="20" r="0.9" fill={STROKE} />
    <circle cx="19" cy="26" r="0.7" fill={STROKE} />
  </svg>
);

export const TreeOfLife = ({ size = 48, ...rest }: Props) => (
  <svg {...base(size)} viewBox="0 0 40 56" width={size * 0.85} height={size * 1.2} fill="none" aria-hidden focusable={false} {...rest}>
    <path d="M20 54 C 19 44, 21 34, 20 24" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 38 C 14 34, 10 30, 8 26" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 34 C 26 30, 30 26, 32 22" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 28 C 16 24, 12 22, 10 20" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 26 C 24 22, 28 20, 30 18" stroke={STROKE} strokeWidth={SW} />
    <path d="M6 24 C 8 20, 12 22, 10 26 C 8 27, 5 27, 6 24 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
    <path d="M32 20 C 34 16, 38 18, 36 22 C 34 23, 31 23, 32 20 Z" fill="#5FA83C" stroke={STROKE} strokeWidth={SW} />
    <circle cx="9" cy="18" r="2" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
    <circle cx="30" cy="16" r="2" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
    <circle cx="20" cy="20" r="2.4" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
    <path d="M20 14 C 17 11, 23 11, 20 14 Z" fill="#DC5A2E" stroke={STROKE} strokeWidth={SW} />
    <path d="M4 14 C 6 12, 8 14, 10 12" stroke={STROKE} strokeWidth={SW} fill="none" />
    <path d="M30 10 C 32 8, 34 10, 36 8" stroke={STROKE} strokeWidth={SW} fill="none" />
    <path d="M14 54 C 16 52, 18 52, 20 54 C 22 52, 24 52, 26 54" stroke={STROKE} strokeWidth={SW} />
  </svg>
);
