import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '季節の花カレンダー｜月別で届くお花の種類とサブスクの楽しみ方｜flowerデリ',
  description: '花のサブスクでは、季節ごとに旬のお花が届きます。当サイトでは、月別の代表的な花の種類、飾り方のポイント、季節に合わせたサブスクの活用方法をご紹介します。',
  alternates: { canonical: "/guides/seasonal-flowers/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '季節の花カレンダー｜月別で届くお花の種類とサブスクの楽しみ方｜flowerデリ',
    description: '花のサブスクでは、季節ごとに旬のお花が届きます。当サイトでは、月別の代表的な花の種類、飾り方のポイント、季節に合わせたサブスクの活用方法をご紹介します。',
    url: "/guides/seasonal-flowers/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '季節の花カレンダー｜月別で届くお花の種類とサブスクの楽しみ方｜flowerデリ', description: '花のサブスクでは、季節ごとに旬のお花が届きます。当サイトでは、月別の代表的な花の種類、飾り方のポイント、季節に合わせたサブスクの活用方法をご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
