"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Link
        href="#"
        className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2 text-black shadow-sm ring-1 ring-black/10 hover:opacity-90 transition"
        aria-label="Download on the App Store"
      >
        <img
          src={"/placeholder.svg?height=24&width=24&query=Apple%20logo"}
          alt=""
          className="h-6 w-6"
          width={24}
          height={24}
        />
        <span className="text-sm font-semibold">App Store</span>
      </Link>
      <Link
        href="#"
        className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2 text-black shadow-sm ring-1 ring-black/10 hover:opacity-90 transition"
        aria-label="Get it on Google Play"
      >
        <img
          src={"/placeholder.svg?height=24&width=24&query=Google%20Play%20logo"}
          alt=""
          className="h-6 w-6"
          width={24}
          height={24}
        />
        <span className="text-sm font-semibold">Google Play</span>
      </Link>
    </div>
  )
}
