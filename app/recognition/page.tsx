import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Badge } from "@/components/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { clubs } from "@/lib/data/clubs"
import { coaches } from "@/lib/data/coaches"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

const recognizedClubs = clubs.filter((club) => club.isRecognized || (club.recognitions && club.recognitions.length))
const recognizedCoaches = coaches.filter((coach) => coach.isRecognized || (coach.recognitions && coach.recognitions.length))

export default function RecognitionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Emoji symbol={emojiIcons.shield} className="text-base" />
              Recognition
            </span>
          }
          title="Recognition and trust signals for the athletics ecosystem."
          description="Recognition shows who meets Philippine Athletics standards for safety, coaching, and athlete care. Parents, athletes, clubs, and staff can quickly verify which clubs and coaches are officially recognized."
          stats={[
            { label: "Recognized clubs", value: recognizedClubs.length, note: "Club pathways verified against federation standards" },
            { label: "Recognized coaches", value: recognizedCoaches.length, note: "Coaching credentials and training stay visible" },
          ]}
          aside={<DemoAdSlot slotId="recognition-inline-leaderboard-1" format="mrec" variant="spotlight" />}
        />

        <Card className="page-section-tight gap-0 border-accent/20 bg-accent/5 py-0">
          <CardContent className="p-6 space-y-2">
            <p className="text-sm font-semibold text-foreground">Why this matters</p>
            <p className="text-sm text-muted-foreground">
              Verified clubs and coaches follow athlete-safety guidelines, maintain documentation, and meet federation standards.
              This protects athletes and keeps the sport fair.
            </p>
          </CardContent>
        </Card>

        <section className="space-y-4" data-testid="recognized-clubs">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Recognized Clubs</h2>
            <span className="text-xs text-muted-foreground">{recognizedClubs.length} total</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recognizedClubs.map((club) => (
              <Link
                key={club.id}
                href={`/clubs/${club.slug ?? club.id}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                aria-label={`Open recognized club ${club.name}`}
              >
                <Card className="hover-stroke-surface gap-0 py-0 transition-[background-color,border-color,box-shadow]">
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{club.name}</p>
                      <p className="text-xs text-muted-foreground">{club.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {club.recognitions?.map((item) => (
                        <Badge key={item} text={item} variant="accent" />
                      ))}
                    </div>
                    {club.recognitionDetails && club.recognitionDetails.length ? (
                      <div className="space-y-1 text-xs text-muted-foreground">
                        {club.recognitionDetails.map((detail) => (
                          <div key={`${detail.label}-${detail.issuer}`} className="flex flex-wrap gap-1">
                            <span className="font-semibold text-foreground">{detail.label}</span>
                            <span>• {detail.issuer}</span>
                            {detail.validThrough ? <span>• valid through {detail.validThrough}</span> : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid gap-3 sm:grid-cols-2">
          <DemoAdSlot slotId="recognition-inline-mrec-1" format="mrec" variant="inline" />
          <DemoAdSlot slotId="recognition-inline-mrec-2" format="mrec" variant="inline" className="hidden sm:block" />
        </div>

        <section className="space-y-4" data-testid="recognized-coaches">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Recognized Coaches</h2>
            <span className="text-xs text-muted-foreground">{recognizedCoaches.length} total</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recognizedCoaches.map((coach) => (
              <Link
                key={coach.id}
                href={`/coaches/${coach.slug ?? coach.id}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                aria-label={`Open recognized coach ${coach.name}`}
              >
                <Card className="hover-stroke-surface gap-0 py-0 transition-[background-color,border-color,box-shadow]">
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{coach.name}</p>
                      <p className="text-xs text-muted-foreground">{coach.club}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {coach.recognitions?.map((item) => (
                        <Badge key={item} text={item} variant="accent" />
                      ))}
                    </div>
                    {coach.recognitionDetails && coach.recognitionDetails.length ? (
                      <div className="space-y-1 text-xs text-muted-foreground">
                        {coach.recognitionDetails.map((detail) => (
                          <div key={`${detail.label}-${detail.issuer}`} className="flex flex-wrap gap-1">
                            <span className="font-semibold text-foreground">{detail.label}</span>
                            <span>• {detail.issuer}</span>
                            {detail.validThrough ? <span>• valid through {detail.validThrough}</span> : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
