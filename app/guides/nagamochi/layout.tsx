import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '切り花を長持ちさせる方法10選｜水切りから温度管理まで【2026年】｜flowerデリ',
  description: '届いた花をより長く楽しみたい方に向けて、当サイトでは水切りから温度管理まで、花の寿命を延ばす10の方法を解説します。',
  alternates: { canonical: "/guides/nagamochi/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '切り花を長持ちさせる方法10選｜水切りから温度管理まで【2026年】｜flowerデリ',
    description: '届いた花をより長く楽しみたい方に向けて、当サイトでは水切りから温度管理まで、花の寿命を延ばす10の方法を解説します。',
    url: "/guides/nagamochi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '切り花を長持ちさせる方法10選｜水切りから温度管理まで【2026年】｜flowerデリ', description: '届いた花をより長く楽しみたい方に向けて、当サイトでは水切りから温度管理まで、花の寿命を延ばす10の方法を解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
