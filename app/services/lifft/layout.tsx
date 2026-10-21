import type { Metadata } from "next";

const title = "LIFFT（リフト）お花の定期便の口コミ・評判｜料金3,300円/月・ライト1,480円/回・縛りなし・解約方法を公式確認【2026年10月】｜flowerデリ";
const description = "LIFFT（リフト）のお花の定期便の料金と条件を公式サイトで確認しました。スタンダードは3,300円/月、ライトは1,480円/回（送料込）で、継続期間の条件はありません。スキップ・解約は毎月19日までにメールで連絡します。口コミの傾向とメリット・デメリットもご説明します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/lifft/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/lifft/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
