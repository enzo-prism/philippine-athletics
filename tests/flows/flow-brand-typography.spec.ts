import { expect, test } from "@playwright/test";

type BrandRouteCheck = {
  path: string;
  requireVisibleAccent?: boolean;
};

const routeChecks: BrandRouteCheck[] = [
  { path: "/", requireVisibleAccent: true },
  { path: "/search", requireVisibleAccent: true },
  { path: "/athletes", requireVisibleAccent: true },
  { path: "/clubs", requireVisibleAccent: true },
  { path: "/coaches", requireVisibleAccent: true },
  { path: "/competitions", requireVisibleAccent: true },
  { path: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025", requireVisibleAccent: true },
  { path: "/data-portal", requireVisibleAccent: true },
  { path: "/profile", requireVisibleAccent: true },
  { path: "/changelog", requireVisibleAccent: true },
];

type BrandNode = {
  className: string;
  fontFamily: string;
  fontSizePx: number;
  text: string;
};

const collectVisibleBrandNodes = async (page: import("@playwright/test").Page): Promise<BrandNode[]> =>
  page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".brand-eyebrow, .brand-subtext"));
    const isVisible = (element: HTMLElement) => {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        style.opacity !== "0" &&
        rect.width > 4 &&
        rect.height > 4
      );
    };

    return nodes
      .filter(isVisible)
      .map((node) => {
        const style = window.getComputedStyle(node);
        return {
          className: node.className,
          fontFamily: style.fontFamily,
          fontSizePx: Number.parseFloat(style.fontSize || "0"),
          text: node.textContent?.trim() || "",
        };
      });
  });

test("Flow: system accent typography stays subtle and the new shell remains consistent", async ({ page }) => {
  const issues: string[] = [];

  await page.setViewportSize({ width: 1440, height: 900 });

  for (const routeCheck of routeChecks) {
    await page.goto(routeCheck.path, { waitUntil: "networkidle" });
    await page.waitForTimeout(120);

    const shellLink = page.getByRole("link", { name: /Philippine Athletics/i }).first();
    if (!(await shellLink.isVisible())) {
      issues.push(`${routeCheck.path}: missing primary shell brand link`);
    }

    const partnerRail = page.locator('[data-testid^="demo-ad-global-top"]').first();
    if (!(await partnerRail.isVisible())) {
      issues.push(`${routeCheck.path}: missing integrated partner rail`);
    }

    const brandNodes = await collectVisibleBrandNodes(page);

    if (routeCheck.requireVisibleAccent && brandNodes.length < 1) {
      issues.push(`${routeCheck.path}: expected at least one visible mono accent label`);
    }

    if (brandNodes.length > 12) {
      issues.push(`${routeCheck.path}: too many visible accent labels (${brandNodes.length})`);
    }

    for (const node of brandNodes) {
      const normalizedFontFamily = node.fontFamily.toLowerCase();
      if (!normalizedFontFamily.includes("geist")) {
        issues.push(`${routeCheck.path}: missing Geist system font (${node.className} => ${node.fontFamily})`);
      }

      if (node.fontSizePx > 13) {
        issues.push(`${routeCheck.path}: accent text too large (${node.fontSizePx}px, text="${node.text}")`);
      }
    }
  }

  expect(issues).toEqual([]);
});
