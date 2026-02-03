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

const commits = logRaw
  .split("\x1e")
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => {
    const [hash, author, date, subject, body] = entry.split("\x1f")
    const files = parseNumStat(hash)
    const stats = buildStats(files)
    const areas = getAreas(files)
    const areaSummary = areas.map((area) => areaLabels[area] ?? area).join(", ") || "General updates"
    const summary = `${subject}. Updated ${areaSummary}. ${stats.summary}.`
    const notes = buildNotes(areas, files)

    return {
      hash,
      shortHash: hash.slice(0, 7),
      subject,
      body: body?.trim() || undefined,
      author,
      date,
      stats,
      areas,
      summary,
      notes,
      files,
    }
  })

const output = `export type CommitFile = {\n  path: string\n  additions: number | null\n  deletions: number | null\n}\n\nexport type CommitStats = {\n  files: number\n  insertions: number\n  deletions: number\n  summary: string\n}\n\nexport type CommitLogEntry = {\n  hash: string\n  shortHash: string\n  subject: string\n  body?: string\n  author: string\n  date: string\n  stats: CommitStats\n  areas: string[]\n  summary: string\n  notes: string[]\n  files: CommitFile[]\n}\n\nexport const commitLogUpdatedAt = ${JSON.stringify(new Date().toISOString())}\n\nexport const commitLog: CommitLogEntry[] = ${JSON.stringify(commits, null, 2)}\n`

const outputPath = resolve("lib/data/commit-log.ts")
writeFileSync(outputPath, output, "utf8")

console.log(`Wrote ${commits.length} commits to ${outputPath}`)
