"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_CHANGE_EVENT = "themechange";

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// The inline script in layout.tsx already set the real class before paint, so
// this only matters for the one render React does to match server HTML.
function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
  // Lets every toggle instance on the page (hero bar, section nav) pick up the change.
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

const SIZES = {
  md: { button: "h-11 w-11", icon: "h-4 w-4" },
  sm: { button: "h-9 w-9", icon: "h-3.5 w-3.5" },
};

/**
 * Sun/moon toggle. Reads its state from the DOM class the inline script in
 * layout.tsx already applied (so there's no flash), then lets the visitor
 * override it — the choice is remembered in localStorage ahead of the system
 * preference.
 */
export function ThemeToggle({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { button, icon } = SIZES[size];
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={`Switch to ${next} mode`}
      className={`flex ${button} shrink-0 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-hairline transition hover:bg-foreground hover:text-background ${className}`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="4.5" />
          <path
            d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
