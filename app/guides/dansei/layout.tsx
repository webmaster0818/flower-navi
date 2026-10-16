import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '一人暮らしの男が花を飾るのはアリ？ポスト投函・縛りなしで選ぶ花サブスク5社と飾り方【2026年10月】｜flowerデリ',
  description: '一人暮らしの男性が花を飾るのはアリ。不在でも受け取れるポスト投函・回数縛り・1回の費用を5社の公式情報で比較（748円〜・2026年10月確認）。部屋に合う色の選び方、花瓶の代用、最低限の手入れも解説。',
  alternates: { canonical: "/guides/dansei/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '一人暮らしの男が花を飾るのはアリ？ポスト投函・縛りなしで選ぶ花サブスク5社と飾り方【2026年10月】｜flowerデリ',
    description: '一人暮らしの男性が花を飾るのはアリ。不在でも受け取れるポスト投函・回数縛り・1回の費用を5社の公式情報で比較（748円〜・2026年10月確認）。部屋に合う色の選び方、花瓶の代用、最低限の手入れも解説。',
    url: "/guides/dansei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '一人暮らしの男が花を飾るのはアリ？ポスト投函・縛りなしで選ぶ花サブスク5社と飾り方【2026年10月】｜flowerデリ', description: '一人暮らしの男性が花を飾るのはアリ。不在でも受け取れるポスト投函・回数縛り・1回の費用を5社の公式情報で比較（748円〜・2026年10月確認）。部屋に合う色の選び方、花瓶の代用、最低限の手入れも解説。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
