"use client";

import { useState } from "react";

export function RevealEmail({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="text-[clamp(1.25rem,3.5vw,2.5rem)] tracking-tight text-muted transition hover:text-foreground"
      >
        Reveal email address
      </button>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className="text-[clamp(1.25rem,3.5vw,2.5rem)] tracking-tight underline decoration-1 underline-offset-8 transition hover:text-accent"
    >
      {email}
    </a>
  );
}
