import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年9月21日】｜flowerデリ',
  description: '2026年の敬老の日は9月21日（月・祝）。一度きりの花束ではなく、毎月届く「花のサブスク」を敬老の日ギフトに。ギフト対応・日付指定・遠方の祖父母への贈り方を、各サービスの実情報で比較して解説します。',
  alternates: { canonical: "/guides/keirou-no-hi/" },
  openGraph: {
    title: '敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年9月21日】｜flowerデリ',
    description: '2026年の敬老の日は9月21日（月・祝）。毎月届く花のサブスクを敬老の日ギフトに。ギフト対応・日付指定・遠方への贈り方を実情報で比較解説。',
    url: "/guides/keirou-no-hi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年9月21日】｜flowerデリ', description: '2026年の敬老の日は9月21日（月・祝）。毎月届く花のサブスクを敬老の日ギフトに。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
