export function BackgroundStrands() {
  // Thin diagonal strands matching the dark hero/CTA backdrop
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 1200 800" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--fyb-strand)" />
          <stop offset="1" stopColor="var(--fyb-strand)" />
        </linearGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 80 + i * 90
        return (
          <path
            key={i}
            d={`M-100 ${y} C 300 ${y - 120}, 900 ${y + 120}, 1300 ${y}`}
            fill="none"
            stroke="url(#g)"
            strokeWidth={1.2}
          />
        )
      })}
    </svg>
  )
}
