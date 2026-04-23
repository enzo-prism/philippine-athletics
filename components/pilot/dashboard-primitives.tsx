import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type PilotSectionProps = {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
}

type PilotKpiCardProps = {
  label: ReactNode
  value: ReactNode
  note?: ReactNode
  className?: string
}

type StatusPillProps = {
  tone?: "accent" | "support" | "warning" | "neutral"
  children: ReactNode
  className?: string
}

export function PilotSection({
  eyebrow,
  title,
  description,
  children,
  className,
}: PilotSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="space-y-2">
        {eyebrow ? <p className="brand-eyebrow">{eyebrow}</p> : null}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-normal text-foreground">{title}</h2>
          {description ? <p className="text-sm leading-6 text-muted-foreground">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  )
}

export function PilotKpiCard({ label, value, note, className }: PilotKpiCardProps) {
  return (
    <Card className={cn("rounded-lg border-border py-0 shadow-none", className)}>
      <CardContent className="space-y-2 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-normal text-muted-foreground">{label}</p>
        <p className="text-2xl font-semibold tracking-normal text-foreground">{value}</p>
        {note ? <p className="text-sm leading-6 text-muted-foreground">{note}</p> : null}
      </CardContent>
    </Card>
  )
}

export function StatusPill({ tone = "neutral", children, className }: StatusPillProps) {
  const toneClassName =
    tone === "accent"
      ? "border-accent/25 bg-accent/8 text-accent"
      : tone === "support"
        ? "border-emerald-300/65 bg-emerald-50 text-emerald-700"
        : tone === "warning"
          ? "border-amber-300/70 bg-amber-50 text-amber-700"
          : "border-border bg-background text-foreground"

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        toneClassName,
        className,
      )}
    >
      {children}
    </span>
  )
}

export function PilotDataCard({
  title,
  description,
  children,
  className,
}: {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <Card className={cn("rounded-lg border-border py-0 shadow-none", className)}>
      <CardHeader className="px-4 pt-4">
        <CardTitle className="text-base tracking-normal">{title}</CardTitle>
        {description ? <p className="text-sm leading-6 text-muted-foreground">{description}</p> : null}
      </CardHeader>
      <CardContent className="px-4 pb-4">{children}</CardContent>
    </Card>
  )
}

export function PhoneFrame({
  title,
  subtitle,
  children,
}: {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-lg border border-primary/20 bg-primary p-3 text-primary-foreground shadow-[0_40px_100px_-60px_rgba(7,28,58,0.7)]">
      <div className="rounded-lg bg-primary/95 p-4">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/20" />
        <div className="space-y-1 border-b border-white/10 pb-3">
          <p className="text-sm font-semibold">{title}</p>
          {subtitle ? <p className="text-xs leading-5 text-white/70">{subtitle}</p> : null}
        </div>
        <div className="space-y-3 pt-4">{children}</div>
      </div>
    </div>
  )
}

export function PathwayCard({
  title,
  audience,
  summary,
  highlights,
  action,
  className,
}: {
  title: ReactNode
  audience: ReactNode
  summary: ReactNode
  highlights: string[]
  action?: ReactNode
  className?: string
}) {
  return (
    <Card className={cn("rounded-lg border-border py-0 shadow-none", className)}>
      <CardContent className="flex h-full flex-col gap-5 p-5">
        <div className="space-y-2">
          <p className="brand-eyebrow">{title}</p>
          <h3 className="text-lg font-semibold tracking-normal text-foreground">{audience}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{summary}</p>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {action ? <div className="mt-auto">{action}</div> : null}
      </CardContent>
    </Card>
  )
}
