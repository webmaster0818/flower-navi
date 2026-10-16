import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'bloomee vs HitoHana 比較【2026年】目的別のおすすめを解説｜flowerデリ',
  description: '花のサブスク「bloomee」と「HitoHana」を8つの項目で比較しています。料金・送料・花の本数・色の選択・回数の条件などの違いと、目的別のおすすめを解説します。',
  alternates: { canonical: "/compare/bloomee-vs-hitohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'bloomee vs HitoHana 比較【2026年】目的別のおすすめを解説｜flowerデリ',
    description: '花のサブスク「bloomee」と「HitoHana」を8つの項目で比較しています。料金・送料・花の本数・色の選択・回数の条件などの違いと、目的別のおすすめを解説します。',
    url: "/compare/bloomee-vs-hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'bloomee vs HitoHana 比較【2026年】目的別のおすすめを解説｜flowerデリ', description: '花のサブスク「bloomee」と「HitoHana」を8つの項目で比較しています。料金・送料・花の本数・色の選択・回数の条件などの違いと、目的別のおすすめを解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
