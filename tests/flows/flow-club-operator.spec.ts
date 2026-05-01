import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: coach profile opens linked athlete and club", async ({ page }) => {
  const testInfo = test.info()

  await page.goto("/coaches?q=Fresh")
  await expect(page.getByRole("heading", { name: /find the coach record/i })).toBeVisible()
  await expect(page.getByText(/No coaches found/i)).toBeVisible()

  await checkA11y(page, testInfo, "coaches-empty")

  await page.goto("/coaches?q=Guevarra")
  await expect(page.getByRole("link", { name: /Sean Guevarra/i })).toBeVisible()

  await page.goto("/coaches/dario-de-rosas")
  await expect(page.getByRole("heading", { name: /Dario De Rosas/i })).toBeVisible()
  await expect(page.getByText(/National track and field head coach/i)).toBeVisible()
  await expect(page.getByRole("heading", { name: /sources/i })).toBeVisible()

  await page.goto("/coaches/karl-francisco")
  await expect(page.getByRole("heading", { name: /Karl Francisco/i })).toBeVisible()
  await expect(page.getByText(/medium-confidence national-coach profile/i)).toBeVisible()
  await expect(page.getByText(/roster confirmation/i).first()).toBeVisible()

  await page.goto("/coaches/new-coach")
  await expect(page.getByRole("heading", { name: /new coach/i })).toBeVisible()
  await expect(page.getByRole("heading", { name: /athletes coached/i })).toBeVisible()

  await checkA11y(page, testInfo, "coach-profile")
})
