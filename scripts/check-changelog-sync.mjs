import { readFileSync } from "node:fs"
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

console.log(`Changelog sync OK: ${changelogDate} — ${changelogTitle}`)
