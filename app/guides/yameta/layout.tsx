import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクをやめた理由5選続けるべきかの判断基準【2026年】｜flowerデリ',
  description: '「花のサブスク やめた」「お花の定期便 やめた理由」で検索するあなたへ。 よくあるやめた理由を分析し、続けるべきか・やめるべきかの判断基準を解説します。',
  alternates: { canonical: "/guides/yameta/" },
  openGraph: {
    title: '花のサブスクをやめた理由5選続けるべきかの判断基準【2026年】｜flowerデリ',
    description: '「花のサブスク やめた」「お花の定期便 やめた理由」で検索するあなたへ。 よくあるやめた理由を分析し、続けるべきか・やめるべきかの判断基準を解説します。',
    url: "/guides/yameta/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクをやめた理由5選続けるべきかの判断基準【2026年】｜flowerデリ', description: '「花のサブスク やめた」「お花の定期便 やめた理由」で検索するあなたへ。 よくあるやめた理由を分析し、続けるべきか・やめるべきかの判断基準を解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
