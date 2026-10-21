import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Header from "@/app/components/Header";
import { regions } from "@/data/regions";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "地域別の花のサブスクおすすめ｜配送対応エリアガイド｜flowerデリ",
  description: "東京・大阪・名古屋・横浜・福岡・札幌・仙台・京都など、地域別に適した花のサブスクを解説します。配送への対応、気候に合わせた手入れ、地域の花文化をまとめています。",
  alternates: { canonical: "/regions/" },
};

export default function RegionsIndexPage() {
  const url = `${SITE_URL}/regions/`;
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
              { "@type": "ListItem", position: 2, name: "地域別", item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: regions.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: r.title,
              url: `${SITE_URL}/regions/${r.slug}/`,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-[#F6F4EF]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; 地域別
          </nav>

          <PageHero bleed path={"/regions/"}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">
              地域別 花のサブスクおすすめガイド
            </h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">
              花のサブスクは『配送対応エリア』『気候による花持ち』『地域の花文化』など、
              お住まいの地域によって選び方が変わります。当サイトでは{regions.length}地域について、適したサービス・配送の注意点・地域の花文化を解説しています。
              気候に合わせた花の手入れ方法も掲載していますので、年間を通じた花のサブスク選びにお役立てください。
            </p>
          </PageHero>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              {regions.length} 地域別ガイド
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {regions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/regions/${r.slug}/`}
                  className="block bg-white border border-[#DEDAD2] rounded-md p-5 hover:border-[#2F5B43] transition-colors"
                >
                  <h3 className="font-bold text-[#1F2420] mb-2 leading-snug">{r.title}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed line-clamp-3">{r.description}</p>
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
