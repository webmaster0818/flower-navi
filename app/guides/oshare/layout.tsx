import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'おしゃれな花サブスクおすすめ3選インスタ映えするセンスの良いサービス｜flowerデリ',
  description: '「せっかく花のサブスクを始めるなら、おしゃれなサービスを選びたい」と思っていませんか。 この記事では、デザイン性・アレンジのセンス・SNS映えの観点から、スタイルにこだわる方に特におすすめの3サービスを厳選してご紹介します。',
  alternates: { canonical: "/guides/oshare/" },
  openGraph: {
    title: 'おしゃれな花サブスクおすすめ3選インスタ映えするセンスの良いサービス｜flowerデリ',
    description: '「せっかく花のサブスクを始めるなら、おしゃれなサービスを選びたい」と思っていませんか。 この記事では、デザイン性・アレンジのセンス・SNS映えの観点から、スタイルにこだわる方に特におすすめの3サービスを厳選してご紹介します。',
    url: "/guides/oshare/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'おしゃれな花サブスクおすすめ3選インスタ映えするセンスの良いサービス｜flowerデリ', description: '「せっかく花のサブスクを始めるなら、おしゃれなサービスを選びたい」と思っていませんか。 この記事では、デザイン性・アレンジのセンス・SNS映えの観点から、スタイルにこだわる方に特におすすめの3サービスを厳選してご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
