import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お彼岸の花を用意する時期｜2026年秋彼岸の日程とお供えの花・注文時期の目安｜flowerデリ',
  description: '2026年の秋彼岸は9月20日（日）〜26日（土）で、中日は秋分の日の9月23日（水）です。当サイトでは、お彼岸のお供えに向く花・避ける花、花のサブスクでの用意の方法、配送方式ごとにお彼岸に間に合わせるための注文時期の目安を解説しています。',
  alternates: { canonical: "/guides/ohigan/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'お彼岸の花を用意する時期｜2026年秋彼岸の日程とお供えの花・注文時期の目安｜flowerデリ',
    description: '2026年の秋彼岸は9月20〜26日で、中日は秋分の日の9月23日です。お供えに向く花・避ける花、花のサブスクでの用意の方法、配送方式ごとの注文時期の目安を解説しています。',
    url: "/guides/ohigan/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お彼岸の花を用意する時期｜2026年秋彼岸の日程とお供えの花｜flowerデリ', description: '2026年の秋彼岸は9月20〜26日です。お供えの花と花のサブスクでの用意の方法、注文時期の目安を解説しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
