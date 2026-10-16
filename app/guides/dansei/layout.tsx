import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '一人暮らしの男性が花を飾る方法｜ポスト投函・縛りなしで選ぶ花のサブスク5社と飾り方【2026年10月】｜flowerデリ',
  description: '一人暮らしの男性にも、花を飾ることをおすすめします。当サイトでは、不在でも受け取れるポスト投函の有無、回数の条件、1回あたりの費用を5社の公式情報で比較しています（748円〜・2026年10月確認）。部屋に合う色の選び方、花瓶の代用品、最低限の手入れ方法も解説します。',
  alternates: { canonical: "/guides/dansei/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '一人暮らしの男性が花を飾る方法｜ポスト投函・縛りなしで選ぶ花のサブスク5社と飾り方【2026年10月】｜flowerデリ',
    description: '一人暮らしの男性にも、花を飾ることをおすすめします。当サイトでは、不在でも受け取れるポスト投函の有無、回数の条件、1回あたりの費用を5社の公式情報で比較しています（748円〜・2026年10月確認）。部屋に合う色の選び方、花瓶の代用品、最低限の手入れ方法も解説します。',
    url: "/guides/dansei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '一人暮らしの男性が花を飾る方法｜ポスト投函・縛りなしで選ぶ花のサブスク5社と飾り方【2026年10月】｜flowerデリ', description: '一人暮らしの男性にも、花を飾ることをおすすめします。当サイトでは、不在でも受け取れるポスト投函の有無、回数の条件、1回あたりの費用を5社の公式情報で比較しています（748円〜・2026年10月確認）。部屋に合う色の選び方、花瓶の代用品、最低限の手入れ方法も解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
