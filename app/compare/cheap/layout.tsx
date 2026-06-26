import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '【2026年6月最新】花のサブスク 安い順ランキング｜送料込み実価格で比較（公式確認済）｜flowerデリ',
  description: '花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。 この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。',
  alternates: { canonical: "/compare/cheap/" },
  openGraph: {
    title: '【2026年6月最新】花のサブスク 安い順ランキング｜送料込み実価格で比較（公式確認済）｜flowerデリ',
    description: '花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。 この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。',
    url: "/compare/cheap/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '【2026年6月最新】花のサブスク 安い順ランキング｜送料込み実価格で比較（公式確認済）｜flowerデリ', description: '花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。 この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
