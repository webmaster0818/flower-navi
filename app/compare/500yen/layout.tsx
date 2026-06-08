import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お花の定期便500円台で始められる！ワンコイン花サブスク比較【2026年最新】｜flowerデリ',
  description: '「お花のサブスクを始めたいけど、まずは500円くらいの安いプランで試したい」という方へ。 各サービスの最安プランを送料込みの総額で比較し、本当にお得なサービスをランキング形式でご紹介します。',
  alternates: { canonical: "/compare/500yen/" },
  openGraph: {
    title: 'お花の定期便500円台で始められる！ワンコイン花サブスク比較【2026年最新】｜flowerデリ',
    description: '「お花のサブスクを始めたいけど、まずは500円くらいの安いプランで試したい」という方へ。 各サービスの最安プランを送料込みの総額で比較し、本当にお得なサービスをランキング形式でご紹介します。',
    url: "/compare/500yen/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お花の定期便500円台で始められる！ワンコイン花サブスク比較【2026年最新】｜flowerデリ', description: '「お花のサブスクを始めたいけど、まずは500円くらいの安いプランで試したい」という方へ。 各サービスの最安プランを送料込みの総額で比較し、本当にお得なサービスをランキング形式でご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
