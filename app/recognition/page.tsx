import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { Card, CardContent } from "@/components/ui/card"
import { clubs } from "@/lib/data/clubs"
import { coaches } from "@/lib/data/coaches"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

const recognizedClubs = clubs.filter((club) => club.isRecognized || (club.recognitions && club.recognitions.length))
const recognizedCoaches = coaches.filter((coach) => coach.isRecognized || (coach.recognitions && coach.recognitions.length))

export default function RecognitionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <Emoji symbol={emojiIcons.shield} className="text-base" />
            Recognition
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Official &amp; Trusted</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Recognition shows who meets Philippine Athletics standards for safety, coaching, and athlete care.
            Parents, athletes, and staff can quickly verify which clubs and coaches are officially recognized.
          </p>
        </header>

        <Card className="py-0 gap-0 border-accent/30 bg-accent/5">
          <CardContent className="p-6 space-y-2">
            <p className="text-sm font-semibold text-foreground">Why this matters</p>
            <p className="text-sm text-muted-foreground">
              Verified clubs and coaches follow SafeSport guidelines, maintain documentation, and meet federation standards.
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
              <Link key={club.id} href={`/clubs/${club.slug ?? club.id}`} className="block">
                <Card className="py-0 gap-0 hover:border-accent transition-colors">
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

        <section className="space-y-4" data-testid="recognized-coaches">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Recognized Coaches</h2>
            <span className="text-xs text-muted-foreground">{recognizedCoaches.length} total</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recognizedCoaches.map((coach) => (
              <Link key={coach.id} href={`/coaches/${coach.slug ?? coach.id}`} className="block">
                <Card className="py-0 gap-0 hover:border-accent transition-colors">
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
      </div>
    </div>
  )
}
