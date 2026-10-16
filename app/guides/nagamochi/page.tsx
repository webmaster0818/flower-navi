"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "切り花は平均で何日くらい持ちますか？",
    a: "適切なお手入れをした場合、一般的な切り花は5〜10日程度持ちます。花の種類によって差があり、カーネーションやアルストロメリアは2週間近く持つこともあります。一方、ガーベラやチューリップは5日程度と短めです。水切りと延命剤の使用によって、平均1.5〜2倍長持ちさせることができます。",
  },
  {
    q: "切り花延命剤は必ず使ったほうがよいですか？",
    a: "使用を強くおすすめします。延命剤には花に必要な糖分（栄養）と殺菌剤が含まれており、水だけの場合と比べて花持ちが大幅に向上します。100円ショップやホームセンターで手軽に購入でき、1回あたり数十円の費用で花の寿命が1.5〜2倍になるため、費用対効果も高い方法です。",
  },
  {
    q: "花瓶の水はどのくらいの頻度で替えるべきですか？",
    a: "延命剤を使っている場合は2〜3日に1回、使っていない場合は毎日替えることが理想です。夏場は水が傷みやすいため、延命剤を使用している場合でも毎日〜2日に1回は替えてください。水替えの際に花瓶の内側をスポンジで洗い、茎のぬめりも洗い流すと効果的です。",
  },
  {
    q: "花がしおれてきたら復活させる方法はありますか？",
    a: "「湯あげ」という方法が効果的です。新聞紙で花全体を包み、茎の先端2〜3cmを沸騰したお湯に10〜20秒間つけます。その後すぐに冷たい水に移し、2時間ほど深水につけておくと、しおれた花が回復することがあります。ただし、すべての花に効果があるわけではなく、完全に枯れた花は回復しません。",
  },
  {
    q: "花のサブスクで届いた花を長持ちさせる方法はありますか？",
    a: "届いたらすぐに開封し、(1)茎を水中で斜めにカットする（水切り）、(2)延命剤を入れた新しい水に生ける、(3)直射日光やエアコンの風が当たらない場所に置く、の3つの手順が基本です。特に夏場は、届いた直後の処理が花持ちを大きく左右するため、できるだけ早く水に入れてください。",
  },
];

/* ─── Main Component ─── */
export default function NagamochiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"切り花を長持ちさせる方法\",\"item\":\"https://ohana-delivery.com/guides/nagamochi/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"切り花を長持ちさせる方法\",\"description\":\"切り花を長持ちさせる方法を解説します。水切り・延命剤・温度管理など、花の寿命を延ばす手順を説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/nagamochi/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"切り花は平均で何日くらい持ちますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"適切なお手入れをした場合、一般的な切り花は5〜10日程度持ちます。花の種類によって差があり、カーネーションやアルストロメリアは2週間近く持つこともあります。一方、ガーベラやチューリップは5日程度と短めです。水切りと延命剤の使用によって、平均1.5〜2倍長持ちさせることができます。\"}},{\"@type\":\"Question\",\"name\":\"切り花延命剤は必ず使ったほうがよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"使用を強くおすすめします。延命剤には花に必要な糖分（栄養）と殺菌剤が含まれており、水だけの場合と比べて花持ちが大幅に向上します。100円ショップやホームセンターで手軽に購入でき、1回あたり数十円の費用で花の寿命が1.5〜2倍になるため、費用対効果も高い方法です。\"}},{\"@type\":\"Question\",\"name\":\"花瓶の水はどのくらいの頻度で替えるべきですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"延命剤を使っている場合は2〜3日に1回、使っていない場合は毎日替えることが理想です。夏場は水が傷みやすいため、延命剤を使用している場合でも毎日〜2日に1回は替えてください。水替えの際に花瓶の内側をスポンジで洗い、茎のぬめりも洗い流すと効果的です。\"}},{\"@type\":\"Question\",\"name\":\"花がしおれてきたら復活させる方法はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"「湯あげ」という方法が効果的です。新聞紙で花全体を包み、茎の先端2〜3cmを沸騰したお湯に10〜20秒間つけます。その後すぐに冷たい水に移し、2時間ほど深水につけておくと、しおれた花が回復することがあります。ただし、すべての花に効果があるわけではなく、完全に枯れた花は回復しません。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクで届いた花を長持ちさせる方法はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届いたらすぐに開封し、(1)茎を水中で斜めにカットする（水切り）、(2)延命剤を入れた新しい水に生ける、(3)直射日光やエアコンの風が当たらない場所に置く、の3つの手順が基本です。特に夏場は、届いた直後の処理が花持ちを大きく左右するため、できるだけ早く水に入れてください。\"}}]}" }} />
        {/* JSONLD_INJECTED_v1 #3 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"切り花を長持ちさせる方法\",\"description\":\"切り花を長持ちさせる方法の手順を解説します。\"}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>切り花を長持ちさせる方法10選｜水切りから温度管理まで【2026年】</title>
      <meta name="description" content="当サイトでは、切り花を長持ちさせる方法10選を解説します。水切り・栄養剤・温度管理・花瓶の清潔さなど、花の寿命を1.5〜2倍に延ばす方法と、避けるべき行為をご紹介します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">切り花を長持ちさせる方法</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">お手入れガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              切り花を長持ちさせる方法10選<br className="hidden md:block" />
              水切りから温度管理まで【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              届いた花をより長く楽しみたい方に向けて、
              当サイトでは水切りから温度管理まで、花の寿命を延ばす10の方法を解説します。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">目次</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#techniques" className="hover:text-[#4A7C59] transition-colors">1. 長持ちさせる10の方法</a></li>
                <li><a href="#ng" className="hover:text-[#4A7C59] transition-colors">2. 避けるべき行為</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">3. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── 10 Techniques ─── */}
        <section id="techniques" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              切り花を長持ちさせる10の方法
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "水切りを行う", text: "水中で茎を斜めにカットする「水切り」は、最も基本的かつ効果的な方法です。水中で切ることで茎の導管に空気が入るのを防ぎ、水の吸い上げが良くなります。切り口を斜めにすると断面の面積が広がり、吸水量が増えます。" },
                { num: "2", title: "切り花延命剤を使う", text: "延命剤には糖分（花の栄養）と殺菌成分が含まれており、花の寿命を1.5〜2倍に延ばす効果があります。100円ショップやホームセンターで手軽に購入でき、費用は1回あたり数十円です。水だけの場合と比べて効果の差が大きいため、使用をおすすめします。" },
                { num: "3", title: "花瓶の水を定期的に替える", text: "水は時間が経つと細菌が繁殖し、茎が腐る原因になります。延命剤を使用している場合は2〜3日に1回、使用していない場合は毎日替えることが理想です。水替えの際は花瓶の内側もスポンジで洗い、清潔に保ってください。" },
                { num: "4", title: "花瓶を清潔に保つ", text: "花瓶の内側にぬめりがある場合は、細菌が大量に繁殖しています。花を入れる前に花瓶を食器用洗剤で十分に洗い、週に1回は漂白剤で消毒すると、細菌の繁殖を防げます。" },
                { num: "5", title: "直射日光を避ける", text: "切り花は直射日光に当たると水分の蒸散が激しくなり、しおれやすくなります。明るい日陰やレースのカーテン越しの光が最適です。窓際に飾る場合は、直射日光が当たらない位置を選んでください。" },
                { num: "6", title: "エアコンの風を避ける", text: "エアコンの温風・冷風が直接当たると、花が急速に乾燥して傷みます。花瓶はエアコンの吹き出し口から離れた場所に置いてください。特に冬場の暖房は乾燥が激しいため、注意が必要です。" },
                { num: "7", title: "涼しい場所に置く", text: "花は高温になるほど早く枯れます。室温は15〜25度が理想です。夏場は特に注意が必要で、夜間だけでもエアコンの効いた涼しい部屋に移すと花持ちが向上します。" },
                { num: "8", title: "茎の余分な葉を取る", text: "水に浸かる部分の葉は必ず取り除いてください。葉が水に浸かると腐敗して細菌が繁殖し、水が汚れる原因になります。花瓶の水面より下の葉は、すべて取り除くことが基本です。" },
                { num: "9", title: "枯れた花はすぐに取り除く", text: "枯れた花からはエチレンガス（老化促進ホルモン）が発生し、周りの花の寿命も縮めてしまいます。しおれ始めた花は早めに取り除き、状態の良い花だけを残してください。" },
                { num: "10", title: "水の量を花に合わせる", text: "バラやひまわりなど茎が太い花は深水（茎の半分以上が浸かる量）、ガーベラやチューリップなど茎が腐りやすい花は浅水（5cm程度）が適しています。花の種類に合わせて水量を調整することで、花持ちが変わります。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NG Actions ─── */}
        <section id="ng" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              避けるべき行為5選
            </h2>
            <div className="space-y-4">
              {[
                { title: "花を包装したままにする", text: "届いた花を開封せずに置いておくと、蒸れて花が傷みます。届いたらすぐに開封し、水切りをして花瓶に生けてください。" },
                { title: "水道水を替えずに使い続ける", text: "水は1日で細菌が大量に繁殖します。延命剤を使わずに水を替えないままにすると、2〜3日で水が濁り始め、茎が腐ります。" },
                { title: "果物の近くに花を飾る", text: "りんごやバナナなどの果物はエチレンガスを放出します。このガスが花の老化を促進するため、果物の近くには花を飾らないでください。" },
                { title: "花びらに水をかける", text: "霧吹きなどで花びらに水をかけると、花びらにシミができたり、カビが発生したりする原因になります。水分は花瓶の水だけで十分です。" },
                { title: "ハサミではなく手でちぎる", text: "茎を手でちぎると導管が潰れ、水を吸い上げにくくなります。必ず清潔なハサミやカッターで斜めにカットしてください。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF5F5] rounded-xl p-5 border border-[#E0B8B8] flex items-start gap-3">
                  <span className="text-[#C4877A] text-lg shrink-0">&#10005;</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              切り花のお手入れに関するよくある質問
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
              基本の3つの手順で花持ちが大幅に向上します
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              切り花を長持ちさせるために最も重要なのは、<strong>(1)水切り、(2)延命剤の使用、(3)こまめな水替え</strong>の3つです。この基本を実践することで、花の寿命は1.5〜2倍に延びます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクで届いた花も、正しいお手入れによって長く楽しめます。品質保証制度があるサービスであれば、届いた時点で傷んでいた場合にも対応を受けられます。お手入れも含めて、花のある暮らしをお楽しみください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                medeluの詳細を見る
              </a>
              <a href="/guides/flower-care" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                お花のお手入れガイドを見る
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
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年4月時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。</p>
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
