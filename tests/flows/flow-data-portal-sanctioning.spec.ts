import { test, expect } from "@playwright/test"

test("Flow: Data portal blocks unsanctioned event publishing", async ({ page }) => {
  await page.goto("/data-portal")
  await expect(page.getByRole("heading", { name: /Results Intake Portal/i })).toBeVisible()

  await page.getByTestId("results-sample").click()
  await page.getByTestId("map-validate").click()
  await page.getByTestId("validate-review").click()

  await page.getByTestId("meta-name").fill("Metro Trial Meet 2026")
  await page.getByTestId("meta-location").fill("Manila")
  await page.getByTestId("meta-startDate").fill("2026-03-01")
  await page.getByTestId("meta-endDate").fill("2026-03-02")
  await page.getByTestId("meta-organizer").fill("Metro Schools League")
  await page.getByTestId("meta-type").fill("Regional")

  await expect(page.getByTestId("sanction-check")).toContainText(/Unsanctioned event blocked/i)
  await expect(page.getByTestId("review-submit")).toBeDisabled()
})
