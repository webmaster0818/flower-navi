import type { Metadata } from "next";

const title = "タスハナ（+hana）の口コミ・評判｜料金660円〜・5回縛り・解約条件を公式確認【2026年10月】｜flowerデリ";
const description = "タスハナ（+hana）の口コミ・評判と料金・条件を公式サイトで確認。1回660円〜＋送料330円、5回以上の出荷が前提、解約・スキップは次回配送日の10日前まで。ポスト投函で届くロスフラワーの定期便です。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/tasuhana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/tasuhana/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
