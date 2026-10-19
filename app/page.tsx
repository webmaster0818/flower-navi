import type { Metadata } from "next";
import HomeClient from "@/app/components/HomeClient";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "花のサブスク比較【2026年最新】お花の定期便おすすめ5選を送料込み料金で比較｜flowerデリ",
  description:
    "flowerデリは、お花の定期便（花のサブスク）の人気5社を、料金・送料・届き方・花の本数の観点で比較する専門ガイドです。bloomee・medelu・AND PLANTS・hanamekuなどについて、公式サイトの情報にもとづいて掲載しています。診断機能も利用できます。",
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: "花のサブスク比較【2026年最新】お花の定期便おすすめ5選を送料込み料金で比較｜flowerデリ",
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
  name: "お花の定期便おすすめサービス5選",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "お花の定期便とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "お花の定期便（花のサブスク）は、定期的に旬のお花が届くサブスクリプションサービスです。1回あたり500〜3,000円程度で、自宅やプレゼント先に新鮮なお花が届きます。bloomee・medelu・AND PLANTSなどが代表的なサービスです。",
      },
    },
    {
      "@type": "Question",
      name: "一番安い花のサブスクはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1回あたりの最安は、medelu（メデル）のMini 748円（税込・送料込み）です。bloomee（ブルーミー）のお試しプランは、花代980円＋送料385円で実質1,365円/回です（2026年10月に各公式サイトで確認）。詳しくは「安い花のサブスク比較」ページをご覧ください。",
      },
    },
    {
      "@type": "Question",
      name: "ポスト投函で受け取れるサービスはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "bloomee（お試し・グリーンプラン）、medelu（Mini・Lite）、hanameku（ライトプラン）などがポスト投函に対応しています。不在時でも受け取れるため、日中不在がちな方や一人暮らしの方に適しています。",
      },
    },
    {
      "@type": "Question",
      name: "解約に違約金はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "サービスにより異なります。bloomeeは、初回の4回を受け取った後であれば、違約金なしで解約できます。medelu・LIFFTは回数の条件がなく、いつでも解約できます。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません（2026年10月17日公式確認）。詳しくは、各サービスの解約方法のページをご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "プレゼント・ギフトとして贈れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "bloomee・HitoHana・LIFFTがギフトプランを提供しています。母の日・誕生日・記念日などに利用されています。詳しくは「花のサブスクをプレゼントに贈る方法」ページをご参照ください。",
      },
    },
    {
      "@type": "Question",
      name: "仏壇用のお花にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "定期便でお供え用のお花を届けるサービスとして、ハナプライムの「お供え花コース」（1回980円〜・送料無料）と「お供え花（対）コース」（1回1,280円〜）があります。bloomee・HitoHanaは、お供え用の花を単品のギフトとして販売しています（2026年10月19日公式確認）。",
      },
    },
  ],
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
