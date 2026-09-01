import { cn } from "@/lib/utils";

interface CornerBracketsProps {
  /** "dark" for light backgrounds (uses graphite), "light" for dark/glass backgrounds (uses gray/ice). */
  variant?: "dark" | "light";
  /** Length of each bracket leg, in px. */
  size?: number;
  /** Distance from the block's edge, in px. */
  inset?: number;
  /** Boosts opacity on hover — requires a "group" class on the positioned ancestor. */
  hover?: boolean;
  className?: string;
}

const CORNERS = [
  { top: 0, left: 0, borderWidth: "1px 0 0 1px" },
  { top: 0, right: 0, borderWidth: "1px 1px 0 0" },
  { bottom: 0, left: 0, borderWidth: "0 0 1px 1px" },
  { bottom: 0, right: 0, borderWidth: "0 1px 1px 0" },
] as const;

export function CornerBrackets({
  variant = "dark",
  size = 20,
  inset = 12,
  hover = true,
  className,
}: CornerBracketsProps) {
  const color = variant === "light" ? "#BEBEBE" : "#282928";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-10 opacity-[0.18] transition-opacity duration-300 ease-brand",
        hover && "group-hover:opacity-[0.28]",
        className
      )}
      style={{ inset }}
    >
      {CORNERS.map((corner, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            top: "top" in corner ? corner.top : undefined,
            left: "left" in corner ? corner.left : undefined,
            right: "right" in corner ? corner.right : undefined,
            bottom: "bottom" in corner ? corner.bottom : undefined,
            width: size,
            height: size,
            borderStyle: "solid",
            borderWidth: corner.borderWidth,
            borderColor: color,
          }}
        />
      ))}
    </div>
  );
}
