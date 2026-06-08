import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AND PLANTS（アンドプランツ）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
  description: 'おしゃれ派に人気の花サブスク「AND PLANTS」。独自開発の梱包システムとセンス抜群のブーケセレクトが話題です。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
  alternates: { canonical: "/services/and-plants/" },
  openGraph: {
    title: 'AND PLANTS（アンドプランツ）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
    description: 'おしゃれ派に人気の花サブスク「AND PLANTS」。独自開発の梱包システムとセンス抜群のブーケセレクトが話題です。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
    url: "/services/and-plants/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'AND PLANTS（アンドプランツ）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ', description: 'おしゃれ派に人気の花サブスク「AND PLANTS」。独自開発の梱包システムとセンス抜群のブーケセレクトが話題です。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
