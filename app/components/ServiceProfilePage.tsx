"use client";

// 未提携サービスの「口コミ・評判」受け皿ページ共通レイアウト（2026-10-15）。
// 方針: 公式サイトで確認できた事実（料金・条件）と出典つきの声の傾向だけを載せる。
// 出典のない個人口コミ・星評価・AggregateRating は載せない。

import { useState, type ReactNode } from "react";
import Header from "@/app/components/Header";

type Item = { title: string; text: string };

export type ServiceProfile = {
  slug: string;
  name: string;
  shortName: string;
  officialUrl: string;
  officialLabel: string;
  verifiedAt: string; // 例: "2026年10月15日"
  datePublished: string; // ISO
  dateModified: string; // ISO
  headline: string;
  heroKicker: string;
  h1: [string, string];
  heroLead: string;
  heroStats: { label: string; value: string }[];
  verdict: ReactNode[];
  /** 冒頭の要点ボックスの見出し（ページごとに個別の文言） */
  verdictTitle: string;
  overviewTitle: string;
  overview: string[];
  basicInfo: [string, ReactNode][];
  pricing: {
    title: string;
    intro: string;
    columns: string[];
    rows: string[][];
    notes: ReactNode[];
  };
  reviews: {
    title: string;
    intro: string;
    good?: string[];
    bad?: string[];
    source: ReactNode;
    /** 第三者のレビュー記事の記録（記事名・URL・確認日つきの要約のみ） */
    observations?: { title: string; lead: string; items: { text: string; source: string; url: string; checkedAt: string }[] };
  };
  pros: Item[];
  cons: Item[];
  steps: Item[];
  recommend: { yes: string[]; no: string[] };
  faq: { q: string; a: string }[];
  cancel: { lead: string; steps: Item[]; note: string };
  summaryTitle: string;
  summary: string[];
  related: { href: string; label: string }[];
};

const card = "block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]";
const h2 = "text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]";

export default function ServiceProfilePage({ p }: { p: ServiceProfile }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const url = `https://ohana-delivery.com/services/${p.slug}/`;

  const ld = [
    { "@context": "https://schema.org", "@type": "Service", name: p.name, serviceType: "お花の定期便", provider: { "@type": "Organization", name: p.name }, areaServed: "JP", url },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `${p.name}の解約手順`,
      description: `${p.name}の解約方法を手順ごとにご説明します`,
      step: p.cancel.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://ohana-delivery.com" },
        { "@type": "ListItem", position: 2, name: p.headline, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.headline,
      description: p.heroLead,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
      publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  const toc = [
    ["overview", `${p.shortName}の概要`],
    ["pricing", "料金プラン（公式確認）"],
    ["reviews", "口コミ・評判の傾向"],
    ["pros", "メリット"],
    ["cons", "デメリット・注意点"],
    ["how-to-start", "始め方"],
    ["recommend", "適している方"],
    ["faq", "よくある質問"],
    ["cancellation", "解約手順"],
  ];

  return (
    <>
      {ld.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Breadcrumbs */}
          <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
                <ol className="flex items-center gap-1.5 flex-wrap">
                  <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                  <li aria-hidden="true">/</li>
                  <li><span className="text-[#666]">サービス一覧</span></li>
                  <li aria-hidden="true">/</li>
                  <li><span className="text-[#333] font-medium">{p.name}</span></li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-[#F9E8E8] py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
              <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">{p.heroKicker}</p>
              <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
                {p.h1[0]}<br className="hidden md:block" />
                {p.h1[1]}
              </h1>
              <p className="text-sm md:text-base text-[#666] mb-6 max-w-2xl mx-auto leading-relaxed">{p.heroLead}</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
                {p.heroStats.map((s, i) => (
                  <div key={i} className="bg-white rounded-xl px-5 py-3 shadow-sm">
                    <p className="text-xs text-[#999] mb-1">{s.label}</p>
                    <p className="text-xl font-bold text-[#4A7C59]">{s.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#888]">
                {p.shortName}の公式サイトは{" "}
                <a href={p.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">{p.officialLabel}</a>{" "}
                です（当サイトは比較・情報サイトであり、{p.shortName}とは提携していません）。
              </p>
            </div>
          </section>

          {/* Verdict */}
          <section className="bg-white py-8 border-b border-[#E5E5E5]">
            <div className="max-w-3xl mx-auto px-4">
              <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F6FAF7] p-5 md:p-6">
                <p className="text-xs text-[#4A7C59] font-bold mb-1">最終更新：{p.verifiedAt}（料金・条件は同日に公式サイトで確認）</p>
                <h2 className="text-lg md:text-xl font-bold text-[#333] mb-3">{p.verdictTitle}</h2>
                <ul className="text-sm md:text-base text-[#444] leading-relaxed space-y-2">
                  {p.verdict.map((v, i) => <li key={i}>・{v}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* TOC */}
          <section className="bg-white py-8 border-b border-[#E5E5E5]">
            <div className="max-w-3xl mx-auto px-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
                <p className="text-sm font-bold text-[#333] mb-3">本ページの内容</p>
                <nav>
                  <ol className="text-sm text-[#666] space-y-2">
                    {toc.map(([id, label], i) => (
                      <li key={id}><a href={`#${id}`} className="hover:text-[#4A7C59] transition-colors">{i + 1}. {label}</a></li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.overviewTitle}</h2>
              {p.overview.map((t, i) => (
                <p key={i} className="text-sm md:text-base text-[#666] leading-relaxed mb-6">{t}</p>
              ))}
              <div className="bg-[#F8F8F8] rounded-xl p-5 mt-2">
                <h3 className="text-sm font-bold text-[#333] mb-3">{p.shortName}の基本情報（{p.verifiedAt} 公式確認）</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {p.basicInfo.map(([k, v], i) => (
                    <div key={i} className="contents">
                      <div className="text-[#999]">{k}</div>
                      <div className="text-[#333]">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.pricing.title}</h2>
              <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">{p.pricing.intro}</p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#4A7C59] text-white">
                      {p.pricing.columns.map((c, i) => (
                        <th key={i} className={`px-4 py-3 font-medium ${i === 0 ? "text-left" : "text-center"}`}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-[#666]">
                    {p.pricing.rows.map((r, i) => (
                      <tr key={i} className={`border-b border-[#E5E5E5] ${i % 2 === 1 ? "bg-[#F8F8F8]" : ""}`}>
                        {r.map((c, j) => (
                          <td key={j} className={`px-4 py-3 ${j === 0 ? "font-bold text-[#333]" : j === 1 ? "text-center font-bold text-[#4A7C59]" : "text-center"}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="text-xs md:text-sm text-[#666] space-y-1">
                {p.pricing.notes.map((n, i) => <li key={i}>・{n}</li>)}
              </ul>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.reviews.title}</h2>
              <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">{p.reviews.intro}</p>
              {(p.reviews.good || p.reviews.bad) && (
                <div className="grid md:grid-cols-2 gap-5 mb-4">
                  {p.reviews.good && (
                    <div className="rounded-xl bg-[#F6FAF7] border border-[#DDE8E0] p-5">
                      <h3 className="font-bold text-[#4A7C59] mb-3">良い声の傾向</h3>
                      <ul className="space-y-2 text-sm text-[#555]">{p.reviews.good.map((g, i) => <li key={i}>◎ {g}</li>)}</ul>
                    </div>
                  )}
                  {p.reviews.bad && (
                    <div className="rounded-xl bg-[#FBF7F2] border border-[#F0DCCB] p-5">
                      <h3 className="font-bold text-[#C08552] mb-3">気になる点・注意点</h3>
                      <ul className="space-y-2 text-sm text-[#555]">{p.reviews.bad.map((g, i) => <li key={i}>△ {g}</li>)}</ul>
                    </div>
                  )}
                </div>
              )}
              <p className="text-xs text-[#999]">{p.reviews.source}</p>
              {p.reviews.observations ? (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-[#333] mb-3">{p.reviews.observations.title}</h3>
                  <p className="text-sm md:text-base text-[#666] leading-relaxed mb-3">{p.reviews.observations.lead}</p>
                  <ul className="space-y-3">
                    {p.reviews.observations.items.map((o, i) => (
                      <li key={i} className="rounded-xl border border-[#E5E5E5] bg-white p-4 text-sm md:text-base text-[#555] leading-relaxed">
                        {o.text}
                        <span className="block text-xs text-[#999] mt-1">
                          出典：<a href={o.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">{o.source}</a>（{o.checkedAt}確認）
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>

          {/* Pros */}
          <section id="pros" className="py-12 md:py-16 bg-[#F8F8F8]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.shortName}のメリット</h2>
              <div className="space-y-5">
                {p.pros.map((item, i) => (
                  <div key={i} className="bg-[#E8F0EB] rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cons */}
          <section id="cons" className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.shortName}のデメリット・注意点</h2>
              <div className="space-y-5">
                {p.cons.map((item, i) => (
                  <div key={i} className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                    <div className="flex items-start gap-3">
                      <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to start */}
          <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.shortName}の始め方</h2>
              <div className="space-y-4">
                {p.steps.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                    <div className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">STEP {i + 1}</div>
                    <div>
                      <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recommend */}
          <section id="recommend" className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.shortName}が適している方</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-base font-bold text-[#4A7C59] mb-4">適している方</h3>
                  <ul className="text-sm text-[#666] space-y-3">
                    {p.recommend.yes.map((t, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>{t}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-base font-bold text-[#C08552] mb-4">適していない方</h3>
                  <ul className="text-sm text-[#666] space-y-3">
                    {p.recommend.no.map((t, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>{t}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className={h2}>{p.shortName}に関するよくある質問</h2>
              <div className="space-y-3">
                {p.faq.map((item, i) => (
                  <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#E8F0EB] transition-colors text-left"
                    >
                      <span className="text-sm font-medium text-[#333] pr-4">Q. {item.q}</span>
                      <svg className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 py-4 bg-white border-t border-[#E5E5E5]">
                        <p className="text-sm text-[#666] leading-relaxed">A. {item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cancellation */}
          <section id="cancellation" className="py-12 md:py-16 bg-[#F9F7F3]">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className={h2}>{p.shortName}の解約手順</h2>
              <p className="text-sm text-[#666] mb-6">{p.cancel.lead}</p>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                {p.cancel.steps.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start mb-4">
                    <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">{i + 1}</div>
                    <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                      <h3 className="font-bold text-[#333] mb-1">{s.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#888] mt-4 text-center">{p.cancel.note}</p>
            </div>
          </section>

          {/* Summary */}
          <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">{p.summaryTitle}</h2>
              {p.summary.map((t, i) => (
                <p key={i} className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">{t}</p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <a href={p.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                  {p.shortName}の公式サイトで最新情報を確認する
                </a>
                <a href="/" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                  他のサービスと比較する
                </a>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="bg-[#FBF8F4] py-10">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-5">{p.shortName}に関連する比較・ガイド</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {p.related.map((r) => (
                  <a key={r.href} href={r.href} className={card}>{r.label} →</a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#333] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <img src="/images/logo-flwdeli-footer.png" alt="flowerデリ" className="h-14 w-auto opacity-90" />
                <p className="text-xs text-gray-400">花のサブスクを、公式サイトの情報にもとづいて比較する専門ガイドです。</p>
              </div>
              <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
                <a href="/" className="hover:text-white transition-colors">トップページ</a>
                <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
                <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
                <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
              </nav>
            </div>
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">
                当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。
              </p>
              <p className="text-xs text-gray-500 mt-2">
                料金・条件は、{p.verifiedAt}時点で公式サイトから確認したものです。ご利用前に、公式サイトにて最新の料金・サービス内容をご確認ください。
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
                <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
                <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
                <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
              </div>
              <p className="text-xs text-gray-500 mt-4">&copy; 2026 flowerデリ All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
