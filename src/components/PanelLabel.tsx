interface PanelLabelProps {
  panel: string;
  name: string;
}

// Small caps label with a leading filled diamond, e.g. "◆ PANEL ONE · NOW".
// Sits above section headings, vermilion, Fraunces small caps.
export const PanelLabel = ({ panel, name }: PanelLabelProps) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden="true">
        <polygon points="6,0 12,6 6,12 0,6" fill="#C1272D" />
      </svg>
      <span
        className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C1272D]"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        Panel {panel} <span className="mx-1">·</span> {name}
      </span>
      <span className="hidden sm:block h-px w-16 bg-[#C1272D]/40" />
    </div>
  );
};
