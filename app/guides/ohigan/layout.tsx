import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お彼岸の花はいつ用意する？2026年秋彼岸の日程とお供えの花・注文の逆算｜flowerデリ',
  description: '2026年の秋彼岸は9月20日（日）〜26日（土）、中日は秋分の日9月23日（水）。お彼岸のお供えの花に向く花・避ける花、花のサブスクでの用意の仕方、配送方式ごとの「彼岸に間に合わせる」注文の逆算まで実情報で解説します。',
  alternates: { canonical: "/guides/ohigan/" },
  openGraph: {
    title: 'お彼岸の花はいつ用意する？2026年秋彼岸の日程とお供えの花・注文の逆算｜flowerデリ',
    description: '2026年の秋彼岸は9月20〜26日、中日は秋分の日9月23日。お供えの花に向く花・避ける花、花のサブスクでの用意の仕方、配送方式ごとの間に合う注文の逆算を実情報で解説。',
    url: "/guides/ohigan/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お彼岸の花はいつ用意する？2026年秋彼岸の日程とお供えの花｜flowerデリ', description: '2026年秋彼岸は9月20〜26日。お供えの花と花のサブスクでの用意の仕方、間に合う注文の逆算を実情報で解説。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
