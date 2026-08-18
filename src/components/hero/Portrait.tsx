"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionTemplate, useSpring, useTransform, type MotionValue } from "framer-motion";
import { portraitBackdrops, site, type PortraitBackdropKey } from "@/content/site";

const SPRING = { stiffness: 110, damping: 18, mass: 0.6 };

// Matches the component's own lg (1024px) breakpoint. The desktop slot is
// generous on purpose: the frame is height-driven up to 48rem tall there, and
// an oversized request just wastes a little bandwidth — an undersized one
// upscales and looks soft, which is the failure that actually matters here.
const PORTRAIT_SIZES = "(max-width: 1023px) 72vw, 44rem";

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
  const [hovered, setHovered] = useState(false);

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
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      // Touch has no hover, so a tap toggles the second portrait instead.
      onClick={() => setHovered((v) => !v)}
      // Width-driven on phones, where it sits in flow above the name. From lg up
      // it is absolutely centred, so height can be generous without shifting the
      // type below it.
      className="relative aspect-[3/4] w-[min(72vw,20rem)] [transform-style:preserve-3d] lg:h-[min(74vh,48rem)] lg:w-auto"
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
              quality={90}
              sizes={PORTRAIT_SIZES}
              className="object-cover object-top"
            />

            {site.portraitHover && (
              // Plain CSS crossfade — cheaper than a motion layer for a fade, and
              // the class flip makes the hover state inspectable.
              <div
                data-portrait-hover={hovered ? "on" : "off"}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={site.portraitHover}
                  alt=""
                  aria-hidden
                  fill
                  quality={90}
                  sizes={PORTRAIT_SIZES}
                  className="object-cover object-top"
                />
              </div>
            )}
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
                quality={90}
                sizes={PORTRAIT_SIZES}
                className="scale-[1.04] object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}
