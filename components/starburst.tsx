import { cn } from "@/lib/utils"

export function Starburst({ className }: { className?: string }) {
  // Simple 12-point starburst similar to screenshots
  return (
    <svg viewBox="0 0 100 100" className={cn("fyb-starburst", className)} aria-hidden="true">
      <g fill="currentColor">
        <path d="M50 0 57 32 79 12 68 42 100 35 70 50 100 65 68 58 79 88 57 68 50 100 43 68 21 88 32 58 0 65 30 50 0 35 32 42 21 12 43 32Z" />
      </g>
    </svg>
  )
}
