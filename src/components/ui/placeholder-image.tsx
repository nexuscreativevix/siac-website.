interface PlaceholderImageProps {
  src: string;
  alt: string;
}

/**
 * TEMP — approval placeholder (stock photo, free/commercial license from
 * Unsplash or Pexels), standing in for the client's real photography/video
 * until SIAC delivers final assets. Swap `src` when that content arrives.
 *
 * Shared treatment so every placeholder reads as one system rather than
 * loose stock photos: slight desaturation, a dark scrim calibrated per
 * theme, and a brand-red corner glow continuous with the GlowLayer accent
 * used elsewhere on the site.
 */
export function PlaceholderImage({ src, alt }: PlaceholderImageProps) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- placeholder stock photo, not part of the optimized asset pipeline */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover [filter:saturate(0.55)]"
      />
      <div className="absolute inset-0 bg-brand-graphite/50 dark:bg-black/55" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(159,33,28,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
