import type { Metadata } from "next";

const title = "日本総合園芸「花の定期便」の口コミ・評判｜40以上のコース・料金・配達エリアを公式確認【2026年10月】｜flowerデリ";
const description = "日本総合園芸の花の定期便の内容を公式サイトで確認しました。コースは40以上あり、切り花は1回1,298円〜（自社配達便）です。自社配達便は関西近郊、宅配便は対象地域のみの対応で、中止は月単位でメールまたは電話にて連絡します。口コミ・評判の扱いとメリット・デメリットもご説明します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/nihon-sogo-engei/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/nihon-sogo-engei/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
