import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import type { Metadata } from "next";
import { dateModifiedFor } from "@/data/lastmod";
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
              { "@type": "ListItem", position: 2, name: "2サービス比較", item: `${SITE_URL}/vs/` },
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
            dateModified: dateModifiedFor(`vs/${slug}`, "2026-06-05T00:00:00+09:00"),
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

      <div className="min-h-screen bg-[#F6F4EF]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt;{" "}
            <Link href="/vs/" className="hover:underline">2サービス比較</Link> &gt;{" "}
            <span>{v.title}</span>
          </nav>

          <PageHero bleed path={`/vs/${v.slug}/`} services={v.slug.split("-vs-")}>
            <p className="text-sm text-[#2F5B43] font-bold mb-2">{v.serviceA} VS {v.serviceB}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">{v.h1}</h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">{v.intro}</p>
          </PageHero>

          {/* Spec table */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              項目別の詳細比較
            </h2>
            <div className="bg-white border border-[#DEDAD2] rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#F6F4EF]">
                  <tr>
                    <th className="px-3 py-2 text-left text-[#1F2420] font-bold">項目</th>
                    <th className="px-3 py-2 text-left text-[#1F2420] font-bold">{v.serviceA}</th>
                    <th className="px-3 py-2 text-left text-[#1F2420] font-bold">{v.serviceB}</th>
                    <th className="px-3 py-2 text-center text-[#1F2420] font-bold">優位なサービス</th>
                  </tr>
                </thead>
                <tbody>
                  {v.spec.map((s, i) => (
                    <tr key={i} className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 font-bold text-[#1F2420]">{s.item}</td>
                      <td className="px-3 py-2 text-[#4A4F49]">{s.a}</td>
                      <td className="px-3 py-2 text-[#4A4F49]">{s.b}</td>
                      <td className="px-3 py-2 text-center text-[#2F5B43] font-bold">
                        {s.winner === "A" ? `← ${v.serviceA}` : s.winner === "B" ? `${v.serviceB} →` : "同等"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* For A */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#1F2420] mb-4 pb-2 border-b border-[#DEDAD2]">
              {v.serviceA} が適している方
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {v.forA.map((f, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{f.type}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{f.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* For B */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-[#1F2420] mb-4 pb-2 border-b border-[#DEDAD2]">
              {v.serviceB} が適している方
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {v.forB.map((f, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{f.type}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{f.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real cases */}
          {v.realCases.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-2 pb-3 border-b-2 border-[#2F5B43]">
                {v.realCasesTitle}
              </h2>
              <p className="text-xs text-[#6B6F6A] mb-6">※公式情報やSNS上の口コミをもとに、編集部が傾向を整理した代表的なケースです。特定の個人の体験談ではありません。</p>
              <div className="space-y-3">
                {v.realCases.map((c, i) => (
                  <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                    <p className="text-xs text-[#6B6F6A] mb-1">{c.author}</p>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2"><strong>状況：</strong> {c.situation}</p>
                    <p className="text-sm text-[#2F5B43] font-bold mb-1">選んだサービス：{c.chose}</p>
                    <p className="text-sm text-[#1F2420] leading-relaxed">{c.outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              よくある質問
            </h2>
            <div className="space-y-3">
              {v.faq.map((f, i) => (
                <details key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <summary className="font-bold text-[#1F2420] cursor-pointer flex items-start gap-3">
                    <span className="bg-[#2F5B43] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{f.q}</span>
                  </summary>
                  <div className="mt-3 pl-9 text-sm text-[#4A4F49] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-12 bg-white border border-[#DEDAD2] rounded-md p-5">
            <h2 className="text-base font-bold text-[#1F2420] mb-4">関連するページ</h2>
            <ul className="space-y-2">
              {v.relatedPaths.map((r, i) => (
                <li key={i}>
                  <Link href={r.href} className="text-sm text-[#2F5B43] hover:underline">
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
