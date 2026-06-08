import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '仏花の定期便おすすめ3選仏壇のお花を手軽にお届け【2026年最新】｜flowerデリ',
  description: '仏壇にお供えするお花を定期的に届けてくれる「仏花の定期便」。 忙しい毎日でも、いつも新鮮で美しいお花を仏壇に飾ることができます。 この記事では、仏花に適した定期便サービスを厳選してご紹介します。',
  alternates: { canonical: "/guides/butsudan/" },
  openGraph: {
    title: '仏花の定期便おすすめ3選仏壇のお花を手軽にお届け【2026年最新】｜flowerデリ',
    description: '仏壇にお供えするお花を定期的に届けてくれる「仏花の定期便」。 忙しい毎日でも、いつも新鮮で美しいお花を仏壇に飾ることができます。 この記事では、仏花に適した定期便サービスを厳選してご紹介します。',
    url: "/guides/butsudan/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '仏花の定期便おすすめ3選仏壇のお花を手軽にお届け【2026年最新】｜flowerデリ', description: '仏壇にお供えするお花を定期的に届けてくれる「仏花の定期便」。 忙しい毎日でも、いつも新鮮で美しいお花を仏壇に飾ることができます。 この記事では、仏花に適した定期便サービスを厳選してご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
