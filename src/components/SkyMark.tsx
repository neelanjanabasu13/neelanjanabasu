import { useEffect, useState } from "react";
import { Sun, Moon } from "@/assets/motifs/Motifs";

// Renders a Sun during local daytime hours (6:00–18:59) and a Moon otherwise.
// Read the clock on mount only, keep it cheap and quiet.
export const SkyMark = ({ size = 28, className = "" }: { size?: number; className?: string }) => {
  const [isDay, setIsDay] = useState<boolean | null>(null);

  useEffect(() => {
    const h = new Date().getHours();
    setIsDay(h >= 6 && h < 19);
  }, []);

  if (isDay === null) return null;
  const label = isDay ? "Daytime where you are" : "Nighttime where you are";
  return (
    <span role="img" aria-label={label} title={label} className={className}>
      {isDay ? <Sun size={size} /> : <Moon size={size} />}
    </span>
  );
};
