"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "男性が花のサブスクを使うのは変ですか？",
    a: "問題ありません。花のサブスクに性別の条件はなく、申し込みも受け取りもどなたでも同じです。一人暮らしの方が気にされる点は「不在が多い」「部屋に合う色か」「途中でやめられるか」の3点のため、ポスト投函の有無、色やコースの選び方、回数の条件で選ぶことをおすすめします（各サービスの条件は本文の表をご参照ください）。",
  },
  {
    q: "男性向けのシンプルな花が届くサービスはありますか？",
    a: "HitoHanaは、6色とおまかせの中から毎回色を指定できます（花の種類は指定できません。公式FAQによる）。medeluには部屋のテイスト別にANYROOM・NATURAL・MODERNのコースがあり、MODERNはシックな色合いの花が中心であると公式サイトで案内されています。",
  },
  {
    q: "花瓶を持っていませんが、代わりになるものはありますか？",
    a: "空き瓶やグラス、マグカップなど、家にあるもので十分に代用できます。特にジャムの空き瓶やワインボトルは、一輪挿しとして見栄えよく使えます。ダイソー公式ネットストアではガラス花瓶を110円（税込）から販売しているため（2026年10月26日公式確認）、最初は安価なものから始める方法もあります。",
  },
  {
    q: "花の手入れが面倒そうですが、最低限何をすればよいですか？",
    a: "最低限必要な作業は3つです。(1)届いたら茎を水中で斜めに切る（水切り）、(2)花瓶の水を2〜3日に1回替える、(3)直射日光とエアコンの風を避けて飾る、の3点を行えば、1週間以上楽しめます。切り花延命剤を入れると、さらに長持ちします。",
  },
];

/* ─── Main Component ─── */
export default function DanseiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"男性におすすめの花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/dansei/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"男性におすすめの花のサブスク\",\"description\":\"男性におすすめの花のサブスクを解説します。受け取り方法・回数の条件・1回あたりの費用と、飾り方を説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-27T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/dansei/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"男性が花のサブスクを使うのは変ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"問題ありません。花のサブスクに性別の条件はなく、申し込みも受け取りもどなたでも同じです。一人暮らしの方が気にされる点は「不在が多い」「部屋に合う色か」「途中でやめられるか」の3点のため、ポスト投函の有無、色やコースの選び方、回数の条件で選ぶことをおすすめします（各サービスの条件は本文の表をご参照ください）。\"}},{\"@type\":\"Question\",\"name\":\"男性向けのシンプルな花が届くサービスはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"HitoHanaは、6色とおまかせの中から毎回色を指定できます（花の種類は指定できません。公式FAQによる）。medeluには部屋のテイスト別にANYROOM・NATURAL・MODERNのコースがあり、MODERNはシックな色合いの花が中心であると公式サイトで案内されています。\"}},{\"@type\":\"Question\",\"name\":\"花瓶を持っていませんが、代わりになるものはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"空き瓶やグラス、マグカップなど、家にあるもので十分に代用できます。特にジャムの空き瓶やワインボトルは、一輪挿しとして見栄えよく使えます。ダイソー公式ネットストアではガラス花瓶を110円（税込）から販売しているため（2026年10月26日公式確認）、最初は安価なものから始める方法もあります。\"}},{\"@type\":\"Question\",\"name\":\"花の手入れが面倒そうですが、最低限何をすればよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"最低限必要な作業は3つです。(1)届いたら茎を水中で斜めに切る（水切り）、(2)花瓶の水を2〜3日に1回替える、(3)直射日光とエアコンの風を避けて飾る、の3点を行えば、1週間以上楽しめます。切り花延命剤を入れると、さらに長持ちします。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

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
                <li><span className="text-[#1F2420] font-medium">男性向け花のサブスク</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/dansei/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">男性向けガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              一人暮らしの男性が花を飾る方法<br className="hidden md:block" />
              男性向け花のサブスクの選び方と飾り方【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              一人暮らしの男性にも、花を飾ることをおすすめします。花のサブスクに性別は関係なく、一人暮らしの場合は「ポスト投函で受け取れるか」「回数の条件」「1回あたりの費用」で選ぶと、ご自身に合ったサービスを選びやすくなります。
              当サイトでは、5社の条件を公式サイトで確認し、表に掲載しています（2026年10月14日確認）。
            </p>
          </div>
        </PageHero>


        {/* ─── 一人暮らしの男性が花を飾る基本（即答）─── */}
        <section id="kazarikata-kihon" className="py-10 bg-white border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-lg md:text-xl font-bold text-[#1F2420] mb-4">一人暮らしの男性が部屋に花を飾るときの基本</h2>
            <div className="rounded-md border-2 border-[#2F5B43] bg-[#F6F4EF] p-5 md:p-6">
              <ul className="text-sm md:text-base text-[#3F443E] leading-relaxed space-y-2">
                <li>・<strong>1本から始めます。</strong>花屋やスーパーで1本だけ買うか、花のサブスクで少量のプランを選ぶと、費用と手間を抑えられます。</li>
                <li>・<strong>花瓶は家にあるもので代用できます。</strong>グラスや空き瓶、マグカップで十分です。そろえる場合は、透明なガラスやダークカラーの陶器など、シンプルな形が部屋に合わせやすくなります。</li>
                <li>・<strong>飾る場所を1か所決めます。</strong>デスクの隅、テレビボードの上、洗面台など、毎日目に入る場所が続けやすい場所です。直射日光が当たる窓際とエアコンの風が当たる場所は避けます。</li>
                <li>・<strong>手入れは3つです。</strong>届いたら茎を水中で斜めに切る（水切り）、水を2〜3日に1回替える、直射日光と風を避ける、の3点です。</li>
                <li>・<strong>色はグリーン・ホワイト系</strong>が落ち着いた部屋に合わせやすく、色を指定できるサービス（HitoHanaは6色＋おまかせから毎回指定可・2026年10月27日公式確認）もあります。</li>
              </ul>
            </div>
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-4">
              継続して飾りたい方は、不在でも受け取れるポスト投函と回数の条件で選ぶと続けやすくなります。条件の比較は下の表に、飾り方の詳細は
              <a href="#kazarikata" className="text-[#2F5B43] underline mx-1">男性の部屋に花を見栄えよく飾る3つの方法</a>
              に、花瓶の選び方は
              <a href="/guides/kabin/" className="text-[#2F5B43] underline mx-1">花瓶の選び方</a>
              に掲載しています。
            </p>
          </div>
        </section>

        {/* ─── 一人暮らし向け 条件比較（公式確認値）─── */}
        <section id="hikaku" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              一人暮らしの男性が確認すべき点：受け取り方法・回数の条件・1回あたりの費用
            </h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
              一人暮らしの方が継続できなくなる理由は「再配達の手間」と「やめたい時にやめられない」が多いため、まずこの2点で絞り込みます。以下は各社の最安プランの条件です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#DEDAD2]">
                <thead className="bg-[#EDF1EC] text-[#1F2420]">
                  <tr><th className="p-2 text-left">サービス</th><th className="p-2 text-left">最安プラン（1回）</th><th className="p-2 text-left">受け取り</th><th className="p-2 text-left">回数の条件</th></tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => (
                    <tr key={s.id} className="border-t border-[#DEDAD2]">
                      <td className="p-2"><a href={s.servicePath} className="text-[#2F5B43] underline">{s.name}</a></td>
                      <td className="p-2">{s.cheapest.name} {s.cheapest.price.toLocaleString()}円（{s.shippingIncluded ? "送料込み" : "送料別"}・{s.cheapest.flowers}）</td>
                      <td className="p-2">{s.cheapest.postDelivery ? "ポスト投函（不在時も受け取り可能）" : "対面（宅配便）"}</td>
                      <td className="p-2">{s.commitmentLabel}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#DEDAD2]">
                    <td className="p-2"><a href="/services/hitohana/" className="text-[#2F5B43] underline">HitoHana（ひとはな）</a></td>
                    <td className="p-2">Lite 1,320円（特商法の1回あたり金額・4〜6本）</td>
                    <td className="p-2">対面（宅急便）</td>
                    <td className="p-2">なし</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="text-xs text-[#4A4F49] leading-relaxed mt-3 space-y-1">
              <li>・不在が多い方：ポスト投函のmedelu Mini（748円・送料込み）またはhanamekuライト（1,210円・送料込み）をおすすめします。bloomeeのお試しプランもポスト投函ですが、送料385円が別途かかり、最初の4回は受け取りが必要です。</li>
              <li>・色を部屋に合わせたい方：HitoHana（6色とおまかせから毎回指定）またはmedeluのMODERNコースをおすすめします。</li>
              <li>・出典：各社公式サイト（料金表・特定商取引法に基づく表記・FAQ）、2026年10月14日確認。ご利用前に、公式サイトにて最新情報をご確認ください。</li>
            </ul>
          </div>
        </section>
        {/* ─── Benefits ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              男性が花のサブスクを始める5つのメリット
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "部屋の印象が大きく向上する", text: "花を1輪飾るだけで、一人暮らしの部屋の雰囲気は大きく変わります。家具を買い替えるよりも手軽に部屋の印象を変えられる点が、花の利点です。最も安いプランはmedeluのMini（748円・送料込み）で、小さな花瓶一つ分から始められます。" },
                { num: "2", title: "リラックス効果・ストレス軽減", text: "仕事から帰宅して部屋の花が目に入ると、気持ちの切り替えにつながります。水替えの際に花の状態を確認する数分間が、生活のリズムにもなります。" },
                { num: "3", title: "季節感を感じられる", text: "一人暮らしでは季節の変化を感じにくくなりがちです。花のサブスクを利用すると、春はチューリップ、夏はひまわり、秋はダリア、冬はアネモネと、自然に季節を感じられます。忙しい日々の暮らしに彩りが加わります。" },
                { num: "4", title: "自分で選ぶ手間がない", text: "花屋に入ること自体に抵抗がある男性も少なくありません。サブスクでは専門スタッフが選んだ花が自宅に届くため、「何を買えばよいかわからない」「花屋に入りにくい」という悩みを解消できます。medeluのMini・Lite、hanamekuのライト、bloomeeのお試し・グリーンはポスト投函のため、不在時でも受け取れます。" },
                { num: "5", title: "会話のきっかけになる", text: "部屋に花を飾っていると、友人やパートナーとの会話のきっかけになります。花のサブスクの話題から交友関係が広がることもあります。SNSに投稿すれば、暮らしぶりを紹介する機会にもなります。" },
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

        {/* ─── Recommended Services ─── */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              男性におすすめの花のサブスク3選
            </h2>
            <div className="space-y-4">
              {[
                { name: "medelu", nameJa: "メデル", price: "748円〜", reason: "Mini 748円（税込・送料込み・3〜4本）から、ポスト投函で受け取れます。回数の条件に関する記載はありません。「MODERN」コースはシックな色合いの花が中心です（公式）。", url: "/services/medelu" },
                { name: "HitoHana", nameJa: "ひとはな", price: "1,320円〜", reason: "6色とおまかせから毎回色を指定でき、部屋に合わせやすいサービスです。Lite 1,320円/回（特商法の1回あたり金額）で、回数の条件はありません。受け取りは宅急便です（ポスト投函ではありません）。", url: "/services/hitohana" },
                { name: "AND PLANTS", nameJa: "アンドプランツ", price: "1,980円〜", reason: "Standard 1,980円（送料込み・6〜8本）で、解約はいつでも可能です。観葉植物も扱っており、植物と組み合わせやすいサービスです。受け取りは対面です（ポスト投函はありません）。", url: "/services/and-plants" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base font-bold text-[#1F2420]">{item.name}（{item.nameJa}）</h3>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-2 py-0.5 rounded-md font-medium">{item.price}</span>
                  </div>
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">{item.reason}</p>
                  <a href={item.url} className="inline-block text-sm text-[#2F5B43] font-medium hover:underline">
                    {item.name}の詳細を見る →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Display Tips ─── */}
        <section id="kazarikata" className="py-12 md:py-16 bg-white scroll-mt-20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              男性の部屋に花を見栄えよく飾る3つの方法
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "シンプルな花瓶を選ぶ", text: "透明なガラスの花瓶、マットなセラミック、ダークカラーの陶器など、シンプルなデザインの花瓶をおすすめします。一輪挿しであれば、花1本でも見栄えよく飾れます。ダイソーのガラス花瓶（110円から・税込）（2026年10月26日公式確認）やIKEAの花瓶も選択肢です。" },
                { num: "2", title: "飾る場所を決めておく", text: "デスクの隅、テレビボードの上、洗面台など、花を飾る定位置を決めておくと習慣にしやすくなります。目に入りやすい場所に飾ることで、リラックス効果も高まります。窓際は直射日光で花が傷みやすいため、避けてください。" },
                { num: "3", title: "グリーン系・ホワイト系を基調にする", text: "男性の部屋に合わせやすい色は、グリーン・ホワイト・ブラウン系です。派手なピンクや赤が好みでない方は、HitoHanaで色を指定するか、medeluのMODERNコースを選ぶと、落ち着いた色合いの花が届きます。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFF8F0] rounded-md p-5 border border-[#F0E0D0] flex items-start gap-4">
                  <span className="bg-[#8B6F5C] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              男性の花のサブスク利用に関するよくある質問
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
              男性にも花のある暮らしをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクは、男性にもおすすめできるサービスです。部屋の雰囲気が良くなるだけでなく、リラックス効果や季節感を得られるメリットがあります。「花屋に入りにくい」「何を選べばよいかわからない」という悩みも、サブスクで解消できます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              まずは<strong>medelu</strong>の748円プランから始めるか、色を選べる<strong>HitoHana</strong>で好みの花をお試しください。花1本でも、部屋の印象は大きく変わります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors">
                748円から始める medeluを見る
              </a>
              <a href="/services/hitohana" className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors">
                色が選べる HitoHanaを見る
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
            <p className="text-xs text-gray-500 mt-2">料金・条件は2026年10月14日に各公式サイトで確認したものです。ご利用前に、公式サイトにて最新情報をご確認ください。</p>
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
