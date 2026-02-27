import type { LucideIcon } from "lucide-react"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Circle,
  Flag,
  Footprints,
  Handshake,
  Heart,
  House,
  Mail,
  MapPin,
  Medal,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  UserRound,
  Users,
} from "lucide-react"
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

const iconBySymbol: Record<EmojiSymbol, LucideIcon> = {
  home: House,
  back: ArrowLeft,
  forward: ArrowRight,
  profile: UserRound,
  location: MapPin,
  club: Building2,
  coach: UserRound,
  athlete: Footprints,
  sponsor: Handshake,
  competitions: CalendarDays,
  rankings: BarChart3,
  filter: SlidersHorizontal,
  trophy: Trophy,
  medal: Medal,
  shield: ShieldCheck,
  chat: MessageCircle,
  phone: Phone,
  mail: Mail,
  check: CheckCircle2,
  sparkles: Sparkles,
  flag: Flag,
  heart: Heart,
  users: Users,
  calendar: CalendarDays,
  search: Search,
}

type EmojiProps = {
  symbol: EmojiSymbol
  label?: string
  className?: string
  title?: string
}

export function Emoji({ symbol, label, className = "", title }: EmojiProps) {
  const Icon = iconBySymbol[symbol] ?? Circle
  return (
    <Icon
      role={label ? "img" : "presentation"}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      title={title || label || undefined}
      className={cn("inline-block h-[1em] w-[1em] shrink-0 align-middle text-current", className)}
      strokeWidth={1.9}
    />
  )
}
