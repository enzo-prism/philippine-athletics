import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ProfileAvatar } from "@/components/ProfileAvatar"
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
    requestedEvent &&
      Number.isFinite(requestedYear) &&
      requestedGender &&
      requestedAgeGroup,
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

  const allTimeBest = activeEventKey
    ? getBestResultForEvent({
        athlete,
        eventKey: activeEventKey,
        scope: "all-time",
      })
    : null

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
      bestCompetition: best?.competition,
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
          (competition) => toCanonicalEventKey(competition.event) === toCanonicalEventKey(primaryEvent.name) && competition.source,
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

      <div className="page-shell py-12 space-y-10">
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

        <DemoAdSlot slotId="athlete-profile-top" format="leaderboard" />

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="brand-eyebrow bg-accent/10 border border-accent/30 px-3 py-1 rounded-none">
              Athlete
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-none">
              <Emoji symbol={emojiIcons.location} className="text-sm" />
              {athlete.location}
            </span>
            <span className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-none">
              Club: {athlete.club}
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <ProfileAvatar name={`${athlete.firstName} ${athlete.lastName}`} />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  {athlete.firstName} {athlete.lastName}
                </h1>
              </div>
            </div>
          </div>

          {isStub ? (
            <div className="p-3 rounded-none border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
              Athlete details are coming soon. Basic placeholder shown to avoid broken links.
            </div>
          ) : null}
        </header>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 rounded-none border border-border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-semibold">Primary event</p>
            <p className="text-base font-semibold text-foreground mt-1">{primaryEvent?.name ?? "—"}</p>
          </div>
          <div className="p-4 rounded-none border border-border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-semibold">Personal best</p>
            <p className="text-base font-semibold text-foreground mt-1">{primaryPbDisplay}</p>
            <Badge
              variant="outline"
              className={
                primarySource === "World Athletics"
                  ? "mt-2 border-emerald-300/60 text-emerald-700 bg-emerald-50"
                  : "mt-2 border-border text-foreground bg-muted"
              }
            >
              {primarySource}
            </Badge>
          </div>
          <div className="p-4 rounded-none border border-border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-semibold">Philippines rank</p>
            <p className="text-base font-semibold text-foreground mt-1">{primaryRankDisplay}</p>
            {strictRankingEntry?.source ? (
              <Badge
                variant="outline"
                className={
                  strictRankingEntry.source === "World Athletics"
                    ? "mt-2 border-emerald-300/60 text-emerald-700 bg-emerald-50"
                    : "mt-2 border-border text-foreground bg-muted"
                }
              >
                {strictRankingEntry.source}
              </Badge>
            ) : null}
          </div>
          <div className="p-4 rounded-none border border-border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-semibold">{focusLabel}</p>
            <p className="text-sm font-semibold text-foreground mt-1">
              {focusResult ? `${formatEventLabel(focusResult.event)} ${focusResult.result}` : "—"}
            </p>
            {focusResult ? (
              <p className="text-xs text-muted-foreground">
                {focusResult.meet} • {focusResult.date}
              </p>
            ) : null}
            {focusResult ? (
              <Badge
                variant="outline"
                className={
                  focusResult.source === "World Athletics"
                    ? "mt-2 border-emerald-300/60 text-emerald-700 bg-emerald-50"
                    : "mt-2 border-border text-foreground bg-muted"
                }
              >
                {focusResult.source ?? "Demo data"}
              </Badge>
            ) : null}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.medal} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Event Performances</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    <Link key={evt.name} href={`/rankings?${query.toString()}`} className="block group">
                      <div className="p-4 rounded-none border border-border bg-card space-y-2 group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">{evt.name}</p>
                          <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-2 py-1 rounded-none">
                            PB: {derived.pb ?? evt.personalBest}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p>National: {formatRank(derived.rank ?? evt.nationalRank)}</p>
                          <p>Asian: {formatRank(evt.asianRank)}</p>
                          <p>Global: {formatRank(evt.globalRank)}</p>
                          {evt.seasonBest ? <p>Season: {evt.seasonBest}</p> : null}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.calendar} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Recent Competitions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sortedCompetitions.map((comp, i) => {
                  const isHighlight = highlightedResultKey !== null && buildCompetitionResultKey(comp) === highlightedResultKey

                  return (
                    <div
                      key={`${comp.meet}-${i}`}
                      className={`p-4 rounded-none border space-y-1 ${isHighlight ? "border-accent bg-accent/5" : "border-border bg-card"}`}
                    >
                      <p className="text-sm font-semibold text-foreground">{comp.meet}</p>
                      <p className="text-xs text-muted-foreground">
                        {comp.date} • {comp.location}
                      </p>
                      <p className="text-xs text-foreground">
                        {formatEventLabel(comp.event)} — {comp.result} ({comp.place})
                      </p>
                      <Badge
                        variant="outline"
                        className={
                          comp.source === "World Athletics"
                            ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                            : "border-border text-foreground bg-muted"
                        }
                      >
                        {comp.source ?? "Demo data"}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.calendar} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Upcoming Competitions</h2>
              </div>
              {athlete.upcoming.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming competitions listed.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {athlete.upcoming.map((up, i) => (
                    <div key={`${up.meet}-${i}`} className="p-4 rounded-none border border-border bg-card space-y-1">
                      <p className="text-sm font-semibold text-foreground">{up.meet}</p>
                      <p className="text-xs text-muted-foreground">
                        {up.date} • {up.location}
                      </p>
                      <p className="text-xs text-foreground">Events: {up.events.join(", ")}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-none border border-border bg-card space-y-4">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Profile</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Birth date</p>
                  <p className="text-foreground font-medium">{athlete.birthDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Hometown</p>
                  <p className="text-foreground font-medium">{athlete.hometown}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Club</p>
                  {athlete.clubId ? (
                    <Link
                      href={`/clubs/${athlete.clubId}`}
                      className="text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      {athlete.club}
                    </Link>
                  ) : (
                    <p className="text-foreground font-medium">{athlete.club}</p>
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground">Coach</p>
                  {athlete.coachId ? (
                    <Link
                      href={`/coaches/${athlete.coachId}`}
                      className="text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      {athlete.coach}
                    </Link>
                  ) : (
                    <p className="text-foreground font-medium">{athlete.coach}</p>
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground">Joined</p>
                  <p className="text-foreground font-medium">{athlete.joinedYear}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Years Active</p>
                  <p className="text-foreground font-medium">{new Date().getFullYear() - athlete.joinedYear} years</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-none border border-border bg-card space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
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

            <div className="p-6 rounded-none border border-border bg-muted/40 space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Sponsors</p>
              {athlete.sponsors.length === 0 ? (
                <p className="text-sm text-muted-foreground">No sponsors listed.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {athlete.sponsors.map((sponsor) => (
                    <span
                      key={sponsor.name}
                      className="text-xs font-semibold px-2 py-1 rounded-none bg-white text-accent border border-accent/30"
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
      </div>

      <div className="border-t border-border mt-16">
        <div className="page-shell py-8">
          <p className="brand-subtext">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
