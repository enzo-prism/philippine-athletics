#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm is required to run design tests. Install it first." >&2
  exit 1
fi

if [ ! -x "node_modules/.bin/playwright" ]; then
  echo "Installing dependencies..."
  pnpm install
fi

BROWSER_CACHE_MAC="$HOME/Library/Caches/ms-playwright"
BROWSER_CACHE_LINUX="$HOME/.cache/ms-playwright"
BROWSER_CACHE_CUSTOM="${PLAYWRIGHT_BROWSERS_PATH:-}"

if {
  [ -n "$BROWSER_CACHE_CUSTOM" ] && [ ! -d "$BROWSER_CACHE_CUSTOM" ];
} || {
  [ -z "$BROWSER_CACHE_CUSTOM" ] && [ ! -d "$BROWSER_CACHE_MAC" ] && [ ! -d "$BROWSER_CACHE_LINUX" ];
}; then
  echo "Installing Playwright browsers (first run only)..."
  pnpm exec playwright install
fi

echo "Running Playwright design tests..."
exec pnpm exec playwright test "$@"
