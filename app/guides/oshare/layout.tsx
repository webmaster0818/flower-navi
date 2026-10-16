import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'おしゃれな花のサブスクおすすめ3選｜デザイン性の高いサービスを比較｜flowerデリ',
  description: '花のサブスクをデザイン性で選びたい方に向けて、当サイトでは、デザイン性・アレンジの傾向・飾ったときやSNSでの見栄えの観点から、スタイルを重視する方に適した3サービスをご紹介します。',
  alternates: { canonical: "/guides/oshare/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'おしゃれな花のサブスクおすすめ3選｜デザイン性の高いサービスを比較｜flowerデリ',
    description: '花のサブスクをデザイン性で選びたい方に向けて、当サイトでは、デザイン性・アレンジの傾向・飾ったときやSNSでの見栄えの観点から、スタイルを重視する方に適した3サービスをご紹介します。',
    url: "/guides/oshare/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'おしゃれな花のサブスクおすすめ3選｜デザイン性の高いサービスを比較｜flowerデリ', description: '花のサブスクをデザイン性で選びたい方に向けて、当サイトでは、デザイン性・アレンジの傾向・飾ったときやSNSでの見栄えの観点から、スタイルを重視する方に適した3サービスをご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
