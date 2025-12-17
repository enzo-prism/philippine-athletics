import { cn } from "@/lib/utils"
import { Badge as UiBadge } from "@/components/ui/badge"
import { 
  Globe, 
  Award, 
  ShieldCheck, 
  Users, 
  Dumbbell, 
  Timer, 
  Mountain, 
  Target, 
  Flag, 
  Zap, 
  HeartPulse, 
  Medal,
  LucideIcon
} from "lucide-react"

interface BadgeProps {
  text: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "accent"
}

// Map specific badge text to Lucide icons
const badgeIcons: Record<string, LucideIcon> = {
  // Coach badges
  "World Athletics CE Level 1": Globe,
  "Philippine Athletics Certified Coach": Award,
  "SafeSport Trained": ShieldCheck,
  "Philippine Athletics Relay Clinic Facilitator": Users,
  "Strength & Conditioning for Endurance Runners": Dumbbell,
  "Marathon Training Specialist": Timer,
  "Philippine Athletics Endurance Coach": Mountain,
  "Certified Throws Coach": Target,
  
  // Sponsor badges
  "National Partner": Flag,
  "Performance Nutrition": Zap,
  "Recovery Partner": HeartPulse,
}

const DefaultIcon = Medal

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
