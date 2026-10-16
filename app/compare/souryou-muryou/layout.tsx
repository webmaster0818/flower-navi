import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '送料無料のお花の定期便3選｜総額で比較【2026年】｜flowerデリ',
  description: '花のサブスクは送料によって年間で1万円以上の差が生じる場合があります。当サイトでは、送料無料で利用できるサービスを総額で比較しています。',
  alternates: { canonical: "/compare/souryou-muryou/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '送料無料のお花の定期便3選｜総額で比較【2026年】｜flowerデリ',
    description: '花のサブスクは送料によって年間で1万円以上の差が生じる場合があります。当サイトでは、送料無料で利用できるサービスを総額で比較しています。',
    url: "/compare/souryou-muryou/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '送料無料のお花の定期便3選｜総額で比較【2026年】｜flowerデリ', description: '花のサブスクは送料によって年間で1万円以上の差が生じる場合があります。当サイトでは、送料無料で利用できるサービスを総額で比較しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
