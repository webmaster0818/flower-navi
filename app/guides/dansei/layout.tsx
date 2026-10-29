import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '一人暮らしの男性が部屋に花を飾る方法｜1本から・花瓶は代用可・手入れ3つと花のサブスク5社【2026年10月】｜flowerデリ',
  description: '一人暮らしの男性が部屋に花を飾るなら、まず1本から。花瓶はグラスや空き瓶で代用でき、置き場所はデスクや洗面台など毎日目に入る1か所、手入れは水切り・2〜3日ごとの水替え・直射日光と風を避けるの3つです。不在でも受け取れるポスト投函の花のサブスク5社（748円〜・2026年10月公式確認）も比較しています。',
  alternates: { canonical: "/guides/dansei/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '一人暮らしの男性が部屋に花を飾る方法｜1本から・花瓶は代用可・手入れ3つと花のサブスク5社【2026年10月】｜flowerデリ',
    description: '一人暮らしの男性が部屋に花を飾るなら、まず1本から。花瓶はグラスや空き瓶で代用でき、置き場所はデスクや洗面台など毎日目に入る1か所、手入れは水切り・2〜3日ごとの水替え・直射日光と風を避けるの3つです。不在でも受け取れるポスト投函の花のサブスク5社（748円〜・2026年10月公式確認）も比較しています。',
    url: "/guides/dansei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '一人暮らしの男性が部屋に花を飾る方法｜1本から・花瓶は代用可・手入れ3つと花のサブスク5社【2026年10月】｜flowerデリ', description: '一人暮らしの男性が部屋に花を飾るなら、まず1本から。花瓶はグラスや空き瓶で代用でき、置き場所はデスクや洗面台など毎日目に入る1か所、手入れは水切り・2〜3日ごとの水替え・直射日光と風を避けるの3つです。不在でも受け取れるポスト投函の花のサブスク5社（748円〜・2026年10月公式確認）も比較しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
