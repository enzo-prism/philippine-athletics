interface AvatarProps {
  name: string
  size?: "sm" | "md"
}

const colors = [
  "bg-primary",
  "bg-accent",
  "bg-slate-700",
  "bg-slate-600",
  "bg-emerald-700",
  "bg-red-700",
  "bg-amber-700",
  "bg-blue-700",
]

function hashName(name: string): number {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function Avatar({ name, size = "md" }: AvatarProps) {
  const initials = getInitials(name)
  const colorClass = colors[hashName(name) % colors.length]
  const sizeClasses = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm"

  return (
    <div
      className={`${colorClass} ${sizeClasses} rounded-none flex items-center justify-center text-white font-semibold shrink-0`}
    >
      {initials}
    </div>
  )
}
