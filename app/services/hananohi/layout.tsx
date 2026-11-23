import type { Metadata } from "next";

const title = "ハナノヒ（日比谷花壇）の料金・プラン・使える店舗｜月額1,320円〜の店頭受け取り型を公式確認【2026年11月】｜flowerデリ";
const description = "日比谷花壇のお花の定額制アプリ「ハナノヒ」の料金・プラン・使える店舗を2026年11月23日に公式サイトで確認しました。月額1,320円（切花1本×月4回）〜17,490円の5プランで、受け取りは店頭のみ（宅配なし）。公式の店舗一覧に載る68店舗の都道府県別の内訳と、自動更新・解約の注意点もまとめています。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/hananohi/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/hananohi/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
