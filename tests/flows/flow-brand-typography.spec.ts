import { expect, test } from "@playwright/test";

type BrandRouteCheck = {
  path: string;
  expectedVisibleCount: number;
};

const routeChecks: BrandRouteCheck[] = [
  { path: "/", expectedVisibleCount: 2 },
  { path: "/athletes", expectedVisibleCount: 2 },
  { path: "/athletes/athlete-lauren-hoffman", expectedVisibleCount: 2 },
  { path: "/clubs", expectedVisibleCount: 2 },
  { path: "/clubs/manila-striders-track-club", expectedVisibleCount: 1 },
  { path: "/coaches", expectedVisibleCount: 2 },
  { path: "/coaches/ana-reyes", expectedVisibleCount: 1 },
  { path: "/competitions", expectedVisibleCount: 2 },
  { path: "/competitions/2025-southeast-asian-games", expectedVisibleCount: 2 },
  { path: "/events", expectedVisibleCount: 1 },
  { path: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025", expectedVisibleCount: 2 },
  { path: "/recognition", expectedVisibleCount: 1 },
  { path: "/search", expectedVisibleCount: 1 },
  { path: "/sponsors", expectedVisibleCount: 2 },
  { path: "/sponsors/sprintlab", expectedVisibleCount: 1 },
  { path: "/membership", expectedVisibleCount: 1 },
  { path: "/membership/benefits", expectedVisibleCount: 1 },
  { path: "/signup", expectedVisibleCount: 2 },
  { path: "/profile", expectedVisibleCount: 2 },
  { path: "/data-portal", expectedVisibleCount: 1 },
  { path: "/changelog", expectedVisibleCount: 1 },
  { path: "/how-it-works", expectedVisibleCount: 1 },
  { path: "/demo", expectedVisibleCount: 1 },
  { path: "/demo/governance", expectedVisibleCount: 1 },
  { path: "/demo/institutions", expectedVisibleCount: 1 },
  { path: "/demo/lgus", expectedVisibleCount: 1 },
  { path: "/demo/off-script", expectedVisibleCount: 1 },
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

test("Flow: brand typography is subtle, route-scoped, and consistently applied", async ({ page }) => {
  const issues: string[] = [];

  await page.setViewportSize({ width: 1440, height: 900 });

  for (const routeCheck of routeChecks) {
    await page.goto(routeCheck.path, { waitUntil: "networkidle" });
    await page.waitForTimeout(120);

    const brandNodes = await collectVisibleBrandNodes(page);

    if (brandNodes.length !== routeCheck.expectedVisibleCount) {
      issues.push(
        `${routeCheck.path}: expected ${routeCheck.expectedVisibleCount} visible brand accents, found ${brandNodes.length}`,
      );
    }

    for (const node of brandNodes) {
      const normalizedFontFamily = node.fontFamily.toLowerCase();
      if (!normalizedFontFamily.includes("bbt martires free") && !normalizedFontFamily.includes("brandaccent")) {
        issues.push(`${routeCheck.path}: missing BBT Martires font (${node.className} => ${node.fontFamily})`);
      }

      if (node.fontSizePx > 14) {
        issues.push(`${routeCheck.path}: accent text too large (${node.fontSizePx}px, text="${node.text}")`);
      }
    }
  }

  expect(issues).toEqual([]);
});
