import type { Metadata } from "next";

const TITLE = "観葉植物の育て方と置き場所【2026年】日当たり・水やり・枯らさないコツ｜flowerデリ";
const DESC = "観葉植物を枯らさないための育て方を、置き場所と日当たりの見極め、水やりの頻度、季節ごとの管理、葉の状態から原因を探すチェックまで実務目線で解説。サービスの比較・月額料金は「観葉植物のサブスク・レンタル比較」ページで扱います。";

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
