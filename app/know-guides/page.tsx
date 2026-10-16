import Link from "next/link";
import type { Metadata } from "next";
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
      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; 基礎知識
          </nav>
          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">
              花のサブスクの基礎知識ガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              花のサブスクをより楽しむための{knowGuides.length}の知識ガイドです。
              花言葉・法人プラン・ペットへの配慮・アロマ・ドライフラワーの作り方など、花のある暮らしに役立つ情報をまとめています。
            </p>
          </header>
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {knowGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/know-guides/${g.slug}/`}
                  className="block bg-white border border-[#E8E0D8] rounded-xl p-5 hover:border-[#4A7C59] transition-colors"
                >
                  <h3 className="font-bold text-[#333] mb-2 leading-snug">{g.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{g.description}</p>
                  <p className="mt-3 text-xs text-[#4A7C59] font-bold">詳細を確認する →</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
