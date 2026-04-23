import type { ReactNode } from "react"
import { AlertCircle, Info } from "lucide-react"
import { CheckIcon } from "@/components/icons/athletics-icons"

import { cn } from "@/lib/utils"

type IntroStat = {
  label: string
  value: ReactNode
  note?: ReactNode
}

type PageIntroProps = {
  eyebrow: ReactNode
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  stats?: IntroStat[]
  aside?: ReactNode
  className?: string
  contentClassName?: string
  titleClassName?: string
}

type DetailHeroProps = {
  eyebrow: ReactNode
  title: ReactNode
  description?: ReactNode
  chips?: ReactNode
  stats?: IntroStat[]
  aside?: ReactNode
  notice?: ReactNode
  className?: string
}

type PageSectionProps = {
  eyebrow?: ReactNode
  title?: ReactNode
  description?: ReactNode
  actions?: ReactNode
  children: ReactNode
  className?: string
}

type MetricTileProps = {
  label: ReactNode
  value: ReactNode
  note?: ReactNode
  tone?: "default" | "accent" | "success" | "warning"
  className?: string
}

type EmptyStateProps = {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  className?: string
}

type StatusAlertProps = {
  title: ReactNode
  description?: ReactNode
  tone?: "info" | "success" | "warning"
  className?: string
}

type StepperProps = {
  steps: Array<{ label: string; description?: ReactNode; status?: "current" | "complete" | "upcoming" }>
  className?: string
}

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  stats,
  aside,
  className,
  contentClassName,
  titleClassName,
}: PageIntroProps) {
  return (
    <section className={cn("page-intro-grid", !aside && "lg:grid-cols-1", className)}>
      <div className={cn("page-intro-surface", !aside && "max-w-5xl", contentClassName)}>
        <div className="space-y-4">
          <p className="brand-eyebrow">{eyebrow}</p>
          <div className="space-y-3">
            <h1 className={cn("page-title", titleClassName)}>{title}</h1>
            {description ? <p className="page-copy">{description}</p> : null}
          </div>
        </div>

        {actions ? <div className="page-actions">{actions}</div> : null}

        {stats?.length ? (
          <div className="stat-strip">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-tile">
                <p className="stat-label">{stat.label}</p>
                <div className="stat-value">{stat.value}</div>
                {stat.note ? <p className="stat-note">{stat.note}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {aside ? <div className="page-intro-aside">{aside}</div> : null}
    </section>
  )
}

export function DetailHero({
  eyebrow,
  title,
  description,
  chips,
  stats,
  aside,
  notice,
  className,
}: DetailHeroProps) {
  return (
    <section className={cn("detail-hero-grid", !aside && "lg:grid-cols-1", className)}>
      <div className="detail-hero-surface">
        <div className="space-y-5">
          <div className="space-y-4">
            <p className="brand-eyebrow">{eyebrow}</p>
            {chips ? <div className="detail-chip-row">{chips}</div> : null}
            <div className="space-y-3">
              <h1 className="page-title">{title}</h1>
              {description ? <p className="page-copy">{description}</p> : null}
            </div>
          </div>

          {notice ? <div className="detail-notice">{notice}</div> : null}
        </div>

        {stats?.length ? (
          <div className="stat-strip">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-tile">
                <p className="stat-label">{stat.label}</p>
                <div className="stat-value">{stat.value}</div>
                {stat.note ? <p className="stat-note">{stat.note}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {aside ? <div className="page-intro-aside">{aside}</div> : null}
    </section>
  )
}

export function PageSection({
  eyebrow,
  title,
  description,
  actions,
  children,
  className,
}: PageSectionProps) {
  return (
    <section className={cn("page-section", className)}>
      {title || description || actions || eyebrow ? (
        <div className="section-toolbar">
          <div className="space-y-2">
            {eyebrow ? <p className="brand-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? <p className="section-copy">{description}</p> : null}
          </div>
          {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
        </div>
      ) : null}
      <div className={title || description || actions || eyebrow ? "mt-5" : undefined}>{children}</div>
    </section>
  )
}

export function MetricTile({ label, value, note, tone = "default", className }: MetricTileProps) {
  const toneClassName =
    tone === "accent"
      ? "border-accent/35 bg-accent/8"
      : tone === "success"
        ? "border-emerald-300/60 bg-emerald-50"
        : tone === "warning"
          ? "border-amber-300/65 bg-amber-50"
          : "border-border bg-background/82"

  return (
    <div className={cn("rounded-lg border px-4 py-4", toneClassName, className)}>
      <p className="stat-label">{label}</p>
      <div className="stat-value">{value}</div>
      {note ? <p className="stat-note">{note}</p> : null}
    </div>
  )
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("rounded-lg border border-dashed border-border bg-card/72 p-6 text-center", className)}>
      <p className="text-base font-semibold text-foreground">{title}</p>
      {description ? <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  )
}

export function StatusAlert({ title, description, tone = "info", className }: StatusAlertProps) {
  const Icon = tone === "success" ? CheckIcon : tone === "warning" ? AlertCircle : Info
  const toneClassName =
    tone === "success"
      ? "border-emerald-300/60 bg-emerald-50 text-emerald-900"
      : tone === "warning"
        ? "border-amber-300/70 bg-amber-50 text-amber-900"
        : "border-accent/30 bg-accent/8 text-foreground"

  return (
    <div className={cn("flex gap-3 rounded-lg border p-4", toneClassName, className)}>
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        {description ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  )
}

export function Stepper({ steps, className }: StepperProps) {
  return (
    <ol className={cn("grid gap-2 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, index) => {
        const complete = step.status === "complete"
        const current = step.status === "current"
        return (
          <li
            key={step.label}
            className={cn(
              "rounded-lg border bg-card p-3",
              current && "border-accent/45 bg-accent/8",
              complete && "border-emerald-300/60 bg-emerald-50",
            )}
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border text-xs font-semibold",
                  complete
                    ? "border-emerald-400 bg-emerald-100 text-emerald-800"
                    : current
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background text-muted-foreground",
                )}
              >
                {complete ? <CheckIcon className="size-3.5" aria-hidden="true" /> : index + 1}
              </span>
              <p className="text-sm font-semibold text-foreground">{step.label}</p>
            </div>
            {step.description ? <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.description}</p> : null}
          </li>
        )
      })}
    </ol>
  )
}

export function AppFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("page-footer", className)}>
      <div className="page-shell">
        <p className="brand-subtext">© 2025 Philippine Athletics</p>
      </div>
    </footer>
  )
}
