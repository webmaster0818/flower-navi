import type { Metadata } from "next";

const TITLE = "法人・オフィス向け花の定期便【2026年】メリットと選び方・費用の目安｜flowerデリ";
const DESC = "オフィスや店舗に花を飾りたい法人向けに、花の定期便（サブスク）の選び方を解説。法人専用サービス（bloomee bizなど）と個人向けサブスクのオフィス利用の違い、来客印象・従業員のウェルビーイングなどのメリット、費用の目安を、公式確認できる料金だけで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/houjin-office/" },
  openGraph: { title: TITLE, description: DESC, url: "/guides/houjin-office/", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
