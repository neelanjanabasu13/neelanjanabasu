// Reusable Madhubani border-band. Same tile vocabulary as SectionDivider,
// exposed at any height so it can trim a plaque, header, or divider.

const STROKE = "#1A1A18";
const SW = 1.25;

export type BandVariant =
  | "lotus"
  | "wave"
  | "fish"
  | "peacock"
  | "zigzag"
  | "dotline";

const tileWidths: Record<BandVariant, number> = {
  lotus: 60,
  wave: 80,
  fish: 90,
  peacock: 50,
  zigzag: 40,
  dotline: 30,
};

const TILE_HEIGHT = 44;

const Tile = ({ variant }: { variant: BandVariant }) => {
  switch (variant) {
    case "lotus":
      return (
        <>
          <path d="M0 38 L60 38" stroke={STROKE} strokeWidth={SW} fill="none" />
          <path d="M6 38 C 8 30, 18 30, 20 38 Z" fill="#5FA83C" stroke={STROKE} strokeWidth={SW} />
          <path d="M40 38 C 42 30, 52 30, 54 38 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
          {/* five outer petals of a small lotus */}
          <path d="M30 36 C 22 34, 20 26, 22 20 C 26 24, 30 30, 30 36 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
          <path d="M30 36 C 26 30, 26 18, 30 12 C 34 18, 34 30, 30 36 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
          <path d="M30 36 C 38 34, 40 26, 38 20 C 34 24, 30 30, 30 36 Z" fill="#E38FA8" stroke={STROKE} strokeWidth={SW} />
          {/* two inner petals */}
          <path d="M30 34 C 27 28, 27 20, 30 16 C 33 20, 33 28, 30 34 Z" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
          {/* bud */}
          <path d="M30 18 C 28.5 16, 28.5 13, 30 12 C 31.5 13, 31.5 16, 30 18 Z" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
        </>
      );
    case "wave":
      return (
        <>
          <path d="M0 18 C 20 4, 20 32, 40 18 C 60 4, 60 32, 80 18" stroke={STROKE} strokeWidth={SW} fill="none" />
          <path d="M0 26 C 20 40, 20 12, 40 26 C 60 40, 60 12, 80 26" stroke={STROKE} strokeWidth={SW} fill="none" />
          <circle cx="20" cy="22" r="2.4" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="60" cy="22" r="2.4" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d={`M${5 + i * 10} 36 L ${5 + i * 10} 40`} stroke={STROKE} strokeWidth={SW} />
          ))}
        </>
      );
    case "fish":
      return (
        <>
          <path d="M6 22 C 12 12, 34 12, 40 22 C 34 32, 12 32, 6 22 Z" fill="#1B6E86" stroke={STROKE} strokeWidth={SW} />
          <path d="M6 22 L -2 16 L 0 22 L -2 28 Z" fill="#2F8FBF" stroke={STROKE} strokeWidth={SW} />
          <circle cx="34" cy="20" r="1.4" fill={STROKE} />
          <circle cx="48" cy="18" r="1.3" fill="#C1272D" />
          <circle cx="52" cy="22" r="1.3" fill="#E8A33D" />
          <circle cx="48" cy="26" r="1.3" fill="#C1272D" />
          <path d="M84 22 C 78 12, 62 12, 56 22 C 62 32, 78 32, 84 22 Z" fill="#3F6B2F" stroke={STROKE} strokeWidth={SW} />
          <path d="M84 22 L 92 16 L 90 22 L 92 28 Z" fill="#5FA83C" stroke={STROKE} strokeWidth={SW} />
          <circle cx="62" cy="20" r="1.4" fill={STROKE} />
        </>
      );
    case "peacock":
      return (
        <>
          <path d="M25 40 L 25 12" stroke={STROKE} strokeWidth={SW} />
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <path d={`M25 ${14 + i * 4} L 18 ${12 + i * 4}`} stroke={STROKE} strokeWidth={SW * 0.7} />
              <path d={`M25 ${14 + i * 4} L 32 ${12 + i * 4}`} stroke={STROKE} strokeWidth={SW * 0.7} />
            </g>
          ))}
          <ellipse cx="25" cy="18" rx="8" ry="6" fill="#1B6E86" stroke={STROKE} strokeWidth={SW} />
          <circle cx="25" cy="18" r="3.2" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="25" cy="18" r="1.3" fill={STROKE} />
        </>
      );
    case "zigzag":
      return (
        <>
          <polygon points="0,38 20,10 40,38" fill="#1B6E86" stroke={STROKE} strokeWidth={SW} />
          <polygon points="8,38 20,20 32,38" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="20" cy="38" r="1.5" fill="#E8A33D" stroke={STROKE} strokeWidth={SW} />
        </>
      );
    case "dotline":
      return (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <path key={i} d={`M${4 + i * 5} 12 L ${4 + i * 5} 34`} stroke={STROKE} strokeWidth={SW} />
          ))}
          <circle cx="26" cy="16" r="1.4" fill={STROKE} />
          <circle cx="26" cy="22" r="1.8" fill="#C1272D" stroke={STROKE} strokeWidth={SW} />
          <circle cx="26" cy="30" r="1.4" fill={STROKE} />
        </>
      );
  }
};

interface Props {
  variant: BandVariant;
  height?: number;
  withRails?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const MotifBand = ({
  variant,
  height = TILE_HEIGHT,
  withRails = true,
  className = "",
  ariaLabel,
}: Props) => {
  const tw = tileWidths[variant];
  const patternId = `mb-${variant}-${height}`;
  return (
    <div
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={`relative w-full overflow-hidden ${className}`.trim()}
      style={{ height }}
    >
      <svg className="block w-full" width="100%" height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} x="0" y="0" width={tw} height={TILE_HEIGHT} patternUnits="userSpaceOnUse">
            <Tile variant={variant} />
          </pattern>
        </defs>
        {withRails && (
          <>
            <line x1="0" x2="100%" y1="4" y2="4" stroke={STROKE} strokeWidth={SW} />
            <line x1="0" x2="100%" y1={height - 4} y2={height - 4} stroke={STROKE} strokeWidth={SW} />
          </>
        )}
        <rect width="100%" height={height} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};
