import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { DemoAdSlot } from "@/components/ads/DemoAdSlot";
import { AppFooter, PageIntro } from "@/components/site/page-primitives";
import { Button } from "@/components/ui/button";
import { competitions } from "@/lib/data/competitions";

const statusOptions = ["Upcoming", "Past", "All"] as const;

type StatusFilter = (typeof statusOptions)[number];

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key];
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
};

const normalizeStatus = (value: string): StatusFilter =>
  statusOptions.includes(value as StatusFilter)
    ? (value as StatusFilter)
    : "Upcoming";

export default async function CompetitionsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const statusFilter = normalizeStatus(
    getParam(resolvedSearchParams, "status"),
  );
  const filtered =
    statusFilter === "All"
      ? competitions
      : competitions.filter((c) => c.status === statusFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Competition calendar"
          title="Search competitions"
          description="Track sanctioned meets, date windows, and profile entry points across the calendar."
          stats={[{ label: "Current view", value: statusFilter, note: "Filter upcoming, past, or all competitions" }]}
          actions={
            <div className="flex flex-wrap gap-3 text-sm">
              {statusOptions.map((status) => {
                const active = statusFilter === status;
                const href =
                  status === "Upcoming"
                    ? "/competitions"
                    : `/competitions?status=${encodeURIComponent(status)}`;
                return (
                  <Button
                    key={status}
                    asChild
                    type="button"
                    variant={active ? "secondary" : "outline"}
                    size="sm"
                    className="font-semibold"
                    data-testid={`competition-filter-${status.toLowerCase()}`}
                  >
                    <Link href={href}>{status}</Link>
                  </Button>
                );
              })}
            </div>
          }
          aside={<DemoAdSlot slotId="competitions-inline-leaderboard-1" format="mrec" variant="spotlight" />}
        />

        <section className="page-section">
          <div className="section-toolbar">
            <div>
              <p className="brand-eyebrow">Results</p>
              <h2 className="section-title">Competition list</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3" data-testid="competition-list">
          {filtered.map((comp) => (
            <Link
              key={comp.id}
              href={`/competitions/${comp.slug}`}
              className="block"
              aria-label={comp.name}
            >
              <article
                className="directory-card"
                data-testid="competition-item"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="text-lg font-semibold tracking-tight text-foreground">{comp.name}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{comp.location}</p>
                  </div>
                  <span className="rounded-full border border-border/80 bg-background/84 px-3 py-1 text-xs text-muted-foreground">
                    {comp.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{comp.dateLabel}</p>
              </article>
            </Link>
          ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <DemoAdSlot slotId="competitions-inline-mrec-1" format="mrec" variant="inline" />
          <DemoAdSlot
            slotId="competitions-inline-mrec-2"
            format="mrec"
            variant="inline"
            className="hidden sm:block"
          />
        </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}
