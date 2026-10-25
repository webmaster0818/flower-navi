import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクに合う花瓶の選び方と、価格・高さを公式で確認した花瓶3点｜flowerデリ',
  description: '花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。当サイトでは、花瓶の選び方と、価格・高さを公式サイトで確認できた花瓶3点をご紹介します。',
  alternates: { canonical: "/guides/kabin/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクに合う花瓶の選び方と、価格・高さを公式で確認した花瓶3点｜flowerデリ',
    description: '花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。当サイトでは、花瓶の選び方と、価格・高さを公式サイトで確認できた花瓶3点をご紹介します。',
    url: "/guides/kabin/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクに合う花瓶の選び方と、価格・高さを公式で確認した花瓶3点｜flowerデリ', description: '花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。当サイトでは、花瓶の選び方と、価格・高さを公式サイトで確認できた花瓶3点をご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
