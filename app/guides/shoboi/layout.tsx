import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクはしょぼい？ひどい？実際に届く花の実態を検証【2026年】｜flowerデリ',
  description: '「花のサブスク しょぼい」「お花の定期便 ひどい」で検索するあなたへ。 ネガティブな口コミの真相と、本当に満足できるサービスの選び方を解説します。',
  alternates: { canonical: "/guides/shoboi/" },
  openGraph: {
    title: '花のサブスクはしょぼい？ひどい？実際に届く花の実態を検証【2026年】｜flowerデリ',
    description: '「花のサブスク しょぼい」「お花の定期便 ひどい」で検索するあなたへ。 ネガティブな口コミの真相と、本当に満足できるサービスの選び方を解説します。',
    url: "/guides/shoboi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクはしょぼい？ひどい？実際に届く花の実態を検証【2026年】｜flowerデリ', description: '「花のサブスク しょぼい」「お花の定期便 ひどい」で検索するあなたへ。 ネガティブな口コミの真相と、本当に満足できるサービスの選び方を解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
