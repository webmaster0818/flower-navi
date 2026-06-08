import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクのメリット・デメリット7選始める前に知っておくべきこと｜flowerデリ',
  description: 'お花の定期便（花のサブスク）を検討中の方に向けて、メリット7つとデメリット5つを徹底解説。 自分に合うかどうか、始める前に確認しておきましょう。',
  alternates: { canonical: "/guides/merit-demerit/" },
  openGraph: {
    title: '花のサブスクのメリット・デメリット7選始める前に知っておくべきこと｜flowerデリ',
    description: 'お花の定期便（花のサブスク）を検討中の方に向けて、メリット7つとデメリット5つを徹底解説。 自分に合うかどうか、始める前に確認しておきましょう。',
    url: "/guides/merit-demerit/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクのメリット・デメリット7選始める前に知っておくべきこと｜flowerデリ', description: 'お花の定期便（花のサブスク）を検討中の方に向けて、メリット7つとデメリット5つを徹底解説。 自分に合うかどうか、始める前に確認しておきましょう。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
