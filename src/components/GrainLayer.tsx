"use client";

import { useId } from "react";

// Fine film-grain noise, uniform across the whole viewport — the shared
// base texture for every section (replaces the old halftone dot pattern).
// Rendered as a live inline <svg filter>, not a CSS background-image data
// URI — Chrome silently disables feTurbulence when an SVG filter is loaded
// as a background-image resource, so it has to actually be in the DOM.
export function GrainLayer({
  opacity = 0.03,
  fixed = true,
}: {
  opacity?: number;
  /** False confines it to its positioned ancestor instead of the viewport — only for side-by-side previews. */
  fixed?: boolean;
}) {
  // useId() includes colons (e.g. ":r1:"), which break an unescaped
  // url(#id) filter reference in SVG — strip them for a plain-alnum id.
  const filterId = `grain-${useId().replace(/:/g, "")}`;
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      className={`pointer-events-none inset-0 z-[999] ${fixed ? "fixed" : "absolute"}`}
      style={{ opacity }}
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
          result="noise"
        />
        {/* feTurbulence's raw output is a soft, narrow-range gray wash —
            this boosts the alpha channel's contrast so it reads as crisp
            grain instead of a flat tint at low opacity. */}
        <feColorMatrix
          in="noise"
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 6 0"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}
