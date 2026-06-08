import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ハナメク（hanameku）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
  description: '市場直送で新鮮なお花が届く花のサブスク「ハナメク（hanameku）」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
  alternates: { canonical: "/services/hanameku/" },
  openGraph: {
    title: 'ハナメク（hanameku）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
    description: '市場直送で新鮮なお花が届く花のサブスク「ハナメク（hanameku）」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
    url: "/services/hanameku/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ハナメク（hanameku）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ', description: '市場直送で新鮮なお花が届く花のサブスク「ハナメク（hanameku）」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
