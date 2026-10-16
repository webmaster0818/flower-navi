import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '【2026年最新】花のサブスク安い順ランキング｜送料込みの実価格748円〜で比較（公式確認済）｜flowerデリ',
  description: '花のサブスク人気5サービスの最安プランを、送料込みの総額で比較し安い順に掲載しています。料金は各公式サイトで確認した金額です。',
  alternates: { canonical: "/compare/cheap/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '【2026年最新】花のサブスク安い順ランキング｜送料込みの実価格748円〜で比較（公式確認済）｜flowerデリ',
    description: '花のサブスク人気5サービスの最安プランを、送料込みの総額で比較し安い順に掲載しています。料金は各公式サイトで確認した金額です。',
    url: "/compare/cheap/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '【2026年最新】花のサブスク安い順ランキング｜送料込みの実価格748円〜で比較（公式確認済）｜flowerデリ', description: '花のサブスク人気5サービスの最安プランを、送料込みの総額で比較し安い順に掲載しています。料金は各公式サイトで確認した金額です。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
