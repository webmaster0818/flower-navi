import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花サブスク初心者ガイド｜失敗しない選び方と始め方を徹底解説｜flowerデリ',
  description: '花のサブスク（定期便）を始めたいけど「どのサービスを選べばいいの？」「届いたお花はどうすればいいの？」と悩んでいませんか。 この記事では、初心者が失敗しないための選び方・始め方・お花の飾り方まで、すべてを分かりやすく解説します。',
  alternates: { canonical: "/guides/beginner/" },
  openGraph: {
    title: '花サブスク初心者ガイド｜失敗しない選び方と始め方を徹底解説｜flowerデリ',
    description: '花のサブスク（定期便）を始めたいけど「どのサービスを選べばいいの？」「届いたお花はどうすればいいの？」と悩んでいませんか。 この記事では、初心者が失敗しないための選び方・始め方・お花の飾り方まで、すべてを分かりやすく解説します。',
    url: "/guides/beginner/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花サブスク初心者ガイド｜失敗しない選び方と始め方を徹底解説｜flowerデリ', description: '花のサブスク（定期便）を始めたいけど「どのサービスを選べばいいの？」「届いたお花はどうすればいいの？」と悩んでいませんか。 この記事では、初心者が失敗しないための選び方・始め方・お花の飾り方まで、すべてを分かりやすく解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
