"use client";

import { useState } from "react";

/**
 * Slide-to-reveal email control. Closed, the knob sits on the left next to a
 * muted prompt; revealed, the track fills and the knob slides to the right with
 * the address in its place. The knob is the control, so the address itself stays
 * a plain mailto link rather than a link nested inside a button.
 */
export function RevealEmail({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      data-revealed={revealed ? "true" : "false"}
      className={`relative h-24 w-full max-w-2xl rounded-full border p-2 transition-colors duration-500 sm:h-28 ${
        revealed ? "border-reveal bg-reveal" : "border-hairline bg-surface"
      }`}
    >
      {/* Prompt / address. Padding flips to the side the knob is not on. */}
      <div
        className={`absolute inset-0 flex items-center transition-[padding] duration-500 ${
          revealed ? "pl-8 pr-28 sm:pl-10 sm:pr-32" : "pl-28 pr-8 sm:pl-32 sm:pr-10"
        }`}
      >
        {revealed ? (
          <a
            href={`mailto:${email}`}
            className="truncate text-[clamp(1.1rem,3.4vw,2rem)] tracking-tight text-white underline-offset-8 hover:underline"
          >
            {email}
          </a>
        ) : (
          <span className="text-lg leading-tight text-muted">
            Reveal
            <span className="block">email address</span>
          </span>
        )}
      </div>

      {/* Knob */}
      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        aria-expanded={revealed}
        aria-label={revealed ? "Hide email address" : "Reveal email address"}
        className={`absolute top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-hairline transition-[left] duration-500 ease-out hover:bg-foreground hover:text-background sm:h-24 sm:w-24 ${
          // Underscores are Tailwind's escape for the spaces calc() requires
          // around its operator; calc(100%-5.5rem) is invalid CSS.
          revealed ? "left-[calc(100%_-_5.5rem)] sm:left-[calc(100%_-_6.5rem)]" : "left-2"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 transition-transform duration-500 ${revealed ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
