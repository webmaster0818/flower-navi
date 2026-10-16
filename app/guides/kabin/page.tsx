"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクに合う花瓶のサイズはどれくらいですか？",
    a: "花のサブスクの最安プラン（3〜4本）には、高さ10〜15cmの小さめの花瓶や一輪挿しが適しています。中間プラン（5〜8本）では高さ15〜20cm、上位プラン（8本以上）では高さ20〜25cmの花瓶が目安です。口が小さめの花瓶を選ぶと、少ない本数でもバランスよく飾ることができます。",
  },
  {
    q: "100円ショップの花瓶でも大丈夫ですか？",
    a: "はい、100円ショップの花瓶でも十分に使用できます。ダイソーやセリアのガラス製一輪挿しはシンプルなデザインのため、さまざまな花に合わせやすいのが特長です。まずは100円ショップで数種類のサイズをそろえ、花を分けて飾ることをおすすめします。飾ることに慣れた段階で、好みの花瓶に買い替えると楽しみ方が広がります。",
  },
  {
    q: "花瓶のお手入れ方法を教えてください",
    a: "花を替える際に、花瓶の内側を食器用洗剤とスポンジで洗ってください。口の狭い花瓶は、水と少量の漂白剤を入れてしばらく浸け置きすると、ぬめりや細菌を除去できます。週に1回は漂白剤で消毒することが望ましいです。花瓶を清潔に保つことが、花を長持ちさせる基本です。",
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
    title: "ガラス製の花瓶（透明感が特長）",
    items: [
      { name: "IKEA TIDVATTEN", price: "299円〜", size: "14cm", desc: "北欧デザインのシンプルなガラス花瓶です。ミニブーケに適したサイズで、さまざまなインテリアになじみます。" },
      { name: "ホルムガード フローラ", price: "3,300円〜", size: "12cm", desc: "デンマーク王室御用達ブランドの一輪挿しです。丸みを帯びたフォルムが花を引き立てます。" },
      { name: "無印良品 ソーダガラス花瓶", price: "990円〜", size: "15cm", desc: "シンプルで飽きのこないデザインです。3〜5本の花に適したサイズです。" },
      { name: "100円ショップ ガラスシリンダー", price: "110円〜", size: "10〜20cm", desc: "ダイソーやセリアで購入できるシンプルな円柱型です。複数購入して花を分けて飾る用途に適しています。" },
    ],
  },
  {
    title: "陶器製の花瓶（温かみのある質感）",
    items: [
      { name: "KAHLER ハンマースホイ", price: "5,500円〜", size: "12.5cm", desc: "デンマーク・ケーラーの花瓶です。横縞のテクスチャーが特徴で、花を生けていないときもオブジェとして飾れます。" },
      { name: "有田焼 一輪挿し", price: "2,000円〜", size: "10〜15cm", desc: "日本の伝統工芸品らしい繊細な仕上がりです。和モダンのインテリアに合い、一輪の花を引き立てます。" },
      { name: "フランフラン 陶器花瓶", price: "1,500円〜", size: "15〜20cm", desc: "マットな質感と落ち着いたくすみカラーが特長で、さまざまな部屋になじみます。" },
      { name: "波佐見焼 フラワーベース", price: "1,800円〜", size: "12cm", desc: "長崎の波佐見焼はモダンなデザインが多く、北欧インテリアとも合わせやすく、日常使いに適しています。" },
    ],
  },
  {
    title: "金属製の花瓶（モダンな印象）",
    items: [
      { name: "HAY ルミ ベース", price: "4,400円〜", size: "15cm", desc: "デンマーク・HAYのスチール製花瓶です。マットな色合いがモダンなインテリアに合います。" },
      { name: "ZARA HOME メタル花瓶", price: "2,990円〜", size: "18cm", desc: "ゴールドやシルバーのメタリックカラーで、上質な印象を与えます。シンプルなフォルムが花を引き立てます。" },
      { name: "能作 真鍮一輪挿し", price: "3,850円〜", size: "10cm", desc: "富山の伝統的な鋳物メーカーによる真鍮の一輪挿しです。使い込むことで生じる経年変化も楽しめます。" },
    ],
  },
  {
    title: "一輪挿し（花1〜2本を飾る）",
    items: [
      { name: "KINTO SACCO", price: "880円〜", size: "9cm", desc: "丸みのあるフォルムの一輪挿しです。ガラス製のため花の茎まで見え、デスクに置くのに適しています。" },
      { name: "スガハラガラス 一輪挿し", price: "2,200円〜", size: "12cm", desc: "日本のガラス工房が一点ずつ手作りする一輪挿しです。独特のフォルムと透明感が特長です。" },
      { name: "scope house 一輪挿し", price: "1,650円〜", size: "10cm", desc: "北欧テイストのシンプルなデザインです。一輪の花を飾るのに適したサイズです。" },
      { name: "100円ショップ 一輪挿し各種", price: "110円〜", size: "8〜12cm", desc: "ダイソー・セリアでは多様なデザインの一輪挿しを扱っています。複数購入して好みのデザインを探す用途に適しています。" },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクに合う花瓶おすすめ\",\"description\":\"花のサブスクに合うおすすめの花瓶と選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/kabin/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクに合う花瓶のサイズはどれくらいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花のサブスクの最安プラン（3〜4本）には、高さ10〜15cmの小さめの花瓶や一輪挿しが適しています。中間プラン（5〜8本）では高さ15〜20cm、上位プラン（8本以上）では高さ20〜25cmの花瓶が目安です。口が小さめの花瓶を選ぶと、少ない本数でもバランスよく飾ることができます。\"}},{\"@type\":\"Question\",\"name\":\"100円ショップの花瓶でも大丈夫ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、100円ショップの花瓶でも十分に使用できます。ダイソーやセリアのガラス製一輪挿しはシンプルなデザインのため、さまざまな花に合わせやすいのが特長です。まずは100円ショップで数種類のサイズをそろえ、花を分けて飾ることをおすすめします。飾ることに慣れた段階で、好みの花瓶に買い替えると楽しみ方が広がります。\"}},{\"@type\":\"Question\",\"name\":\"花瓶のお手入れ方法を教えてください\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花を替える際に、花瓶の内側を食器用洗剤とスポンジで洗ってください。口の狭い花瓶は、水と少量の漂白剤を入れてしばらく浸け置きすると、ぬめりや細菌を除去できます。週に1回は漂白剤で消毒することが望ましいです。花瓶を清潔に保つことが、花を長持ちさせる基本です。\"}},{\"@type\":\"Question\",\"name\":\"花瓶を持っていない場合、何で代用できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ジャムの空き瓶、ワインボトル、グラス、マグカップなど、水を入れられる容器であれば代用できます。口の小さい空き瓶は一輪挿しに適しています。ペットボトルの上部をカットし、布や紙を巻くだけでも花瓶として使用できます。\"}},{\"@type\":\"Question\",\"name\":\"花瓶を複数持つメリットはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、あります。花を分けて飾ることで、(1)部屋の複数箇所に花を配置できる、(2)少ない本数でもバランスよく見える、(3)花の種類ごとに分けることで長持ちしやすくなる（エチレンガス対策）、という利点があります。サイズの異なる花瓶を3つ程度用意しておくと、届いた花に合わせて飾り分けることができます。\"}}]}" }} />
        {/* JSONLD_INJECTED_v1 #3 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"花のサブスクに合う花瓶おすすめ\",\"description\":\"花のサブスクに合う花瓶の選び方を順に解説します\"}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花瓶・一輪挿しのおすすめ15選｜花のサブスクに合う花瓶の選び方【2026年】</title>
      <meta name="description" content="花瓶・一輪挿しのおすすめ15点を素材別・サイズ別・予算別にご紹介します。花のサブスクで届く花に合う花瓶の選び方もご説明します。" />

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
                <li><span className="text-[#333] font-medium">花瓶・一輪挿しのおすすめ</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">花瓶ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクに合う花瓶の選び方<br className="hidden md:block" />
              おすすめ15選【2026年・素材／サイズ／予算別】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-4 max-w-2xl mx-auto leading-relaxed">
              花のサブスクで届いた花をきれいに飾るには、花瓶選びが重要です。
              当サイトでは、素材別・サイズ別・予算別のおすすめの花瓶15点と、選び方のポイントをご説明します。
            </p>
            <p className="text-sm text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              少量の花を一輪挿しで楽しみたい方は、
              <a href="/compare/ichirinzashi/" className="text-[#4A7C59] font-medium underline">一輪挿しに合う花のサブスク比較（748円〜）</a>
              もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花瓶選びの4つのポイント
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "サブスクのプランに合ったサイズを選ぶ", text: "花3〜4本には高さ10〜15cmの小さめの花瓶、5〜8本には15〜20cm、8本以上には20〜25cmが目安です。花瓶が大きすぎると花がまばらに見え、小さすぎると花が収まりません。まずは届く花の本数に合わせたサイズを選ぶことをおすすめします。" },
                { num: "2", title: "口の大きさに注目する", text: "口が小さめの花瓶は、少ない本数でもバランスよく飾ることができます。一方、口が広い花瓶は本数の多い花をまとめて飾るのに向いています。サブスクの花は3〜5本のことが多いため、口径5〜8cm程度の花瓶をおすすめします。" },
                { num: "3", title: "インテリアとの調和を考える", text: "ナチュラルな部屋にはガラスや陶器、モダンな部屋には金属やマットな質感の花瓶、和風の部屋には焼き物や竹製の花瓶が合います。部屋のテイストに合った素材・色を選ぶことで、花がインテリアの一部として自然になじみます。" },
                { num: "4", title: "洗いやすさを確認する", text: "口が狭すぎる花瓶は内側を洗いにくく、ぬめりや細菌が発生しやすくなります。定期的に洗うことを考慮し、手が入るサイズか、ボトルブラシで洗えるサイズを選ぶことをおすすめします。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Ichirinzashi Vase Guide ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一輪挿し向きの花瓶の選び方
            </h2>
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              花を1〜2本だけ飾る一輪挿しは、通常の花瓶と選び方の基準が一部異なります。選ぶ際は、次の4点を確認してください。
            </p>
            <div className="space-y-3">
              {[
                { title: "口径2〜3cm程度の狭い口を選ぶ", text: "口が狭いほど、花1本でもまっすぐに立ちます。口が広いと花が倒れて縁にもたれ、バランスが取りにくくなります。" },
                { title: "高さは10〜20cmが扱いやすい", text: "花のサブスクで届く花は茎が短めにカットされていることが多いため、背の低い花瓶のほうが合わせやすい傾向があります。花の高さは花瓶の1.5倍程度が目安です。" },
                { title: "ガラス製なら水の状態が見える", text: "一輪挿しは水量が少なく雑菌が繁殖しやすいため、水の残量と濁りをひと目で確認できるガラス製が初心者に適しています。水を替える時期を判断しやすくなります。" },
                { title: "複数個そろえて「分けて飾る」", text: "サブスクで届く3〜4本を1本ずつ分けて飾るのが、一輪挿しの一般的な楽しみ方です。100円ショップの一輪挿しでも十分なため、サイズの異なるものを複数そろえておくと飾り分けがしやすくなります。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-6">
              一輪挿しに向く3〜4本の少量プランは、<a href="/compare/ichirinzashi/" className="text-[#4A7C59] underline">一輪挿しに合う花のサブスク比較（748円〜）</a>で送料込みの実価格を比較しています。
            </p>
          </div>
        </section>

        {/* ─── Vase Recommendations ─── */}
        {vaseCategories.map((category, ci) => (
          <section key={ci} className={`py-12 md:py-16 ${ci % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white"}`}>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#333]">{item.name}</h3>
                      <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-2 py-0.5 rounded-full font-medium">{item.price}</span>
                      <span className="text-xs bg-[#F8F8F8] text-[#666] px-2 py-0.5 rounded-full">高さ {item.size}</span>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ─── Budget Guide ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              予算別のおすすめ花瓶
            </h2>
            <div className="space-y-4">
              {[
                { budget: "500円以下", desc: "100円ショップのガラス花瓶・一輪挿し。最初に試して好みを探る段階に適しています。複数購入して花を分けて飾ることもできます。" },
                { budget: "1,000〜3,000円", desc: "IKEA、無印良品、KINTO、フランフランなど。デザイン性と実用性のバランスがよい価格帯で、メインの花瓶として長く使用できます。" },
                { budget: "3,000〜5,000円", desc: "ホルムガード、HAY、能作など。ブランドの花瓶ならではのデザイン性があり、花を生けていないときもインテリアとして飾れます。" },
                { budget: "5,000円以上", desc: "KAHLER、スガハラガラスなど。長く愛用できる上質な花瓶で、ギフトにも適しています。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-sm font-bold text-[#4A7C59] mb-2">{item.budget}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花瓶選びに関するよくある質問
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
        <section className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：花瓶を選ぶことで花のある暮らしを楽しめます
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクで届いた花を楽しむには、<strong>花瓶選び</strong>が重要です。まずは100円ショップやIKEAの手頃な花瓶から始め、適したサイズや好みを把握したうえで、好みの花瓶に買い替えることをおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              サイズの異なる花瓶を2〜3個用意しておくと、届いた花の量に合わせて使い分けたり、花を分けて複数の場所に飾ったりでき、楽しみ方の幅が広がります。花のサブスクを始める際は、あわせて花瓶もご用意ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                medeluの詳細を見る
              </a>
              <a href="/services/and-plants" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                AND PLANTSの詳細を見る
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
