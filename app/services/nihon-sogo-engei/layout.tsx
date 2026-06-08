import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花の定期便 by 日本総合園芸の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
  description: '老舗園芸会社が運営する「花の定期便 by 日本総合園芸」。農家直送の新鮮なお花をプロのフローリストがアレンジ。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
  alternates: { canonical: "/services/nihon-sogo-engei/" },
  openGraph: {
    title: '花の定期便 by 日本総合園芸の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
    description: '老舗園芸会社が運営する「花の定期便 by 日本総合園芸」。農家直送の新鮮なお花をプロのフローリストがアレンジ。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
    url: "/services/nihon-sogo-engei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花の定期便 by 日本総合園芸の口コミ・評判を徹底調査【2026年最新】｜flowerデリ', description: '老舗園芸会社が運営する「花の定期便 by 日本総合園芸」。農家直送の新鮮なお花をプロのフローリストがアレンジ。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
