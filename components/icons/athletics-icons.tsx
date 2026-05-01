import type { ComponentType, SVGProps } from "react"
import {
  Building2,
  CalendarDays,
  CircleCheck,
  ClipboardCheck,
  Database,
  Handshake,
  House,
  LayoutDashboard,
  MapPin,
  Medal,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Trophy,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type AthleticsIconName =
  | "home"
  | "directory"
  | "athlete"
  | "rankings"
  | "competition"
  | "club"
  | "coach"
  | "recognition"
  | "sponsor"
  | "data"
  | "membership"
  | "dashboard"
  | "mobile"
  | "profile"
  | "location"
  | "filter"
  | "medal"
  | "check"

export type AthleticsIconProps = SVGProps<SVGSVGElement> & {
  title?: string
}

export type AthleticsIconComponent = ComponentType<AthleticsIconProps>

const createIcon = (Icon: LucideIcon): AthleticsIconComponent => {
  function StandardAthleticsIcon({ title, className, ...props }: AthleticsIconProps) {
    return (
      <Icon
        aria-hidden={title ? undefined : true}
        aria-label={title}
        className={cn("inline-block size-4 shrink-0 align-middle", className)}
        focusable="false"
        role={title ? "img" : undefined}
        strokeWidth={1.85}
        {...props}
      />
    )
  }

  return StandardAthleticsIcon
}

export const HomeIcon = createIcon(House)
export const DirectoryIcon = createIcon(Search)
export const AthleteIcon = createIcon(UserRound)
export const RankingsIcon = createIcon(Trophy)
export const CompetitionIcon = createIcon(CalendarDays)
export const ClubIcon = createIcon(Building2)
export const CoachIcon = createIcon(ClipboardCheck)
export const RecognitionIcon = createIcon(ShieldCheck)
export const SponsorIcon = createIcon(Handshake)
export const DataIcon = createIcon(Database)
export const MembershipIcon = createIcon(UsersRound)
export const DashboardIcon = createIcon(LayoutDashboard)
export const MobileIcon = createIcon(Smartphone)
export const ProfileIcon = createIcon(UserRound)
export const LocationIcon = createIcon(MapPin)
export const FilterIcon = createIcon(SlidersHorizontal)
export const MedalIcon = createIcon(Medal)
export const CheckIcon = createIcon(CircleCheck)

export const athleticsIcons = {
  home: HomeIcon,
  directory: DirectoryIcon,
  athlete: AthleteIcon,
  rankings: RankingsIcon,
  competition: CompetitionIcon,
  club: ClubIcon,
  coach: CoachIcon,
  recognition: RecognitionIcon,
  sponsor: SponsorIcon,
  data: DataIcon,
  membership: MembershipIcon,
  dashboard: DashboardIcon,
  mobile: MobileIcon,
  profile: ProfileIcon,
  location: LocationIcon,
  filter: FilterIcon,
  medal: MedalIcon,
  check: CheckIcon,
} satisfies Record<AthleticsIconName, AthleticsIconComponent>

export function AthleticsIcon({
  name,
  ...props
}: AthleticsIconProps & {
  name: AthleticsIconName
}) {
  const Icon = athleticsIcons[name]
  return <Icon {...props} />
}
