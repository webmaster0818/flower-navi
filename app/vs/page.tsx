import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Header from "@/app/components/Header";
import { vsComparisons } from "@/data/vsComparisons";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "花のサブスク 2サービス比較ガイド｜サービス同士の違い｜flowerデリ",
  description: "AND PLANTSとLIFFT、medeluとAND PLANTSなど、主要な花のサブスクを2サービスずつ比較しています。料金・本数・配送・問い合わせ窓口の各項目で違いを解説します。",
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
              { "@type": "ListItem", position: 2, name: "2サービス比較", item: url },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-[#F6F4EF]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; 2サービス比較
          </nav>
          <PageHero bleed path={"/vs/"}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">
              花のサブスク 2サービス比較ガイド
            </h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">
              主要な花のサブスクについて、{vsComparisons.length}通りの組み合わせを比較しています。料金・本数・配送・問い合わせ窓口など、公式サイトで確認できる項目で違いを示しています。
            </p>
          </PageHero>
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {vsComparisons.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vs/${v.slug}/`}
                  className="block bg-white border border-[#DEDAD2] rounded-md p-5 hover:border-[#2F5B43] transition-colors"
                >
                  <p className="text-xs text-[#2F5B43] font-bold mb-1">{v.serviceA} VS {v.serviceB}</p>
                  <h3 className="font-bold text-[#1F2420] mb-2 leading-snug">{v.title}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed line-clamp-3">{v.description}</p>
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
