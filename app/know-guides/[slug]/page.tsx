import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { findKnowGuide, allKnowSlugs } from "@/data/knowGuides";

const SITE_URL = "https://ohana-delivery.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allKnowSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = findKnowGuide(slug);
  if (!g) return {};
  return {
    title: `${g.title}｜flowerデリ【2026年最新】`,
    description: g.description,
    alternates: { canonical: `/know-guides/${slug}/` },
  };
}

export default async function KnowGuidePage({ params }: Props) {
  const { slug } = await params;
  const g = findKnowGuide(slug);
  if (!g) notFound();
  const url = `${SITE_URL}/know-guides/${slug}/`;

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
              { "@type": "ListItem", position: 2, name: "Know系ナレッジ", item: `${SITE_URL}/know-guides/` },
              { "@type": "ListItem", position: 3, name: g.title, item: url },
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
            headline: g.h1,
            description: g.description,
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
            mainEntity: g.faq.map((f) => ({
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
            <Link href="/know-guides/" className="hover:underline">Know系ナレッジ</Link> &gt;{" "}
            <span>{g.title}</span>
          </nav>
          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 leading-snug">{g.h1}</h1>
            <p className="text-base text-[#666] leading-relaxed">{g.intro}</p>
          </header>

          {/* Sections */}
          <section className="mb-12">
            <div className="space-y-6">
              {g.sections.map((s, i) => (
                <div key={i} className="bg-white border border-[#E8E0D8] rounded-xl p-5">
                  <h2 className="text-lg md:text-xl font-bold text-[#333] mb-3 pb-2 border-b border-[#E8E0D8]">
                    {s.heading}
                  </h2>
                  <p className="text-sm text-[#666] leading-relaxed whitespace-pre-line">{s.body}</p>
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
              {g.faq.map((f, i) => (
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
              {g.relatedPaths.map((r, i) => (
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
