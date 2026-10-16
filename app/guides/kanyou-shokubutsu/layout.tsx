import type { Metadata } from "next";

const TITLE = "観葉植物の育て方と置き場所【2026年】日当たり・水やり・枯らさないための管理｜flowerデリ";
const DESC = "当サイトでは、観葉植物を枯らさないための育て方として、置き場所と日当たりの見極め方、水やりの頻度、季節ごとの管理、葉の状態から原因を確認する方法を解説します。サービスの比較と月額料金は「観葉植物のサブスク・レンタル比較」ページに掲載しています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/kanyou-shokubutsu/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }],  title: TITLE, description: DESC, url: "/guides/kanyou-shokubutsu/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
