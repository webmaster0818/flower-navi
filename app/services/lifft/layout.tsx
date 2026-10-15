import type { Metadata } from "next";

const title = "LIFFT（リフト）お花の定期便の口コミ・評判｜料金3,300円/月・縛りなし・解約方法を公式確認【2026年10月】｜flowerデリ";
const description = "LIFFT（リフト）のお花の定期便を公式サイトで確認。スタンダード3,300円/月、ライト1,480円/回（送料込）、継続期間の縛りなし、スキップ・解約は毎月19日までにメール。口コミの傾向とメリット・デメリットも解説。";

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
