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
  app: "App pages",
  components: "Components",
  lib: "Utilities",
  data: "Data modules",
  docs: "Documentation",
  public: "Public assets",
  styles: "Styling",
  scripts: "Scripts",
  config: "Config",
  other: "Other files",
}

const tagLabels = {
  Athletes: "athlete pages",
  Competitions: "competition results",
  Rankings: "rankings",
  Clubs: "club pages",
  Coaches: "coach profiles",
  Recognition: "recognition and verification",
  Search: "search and discovery",
  "Results Intake": "results intake workflow",
  Changelog: "changelog viewer",
  Navigation: "navigation",
  Accounts: "signup and profile pages",
  "Demo Data": "demo data",
  Docs: "documentation",
  Styling: "visual styling",
  Assets: "images and assets",
  Tooling: "internal tools",
  Config: "project configuration",
  Components: "shared UI components",
  "App Pages": "app pages",
}

const tagNotes = {
  Athletes: "Updated athlete profiles or athlete-facing views.",
  Competitions: "Updated competition listings or results displays.",
  Rankings: "Updated ranking lists, filters, or ranking logic.",
  Clubs: "Updated club pages, rosters, or contact details.",
  Coaches: "Updated coach profiles or coaching details.",
  Recognition: "Updated recognition, certification, or trust indicators.",
  Search: "Improved how people search and discover profiles.",
  "Results Intake": "Improved the results intake workflow or previews.",
  Changelog: "Updated the demo changelog experience.",
  Navigation: "Adjusted navigation to improve discovery.",
  Accounts: "Updated signup or profile experiences.",
  "Demo Data": "Refreshed demo data used across the app.",
  Docs: "Updated documentation to keep everyone aligned.",
  Styling: "Visual polish and layout refinements.",
  Assets: "Updated imagery or static assets.",
  Tooling: "Improved internal tooling for maintenance.",
  Config: "Adjusted project configuration or dependencies.",
  Components: "Refined shared UI building blocks.",
  "App Pages": "Updated app pages or layouts.",
}

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
  const verb = pickVerb(subject, tags)
  const targets = tags.map((tag) => tagLabels[tag]).filter(Boolean)
  const summaryTargets = listify(targets.slice(0, 3))
  return `${verb} ${summaryTargets}.`
}

const buildStats = (files) => {
  const fileCount = files.length
  const insertions = files.reduce((sum, file) => sum + (file.additions ?? 0), 0)
  const deletions = files.reduce((sum, file) => sum + (file.deletions ?? 0), 0)
  const summary = `${fileCount} file${fileCount === 1 ? "" : "s"} changed, ${insertions} insertion${
    insertions === 1 ? "" : "s"
  }(+), ${deletions} deletion${deletions === 1 ? "" : "s"}(-)`
  return { files: fileCount, insertions, deletions, summary }
}

const buildNotes = (areas, files) => {
  const notes = []
  if (areas.includes("app")) notes.push("Updated app routes or page layouts.")
  if (areas.includes("components")) notes.push("Refined shared UI components.")
  if (areas.includes("data")) notes.push("Adjusted demo data or data relationships.")
  if (areas.includes("docs")) notes.push("Documentation updated for clarity and onboarding.")
  if (areas.includes("styles")) notes.push("Styling changes and visual polish tweaks.")
  if (areas.includes("config")) notes.push("Project configuration updates.")

  const topFiles = files
    .slice()
    .sort((a, b) => (b.additions ?? 0) + (b.deletions ?? 0) - ((a.additions ?? 0) + (a.deletions ?? 0)))
    .slice(0, 4)
    .map((file) => file.path)

  if (topFiles.length) {
    notes.push(`Key files touched: ${topFiles.join(", ")}.`)
  }
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
    const summary = `${subject}. Updated ${areaSummary}. ${stats.summary}.`
    const notes = buildNotes(areas, files)
    const plainSummary = buildPlainSummary(subject, tags)
    const plainNotes = buildPlainNotes(tags, subject)

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
      files,
    }
  })

const output = `export type CommitFile = {\\n  path: string\\n  additions: number | null\\n  deletions: number | null\\n}\\n\\nexport type CommitStats = {\\n  files: number\\n  insertions: number\\n  deletions: number\\n  summary: string\\n}\\n\\nexport type CommitLogEntry = {\\n  hash: string\\n  shortHash: string\\n  subject: string\\n  body?: string\\n  author: string\\n  date: string\\n  stats: CommitStats\\n  areas: string[]\\n  tags: string[]\\n  summary: string\\n  notes: string[]\\n  plainSummary: string\\n  plainNotes: string[]\\n  files: CommitFile[]\\n}\\n\\nexport const commitLogUpdatedAt = ${JSON.stringify(new Date().toISOString())}\\n\\nexport const commitLog: CommitLogEntry[] = ${JSON.stringify(commits, null, 2)}\\n`

const outputPath = resolve("lib/data/commit-log.ts")
writeFileSync(outputPath, output, "utf8")

console.log(`Wrote ${commits.length} commits to ${outputPath}`)
