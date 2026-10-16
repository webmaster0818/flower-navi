import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お花の定期便をふるさと納税で受け取る方法｜花のある暮らしをお得に始める【2026年】｜flowerデリ',
  description: 'ふるさと納税の返礼品として花の定期便を選ぶと、実質2,000円の自己負担で数か月間お花が届きます。当サイトでは、その仕組みとおすすめの自治体を解説しています。',
  alternates: { canonical: "/guides/furusato-nouzei/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'お花の定期便をふるさと納税で受け取る方法｜花のある暮らしをお得に始める【2026年】｜flowerデリ',
    description: 'ふるさと納税の返礼品として花の定期便を選ぶと、実質2,000円の自己負担で数か月間お花が届きます。当サイトでは、その仕組みとおすすめの自治体を解説しています。',
    url: "/guides/furusato-nouzei/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'お花の定期便をふるさと納税で受け取る方法｜花のある暮らしをお得に始める【2026年】｜flowerデリ', description: 'ふるさと納税の返礼品として花の定期便を選ぶと、実質2,000円の自己負担で数か月間お花が届きます。当サイトでは、その仕組みとおすすめの自治体を解説しています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
