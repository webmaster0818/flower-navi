import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花サブスクの解約方法｜各社の解約手順と注意点を解説｜flowerデリ',
  description: '花のサブスクの解約を検討している方に向けて、当サイトでは主要5サービスの解約方法・手順・注意点、違約金の有無をまとめています。',
  alternates: { canonical: "/guides/kaiyaku/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花サブスクの解約方法｜各社の解約手順と注意点を解説｜flowerデリ',
    description: '花のサブスクの解約を検討している方に向けて、当サイトでは主要5サービスの解約方法・手順・注意点、違約金の有無をまとめています。',
    url: "/guides/kaiyaku/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花サブスクの解約方法｜各社の解約手順と注意点を解説｜flowerデリ', description: '花のサブスクの解約を検討している方に向けて、当サイトでは主要5サービスの解約方法・手順・注意点、違約金の有無をまとめています。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
