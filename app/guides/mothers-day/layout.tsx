import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクを母の日のプレゼントに｜おすすめギフト3選【2026年】｜flowerデリ',
  description: '2026年の母の日は5月10日（日）です。当サイトでは、一度きりの花束に代わる贈り物として、毎月花が届く「花のサブスク」のうち、長く楽しめるギフトに適した3サービスをご紹介します。',
  alternates: { canonical: "/guides/mothers-day/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクを母の日のプレゼントに｜おすすめギフト3選【2026年】｜flowerデリ',
    description: '2026年の母の日は5月10日（日）です。当サイトでは、一度きりの花束に代わる贈り物として、毎月花が届く「花のサブスク」のうち、長く楽しめるギフトに適した3サービスをご紹介します。',
    url: "/guides/mothers-day/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクを母の日のプレゼントに｜おすすめギフト3選【2026年】｜flowerデリ', description: '2026年の母の日は5月10日（日）です。当サイトでは、一度きりの花束に代わる贈り物として、毎月花が届く「花のサブスク」のうち、長く楽しめるギフトに適した3サービスをご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
