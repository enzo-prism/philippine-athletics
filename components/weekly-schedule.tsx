import type { ScheduleSession } from "@/lib/data/clubs"

interface WeeklyScheduleProps {
  sessions: ScheduleSession[]
  className?: string
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const
const DAY_NAMES: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
}

const typeStyles: Record<string, string> = {
  track: "bg-blue-500/10 border-blue-500/30",
  strength: "bg-amber-500/10 border-amber-500/30",
  recovery: "bg-emerald-500/10 border-emerald-500/30",
  competition: "bg-rose-500/10 border-rose-500/30",
  other: "bg-muted border-border",
}

function formatTime(time24: string): string {
  const [hourStr, minute] = time24.split(":")
  const hour = parseInt(hourStr, 10)
  const period = hour >= 12 ? "PM" : "AM"
  const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  return `${hour12}:${minute} ${period}`
}

function SessionCard({ session, compact = false }: { session: ScheduleSession; compact?: boolean }) {
  const style = typeStyles[session.type || "other"] || typeStyles.other

  return (
    <div
      className={`rounded-lg border p-2 ${style} ${compact ? "space-y-0.5" : "space-y-1"} transition-colors hover:border-accent/50`}
    >
      <p className={`font-medium text-foreground ${compact ? "text-xs" : "text-sm"}`}>{session.title}</p>
      <p className={`text-muted-foreground ${compact ? "text-[10px]" : "text-xs"}`}>
        {formatTime(session.startTime)} – {formatTime(session.endTime)}
      </p>
      {session.notes && !compact ? (
        <p className="text-xs text-muted-foreground italic">{session.notes}</p>
      ) : null}
    </div>
  )
}

export function WeeklySchedule({ sessions, className = "" }: WeeklyScheduleProps) {
  const sessionsByDay = DAYS.reduce(
    (acc, day) => {
      acc[day] = sessions.filter((s) => s.day === day)
      return acc
    },
    {} as Record<string, ScheduleSession[]>
  )

  const activeDays = DAYS.filter((day) => sessionsByDay[day].length > 0)

  if (sessions.length === 0) {
    return (
      <div className={`p-4 rounded-lg border border-dashed border-border bg-muted/40 text-sm text-muted-foreground ${className}`}>
        No practice schedule available.
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Desktop/Tablet: 7-column grid */}
      <div className="hidden sm:grid grid-cols-7 gap-2 p-4 rounded-lg border border-border bg-card">
        {DAYS.map((day) => (
          <div key={day} className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-center pb-1 border-b border-border">
              {day}
            </p>
            <div className="space-y-2 min-h-[60px]">
              {sessionsByDay[day].length > 0 ? (
                sessionsByDay[day].map((session, idx) => (
                  <SessionCard key={`${day}-${idx}`} session={session} compact />
                ))
              ) : (
                <p className="text-xs text-muted-foreground/50 text-center pt-4">—</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical list of active days only */}
      <div className="sm:hidden space-y-4">
        {activeDays.map((day) => (
          <div key={day} className="space-y-2">
            <p className="text-sm font-semibold text-foreground">{DAY_NAMES[day]}</p>
            <div className="space-y-2">
              {sessionsByDay[day].map((session, idx) => (
                <SessionCard key={`${day}-${idx}`} session={session} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
