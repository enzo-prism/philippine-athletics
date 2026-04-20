import { expect, test } from "@playwright/test"

test("Flow: ranking and athlete profile show matching PB/rank context", async ({ page }) => {
  await page.goto("/rankings?event=100m&gender=Women&ageGroup=Open&year=2025")
  await expect(page.getByTestId("rankings-list")).toBeVisible()

  const firstRow = page.getByTestId("rankings-row").first()
  await expect(firstRow).toBeVisible()

  const rankedName = (await firstRow.getByTestId("rankings-row-name").textContent())?.trim() ?? ""
  const rankedResultRaw = (await firstRow.getByTestId("rankings-row-result").textContent()) ?? ""
  const rankedResult = rankedResultRaw.replace(/^Best:\s*/i, "").trim()
  const rankedBadge = (await firstRow.getByTestId("rankings-row-rank").textContent())?.trim() ?? ""

  await page.getByTestId("rankings-row-link").first().click()
  await expect(page).toHaveURL(/event=100m/)
  await expect(page).toHaveURL(/gender=Women/)
  await expect(page).toHaveURL(/ageGroup=Open/)
  await expect(page).toHaveURL(/year=2025/)

  await expect(page.locator("h1")).toContainText(rankedName)
  await expect(page.getByText("Back to this ranking slice")).toBeVisible()

  const pbCard = page.getByText("Personal best").locator("..")
  const rankCard = page.getByText("Philippines rank").locator("..")

  await expect(pbCard).toContainText(rankedResult)
  await expect(rankCard).toContainText(rankedBadge)

  await page.getByRole("link", { name: /Back to this ranking slice/i }).click()
  await expect(page).toHaveURL(/\/rankings\?/)
  await expect(page).toHaveURL(/gender=Women/)
  await expect(page).toHaveURL(/ageGroup=Open/)
})
