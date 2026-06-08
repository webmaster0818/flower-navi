import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LIFFT（リフト）の口コミ・評判花の定期便の実力を検証【2026年最新】｜flowerデリ',
  description: 'LIFFT（リフト）はBOTANIC株式会社が運営する花の定期便サービスです。 市場直送・クール便配送で鮮度にこだわった花が届きます。実際の口コミとともにその実力を検証します。',
  alternates: { canonical: "/services/lifft/" },
  openGraph: {
    title: 'LIFFT（リフト）の口コミ・評判花の定期便の実力を検証【2026年最新】｜flowerデリ',
    description: 'LIFFT（リフト）はBOTANIC株式会社が運営する花の定期便サービスです。 市場直送・クール便配送で鮮度にこだわった花が届きます。実際の口コミとともにその実力を検証します。',
    url: "/services/lifft/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'LIFFT（リフト）の口コミ・評判花の定期便の実力を検証【2026年最新】｜flowerデリ', description: 'LIFFT（リフト）はBOTANIC株式会社が運営する花の定期便サービスです。 市場直送・クール便配送で鮮度にこだわった花が届きます。実際の口コミとともにその実力を検証します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
