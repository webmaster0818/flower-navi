import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと値段、サブスクの仕組み【2026年10月】｜flowerデリ',
  description: 'ブルーミーの口コミは「ポストに届く」「花代980円〜」が好評、「花がしおれていた・同じ花が続く」「4回未満の解約は途中解約料」が不満点です。みん評など出典ごとの件数、悪い口コミへの公式の対応、送料込み1回1,365円の値段、スキップ・解約の仕組みを公式表記で整理。',
  alternates: { canonical: "/services/bloomee/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと値段、サブスクの仕組み【2026年10月】｜flowerデリ',
    description: 'ブルーミーの口コミは「ポストに届く」「花代980円〜」が好評、「花がしおれていた・同じ花が続く」「4回未満の解約は途中解約料」が不満点です。みん評など出典ごとの件数、悪い口コミへの公式の対応、送料込み1回1,365円の値段、スキップ・解約の仕組みを公式表記で整理。',
    url: "/services/bloomee/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと値段、サブスクの仕組み【2026年10月】｜flowerデリ', description: 'ブルーミーの口コミは「ポストに届く」「花代980円〜」が好評、「花がしおれていた・同じ花が続く」「4回未満の解約は途中解約料」が不満点です。みん評など出典ごとの件数、悪い口コミへの公式の対応、送料込み1回1,365円の値段、スキップ・解約の仕組みを公式表記で整理。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
