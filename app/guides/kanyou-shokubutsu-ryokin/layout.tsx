import type { Metadata } from "next";

const TITLE = "月額制の観葉植物サブスクと購入はどちらがお得？【2026年】公式価格で試算｜料金が決まる5つの条件｜flowerデリ";
const DESC = "月額制の観葉植物レンタルと購入を、AND PLANTSのパキラとHitoHana Rental Green・GOOD GREENの公式価格で試算しました（2026年10月19日確認）。購入価格はレンタル月額の約8か月分です。月額に含まれるメンテナンス・交換の範囲、料金が決まる5つの条件、予算の立て方も解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/kanyou-shokubutsu-ryokin/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }],  title: TITLE, description: DESC, url: "/guides/kanyou-shokubutsu-ryokin/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
