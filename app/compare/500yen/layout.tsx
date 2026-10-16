import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お花の定期便は500円台で始められる？最安プランを送料込みで比較【2026年10月】｜flowerデリ',
  description: '花代500円台の定期便は公式確認の範囲では見つかりませんでした。最安はmedelu Mini 748円（送料込み）、花代最安はタスハナ660円＋送料330円。4社を総額と回数縛りで比較。',
  alternates: { canonical: "/compare/500yen/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'お花の定期便は500円台で始められる？最安プランを送料込みで比較【2026年10月】｜flowerデリ',
    description: '花代500円台の定期便は公式確認の範囲では見つかりませんでした。最安はmedelu Mini 748円（送料込み）、花代最安はタスハナ660円＋送料330円。4社を総額と回数縛りで比較。',
    url: "/compare/500yen/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お花の定期便は500円台で始められる？最安プランを送料込みで比較【2026年10月】｜flowerデリ', description: '花代500円台の定期便は公式確認の範囲では見つかりませんでした。最安はmedelu Mini 748円（送料込み）、花代最安はタスハナ660円＋送料330円。4社を総額と回数縛りで比較。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
