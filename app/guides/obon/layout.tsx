import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年8月】｜flowerデリ',
  description: '2026年のお盆は8月13〜16日（月遅れ盆）。お盆・新盆（初盆）のお供えの花を、花のサブスクで用意する方法を解説。お供えに向く花・避ける花、落ち着いた色合いで選べるサービス、配送タイミングの調整方法まで実情報で紹介します。',
  alternates: { canonical: "/guides/obon/" },
  openGraph: {
    title: 'お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年8月】｜flowerデリ',
    description: '2026年のお盆は8月13〜16日。お盆・新盆のお供えの花を花のサブスクで用意する方法、向く花・避ける花、配送調整を実情報で解説。',
    url: "/guides/obon/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年8月】｜flowerデリ', description: '2026年のお盆は8月13〜16日。お供えの花を花のサブスクで用意する方法を実情報で解説。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
