import type { SVGProps } from "react"
import {
  BadgeCheck,
  Banknote,
  Building2,
  Handshake,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

type SvgMarkProps = SVGProps<SVGSVGElement> & {
  title?: string
}

const partnerIcons = [Handshake, Building2, RadioTower, Banknote, Trophy, Sparkles] satisfies LucideIcon[]

const partnerIconOverrides: Record<string, LucideIcon> = {
  "ICTSI Foundation": Trophy,
  "Ayala Foundation": Building2,
  "Globe Telecom": RadioTower,
  UnionBank: Banknote,
  Metrobank: Banknote,
  "BDO Unibank": Banknote,
  "PLDT Home": RadioTower,
  "Philom Sports": Trophy,
  "PSC + POC": BadgeCheck,
  MASIV: Sparkles,
}

const partnerTones = [
  "var(--pa-icon-blue)",
  "var(--pa-icon-red)",
  "var(--pa-icon-gold)",
  "var(--pa-icon-green)",
  "var(--accent)",
]

const partnerToneOverrides: Record<string, number> = {
  "ICTSI Foundation": 2,
  "Ayala Foundation": 3,
  "Globe Telecom": 4,
  UnionBank: 1,
  Metrobank: 4,
  "BDO Unibank": 0,
  "PLDT Home": 3,
  "Philom Sports": 0,
  "PSC + POC": 2,
  MASIV: 4,
}

const hashString = (value: string) => {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

export function PhilippineAthleticsMark({ title, className, ...props }: SvgMarkProps) {
  return (
    <ShieldCheck
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("inline-block size-8", className)}
      focusable="false"
      role={title ? "img" : undefined}
      strokeWidth={1.75}
      {...props}
    />
  )
}

export function PartnerLogoMark({ title, name, className, ...props }: SvgMarkProps & { name: string }) {
  const hash = hashString(name)
  const Icon = partnerIconOverrides[name] ?? partnerIcons[hash % partnerIcons.length]
  const toneIndex = partnerToneOverrides[name] ?? hash % partnerTones.length
  const accent = partnerTones[toneIndex]

  return (
    <svg
      viewBox="0 0 240 120"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("inline-block h-full w-full", className)}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <rect x="13" y="13" width="214" height="94" rx="22" fill="var(--background)" stroke="var(--border)" strokeWidth="2" />
      <circle cx="120" cy="60" r="38" fill="var(--muted)" stroke="var(--border)" strokeWidth="2" />
      <Icon
        x="87"
        y="27"
        width="66"
        height="66"
        aria-hidden="true"
        color={accent}
        strokeWidth={1.7}
      />
      <path d="M56 92h128" stroke="currentColor" strokeLinecap="round" strokeOpacity=".16" strokeWidth="5" />
    </svg>
  )
}
