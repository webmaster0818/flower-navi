import type { Metadata } from "next";

const TITLE = "オフィス向け観葉植物・花の定期便【2026年9月】小規模オフィス・メンテナンス込み・管理不要で選ぶ法人ガイド｜flowerデリ";
const DESC = "オフィスの受付・エントランス・執務スペースに観葉植物や花を置きたい法人向けガイド。数人〜十数人の小規模オフィスでも使えるか、月2回などメンテナンス込みにできるか、管理担当を置かずに続けられるか、エントランスには何を置くか、東京23区の対応エリアはどう確認するかを、公式で確認できる料金だけで整理します（bloomee bizは1回3,000円・税込・送料無料／2026年8月17日確認）。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/houjin-office/" },
  openGraph: { title: TITLE, description: DESC, url: "/guides/houjin-office/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
