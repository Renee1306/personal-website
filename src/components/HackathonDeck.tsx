"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Hackathon } from "@/content/site";

const SPRING = { type: "spring" as const, stiffness: 240, damping: 28 };

export function HackathonDeck({ items }: { items: Hackathon[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div>
      {/* The fanned deck. Each card is offset from the active one, so selecting a
          card re-fans the whole spread around it. The fan is wider than the
          viewport on purpose, so it has to clip rather than extend the page. */}
      <div className="relative h-[22rem] select-none overflow-hidden sm:h-[26rem]">
        {items.map((item, i) => {
          const offset = i - activeIndex;
          const isActive = offset === 0;
          const distance = Math.abs(offset);

          return (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${item.title} — ${item.award}`}
              aria-pressed={isActive}
              className="absolute left-1/2 top-6 h-64 w-44 origin-bottom cursor-pointer rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:h-80 sm:w-56"
              initial={false}
              animate={{
                // Fan tightens on narrow screens so neighbouring cards stay on-screen.
                x: `calc(-50% + ${offset} * clamp(24px, 6vw, 62px))`,
                y: isActive ? -18 : distance * 10,
                rotate: offset * 7,
                scale: isActive ? 1 : 1 - Math.min(distance, 4) * 0.05,
                opacity: distance > 4 ? 0 : 1,
                zIndex: items.length - distance,
              }}
              whileHover={isActive ? undefined : { y: distance * 10 - 14 }}
              transition={SPRING}
              style={{ zIndex: items.length - distance }}
            >
              <span
                className={`relative block h-full w-full overflow-hidden rounded-3xl ring-1 transition-shadow ${
                  isActive ? "shadow-2xl ring-foreground/25" : "shadow-lg ring-hairline"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 11rem, 14rem"
                  className="object-cover"
                />
                {/* Legibility scrim for the caption */}
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <span className="absolute inset-x-3 bottom-3 block text-left">
                  <span className="block text-[10px] uppercase tracking-widest text-white/75">
                    {item.year}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-tight text-white">
                    {item.award}
                  </span>
                </span>

                {!isActive && <span className="absolute inset-0 bg-background/25" />}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Details for the selected card */}
      <motion.div
        key={active.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-10 max-w-2xl text-center"
        aria-live="polite"
      >
        <p className="text-sm text-accent">{active.award}</p>
        <h3 className="mt-2 text-2xl tracking-tight md:text-3xl">{active.title}</h3>
        <p className="mt-1 text-sm text-muted">{active.year}</p>

        {active.blurb && (
          <p className="mt-5 leading-relaxed text-muted">{active.blurb}</p>
        )}

        {active.stack && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {active.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Dots double as a compact control on touch screens */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${item.title}`}
            aria-pressed={i === activeIndex}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
