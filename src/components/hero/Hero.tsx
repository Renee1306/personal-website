"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { HeroBackdrop } from "./HeroBackdrop";
import { Portrait } from "./Portrait";
import { BackdropPicker } from "./BackdropPicker";
import { Marquee } from "@/components/Marquee";
import { site, heroMarqueeWord, heroType, type PortraitBackdropKey } from "@/content/site";

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
          {/* The name is set large below, so the top bar only carries the tagline. */}
          <p className="max-w-[10rem] text-sm leading-snug text-muted sm:max-w-none">
            {site.tagline}
          </p>

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

        {/* Portrait flanked by oversized type, over an endless word marquee */}
        <div className="relative flex flex-1 items-center px-6 py-6 md:px-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center">
            <Marquee duration={38} className="w-full">
              {/* Repeated so the loop never shows a gap on wide screens. */}
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="mx-5 whitespace-nowrap text-[clamp(5rem,20vw,17rem)] font-medium leading-none tracking-[-0.04em] text-foreground/[0.07]"
                >
                  {heroMarqueeWord}
                </span>
              ))}
            </Marquee>
          </div>

          <div className="relative z-10 grid w-full items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
            <h1 className="text-[clamp(2.5rem,9vw,6rem)] font-semibold uppercase leading-[0.85] tracking-[-0.045em] lg:justify-self-start">
              <span className="block text-[0.42em] font-medium tracking-[0.06em] text-muted">
                {heroType.lead}
              </span>
              {heroType.name.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <div className="justify-self-center">
              <Portrait pointerX={pointerX} pointerY={pointerY} backdropKey={backdropKey} />
            </div>

            <p className="text-[clamp(1.75rem,5.5vw,3.25rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] lg:justify-self-end lg:text-right">
              {heroType.role.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 px-6 pb-8 md:px-10">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-hairline transition hover:bg-foreground hover:text-background"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <BackdropPicker value={backdropKey} onChange={setBackdropKey} />
      </motion.section>
    </>
  );
}
