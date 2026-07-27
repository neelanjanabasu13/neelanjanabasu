// Madhubani-style border bands. Each variant is drawn as a repeating inline SVG
// tile bounded top and bottom by two thin contour lines.

const STROKE = "#1A1A18";
const SW = 1.25;

type Variant = "lotus" | "wave" | "fish" | "peacock" | "zigzag" | "dotline";

interface SectionDividerProps {
  variant: Variant;
}

const tileWidths: Record<Variant, number> = {
  lotus: 60,
  wave: 80,
  fish: 90,
  peacock: 50,
  zigzag: 40,
  dotline: 30,
};

const HEIGHT = 44;

const Tile = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case "lotus":
      return (
        <>
          {/* stem/leaves baseline */}
          <path
            d="M0 38 L60 38"
            stroke={STROKE}
            strokeWidth={SW}
            fill="none"
          />
          {/* left leaf */}
          <path
            d="M6 38 C 8 30, 18 30, 20 38 Z"
            fill="#5FA83C"
            stroke={STROKE}
            strokeWidth={SW}
          />
          {/* right leaf */}
          <path
            d="M40 38 C 42 30, 52 30, 54 38 Z"
            fill="#3F6B2F"
            stroke={STROKE}
            strokeWidth={SW}
          />
          {/* lotus bud */}
          <path
            d="M22 32 C 18 22, 24 12, 30 8 C 36 12, 42 22, 38 32 Z"
            fill="#E38FA8"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <path
            d="M26 30 C 24 22, 28 14, 30 10 C 32 14, 36 22, 34 30 Z"
            fill="#C1272D"
            stroke={STROKE}
            strokeWidth={SW}
          />
        </>
      );
    case "wave":
      return (
        <>
          {/* upper wave */}
          <path
            d="M0 18 C 20 4, 20 32, 40 18 C 60 4, 60 32, 80 18"
            stroke={STROKE}
            strokeWidth={SW}
            fill="none"
          />
          {/* lower wave, mirrored */}
          <path
            d="M0 26 C 20 40, 20 12, 40 26 C 60 40, 60 12, 80 26"
            stroke={STROKE}
            strokeWidth={SW}
            fill="none"
          />
          {/* amber dots in the loops */}
          <circle cx="20" cy="22" r="2.4" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="60" cy="22" r="2.4" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
          {/* tiny hatch marks along baseline */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M${5 + i * 10} 36 L ${5 + i * 10} 40`}
              stroke={STROKE}
              strokeWidth={SW}
            />
          ))}
        </>
      );
    case "fish":
      return (
        <>
          {/* fish facing right */}
          <path
            d="M6 22 C 12 12, 34 12, 40 22 C 34 32, 12 32, 6 22 Z"
            fill="#1B6E86"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <path
            d="M6 22 L -2 16 L 0 22 L -2 28 Z"
            fill="#2F8FBF"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <circle cx="34" cy="20" r="1.4" fill={STROKE} />
          {/* dot cluster */}
          <circle cx="48" cy="18" r="1.3" fill="#C1272D" />
          <circle cx="52" cy="22" r="1.3" fill="#E8A33D" />
          <circle cx="48" cy="26" r="1.3" fill="#C1272D" />
          {/* fish facing left */}
          <path
            d="M84 22 C 78 12, 62 12, 56 22 C 62 32, 78 32, 84 22 Z"
            fill="#3F6B2F"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <path
            d="M84 22 L 92 16 L 90 22 L 92 28 Z"
            fill="#5FA83C"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <circle cx="62" cy="20" r="1.4" fill={STROKE} />
        </>
      );
    case "peacock":
      return (
        <>
          {/* feather shaft */}
          <path d="M25 40 L 25 12" stroke={STROKE} strokeWidth={SW} />
          {/* feather barbs */}
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <path
                d={`M25 ${14 + i * 4} L 18 ${12 + i * 4}`}
                stroke={STROKE}
                strokeWidth={SW * 0.7}
              />
              <path
                d={`M25 ${14 + i * 4} L 32 ${12 + i * 4}`}
                stroke={STROKE}
                strokeWidth={SW * 0.7}
              />
            </g>
          ))}
          {/* eye */}
          <ellipse
            cx="25"
            cy="18"
            rx="8"
            ry="6"
            fill="#1B6E86"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <circle cx="25" cy="18" r="3.2" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="25" cy="18" r="1.3" fill={STROKE} />
        </>
      );
    case "zigzag":
      return (
        <>
          {/* two triangles filling the tile */}
          <polygon
            points="0,38 20,10 40,38"
            fill="#1B6E86"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <polygon
            points="8,38 20,20 32,38"
            fill="#C1272D"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <circle cx="20" cy="38" r="1.5" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
        </>
      );
    case "dotline":
      return (
        <>
          {/* vertical strokes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <path
              key={i}
              d={`M${4 + i * 5} 12 L ${4 + i * 5} 34`}
              stroke={STROKE}
              strokeWidth={SW}
            />
          ))}
          {/* dot cluster */}
          <circle cx="26" cy="16" r="1.4" fill={STROKE} />
          <circle cx="26" cy="22" r="1.8" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="26" cy="30" r="1.4" fill={STROKE} />
        </>
      );
  }
};

export const SectionDivider = ({ variant }: SectionDividerProps) => {
  const tw = tileWidths[variant];
  const patternId = `band-${variant}`;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="relative w-full my-4 md:my-6 overflow-hidden"
      style={{ height: HEIGHT }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 ${tw} ${HEIGHT}`}
        width="100%"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={tw}
            height={HEIGHT}
            patternUnits="userSpaceOnUse"
          >
            <Tile variant={variant} />
          </pattern>
        </defs>
        {/* top and bottom contour rails */}
        <line x1="0" x2={tw} y1="4" y2="4" stroke={STROKE} strokeWidth={SW} />
        <line x1="0" x2={tw} y1={HEIGHT - 4} y2={HEIGHT - 4} stroke={STROKE} strokeWidth={SW} />
        <rect width="100%" height={HEIGHT} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};
