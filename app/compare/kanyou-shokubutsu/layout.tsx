import type { Metadata } from "next";

const TITLE = '観葉植物は購入とサブスク・レンタルどちらがお得？【2026年】月額料金・交換対応で比較｜flowerデリ';
const DESC = '観葉植物を「買って育てる」のと「サブスク・レンタルで借りて任せる」のはどちらがお得か。AND PLANTS・CLAS・HitoHanaを提供形態・月額の目安・メンテナンス・交換対応で対比し、購入価格と月額の損益が入れ替わる考え方まで、公式で確認できた値だけで整理します。育て方は育て方ガイド、オフィス導入は法人・オフィス向けガイドで解説。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/kanyou-shokubutsu/" },
  openGraph: {
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
