import { cn } from "@/lib/utils"
import { Emoji } from "@/lib/ui/emoji"

interface BadgeProps {
  text: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "accent"
}

// Map specific badge text to emojis
const badgeIcons: Record<string, string> = {
  // Coach badges
  "World Athletics CE Level 1": "🌐",
  "Philippine Athletics Certified Coach": "🇵🇭",
  "SafeSport Trained": "🛡️",
  "Philippine Athletics Relay Clinic Facilitator": "🤝",
  "Strength & Conditioning for Endurance Runners": "🏋️",
  "Marathon Training Specialist": "⏱️",
  "Philippine Athletics Endurance Coach": "🏔️",
  "Certified Throws Coach": "☄️",
  
  // Sponsor badges
  "National Partner": "🇵🇭",
  "Performance Nutrition": "🍎",
  "Recovery Partner": "🔋",
}

const defaultIcon = "🏅"

export function Badge({ text, className, variant = "accent" }: BadgeProps) {
  const icon = badgeIcons[text] || defaultIcon
  
  const variants = {
    default: "bg-primary/10 text-primary border-primary/20",
    outline: "border-border text-foreground bg-transparent",
    secondary: "bg-secondary text-secondary-foreground border-transparent",
    accent: "bg-accent/10 text-accent border-accent/30",
  }

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors",
        variants[variant],
        className
      )}
    >
      <Emoji symbol={icon} className="text-sm" aria-hidden />
      {text}
    </span>
  )
}
