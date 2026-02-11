"use client"

import Link from "next/link"
import { demoAdCreatives, demoBannerAdCreatives } from "@/lib/data/demo-ad-creatives"
import { cn } from "@/lib/utils"

type DemoAdFormat = "leaderboard" | "mrec" | "mobile"

type DemoAdSlotProps = {
  slotId: string
  format: DemoAdFormat
  className?: string
  href?: string
  label?: string
  preferBannerCreative?: boolean
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
}: DemoAdSlotProps) {
  const creative = pickCreative(slotId, preferBannerCreative)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
        formatClassName[format],
        className,
      )}
      role="complementary"
      aria-label="Advertisement"
      data-testid={`demo-ad-${slotId}`}
    >
      <div className="absolute left-3 top-2 z-10 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
        {label}
      </div>

      <Link href={href} className="flex h-full w-full items-center justify-center p-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.06),transparent_55%)]" />
        <div className="relative flex h-full w-full items-center justify-center">
          <img
            src={creative.imageUrl}
            alt={creative.alt}
            loading="lazy"
            decoding="async"
            className={cn(
              "max-w-full object-contain",
              format === "leaderboard" ? "max-h-[58px]" : format === "mrec" ? "max-h-[140px]" : "max-h-[32px]",
            )}
          />
        </div>
      </Link>
    </div>
  )
}

