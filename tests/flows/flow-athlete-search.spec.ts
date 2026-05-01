import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: homepage jump and athlete search", async ({ page }) => {
  const testInfo = test.info()

  await page.goto("/")
  await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()

  for (const destination of ["/athletes", "/clubs", "/coaches", "/events"]) {
    await page.goto("/")
    await page.getByLabel("Search the core app").fill("Fresh")
    await page.getByLabel("Search destination").selectOption(destination)
    await page.getByRole("button", { name: /go/i }).click()
    await expect(page).toHaveURL(new RegExp(`${destination.replace("/", "\\/")}\\?q=`))
  }

  await page.goto("/athletes?q=Fresh")
  await expect(page.getByRole("heading", { name: /find the athlete record/i })).toBeVisible()
  await expect(page.getByText(/No athletes found/i)).toBeVisible()
  await checkA11y(page, testInfo, "athletes-empty-search")

  await page.goto("/athletes?q=Hoffman")
  await expect(page.getByRole("link", { name: /Lauren Hoffman/i })).toBeVisible()

  await page.goto("/athletes/lauren-hoffman")
  await expect(page.getByRole("heading", { name: /Lauren Hoffman/i })).toBeVisible()
  await expect(page.getByText(/2024 Paris Olympian/i).first()).toBeVisible()
  await expect(page.getByText(/55\.47/).first()).toBeVisible()

  await page.goto("/athletes/yacine-guermali")
  await expect(page.getByRole("heading", { name: /Yacine Guermali/i })).toBeVisible()
  await expect(page.getByText(/1500m 3:40\.87/i).first()).toBeVisible()
  await expect(page.getByText(/SEA Games medalist/i).first()).toBeVisible()
})
