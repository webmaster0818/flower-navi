import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】｜flowerデリ',
  description: '冬は切り花が長持ちしやすい季節です。クリスマスの華やかなアレンジから、松・千両・葉牡丹などのお正月アレンジ（しめ飾りの代わり）まで、花のサブスクで手軽に楽しめます。当サイトでは、ギフト対応・日付指定・年末の配送の混雑と早めのお申し込みについて、各サービスの情報にもとづいて解説しています。',
  alternates: { canonical: "/guides/christmas-oshogatsu/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】｜flowerデリ',
    description: '冬は花が長持ちしやすい季節です。クリスマスからお正月にかけての花のサブスクについて、ギフト対応・日付指定・お正月アレンジ（しめ飾りの代わり）とあわせて解説しています。',
    url: "/guides/christmas-oshogatsu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】｜flowerデリ', description: '冬は花が長持ちしやすい季節です。クリスマスからお正月にかけての花のサブスクを、ギフト対応・お正月アレンジとあわせて解説しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
