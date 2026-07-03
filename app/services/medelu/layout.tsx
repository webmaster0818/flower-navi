import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'medelu（メデル）とは？料金748円〜・送料無料の仕組みと特徴を徹底解説【2026年最新】｜flowerデリ',
  description: '業界最安値748円〜・送料無料のコスパ最強お花のサブスク「medelu」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
  alternates: { canonical: "/services/medelu/" },
  openGraph: {
    title: 'medelu（メデル）とは？料金748円〜・送料無料の仕組みと特徴を徹底解説【2026年最新】｜flowerデリ',
    description: '業界最安値748円〜・送料無料のコスパ最強お花のサブスク「medelu」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
    url: "/services/medelu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'medelu（メデル）とは？料金748円〜・送料無料の仕組みと特徴を徹底解説【2026年最新】｜flowerデリ', description: '業界最安値748円〜・送料無料のコスパ最強お花のサブスク「medelu」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
