import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクの始め方｜申し込みの流れと選び方【月748円〜・2026年】｜flowerデリ',
  description: '花のサブスク（定期便）を初めて利用する方に向けて、当サイトではサービスの選び方、申し込みの流れ、届いたお花の飾り方までを順にご説明します。',
  alternates: { canonical: "/guides/beginner/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクの始め方｜申し込みの流れと選び方【月748円〜・2026年】｜flowerデリ',
    description: '花のサブスク（定期便）を初めて利用する方に向けて、当サイトではサービスの選び方、申し込みの流れ、届いたお花の飾り方までを順にご説明します。',
    url: "/guides/beginner/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクの始め方｜申し込みの流れと選び方【月748円〜・2026年】｜flowerデリ', description: '花のサブスク（定期便）を初めて利用する方に向けて、当サイトではサービスの選び方、申し込みの流れ、届いたお花の飾り方までを順にご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
