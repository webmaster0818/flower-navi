import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクに合う花瓶の選び方・おすすめ15選【2026年】素材・サイズ・予算別｜flowerデリ',
  description: '花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。当サイトでは、素材別・サイズ別・予算別のおすすめの花瓶15点と、選び方のポイントをご説明します。',
  alternates: { canonical: "/guides/kabin/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクに合う花瓶の選び方・おすすめ15選【2026年】素材・サイズ・予算別｜flowerデリ',
    description: '花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。当サイトでは、素材別・サイズ別・予算別のおすすめの花瓶15点と、選び方のポイントをご説明します。',
    url: "/guides/kabin/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクに合う花瓶の選び方・おすすめ15選【2026年】素材・サイズ・予算別｜flowerデリ', description: '花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。当サイトでは、素材別・サイズ別・予算別のおすすめの花瓶15点と、選び方のポイントをご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
