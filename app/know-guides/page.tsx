import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Header from "@/app/components/Header";
import { knowGuides } from "@/data/knowGuides";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "花のサブスクの基礎知識｜花言葉・法人利用・ペットへの配慮など｜flowerデリ",
  description: "花のサブスクに関する基礎知識をまとめています。花言葉、法人プラン、ペットへの配慮、アロマとの組み合わせ、ドライフラワーの作り方などの実用的なガイドです。",
  alternates: { canonical: "/know-guides/" },
};

export default function KnowIndexPage() {
  const url = `${SITE_URL}/know-guides/`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "基礎知識", item: url },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-[#F6F4EF]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; 基礎知識
          </nav>
          <PageHero bleed path={"/know-guides/"}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">
              花のサブスクの基礎知識ガイド
            </h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">
              花のサブスクをより楽しむための{knowGuides.length}の知識ガイドです。
              花言葉・法人プラン・ペットへの配慮・アロマ・ドライフラワーの作り方など、花のある暮らしに役立つ情報をまとめています。
            </p>
          </PageHero>
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {knowGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/know-guides/${g.slug}/`}
                  className="block bg-white border border-[#DEDAD2] rounded-md p-5 hover:border-[#2F5B43] transition-colors"
                >
                  <h3 className="font-bold text-[#1F2420] mb-2 leading-snug">{g.title}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed line-clamp-3">{g.description}</p>
                  <p className="mt-3 text-xs text-[#2F5B43] font-bold">詳細を確認する →</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
