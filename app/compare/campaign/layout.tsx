import type { Metadata } from "next";

const TITLE = "花のサブスクの初回特典・お試しプラン比較【2026年7月】安く始める方法｜flowerデリ";
const DESC = "花のサブスクを費用を抑えて始めたい方に向けて、bloomee・medelu・AND PLANTS・hanamekuのお試しプラン・最安プランを送料込みの実額で比較しています。期間限定のクーポンや特典は変動するため、公式サイトでの確認方法もあわせて解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/campaign/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }],  title: TITLE, description: DESC, url: "/compare/campaign/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
