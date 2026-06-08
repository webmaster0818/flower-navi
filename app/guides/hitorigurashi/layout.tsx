import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '一人暮らしにおすすめの花サブスク3選コスパと手軽さで選ぶ｜flowerデリ',
  description: '一人暮らしの部屋にお花を飾りたいけど、「どのサービスがいいの？」「続けられるか不安」と感じていませんか。 この記事では、一人暮らしに本当に合う花のサブスクを3つ厳選し、コスパ・手軽さ・受け取りやすさの観点で比較します。',
  alternates: { canonical: "/guides/hitorigurashi/" },
  openGraph: {
    title: '一人暮らしにおすすめの花サブスク3選コスパと手軽さで選ぶ｜flowerデリ',
    description: '一人暮らしの部屋にお花を飾りたいけど、「どのサービスがいいの？」「続けられるか不安」と感じていませんか。 この記事では、一人暮らしに本当に合う花のサブスクを3つ厳選し、コスパ・手軽さ・受け取りやすさの観点で比較します。',
    url: "/guides/hitorigurashi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '一人暮らしにおすすめの花サブスク3選コスパと手軽さで選ぶ｜flowerデリ', description: '一人暮らしの部屋にお花を飾りたいけど、「どのサービスがいいの？」「続けられるか不安」と感じていませんか。 この記事では、一人暮らしに本当に合う花のサブスクを3つ厳選し、コスパ・手軽さ・受け取りやすさの観点で比較します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
