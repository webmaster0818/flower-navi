import type { Metadata } from "next";

const TITLE = '観葉植物のサブスク・レンタル比較【2026年】季節の入れ替え・メンテナンス込み（管理不要）で選ぶ｜flowerデリ';
const DESC = '季節ごとに植物を入れ替えられる観葉植物サブスク・レンタルと、水やりまで任せられる法人向けのメンテナンス込みレンタルを、公式サイトで確認した月額・交換頻度・訪問回数・契約条件で比較します（2026年10月29日確認）。購入との違いも解説します。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/kanyou-shokubutsu/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: TITLE,
    description: DESC,
    url: "/compare/kanyou-shokubutsu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
