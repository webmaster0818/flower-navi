import type { Metadata } from "next";

const title = "LIFFT（リフト）お花の定期便の口コミ・評判｜料金3,300円/月・ライト1,480円/回・縛りなし・解約方法を公式確認【2026年10月】｜flowerデリ";
const description = "LIFFT（リフト）の口コミは「季節感のある珍しい花」「ジャーナルが楽しい」が好評で、注意点は締切の早さとメール解約です。公式掲載の声28件・レビュー記事2件の傾向と、スタンダード3,300円/月・ライト1,480円/回（送料込）、毎月19日締切の解約方法を2026年10月29日に公式で確認しました。";

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
