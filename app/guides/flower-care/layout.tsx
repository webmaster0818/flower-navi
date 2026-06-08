import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '届いた花を長持ちさせるコツ7選花瓶の選び方からお手入れまで｜flowerデリ',
  description: 'サブスクで届いた花、せっかくなら少しでも長く楽しみたいですよね。 この記事では、切り花を長持ちさせる7つのコツと、花瓶の選び方、季節ごとの注意点、 ドライフラワーの作り方まで、花のある暮らしを最大限に楽しむための実践ガイドをお届けします',
  alternates: { canonical: "/guides/flower-care/" },
  openGraph: {
    title: '届いた花を長持ちさせるコツ7選花瓶の選び方からお手入れまで｜flowerデリ',
    description: 'サブスクで届いた花、せっかくなら少しでも長く楽しみたいですよね。 この記事では、切り花を長持ちさせる7つのコツと、花瓶の選び方、季節ごとの注意点、 ドライフラワーの作り方まで、花のある暮らしを最大限に楽しむための実践ガイドをお届けします',
    url: "/guides/flower-care/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '届いた花を長持ちさせるコツ7選花瓶の選び方からお手入れまで｜flowerデリ', description: 'サブスクで届いた花、せっかくなら少しでも長く楽しみたいですよね。 この記事では、切り花を長持ちさせる7つのコツと、花瓶の選び方、季節ごとの注意点、 ドライフラワーの作り方まで、花のある暮らしを最大限に楽しむための実践ガイドをお届けします' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
