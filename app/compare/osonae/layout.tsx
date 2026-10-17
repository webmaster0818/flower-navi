import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '仏花・お供え花の定期便 比較｜安いプランと料金・8社の公式情報を確認｜flowerデリ',
  description: '仏花・お供えの花を費用を抑えて用意したい方に向けて、bloomee・AND PLANTS・HitoHanaなど8社の料金、お供え専用商品の有無、白系の可否、立て札・カード、お届け日指定を2026年7月に公式サイトで確認し、比較しています。',
  alternates: { canonical: "/compare/osonae/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '仏花・お供え花の定期便 比較｜安いプランと料金｜flowerデリ',
    description: 'お供え・仏花の専用商品の有無、白系の可否、立て札・カード、価格、お届け日指定を、8社の公式サイトで確認して比較しています。マナー・時期に関する関連ガイドもご案内します。',
    url: "/compare/osonae/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '仏花・お供え花の定期便 比較｜安いプランと料金｜flowerデリ', description: '仏花・お供え花の安いプラン・料金、専用商品の有無・白系・立て札・お届け日指定を、8社の公式サイトで確認して比較しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
