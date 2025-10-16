import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  src?: string
  alt?: string
  className?: string
  roundedBg?: boolean
}

export function DeviceIphone15Pro({ src, alt = "App screenshot", className, roundedBg }: Props) {
  // Lightweight iPhone 15 Pro mock; accepts an image to fill the screen
  return (
    <div className={cn("relative", className)}>
      {roundedBg && (
        <div aria-hidden="true" className="absolute -inset-6 rounded-[36px] bg-[color:var(--fyb-brand-weak)]" />
      )}
      <div className="relative mx-auto h-[560px] w-[280px] rounded-[48px] bg-zinc-900 device-shadow ring-1 ring-black/40">
        {/* frame bezel */}
        <div className="absolute inset-0 rounded-[48px] border border-white/10" />
        {/* dynamic island */}
        <div className="absolute left-1/2 top-4 h-6 w-28 -translate-x-1/2 rounded-full bg-black/70" />
        {/* screen */}
        <div className="absolute inset-[12px] rounded-[38px] overflow-hidden bg-black">
          {src ? (
            <Image src={src} alt={alt} fill sizes="280px" className="object-cover" priority />
          ) : (
            <div className="h-full w-full grid place-items-center text-white/70 text-sm">FYB App Screen</div>
          )}
        </div>
      </div>
    </div>
  )
}
