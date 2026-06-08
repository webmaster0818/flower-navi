import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'bloomee vs HitoHana 徹底比較どっちがおすすめ？【2026年】｜flowerデリ',
  description: '人気の花サブスク「bloomee」と「HitoHana」を8つの項目で徹底比較。 あなたの目的に合ったサービスがどちらか、わかりやすく解説します。',
  alternates: { canonical: "/compare/bloomee-vs-hitohana/" },
  openGraph: {
    title: 'bloomee vs HitoHana 徹底比較どっちがおすすめ？【2026年】｜flowerデリ',
    description: '人気の花サブスク「bloomee」と「HitoHana」を8つの項目で徹底比較。 あなたの目的に合ったサービスがどちらか、わかりやすく解説します。',
    url: "/compare/bloomee-vs-hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'bloomee vs HitoHana 徹底比較どっちがおすすめ？【2026年】｜flowerデリ', description: '人気の花サブスク「bloomee」と「HitoHana」を8つの項目で徹底比較。 あなたの目的に合ったサービスがどちらか、わかりやすく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
