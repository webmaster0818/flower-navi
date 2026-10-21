import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { useCases, findUseCase, allUseCaseSlugs } from "@/data/useCases";

const SITE_URL = "https://ohana-delivery.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const u = findUseCase(slug);
  if (!u) return {};
  return {
    title: `${u.title}｜flowerデリ【2026年最新】`,
    description: u.description,
    alternates: { canonical: `/use-cases/${slug}/` },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const u = findUseCase(slug);
  if (!u) notFound();
  const url = `${SITE_URL}/use-cases/${slug}/`;

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
              { "@type": "ListItem", position: 2, name: "利用シーン別", item: `${SITE_URL}/use-cases/` },
              { "@type": "ListItem", position: 3, name: u.title, item: url },
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
            headline: u.h1,
            description: u.description,
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
            mainEntity: u.faq.map((f) => ({
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
            <Link href="/use-cases/" className="hover:underline">利用シーン別</Link> &gt;{" "}
            <span>{u.title}</span>
          </nav>

          <PageHero bleed path={`/use-cases/${u.slug}/`}>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 leading-snug">{u.h1}</h1>
            <p className="text-base text-[#4A4F49] leading-relaxed">{u.intro}</p>
          </PageHero>

          {/* Scenes */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              シーン別の活用方法
            </h2>
            <div className="space-y-3">
              {u.scenes.map((s, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{s.situation}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{s.how}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              おすすめのサービス
            </h2>
            <div className="space-y-4">
              {u.recommended.map((r, i) => (
                <div key={i} className="bg-white border border-[#DEDAD2] rounded-md p-5 flex gap-4 items-start">
                  <span className="bg-[#E3D3C8] text-[#1F2420] w-10 h-10 rounded-md flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1F2420] mb-1">{r.service}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">{r.reason}</p>
                    <p className="text-xs text-[#6B6F6A]">参考価格：{r.priceFrom.toLocaleString()}円〜</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Selection Tips */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花選びの5つのポイント
            </h2>
            <ol className="space-y-3">
              {u.selectionTips.map((s, i) => (
                <li key={i} className="bg-white border border-[#DEDAD2] rounded-md p-4 flex gap-4 items-start">
                  <span className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1F2420] mb-1">{s.tip}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Taboos */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#B0694F]">
              避けるべき花
            </h2>
            <div className="space-y-3">
              {u.taboos.map((t, i) => (
                <div key={i} className="bg-[#F7F1EC] border border-[#F0CCCC] rounded-md p-4 flex gap-4 items-start">
                  <span className="text-[#B0694F] text-xl shrink-0">✕</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1F2420] mb-1">{t.item}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{t.reason}</p>
                  </div>
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
              {u.faq.map((f, i) => (
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
              {u.relatedPaths.map((r, i) => (
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
            <h2 className="text-base font-bold text-[#1F2420] mb-4">ほかのシーン別ガイド</h2>
            <ul className="space-y-2">
              {useCases.filter((x) => x.slug !== u.slug).map((x) => (
                <li key={x.slug}>
                  <Link href={`/use-cases/${x.slug}/`} className="text-sm text-[#2F5B43] hover:underline">
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
