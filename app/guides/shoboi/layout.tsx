import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクは「しょぼい」「ひどい」のか｜実際に届く花の内容を検証【2026年】｜flowerデリ',
  description: '「花のサブスク しょぼい」「お花の定期便 ひどい」といった評判について、当サイトでは否定的な口コミが生じる背景と、満足度の高いサービスの選び方を解説します。',
  alternates: { canonical: "/guides/shoboi/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクは「しょぼい」「ひどい」のか｜実際に届く花の内容を検証【2026年】｜flowerデリ',
    description: '「花のサブスク しょぼい」「お花の定期便 ひどい」といった評判について、当サイトでは否定的な口コミが生じる背景と、満足度の高いサービスの選び方を解説します。',
    url: "/guides/shoboi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクは「しょぼい」「ひどい」のか｜実際に届く花の内容を検証【2026年】｜flowerデリ', description: '「花のサブスク しょぼい」「お花の定期便 ひどい」といった評判について、当サイトでは否定的な口コミが生じる背景と、満足度の高いサービスの選び方を解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
