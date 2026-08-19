"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Photo = { src: string; alt: string; caption: string };

// Each card in the stack sits at a slightly different angle and offset so the
// pile reads as physical polaroids rather than a stack of identical rectangles.
const RESTING = [
  { rotate: -4, x: -10, y: 6 },
  { rotate: 5, x: 12, y: -4 },
  { rotate: -1, x: 2, y: 10 },
];

export function PhotoStack({ photos, label }: { photos: Photo[]; label: string }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i));

  // Send the top photo to the back so a click walks through the pile.
  const advance = () => setOrder((prev) => [...prev.slice(1), prev[0]]);

  const single = photos.length === 1;
  const topIndex = order[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={single ? undefined : advance}
        aria-label={
          single ? undefined : `${label}: show next photo (${photos.length} in total)`
        }
        disabled={single}
        className="group relative block aspect-[4/3] w-full cursor-pointer disabled:cursor-default"
      >
        {order.map((photoIndex, position) => {
          const photo = photos[photoIndex];
          const rest = RESTING[position % RESTING.length];
          // Depth: cards further back sit smaller and dimmer.
          const depth = position / Math.max(photos.length, 1);
          return (
            <motion.span
              key={photo.src}
              className="absolute inset-0 block overflow-hidden rounded-2xl bg-surface p-2 shadow-lg ring-1 ring-hairline"
              initial={false}
              animate={{
                rotate: rest.rotate,
                x: rest.x,
                y: rest.y,
                scale: 1 - depth * 0.05,
                opacity: position === 0 ? 1 : 0.85,
                zIndex: photos.length - position,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              style={{ zIndex: photos.length - position }}
            >
              <span className="relative block h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={90}
                  // The desktop column is roughly half of a max-w-7xl section, so
                  // 420px undersold it — a smaller image than actually needed was
                  // getting upscaled to fill the box.
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </span>
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted backdrop-blur">
                {photo.caption}
              </span>
            </motion.span>
          );
        })}
      </button>

      {!single && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-xs text-muted">Click the photo to flip through</span>
          <span className="flex gap-1.5" aria-hidden>
            {photos.map((photo, i) => (
              <span
                key={photo.src}
                className={`h-1.5 rounded-full transition-all ${
                  i === topIndex ? "w-5 bg-foreground" : "w-1.5 bg-foreground/25"
                }`}
              />
            ))}
          </span>
        </div>
      )}
    </div>
  );
}
