import type { Metadata } from "next";

const TITLE = "観葉植物のサブスク・定期便の選び方【2026年】購入型とレンタル型の違い・費用の目安｜flowerデリ";
const DESC = "観葉植物のサブスク（定期便・レンタル）の選び方を、購入型とレンタル型の違い・費用の目安・花のサブスクとの違いから整理。AND PLANTSなど観葉植物を扱うサービスの特徴と、個人・オフィスでの選び方を、公式で確認できる情報だけで解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/kanyou-shokubutsu/" },
  openGraph: { title: TITLE, description: DESC, url: "/guides/kanyou-shokubutsu/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
