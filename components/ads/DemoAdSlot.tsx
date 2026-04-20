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
  variant?: "rail" | "spotlight" | "inline" | "inlinePanel" | "feature"
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

const formatClassName = {
  rail: "min-h-[74px] sm:min-h-[84px]",
  spotlight: "min-h-[240px]",
  inline: "min-h-[132px]",
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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <img
        src={activeCreative.imageUrl}
        alt={activeCreative.alt}
        loading="lazy"
        decoding="async"
        width="640"
        height="320"
        onError={handleImageError}
        className="h-auto w-auto max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.01]"
        style={{ objectFit: activeCreative.fit ?? "contain", objectPosition: "center center" }}
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
  label = "Partner",
  preferBannerCreative = false,
  creativeOverride,
  variant,
}: DemoAdSlotProps) {
  const selectedCreative = useMemo(
    () => creativeOverride ?? pickCreative(slotId, format, preferBannerCreative),
    [creativeOverride, slotId, format, preferBannerCreative],
  )

  const fallbackCreative = useMemo(() => getFallbackCreativeForFormat(format), [format])
  const resolvedVariant = (() => {
    if (variant === "feature") return "spotlight"
    if (variant === "inlinePanel") return "inline"
    if (variant) return variant
    return format === "mrec" ? "spotlight" : "rail"
  })()

  return (
    <div
      className={cn(
        "partner-module group relative transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-foreground/12",
        formatClassName[resolvedVariant],
        className,
      )}
      role="complementary"
      aria-label="Sponsor placement"
      data-variant={resolvedVariant}
      data-testid={`demo-ad-${slotId}`}
    >
      <Link
        href={href}
        className="flex h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/50"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.1),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,247,245,0.96))]" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between">
          {resolvedVariant === "spotlight" ? (
            <div className="flex h-full flex-col gap-5 p-5 sm:p-6">
              <div className="space-y-2">
                <p className="brand-eyebrow">{label}</p>
                <div className="space-y-1">
                  <p className="text-xl font-semibold tracking-tight text-foreground">{selectedCreative.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Featured partner supporting athlete pathways, event delivery, and ecosystem growth.
                  </p>
                </div>
              </div>
              <div className="flex min-h-[156px] flex-1 items-center justify-center rounded-[1.45rem] border border-border/70 bg-background/80 p-4">
                <AdSlotCreative
                  key={`${slotId}:${format}:${selectedCreative.imageUrl}`}
                  slotId={slotId}
                  primaryCreative={selectedCreative}
                  fallbackCreative={fallbackCreative}
                />
              </div>
            </div>
          ) : resolvedVariant === "inline" ? (
            <div className="grid h-full w-full gap-3 p-4 sm:grid-cols-[minmax(0,0.95fr)_minmax(220px,1.05fr)] sm:p-5">
              <div className="space-y-1.5">
                <p className="brand-eyebrow">{label}</p>
                <p className="text-base font-semibold tracking-tight text-foreground">{selectedCreative.name}</p>
                <p className="text-sm text-muted-foreground">Open sponsor details, supported roster, and partnership focus.</p>
              </div>
              <div className="flex min-h-[96px] items-center justify-center rounded-[1.35rem] border border-border/70 bg-background/80 p-3">
                <AdSlotCreative
                  key={`${slotId}:${format}:${selectedCreative.imageUrl}`}
                  slotId={slotId}
                  primaryCreative={selectedCreative}
                  fallbackCreative={fallbackCreative}
                />
              </div>
            </div>
          ) : (
            <div className="grid h-full w-full items-center gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)] sm:p-4">
              <div className="min-w-0 space-y-1">
                <p className="brand-eyebrow">{label}</p>
                <p className="truncate text-base font-semibold tracking-tight text-foreground sm:text-lg">{selectedCreative.name}</p>
                <p className="text-sm text-muted-foreground">Explore the partner network backing Philippine Athletics.</p>
              </div>
              <div className="flex h-full min-h-[56px] items-center justify-center rounded-[1.2rem] border border-border/70 bg-background/84 p-3">
                <AdSlotCreative
                  key={`${slotId}:${format}:${selectedCreative.imageUrl}`}
                  slotId={slotId}
                  primaryCreative={selectedCreative}
                  fallbackCreative={fallbackCreative}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
