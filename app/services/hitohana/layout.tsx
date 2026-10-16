import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'hitohana（ヒトハナ）の花の定期便｜料金1,320円〜・回数縛り・口コミ評判を公式確認【2026年10月】｜flowerデリ',
  description: 'hitohana（ヒトハナ）のお花の定期便について、料金（Lite 1,320円〜LL 4,950円・税込）、回数の条件、6色＋おまかせ・5サイズの選択肢、宅急便でのお届け、公式レビュー4.2（11,687件）の傾向を、2026年10月14日の公式確認にもとづいてご説明します。',
  alternates: { canonical: "/services/hitohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'hitohana（ヒトハナ）の花の定期便｜料金1,320円〜・回数縛り・口コミ評判を公式確認【2026年10月】｜flowerデリ',
    description: 'hitohana（ヒトハナ）のお花の定期便について、料金（Lite 1,320円〜LL 4,950円・税込）、回数の条件、6色＋おまかせ・5サイズの選択肢、宅急便でのお届け、公式レビュー4.2（11,687件）の傾向を、2026年10月14日の公式確認にもとづいてご説明します。',
    url: "/services/hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'hitohana（ヒトハナ）の花の定期便｜料金1,320円〜・回数縛り・口コミ評判を公式確認【2026年10月】｜flowerデリ', description: 'hitohana（ヒトハナ）のお花の定期便について、料金（Lite 1,320円〜LL 4,950円・税込）、回数の条件、6色＋おまかせ・5サイズの選択肢、宅急便でのお届け、公式レビュー4.2（11,687件）の傾向を、2026年10月14日の公式確認にもとづいてご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
