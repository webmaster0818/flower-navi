import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクに合う花瓶の選び方・おすすめ15選【2026年】素材・サイズ・予算別｜flowerデリ',
  description: '花のサブスクで届いた花をおしゃれに飾るには、花瓶選びが重要です。 素材別・サイズ別・予算別におすすめの花瓶15選と、選び方のポイントを解説します。',
  alternates: { canonical: "/guides/kabin/" },
  openGraph: {
    title: '花のサブスクに合う花瓶の選び方・おすすめ15選【2026年】素材・サイズ・予算別｜flowerデリ',
    description: '花のサブスクで届いた花をおしゃれに飾るには、花瓶選びが重要です。 素材別・サイズ別・予算別におすすめの花瓶15選と、選び方のポイントを解説します。',
    url: "/guides/kabin/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクに合う花瓶の選び方・おすすめ15選【2026年】素材・サイズ・予算別｜flowerデリ', description: '花のサブスクで届いた花をおしゃれに飾るには、花瓶選びが重要です。 素材別・サイズ別・予算別におすすめの花瓶15選と、選び方のポイントを解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
