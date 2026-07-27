// Fixed vertical squiggle rails hugging both viewport edges.
// Draws a continuous wavy vermilion contour line down the page, hidden on mobile.

export const PageEdgeRails = () => {
  // A repeating vertical squiggle: sine-like path with amplitude 6px and period 32px.
  // Tile pattern via SVG pattern element so it fills any viewport height.
  const path =
    "M8 0 C 2 8, 14 16, 8 24 C 2 32, 14 40, 8 48 C 2 56, 14 64, 8 72";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] hidden md:block"
    >
      {/* Left rail */}
      <svg
        className="absolute left-3 top-0 h-full"
        width="16"
        viewBox="0 0 16 72"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="squiggleLeft"
            x="0"
            y="0"
            width="16"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d={path}
              stroke="#C1272D"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="16" height="100%" fill="url(#squiggleLeft)" />
      </svg>

      {/* Right rail */}
      <svg
        className="absolute right-3 top-0 h-full"
        width="16"
        viewBox="0 0 16 72"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="squiggleRight"
            x="0"
            y="0"
            width="16"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d={path}
              stroke="#C1272D"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="16" height="100%" fill="url(#squiggleRight)" />
      </svg>
    </div>
  );
};
