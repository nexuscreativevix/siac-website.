// A single outlined diamond — a watermark, not a texture. The diamond
// shape is reserved as the Ciclo SIAC nodes' identity; this is its only
// other use, so it must never be repeated as a field/pattern anywhere.
export function DiamondMark({
  position,
  center = false,
  size = 420,
  opacity = 0.025,
}: {
  /** CSS `position` values for the wrapper — asymmetric placement, e.g. {top: "-60px", right: "-80px"} */
  position: { top?: string; bottom?: string; left?: string; right?: string };
  /** True centers the mark on the given point (e.g. top: "50%", left: "50%") instead of anchoring its corner there. */
  center?: boolean;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute z-0 text-brand-graphite dark:text-brand-ice"
      style={{
        ...position,
        opacity,
        transform: center ? "translate(-50%, -50%)" : undefined,
      }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <rect
        x="15"
        y="15"
        width="70"
        height="70"
        transform="rotate(45 50 50)"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
    </svg>
  );
}
