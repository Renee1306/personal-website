const RADIUS = 150;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function CurvedText({ text }: { text: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-56 w-56 animate-spin-slow md:h-72 md:w-72"
      style={{ "--spin-duration": "28s" } as React.CSSProperties}
      aria-hidden
    >
      <defs>
        <path
          id="curved-text-path"
          fill="none"
          d={`M 200,${200 - RADIUS} a ${RADIUS},${RADIUS} 0 1,1 -0.01,0`}
        />
      </defs>
      <text className="fill-current text-[19px] uppercase tracking-[0.18em]">
        <textPath href="#curved-text-path" textLength={CIRCUMFERENCE} lengthAdjust="spacing">
          {`${text} • `}
        </textPath>
      </text>
    </svg>
  );
}
