import { useEffect, useState } from "react";
import { Sun, Moon } from "@/assets/motifs/Motifs";

// Shows Sun during local daytime (6:00–18:59) and Moon otherwise.
// Click to toggle for the current session.
export const SkyMark = ({ size = 28, className = "" }: { size?: number; className?: string }) => {
  const [isDay, setIsDay] = useState<boolean | null>(null);

  useEffect(() => {
    const h = new Date().getHours();
    setIsDay(h >= 6 && h < 19);
  }, []);

  if (isDay === null) return null;
  const label = isDay ? "Daytime here, click for moon" : "Nighttime here, click for sun";
  return (
    <button
      type="button"
      onClick={() => setIsDay((v) => !v)}
      aria-label={label}
      title={label}
      className={`bg-transparent border-0 p-0 cursor-pointer inline-flex items-center justify-center transition-transform hover:scale-110 ${className}`.trim()}
    >
      {isDay ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  );
};
