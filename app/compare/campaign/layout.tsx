import type { Metadata } from "next";

const TITLE = "花のサブスクの初回特典・お試しプラン比較【2026年7月】安く始める方法｜flowerデリ";
const DESC = "花のサブスクを初めて・安く始めたい方へ。bloomee・medelu・AND PLANTS・hanamekuの「初回に使えるお試し／最安プラン」を、送料込みの実額で比較します。時限クーポン・初回無料は変動するため、公式での最新確認の仕方もあわせて解説（確認日つき）。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/campaign/" },
  openGraph: { title: TITLE, description: DESC, url: "/compare/campaign/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
