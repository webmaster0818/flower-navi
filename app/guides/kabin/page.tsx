"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクに合う花瓶のサイズはどれくらいですか？",
    a: "花瓶の高さに決まった基準はないため、届く花の長さに合わせて選んでください。花の長さを公式サイトで案内しているサービスもあり、bloomeeはお試しプランが約18〜25cm、ベーシックプランが約25〜30cmです（2026年10月31日公式確認）。口が小さめの花瓶を選ぶと、少ない本数でもバランスよく飾ることができます。",
  },
  {
    q: "100円ショップの花瓶でも大丈夫ですか？",
    a: "はい、使用できます。花瓶の価格や素材に決まりはないため、届く花の長さに合う高さで、本数に合う口の大きさのものを選んでください。数種類のサイズをそろえておくと、届いた花を分けて飾ることもできます。",
  },
  {
    q: "花瓶のお手入れ方法を教えてください",
    a: "花を替える際に、花瓶の内側を食器用洗剤とスポンジで洗ってください。口の狭い花瓶は、水と少量の漂白剤を入れてしばらく浸け置きすると、ぬめりや細菌を除去できます。花瓶を清潔に保つことが、花を長持ちさせる基本です。",
  },
  {
    q: "花瓶を持っていない場合、何で代用できますか？",
    a: "ジャムの空き瓶、ワインボトル、グラス、マグカップなど、水を入れられる容器であれば代用できます。口の小さい空き瓶は一輪挿しに適しています。ペットボトルの上部をカットし、布や紙を巻くだけでも花瓶として使用できます。",
  },
  {
    q: "花瓶を複数持つメリットはありますか？",
    a: "はい、あります。花を分けて飾ることで、(1)部屋の複数箇所に花を配置できる、(2)少ない本数でもバランスよく見える、(3)花の種類ごとに分けることで長持ちしやすくなる（エチレンガス対策）、という利点があります。サイズの異なる花瓶を3つ程度用意しておくと、届いた花に合わせて飾り分けることができます。",
  },
];

/* ─── Vase Data ─── */
const vaseCategories = [
  {
    title: "ガラス製の花瓶",
    items: [
      { name: "IKEA TIDVATTEN ティドヴァッテン 花瓶（クリアガラス）", price: "299円", size: "14cm", desc: "IKEA公式サイトでは、同じ TIDVATTEN の花瓶を高さ17cm（499円）・30cm（1,299円）・45cm（1,999円）でも販売しています（2026年10月31日公式確認）。" },
    ],
  },
  {
    title: "一輪挿し（花1〜2本を飾る）",
    items: [
      { name: "KINTO SACCO ベース ガラス 01", price: "1,980円", size: "95mm", desc: "ソーダガラス製です。同じシリーズにガラス 02（高さ110mm）・ガラス 03（高さ150mm、いずれも1,980円）と、磁器製の 01・02（2,750円）があります（KINTO公式オンラインショップ・2026年10月25日確認）。" },
      { name: "スガハラ（Sghr）ミニベース：一輪挿し サイコロ", price: "2,420円（税込）", size: "50mm", desc: "ガラス製の一輪挿しで、サイズは50mm角×高さ50mmです。Sghr スガハラ公式通販の表示価格は税込2,420円（税別2,200円）です（2026年10月31日公式確認）。" },
    ],
  },
];

/* ─── Main Component ─── */
export default function KabinGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスクに合う花瓶おすすめ\",\"item\":\"https://ohana-delivery.com/guides/kabin/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクに合う花瓶おすすめ\",\"description\":\"花のサブスクに合うおすすめの花瓶と選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-31T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/kabin/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクに合う花瓶のサイズはどれくらいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花瓶の高さに決まった基準はないため、届く花の長さに合わせて選んでください。花の長さを公式サイトで案内しているサービスもあり、bloomeeはお試しプランが約18〜25cm、ベーシックプランが約25〜30cmです（2026年10月31日公式確認）。口が小さめの花瓶を選ぶと、少ない本数でもバランスよく飾ることができます。\"}},{\"@type\":\"Question\",\"name\":\"100円ショップの花瓶でも大丈夫ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、使用できます。花瓶の価格や素材に決まりはないため、届く花の長さに合う高さで、本数に合う口の大きさのものを選んでください。数種類のサイズをそろえておくと、届いた花を分けて飾ることもできます。\"}},{\"@type\":\"Question\",\"name\":\"花瓶のお手入れ方法を教えてください\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花を替える際に、花瓶の内側を食器用洗剤とスポンジで洗ってください。口の狭い花瓶は、水と少量の漂白剤を入れてしばらく浸け置きすると、ぬめりや細菌を除去できます。花瓶を清潔に保つことが、花を長持ちさせる基本です。\"}},{\"@type\":\"Question\",\"name\":\"花瓶を持っていない場合、何で代用できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ジャムの空き瓶、ワインボトル、グラス、マグカップなど、水を入れられる容器であれば代用できます。口の小さい空き瓶は一輪挿しに適しています。ペットボトルの上部をカットし、布や紙を巻くだけでも花瓶として使用できます。\"}},{\"@type\":\"Question\",\"name\":\"花瓶を複数持つメリットはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、あります。花を分けて飾ることで、(1)部屋の複数箇所に花を配置できる、(2)少ない本数でもバランスよく見える、(3)花の種類ごとに分けることで長持ちしやすくなる（エチレンガス対策）、という利点があります。サイズの異なる花瓶を3つ程度用意しておくと、届いた花に合わせて飾り分けることができます。\"}}]}" }} />
        {/* JSONLD_INJECTED_v1 #3 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"花のサブスクに合う花瓶おすすめ\",\"description\":\"花のサブスクに合う花瓶の選び方を順に解説します\"}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花のサブスクに合う花瓶・一輪挿しの選び方｜価格・高さを公式で確認した3点</title>
      <meta name="description" content="花のサブスクで届く花に合う花瓶・一輪挿しの選び方と、価格・高さを公式サイトで確認できた3点をご紹介します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#4A4F49]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#1F2420] font-medium">花瓶・一輪挿しのおすすめ</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/kabin/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">花瓶ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              花のサブスクに合う花瓶の選び方<br className="hidden md:block" />
              価格・高さを公式で確認した花瓶3点
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-4 max-w-2xl mx-auto leading-relaxed">
              花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。
              当サイトでは、花瓶の選び方と、価格・高さを公式サイトで確認できた花瓶3点をご紹介します。
            </p>
            <p className="text-sm text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              少量の花を一輪挿しで楽しみたい方は、
              <a href="/compare/ichirinzashi/" className="text-[#2F5B43] font-medium underline">一輪挿しに合う花のサブスク比較（748円〜）</a>
              もあわせてご覧ください。
            </p>
          </div>
        </PageHero>

        {/* ─── How to Choose ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花瓶選びの4つのポイント
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "サブスクのプランに合ったサイズを選ぶ", text: "届く花の長さを公式サイトで確認し、その長さに合う高さの花瓶を選びます（例：bloomeeのお試しプランは約18〜25cm、2026年10月31日公式確認）。花瓶が大きすぎると花がまばらに見え、小さすぎると花が収まりません。まずは届く花の本数に合わせたサイズを選ぶことをおすすめします。" },
                { num: "2", title: "口の大きさに注目する", text: "口が小さめの花瓶は、少ない本数でもバランスよく飾ることができます。一方、口が広い花瓶は本数の多い花をまとめて飾るのに向いています。届く本数はプランによって異なるため（例：medelu Miniとhanamekuライトプランは3〜4本、2026年10月31日公式確認）、本数に合う口径の花瓶を選んでください。" },
                { num: "3", title: "インテリアとの調和を考える", text: "ナチュラルな部屋にはガラスや陶器、モダンな部屋には金属やマットな質感の花瓶、和風の部屋には焼き物や竹製の花瓶が合います。部屋のテイストに合った素材・色を選ぶことで、花がインテリアの一部として自然になじみます。" },
                { num: "4", title: "洗いやすさを確認する", text: "口が狭すぎる花瓶は内側を洗いにくく、ぬめりや細菌が発生しやすくなります。定期的に洗うことを考慮し、手が入るサイズか、ボトルブラシで洗えるサイズを選ぶことをおすすめします。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2] flex items-start gap-4">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Ichirinzashi Vase Guide ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              一輪挿し向きの花瓶の選び方
            </h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
              花を1〜2本だけ飾る一輪挿しは、通常の花瓶と選び方の基準が一部異なります。選ぶ際は、次の4点を確認してください。
            </p>
            <div className="space-y-3">
              {[
                { title: "口径2〜3cm程度の狭い口を選ぶ", text: "口が狭いほど、花1本でもまっすぐに立ちます。口が広いと花が倒れて縁にもたれ、バランスが取りにくくなります。" },
                { title: "背の低い一輪挿しも使える", text: "一輪挿しに分けて飾る場合は、花瓶の高さに合わせて1本ずつ茎を切り戻して生けます。" },
                { title: "ガラス製なら水の状態が見える", text: "一輪挿しは水量が少なく雑菌が繁殖しやすいため、水の残量と濁りをひと目で確認できるガラス製が初心者に適しています。水を替える時期を判断しやすくなります。" },
                { title: "複数個そろえて「分けて飾る」", text: "サブスクで届く3〜4本を1本ずつ分けて飾ることもできます。ダイソー公式ネットストアでは一輪挿し（ボトル型・PET製・高さ14cm）を110円（税込）で販売しています（2026年10月31日公式確認）。サイズの異なるものを複数そろえておくと飾り分けがしやすくなります。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                  <h3 className="text-sm font-bold text-[#1F2420] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-6">
              一輪挿しに向く3〜4本の少量プランは、<a href="/compare/ichirinzashi/" className="text-[#2F5B43] underline">一輪挿しに合う花のサブスク比較（748円〜）</a>で送料込みの実価格を比較しています。
            </p>
          </div>
        </section>

        {/* ─── Vase Recommendations ─── */}
        {vaseCategories.map((category, ci) => (
          <section key={ci} className={`py-12 md:py-16 ${ci % 2 === 0 ? "bg-[#F6F4EF]" : "bg-white"}`}>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#1F2420]">{item.name}</h3>
                      <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-2 py-0.5 rounded-md font-medium">{item.price}</span>
                      <span className="text-xs bg-[#F6F4EF] text-[#4A4F49] px-2 py-0.5 rounded-md">高さ {item.size}</span>
                    </div>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花瓶選びに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#EDF1EC] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#1F2420] pr-4">Q. {item.q}</span>
                    <svg className={`w-4 h-4 text-[#6B6F6A] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white border-t border-[#DEDAD2]">
                      <p className="text-sm text-[#4A4F49] leading-relaxed">A. {item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              花瓶を選ぶことで花のある暮らしを楽しめます
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクで届いた花を楽しむには、<strong>花瓶選び</strong>が重要です。まずはダイソーやIKEAの手頃な花瓶から始め、適したサイズや好みを把握したうえで、好みの花瓶に買い替えることをおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              サイズの異なる花瓶を2〜3個用意しておくと、届いた花の量に合わせて使い分けたり、花を分けて複数の場所に飾ったりでき、楽しみ方の幅が広がります。花のサブスクを始める際は、あわせて花瓶もご用意ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors">
                medeluの詳細を見る
              </a>
              <a href="/services/and-plants" className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors">
                AND PLANTSの詳細を見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline">
              トップページに戻る
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1F2420] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-footer-2026.png" alt="flowerデリ" className="h-11 w-auto" />
              <p className="text-xs text-gray-400">花のサブスクの料金・サービス内容を、公式情報にもとづいて比較する専門ガイドです。</p>
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
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年4月時点のものです。ご利用前に、各公式サイトにて最新情報をご確認ください。</p>
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
