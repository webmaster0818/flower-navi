import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ハナメク（hanameku）の口コミ・評判｜良い口コミ・悪い口コミと1,210円の料金・初回解約不可の注意点【2026年11月】｜flowerデリ',
  description: 'ハナメク（hanameku）は、and factory株式会社が運営する花の定期便です。ライト1,210円（税込・配送料込・ポスト投函）とセルフアレンジの料金、届き方、配送地域、初回解約不可と解約の締切を2026年11月3日に公式サイトで確認し、良い口コミ・悪い口コミの傾向を出典を明記して整理しています。',
  alternates: { canonical: "/services/hanameku/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ハナメク（hanameku）の口コミ・評判｜良い口コミ・悪い口コミと1,210円の料金・初回解約不可の注意点【2026年11月】｜flowerデリ',
    description: 'ハナメク（hanameku）は、and factory株式会社が運営する花の定期便です。ライト1,210円（税込・配送料込・ポスト投函）とセルフアレンジの料金、届き方、配送地域、初回解約不可と解約の締切を2026年11月3日に公式サイトで確認し、良い口コミ・悪い口コミの傾向を出典を明記して整理しています。',
    url: "/services/hanameku/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ハナメク（hanameku）の口コミ・評判｜良い口コミ・悪い口コミと1,210円の料金・初回解約不可の注意点【2026年11月】｜flowerデリ', description: 'ハナメク（hanameku）は、and factory株式会社が運営する花の定期便です。ライト1,210円（税込・配送料込・ポスト投函）とセルフアレンジの料金、届き方、配送地域、初回解約不可と解約の締切を2026年11月3日に公式サイトで確認し、良い口コミ・悪い口コミの傾向を出典を明記して整理しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
