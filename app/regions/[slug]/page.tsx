import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import type { Metadata } from "next";
import { dateModifiedFor } from "@/data/lastmod";
import Header from "@/app/components/Header";
import { regions, findRegion, allRegionSlugs } from "@/data/regions";

const SITE_URL = "https://ohana-delivery.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allRegionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = findRegion(slug);
  if (!r) return {};
  return {
    title: `${r.title}｜flowerデリ【2026年最新】`,
    description: r.description,
    alternates: { canonical: `/regions/${slug}/` },
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const r = findRegion(slug);
  if (!r) notFound();
  const url = `${SITE_URL}/regions/${slug}/`;

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
              { "@type": "ListItem", position: 2, name: "地域別", item: `${SITE_URL}/regions/` },
              { "@type": "ListItem", position: 3, name: r.title, item: url },
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
            headline: r.h1,
            description: r.description,
            datePublished: "2026-06-05T00:00:00+09:00",
            dateModified: dateModifiedFor(`regions/${slug}`, "2026-06-05T00:00:00+09:00"),
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
            mainEntity: r.faq.map((f) => ({
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
            <Link href="/regions/" className="hover:underline">地域別</Link> &gt;{" "}
            <span>{r.title}</span>
          </nav>

          <PageHero bleed path={`/regions/${r.slug}/`}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">{r.h1}</h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">{r.intro}</p>
          </PageHero>

          {/* Recommended */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              {r.title.split("で花のサブスク")[0]}でおすすめの花のサブスク
            </h2>
            <div className="space-y-4">
              {r.recommended.map((rec, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5 flex gap-4 items-start">
                  <span className="bg-[#E3D3C8] text-[#1F2420] w-10 h-10 rounded-md flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1F2420] mb-1">{rec.service}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">{rec.reason}</p>
                    <p className="text-xs text-[#6B6F6A]">参考価格：{rec.priceFrom.toLocaleString()}円〜</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Climate */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              季節別の気候の特徴と花の手入れ
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {r.climate.map((c, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{c.season}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                    <strong>特徴：</strong> {c.characteristics}
                  </p>
                  <p className="text-sm text-[#2F5B43] leading-relaxed">
                    <strong>花の手入れ：</strong> {c.flowerCare}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery notes */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              配送について
            </h2>
            <ul className="bg-white border border-[#DEDAD2] rounded-md p-5 space-y-3">
              {r.deliveryNotes.map((note, i) => (
                <li key={i} className="text-sm text-[#4A4F49] leading-relaxed flex gap-3">
                  <span className="text-[#2F5B43] shrink-0">●</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Local preference */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              地域の花文化と好まれる傾向
            </h2>
            <div className="space-y-3">
              {r.localPreference.map((p, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{p.topic}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{p.detail}</p>
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
              {r.faq.map((f, i) => (
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
              {r.relatedPaths.map((p, i) => (
                <li key={i}>
                  <Link href={p.href} className="text-sm text-[#2F5B43] hover:underline">
                    → {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Siblings */}
          <section className="mb-12 bg-white border border-[#DEDAD2] rounded-md p-5">
            <h2 className="text-base font-bold text-[#1F2420] mb-4">ほかの地域の花のサブスク情報</h2>
            <ul className="space-y-2">
              {regions.filter((x) => x.slug !== r.slug).map((x) => (
                <li key={x.slug}>
                  <Link href={`/regions/${x.slug}/`} className="text-sm text-[#2F5B43] hover:underline">
                    → {x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

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
