import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { serviceGuides } from "@/data/serviceGuides";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "サービス別の解約方法・口コミガイド｜flowerデリ",
  description: "bloomee・medelu・AND PLANTS・LIFFT・HitoHana・タスハナ・ハナメク・日本総合園芸の8サービスの解約方法を解説します。口コミ・評判は、各サービスの詳細ページに出典を明記してまとめています。",
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
              サービス別 解約方法・口コミガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              サービスごとの解約方法と口コミの傾向をまとめています。申し込み前の最終確認にご活用ください。
              各サービスの口コミ・評判は、料金や解約条件とあわせてサービス詳細ページにまとめています。
            </p>
          </header>

          <section className="mb-10 bg-white border border-[#E8E0D8] rounded-xl p-5">
            <h2 className="text-base font-bold text-[#333] mb-3">口コミ・評判（出典を明記）はサービス詳細ページに掲載しています</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li><Link href="/services/bloomee/" className="text-[#4A7C59] underline">ブルーミー（bloomee）の口コミ・評判</Link></li>
              <li><Link href="/services/medelu/" className="text-[#4A7C59] underline">メデル（medelu）の口コミ・評判</Link></li>
              <li><Link href="/services/and-plants/" className="text-[#4A7C59] underline">アンドプランツ（AND PLANTS）の口コミ・評判</Link></li>
              <li><Link href="/services/hanameku/" className="text-[#4A7C59] underline">ハナメク（hanameku）の口コミ・評判</Link></li>
              <li><Link href="/services/hitohana/" className="text-[#4A7C59] underline">ヒトハナ（hitohana）の口コミ・評判</Link></li>
              <li><Link href="/services/lifft/" className="text-[#4A7C59] underline">LIFFT（リフト）の口コミ・評判</Link></li>
              <li><Link href="/services/tasuhana/" className="text-[#4A7C59] underline">タスハナ（+hana）の口コミ・評判</Link></li>
              <li><Link href="/services/nihon-sogo-engei/" className="text-[#4A7C59] underline">花の定期便（日本総合園芸）の口コミ・評判</Link></li>
            </ul>
          </section>

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
