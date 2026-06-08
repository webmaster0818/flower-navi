import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'HitoHana（ひとはな）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
  description: '好きな色とボリュームを自分で選べる花の定期便「HitoHana（ひとはな）」。 1回1,320円から始められるサービスの実力を、料金・メリット・デメリット・口コミから詳しく検証します。',
  alternates: { canonical: "/services/hitohana/" },
  openGraph: {
    title: 'HitoHana（ひとはな）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ',
    description: '好きな色とボリュームを自分で選べる花の定期便「HitoHana（ひとはな）」。 1回1,320円から始められるサービスの実力を、料金・メリット・デメリット・口コミから詳しく検証します。',
    url: "/services/hitohana/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'HitoHana（ひとはな）の口コミ・評判を徹底調査【2026年最新】｜flowerデリ', description: '好きな色とボリュームを自分で選べる花の定期便「HitoHana（ひとはな）」。 1回1,320円から始められるサービスの実力を、料金・メリット・デメリット・口コミから詳しく検証します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
