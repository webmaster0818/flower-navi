import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花サブスク解約方法まとめ｜各社の解約手順と注意点を徹底解説｜flowerデリ',
  description: '花のサブスクをやめたいけど「解約方法がわからない」「違約金がかかるの？」と不安に思っていませんか。 この記事では、人気5サービスの解約方法・手順・注意点をわかりやすくまとめました。',
  alternates: { canonical: "/guides/kaiyaku/" },
  openGraph: {
    title: '花サブスク解約方法まとめ｜各社の解約手順と注意点を徹底解説｜flowerデリ',
    description: '花のサブスクをやめたいけど「解約方法がわからない」「違約金がかかるの？」と不安に思っていませんか。 この記事では、人気5サービスの解約方法・手順・注意点をわかりやすくまとめました。',
    url: "/guides/kaiyaku/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花サブスク解約方法まとめ｜各社の解約手順と注意点を徹底解説｜flowerデリ', description: '花のサブスクをやめたいけど「解約方法がわからない」「違約金がかかるの？」と不安に思っていませんか。 この記事では、人気5サービスの解約方法・手順・注意点をわかりやすくまとめました。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
