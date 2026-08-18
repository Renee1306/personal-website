const blobs = [
  {
    color: "var(--blob-a)",
    className: "left-[-10%] top-[-15%] h-[70vmax] w-[70vmax]",
    animation: "drift-a 26s ease-in-out infinite",
  },
  {
    color: "var(--blob-b)",
    className: "right-[-15%] top-[5%] h-[60vmax] w-[60vmax]",
    animation: "drift-b 32s ease-in-out infinite",
  },
  {
    color: "var(--blob-c)",
    className: "left-[20%] bottom-[-25%] h-[55vmax] w-[55vmax]",
    animation: "drift-c 38s ease-in-out infinite",
  },
];

export function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-55 blur-[80px] will-change-transform ${blob.className}`}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${blob.color} 0%, transparent 68%)`,
            animation: blob.animation,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
