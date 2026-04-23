import type { ComponentType, SVGProps } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Flag,
  Heart,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react"
import {
  CheckIcon,
  ClubIcon,
  CoachIcon,
  CompetitionIcon,
  DirectoryIcon,
  FilterIcon,
  HomeIcon,
  LocationIcon,
  MedalIcon,
  MembershipIcon,
  ProfileIcon,
  RankingsIcon,
  RecognitionIcon,
  SponsorIcon,
  AthleteIcon,
} from "@/components/icons/athletics-icons"
import { cn } from "@/lib/utils"

export const emojiIcons = {
  home: "home",
  back: "back",
  forward: "forward",
  profile: "profile",
  location: "location",
  club: "club",
  coach: "coach",
  athlete: "athlete",
  sponsor: "sponsor",
  competitions: "competitions",
  rankings: "rankings",
  filter: "filter",
  trophy: "trophy",
  medal: "medal",
  shield: "shield",
  chat: "chat",
  phone: "phone",
  mail: "mail",
  check: "check",
  sparkles: "sparkles",
  flag: "flag",
  heart: "heart",
  users: "users",
  calendar: "calendar",
  search: "search",
} as const

export type EmojiSymbol = (typeof emojiIcons)[keyof typeof emojiIcons]

type InlineIcon = ComponentType<SVGProps<SVGSVGElement>>

const iconBySymbol: Record<EmojiSymbol, InlineIcon> = {
  home: HomeIcon,
  back: ArrowLeft,
  forward: ArrowRight,
  profile: ProfileIcon,
  location: LocationIcon,
  club: ClubIcon,
  coach: CoachIcon,
  athlete: AthleteIcon,
  sponsor: SponsorIcon,
  competitions: CompetitionIcon,
  rankings: RankingsIcon,
  filter: FilterIcon,
  trophy: RankingsIcon,
  medal: MedalIcon,
  shield: RecognitionIcon,
  chat: MessageCircle,
  phone: Phone,
  mail: Mail,
  check: CheckIcon,
  sparkles: Sparkles,
  flag: Flag,
  heart: Heart,
  users: MembershipIcon,
  calendar: CompetitionIcon,
  search: DirectoryIcon,
}

type EmojiProps = {
  symbol: EmojiSymbol
  label?: string
  className?: string
  title?: string
}

export function Emoji({ symbol, label, className = "", title }: EmojiProps) {
  const Icon = iconBySymbol[symbol] ?? MedalIcon
  return (
    <span title={title || label || undefined}>
      <Icon
        role={label ? "img" : "presentation"}
        aria-label={label || undefined}
        aria-hidden={label ? undefined : true}
        className={cn("inline-block h-[1em] w-[1em] shrink-0 align-middle text-current", className)}
        strokeWidth={1.9}
      />
    </span>
  )
}
