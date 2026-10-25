// 2026-10-25: 動的ルート（personas・regions・use-cases・vs・service-guides・know-guides）の Article dateModified を、
// テンプレート固定の日付ではなく public/sitemap.xml の lastmod（scripts/lastmod-from-deploy.py が求めた本文の最終変更日）から出す。
// ビルド時にだけ読む（静的書き出し）。sitemap に無い・fallback より古い場合は fallback を使う（日付を戻さない）。
import { readFileSync } from "node:fs";
import { join } from "node:path";

let cache: Map<string, string> | null = null;

function load(): Map<string, string> {
  if (cache) return cache;
  const xml = readFileSync(join(process.cwd(), "public/sitemap.xml"), "utf8");
  cache = new Map();
  for (const m of xml.matchAll(/<loc>https:\/\/ohana-delivery\.com\/([^<]*)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})/g)) {
    cache.set(m[1].replace(/\/$/, ""), m[2]);
  }
  return cache;
}

/** path 例: "personas/kazoku-family"。戻り値は ISO（+09:00）。 */
export function dateModifiedFor(path: string, fallbackIso: string): string {
  const d = load().get(path.replace(/^\/|\/$/g, ""));
  const fb = fallbackIso.slice(0, 10);
  return `${d && d > fb ? d : fb}T00:00:00+09:00`;
}
