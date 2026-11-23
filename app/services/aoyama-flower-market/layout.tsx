import type { Metadata } from "next";

const title = "青山フラワーマーケットの定期便（旬の花定期便）の料金・送料・解約｜送料込みの1回あたり総額を公式確認【2026年11月】｜flowerデリ";
const description = "青山フラワーマーケットの「旬の花定期便」の料金・地域別送料・お届け間隔・解約条件を2026年11月23日に公式サイトで確認。SS 1,485円＋送料一律500円、S 2,200円＋地域別送料（関東913円）など全11コースの送料込み総額を一覧にしました。最低利用回数はありません。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/aoyama-flower-market/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/aoyama-flower-market/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
