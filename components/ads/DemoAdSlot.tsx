"use client"

import Link from "next/link"
import { useMemo } from "react"
import { PartnerLogoMark } from "@/components/icons/brand-mark"
import {
  getDemoAdCreativesForFormat,
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
  rail: "h-[82px] sm:h-[88px]",
  spotlight: "min-h-[240px]",
  inline: "min-h-[132px]",
}

function AdSlotCreative({
  slotId,
  creative,
}: {
  slotId: string
  creative: DemoAdCreative
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <PartnerLogoMark
        name={creative.name}
        className="max-h-full max-w-full transition duration-300 group-hover:scale-[1.01]"
        data-testid={`demo-ad-icon-${slotId}`}
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

  const resolvedVariant = (() => {
    if (variant === "feature") return "spotlight"
    if (variant === "inlinePanel") return "inline"
    if (variant) return variant
    return format === "mrec" ? "spotlight" : "rail"
  })()

  return (
    <div
      className={cn(
        "partner-module group relative transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px",
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
        aria-label={`Open sponsor details for ${selectedCreative.name}`}
        className="flex h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/50"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(245,248,250,0.92))]" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between">
          {resolvedVariant === "spotlight" ? (
            <div className="flex h-full flex-col gap-5 p-5 sm:p-6">
              <div className="space-y-2">
                <p className="brand-eyebrow">{label}</p>
                <div className="space-y-1">
                  <p className="text-xl font-semibold tracking-normal text-foreground">{selectedCreative.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Featured partner supporting athlete pathways, event delivery, and ecosystem growth.
                  </p>
                </div>
              </div>
              <div className="flex min-h-[156px] flex-1 items-center justify-center rounded-lg border border-border/70 bg-background/80 p-4">
                <AdSlotCreative
                  key={`${slotId}:${format}:${selectedCreative.name}`}
                  slotId={slotId}
                  creative={selectedCreative}
                />
              </div>
            </div>
          ) : resolvedVariant === "inline" ? (
            <div className="grid h-full w-full gap-3 p-4 sm:grid-cols-[minmax(0,0.95fr)_minmax(220px,1.05fr)] sm:p-5">
              <div className="space-y-1.5">
                <p className="brand-eyebrow">{label}</p>
                <p className="text-base font-semibold tracking-normal text-foreground">{selectedCreative.name}</p>
                <p className="text-sm text-muted-foreground">Open sponsor details, supported roster, and partnership focus.</p>
              </div>
              <div className="flex min-h-[96px] items-center justify-center rounded-lg border border-border/70 bg-background/80 p-3">
                <AdSlotCreative
                  key={`${slotId}:${format}:${selectedCreative.name}`}
                  slotId={slotId}
                  creative={selectedCreative}
                />
              </div>
            </div>
          ) : (
            <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(112px,0.62fr)] items-center gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.92fr)] sm:p-4">
              <div className="min-w-0 space-y-1">
                <p className="brand-eyebrow">{label}</p>
                <p className="truncate text-base font-semibold tracking-normal text-foreground sm:text-lg">{selectedCreative.name}</p>
                <p className="hidden text-sm text-muted-foreground sm:block">Explore the partner network backing Philippine Athletics.</p>
              </div>
              <div className="flex h-16 min-h-0 items-center justify-center rounded-lg border border-border/70 bg-background/84 p-0 sm:h-[68px]">
                <AdSlotCreative
                  key={`${slotId}:${format}:${selectedCreative.name}`}
                  slotId={slotId}
                  creative={selectedCreative}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
