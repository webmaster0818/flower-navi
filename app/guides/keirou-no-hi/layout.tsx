import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年9月21日】｜flowerデリ',
  description: '2026年の敬老の日は9月21日（月・祝）です。当サイトでは、一度きりの花束ではなく毎月届く花のサブスクを敬老の日のギフトとしてご提案し、ギフト対応・日付指定・遠方の祖父母への贈り方を各サービスの情報にもとづいて比較・解説しています。',
  alternates: { canonical: "/guides/keirou-no-hi/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年9月21日】｜flowerデリ',
    description: '2026年の敬老の日は9月21日（月・祝）です。毎月届く花のサブスクを敬老の日のギフトとして贈る方法について、ギフト対応・日付指定・遠方への贈り方を比較・解説しています。',
    url: "/guides/keirou-no-hi/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年9月21日】｜flowerデリ', description: '2026年の敬老の日は9月21日（月・祝）です。毎月届く花のサブスクを敬老の日のギフトとして贈る方法を解説しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
