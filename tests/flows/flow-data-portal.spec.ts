import path from "path"
import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow 6: Results intake", async ({ page }) => {
  const testInfo = test.info()
  const fixturePath = path.resolve(process.cwd(), "tests/fixtures/results-intake.csv")

  await test.step("Open data portal", async () => {
    await page.goto("/data-portal")
    await expect(page.getByRole("heading", { name: /Results Intake Portal/i })).toBeVisible()
  })

  await test.step("Upload results file", async () => {
    await page.getByTestId("results-upload-input").setInputFiles(fixturePath)
    await expect(page.getByText("Field mapping", { exact: false })).toBeVisible()
  })

  await test.step("Validate and review", async () => {
    await page.getByTestId("map-validate").click()
    await expect(page.getByText("Validation summary", { exact: false })).toBeVisible()
    await page.getByTestId("validate-review").click()
    await expect(page.getByText("Competition metadata", { exact: false })).toBeVisible()
  })

  await test.step("Complete metadata", async () => {
    await page.getByTestId("meta-name").fill("2025 SEA Games")
    await page.getByTestId("meta-location").fill("Bangkok, Thailand")
    await page.getByTestId("meta-startDate").fill("2025-12-11")
    await page.getByTestId("meta-endDate").fill("2025-12-20")
    await page.getByTestId("meta-organizer").fill("SEA Games Federation")
    await page.getByTestId("meta-type").fill("Regional")
  })

  await checkA11y(page, testInfo, "results-intake-review")

  await test.step("Submit for review", async () => {
    await page.getByTestId("review-submit").click()
    await expect(page.getByTestId("submission-log")).toContainText("2025 SEA Games")
  })
})
