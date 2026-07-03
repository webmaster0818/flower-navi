// services.ts の verifiedAt を唯一の起点に、鮮度シグナルを自動同期する。
// - app/services/<slug>/page.tsx の Article LD dateModified
// - public/sitemap.xml の対象URL lastmod（サービス4ページ＋services.ts由来の価格を表示する比較ハブ）
// npm run build の prebuild で毎回実行される。手動実行: node scripts/sync-freshness.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// id → app/services/ ディレクトリ名
const DIR_BY_ID = { medelu: "medelu", hanameku: "hanameku", bloomee: "bloomee", andplants: "and-plants" };

const src = readFileSync(join(root, "data/services.ts"), "utf8");
const services = [];
const re = /id:\s*"([^"]+)"[\s\S]*?verifiedAt:\s*"(\d{4})年(\d{1,2})月(\d{1,2})日"/g;
let m;
while ((m = re.exec(src)) !== null) {
  const [, id, y, mo, d] = m;
  services.push({ id, iso: `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}` });
}
if (services.length === 0) throw new Error("services.ts から verifiedAt を抽出できません");

const latest = services.map((s) => s.iso).sort().at(-1);
console.log("verifiedAt:", services.map((s) => `${s.id}=${s.iso}`).join(" "), "| latest:", latest);

// 1) サービスページの Article LD dateModified
for (const s of services) {
  const dir = DIR_BY_ID[s.id];
  if (!dir) continue;
  const p = join(root, `app/services/${dir}/page.tsx`);
  let t = readFileSync(p, "utf8");
  const before = t;
  t = t.replace(/(\\"dateModified\\":\\")[^\\"]+(\\")/, `$1${s.iso}T00:00:00+09:00$2`);
  if (t !== before) {
    writeFileSync(p, t);
    console.log(`dateModified更新: services/${dir} -> ${s.iso}`);
  }
}

// 2) sitemap.xml の lastmod
const smPath = join(root, "public/sitemap.xml");
let sm = readFileSync(smPath, "utf8");
const targets = [
  ...services.map((s) => [`https://ohana-delivery.com/services/${DIR_BY_ID[s.id]}/`, s.iso]),
  ["https://ohana-delivery.com/compare/ryokin/", latest],
  ["https://ohana-delivery.com/compare/ichirinzashi/", latest],
];
for (const [loc, iso] of targets) {
  const pat = new RegExp(`(<loc>${loc.replace(/[/.]/g, "\\$&")}</loc>\\s*<lastmod>)[^<]+(</lastmod>)`);
  if (pat.test(sm)) {
    sm = sm.replace(pat, `$1${iso}$2`);
    console.log(`lastmod更新: ${loc} -> ${iso}`);
  } else {
    console.warn(`WARN: sitemap内に見つからない: ${loc}`);
  }
}
writeFileSync(smPath, sm);
console.log("sync-freshness 完了");
