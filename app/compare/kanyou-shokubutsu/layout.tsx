import type { Metadata } from "next";

const TITLE = '観葉植物は購入とサブスク・レンタルどちらがお得？【2026年】月額料金・交換対応で比較｜flowerデリ';
const DESC = '観葉植物を「買って育てる」場合と「サブスク・レンタルで借りて任せる」場合の費用を比較します。AND PLANTS・CLAS・HitoHanaを提供形態・月額の目安・メンテナンス・交換対応で対比し、購入価格と月額の損益が入れ替わる考え方を、公式に確認できた値にもとづいて解説します。育て方は育て方ガイド、オフィスへの導入は法人・オフィス向けガイドで解説しています。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/kanyou-shokubutsu/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: TITLE,
    description: DESC,
    url: "/compare/kanyou-shokubutsu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
