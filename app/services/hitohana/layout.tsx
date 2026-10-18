import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'hitohana（ひとはな）花のサブスク｜料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ',
  description: 'hitohana（ひとはな）花のサブスク「お花の定期便」の料金表（Lite 1,320円〜LL 4,950円・税込）、お届け頻度（毎週・2週・4週）、スキップと解約の締切、ギフト、bloomee等との違い、公式レビュー4.2を、2026年10月18日の公式確認にもとづきご説明します。',
  alternates: { canonical: "/services/hitohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'hitohana（ひとはな）花のサブスク｜料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ',
    description: 'hitohana（ひとはな）花のサブスク「お花の定期便」の料金表（Lite 1,320円〜LL 4,950円・税込）、お届け頻度（毎週・2週・4週）、スキップと解約の締切、ギフト、bloomee等との違い、公式レビュー4.2を、2026年10月18日の公式確認にもとづきご説明します。',
    url: "/services/hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'hitohana（ひとはな）花のサブスク｜料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ', description: 'hitohana（ひとはな）花のサブスク「お花の定期便」の料金表（Lite 1,320円〜LL 4,950円・税込）、お届け頻度（毎週・2週・4週）、スキップと解約の締切、ギフト、bloomee等との違い、公式レビュー4.2を、2026年10月18日の公式確認にもとづきご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
