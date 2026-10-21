import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ヒトハナ（HitoHana）花のサブスク｜運営会社・料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ',
  description: 'ヒトハナ（HitoHana）は株式会社Beer and Tech（さいたま市）が運営する花と植物の通販サイトです。花のサブスク「お花の定期便」の料金（Lite 1,320円〜LL 4,950円・税込）、頻度（毎週・2週・4週）、スキップと解約の締切、ギフト、他社との違いを公式確認にもとづき説明します。',
  alternates: { canonical: "/services/hitohana/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ヒトハナ（HitoHana）花のサブスク｜運営会社・料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ',
    description: 'ヒトハナ（HitoHana）は株式会社Beer and Tech（さいたま市）が運営する花と植物の通販サイトです。花のサブスク「お花の定期便」の料金（Lite 1,320円〜LL 4,950円・税込）、頻度（毎週・2週・4週）、スキップと解約の締切、ギフト、他社との違いを公式確認にもとづき説明します。',
    url: "/services/hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ヒトハナ（HitoHana）花のサブスク｜運営会社・料金1,320円〜・頻度・スキップ・解約を公式確認【2026年10月】｜flowerデリ', description: 'ヒトハナ（HitoHana）は株式会社Beer and Tech（さいたま市）が運営する花と植物の通販サイトです。花のサブスク「お花の定期便」の料金（Lite 1,320円〜LL 4,950円・税込）、頻度（毎週・2週・4週）、スキップと解約の締切、ギフト、他社との違いを公式確認にもとづき説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
