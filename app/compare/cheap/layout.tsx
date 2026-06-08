import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '【2026年最新】花のサブスクを安い順にランキング！送料込みで徹底比較｜flowerデリ',
  description: '花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。 この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。',
  alternates: { canonical: "/compare/cheap/" },
  openGraph: {
    title: '【2026年最新】花のサブスクを安い順にランキング！送料込みで徹底比較｜flowerデリ',
    description: '花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。 この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。',
    url: "/compare/cheap/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '【2026年最新】花のサブスクを安い順にランキング！送料込みで徹底比較｜flowerデリ', description: '花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。 この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
