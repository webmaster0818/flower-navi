import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '男の一人暮らしに花はあり？おしゃれに見える選び方と月748円〜のサブスク活用術【2026年】｜flowerデリ',
  description: '「花は女性のもの」は過去の話。男性の花サブスク利用者が急増中です。 一人暮らしの部屋がぐっとおしゃれになる、花のある暮らしの始め方を解説します。',
  alternates: { canonical: "/guides/dansei/" },
  openGraph: {
    title: '男の一人暮らしに花はあり？おしゃれに見える選び方と月748円〜のサブスク活用術【2026年】｜flowerデリ',
    description: '「花は女性のもの」は過去の話。男性の花サブスク利用者が急増中です。 一人暮らしの部屋がぐっとおしゃれになる、花のある暮らしの始め方を解説します。',
    url: "/guides/dansei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '男の一人暮らしに花はあり？おしゃれに見える選び方と月748円〜のサブスク活用術【2026年】｜flowerデリ', description: '「花は女性のもの」は過去の話。男性の花サブスク利用者が急増中です。 一人暮らしの部屋がぐっとおしゃれになる、花のある暮らしの始め方を解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
