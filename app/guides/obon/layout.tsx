import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年8月】｜flowerデリ',
  description: '2026年のお盆は8月13〜16日（月遅れ盆）です。当サイトでは、お盆・新盆（初盆）のお供えの花を花のサブスクで用意する方法を解説しています。お供えに向く花・避ける花、落ち着いた色合いを選べるサービス、配送時期の調整方法もご紹介します。',
  alternates: { canonical: "/guides/obon/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年8月】｜flowerデリ',
    description: '2026年のお盆は8月13〜16日です。お盆・新盆のお供えの花を花のサブスクで用意する方法、向く花・避ける花、配送時期の調整方法を解説しています。',
    url: "/guides/obon/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年8月】｜flowerデリ', description: '2026年のお盆は8月13〜16日です。お供えの花を花のサブスクで用意する方法を解説しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
