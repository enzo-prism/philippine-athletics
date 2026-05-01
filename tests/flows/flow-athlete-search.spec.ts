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
  await expect(page.getByRole("heading", { name: /^Athletes$/i })).toBeVisible()
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

  await page.goto("/athletes?q=Bejoy")
  await expect(page.getByRole("link", { name: /Bernalyn Bejoy/i })).toBeVisible()

  await page.goto("/athletes/bernalyn-bejoy")
  await expect(page.getByRole("heading", { name: /Bernalyn Bejoy/i })).toBeVisible()
  await expect(page.getByText(/World rank/i).first()).toBeVisible()
  await expect(page.getByText(/#433/i).first()).toBeVisible()
  await expect(page.getByText(/2:06\.83/i).first()).toBeVisible()
  await expect(page.getByText(/World Athletics ID/i).first()).toBeVisible()
  await expect(page.getByText(/14788477/i).first()).toBeVisible()
  await expect(page.getByRole("link", { name: /Club FilAm Sports/i })).toBeVisible()

  await page.goto("/athletes?q=Daynata")
  await expect(page.getByRole("link", { name: /Daniella Daynata/i })).toBeVisible()

  await page.goto("/athletes/daniella-daynata")
  await expect(page.getByRole("heading", { name: /Daniella Daynata/i })).toBeVisible()
  await expect(page.getByText(/World rank/i).first()).toBeVisible()
  await expect(page.getByText(/#433/i).first()).toBeVisible()
  await expect(page.getByText(/46\.58/i).first()).toBeVisible()
  await expect(page.getByText(/World Athletics ID/i).first()).toBeVisible()
  await expect(page.getByText(/14849592/i).first()).toBeVisible()
  await expect(page.getByText(/Daniela DAYNATA/i).first()).toBeVisible()
  await expect(page.getByRole("link", { name: /Club FilAm Sports/i })).toBeVisible()
})
