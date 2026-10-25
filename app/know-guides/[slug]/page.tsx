import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import type { Metadata } from "next";
import { dateModifiedFor } from "@/data/lastmod";
import Header from "@/app/components/Header";
import { knowGuides, findKnowGuide, allKnowSlugs } from "@/data/knowGuides";

const SITE_URL = "https://ohana-delivery.com";
/** 本文中の **強調** を <strong> に変換する（素の記号が画面に出るのを防ぐ） */
function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4 ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}


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
              { "@type": "ListItem", position: 2, name: "基礎知識", item: `${SITE_URL}/know-guides/` },
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
            dateModified: dateModifiedFor(`know-guides/${slug}`, "2026-06-05T00:00:00+09:00"),
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

      <div className="min-h-screen bg-[#F6F4EF]">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-xs text-[#6B6F6A] mb-4">
            <Link href="/" className="hover:underline">トップ</Link> &gt;{" "}
            <Link href="/know-guides/" className="hover:underline">基礎知識</Link> &gt;{" "}
            <span>{g.title}</span>
          </nav>
          <PageHero bleed path={`/know-guides/${g.slug}/`}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">{g.h1}</h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">{g.intro}</p>
          </PageHero>

          {/* Sections */}
          <section className="mb-12">
            <div className="space-y-6">
              {g.sections.map((s, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h2 className="text-lg md:text-xl font-bold text-[#1F2420] mb-3 pb-2 border-b border-[#DEDAD2]">
                    {s.heading}
                  </h2>
                  <p className="text-sm text-[#4A4F49] leading-relaxed whitespace-pre-line">{renderBold(s.body)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              よくある質問
            </h2>
            <div className="space-y-3">
              {g.faq.map((f, i) => (
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
              {g.relatedPaths.map((r, i) => (
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
            <h2 className="text-base font-bold text-[#1F2420] mb-4">ほかのお花の基礎知識</h2>
            <ul className="space-y-2">
              {knowGuides.filter((x) => x.slug !== g.slug).map((x) => (
                <li key={x.slug}>
                  <Link href={`/know-guides/${x.slug}/`} className="text-sm text-[#2F5B43] hover:underline">
                    → {x.title}
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
