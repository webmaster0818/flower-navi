import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'アンドプランツ（AND PLANTS）の口コミ・評判｜観葉植物と花の定期便の良い口コミ・悪い口コミを検証【2026年10月】｜flowerデリ',
  description: 'アンドプランツ（AND PLANTS）の口コミ・評判を、出典を明記して検証しています。観葉植物の通販としての口コミの傾向（楽天市場の公式ショップ評価4.77・756件）と、花の定期便（現AND FLOWER）の料金1,980円〜（送料込み）、解約・交換の条件を、2026年10月14日の公式確認にもとづいてご説明します。',
  alternates: { canonical: "/services/and-plants/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'アンドプランツ（AND PLANTS）の口コミ・評判｜観葉植物と花の定期便の良い口コミ・悪い口コミを検証【2026年10月】｜flowerデリ',
    description: 'アンドプランツ（AND PLANTS）の口コミ・評判を、出典を明記して検証しています。観葉植物の通販としての口コミの傾向（楽天市場の公式ショップ評価4.77・756件）と、花の定期便（現AND FLOWER）の料金1,980円〜（送料込み）、解約・交換の条件を、2026年10月14日の公式確認にもとづいてご説明します。',
    url: "/services/and-plants/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'アンドプランツ（AND PLANTS）の口コミ・評判｜観葉植物と花の定期便の良い口コミ・悪い口コミを検証【2026年10月】｜flowerデリ', description: 'アンドプランツ（AND PLANTS）の口コミ・評判を、出典を明記して検証しています。観葉植物の通販としての口コミの傾向（楽天市場の公式ショップ評価4.77・756件）と、花の定期便（現AND FLOWER）の料金1,980円〜（送料込み）、解約・交換の条件を、2026年10月14日の公式確認にもとづいてご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
