import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { useCases } from "@/data/useCases";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "利用シーン別の花のサブスクおすすめ｜ギフト・お祝い活用ガイド｜flowerデリ",
  description: "誕生日・結婚記念日・新築祝い・退院祝い・開店祝い・出産祝いに最適な花のサブスクを徹底解説。シーン別の選び方とタブー花を網羅。",
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

      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; 利用シーン別
          </nav>

          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">
              利用シーン別 花のサブスクおすすめガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              花のサブスクは『誕生日』『結婚記念日』『新築祝い』『退院祝い』『開店祝い』『出産祝い』など、
              さまざまな利用シーンで活躍します。本ガイドでは{useCases.length}のシーン別に、最適なサブスクサービス・予算相場・タブー花までを徹底解説。
              贈る相手の状況に応じた選び方を学べます。
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              {useCases.length}のシーン別ガイド
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((u) => (
                <Link
                  key={u.slug}
                  href={`/use-cases/${u.slug}/`}
                  className="block bg-white border border-[#E8E0D8] rounded-xl p-5 hover:border-[#4A7C59] transition-colors"
                >
                  <h3 className="font-bold text-[#333] mb-2 leading-snug">{u.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{u.description}</p>
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
