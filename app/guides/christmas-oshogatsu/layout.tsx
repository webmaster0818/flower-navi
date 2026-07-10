import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】｜flowerデリ',
  description: '冬は切り花が長持ちする季節。クリスマスの華やかなアレンジから、松・千両・葉牡丹などのお正月アレンジ（しめ飾りの代わり）まで、花のサブスクで手軽に楽しめます。ギフト対応・日付指定・配送の混雑と早めの申し込みを各サービスの実情報で解説します。',
  alternates: { canonical: "/guides/christmas-oshogatsu/" },
  openGraph: {
    title: 'クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】｜flowerデリ',
    description: '冬は花が長持ち。クリスマス〜お正月の花のサブスクを、ギフト対応・日付指定・お正月アレンジ（しめ飾りの代わり）とあわせて実情報で解説。',
    url: "/guides/christmas-oshogatsu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】｜flowerデリ', description: '冬は花が長持ち。クリスマス〜お正月の花のサブスクをギフト対応・お正月アレンジとあわせて解説。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
