/**
 * Quiet backing for the hero: a fine grid and a centre vignette, nothing else.
 * The only moving thing behind the portrait is the PORTFOLIO marquee.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 50%, var(--background) 15%, transparent 75%)",
        }}
      />
    </div>
  );
}
