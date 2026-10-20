import type { Metadata } from "next";
import HomeClient from "@/app/components/HomeClient";
import { HOME_FAQ } from "@/data/homeFaq";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "お花のサブスク比較【2026年10月】花の定期便おすすめ5社を送料込み料金・回数の条件で比較｜flowerデリ",
  description:
    "お花のサブスク（お花の定期便）を送料込みの料金・届き方・回数の条件で比較しています。最安はmedelu Mini 748円（送料込み）、bloomeeは花代980円＋送料385円で4回が前提、AND PLANTSは1,980円（送料込み・6〜8本）で回数の条件なしです（2026年10月公式確認）。",
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: "お花のサブスク比較【2026年10月】花の定期便おすすめ5社を送料込み料金・回数の条件で比較｜flowerデリ",
    description: "お花の定期便5社を、料金・送料・花の本数の観点で比較しています。診断機能も利用できます。",
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "flowerデリ",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "flowerデリ",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const services = [
  { id: "bloomee", name: "bloomee（ブルーミー）", url: `${SITE_URL}/services/bloomee/` },
  { id: "medelu", name: "medelu（メデル）", url: `${SITE_URL}/services/medelu/` },
  { id: "andplants", name: "AND PLANTS（アンドプランツ）", url: `${SITE_URL}/services/and-plants/` },
  { id: "hitohana", name: "HitoHana（ヒトハナ）", url: `${SITE_URL}/services/hitohana/` },
  { id: "lifft", name: "LIFFT（リフト）", url: `${SITE_URL}/services/lifft/` },
  { id: "hanameku", name: "hanameku（ハナメク）", url: `${SITE_URL}/services/hanameku/` },
  { id: "tasuhana", name: "+hana（タスハナ）", url: `${SITE_URL}/services/tasuhana/` },
  { id: "nihon-sogo-engei", name: "日本総合園芸", url: `${SITE_URL}/services/nihon-sogo-engei/` },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "お花の定期便サービスの個別レビュー",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: s.url,
    name: s.name,
  })),
};

const topFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topFaqSchema) }} />
      <HomeClient />
    </>
  );
}
