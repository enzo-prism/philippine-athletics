import type { ComponentType, SVGProps } from "react"

import {
  CheckIcon,
  ClubIcon,
  CoachIcon,
  MedalIcon,
  MembershipIcon,
  RecognitionIcon,
  SponsorIcon,
  AthleteIcon,
} from "@/components/icons/athletics-icons"
import { cn } from "@/lib/utils"
import { Badge as UiBadge } from "@/components/ui/badge"

interface BadgeProps {
  text: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "accent"
}

type BadgeIcon = ComponentType<SVGProps<SVGSVGElement>>

const badgeIcons: Record<string, BadgeIcon> = {
  // Coach badges
  "World Athletics CE Level 1": RecognitionIcon,
  "Philippine Athletics Certified Coach": CoachIcon,
  "SafeSport Trained": CheckIcon,
  "Philippine Athletics Relay Clinic Facilitator": CoachIcon,
  "Strength & Conditioning for Endurance Runners": AthleteIcon,
  "Marathon Training Specialist": AthleteIcon,
  "Philippine Athletics Endurance Coach": CoachIcon,
  "Certified Throws Coach": CoachIcon,

  // Recognition badges
  "PA Recognized Club": RecognitionIcon,
  "PA Recognized Coach": RecognitionIcon,
  "SafeSport Compliant": CheckIcon,
  "Background Checked": CheckIcon,
  
  // Sponsor badges
  "National Partner": SponsorIcon,
  "Performance Nutrition": MedalIcon,
  "Recovery Partner": CheckIcon,

  // Membership badges
  "Member Badge": MembershipIcon,
  "Member Club Badge": ClubIcon,
}

const DefaultIcon = MedalIcon

export function Badge({ text, className, variant = "accent" }: BadgeProps) {
  const Icon = badgeIcons[text] || DefaultIcon
  
  const variants = {
    default: { ui: "outline" as const, className: "bg-primary/10 text-primary border-primary/20" },
    outline: { ui: "outline" as const, className: "border-border text-foreground bg-transparent" },
    secondary: { ui: "secondary" as const, className: "" },
    accent: { ui: "outline" as const, className: "bg-accent/10 text-accent border-accent/30" },
  }

  return (
    <UiBadge
      variant={variants[variant].ui}
      title={text}
      className={cn(
        "font-semibold max-w-full whitespace-normal break-words leading-tight",
        variants[variant].className,
        className,
      )}
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      {text}
    </UiBadge>
  )
}
