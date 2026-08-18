"use client";

import { motion, useSpring, useTransform, type MotionValue } from "framer-motion";

const SPRING = { stiffness: 60, damping: 20, mass: 0.8 };

// Decorative marks scattered behind the portrait. Abstract on purpose — these stand
// in for logo watermarks without borrowing anyone's trademark.
const marks = [
  { d: "M10 40 L40 10 L70 40 L40 70 Z M40 25 L25 40 L40 55 L55 40 Z", x: "4%", y: "38%", size: 190, depth: 26 },
  { d: "M40 5 L47 33 L75 40 L47 47 L40 75 L33 47 L5 40 L33 33 Z", x: "31%", y: "34%", size: 210, depth: 18 },
  { d: "M12 18 h24 v10 h-24 z M12 35 h34 v10 h-34 z M12 52 h18 v10 h-18 z M52 18 h14 v44 h-14 z", x: "63%", y: "30%", size: 175, depth: 22 },
  { d: "M20 40 a20 20 0 1 1 40 0 a20 20 0 1 1 -40 0 M4 40 q18 -26 36 0 q18 26 36 0", x: "86%", y: "42%", size: 200, depth: 30 },
];

const indices = [
  { label: "08", x: "13%", y: "31%", depth: 14 },
  { label: "10", x: "71%", y: "29%", depth: 14 },
];

export function HeroBackdrop({
  pointerX,
  pointerY,
}: {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Fine engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(13,13,13,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,13,13,0.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Vignette so the centre stays clean behind the portrait */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 50%, var(--background) 15%, transparent 75%)",
        }}
      />

      {marks.map((mark, i) => (
        <ParallaxLayer key={i} pointerX={pointerX} pointerY={pointerY} depth={mark.depth}>
          <div className="absolute" style={{ left: mark.x, top: mark.y }}>
            <svg
              viewBox="0 0 80 80"
              width={mark.size}
              height={mark.size}
              className="fill-foreground/[0.055]"
            >
              <path d={mark.d} />
            </svg>
          </div>
        </ParallaxLayer>
      ))}

      {indices.map((item) => (
        <ParallaxLayer key={item.label} pointerX={pointerX} pointerY={pointerY} depth={item.depth}>
          <span
            className="absolute text-sm tracking-widest text-foreground/15"
            style={{ left: item.x, top: item.y }}
          >
            {item.label}
          </span>
        </ParallaxLayer>
      ))}
    </div>
  );
}

function ParallaxLayer({
  pointerX,
  pointerY,
  depth,
  children,
}: {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  depth: number;
  children: React.ReactNode;
}) {
  // Background marks move opposite the cursor, and less than the portrait does.
  const x = useSpring(useTransform(pointerX, [-0.5, 0.5], [depth, -depth]), SPRING);
  const y = useSpring(useTransform(pointerY, [-0.5, 0.5], [depth * 0.6, -depth * 0.6]), SPRING);

  return (
    <motion.div style={{ x, y }} className="absolute inset-0">
      {children}
    </motion.div>
  );
}
