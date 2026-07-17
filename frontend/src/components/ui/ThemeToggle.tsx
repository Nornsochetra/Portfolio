"use client";

import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // ignore write failures (e.g. private browsing)
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className={
        "relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-all duration-200 hover:bg-slate-900/10 active:scale-90 dark:text-slate-200 dark:hover:bg-white/10 " +
        className
      }
    >
      <span className="absolute rotate-0 scale-100 opacity-100 transition-all duration-500 dark:-rotate-90 dark:scale-50 dark:opacity-0">
        <Sun size={20} />
      </span>
      <span className="absolute rotate-90 scale-50 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100">
        <Moon size={20} />
      </span>
    </button>
  );
}
