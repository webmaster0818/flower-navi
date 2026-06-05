import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { vsComparisons } from "@/data/vsComparisons";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "サービス1on1比較｜花のサブスクVS対決完全ガイド｜flowerデリ",
  description: "AND PLANTS vs LIFFT、medelu vs AND PLANTSなど主要花のサブスク1on1比較。価格・デザイン・サポートの全項目で完全比較。",
  alternates: { canonical: "/vs/" },
};

export default function VsIndexPage() {
  const url = `${SITE_URL}/vs/`;
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
              { "@type": "ListItem", position: 2, name: "サービスVS比較", item: url },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; サービスVS比較
          </nav>
          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">
              サービス1on1比較 完全ガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              主要花のサブスク {vsComparisons.length} の組み合わせを徹底比較。価格・デザイン・サポート・口コミの全項目で勝敗を明確化。
            </p>
          </header>
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {vsComparisons.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vs/${v.slug}/`}
                  className="block bg-white border border-[#E8E0D8] rounded-xl p-5 hover:border-[#4A7C59] transition-colors"
                >
                  <p className="text-xs text-[#4A7C59] font-bold mb-1">{v.serviceA} VS {v.serviceB}</p>
                  <h3 className="font-bold text-[#333] mb-2 leading-snug">{v.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{v.description}</p>
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
