import type { Metadata } from "next";

const title = "ピュアフラワー（お花の定期便）の料金・配達エリア・解約｜1回1,000円×月2回を公式確認【2026年11月】｜flowerデリ";
const description = "お花の定期便ピュアフラワーの料金・配達エリア・お休みと解約の方法を2026年11月23日に公式サイトで確認しました。1回1,000円×月2回（月額2,000円・税込・送料無料）で、宅配業者を使わずスタッフが届けます。配達は18都府県・18店舗の担当制で、お届け日・時間は指定できません。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/pureflower/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/pureflower/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
