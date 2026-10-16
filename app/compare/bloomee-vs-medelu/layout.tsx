import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ブルーミーとメデルの8つの違いを比較【送料込み総額の最安はmedelu 748円/回】｜flowerデリ',
  description: '花のサブスクで人気のある「bloomee（ブルーミー）」と「medelu（メデル）」を、料金・花の本数・解約条件など8つの項目で比較し、利用目的に応じた選び方をご説明します。',
  alternates: { canonical: "/compare/bloomee-vs-medelu/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ブルーミーとメデルの8つの違いを比較【送料込み総額の最安はmedelu 748円/回】｜flowerデリ',
    description: '花のサブスクで人気のある「bloomee（ブルーミー）」と「medelu（メデル）」を、料金・花の本数・解約条件など8つの項目で比較し、利用目的に応じた選び方をご説明します。',
    url: "/compare/bloomee-vs-medelu/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ブルーミーとメデルの8つの違いを比較【送料込み総額の最安はmedelu 748円/回】｜flowerデリ', description: '花のサブスクで人気のある「bloomee（ブルーミー）」と「medelu（メデル）」を、料金・花の本数・解約条件など8つの項目で比較し、利用目的に応じた選び方をご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
