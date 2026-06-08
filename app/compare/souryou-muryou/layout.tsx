import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '送料無料のお花の定期便3選総額で比較【2026年】｜flowerデリ',
  description: '花のサブスクは送料が意外と高く、年間で1万円以上の差がつくことも。 送料無料で利用できるサービスを総額ベースで徹底比較します。',
  alternates: { canonical: "/compare/souryou-muryou/" },
  openGraph: {
    title: '送料無料のお花の定期便3選総額で比較【2026年】｜flowerデリ',
    description: '花のサブスクは送料が意外と高く、年間で1万円以上の差がつくことも。 送料無料で利用できるサービスを総額ベースで徹底比較します。',
    url: "/compare/souryou-muryou/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '送料無料のお花の定期便3選総額で比較【2026年】｜flowerデリ', description: '花のサブスクは送料が意外と高く、年間で1万円以上の差がつくことも。 送料無料で利用できるサービスを総額ベースで徹底比較します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
