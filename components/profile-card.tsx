import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/badge"
import {
  AthleteIcon,
  ClubIcon,
  CoachIcon,
  CompetitionIcon,
  LocationIcon,
  SponsorIcon,
} from "@/components/icons/athletics-icons"
import { Badge as UiBadge } from "@/components/ui/badge"

interface ProfileCardProps {
  name: string
  subtitle: string
  details: string[]
  href: string
  type: "athlete" | "coach" | "club" | "competition" | "sponsor"
  location?: string
  badges?: string[]
}

const typeConfig = {
  athlete: { icon: AthleteIcon, label: "Athlete" },
  coach: { icon: CoachIcon, label: "Coach" },
  club: { icon: ClubIcon, label: "Club" },
  competition: { icon: CompetitionIcon, label: "Competition" },
  sponsor: { icon: SponsorIcon, label: "Sponsor" },
} as const

export function ProfileCard({ name, subtitle, details, href, type, location, badges }: ProfileCardProps) {
  const Icon = typeConfig[type].icon

  return (
    <Link
      href={href}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
      aria-label={`Open ${typeConfig[type].label.toLowerCase()} profile for ${name}`}
    >
      <article className="directory-card group">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="directory-card-meta">
              <UiBadge variant="outline" className="gap-1.5 capitalize">
                <Icon className="size-3" aria-hidden="true" />
                {typeConfig[type].label}
              </UiBadge>
              {badges?.map((badge) => (
                <Badge key={badge} text={badge} variant="accent" className="uppercase tracking-wide rounded-full" />
              ))}
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-normal text-foreground transition-colors group-hover:text-primary">
              {name}
            </h3>
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          <span className="group-hover-stroke-surface flex size-8 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/84 text-muted-foreground transition-[background-color,border-color,box-shadow,color] group-hover:text-foreground">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        {location ? (
          <div className="directory-card-meta">
            <UiBadge
              variant="outline"
              className="max-w-full whitespace-normal break-words bg-background/84 leading-tight"
              title={location}
            >
              <LocationIcon className="size-3" aria-hidden="true" />
              <span>{location}</span>
            </UiBadge>
          </div>
        ) : null}

        <div className="space-y-1.5">
          {details.map((detail, i) => (
            <p key={i} className="directory-card-detail">
              {detail}
            </p>
          ))}
        </div>

        <div className="mt-auto pt-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          {type === "club"
            ? "Open club profile"
            : type === "competition"
              ? "Open competition"
              : type === "sponsor"
                ? "Open sponsor profile"
                : "Open profile"}
        </div>
      </article>
    </Link>
  )
}
