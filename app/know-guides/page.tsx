import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { knowGuides } from "@/data/knowGuides";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "花のサブスク Know系ナレッジ｜花言葉/法人/ペット安全 等｜flowerデリ",
  description: "花のサブスクに関する Know系ナレッジを網羅。花言葉・法人プラン・ペット安全・アロマ組み合わせ・ドライフラワー化など実用ガイド。",
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
              { "@type": "ListItem", position: 2, name: "Know系ナレッジ", item: url },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; Know系ナレッジ
          </nav>
          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">
              花のサブスク Know系ナレッジ完全ガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              花のサブスクを最大限楽しむための {knowGuides.length} の知識ガイド。
              花言葉・法人プラン・ペット安全・アロマ・ドライフラワー化など、サブスクの先にある暮らしの広がりを網羅。
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
                  <p className="mt-3 text-xs text-[#4A7C59] font-bold">詳しく見る →</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
