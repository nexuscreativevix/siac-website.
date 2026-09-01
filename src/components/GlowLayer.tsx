// A very soft brand-red glow — used behind key sections only (Hero,
// Manifesto), never everywhere, so it stays an accent rather than a tint.
export function GlowLayer({
  position = "center",
  opacity = 0.035,
}: {
  /** CSS radial-gradient position, e.g. "center", "top center" */
  position?: string;
  /** Keep in the 3-4% range per the brand's "red as a pinpoint accent" rule. */
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(ellipse 900px 500px at ${position}, rgba(159, 33, 28, ${opacity}), transparent 70%)`,
      }}
    />
  );
}
