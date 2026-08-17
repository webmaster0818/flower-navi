import type { Metadata } from "next";

const TITLE = "法人・オフィス向け観葉植物・花のサブスク／レンタル｜月額の目安・メンテナンス付き・小規模オフィス対応【2026年8月更新】｜flowerデリ";
const DESC = "オフィスの受付・エントランスに観葉植物や花を置きたい法人向けガイド。購入型とレンタル型どちらが得か、月額5,000円前後で始められるか、メンテナンス付きで管理不要にできるか、小規模オフィスでの始め方、東京23区の対応エリアの確認方法を、公式確認できる料金だけで整理します（bloomee bizは1回3,000円・税込・送料無料／2026年8月17日確認）。";

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
