import type { Metadata } from "next";

const title = "ネコハナ（猫と暮らす家庭向けの花の定期便）の料金・配送エリア・解約条件を公式確認【2026年11月】｜flowerデリ";
const description = "猫にとって安全性の高い品種に絞った花を届けるネコハナの定期便を、2026年11月27日に公式サイトで確認しました。定期購入は月額3,300円〜・定期便 S は4月〜10月が季節の花束、11月〜3月がバラの花束。配送エリア、最初の3回の約束、解約フォームの締切をまとめています。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/nekohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], title, description, url: "/services/nekohana/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
