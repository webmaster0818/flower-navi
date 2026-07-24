import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '仏花・お供えの花を定期便/通販で用意する比較【2026年】8社の専用商品・白系・立て札を一次確認｜flowerデリ',
  description: '仏花・お供えの花を花の定期便・通販で用意したい方へ。bloomee・AND PLANTS・HitoHana・日本総合園芸・LIFFT・medelu・hanameku・タスハナ8社のお供え専用商品の有無、白系の可否、立て札・カード、価格、お届け日指定を2026年7月に公式一次確認して比較します。',
  alternates: { canonical: "/compare/osonae/" },
  openGraph: {
    title: '仏花・お供えの花を定期便/通販で用意する比較【2026年】8社を一次確認｜flowerデリ',
    description: 'お供え・仏花の専用商品の有無、白系の可否、立て札・カード、価格、お届け日指定を8社公式一次確認で比較。マナー・時期の関連ガイドも。',
    url: "/compare/osonae/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '仏花・お供えの花を定期便/通販で用意する比較【2026年】｜flowerデリ', description: 'お供え専用商品の有無・白系・立て札・価格・お届け日指定を8社一次確認で比較。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
