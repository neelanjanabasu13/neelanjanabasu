const fragments = [
  "never leaving any loose ends",
  "one of the most structured PMs I have worked with",
  "her relentless pursuit of customer obsession",
  "her super power is her exceptional writing skills",
  "deeply attuned to the pulse of Amazon and the surrounding world",
  "she never says \"it's not my job\"",
  "always among the first to bring discovery questions",
  "displayed exceptional foresight",
  "an active voice of the customer in all product discussions",
  "always produces high quality deliverables",
  "openly debates ideas to advocate for the customer",
  "never afraid to take challenges outside her comfort zone",
];

export const AmazonPeerTicker = () => {
  const items = [...fragments, ...fragments];

  return (
    <div
      className="py-6 bg-[hsl(var(--navy-deep))] border-y border-border overflow-hidden"
      role="region"
      aria-label="Verbatim Amazon peer review quotes"
    >
      <div className="ticker-track flex whitespace-nowrap animate-ticker will-change-transform hover:[animation-play-state:paused]">
        {items.map((text, index) => (
          <div key={index} className="inline-flex items-center shrink-0 mx-6">
            <span className="text-base sm:text-lg font-medium text-white">
              {text}
            </span>
            <span
              className="ml-6 inline-block w-2 h-2 rotate-45 bg-[hsl(var(--amber-glow))]"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-white/70 mt-4">
        Verbatim, from anonymous Amazon peer reviews 2023–2025
      </p>
    </div>
  );
};
