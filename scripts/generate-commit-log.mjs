import { execSync } from "node:child_process"
import { writeFileSync } from "node:fs"
import { resolve } from "node:path"

const LOG_FORMAT = "%H%x1f%an%x1f%ad%x1f%s%x1f%b%x1e"
const logRaw = execSync(`git --no-pager log --date=iso-strict --pretty=format:'${LOG_FORMAT}'`, {
  encoding: "utf8",
}).trim()

if (!logRaw) {
  throw new Error("No git commits found.")
}

const parseNumStat = (hash) => {
  const raw = execSync(`git --no-pager show --numstat --format= ${hash}`, {
    encoding: "utf8",
  }).trim()
  if (!raw) return []
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [add, del, ...rest] = line.split("\t")
      const path = rest.join("\t")
      const additions = add === "-" ? null : Number.parseInt(add, 10)
      const deletions = del === "-" ? null : Number.parseInt(del, 10)
      return { path, additions, deletions }
    })
}

const areaLabels = {
  app: "Core screens",
  components: "Shared interface",
  lib: "Behind the scenes",
  data: "Sample data",
  docs: "Guides & notes",
  public: "Images & media",
  styles: "Look and feel",
  scripts: "Tools",
  config: "App setup",
  other: "General updates",
}

const tagLabels = {
  Athletes: "athlete profiles",
  Competitions: "meet results",
  Rankings: "rankings",
  Clubs: "club pages",
  Coaches: "coach profiles",
  Recognition: "trust and safety",
  Search: "finding people",
  "Results Intake": "result submissions",
  Changelog: "update timeline",
  Navigation: "navigation",
  Accounts: "profiles & sign-up",
  "Demo Data": "sample data",
  Docs: "guides & notes",
  Styling: "look and feel",
  Assets: "images & media",
  Tooling: "behind the scenes",
  Config: "app setup",
  Components: "shared interface pieces",
  "App Pages": "core screens",
}

const tagNotes = {
  Athletes: "Made athlete profiles clearer and easier to browse.",
  Competitions: "Highlighted meet results and how to explore them.",
  Rankings: "Clarified how rankings and comparisons are shown.",
  Clubs: "Improved club pages and roster visibility.",
  Coaches: "Made coaching details easier to understand.",
  Recognition: "Added clearer trust signals and verification context.",
  Search: "Made it quicker to find people and results.",
  "Results Intake": "Refined the result submission and preview flow.",
  Changelog: "Improved how updates are shared in plain language.",
  Navigation: "Made navigation easier to follow.",
  Accounts: "Smoothed sign-up and profile steps.",
  "Demo Data": "Refreshed sample data for more realistic browsing.",
  Docs: "Added clearer guidance for teammates and stakeholders.",
  Styling: "Polished layout, spacing, and visual balance.",
  Assets: "Refreshed images and supporting media.",
  Tooling: "Improved internal tools for upkeep.",
  Config: "Kept the app setup reliable and current.",
  Components: "Refined shared UI pieces for consistency.",
  "App Pages": "Improved core screens and layouts.",
}

const tagImpact = {
  Athletes: "Makes athlete profiles clearer and easier to share.",
  Competitions: "Makes competition results easier to find after a meet.",
  Rankings: "Helps people trust rankings and compare performances.",
  Clubs: "Helps families evaluate clubs and training options.",
  Coaches: "Helps athletes find qualified coaching.",
  Recognition: "Clarifies trust and safety signals for parents and staff.",
  Search: "Makes finding people and clubs faster.",
  "Results Intake": "Helps capture official results even without external feeds.",
  Changelog: "Keeps everyone aligned on progress.",
  Navigation: "Improves discoverability of key areas.",
  Accounts: "Smooths sign-up and profile flows.",
  "Demo Data": "Makes the demo feel more complete and realistic.",
  Docs: "Improves shared understanding of the product.",
  Styling: "Improves visual clarity and polish.",
  Assets: "Strengthens presentation with better imagery.",
  Tooling: "Makes maintenance and updates easier.",
  Config: "Keeps the app stable and reliable.",
  Components: "Improves consistency across shared interface pieces.",
  "App Pages": "Makes core pages feel more complete.",
}

const impactPriority = [
  "Rankings",
  "Competitions",
  "Athletes",
  "Clubs",
  "Coaches",
  "Recognition",
  "Search",
  "Results Intake",
  "Changelog",
  "Navigation",
  "Accounts",
  "Demo Data",
  "Docs",
  "Styling",
  "Assets",
  "Components",
  "App Pages",
  "Tooling",
  "Config",
]

const getAreas = (files) => {
  const areas = new Set()
  files.forEach((file) => {
    const [top] = file.path.split("/")
    if (!top) return
    if (top === "lib" && file.path.startsWith("lib/data")) {
      areas.add("data")
      return
    }
    if (areaLabels[top]) {
      areas.add(top)
      return
    }
    areas.add("other")
  })
  return Array.from(areas)
}

const getTags = (files) => {
  const tags = new Set()
  files.forEach((file) => {
    const path = file.path
    if (path.startsWith("app/athletes")) tags.add("Athletes")
    if (path.startsWith("app/competitions")) tags.add("Competitions")
    if (path.startsWith("app/rankings")) tags.add("Rankings")
    if (path.startsWith("app/clubs")) tags.add("Clubs")
    if (path.startsWith("app/coaches")) tags.add("Coaches")
    if (path.startsWith("app/recognition")) tags.add("Recognition")
    if (path.startsWith("app/search") || path.includes("global-search")) tags.add("Search")
    if (path.startsWith("app/data-portal")) tags.add("Results Intake")
    if (path.startsWith("app/changelog") || path.includes("commit-log")) tags.add("Changelog")
    if (path.startsWith("components/navigation")) tags.add("Navigation")
    if (path.startsWith("app/signup") || path.startsWith("app/profile")) tags.add("Accounts")
    if (path.startsWith("lib/data")) tags.add("Demo Data")
    if (path.startsWith("docs/")) tags.add("Docs")
    if (path.startsWith("styles/")) tags.add("Styling")
    if (path.startsWith("public/")) tags.add("Assets")
    if (path.startsWith("scripts/")) tags.add("Tooling")
    if (
      [
        "package.json",
        "pnpm-lock.yaml",
        "tsconfig.json",
        "next.config.mjs",
        "postcss.config.mjs",
        "tailwind.config.ts",
      ].includes(path)
    ) {
      tags.add("Config")
    }
    if (path.startsWith("components/") && !path.startsWith("components/navigation")) tags.add("Components")
    if (path.startsWith("app/") && !path.startsWith("app/athletes") && !path.startsWith("app/competitions")) {
      tags.add("App Pages")
    }
  })
  return Array.from(tags)
}

const listify = (items) => {
  if (items.length <= 1) return items[0] ?? "the app"
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`
}

const pickVerb = (subject, tags) => {
  const lower = subject.toLowerCase()
  if (lower.startsWith("fix") || lower.includes("fix")) return "Fixed"
  if (lower.startsWith("feat") || lower.includes("add ")) return "Added"
  if (lower.startsWith("refactor")) return "Improved"
  if (lower.startsWith("style")) return "Polished"
  if (tags.includes("Docs")) return "Updated"
  return "Updated"
}

const buildPlainSummary = (subject, tags) => {
  let verb = pickVerb(subject, tags)
  const targets = tags.map((tag) => tagLabels[tag]).filter(Boolean)
  if (verb === "Updated" && targets.some((target) => target.toLowerCase().includes("update"))) {
    verb = "Refreshed"
  }
  const summaryTargets = listify(targets.slice(0, 3))
  return `${verb} ${summaryTargets}.`
}

const buildStats = (files) => {
  const fileCount = files.length
  const insertions = files.reduce((sum, file) => sum + (file.additions ?? 0), 0)
  const deletions = files.reduce((sum, file) => sum + (file.deletions ?? 0), 0)
  return { files: fileCount, insertions, deletions, summary: "" }
}

const buildNotes = (areas) => {
  const notes = []
  if (areas.includes("app")) notes.push("Updated core screens and key flows.")
  if (areas.includes("components")) notes.push("Refined shared UI pieces for consistency.")
  if (areas.includes("data")) notes.push("Improved the sample data used in the demo.")
  if (areas.includes("docs")) notes.push("Updated guides so everyone stays aligned.")
  if (areas.includes("styles")) notes.push("Visual polish and layout refinements.")
  if (areas.includes("config")) notes.push("Kept the app setup healthy and reliable.")
  return notes
}

const buildPlainNotes = (tags, subject) => {
  const notes = []
  const lower = subject.toLowerCase()
  if (lower.startsWith("fix") || lower.includes("fix")) {
    notes.push("Focused on reliability and reducing friction.")
  }
  tags.forEach((tag) => {
    const note = tagNotes[tag]
    if (note) notes.push(note)
  })
  return notes.slice(0, 4)
}

const buildPlainImpact = (tags) => {
  if (!tags.length) return "Keeps the product moving forward."
  const ordered = [
    ...impactPriority.filter((tag) => tags.includes(tag)),
    ...tags.filter((tag) => !impactPriority.includes(tag)),
  ]
  const impacts = ordered
    .map((tag) => tagImpact[tag])
    .filter(Boolean)
    .slice(0, 2)
  if (!impacts.length) return "Keeps the product moving forward."
  return impacts.length === 1 ? impacts[0] : `${impacts[0]} ${impacts[1]}`
}

const commits = logRaw
  .split("\x1e")
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => {
    const [hash, author, date, subject, body] = entry.split("\x1f")
    const files = parseNumStat(hash)
    const stats = buildStats(files)
    const areas = getAreas(files)
    const tags = getTags(files)
    const areaSummary = areas.map((area) => areaLabels[area] ?? area).join(", ") || "General updates"
    const summary = `${pickVerb(subject, tags)} ${areaSummary}.`
    const notes = buildNotes(areas)
    const plainSummary = buildPlainSummary(subject, tags)
    const plainNotes = buildPlainNotes(tags, subject)
    const plainImpact = buildPlainImpact(tags)

    return {
      hash,
      shortHash: hash.slice(0, 7),
      subject,
      body: body?.trim() || undefined,
      author,
      date,
      stats,
      areas,
      tags,
      summary,
      notes,
      plainSummary,
      plainNotes,
      plainImpact,
      files,
    }
  })

const output = `export type CommitFile = {
  path: string
  additions: number | null
  deletions: number | null
}

export type CommitStats = {
  files: number
  insertions: number
  deletions: number
  summary: string
}

export type CommitLogEntry = {
  hash: string
  shortHash: string
  subject: string
  body?: string
  author: string
  date: string
  stats: CommitStats
  areas: string[]
  tags: string[]
  summary: string
  notes: string[]
  plainSummary: string
  plainNotes: string[]
  plainImpact: string
  files: CommitFile[]
}

export const commitLogUpdatedAt = ${JSON.stringify(new Date().toISOString())}

export const commitLog: CommitLogEntry[] = ${JSON.stringify(commits, null, 2)}
`

const outputPath = resolve("lib/data/commit-log.ts")
writeFileSync(outputPath, output, "utf8")

console.log(`Wrote ${commits.length} commits to ${outputPath}`)
