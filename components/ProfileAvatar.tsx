import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "PA"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

type ProfileAvatarProps = {
  name: string
  src?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses: Record<NonNullable<ProfileAvatarProps["size"]>, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
}

export function ProfileAvatar({ name, src = "/placeholder-user.jpg", size = "lg", className }: ProfileAvatarProps) {
  const initials = getInitials(name)

  return (
    <Avatar className={cn("border border-border bg-muted", sizeClasses[size], className)}>
      <AvatarImage src={src} alt={`${name} profile`} className="object-cover" />
      <AvatarFallback className="bg-accent/10 text-accent font-semibold">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
