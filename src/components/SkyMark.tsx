import { Sun, Moon } from "@/assets/motifs/Motifs";
import { useTheme } from "@/context/ThemeContext";

// Sun = light mode, Moon = dark mode. Click to toggle the site theme.
export const SkyMark = ({ size = 28, className = "" }: { size?: number; className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDay = theme === "light";
  const label = isDay ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`bg-transparent border-0 p-0 cursor-pointer inline-flex items-center justify-center transition-transform hover:scale-110 ${className}`.trim()}
    >
      {isDay ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  );
};
