import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ヒトハナ（HitoHana）花のサブスク｜運営会社・料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ',
  description: 'ヒトハナ（HitoHana）の退会は、定期便の解約（マイページ・お届け日の3日前0時締切）とは別の手続きで、公式窓口（フォーム・LINE・電話）に申請します。運営は株式会社Beer and Tech（さいたま市）。お花の定期便の料金（Lite 1,320円〜LL 4,950円・税込）・頻度・スキップも公式確認。',
  alternates: { canonical: "/services/hitohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ヒトハナ（HitoHana）花のサブスク｜運営会社・料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ',
    description: 'ヒトハナ（HitoHana）の退会は、定期便の解約（マイページ・お届け日の3日前0時締切）とは別の手続きで、公式窓口（フォーム・LINE・電話）に申請します。運営は株式会社Beer and Tech（さいたま市）。お花の定期便の料金（Lite 1,320円〜LL 4,950円・税込）・頻度・スキップも公式確認。',
    url: "/services/hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ヒトハナ（HitoHana）花のサブスク｜運営会社・料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ', description: 'ヒトハナ（HitoHana）の退会は、定期便の解約（マイページ・お届け日の3日前0時締切）とは別の手続きで、公式窓口（フォーム・LINE・電話）に申請します。運営は株式会社Beer and Tech（さいたま市）。お花の定期便の料金（Lite 1,320円〜LL 4,950円・税込）・頻度・スキップも公式確認。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
