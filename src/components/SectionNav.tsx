"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sections, type SectionId } from "@/content/site";

// Where the "playhead" sits in the viewport. The active section is the last one
// whose top edge has passed this line.
const PLAYHEAD_PX = 140;

export function SectionNav() {
  const [activeId, setActiveId] = useState<SectionId>(sections[0].id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scheduled = false;
    let rafId = 0;
    let timerId = 0;

    const measure = () => {
      // Reveal the nav once the hero is mostly behind us.
      setVisible(window.scrollY > window.innerHeight * 0.3);

      let current: SectionId = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= PLAYHEAD_PX) current = section.id;
      }

      // At the very bottom the last section may never reach the playhead, so
      // snap to it rather than leaving the previous one highlighted.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1].id;

      setActiveId(current);
    };

    // Coalesce a burst of scroll events into a single measurement. rAF keeps the
    // work off the scroll critical path; the timer is a fallback for when frames
    // aren't produced (background tabs), and whichever fires first cancels the other.
    const run = () => {
      scheduled = false;
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      measure();
    };

    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      rafId = requestAnimationFrame(run);
      timerId = window.setTimeout(run, 100);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Section navigation"
          className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        >
          {/* Seven items overflow a narrow phone, so the pill scrolls horizontally there. */}
          <ul className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-surface/85 p-1.5 shadow-lg ring-1 ring-hairline backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors sm:px-4 ${
                      isActive ? "text-background" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="section-nav-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{section.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
