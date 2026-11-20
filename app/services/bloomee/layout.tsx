import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと値段、やめた人の理由【2026年11月】｜flowerデリ',
  description: 'ブルーミー（旧ブルーミーライフ）のメリットはポストに届く・花代980円〜、デメリットは送料が毎回別（込みで1回1,365円）・最初の4回は途中解約料がかかる点。口コミの不満は「しおれていた・同じ花が続く」。みん評など出典別の件数・利用者の感想・やめた人の理由も整理。',
  alternates: { canonical: "/services/bloomee/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと値段、やめた人の理由【2026年11月】｜flowerデリ',
    description: 'ブルーミー（旧ブルーミーライフ）のメリットはポストに届く・花代980円〜、デメリットは送料が毎回別（込みで1回1,365円）・最初の4回は途中解約料がかかる点。口コミの不満は「しおれていた・同じ花が続く」。みん評など出典別の件数・利用者の感想・やめた人の理由も整理。',
    url: "/services/bloomee/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと値段、やめた人の理由【2026年11月】｜flowerデリ', description: 'ブルーミー（旧ブルーミーライフ）のメリットはポストに届く・花代980円〜、デメリットは送料が毎回別（込みで1回1,365円）・最初の4回は途中解約料がかかる点。口コミの不満は「しおれていた・同じ花が続く」。みん評など出典別の件数・利用者の感想・やめた人の理由も整理。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
