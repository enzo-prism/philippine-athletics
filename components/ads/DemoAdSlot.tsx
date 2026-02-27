"use client"

import Link from "next/link"
import { demoAdCreatives, demoBannerAdCreatives, type DemoAdCreative } from "@/lib/data/demo-ad-creatives"
import { cn } from "@/lib/utils"

type DemoAdFormat = "leaderboard" | "mrec" | "mobile"

type DemoAdSlotProps = {
  slotId: string
  format: DemoAdFormat
  className?: string
  href?: string
  label?: string
  preferBannerCreative?: boolean
  creativeOverride?: DemoAdCreative
}

const hashString = (value: string) => {
  // Deterministic (no Math.random) to avoid hydration mismatch.
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

const pickCreative = (slotId: string, preferBannerCreative = false) => {
  const creativePool = preferBannerCreative ? demoBannerAdCreatives : demoAdCreatives
  const idx = creativePool.length ? hashString(slotId) % creativePool.length : 0
  return creativePool[idx]
}

const formatClassName: Record<DemoAdFormat, string> = {
  leaderboard: "h-[90px]",
  mrec: "h-[250px]",
  mobile: "h-[56px]",
}

export function DemoAdSlot({
  slotId,
  format,
  className,
  href = "/sponsors",
  label = "Ad",
  preferBannerCreative = false,
  creativeOverride,
}: DemoAdSlotProps) {
  const creative = creativeOverride ?? pickCreative(slotId, preferBannerCreative)

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-none border border-border bg-card shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_16px_28px_-18px_rgba(15,39,69,0.45)]",
        formatClassName[format],
        className,
      )}
      role="complementary"
      aria-label="Advertisement"
      data-testid={`demo-ad-${slotId}`}
    >
      <div className="absolute left-3 top-2 z-10 rounded-none border border-border bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-background group-hover:text-primary">
        {label}
      </div>

      <Link
        href={href}
        className="flex h-full w-full items-center justify-center p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-inset"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,39,69,0.08)_0%,rgba(181,18,43,0.04)_65%,transparent_100%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
        <div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.28)_50%,transparent_100%)] opacity-0 transition-[opacity,transform] duration-700 group-hover:translate-x-[280%] group-hover:opacity-100"
          aria-hidden="true"
        />
        <div className="relative flex h-full w-full items-center justify-center">
          <img
            src={creative.imageUrl}
            alt={creative.alt}
            loading="lazy"
            decoding="async"
            className={cn(
              "max-w-full object-contain transition duration-300 group-hover:scale-[1.02] group-hover:brightness-105",
              format === "leaderboard" ? "max-h-[58px]" : format === "mrec" ? "max-h-[140px]" : "max-h-[32px]",
            )}
          />
        </div>
      </Link>
    </div>
  )
}
