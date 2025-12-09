interface AvatarProps {
  name: string
  size?: "sm" | "md"
}

const colors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-violet-500",
  "bg-cyan-500",
  "bg-orange-500",
  "bg-teal-500",
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
      className={`${colorClass} ${sizeClasses} rounded-full flex items-center justify-center text-white font-semibold shrink-0`}
    >
      {initials}
    </div>
  )
}
