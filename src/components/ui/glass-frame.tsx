import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * A liquid-glass mat around media (video/image blocks) — the same recipe
 * used for the Hero's pillar cards: saturated blur, a diagonal sheen, a
 * brand-red glow tucked in the corner, and an inset top highlight. Used
 * for the Hero and Manifesto video blocks so both read as one system
 * instead of a bare bordered rectangle floating on its own.
 */
export function GlassFrame({ children, className }: GlassFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-card-lg border border-white/80 bg-white/40 p-2 backdrop-blur-glass backdrop-saturate-150 transition-all duration-300 ease-brand",
        "shadow-[0_1px_1px_rgba(40,41,40,0.05),0_16px_40px_rgba(40,41,40,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]",
        "dark:border-white/[0.18] dark:bg-white/[0.08]",
        "dark:shadow-[0_1px_1px_rgba(0,0,0,0.3),0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.16)]",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-card-lg bg-gradient-to-br from-white/80 via-white/10 to-transparent dark:from-white/[0.22] dark:via-white/0 dark:to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-card-lg"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 70% at 100% 100%, rgba(159,33,28,0.16), transparent 70%)",
        }}
      />
      <div className="relative overflow-hidden rounded-card">{children}</div>
    </div>
  );
}
