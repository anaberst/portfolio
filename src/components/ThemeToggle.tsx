"use client";

import { useEffect, useState } from "react";

const storageKey = "theme";

type ThemeMode = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const saved = localStorage.getItem(storageKey) as ThemeMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    return saved ?? (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-border/60 bg-surface/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-text transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      aria-pressed={theme === "dark"}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
