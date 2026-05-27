import type { Metadata } from "next";
import HomeClient from "@/app/components/HomeClient";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "flowerデリ｜お花の定期便おすすめ5選を徹底比較【2026年最新】",
  description:
    "flowerデリは、お花の定期便（花のサブスク）人気5社を料金・送料・届き方・花の本数で徹底比較。bloomee・medelu・AND PLANTS・hanamekuなど、あなたにぴったりのサービスが見つかる診断付き。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "flowerデリ｜お花の定期便おすすめ5選を徹底比較【2026年最新】",
    description: "お花の定期便5社を料金・送料・花の本数で徹底比較。あなたにぴったりが見つかる診断付き。",
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
  name: "お花の定期便おすすめサービス8選",
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
        text: "お花の定期便(花のサブスク)は、定期的に旬のお花が届くサブスクリプションサービスです。月額500〜3,000円程度で、自宅やプレゼント先に新鮮なお花が届きます。bloomee・medelu・AND PLANTSなどが代表的なサービスです。",
      },
    },
    {
      "@type": "Question",
      name: "一番安い花のサブスクはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年5月時点で最安はmedelu(メデル)の月698円(送料込み)です。次にbloomee(ブルーミー)の体験プラン980円(送料385円別)、タスハナの880円が続きます。詳しくは「安い花のサブスク比較」ページをご覧ください。",
      },
    },
    {
      "@type": "Question",
      name: "ポスト投函で受け取れるサービスはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "bloomee(レギュラー・体験)、medelu(Lite・Lite+)、タスハナ、hanamekuのレギュラープランがポスト投函対応です。不在時でも受け取れるため、忙しい方や一人暮らしの方に人気です。",
      },
    },
    {
      "@type": "Question",
      name: "解約に違約金はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "サービスにより異なります。bloomeeは初回4回受取後に違約金なしで解約可能。medelu・LIFFT・hanamekuは回数縛りなしでいつでも解約OK。詳しくは各サービスの解約方法ページをご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "プレゼント・ギフトとして贈れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "bloomee・HitoHana・LIFFTがギフトプランを提供しています。母の日・誕生日・記念日などに人気で、相手に喜んでもらえます。詳しくは「花のサブスクをプレゼントに贈る方法」ページを参照。",
      },
    },
    {
      "@type": "Question",
      name: "仏壇用のお花にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "bloomeeは唯一ポスト投函で届く仏花対応サブスクです。bloomeeの他、Miraflora・HitoHana・ハナプライムなど仏花特化のサブスクもあります。月命日・お盆・お彼岸に合わせた配送も可能です。",
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
