import type { Metadata } from "next";

const TITLE = "観葉植物のサブスク・レンタル料金の考え方｜相場が決まる5つの条件と予算の立て方｜flowerデリ";
const DESC = "観葉植物のサブスク・レンタルは何で金額が変わるのか、初期費用と月額の内訳、メンテナンスの有無による違い、個人と法人の違いを整理しています。「月額5,000円以内で始められるか」を、予算の分解と見積もりの取り方から判断できるよう解説します。金額は当サイトが公式に確認できた値のみを掲載しています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/kanyou-shokubutsu-ryokin/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }],  title: TITLE, description: DESC, url: "/guides/kanyou-shokubutsu-ryokin/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
