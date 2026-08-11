import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '仏壇に供える仏花の選び方・お手入れガイド｜定期便おすすめ3選【2026年最新】｜flowerデリ',
  description: '仏壇に供える仏花に向く花・避ける花の選び方と、長持ちさせるお手入れ方法を解説。あわせて、忙しい毎日でも新鮮なお花を仏壇に飾れる「仏花の定期便」から、仏花に適したサービスを厳選してご紹介します。',
  alternates: { canonical: "/guides/butsudan/" },
  openGraph: {
    title: '仏壇に供える仏花の選び方・お手入れガイド｜定期便おすすめ3選【2026年最新】｜flowerデリ',
    description: '仏壇に供える仏花に向く花・避ける花の選び方と、長持ちさせるお手入れ方法を解説。あわせて、忙しい毎日でも新鮮なお花を仏壇に飾れる「仏花の定期便」から、仏花に適したサービスを厳選してご紹介します。',
    url: "/guides/butsudan/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '仏壇に供える仏花の選び方・お手入れガイド｜定期便おすすめ3選【2026年最新】｜flowerデリ', description: '仏壇に供える仏花に向く花・避ける花の選び方と、長持ちさせるお手入れ方法を解説。仏花に適した定期便サービスも厳選してご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
