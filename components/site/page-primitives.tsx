import type { ReactNode } from "react"

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
    <section className={cn("page-intro-grid", className)}>
      <div className={cn("page-intro-surface", contentClassName)}>
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
    <section className={cn("detail-hero-grid", className)}>
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

export function AppFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("page-footer", className)}>
      <div className="page-shell">
        <p className="brand-subtext">© 2025 Philippine Athletics</p>
      </div>
    </footer>
  )
}
