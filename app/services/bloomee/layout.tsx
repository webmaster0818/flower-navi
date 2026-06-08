import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'bloomee（ブルーミー）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
  description: '累計3,000万本以上のお花を届けてきた日本最大級の花のサブスク「bloomee」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
  alternates: { canonical: "/services/bloomee/" },
  openGraph: {
    title: 'bloomee（ブルーミー）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
    description: '累計3,000万本以上のお花を届けてきた日本最大級の花のサブスク「bloomee」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。',
    url: "/services/bloomee/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'bloomee（ブルーミー）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ', description: '累計3,000万本以上のお花を届けてきた日本最大級の花のサブスク「bloomee」。 実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
