"use client";

import { useState } from "react";
import { portraitBackdrops, site, type PortraitBackdropKey } from "@/content/site";

const keys = Object.keys(portraitBackdrops) as PortraitBackdropKey[];

/**
 * Live control for trying portrait backdrops. Renders only during `npm run dev`
 * so it never appears on the deployed site — once you've picked one, set
 * `portraitBackdrop` in src/content/site.ts to make it permanent.
 */
export function BackdropPicker({
  value,
  onChange,
}: {
  value: PortraitBackdropKey;
  onChange: (key: PortraitBackdropKey) => void;
}) {
  const [open, setOpen] = useState(false);

  if (process.env.NODE_ENV !== "development") return null;
  // The backdrop is hidden when the artwork carries its own background, so there
  // would be nothing to preview.
  if (site.portraitHasOwnBackground) return null;

  const isSaved = value === site.portraitBackdrop;

  return (
    <div className="absolute bottom-6 right-6 z-30 hidden lg:block">
      {open ? (
        <div className="w-64 rounded-2xl bg-surface p-4 shadow-lg ring-1 ring-hairline">
          <div className="flex items-center justify-between">
            <p className="text-sm">Portrait backdrop</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close backdrop picker"
              className="text-muted transition hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {keys.map((key) => {
              const backdrop = portraitBackdrops[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onChange(key)}
                  title={backdrop.label}
                  aria-label={backdrop.label}
                  aria-pressed={key === value}
                  className={`h-12 rounded-lg ring-offset-2 ring-offset-surface transition ${
                    key === value ? "ring-2 ring-foreground" : "ring-1 ring-hairline hover:ring-foreground/40"
                  }`}
                  style={{
                    background: `linear-gradient(160deg, ${backdrop.from}, ${backdrop.to})`,
                  }}
                />
              );
            })}
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted">
            {isSaved ? (
              <>Showing the saved backdrop.</>
            ) : (
              <>
                To keep <span className="text-foreground">{value}</span>, set{" "}
                <code className="text-foreground">portraitBackdrop: &quot;{value}&quot;</code> in{" "}
                <code>src/content/site.ts</code>.
              </>
            )}
          </p>

          <p className="mt-2 text-xs text-muted">Dev only — hidden on the live site.</p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm shadow-sm ring-1 ring-hairline transition hover:bg-foreground hover:text-background"
        >
          <span
            className="h-4 w-4 rounded-full ring-1 ring-hairline"
            style={{
              background: `linear-gradient(160deg, ${portraitBackdrops[value].from}, ${portraitBackdrops[value].to})`,
            }}
          />
          Backdrop
        </button>
      )}
    </div>
  );
}
