import Link from "next/link"

import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Navigation } from "@/components/navigation"
import { ProfileAvatar } from "@/components/ProfileAvatar"
import { AppFooter, DetailHero } from "@/components/site/page-primitives"
import { Badge } from "@/components/ui/badge"
import { getAthleteProfileOrStub } from "@/lib/data/athletes"
import {
  buildCompetitionResultKey,
  getAgeGroup,
  getBestResultForEvent,
  getMergedCompetitionResults,
  toCanonicalEventKey,
} from "@/lib/data/performance-evidence"
import { buildRankings, getRankingYears, type AgeGroup, type Gender } from "@/lib/data/rankings"
import { decodeIdParam, formatEventLabel, parseDateToTimestamp } from "@/lib/data/utils"
import { type EmojiSymbol, Emoji, emojiIcons } from "@/lib/ui/emoji"

export const dynamic = "force-dynamic"
export const dynamicParams = true

const ContactItem = ({ emoji, label, value }: { emoji: EmojiSymbol; label: string; value: string }) => (
  <div className="flex items-center gap-2 text-sm text-foreground">
    <Emoji symbol={emoji} className="text-base" />
    <span className="font-medium">{label}:</span>
    <span className="text-muted-foreground">{value}</span>
  </div>
)

const formatRank = (rank?: string | number) => {
  if (rank === undefined || rank === null || rank === "") return "—"
  if (typeof rank === "number") return `#${rank}`
  const trimmed = rank.trim()
  return trimmed.startsWith("#") ? trimmed : `#${trimmed}`
}

const parseGender = (value?: string): Gender | undefined =>
  value === "Women" || value === "Men" ? value : undefined

const parseAgeGroup = (value?: string): AgeGroup | undefined =>
  value === "Open" || value === "Youth" ? value : undefined

export default async function AthleteProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ event?: string; year?: string; gender?: string; ageGroup?: string; highlight?: string }>
}) {
  const { id: rawId } = await params
  const resolvedSearchParams = await searchParams
  const id = decodeIdParam(rawId)
  const athlete = getAthleteProfileOrStub(id)
  const isStub = athlete.isStub
  const primaryEvent = athlete.events[0]
  const fullName = `${athlete.firstName} ${athlete.lastName}`.trim()

  const rankingYears = getRankingYears()
  const latestRankingYear = rankingYears[0] ?? new Date().getFullYear()

  const requestedEvent = resolvedSearchParams?.event?.trim() ?? ""
  const requestedYear = Number.parseInt(resolvedSearchParams?.year ?? "", 10)
  const requestedGender = parseGender(resolvedSearchParams?.gender)
  const requestedAgeGroup = parseAgeGroup(resolvedSearchParams?.ageGroup)

  const hasStrictRankingContext = Boolean(
    requestedEvent && Number.isFinite(requestedYear) && requestedGender && requestedAgeGroup,
  )

  const activeEvent = formatEventLabel(requestedEvent || primaryEvent?.name || "")
  const activeYear = Number.isFinite(requestedYear) ? requestedYear : latestRankingYear
  const activeGender = requestedGender ?? athlete.gender
  const activeAgeGroup = requestedAgeGroup ?? getAgeGroup(athlete.birthDate, activeYear)
  const activeEventKey = toCanonicalEventKey(activeEvent)

  const mergedCompetitions = getMergedCompetitionResults(athlete)
  const sortedCompetitions = [...mergedCompetitions].sort(
    (a, b) => (parseDateToTimestamp(b.date) ?? 0) - (parseDateToTimestamp(a.date) ?? 0),
  )
  const latestCompetition = sortedCompetitions[0]

  const yearBest = activeEventKey
    ? getBestResultForEvent({
        athlete,
        eventKey: activeEventKey,
        scope: "year",
        year: activeYear,
      })
    : null

  const focusResult = yearBest?.competition ?? latestCompetition
  const focusLabel = yearBest ? `Year best (${activeYear})` : "Most recent result"

  const strictRankingEntry =
    activeEvent && activeGender
      ? buildRankings({
          event: activeEvent,
          gender: activeGender,
          ageGroup: activeAgeGroup,
          year: activeYear,
        }).find((entry) => entry.id === athlete.id)
      : undefined

  const perEventRankingCache = new Map<string, ReturnType<typeof buildRankings>>()

  const deriveEventStats = (eventName: string) => {
    const eventKey = toCanonicalEventKey(eventName)
    const best = eventKey
      ? getBestResultForEvent({
          athlete,
          eventKey,
          scope: "all-time",
        })
      : null

    let rank: number | undefined
    if (athlete.gender) {
      const cacheKey = `${eventKey}|${athlete.gender}|${activeAgeGroup}|${activeYear}`
      if (!perEventRankingCache.has(cacheKey)) {
        perEventRankingCache.set(
          cacheKey,
          buildRankings({
            event: eventName,
            gender: athlete.gender,
            ageGroup: activeAgeGroup,
            year: activeYear,
          }),
        )
      }
      rank = perEventRankingCache.get(cacheKey)?.find((entry) => entry.id === athlete.id)?.rank
    }

    return {
      pb: best?.competition.result,
      pbSource: best?.competition.source ?? "Demo data",
      rank,
    }
  }

  const primaryStats = primaryEvent ? deriveEventStats(primaryEvent.name) : null
  const primaryPbDisplay = primaryStats?.pb ?? primaryEvent?.personalBest ?? "—"
  const primaryRankDisplay = strictRankingEntry
    ? formatRank(strictRankingEntry.rank)
    : hasStrictRankingContext
      ? "Unranked in selected context"
      : formatRank(primaryStats?.rank ?? primaryEvent?.nationalRank)

  const primarySource =
    strictRankingEntry?.source ??
    primaryStats?.pbSource ??
    (primaryEvent
      ? mergedCompetitions.find(
          (competition) =>
            toCanonicalEventKey(competition.event) === toCanonicalEventKey(primaryEvent.name) && competition.source,
        )?.source ?? "Demo data"
      : "Demo data")

  const highlightedResultKey = yearBest ? buildCompetitionResultKey(yearBest.competition) : null

  const rankingSliceHref =
    hasStrictRankingContext && requestedGender && requestedAgeGroup
      ? `/rankings?${new URLSearchParams({
          event: requestedEvent,
          year: String(activeYear),
          gender: requestedGender,
          ageGroup: requestedAgeGroup,
          highlight: fullName,
        }).toString()}`
      : null

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/athletes" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
            <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
            Back to Athletes
          </Link>

          {rankingSliceHref ? (
            <Link href={rankingSliceHref} className="flex items-center gap-2 text-xs font-semibold text-accent w-fit">
              <Emoji symbol={emojiIcons.filter} className="text-sm" />
              Back to this ranking slice
            </Link>
          ) : null}
        </div>

        <DetailHero
          eyebrow="Athlete"
          title={`${athlete.firstName} ${athlete.lastName}`}
          description={athlete.specialty}
          chips={
            <>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                <Emoji symbol={emojiIcons.location} className="text-sm" />
                {athlete.location}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                Club: {athlete.club}
              </span>
            </>
          }
          notice={isStub ? "Athlete details are coming soon. Basic placeholder shown to avoid broken links." : undefined}
          stats={[
            { label: "Primary event", value: primaryEvent?.name ?? "—" },
            {
              label: "Personal best",
              value: primaryPbDisplay,
              note: primarySource === "World Athletics" ? "World Athletics" : primarySource,
            },
            { label: "Philippines rank", value: primaryRankDisplay, note: strictRankingEntry?.source ?? undefined },
            {
              label: focusLabel,
              value: focusResult ? `${formatEventLabel(focusResult.event)} ${focusResult.result}` : "—",
              note: focusResult ? `${focusResult.meet} · ${focusResult.date}` : undefined,
            },
          ]}
          aside={
            <div className="detail-sidebar-card space-y-4">
              <ProfileAvatar name={`${athlete.firstName} ${athlete.lastName}`} />
              <div className="space-y-1">
                <p className="brand-eyebrow">Athlete profile</p>
                <p className="text-lg font-semibold tracking-tight text-foreground">{fullName}</p>
                <p className="text-sm text-muted-foreground">{athlete.specialty}</p>
              </div>
              <DemoAdSlot slotId="athlete-profile-top" format="mobile" variant="inline" />
            </div>
          }
        />

        <div className="detail-layout">
          <div className="detail-stack">
            <section className="page-section-tight space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.medal} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Event performances</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {athlete.events.map((evt) => {
                  const derived = deriveEventStats(evt.name)
                  const query = new URLSearchParams({
                    event: formatEventLabel(evt.name),
                    year: String(activeYear),
                    highlight: fullName,
                  })

                  if (athlete.gender) query.set("gender", athlete.gender)
                  query.set("ageGroup", getAgeGroup(athlete.birthDate, activeYear))

                  return (
                    <Link key={evt.name} href={`/rankings?${query.toString()}`} className="detail-list-item hover:border-accent transition-colors">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-foreground">{evt.name}</p>
                        <span className="rounded-full border border-accent/25 bg-accent/8 px-2.5 py-1 text-xs font-semibold text-accent">
                          PB: {derived.pb ?? evt.personalBest}
                        </span>
                      </div>
                      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                        <p>National: {formatRank(derived.rank ?? evt.nationalRank)}</p>
                        <p>Asian: {formatRank(evt.asianRank)}</p>
                        <p>Global: {formatRank(evt.globalRank)}</p>
                        {evt.seasonBest ? <p>Season: {evt.seasonBest}</p> : null}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>

            <section className="page-section-tight space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.calendar} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Recent competitions</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {sortedCompetitions.map((comp, i) => {
                  const isHighlight =
                    highlightedResultKey !== null && buildCompetitionResultKey(comp) === highlightedResultKey

                  return (
                    <div
                      key={`${comp.meet}-${i}`}
                      className={`detail-list-item ${isHighlight ? "border-accent bg-accent/5" : "bg-background/74"}`}
                    >
                      <p className="text-sm font-semibold text-foreground">{comp.meet}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {comp.date} • {comp.location}
                      </p>
                      <p className="mt-1 text-xs text-foreground">
                        {formatEventLabel(comp.event)} — {comp.result} ({comp.place})
                      </p>
                      <Badge
                        variant="outline"
                        className={
                          comp.source === "World Athletics"
                            ? "mt-3 border-emerald-300/60 bg-emerald-50 text-emerald-700"
                            : "mt-3 border-border text-foreground bg-background/78"
                        }
                      >
                        {comp.source ?? "Demo data"}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="page-section-tight space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.calendar} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Upcoming competitions</h2>
              </div>
              {athlete.upcoming.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming competitions listed.</p>
              ) : (
                <div className="grid gap-3 md:grid-cols-2">
                  {athlete.upcoming.map((up, i) => (
                    <div key={`${up.meet}-${i}`} className="detail-list-item bg-background/74">
                      <p className="text-sm font-semibold text-foreground">{up.meet}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {up.date} • {up.location}
                      </p>
                      <p className="mt-1 text-xs text-foreground">Events: {up.events.join(", ")}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="detail-stack">
            <div className="detail-sidebar-card space-y-4">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Profile</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Birth date</p>
                  <p className="font-medium text-foreground">{athlete.birthDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Hometown</p>
                  <p className="font-medium text-foreground">{athlete.hometown}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Club</p>
                  {athlete.clubId ? (
                    <Link href={`/clubs/${athlete.clubId}`} className="font-medium text-accent hover:text-accent/80 transition-colors">
                      {athlete.club}
                    </Link>
                  ) : (
                    <p className="font-medium text-foreground">{athlete.club}</p>
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground">Coach</p>
                  {athlete.coachId ? (
                    <Link href={`/coaches/${athlete.coachId}`} className="font-medium text-accent hover:text-accent/80 transition-colors">
                      {athlete.coach}
                    </Link>
                  ) : (
                    <p className="font-medium text-foreground">{athlete.coach}</p>
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground">Joined</p>
                  <p className="font-medium text-foreground">{athlete.joinedYear}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Years active</p>
                  <p className="font-medium text-foreground">{new Date().getFullYear() - athlete.joinedYear} years</p>
                </div>
              </div>
            </div>

            <div className="detail-sidebar-card space-y-3">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Contact</p>
              <div className="space-y-2">
                {athlete.contact.sms ? <ContactItem emoji={emojiIcons.phone} label="Text" value={athlete.contact.sms} /> : null}
                {athlete.contact.whatsapp ? (
                  <ContactItem emoji={emojiIcons.chat} label="WhatsApp" value={athlete.contact.whatsapp} />
                ) : null}
                {athlete.contact.email ? <ContactItem emoji={emojiIcons.mail} label="Email" value={athlete.contact.email} /> : null}
                {athlete.contact.instagram ? (
                  <ContactItem emoji={emojiIcons.sparkles} label="Instagram" value={athlete.contact.instagram} />
                ) : null}
                {athlete.contact.facebook ? (
                  <ContactItem emoji={emojiIcons.chat} label="Facebook" value={athlete.contact.facebook} />
                ) : null}
              </div>
            </div>

            <div className="detail-sidebar-card space-y-3">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Sponsors</p>
              {athlete.sponsors.length === 0 ? (
                <p className="text-sm text-muted-foreground">No sponsors listed.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {athlete.sponsors.map((sponsor) => (
                    <span
                      key={sponsor.name}
                      className="rounded-full border border-accent/25 bg-accent/8 px-2.5 py-1 text-xs font-semibold text-accent"
                      title={sponsor.note}
                    >
                      {sponsor.name} • {sponsor.category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
