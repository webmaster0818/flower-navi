import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクを母の日にプレゼントおすすめギフト3選【2026年】｜flowerデリ',
  description: '2026年の母の日は5月10日（日）。今年は一度きりの花束ではなく、 毎月届く「花のサブスク」をプレゼントしてみませんか？ 長く楽しめるギフトとして注目の花の定期便、おすすめ3選をご紹介します。',
  alternates: { canonical: "/guides/mothers-day/" },
  openGraph: {
    title: '花のサブスクを母の日にプレゼントおすすめギフト3選【2026年】｜flowerデリ',
    description: '2026年の母の日は5月10日（日）。今年は一度きりの花束ではなく、 毎月届く「花のサブスク」をプレゼントしてみませんか？ 長く楽しめるギフトとして注目の花の定期便、おすすめ3選をご紹介します。',
    url: "/guides/mothers-day/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクを母の日にプレゼントおすすめギフト3選【2026年】｜flowerデリ', description: '2026年の母の日は5月10日（日）。今年は一度きりの花束ではなく、 毎月届く「花のサブスク」をプレゼントしてみませんか？ 長く楽しめるギフトとして注目の花の定期便、おすすめ3選をご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
