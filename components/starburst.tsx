import { cn } from "@/lib/utils"

export function Starburst({ className }: { className?: string }) {
  // Replace SVG starburst with a soft radial glow to maintain layout without SVGs.
  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-full bg-[color:var(--fyb-brand)]/25 blur-2xl",
        className,
      )}
    />
  )
}
