import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ポスト投函できるお花の定期便おすすめ比較｜不在でも安心｜flowerデリ',
  description: 'ポスト投函に対応した花のサブスクは、不在時でも郵便ポストに花が届きます。人気5サービスのポスト投函への対応状況・料金・対応プランを比較しています。',
  alternates: { canonical: "/compare/post-delivery/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ポスト投函できるお花の定期便おすすめ比較｜不在でも安心｜flowerデリ',
    description: 'ポスト投函に対応した花のサブスクは、不在時でも郵便ポストに花が届きます。人気5サービスのポスト投函への対応状況・料金・対応プランを比較しています。',
    url: "/compare/post-delivery/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ポスト投函できるお花の定期便おすすめ比較｜不在でも安心｜flowerデリ', description: 'ポスト投函に対応した花のサブスクは、不在時でも郵便ポストに花が届きます。人気5サービスのポスト投函への対応状況・料金・対応プランを比較しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
