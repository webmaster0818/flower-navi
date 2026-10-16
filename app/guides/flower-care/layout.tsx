import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '届いた花を長持ちさせる7つの方法｜花瓶の選び方からお手入れまで｜flowerデリ',
  description: '当サイトでは、花のサブスクで届いた切り花を長持ちさせる7つの方法と、花瓶の選び方、季節ごとの注意点、ドライフラワーの作り方をご説明します。',
  alternates: { canonical: "/guides/flower-care/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '届いた花を長持ちさせる7つの方法｜花瓶の選び方からお手入れまで｜flowerデリ',
    description: '当サイトでは、花のサブスクで届いた切り花を長持ちさせる7つの方法と、花瓶の選び方、季節ごとの注意点、ドライフラワーの作り方をご説明します。',
    url: "/guides/flower-care/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '届いた花を長持ちさせる7つの方法｜花瓶の選び方からお手入れまで｜flowerデリ', description: '当サイトでは、花のサブスクで届いた切り花を長持ちさせる7つの方法と、花瓶の選び方、季節ごとの注意点、ドライフラワーの作り方をご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
