"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import {
  getDemoAdCreativesForFormat,
  getFallbackCreativeForFormat,
  sponsorLogoFallbackDataUri,
  type DemoAdCreative,
  type DemoAdFormat,
} from "@/lib/data/demo-ad-creatives"
import { cn } from "@/lib/utils"

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

const pickCreative = (slotId: string, format: DemoAdFormat, preferBannerCreative = false) => {
  const creativePool = getDemoAdCreativesForFormat(format, preferBannerCreative)
  const idx = creativePool.length ? hashString(slotId) % creativePool.length : 0
  return creativePool[idx]
}

const formatClassName: Record<DemoAdFormat, string> = {
  leaderboard: "h-[84px] sm:h-[90px] lg:h-[100px]",
  mrec: "h-[220px] sm:h-[250px] lg:h-[280px]",
  mobile: "h-[60px] sm:h-[56px]",
}

const ultimateFallbackCreative: DemoAdCreative = {
  name: "Sponsor Fallback",
  imageUrl: sponsorLogoFallbackDataUri,
  alt: "Fallback sponsor logo",
  fit: "contain",
}

function AdSlotCreative({
  slotId,
  primaryCreative,
  fallbackCreative,
}: {
  slotId: string
  primaryCreative: DemoAdCreative
  fallbackCreative: DemoAdCreative
}) {
  const [activeCreative, setActiveCreative] = useState(primaryCreative)
  const [textFallback, setTextFallback] = useState(false)

  const handleImageError = () => {
    if (activeCreative.imageUrl !== fallbackCreative.imageUrl) {
      setActiveCreative(fallbackCreative)
      return
    }
    if (activeCreative.imageUrl !== ultimateFallbackCreative.imageUrl) {
      setActiveCreative(ultimateFallbackCreative)
      return
    }
    setTextFallback(true)
  }

  if (textFallback) {
    return (
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center"
        data-testid={`demo-ad-text-fallback-${slotId}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sponsor Spotlight</p>
        <p className="text-[11px] text-muted-foreground">Open sponsor directory</p>
      </div>
    )
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-2 py-2 sm:px-3 sm:py-3">
      <img
        src={activeCreative.imageUrl}
        alt={activeCreative.alt}
        loading="lazy"
        decoding="async"
        onError={handleImageError}
        className="h-auto w-auto max-h-full max-w-full object-contain transition duration-300 group-hover:brightness-105"
        style={{ objectFit: "contain", objectPosition: "center center" }}
        draggable={false}
        data-testid={`demo-ad-image-${slotId}`}
      />
    </div>
  )
}

export function DemoAdSlot({
  slotId,
  format,
  className,
  href = "/sponsors",
  label = "Sponsor",
  preferBannerCreative = false,
  creativeOverride,
}: DemoAdSlotProps) {
  const selectedCreative = useMemo(() => {
    return creativeOverride ?? pickCreative(slotId, format, preferBannerCreative)
  }, [creativeOverride, slotId, format, preferBannerCreative])

  const fallbackCreative = useMemo(() => getFallbackCreativeForFormat(format), [format])

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-none border border-border bg-card shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_16px_28px_-18px_rgba(15,39,69,0.45)]",
        formatClassName[format],
        className,
      )}
      role="complementary"
      aria-label="Sponsor placement"
      data-testid={`demo-ad-${slotId}`}
    >
      <div className="absolute left-3 top-2 z-10 rounded-none border border-border bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-background group-hover:text-primary">
        {label}
      </div>

      <Link
        href={href}
        className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-inset"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,39,69,0.08)_0%,rgba(181,18,43,0.04)_65%,transparent_100%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
        <div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.28)_50%,transparent_100%)] opacity-0 transition-[opacity,transform] duration-700 group-hover:translate-x-[280%] group-hover:opacity-100"
          aria-hidden="true"
        />
        <AdSlotCreative
          key={`${slotId}:${format}:${selectedCreative.imageUrl}`}
          slotId={slotId}
          primaryCreative={selectedCreative}
          fallbackCreative={fallbackCreative}
        />
      </Link>
    </div>
  )
}
