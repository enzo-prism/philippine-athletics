import type { ComponentType, SVGProps } from "react"

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

const blue = "var(--pa-icon-blue, #1d4ed8)"
const red = "var(--pa-icon-red, #dc2626)"
const gold = "var(--pa-icon-gold, #f4b83f)"
const green = "var(--pa-icon-green, #059669)"

function IconBase({ title, className, children, ...props }: AthleticsIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={cn("inline-block size-4 shrink-0 align-middle", className)}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function HomeIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 14.5c1.8-2.1 4.5-3.4 8-3.4s6.2 1.3 8 3.4" />
      <path d="M6.5 16.8c1.3-1.3 3.1-2 5.5-2s4.2.7 5.5 2" />
      <path d="M7.2 10.5 12 6.8l4.8 3.7" />
      <path d="M8.5 10.8v5.9h7v-5.9" />
      <path d="M10.2 16.7v-3.1h3.6v3.1" />
      <path d="M7.4 8.8h2.1" stroke={blue} />
      <path d="M14.5 8.8h2.1" stroke={red} />
    </IconBase>
  )
}

export function DirectoryIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 6.4v12.1c2.6-.9 5.1-.9 7.5.2 2.4-1.1 4.9-1.1 7.5-.2V6.4c-2.6-.8-5.1-.7-7.5.4-2.4-1.1-4.9-1.2-7.5-.4Z" />
      <path d="M12 6.8v11.9" />
      <path d="M7 9.1h2.7M7 12h2.7" stroke={blue} />
      <circle cx={16.1} cy={10.2} r={2.1} fill="var(--background)" />
      <circle cx={16.1} cy={10.2} r={2.1} />
      <path d="m17.6 11.8 2.2 2.2" stroke={gold} strokeWidth={2.2} />
    </IconBase>
  )
}

export function AthleteIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 17.8c4.1-2.4 8-3 12-2.4" />
      <path d="M5 14.1c3.7-2 7.3-2.5 11.1-2" stroke={blue} />
      <path d="M7.4 18.3 15 11.1" stroke={red} strokeWidth={2.2} />
      <path d="M13.3 9.1 16 6.3l3.2 1.8" />
      <path d="m14.8 11.2 2.9 3" />
      <path d="m11.4 12.4-2.9-1.1" />
      <circle cx={16.4} cy={5.2} r={1.5} fill={gold} stroke="currentColor" />
    </IconBase>
  )
}

export function RankingsIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 18h16" />
      <path d="M6 18v-5.4h4V18" fill="var(--background)" />
      <path d="M10 18V8.7h4V18" fill="var(--background)" />
      <path d="M14 18v-7h4v7" fill="var(--background)" />
      <path d="M6 18v-5.4h4V18M10 18V8.7h4V18M14 18v-7h4v7" />
      <path d="m12 4.2.7 1.4 1.6.2-1.1 1.1.3 1.6L12 7.7l-1.5.8.3-1.6-1.1-1.1 1.6-.2.7-1.4Z" fill={gold} stroke={gold} />
      <path d="M6.7 14.6h2.5" stroke={blue} />
      <path d="M14.8 13.1h2.4" stroke={red} />
    </IconBase>
  )
}

export function CompetitionIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <rect x={4} y={5.3} width={16} height={14} rx={2.1} fill="var(--background)" />
      <path d="M4 9.2h16" stroke={red} strokeWidth={2.1} />
      <path d="M8 4.2v2.3M16 4.2v2.3" />
      <path d="M8.2 12.2h2.1M8.2 15.4h2.1M12.5 12.2h2.1" stroke={blue} />
      <path d="M15.3 16.2v-4.1l3 1.1-3 1.2" fill="var(--background)" />
      <path d="M15.3 16.2v-4.1l3 1.1-3 1.2" />
    </IconBase>
  )
}

export function ClubIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 10.4 12 5l8 5.4" fill="var(--background)" />
      <path d="M4 10.4 12 5l8 5.4" />
      <path d="M6 10.8h12" />
      <path d="M7 18.4h10M8.2 11.1v6.2M12 11.1v6.2M15.8 11.1v6.2" />
      <path d="M7.5 9.9 12 6.9l4.5 3" stroke={blue} strokeWidth={2.2} />
      <path d="M12 6.9v3" stroke={red} />
    </IconBase>
  )
}

export function CoachIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <rect x={5.2} y={5.7} width={10.2} height={13.4} rx={1.8} fill="var(--background)" />
      <path d="M9 4.7h2.8a1.5 1.5 0 0 1 1.5 1.5v.6H7.5v-.6A1.5 1.5 0 0 1 9 4.7Z" />
      <rect x={5.2} y={5.7} width={10.2} height={13.4} rx={1.8} />
      <path d="m7.8 10 1 1 2-2M7.8 14.3l1 1 2-2" stroke={blue} />
      <path d="M16.1 13.1c2.5.5 3.9 1.7 3.9 3.1 0 1.3-1.1 2.3-2.5 2.3-1.6 0-2.8-1.1-2.8-2.6 0-1.2.5-2.1 1.4-2.8Z" fill="var(--background)" />
      <path d="M16.1 13.1c2.5.5 3.9 1.7 3.9 3.1 0 1.3-1.1 2.3-2.5 2.3-1.6 0-2.8-1.1-2.8-2.6 0-1.2.5-2.1 1.4-2.8Z" />
      <circle cx={17.6} cy={16.1} r={0.7} fill={red} stroke="none" />
    </IconBase>
  )
}

export function RecognitionIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.9 19 6.8v5.3c0 4-2.8 6.9-7 8-4.2-1.1-7-4-7-8V6.8L12 3.9Z" fill="var(--background)" />
      <path d="M12 3.9 19 6.8v5.3c0 4-2.8 6.9-7 8-4.2-1.1-7-4-7-8V6.8L12 3.9Z" />
      <path d="M5.8 8.2 12 5.7l6.2 2.5" stroke={blue} strokeWidth={2.1} />
      <path d="m12 9.1.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.9Z" fill={gold} stroke={gold} />
      <path d="M12 5.8v13.1" stroke={red} />
    </IconBase>
  )
}

export function SponsorIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 9.3 8 6.9l3.2 3.1" stroke={blue} strokeWidth={2.2} />
      <path d="M19.5 9.3 16 6.9l-3.2 3.1" stroke={red} strokeWidth={2.2} />
      <path d="m8.5 11 2.1-2.1a2 2 0 0 1 2.8 0l2.1 2.1" />
      <path d="m7.7 11.8 5 5a1.6 1.6 0 0 0 2.3 0l3.3-3.3" />
      <path d="m5.6 12.2 4.3 4.3M18.4 12.2l-4.3 4.3" />
      <path d="M8.2 16.1h3.6" />
    </IconBase>
  )
}

export function DataIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M6.5 4.7h8.1l2.9 3.1v11.5h-11V4.7Z" fill="var(--background)" />
      <path d="M14.6 4.7v3.1h2.9" />
      <path d="M6.5 4.7h8.1l2.9 3.1v11.5h-11V4.7Z" />
      <path d="M9 15.5h6M9 12.5h6" />
      <path d="M12 10.4V5.7" stroke={red} strokeWidth={2.1} />
      <path d="m9.9 7.8 2.1-2.1 2.1 2.1" stroke={red} strokeWidth={2.1} />
      <path d="M16.9 18.8h2.6" stroke={blue} />
    </IconBase>
  )
}

export function MembershipIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M5.5 16.7c2.8-4.6 6.2-6.4 11.8-6.2" />
      <path d="M7.2 13.8c2.2-2.4 5-3.6 8.1-3.7" stroke={blue} />
      <circle cx={5.5} cy={16.7} r={1.7} fill={red} />
      <circle cx={12} cy={11.8} r={1.7} fill={gold} />
      <circle cx={18.5} cy={10.7} r={1.7} fill={blue} />
      <circle cx={5.5} cy={16.7} r={1.7} />
      <circle cx={12} cy={11.8} r={1.7} />
      <circle cx={18.5} cy={10.7} r={1.7} />
    </IconBase>
  )
}

export function DashboardIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <rect x={4} y={5.2} width={16} height={12} rx={2} fill="var(--background)" />
      <rect x={4} y={5.2} width={16} height={12} rx={2} />
      <path d="M8.3 19.2h7.4M12 17.2v2" />
      <path d="M6.7 12.1h3l1.1-2.6 2 5.2 1.3-2.6h3.2" />
      <path d="M16 9h1.5M16 11h1.5M16 13h1.5" stroke={blue} />
      <path d="m12.8 14.7 1.3-2.6h3.2" stroke={red} strokeWidth={2.1} />
    </IconBase>
  )
}

export function MobileIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <rect x={7.2} y={3.5} width={9.6} height={17} rx={2.2} fill="var(--background)" />
      <rect x={7.2} y={3.5} width={9.6} height={17} rx={2.2} />
      <path d="M10.6 6h2.8" />
      <path d="m9.6 12.4 1.9 1.9 4-4" stroke={green} strokeWidth={2.4} />
      <path d="M10.5 18.2h3" stroke={blue} />
    </IconBase>
  )
}

export function ProfileIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <circle cx={12} cy={8.2} r={3.1} fill="var(--background)" />
      <circle cx={12} cy={8.2} r={3.1} />
      <path d="M5.8 19.3c.8-3.5 3-5.2 6.2-5.2s5.4 1.7 6.2 5.2" />
      <path d="M7.4 18.2c2.8-1.2 5.9-1.2 9.2 0" stroke={blue} />
      <path d="M9.9 7.6h4.2" stroke={red} />
    </IconBase>
  )
}

export function LocationIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 20.1s6-5.2 6-10.1a6 6 0 1 0-12 0c0 4.9 6 10.1 6 10.1Z" fill="var(--background)" />
      <path d="M12 20.1s6-5.2 6-10.1a6 6 0 1 0-12 0c0 4.9 6 10.1 6 10.1Z" />
      <circle cx={12} cy={10} r={2} fill={gold} />
      <path d="M9.7 6.4c1.5-.7 3.1-.7 4.6 0" stroke={blue} />
    </IconBase>
  )
}

export function FilterIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 7h14M5 12h14M5 17h14" />
      <circle cx={9} cy={7} r={1.7} fill={blue} />
      <circle cx={15} cy={12} r={1.7} fill={red} />
      <circle cx={11.5} cy={17} r={1.7} fill={gold} />
      <circle cx={9} cy={7} r={1.7} />
      <circle cx={15} cy={12} r={1.7} />
      <circle cx={11.5} cy={17} r={1.7} />
    </IconBase>
  )
}

export function MedalIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="m8 4.5 2.6 5.1M16 4.5l-2.6 5.1" stroke={blue} strokeWidth={2.1} />
      <circle cx={12} cy={14.2} r={4.2} fill="var(--background)" />
      <circle cx={12} cy={14.2} r={4.2} />
      <path d="m12 11.5.7 1.5 1.6.2-1.2 1.1.3 1.7-1.4-.8-1.4.8.3-1.7-1.2-1.1 1.6-.2.7-1.5Z" fill={gold} stroke={gold} />
      <path d="M8 4.5h8" stroke={red} />
    </IconBase>
  )
}

export function CheckIcon(props: AthleticsIconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.9 18.2 6.5v4.9c0 3.7-2.5 6.4-6.2 7.5-3.7-1.1-6.2-3.8-6.2-7.5V6.5L12 3.9Z" fill="var(--background)" />
      <path d="M12 3.9 18.2 6.5v4.9c0 3.7-2.5 6.4-6.2 7.5-3.7-1.1-6.2-3.8-6.2-7.5V6.5L12 3.9Z" />
      <path d="m8.8 11.8 2.1 2.1 4.4-4.5" stroke={green} strokeWidth={2.4} />
    </IconBase>
  )
}

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
