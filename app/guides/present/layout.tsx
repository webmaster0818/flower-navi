import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花の定期便をプレゼントに贈ろう母の日・誕生日におすすめのギフト対応サービス｜flowerデリ',
  description: '花のサブスクはプレゼントとしても人気が高まっています。 この記事では、ギフト対応している花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをまとめました。',
  alternates: { canonical: "/guides/present/" },
  openGraph: {
    title: '花の定期便をプレゼントに贈ろう母の日・誕生日におすすめのギフト対応サービス｜flowerデリ',
    description: '花のサブスクはプレゼントとしても人気が高まっています。 この記事では、ギフト対応している花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをまとめました。',
    url: "/guides/present/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花の定期便をプレゼントに贈ろう母の日・誕生日におすすめのギフト対応サービス｜flowerデリ', description: '花のサブスクはプレゼントとしても人気が高まっています。 この記事では、ギフト対応している花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをまとめました。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
