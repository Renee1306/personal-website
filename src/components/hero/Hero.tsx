"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { HeroBackdrop } from "./HeroBackdrop";
import { Portrait } from "./Portrait";
import { BackdropPicker } from "./BackdropPicker";
import { site, stats, type PortraitBackdropKey } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const [backdropKey, setBackdropKey] = useState<PortraitBackdropKey>(site.portraitBackdrop);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      // Readers who ask for reduced motion get a static hero.
      if (reduceMotion) return;
      // Coarse pointers (touch) would drag the parallax around while scrolling.
      if (event.pointerType !== "mouse") return;
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return;
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    },
    [pointerX, pointerY, reduceMotion],
  );

  const handlePointerLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <>
      <motion.section
        id="hero"
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative isolate flex min-h-dvh flex-col overflow-hidden"
      >
        <HeroBackdrop pointerX={pointerX} pointerY={pointerY} />

        {/* Top bar */}
        <div className="relative z-10 flex items-start justify-between gap-6 px-6 py-6 md:px-10">
          <div>
            <p className="text-lg tracking-tight">{site.name}</p>
            <p className="text-sm text-muted">{site.tagline}</p>
          </div>

          <nav className="flex items-center gap-5">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hidden text-sm transition hover:text-accent sm:block"
              >
                {social.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm shadow-sm ring-1 ring-hairline transition hover:bg-foreground hover:text-background"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </a>
          </nav>
        </div>

        {/* Portrait */}
        <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-6">
          <Portrait pointerX={pointerX} pointerY={pointerY} backdropKey={backdropKey} />
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex flex-col gap-8 px-6 pb-8 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-4">
            <a
              href="#about"
              aria-label="Scroll to about"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-hairline transition hover:bg-foreground hover:text-background"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">{site.metaDescription}</p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-3">
                <span className="text-3xl tracking-tight md:text-4xl">{stat.value}</span>
                <span className="text-sm leading-tight text-muted">
                  {stat.label.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        <BackdropPicker value={backdropKey} onChange={setBackdropKey} />
      </motion.section>
    </>
  );
}
