import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '観葉植物のサブスクおすすめ3選グリーンのある暮らし【2026年】｜flowerデリ',
  description: '切り花だけでなく、観葉植物のサブスクも人気が高まっています。 長く楽しめるグリーンの定期便を比較し、選び方のポイントを解説します。',
  alternates: { canonical: "/compare/kanyou-shokubutsu/" },
  openGraph: {
    title: '観葉植物のサブスクおすすめ3選グリーンのある暮らし【2026年】｜flowerデリ',
    description: '切り花だけでなく、観葉植物のサブスクも人気が高まっています。 長く楽しめるグリーンの定期便を比較し、選び方のポイントを解説します。',
    url: "/compare/kanyou-shokubutsu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '観葉植物のサブスクおすすめ3選グリーンのある暮らし【2026年】｜flowerデリ', description: '切り花だけでなく、観葉植物のサブスクも人気が高まっています。 長く楽しめるグリーンの定期便を比較し、選び方のポイントを解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
