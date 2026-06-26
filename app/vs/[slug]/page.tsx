import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { findVsComparison, allVsSlugs } from "@/data/vsComparisons";

const SITE_URL = "https://ohana-delivery.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allVsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = findVsComparison(slug);
  if (!v) return {};
  return {
    title: `${v.title}｜flowerデリ【2026年最新】`,
    description: v.description,
    alternates: { canonical: `/vs/${slug}/` },
  };
}

export default async function VsPage({ params }: Props) {
  const { slug } = await params;
  const v = findVsComparison(slug);
  if (!v) notFound();
  const url = `${SITE_URL}/vs/${slug}/`;

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
              { "@type": "ListItem", position: 2, name: "サービスVS比較", item: `${SITE_URL}/vs/` },
              { "@type": "ListItem", position: 3, name: v.title, item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: v.h1,
            description: v.description,
            datePublished: "2026-06-05T00:00:00+09:00",
            dateModified: "2026-06-05T00:00:00+09:00",
            author: { "@type": "Organization", name: "flowerデリ" },
            publisher: { "@type": "Organization", name: "flowerデリ", url: SITE_URL },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: v.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-[#FAF7F2]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#999] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt;{" "}
            <Link href="/vs/" className="hover:underline">サービスVS比較</Link> &gt;{" "}
            <span>{v.title}</span>
          </nav>

          <header className="mb-10">
            <p className="text-sm text-[#4A7C59] font-bold mb-2">{v.serviceA} VS {v.serviceB}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">{v.h1}</h1>
            <p className="text-base text-[#666] leading-relaxed">{v.intro}</p>
          </header>

          {/* Spec table */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              項目別 詳細比較
            </h2>
            <div className="bg-white border border-[#E8E0D8] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#F5F0E8]">
                  <tr>
                    <th className="px-3 py-2 text-left text-[#333] font-bold">項目</th>
                    <th className="px-3 py-2 text-left text-[#333] font-bold">{v.serviceA}</th>
                    <th className="px-3 py-2 text-left text-[#333] font-bold">{v.serviceB}</th>
                    <th className="px-3 py-2 text-center text-[#333] font-bold">勝者</th>
                  </tr>
                </thead>
                <tbody>
                  {v.spec.map((s, i) => (
                    <tr key={i} className="border-t border-[#E8E0D8]">
                      <td className="px-3 py-2 font-bold text-[#333]">{s.item}</td>
                      <td className="px-3 py-2 text-[#666]">{s.a}</td>
                      <td className="px-3 py-2 text-[#666]">{s.b}</td>
                      <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">
                        {s.winner === "A" ? `← ${v.serviceA}` : s.winner === "B" ? `${v.serviceB} →` : "互角"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* For A */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#333] mb-4 pb-2 border-b border-[#E8E0D8]">
              {v.serviceA} が向く人
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {v.forA.map((f, i) => (
                <div key={i} className="bg-white border border-[#E8E0D8] rounded-xl p-5">
                  <h3 className="font-bold text-[#333] mb-2">{f.type}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{f.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* For B */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-[#333] mb-4 pb-2 border-b border-[#E8E0D8]">
              {v.serviceB} が向く人
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {v.forB.map((f, i) => (
                <div key={i} className="bg-white border border-[#E8E0D8] rounded-xl p-5">
                  <h3 className="font-bold text-[#333] mb-2">{f.type}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{f.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real cases */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#4A7C59]">
              編集部まとめ：想定される選び方の傾向
            </h2>
            <p className="text-xs text-[#999] mb-6">※公式情報やSNS上の口コミをもとに編集部が傾向を整理した代表的なケース像です。特定の個人の体験談ではありません。</p>
            <div className="space-y-3">
              {v.realCases.map((c, i) => (
                <div key={i} className="bg-white border border-[#E8E0D8] rounded-xl p-5">
                  <p className="text-xs text-[#999] mb-1">{c.author}</p>
                  <p className="text-sm text-[#666] leading-relaxed mb-2"><strong>状況:</strong> {c.situation}</p>
                  <p className="text-sm text-[#4A7C59] font-bold mb-1">選んだのは: {c.chose}</p>
                  <p className="text-sm text-[#333] leading-relaxed">{c.outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              よくある質問
            </h2>
            <div className="space-y-3">
              {v.faq.map((f, i) => (
                <details key={i} className="bg-white border border-[#E8E0D8] rounded-xl p-5">
                  <summary className="font-bold text-[#333] cursor-pointer flex items-start gap-3">
                    <span className="bg-[#4A7C59] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{f.q}</span>
                  </summary>
                  <div className="mt-3 pl-9 text-sm text-[#666] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-12 bg-white border border-[#E8E0D8] rounded-xl p-5">
            <h2 className="text-base font-bold text-[#333] mb-4">関連するページ</h2>
            <ul className="space-y-2">
              {v.relatedPaths.map((r, i) => (
                <li key={i}>
                  <Link href={r.href} className="text-sm text-[#4A7C59] hover:underline">
                    → {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
