import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ブルーミーとメデルどっちがいい？8つの違いを比較【結論：総額最安はmedelu 748円/回】｜flowerデリ',
  description: '花のサブスクで人気の2大サービス「bloomee（ブルーミー）」と「medelu（メデル）」。 料金・花の本数・解約のしやすさなど8つの比較ポイントで、どちらがあなたに合うか徹底解説します。',
  alternates: { canonical: "/compare/bloomee-vs-medelu/" },
  openGraph: {
    title: 'ブルーミーとメデルどっちがいい？8つの違いを比較【結論：総額最安はmedelu 748円/回】｜flowerデリ',
    description: '花のサブスクで人気の2大サービス「bloomee（ブルーミー）」と「medelu（メデル）」。 料金・花の本数・解約のしやすさなど8つの比較ポイントで、どちらがあなたに合うか徹底解説します。',
    url: "/compare/bloomee-vs-medelu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ブルーミーとメデルどっちがいい？8つの違いを比較【結論：総額最安はmedelu 748円/回】｜flowerデリ', description: '花のサブスクで人気の2大サービス「bloomee（ブルーミー）」と「medelu（メデル）」。 料金・花の本数・解約のしやすさなど8つの比較ポイントで、どちらがあなたに合うか徹底解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
