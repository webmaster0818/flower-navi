import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お花の定期便をふるさと納税でお得に花のある暮らし【2026年】｜flowerデリ',
  description: 'ふるさと納税の返礼品として花の定期便を選ぶと、実質負担2,000円で数ヶ月間お花が届きます。 仕組みやおすすめ自治体を詳しく解説します。',
  alternates: { canonical: "/guides/furusato-nouzei/" },
  openGraph: {
    title: 'お花の定期便をふるさと納税でお得に花のある暮らし【2026年】｜flowerデリ',
    description: 'ふるさと納税の返礼品として花の定期便を選ぶと、実質負担2,000円で数ヶ月間お花が届きます。 仕組みやおすすめ自治体を詳しく解説します。',
    url: "/guides/furusato-nouzei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お花の定期便をふるさと納税でお得に花のある暮らし【2026年】｜flowerデリ', description: 'ふるさと納税の返礼品として花の定期便を選ぶと、実質負担2,000円で数ヶ月間お花が届きます。 仕組みやおすすめ自治体を詳しく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
