"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomeeとHitoHana、初心者にはどちらがおすすめですか？",
    a: "手軽さを重視する場合は、bloomeeをおすすめします。ポスト投函で受け取ることができ、980円から始められます。一方、花の色やボリュームを重視する方にはHitoHanaが適しています。HitoHanaは色を選べるため、インテリアに合わせた花を受け取ることができます。",
  },
  {
    q: "bloomeeとHitoHanaには、最低利用回数の条件がありますか？",
    a: "bloomeeは最低4回の受け取りが必要で、4回未満で解約する場合は残りの回数分の料金が発生します。HitoHanaには回数の条件がなく、いつでも解約できます。試験的に始めたい方には、HitoHanaのほうが負担の少ない選択肢です。",
  },
  {
    q: "両方同時に利用することはできますか？",
    a: "はい、併用できます。bloomeeの手頃なプランで日常の花を受け取りつつ、HitoHanaの上位プランを月1回利用して特別な花を楽しむ方法もあります。ただし費用が増えるため、まずはどちらか一方を試してから検討することをおすすめします。",
  },
  {
    q: "品質保証制度はどちらにもありますか？",
    a: "はい、どちらのサービスにも品質保証制度があります。bloomeeの定期便は、到着から2週間以内に連絡すれば返金または交換の対象です（公式・特定商取引法に基づく表記、2026年10月15日確認）。HitoHanaの保証条件は、お申し込み前に公式サイトにてご確認ください。",
  },
];

/* ─── Comparison Items ─── */
const comparisonItems = [
  { item: "最安プラン", bloomee: "980円/回（お試しプラン）", hitohana: "1,320円/回（Sサイズ）", winner: "bloomee" },
  { item: "送料", bloomee: "385円〜", hitohana: "無料", winner: "hitohana" },
  { item: "総額（最安）", bloomee: "1,365円/回", hitohana: "1,320円/回", winner: "hitohana" },
  { item: "花の本数", bloomee: "4本以上（お試し）／8本以上（ベーシック）", hitohana: "4本〜（サイズによる）", winner: "hitohana" },
  { item: "花の色選択", bloomee: "不可（おまかせ）", hitohana: "可能（6色＋おまかせ）", winner: "hitohana" },
  { item: "配送方法", bloomee: "ポスト投函 / 宅配便", hitohana: "宅配便のみ", winner: "bloomee" },
  { item: "回数の条件", bloomee: "4回", hitohana: "なし", winner: "hitohana" },
  { item: "配送頻度", bloomee: "毎週 / 隔週", hitohana: "毎週 / 隔週 / 月1回", winner: "hitohana" },
];

/* ─── Main Component ─── */
export default function BloomeeVsHitohanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"bloomee vs HitoHana 比較\",\"description\":\"bloomee vs HitoHana 比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/bloomee/\",\"name\":\"bloomee（ブルーミー）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/hitohana/\",\"name\":\"HitoHana（ヒトハナ）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"bloomee vs HitoHana 比較\",\"item\":\"https://ohana-delivery.com/compare/bloomee-vs-hitohana/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"bloomee vs HitoHana 比較\",\"description\":\"bloomeeとHitoHanaの料金・評判・選び方を比較して解説しています。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/bloomee-vs-hitohana/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"bloomeeとHitoHana、初心者にはどちらがおすすめですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"手軽さを重視する場合は、bloomeeをおすすめします。ポスト投函で受け取ることができ、980円から始められます。一方、花の色やボリュームを重視する方にはHitoHanaが適しています。HitoHanaは色を選べるため、インテリアに合わせた花を受け取ることができます。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeとHitoHanaには、最低利用回数の条件がありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeは最低4回の受け取りが必要で、4回未満で解約する場合は残りの回数分の料金が発生します。HitoHanaには回数の条件がなく、いつでも解約できます。試験的に始めたい方には、HitoHanaのほうが負担の少ない選択肢です。\"}},{\"@type\":\"Question\",\"name\":\"両方同時に利用することはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、併用できます。bloomeeの手頃なプランで日常の花を受け取りつつ、HitoHanaの上位プランを月1回利用して特別な花を楽しむ方法もあります。ただし費用が増えるため、まずはどちらか一方を試してから検討することをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"品質保証制度はどちらにもありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、どちらのサービスにも品質保証制度があります。bloomeeの定期便は、到着から2週間以内に連絡すれば返金または交換の対象です（公式・特定商取引法に基づく表記、2026年10月15日確認）。HitoHanaの保証条件は、お申し込み前に公式サイトにてご確認ください。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>bloomee vs HitoHana 比較【2026年】目的別のおすすめを解説｜flowerデリ</title>
      <meta name="description" content="bloomee（ブルーミー）とHitoHana（ひとはな）を8項目で比較しています。料金・送料・花の本数・色の選択・回数の条件などの違いと、目的別のおすすめを解説します。" />

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
                <li><span className="text-[#333] font-medium">bloomee vs HitoHana</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">サービス比較</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              bloomee vs HitoHana 比較<br className="hidden md:block" />
              目的別のおすすめ【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、花のサブスク「bloomee」と「HitoHana」を8つの項目で比較しています。
              目的に応じてどちらのサービスが適しているかを解説します。
            </p>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              8項目の比較表
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-1/4">比較項目</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-5/16">bloomee</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-5/16">HitoHana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5]">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className={`px-3 py-3 text-center ${row.winner === "bloomee" ? "bg-[#E8F0EB] font-bold text-[#4A7C59]" : "text-[#666]"}`}>
                        {row.bloomee}
                      </td>
                      <td className={`px-3 py-3 text-center ${row.winner === "hitohana" ? "bg-[#E8F0EB] font-bold text-[#4A7C59]" : "text-[#666]"}`}>
                        {row.hitohana}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] mt-3">※ 価格はすべて税込です。2026年4月時点の情報です。</p>
          </div>
        </section>

        {/* ─── bloomee Strengths ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeの特長
            </h2>
            <div className="space-y-4">
              {[
                { title: "ポスト投函により不在時も受け取れます", text: "お試しプラン・グリーンプランはポスト投函に対応しています。日中に不在が多い方でも、帰宅後にポストから受け取ることができます。宅配便の時間指定が難しい方にとって大きな利点です。" },
                { title: "口コミ・レビューが多く、情報を集めやすいサービスです", text: "公式サイトでは「お花のお届け実績3,000万本以上（自社調べ）」と表記されています。口コミサイトやレビュー記事が多いため、お申し込み前に肯定的な意見と否定的な意見の両方を確認しやすい点も利点です。" },
                { title: "花代980円から始められます", text: "お試しプランは花代980円で、始めやすい価格に設定されています。花のある暮らしをまず体験したい初心者の方に適しています。" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-sm font-bold text-[#333] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HitoHana Strengths ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaの特長
            </h2>
            <div className="space-y-4">
              {[
                { title: "花の色を6色＋おまかせから選べます", text: "6色＋おまかせから、毎回好みの色を指定できます（2026年10月14日公式確認）。部屋のインテリアや気分に合わせて選べる点は、HitoHanaの特長です。" },
                { title: "送料無料のため総額が明確です", text: "すべてのプランが送料無料です。表示価格がそのまま支払総額になるため、料金体系がわかりやすく、追加の費用が発生しません。" },
                { title: "回数の条件がなく、いつでも解約できます", text: "最低利用回数の条件がないため、1回試して合わない場合はすぐに解約できます。初めて利用する方も、金銭的な負担を抑えて始められます。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
                  <h3 className="text-sm font-bold text-[#333] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommendation ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              目的別のおすすめ
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomeeをおすすめする方</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>ポスト投函で気軽に受け取りたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>費用を抑えて花のサブスクを始めたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>花のセレクトはプロにおまかせしたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>知名度の高いサービスを利用したい</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">HitoHanaをおすすめする方</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>花の色を自分で選びたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>送料を気にせず利用したい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>回数の条件がないサービスで試したい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>ボリュームのある花を楽しみたい</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs HitoHanaに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#E8F0EB] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#333] pr-4">Q. {item.q}</span>
                    <svg className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white">
                      <p className="text-sm text-[#666] leading-relaxed">A. {item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：総合的にはHitoHanaをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              8項目で比較した結果、総合的には<strong>HitoHana</strong>が優位です。送料無料・回数の条件なし・色の選択が可能など、利用者にとっての利点が多いためです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ただし、ポスト投函で手軽に受け取りたい方や、まずは少ない予算で花のサブスクを体験したい方には<strong>bloomee</strong>が適しています。目的や生活スタイルに合わせてお選びください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/hitohana" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                HitoHanaの詳細を見る
              </a>
              <a href="/services/bloomee" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                bloomeeの詳細を見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline">
              トップページに戻る
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
