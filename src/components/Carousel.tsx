"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

export function Carousel({
  children,
  className = "",
  slideClassName = "",
  align = "start",
}: {
  children: ReactNode[];
  className?: string;
  slideClassName?: string;
  align?: "start" | "center";
}) {
  const [emblaRef, embla] = useEmblaCarousel({ align, loop: false, containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    // Syncing button state with embla, an imperative library that has already
    // initialised by the time this effect runs — the first read has to happen here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <div className={className}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 md:gap-6">
          {children.map((child, i) => (
            <div key={i} className={`min-w-0 shrink-0 ${slideClassName}`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        <CarouselButton label="Previous" disabled={!canPrev} onClick={() => embla?.scrollPrev()}>
          <ArrowIcon className="rotate-180" />
        </CarouselButton>
        <CarouselButton label="Next" disabled={!canNext} onClick={() => embla?.scrollNext()}>
          <ArrowIcon />
        </CarouselButton>
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-foreground transition hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
