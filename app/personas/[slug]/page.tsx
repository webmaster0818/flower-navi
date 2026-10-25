import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import type { Metadata } from "next";
import { dateModifiedFor } from "@/data/lastmod";
import Header from "@/app/components/Header";
import { personas, findPersona, allPersonaSlugs } from "@/data/personas";

const SITE_URL = "https://ohana-delivery.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allPersonaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findPersona(slug);
  if (!p) return {};
  return {
    title: `${p.title}｜flowerデリ【2026年最新】`,
    description: p.description,
    alternates: { canonical: `/personas/${slug}/` },
  };
}

export default async function PersonaPage({ params }: Props) {
  const { slug } = await params;
  const p = findPersona(slug);
  if (!p) notFound();
  const url = `${SITE_URL}/personas/${slug}/`;

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
              { "@type": "ListItem", position: 2, name: "ライフスタイル別のおすすめ", item: `${SITE_URL}/personas/` },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
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
            headline: p.h1,
            description: p.description,
            datePublished: "2026-06-05T00:00:00+09:00",
            dateModified: dateModifiedFor(`personas/${slug}`, "2026-06-05T00:00:00+09:00"),
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
            mainEntity: p.faq.map((f) => ({
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
          {/* Breadcrumb */}
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt;{" "}
            <span>{p.title}</span>
          </nav>

          {/* Hero */}
          <PageHero bleed path={`/personas/${p.slug}/`}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">{p.h1}</h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">{p.intro}</p>
          </PageHero>

          {/* Pain Points */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              よくある悩みと確認すべき点
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {p.painPoints.map((item, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2 flex items-start gap-2">
                    <span className="bg-[#2F5B43] text-white w-7 h-7 rounded-md flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                    <span className="flex-1 leading-snug">{item.title}</span>
                  </h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              おすすめの花のサブスク
            </h2>
            <div className="space-y-4">
              {p.recommended.map((r, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5 flex gap-4 items-start">
                  <span className="bg-[#E3D3C8] text-[#1F2420] w-10 h-10 rounded-md flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1F2420] mb-1">{r.service}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">{r.reason}</p>
                    <p className="text-xs text-[#6B6F6A]">参考価格：{r.priceFrom.toLocaleString()}円〜/回</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              選び方の手順
            </h2>
            <ol className="space-y-3">
              {p.howToChoose.map((s) => (
                <li key={s.step} className="bg-white border border-[#DEDAD2] rounded-md p-4 flex gap-4 items-start">
                  <span className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold shrink-0">
                    {s.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1F2420] mb-1">{s.title}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Real Cases */}
          {p.realCases.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-2 pb-3 border-b-2 border-[#2F5B43]">
                {p.realCasesTitle}
              </h2>
              <p className="text-xs text-[#6B6F6A] mb-6">※公式情報やSNS上の口コミをもとに、編集部が傾向を整理した代表的なケースです。特定の個人の体験談ではありません。</p>
              <div className="grid md:grid-cols-2 gap-4">
                {p.realCases.map((c, i) => (
                  <article key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                    <p className="text-xs text-[#6B6F6A] mb-2">{c.author}</p>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2"><strong>状況：</strong> {c.situation}</p>
                    <p className="text-sm text-[#1F2420] leading-relaxed">{c.outcome}</p>
                  </article>
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
              {p.faq.map((f, i) => (
                <details key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5 group">
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
              {p.relatedPaths.map((r, i) => (
                <li key={i}>
                  <Link href={r.href} className="text-sm text-[#2F5B43] hover:underline">
                    → {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Siblings */}
          <section className="mb-12 bg-white border border-[#DEDAD2] rounded-md p-5">
            <h2 className="text-base font-bold text-[#1F2420] mb-4">ほかのライフスタイル別ガイド</h2>
            <ul className="space-y-2">
              {personas.filter((x) => x.slug !== p.slug).map((x) => (
                <li key={x.slug}>
                  <Link href={`/personas/${x.slug}/`} className="text-sm text-[#2F5B43] hover:underline">
                    → {x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA back to TOP */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block bg-[#2F5B43] text-white font-bold px-8 py-4 rounded-md hover:bg-[#234534] transition-colors">
              全サービスの比較表を確認する
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
