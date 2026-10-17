"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";

/* 料金は単一データソース(services.ts・公式確認値)から生成 */
const planRows = (id: string) =>
  SERVICES.find((s) => s.id === id)!.plans.map((p) => ({
    plan: p.name,
    price: p.price,
    shipping: 0,
    total: p.price,
    flowers: p.flowers,
    delivery: p.postDelivery ? "ポスト投函" : "宅配便",
  }));

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "送料無料のサービスは本当に追加費用がかかりませんか？",
    a: "medeluとAND PLANTSは表示価格に送料が含まれています。ただし、medeluは北海道・東北へのLite以上に遠隔地送料140〜240円が加算されます（2026年10月17日公式確認）。hanamekuはライトプランが配送料込みで、追加の送料はかかりません。セルフアレンジプランも配送料込みの表示ですが、北海道・九州で550円、中国・四国で330円、北東北・関西で220円の追加送料がかかります（2026年10月17日に公式サイトで確認）。各サービスの最新の料金体系は、公式サイトにてご確認ください。",
  },
  {
    q: "送料無料のサービスは品質が劣りますか？",
    a: "送料無料であることを理由に品質が劣ることはありません。medeluは市場から直送する仕組みで中間コストを削減しており、AND PLANTSはプロのフローリストがアレンジを担当しています。送料を無料にできる理由は配送ルートの効率化やビジネスモデルの工夫によるもので、花の品質を下げているわけではありません。",
  },
  {
    q: "送料無料と送料別では、年間でどれくらいの差がありますか？",
    a: "例えば、送料385円のbloomeeを隔週（月2回）で利用すると、送料だけで年間9,240円になります。送料無料のmedeluであれば、この金額がかかりません。毎週配送の場合は年間約2万円の差になることもあり、長期間利用するほど送料無料サービスの利点が大きくなります。",
  },
  {
    q: "離島や北海道・沖縄でも送料無料ですか？",
    a: "サービスによって異なります。medeluは送料込みの価格ですが、北海道・東北へのLite・Lite+・Basicは遠隔地送料（Lite 140円・Lite+ 200円・Basic 240円）が加算されます（2026年10月17日公式確認）。一部の離島は配送対象外となる場合があります。AND PLANTSは沖縄県と配送に3日以上かかる離島へは生花を配送していません。北海道と一部の寒冷地では、夏季・冬季にクール便（有料）が必須です（2026年10月17日公式確認）。お住まいの地域が配送対象かどうかは、事前に公式サイトにてご確認ください。",
  },
];

/* ─── Comparison Data ─── */
const comparisonData = [
  {
    name: "medelu",
    nameJa: "メデル",
    plans: planRows("medelu"),
    highlight: "全プランが送料込みです（北海道・東北へのLite以上は遠隔地送料140〜240円が加算（2026年10月17日公式確認））。市場からの直送で鮮度が高く、748円/回から始められる最も安い水準のサービスです。",
    url: "/services/medelu",
    color: "#4A7C59",
  },
  {
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    plans: planRows("andplants"),
    highlight: "送料込み1,980円/回から利用できます。プロのフローリストによるデザイン性の高いアレンジが届きます。",
    url: "/services/and-plants",
    color: "#6B8E5B",
  },
  {
    name: "hanameku",
    nameJa: "ハナメク",
    plans: planRows("hanameku"),
    highlight: "税込・配送料込みの価格です。ライトプランは1,210円/回で、ポスト投函のため受け取りやすいプランです。",
    url: "/services/hanameku",
    color: "#8B6F5C",
  },
];

/* ─── Main Component ─── */
export default function SouryouMuryouPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"送料無料の花のサブスク比較\",\"description\":\"送料無料の花のサブスク比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/medelu/\",\"name\":\"medelu（メデル）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/lifft/\",\"name\":\"LIFFT（リフト）\"},{\"@type\":\"ListItem\",\"position\":3,\"url\":\"https://ohana-delivery.com/services/and-plants/\",\"name\":\"AND PLANTS（アンドプランツ）\"},{\"@type\":\"ListItem\",\"position\":4,\"url\":\"https://ohana-delivery.com/services/hanameku/\",\"name\":\"hanameku（ハナメク）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"送料無料の花のサブスク比較\",\"item\":\"https://ohana-delivery.com/compare/souryou-muryou/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"送料無料の花のサブスク比較\",\"description\":\"送料無料の花のサブスクの料金・評判・選び方を比較して解説しています。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/souryou-muryou/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"送料無料のサービスは本当に追加費用がかかりませんか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"medeluとAND PLANTSは表示価格に送料が含まれています。ただし、medeluは北海道・東北へのLite以上に遠隔地送料140〜240円が加算されます（2026年10月17日公式確認）。hanamekuはライトプランが配送料込みで、追加の送料はかかりません。セルフアレンジプランも配送料込みの表示ですが、北海道・九州で550円、中国・四国で330円、北東北・関西で220円の追加送料がかかります（2026年10月17日に公式サイトで確認）。各サービスの最新の料金体系は、公式サイトにてご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"送料無料のサービスは品質が劣りますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"送料無料であることを理由に品質が劣ることはありません。medeluは市場から直送する仕組みで中間コストを削減しており、AND PLANTSはプロのフローリストがアレンジを担当しています。送料を無料にできる理由は配送ルートの効率化やビジネスモデルの工夫によるもので、花の品質を下げているわけではありません。\"}},{\"@type\":\"Question\",\"name\":\"送料無料と送料別では、年間でどれくらいの差がありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"例えば、送料385円のbloomeeを隔週（月2回）で利用すると、送料だけで年間9,240円になります。送料無料のmedeluであれば、この金額がかかりません。毎週配送の場合は年間約2万円の差になることもあり、長期間利用するほど送料無料サービスの利点が大きくなります。\"}},{\"@type\":\"Question\",\"name\":\"離島や北海道・沖縄でも送料無料ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サービスによって異なります。medeluは送料込みの価格ですが、北海道・東北へのLite・Lite+・Basicは遠隔地送料（Lite 140円・Lite+ 200円・Basic 240円）が加算されます（2026年10月17日公式確認）。一部の離島は配送対象外となる場合があります。AND PLANTSは沖縄県と配送に3日以上かかる離島へは生花を配送していません。北海道と一部の寒冷地では、夏季・冬季にクール便（有料）が必須です（2026年10月17日公式確認）。お住まいの地域が配送対象かどうかは、事前に公式サイトにてご確認ください。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>送料無料のお花の定期便3選｜総額で比較【2026年】｜flowerデリ</title>
      <meta name="description" content="送料無料の花のサブスク・お花の定期便を比較しています。medelu、AND PLANTS、hanamekuの送料込みの総額を一覧表で比較し、総額が最も安いサービスをご紹介します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">比較</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">送料無料のお花の定期便</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">比較ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              送料無料のお花の定期便3選<br className="hidden md:block" />
              総額で比較【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクは送料によって、年間で1万円以上の差が生じる場合があります。
              当サイトでは、送料無料で利用できるサービスを総額で比較しています。
            </p>
          </div>
        </section>

        {/* ─── Why Shipping Matters ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料が重要な理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              花のサブスクを選ぶ際は花代に注目しがちですが、<strong>送料を含めた総額</strong>で比較することが重要です。送料は1回あたり300〜500円が相場で、隔週配送の場合は月600〜1,000円、年間では7,200〜12,000円の差になります。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
              <h3 className="text-sm font-bold text-[#333] mb-3">年間送料シミュレーション（隔週配送の場合）</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#C8D8CB]">
                  <span className="text-[#666]">送料385円のサービス（bloomee等）</span>
                  <span className="font-bold text-[#C4877A]">年間 9,240円</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#C8D8CB]">
                  <span className="text-[#666]">送料330円のサービス（タスハナ等）</span>
                  <span className="font-bold text-[#C4877A]">年間 7,920円</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#666]">送料無料のサービス（medelu等）</span>
                  <span className="font-bold text-[#4A7C59]">年間 0円</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Detail ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料サービス3選の詳細比較
            </h2>

            <div className="space-y-6">
              {comparisonData.map((service, idx) => (
                <div key={idx} className={`bg-white rounded-xl overflow-hidden ${idx === 0 ? "border-2 border-[#4A7C59]" : "border border-[#E5E5E5]"}`}>
                  {idx === 0 && (
                    <div className="bg-[#4A7C59] text-white text-xs text-center py-1.5 font-bold">
                      送料無料のサービスで最安・おすすめ第1位
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#333] mb-2">{service.name}（{service.nameJa}）</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">{service.highlight}</p>

                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#F8F8F8]">
                            <th className="text-left px-3 py-2 text-xs text-[#999]">プラン</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">花代</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">送料</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">総額/回</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">本数</th>
                          </tr>
                        </thead>
                        <tbody>
                          {service.plans.map((plan, pi) => (
                            <tr key={pi} className="border-t border-[#E5E5E5]">
                              <td className="px-3 py-2 text-[#333] font-medium">{plan.plan}</td>
                              <td className="px-3 py-2 text-center text-[#666]">{plan.price.toLocaleString()}円</td>
                              <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">無料</td>
                              <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">{plan.total.toLocaleString()}円</td>
                              <td className="px-3 py-2 text-center text-[#666]">{plan.flowers}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <a href={service.url} className="inline-block text-sm text-[#4A7C59] font-medium hover:underline">
                      {service.name}の詳細レビューを見る →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] mt-3">
              ※ 価格はすべて税込です。2026年4月時点の情報です。ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Total Cost Table ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料込みの総額比較表（送料有料のサービスとの比較）
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">サービス</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">花代</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">送料</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">総額/回</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">年間送料</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#E8F0EB]">
                    <td className="px-3 py-2 font-bold text-[#4A7C59]">medelu Mini</td>
                    <td className="px-3 py-2 text-center">748円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">無料</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">748円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">0円</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-3 py-2 text-[#333]">タスハナ</td>
                    <td className="px-3 py-2 text-center">660円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">330円</td>
                    <td className="px-3 py-2 text-center">990円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">7,920円</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-3 py-2 text-[#333]">bloomee お試し</td>
                    <td className="px-3 py-2 text-center">980円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">385円</td>
                    <td className="px-3 py-2 text-center">1,365円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">9,240円</td>
                  </tr>
                  <tr className="bg-[#E8F0EB]">
                    <td className="px-3 py-2 font-bold text-[#4A7C59]">AND PLANTS</td>
                    <td className="px-3 py-2 text-center">1,980円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">無料</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">1,980円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">0円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] mt-3">※ 年間送料は、隔週（月2回・年24回）配送の場合で計算しています。</p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料の花のサブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
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

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              送料無料のサービスではmedeluが最安です
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              送料無料のお花の定期便3サービスを比較した結果、<strong>総額が最も安いのはmedelu Miniコース（748円/回）</strong>です。回数の条件がなく、ポスト投函で手軽に受け取れるため、初めての方にもおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ボリュームとデザイン性を重視する場合は<strong>AND PLANTS（1,980円/回）</strong>、本数を重視する場合は<strong>hanamekuのセルフアレンジプラン（1,958円/回）</strong>をおすすめします。なお、hanamekuのセルフアレンジプランは、北海道・北東北・関西・中国・四国・九州へのお届けでは220〜550円の追加送料がかかります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                medeluの詳細を見る
              </a>
              <a href="/services/and-plants" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                AND PLANTSの詳細を見る
              </a>
            </div>
            <a href="/compare/cheap" className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline">
              安い花のサブスクの総合比較を見る
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#333] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-flwdeli-footer.png" alt="flowerデリ" className="h-14 w-auto opacity-90" />
              <p className="text-xs text-gray-400">花のサブスクを比較し、ご自身に合ったサービス選びを支援します。</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年4月時点のものです。最新の料金・サービス内容は各公式サイトでご確認ください。</p>
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
