import type { Metadata } from "next";

const title = "ハナプライム（HanaPrime）お花の定期便の料金・お届けサイクル・解約｜3コース12プランを公式確認【2026年11月】｜flowerデリ";
const description = "HanaPrime（ハナプライム）のお花の定期便を2026年11月24日に公式サイトで確認しました。季節のお花・お供え花・お供え花（対）の3コースで、1回980円〜4,980円（送料無料の表示）。毎週〜6か月ごと・日にち指定のお届けサイクル、スキップは6日前まで、解約はマイページから。沖縄県・離島には届きません。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/hanaprime/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/hanaprime/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
