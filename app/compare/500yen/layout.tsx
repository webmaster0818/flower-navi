import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お花の定期便を500円台で始められるかを検証｜最安プランを送料込みで比較【2026年10月】｜flowerデリ',
  description: '当サイトが公式サイトで確認した範囲では、花代500円台の定期便は見つかりませんでした。送料込みの最安はmedelu Mini 748円、花代の最安はタスハナ660円（別途送料330円）です。4社を送料込みの総額と回数の条件で比較しています。',
  alternates: { canonical: "/compare/500yen/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'お花の定期便を500円台で始められるかを検証｜最安プランを送料込みで比較【2026年10月】｜flowerデリ',
    description: '当サイトが公式サイトで確認した範囲では、花代500円台の定期便は見つかりませんでした。送料込みの最安はmedelu Mini 748円、花代の最安はタスハナ660円（別途送料330円）です。4社を送料込みの総額と回数の条件で比較しています。',
    url: "/compare/500yen/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お花の定期便を500円台で始められるかを検証｜最安プランを送料込みで比較【2026年10月】｜flowerデリ', description: '当サイトが公式サイトで確認した範囲では、花代500円台の定期便は見つかりませんでした。送料込みの最安はmedelu Mini 748円、花代の最安はタスハナ660円（別途送料330円）です。4社を送料込みの総額と回数の条件で比較しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
