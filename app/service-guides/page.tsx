import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { serviceGuides } from "@/data/serviceGuides";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "サービス別の解約方法・口コミ完全ガイド｜flowerデリ",
  description: "bloomee/medelu/AND PLANTS/LIFFT/HitoHana/タスハナ/ハナメク/Miraflora 8サービスの解約方法と口コミを徹底解説。",
  alternates: { canonical: "/service-guides/" },
};

export default function ServiceGuidesIndexPage() {
  const url = `${SITE_URL}/service-guides/`;
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
              { "@type": "ListItem", position: 2, name: "サービス別ガイド", item: url },
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
            itemListElement: serviceGuides.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: g.title,
              url: `${SITE_URL}/service-guides/${g.slug}/`,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; サービス別ガイド
          </nav>

          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">
              サービス別 解約方法・口コミ完全ガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              8 サービス × 解約・口コミ の 16 ページで、申込み前の最終チェックを完了できます。
              各ページに解約手順・引き止め有無・実利用者の本音レビューを網羅しています。
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              {serviceGuides.length} ガイド一覧
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/service-guides/${g.slug}/`}
                  className="block bg-white border border-[#E8E0D8] rounded-xl p-5 hover:border-[#4A7C59] transition-colors"
                >
                  <p className="text-xs text-[#4A7C59] font-bold mb-1">
                    {g.intent === "kaiyaku" ? "解約" : "口コミ"}
                  </p>
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
