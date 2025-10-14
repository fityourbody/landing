"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Link
        href="#"
        className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2 text-black shadow-sm ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        aria-label="Download on the App Store"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-black/5 text-black/80">
          <Icon icon="solar:apple-bold-duotone" className="size-5" />
        </span>
        <span className="text-sm font-semibold">App Store</span>
      </Link>
      <Link
        href="#"
        className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2 text-black shadow-sm ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        aria-label="Get it on Google Play"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-black/5 text-black/80">
          <Icon icon="solar:play-bold-duotone" className="size-5" />
        </span>
        <span className="text-sm font-semibold">Google Play</span>
      </Link>
    </div>
  )
}
