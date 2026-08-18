"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useSpring, useTransform, type MotionValue } from "framer-motion";
import { portraitBackdrops, site, type PortraitBackdropKey } from "@/content/site";

const SPRING = { stiffness: 110, damping: 18, mass: 0.6 };

export function Portrait({
  pointerX,
  pointerY,
  backdropKey,
}: {
  // Normalised pointer position, -0.5 → 0.5 from the centre of the hero.
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  backdropKey: PortraitBackdropKey;
}) {
  const backdrop = portraitBackdrops[backdropKey];
  const ownBackground = site.portraitHasOwnBackground;

  // The frame tilts toward the cursor; the photo inside drifts slightly further,
  // which is what sells the depth.
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [9, -9]), SPRING);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [-7, 7]), SPRING);
  // An image with its own background fills the frame, so it can only drift a little
  // before the edge of the artwork would show.
  const drift = ownBackground ? 7 : 18;
  const shiftX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-drift, drift]), SPRING);
  const shiftY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-drift * 0.7, drift * 0.7]), SPRING);
  const glowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [30, 70]), SPRING);
  const glowY = useSpring(useTransform(pointerY, [-0.5, 0.5], [25, 75]), SPRING);

  const glowPosition = useMotionTemplate`${glowX}% ${glowY}%`;

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="relative aspect-[3/4] w-[min(78vw,26rem)] [transform-style:preserve-3d]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {ownBackground ? (
          // The artwork supplies the background: scale it up slightly so the drift
          // never exposes an edge, and let it cover the whole oval.
          <motion.div style={{ x: shiftX, y: shiftY }} className="absolute -inset-[6%]">
            <Image
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(max-width: 768px) 78vw, 26rem"
              className="object-cover object-top"
            />
          </motion.div>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(160deg, ${backdrop.from}, ${backdrop.to})` }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(58% 45% at var(--glow-pos), ${backdrop.glow}, transparent 70%)`,
                ["--glow-pos" as string]: glowPosition,
                opacity: 0.75,
              }}
            />
            <motion.div style={{ x: shiftX, y: shiftY }} className="absolute inset-0">
              <Image
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 768px) 78vw, 26rem"
                className="scale-[1.04] object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}
