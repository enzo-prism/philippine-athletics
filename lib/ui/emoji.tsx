type EmojiProps = {
  symbol: string
  label?: string
  className?: string
  title?: string
}

export function Emoji({ symbol, label, className = "", title }: EmojiProps) {
  return (
    <span
      role={label ? "img" : "presentation"}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      title={title || label || undefined}
      className={`inline-block align-middle ${className}`}
    >
      {symbol}
    </span>
  )
}

export const emojiIcons = {
  home: "🏠",
  back: "⬅️",
  profile: "👤",
  location: "📍",
  club: "🏟️",
  coach: "🧑‍🏫",
  athlete: "🏃‍♂️",
  sponsor: "🤝",
  competitions: "🎽",
  rankings: "📊",
  filter: "🎚️",
  trophy: "🏆",
  medal: "🏅",
  shield: "🛡️",
  chat: "💬",
  phone: "📞",
  mail: "✉️",
  check: "✅",
  sparkles: "✨",
  flag: "🚩",
  heart: "❤️",
  users: "👥",
}
