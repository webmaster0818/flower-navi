import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクのメリット・デメリット7選｜始める前に確認すべき点｜flowerデリ',
  description: 'お花の定期便（花のサブスク）を検討中の方に向けて、当サイトではメリット7つとデメリット5つを解説します。ご自身に合うかどうか、始める前の判断材料としてご活用ください。',
  alternates: { canonical: "/guides/merit-demerit/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクのメリット・デメリット7選｜始める前に確認すべき点｜flowerデリ',
    description: 'お花の定期便（花のサブスク）を検討中の方に向けて、当サイトではメリット7つとデメリット5つを解説します。ご自身に合うかどうか、始める前の判断材料としてご活用ください。',
    url: "/guides/merit-demerit/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクのメリット・デメリット7選｜始める前に確認すべき点｜flowerデリ', description: 'お花の定期便（花のサブスク）を検討中の方に向けて、当サイトではメリット7つとデメリット5つを解説します。ご自身に合うかどうか、始める前の判断材料としてご活用ください。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
