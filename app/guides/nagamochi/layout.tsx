import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '切り花を長持ちさせる方法10選プロの裏ワザ【2026年】｜flowerデリ',
  description: 'せっかく届いた花を少しでも長く楽しみたい方へ。 水切りから温度管理まで、花の寿命を延ばす10のテクニックを詳しく解説します。',
  alternates: { canonical: "/guides/nagamochi/" },
  openGraph: {
    title: '切り花を長持ちさせる方法10選プロの裏ワザ【2026年】｜flowerデリ',
    description: 'せっかく届いた花を少しでも長く楽しみたい方へ。 水切りから温度管理まで、花の寿命を延ばす10のテクニックを詳しく解説します。',
    url: "/guides/nagamochi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '切り花を長持ちさせる方法10選プロの裏ワザ【2026年】｜flowerデリ', description: 'せっかく届いた花を少しでも長く楽しみたい方へ。 水切りから温度管理まで、花の寿命を延ばす10のテクニックを詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
