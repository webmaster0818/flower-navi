import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '仏壇に供える仏花の選び方とお手入れ方法｜仏花の定期便おすすめ3選【2026年】｜flowerデリ',
  description: '当サイトでは、仏壇に供える仏花に適した花と避けるべき花の選び方、長持ちさせるお手入れ方法を解説します。あわせて、忙しい方でも新鮮な花をお供えできる「仏花の定期便」のうち、仏花に適したサービスをご紹介します。',
  alternates: { canonical: "/guides/butsudan/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '仏壇に供える仏花の選び方とお手入れ方法｜仏花の定期便おすすめ3選【2026年】｜flowerデリ',
    description: '当サイトでは、仏壇に供える仏花に適した花と避けるべき花の選び方、長持ちさせるお手入れ方法を解説します。あわせて、忙しい方でも新鮮な花をお供えできる「仏花の定期便」のうち、仏花に適したサービスをご紹介します。',
    url: "/guides/butsudan/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '仏壇に供える仏花の選び方とお手入れ方法｜仏花の定期便おすすめ3選【2026年】｜flowerデリ', description: '仏壇に供える仏花の選び方とお手入れ方法を解説します。仏花に適した定期便サービスもご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
