import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'hitohana（ヒトハナ）の花の定期便とは？料金1,320円〜・回数縛り・口コミ評判を公式確認【2026年10月】｜flowerデリ',
  description: 'hitohana（ヒトハナ）のお花の定期便を比較サイトが解説。料金Lite 1,320円〜LL 4,950円（税込）、回数縛りなし、6色＋おまかせ・5サイズ、宅急便でのお届け、公式レビュー4.2（11,687件）の傾向を2026年10月14日に公式確認。公式サイトはhitohana.tokyo。',
  alternates: { canonical: "/services/hitohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'hitohana（ヒトハナ）の花の定期便とは？料金1,320円〜・回数縛り・口コミ評判を公式確認【2026年10月】｜flowerデリ',
    description: 'hitohana（ヒトハナ）のお花の定期便を比較サイトが解説。料金Lite 1,320円〜LL 4,950円（税込）、回数縛りなし、6色＋おまかせ・5サイズ、宅急便でのお届け、公式レビュー4.2（11,687件）の傾向を2026年10月14日に公式確認。公式サイトはhitohana.tokyo。',
    url: "/services/hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'hitohana（ヒトハナ）の花の定期便とは？料金1,320円〜・回数縛り・口コミ評判を公式確認【2026年10月】｜flowerデリ', description: 'hitohana（ヒトハナ）のお花の定期便を比較サイトが解説。料金Lite 1,320円〜LL 4,950円（税込）、回数縛りなし、6色＋おまかせ・5サイズ、宅急便でのお届け、公式レビュー4.2（11,687件）の傾向を2026年10月14日に公式確認。公式サイトはhitohana.tokyo。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
