// services.ts の verifiedAt を唯一の起点に、鮮度シグナルを自動同期する。
// - app/services/<slug>/page.tsx の Article LD dateModified
// - public/sitemap.xml の対象URL lastmod（サービス4ページ＋services.ts由来の価格を表示する比較ハブ）
// npm run build の prebuild で毎回実行される。手動実行: node scripts/sync-freshness.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
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
  const iso = `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  services.push({ id, iso, verifiedIso: iso });
}
if (services.length === 0) throw new Error("services.ts から verifiedAt を抽出できません");

// 2026-10-15: 口コミ・評判の受け皿（/services/<slug>/）は料金を確認し直さなくても本文（口コミ傾向・FAQ）を更新するので、
// reviewEvidence.ts の updatedAt（本文の最終更新日）が verifiedAt より新しければそちらを採る。
const reSrc = readFileSync(join(root, "data/reviewEvidence.ts"), "utf8");
// 2026-10-24: 10/17 に shortName と updatedAt の間へ verdictTitle が入り、旧正規表現（shortName の直後の行だけを見る）が
// 全件不一致になっていた。id: の位置で各エントリを区切り、そのエントリ内の updatedAt を読む（項目の並び順に依存しない）。
const idPos = [...reSrc.matchAll(/^\s*id:\s*"([^"]+)",/gm)];
if (idPos.length === 0) throw new Error("reviewEvidence.ts から id を抽出できません");
for (let i = 0; i < idPos.length; i++) {
  const block = reSrc.slice(idPos[i].index, i + 1 < idPos.length ? idPos[i + 1].index : undefined);
  const u = block.match(/updatedAt:\s*"(\d{4})年(\d{1,2})月(\d{1,2})日"/);
  if (!u) {
    console.warn(`WARN: reviewEvidence.ts の ${idPos[i][1]} に updatedAt が見つからない`);
    continue;
  }
  const id = idPos[i][1];
  const [, y, mo, d] = u;
  const iso = `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const sv = services.find((x) => x.id === id);
  if (sv && iso > sv.iso) sv.iso = iso;
}

// 比較ハブ（ryokin・ichirinzashi）は services.ts の料金だけを表示するので、口コミ本文の更新日ではなく verifiedAt の最新を使う
const latest = services.map((s) => s.verifiedIso).sort().at(-1);
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
  const cur = sm.match(pat);
  if (cur) {
    // 2026-10-24: 本文の更新で既に新しい lastmod が入っている場合に戻さない（前進のみ）
    const now = sm.slice(cur.index + cur[1].length).match(/^[^<]+/)[0].trim();
    if (iso > now) {
      sm = sm.replace(pat, `$1${iso}$2`);
      console.log(`lastmod更新: ${loc} ${now} -> ${iso}`);
    }
  } else {
    console.warn(`WARN: sitemap内に見つからない: ${loc}`);
  }
}
writeFileSync(smPath, sm);

// 3) 静的ページ（app/**/page.tsx。services/ と動的ルート [slug] を除く）に書かれた
//    Article/WebPage の dateModified と、画面の「最終更新日：YYYY年M月D日」「const MODIFIED」を
//    sitemap の lastmod（scripts/lastmod-from-deploy.py が求めた本文の最終変更日）に合わせる（前進のみ）。
//    2026-10-25 朝は guides/kabin だけ → 12:00 に全静的ページへ拡大。動的ルートは data/lastmod.ts がビルド時に sitemap を読む。
//    ※ 料金の確認日（UPDATED・「〜時点・公式確認」）は本文の更新日とは別なので触らない。
const lastmodOf = new Map(
  [...sm.matchAll(/<loc>https:\/\/ohana-delivery\.com\/([^<]*)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})/g)].map((x) => [
    x[1].replace(/\/$/, ""),
    x[2],
  ]),
);
const jp = (iso) => `${+iso.slice(0, 4)}年${+iso.slice(5, 7)}月${+iso.slice(8, 10)}日`;
const isoOfJp = (y, mo, d) => `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
function walk(dir, rel = "") {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name.includes("[") || e.name === "components" || (rel === "" && e.name === "services")) continue;
      out.push(...walk(join(dir, e.name), rel ? `${rel}/${e.name}` : e.name));
    } else if (e.name === "page.tsx") out.push(rel);
  }
  return out;
}
let pagesUpdated = 0;
for (const path of walk(join(root, "app"))) {
  const iso = lastmodOf.get(path);
  if (!iso) continue; // sitemap に無いページは触らない
  const p = join(root, "app", path, "page.tsx");
  let t = readFileSync(p, "utf8");
  const before = t;
  const log = [];
  // JSON-LD（文字列リテラル内のエスケープ形式／オブジェクト形式の両方）
  t = t.replace(/(\\"dateModified\\":\\")(\d{4}-\d{2}-\d{2})([^\\"]*)(\\")/g, (all, a, d, rest, b) =>
    iso > d ? (log.push(`dateModified ${d}`), `${a}${iso}T00:00:00+09:00${b}`) : all,
  );
  t = t.replace(/(\bdateModified:\s*")(\d{4}-\d{2}-\d{2})([^"]*)(")/g, (all, a, d, rest, b) =>
    iso > d ? (log.push(`dateModified ${d}`), `${a}${iso}${rest ? "T00:00:00+09:00" : ""}${b}`) : all,
  );
  // 画面の最終更新日
  t = t.replace(/(最終更新日：)(\d{4})年(\d{1,2})月(\d{1,2})日/g, (all, a, y, mo, d) =>
    iso > isoOfJp(y, mo, d) ? (log.push(`表示 ${isoOfJp(y, mo, d)}`), `${a}${jp(iso)}`) : all,
  );
  t = t.replace(/(const MODIFIED = ")(\d{4})年(\d{1,2})月(\d{1,2})日(")/g, (all, a, y, mo, d, b) =>
    iso > isoOfJp(y, mo, d) ? (log.push(`MODIFIED ${isoOfJp(y, mo, d)}`), `${a}${jp(iso)}${b}`) : all,
  );
  if (t !== before) {
    writeFileSync(p, t);
    pagesUpdated++;
    console.log(`更新日を本文の最終変更日に: ${path || "/"} ${log.join("・")} -> ${iso}`);
  }
}
console.log(`静的ページの更新日を合わせた: ${pagesUpdated}ページ`);
console.log("sync-freshness 完了");
