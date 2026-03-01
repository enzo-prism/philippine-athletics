import { expect, test } from "@playwright/test"

test("Flow: ranking and athlete profile show matching PB/rank context", async ({ page }) => {
  await page.goto("/rankings?event=100m&gender=Women&ageGroup=Open&year=2025")
  await expect(page.getByTestId("rankings-list")).toBeVisible()

  const firstRow = page.getByTestId("rankings-row").first()
  await expect(firstRow).toBeVisible()

  const rankedName = (await firstRow.locator("p.text-sm.font-semibold").first().textContent())?.trim() ?? ""
  const rankedEvent = (await firstRow.locator("p.text-xs.text-muted-foreground").first().textContent())?.trim() ?? ""
  const rankedResultRaw = (await firstRow.locator("span.font-semibold.text-foreground").first().textContent()) ?? ""
  const rankedResult = rankedResultRaw.replace(/^Best:\s*/i, "").trim()
  const rankedBadge = (await firstRow.getByText(/^#\d+$/).first().textContent())?.trim() ?? ""

  await page.getByTestId("rankings-row-link").first().click()
  await expect(page).toHaveURL(/event=100m/)
  await expect(page).toHaveURL(/gender=Women/)
  await expect(page).toHaveURL(/ageGroup=Open/)
  await expect(page).toHaveURL(/year=2025/)

  await expect(page.locator("h1")).toContainText(rankedName)
  await expect(page.getByText("Back to this ranking slice")).toBeVisible()

  const pbCard = page
    .locator("section.grid.grid-cols-2.md\\:grid-cols-4")
    .locator("div.p-4.rounded-none.border.border-border.bg-card")
    .nth(1)
  const rankCard = page
    .locator("section.grid.grid-cols-2.md\\:grid-cols-4")
    .locator("div.p-4.rounded-none.border.border-border.bg-card")
    .nth(2)

  await expect(pbCard).toContainText(rankedResult)
  await expect(rankCard).toContainText(rankedBadge)

  const eventCard = page.getByRole("link", { name: new RegExp(rankedEvent, "i") }).first()
  await eventCard.click()
  await expect(page).toHaveURL(/\/rankings\?/)
  await expect(page).toHaveURL(/gender=Women/)
  await expect(page).toHaveURL(/ageGroup=Open/)
})
