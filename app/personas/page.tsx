import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { personas } from "@/data/personas";

const SITE_URL = "https://ohana-delivery.com";

export const metadata: Metadata = {
  title: "ペルソナ別の花のサブスクおすすめ｜あなたに合う選び方｜flowerデリ",
  description: "一人暮らし・夫婦・ファミリー・シニア・学生・在宅ワーカーなど、ライフスタイル別の最適な花のサブスクを徹底解説。8つのペルソナ別ガイド。",
  alternates: { canonical: "/personas/" },
};

export default function PersonasIndexPage() {
  const url = `${SITE_URL}/personas/`;
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
              { "@type": "ListItem", position: 2, name: "ペルソナ別おすすめ", item: url },
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
            itemListElement: personas.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `${SITE_URL}/personas/${p.slug}/`,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt; ペルソナ別おすすめ
          </nav>

          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">
              ペルソナ別 花のサブスクおすすめガイド
            </h1>
            <p className="text-base text-[#666] leading-relaxed">
              花のサブスクは『一人暮らし』『夫婦』『ファミリー』『シニア』『学生』『オフィスワーカー』『在宅フリーランス』など、ライフスタイル別に最適なサービスが異なります。
              本ガイドでは、それぞれの暮らし方に合わせた選び方とおすすめサービスを{personas.length}ペルソナ分掲載。
              あなたに最も近いペルソナをチェックして、後悔のないサブスク選びをしましょう。
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              {personas.length}つのペルソナ別ガイド
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {personas.map((p) => (
                <Link
                  key={p.slug}
                  href={`/personas/${p.slug}/`}
                  className="block bg-white border border-[#E8E0D8] rounded-xl p-5 hover:border-[#4A7C59] transition-colors"
                >
                  <h3 className="font-bold text-[#333] mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{p.description}</p>
                  <p className="mt-3 text-xs text-[#4A7C59] font-bold">詳しく見る →</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-white border border-[#E8E0D8] rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#333] mb-4">ペルソナがわからない方へ</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              『自分はどのペルソナに該当するか分からない』という方はトップページの診断ツールをお試しください。
              5つの質問に答えるだけであなたに最適な花のサブスクをご提案します。
            </p>
            <Link href="/#diagnosis" className="inline-block bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors text-sm">
              診断ツールへ
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
