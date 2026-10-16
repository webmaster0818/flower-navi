import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '一人暮らしにおすすめの花のサブスク3選｜費用と手軽さで比較｜flowerデリ',
  description: '一人暮らしの部屋に花を飾りたい方に向けて、当サイトでは、一人暮らしに適した花のサブスク3サービスを、費用・手軽さ・受け取りやすさの観点から比較しています。',
  alternates: { canonical: "/guides/hitorigurashi/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '一人暮らしにおすすめの花のサブスク3選｜費用と手軽さで比較｜flowerデリ',
    description: '一人暮らしの部屋に花を飾りたい方に向けて、当サイトでは、一人暮らしに適した花のサブスク3サービスを、費用・手軽さ・受け取りやすさの観点から比較しています。',
    url: "/guides/hitorigurashi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '一人暮らしにおすすめの花のサブスク3選｜費用と手軽さで比較｜flowerデリ', description: '一人暮らしの部屋に花を飾りたい方に向けて、当サイトでは、一人暮らしに適した花のサブスク3サービスを、費用・手軽さ・受け取りやすさの観点から比較しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
