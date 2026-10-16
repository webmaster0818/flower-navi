import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花の定期便をプレゼントに｜母の日・誕生日におすすめのギフト対応サービス｜flowerデリ',
  description: '花のサブスクは、プレゼントとしての利用も広がっています。当サイトでは、ギフトに対応した花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをご紹介します。',
  alternates: { canonical: "/guides/present/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花の定期便をプレゼントに｜母の日・誕生日におすすめのギフト対応サービス｜flowerデリ',
    description: '花のサブスクは、プレゼントとしての利用も広がっています。当サイトでは、ギフトに対応した花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをご紹介します。',
    url: "/guides/present/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花の定期便をプレゼントに｜母の日・誕生日におすすめのギフト対応サービス｜flowerデリ', description: '花のサブスクは、プレゼントとしての利用も広がっています。当サイトでは、ギフトに対応した花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをご紹介します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
