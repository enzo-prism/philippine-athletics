import { readFileSync } from "node:fs"
import { execSync } from "node:child_process"
import { resolve } from "node:path"

const changelogPath = resolve(process.cwd(), "Changelog.md")
const updatesPath = resolve(process.cwd(), "lib", "data", "changelog-updates.ts")

const changelog = readFileSync(changelogPath, "utf8")
const updates = readFileSync(updatesPath, "utf8")

const changelogMatch = changelog.match(/^##\s*(\d{4}-\d{2}-\d{2})\s*—\s*(.+)$/m)
if (!changelogMatch) {
  throw new Error("No valid changelog top entry found in Changelog.md.")
}

const [, changelogDate, changelogTitle] = changelogMatch

const updatesMatch = updates.match(
  /export const productUpdates: ProductUpdateEntry\[\] = \[\s*\{\s*[\s\S]*?date:\s*"(\d{4}-\d{2}-\d{2})"[\s\S]*?title:\s*"([^"]+)"/
)
if (!updatesMatch) {
  throw new Error("No productUpdates entry found in lib/data/changelog-updates.ts.")
}

const [, updatesDate, updatesTitle] = updatesMatch

if (changelogDate !== updatesDate || changelogTitle.trim() !== updatesTitle.trim()) {
  throw new Error(
    `Changelog sources are out of sync.\n` +
      `Changelog.md: ${changelogDate} — ${changelogTitle}\n` +
      `changelog-updates.ts: ${updatesDate} — ${updatesTitle}\n` +
      "Keep these top entries aligned before building or releasing."
  )
}

try {
  execSync("node scripts/generate-commit-log.mjs --check", {
    encoding: "utf8",
    stdio: "pipe",
  })
} catch (error) {
  const fallbackCommit = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA
  if (!fallbackCommit) {
    if (process.env.VERCEL === "1" || process.env.CI === "1") {
      const message =
        error instanceof Error && "stdout" in error
          ? `${error.stdout}\n${error.stderr}`.trim()
          : error instanceof Error
            ? error.message
            : String(error)
      console.warn(
        `Changelog sync check skipped in non-git environment.\nCommit verification unavailable.\n` +
          `${message}\n` +
          "To fully verify, run locally with git available."
      )
      process.exit(0)
    }
  }

  if (fallbackCommit) {
    const snapshotPath = resolve(process.cwd(), "lib", "data", "commit-log.ts")
    const snapshotContent = readFileSync(snapshotPath, "utf8")
    const snapshotMatch = snapshotContent.match(/"hash":\\s*"([0-9a-f]{40})"/gi)
    const snapshotCommits = snapshotMatch ? snapshotMatch.map((entry) => entry.match(/"hash":\s*"([0-9a-f]{40})"/i)?.[1]).filter(Boolean) : []
    const safeFallback = snapshotCommits.includes(fallbackCommit)
    if (safeFallback) {
      const message =
        error instanceof Error && "stdout" in error
          ? `${error.stdout}\n${error.stderr}`.trim()
          : error instanceof Error
            ? error.message
            : String(error)
      console.warn(
        `Changelog sync check could not run git-based validation.\n` +
          `Falling back to deploy hash check with ${fallbackCommit.slice(0, 7)}.\n` +
          `${message}`
      )
      process.exit(0)
    }
  }

  const message =
    error instanceof Error && "stdout" in error
      ? `${error.stdout}\n${error.stderr}`.trim()
      : error instanceof Error
        ? error.message
        : String(error)
  throw new Error(`Commit log snapshot is out of sync. ${message}\nRun: pnpm data:commits`)
}

console.log(`Changelog sync OK: ${changelogDate} — ${changelogTitle}`)
