import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ポスト投函できるお花の定期便おすすめ比較｜不在でも安心｜flowerデリ',
  description: '「届く日に不在だったらどうしよう...」そんな心配は不要です。 ポスト投函対応の花のサブスクなら、不在でも郵便ポストにお花が届きます。 人気5サービスのポスト投函対応状況を徹底比較しました。',
  alternates: { canonical: "/compare/post-delivery/" },
  openGraph: {
    title: 'ポスト投函できるお花の定期便おすすめ比較｜不在でも安心｜flowerデリ',
    description: '「届く日に不在だったらどうしよう...」そんな心配は不要です。 ポスト投函対応の花のサブスクなら、不在でも郵便ポストにお花が届きます。 人気5サービスのポスト投函対応状況を徹底比較しました。',
    url: "/compare/post-delivery/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ポスト投函できるお花の定期便おすすめ比較｜不在でも安心｜flowerデリ', description: '「届く日に不在だったらどうしよう...」そんな心配は不要です。 ポスト投函対応の花のサブスクなら、不在でも郵便ポストにお花が届きます。 人気5サービスのポスト投函対応状況を徹底比較しました。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
