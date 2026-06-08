import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '季節の花カレンダー｜月別で届くお花の種類とサブスクの楽しみ方｜flowerデリ',
  description: '花のサブスクでは、季節ごとに旬のお花が届きます。 この記事では月別の代表的な花の種類、飾り方のコツ、季節に合わせたサブスクの活用法を詳しくご紹介します。',
  alternates: { canonical: "/guides/seasonal-flowers/" },
  openGraph: {
    title: '季節の花カレンダー｜月別で届くお花の種類とサブスクの楽しみ方｜flowerデリ',
    description: '花のサブスクでは、季節ごとに旬のお花が届きます。 この記事では月別の代表的な花の種類、飾り方のコツ、季節に合わせたサブスクの活用法を詳しくご紹介します。',
    url: "/guides/seasonal-flowers/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '季節の花カレンダー｜月別で届くお花の種類とサブスクの楽しみ方｜flowerデリ', description: '花のサブスクでは、季節ごとに旬のお花が届きます。 この記事では月別の代表的な花の種類、飾り方のコツ、季節に合わせたサブスクの活用法を詳しくご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
