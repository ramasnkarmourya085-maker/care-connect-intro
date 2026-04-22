import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-border bg-secondary/60 backdrop-blur transition-colors hover:border-primary/50 ${className}`}
    >
      <span
        className={`absolute top-1 left-1 grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform duration-300 ease-out ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      <Sun className={`absolute left-2 h-4 w-4 transition-opacity ${isDark ? "opacity-30" : "opacity-0"}`} />
      <Moon className={`absolute right-2 h-4 w-4 transition-opacity ${isDark ? "opacity-0" : "opacity-30"}`} />
    </button>
  );
};

export default ThemeToggle;
