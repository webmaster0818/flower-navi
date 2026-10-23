import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Header from "@/app/components/Header";
import { useCases } from "@/data/useCases";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "利用シーン別の花のサブスクおすすめ｜ギフト・お祝い活用ガイド｜flowerデリ",
  description: "誕生日・結婚記念日・新築祝い・退院祝い・開店祝い・出産祝いに適した花のサブスクを解説します。シーン別の選び方と、避けるべき花をまとめています。",
  alternates: { canonical: "/use-cases/" },
};

export default function UseCasesIndexPage() {
  const url = `${SITE_URL}/use-cases/`;
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
              { "@type": "ListItem", position: 2, name: "利用シーン別", item: url },
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
            itemListElement: useCases.map((u, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: u.title,
              url: `${SITE_URL}/use-cases/${u.slug}/`,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-[#F6F4EF]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; 利用シーン別
          </nav>

          <PageHero bleed path={"/use-cases/"}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">
              利用シーン別 花のサブスクおすすめガイド
            </h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">
              花のサブスクは『誕生日』『結婚記念日』『新築祝い』『退院祝い』『開店祝い』『出産祝い』など、
              さまざまな利用シーンで活用できます。当サイトでは{useCases.length}のシーン別に、適したサービス・料金の確認方法・避けるべき花を解説しています。
              贈る相手の状況に応じた選び方をご確認いただけます。
            </p>
          </PageHero>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              {useCases.length}のシーン別ガイド
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((u) => (
                <Link
                  key={u.slug}
                  href={`/use-cases/${u.slug}/`}
                  className="block bg-white border border-[#DEDAD2] rounded-md p-5 hover:border-[#2F5B43] transition-colors"
                >
                  <h3 className="font-bold text-[#1F2420] mb-2 leading-snug">{u.title}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed line-clamp-3">{u.description}</p>
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
