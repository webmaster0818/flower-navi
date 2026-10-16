import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "一輪挿し向け花のサブスク比較｜少量プラン748円〜のおすすめと花瓶・飾り方【2026年最新】｜flowerデリ",
  description:
    "一輪挿しで花を楽しみたい方に向けて、少量プラン（3〜4本）のある花のサブスクを送料込みの実価格で比較しています。届いた花を1本ずつ分けて複数の一輪挿しに飾る方法、花瓶の選び方、花を長持ちさせる方法も解説します。料金は公式サイトで確認した値のみを掲載しています。",
  alternates: { canonical: "/compare/ichirinzashi/" },
};

// 少量プラン（最安プラン）を services.ts（公式確認値）から抽出
const smallPlans = SERVICES.map((s) => ({
  id: s.id,
  name: s.name,
  plan: s.cheapest.name,
  price: s.cheapest.price,
  flowers: s.cheapest.flowers,
  post: s.cheapest.postDelivery,
  shippingIncluded: s.shippingIncluded,
  shippingNote: s.shippingNote,
  cancellation: s.cancellation,
  servicePath: s.servicePath,
  verifiedAt: s.verifiedAt,
})).sort((a, b) => a.price - b.price);

const faqItems = [
  {
    q: "花が1本だけ届く「一輪挿し専用」のサブスクはありますか？",
    a: "主要サービスには、1本のみが届くプランは現在ありません（2026年7月時点の公式サイト確認）。最も本数が少ないプランは、medelu Mini（3〜4本）やbloomeeお試しプラン（4本以上）などです。届いた3〜4本の花を1本ずつ分けて、部屋の複数の場所に一輪挿しで飾る方法が一般的で、一輪挿しで楽しむ方には少量プランが適したボリュームです。",
  },
  {
    q: "一輪挿しに最も向いているサブスクはどれですか？",
    a: "送料込み748円/回で3〜4本が届くmedelu Miniコースが、価格・本数・ポスト投函による受け取りやすさのバランスに優れています（公式確認値・回数の条件なし）。ポスト投函で届くスリムな箱の花は茎がコンパクトにまとまっており、一輪挿しに移しやすい点も利点です。",
  },
  {
    q: "一輪挿しの花瓶はどんなものを選べばいいですか？",
    a: "口径が狭く（2〜3cm程度）、高さ10〜20cmのものが扱いやすく一般的です。サブスクで届く花は茎が短めにカットされていることが多いため、背の低い花瓶のほうが合わせやすい傾向があります。ガラス製の花瓶は水の残量と濁りが見えるため、手入れが容易です。詳しくは花瓶の選び方ガイドをご覧ください。",
  },
  {
    q: "一輪挿しだと花はどのくらい持ちますか？",
    a: "花の種類と環境によって異なりますが、1本ずつ分けて水を毎日替えると、束のまま飾るより長持ちしやすくなります。水中の雑菌の繁殖が抑えられるためです。切り花延命剤の併用や、茎を斜めに切り戻す手入れも効果的です。",
  },
  {
    q: "一輪挿し向けの少量プランに回数の条件はありますか？",
    a: "サービスによって異なります。medeluとhanamekuには回数の条件がなく、AND PLANTSは都度払いでいつでもスキップ・解約が可能です。bloomeeは最初の4回の受け取りが必要です（公式サイト確認値）。まず1回試したい方には、回数の条件がないサービスをおすすめします。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://ohana-delivery.com" },
    { "@type": "ListItem", position: 2, name: "比較", item: "https://ohana-delivery.com/compare/" },
    { "@type": "ListItem", position: 3, name: "一輪挿しに合う花のサブスク比較", item: "https://ohana-delivery.com/compare/ichirinzashi/" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "一輪挿しに合う花のサブスク比較【2026年最新】",
  description: "一輪挿しで花を楽しみたい方に向けて、少量プランのある花のサブスクを送料込みの実価格で比較しています。飾り方・花瓶の選び方も解説します。",
  datePublished: "2026-07-03T00:00:00+09:00",
  dateModified: "2026-07-03T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/compare/ichirinzashi/" },
};
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "一輪挿しに合う花のサブスク比較",
  itemListElement: smallPlans.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://ohana-delivery.com${s.servicePath}`,
    name: s.name,
  })),
};

export default function IchirinzashiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
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
                  <li><span className="text-[#666]">比較記事</span></li>
                  <li aria-hidden="true">/</li>
                  <li><span className="text-[#333] font-medium">一輪挿しに合う花のサブスク</span></li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-[#E8F0EB] py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
              <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">花のサブスク 用途別比較</p>
              <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
                一輪挿しに合う花のサブスク比較<br className="hidden md:block" />
                少量プランと飾り方【2026年最新】
              </h1>
              <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
                一輪挿しで花を飾りたい方には、3〜4本の少量プランが適しています。届いた花を1本ずつ分けると、玄関・デスク・洗面所など部屋の各所に飾ることができます。当サイトでは、送料込みの実価格（公式確認値）で比較しています。
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                  <p className="text-xs text-[#999] mb-1">少量プラン最安（送料込）</p>
                  <p className="text-xl font-bold text-[#4A7C59]">{smallPlans.find((s) => s.shippingIncluded)?.price.toLocaleString()}円/回</p>
                </div>
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                  <p className="text-xs text-[#999] mb-1">届く本数の目安</p>
                  <p className="text-xl font-bold text-[#4A7C59]">3〜4本</p>
                </div>
                <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                  <p className="text-xs text-[#999] mb-1">一輪挿しの数</p>
                  <p className="text-xl font-bold text-[#4A7C59]">3〜4箇所分</p>
                </div>
              </div>
            </div>
          </section>

          {/* 要点 */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                一輪挿しには少量プランとポスト投函の組み合わせが適しています
              </h2>
              <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
                1本のみが届くサブスクは、主要サービスには現在ありません（2026年7月時点・公式サイト確認）。一輪挿しで楽しむ場合は、<strong>3〜4本が届く低価格帯の少量プラン</strong>が適しています。届いた花を1本ずつ分けて、玄関・トイレ・デスク・寝室など複数の一輪挿しに飾ると、1回分の花で部屋全体を彩ることができます。
              </p>
              <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
                価格と受け取りやすさのバランスでは、送料込み748円/回でポスト投函に対応したmedelu Miniコースをおすすめします。回数の条件もないため、一輪挿しのある生活を試す際にも適しています。
              </p>
              <div className="bg-[#E8F0EB] rounded-xl p-5 mt-6">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-2">当ページの要点</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-0.5 shrink-0">--</span><span>1本専用のプランはなく、3〜4本の少量プランを分けて飾る方法が一般的</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-0.5 shrink-0">--</span><span>送料込みの最安はmedelu Mini（748円/回・ポスト投函・回数の条件なし）</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-0.5 shrink-0">--</span><span>一輪挿しは口径2〜3cm・高さ10〜20cmの花瓶が扱いやすい</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-0.5 shrink-0">--</span><span>1本ずつ分けて毎日水を替えると、束のままより長持ちしやすい</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* 比較表 */}
          <section className="py-12 md:py-16 bg-[#F8F8F8]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                一輪挿し向け少量プランの比較表（公式確認値）
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#4A7C59] text-white">
                      <th className="px-3 py-3 text-left font-medium">サービス</th>
                      <th className="px-3 py-3 text-left font-medium">最少プラン</th>
                      <th className="px-3 py-3 text-center font-medium">価格/回</th>
                      <th className="px-3 py-3 text-center font-medium">本数</th>
                      <th className="px-3 py-3 text-center font-medium">ポスト投函</th>
                      <th className="px-3 py-3 text-left font-medium">回数の条件・解約</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666]">
                    {smallPlans.map((s, i) => (
                      <tr key={s.id} className={`border-b border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                        <td className="px-3 py-3 font-bold text-[#333]"><a href={s.servicePath} className="hover:text-[#4A7C59] underline">{s.name}</a></td>
                        <td className="px-3 py-3">{s.plan}</td>
                        <td className="px-3 py-3 text-center font-bold text-[#4A7C59]">{s.price.toLocaleString()}円{s.shippingIncluded ? "" : "＋送料"}</td>
                        <td className="px-3 py-3 text-center">{s.flowers}</td>
                        <td className="px-3 py-3 text-center">{s.post ? "○" : "×（宅配）"}</td>
                        <td className="px-3 py-3 text-xs">{s.cancellation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#999] mt-3">
                ※ 価格は税込で、各公式サイトの確認値です（{smallPlans[0]?.verifiedAt}確認）。送料の扱いはサービスにより異なります。ご利用前に、公式サイトにて最新情報をご確認ください。
              </p>
            </div>
          </section>

          {/* 選び方 */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                一輪挿し向け花のサブスクの選び方
              </h2>
              <div className="space-y-4">
                {[
                  { num: "1", title: "本数は3〜4本の最少プランを選びます", text: "1本のみが届く専用プランは、主要サービスにはありません（2026年7月時点・公式サイト確認）。1本ずつ分けて飾る場合は、3〜4本の最少プランで十分です。medelu Mini（3〜4本）・hanamekuライトプラン（3〜4本）・bloomeeお試しプラン（3本以上）がこのボリュームに該当します。" },
                  { num: "2", title: "送料込みの実価格で比較します", text: "表示価格に送料が含まれるかどうかで、実際の負担額が変わります。公式確認値では、medelu Mini 748円/回とhanamekuライトプラン1,210円/回は送料込み、bloomeeお試しプラン980円/回は送料別です。一輪挿し向けの少量プランは価格帯が近いため、送料の扱いが差となります。" },
                  { num: "3", title: "ポスト投函型は受け取りやすく、一輪挿しに移しやすい形で届きます", text: "ポスト投函の場合は、スリムな箱に茎がコンパクトにまとまった状態で届くため、そのまま一輪挿しに移しやすい点が利点です。在宅の必要もありません。medelu Mini・hanamekuライトプラン・bloomeeお試しプランはポスト投函に対応しています（公式確認値）。" },
                  { num: "4", title: "回数の条件・解約条件を確認します", text: "medeluとhanamekuには回数の条件がなく、AND PLANTSは都度払いでいつでもスキップ・解約が可能です。bloomeeは最初の4回の受け取りが必要です（公式サイト確認値）。一輪挿しのある生活を継続できるかをまず試したい方には、回数の条件がないサービスから始めることをおすすめします。" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                    <div className="flex items-start gap-3">
                      <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#666] leading-relaxed mt-6">
                届いた花を活かすためには、花瓶選びも重要です。<a href="/guides/kabin/" className="text-[#4A7C59] underline hover:no-underline">一輪挿しに合う花瓶の選び方を確認する</a>
              </p>
            </div>
          </section>

          {/* 飾り方 */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                届いた花を一輪挿しで楽しむ3つの方法
              </h2>
              <div className="space-y-4">
                {[
                  { num: "1", title: "1本ずつ分けて生活動線上に置きます", text: "3〜4本届いた場合は、玄関・デスク・洗面所・寝室など、毎日目に入る場所に1本ずつ飾ります。ボリュームで見せる飾り方と異なり、一輪挿しは目に入る回数によって満足度が左右されます。花の高さを花瓶の1.5倍程度に切り戻すと、バランスよく収まります。" },
                  { num: "2", title: "花瓶は口径2〜3cm・高さ10〜20cmを基本とします", text: "口が狭い花瓶であれば、1本でも自立して見栄えよく飾れます。サブスクの花は茎が短めのことが多いため、背の低い花瓶が合わせやすい傾向があります。ガラス製は水の濁りが見えて交換の時期がわかりやすく、初心者の方に適しています。詳しくは花瓶の選び方ガイドをご覧ください。" },
                  { num: "3", title: "毎日の水替えと切り戻しで長持ちさせます", text: "一輪挿しは水量が少なく雑菌が繁殖しやすいため、水替えは毎日行うことが基本です。あわせて2〜3日に1回、茎の先を斜めに1cm切り戻すと吸水が回復します。束のまま大きな花瓶に入れるより、1本ずつのほうが管理しやすく長持ちしやすい点も一輪挿しの利点です。" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                    <div className="flex items-start gap-3">
                      <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-6 text-sm">
                <a href="/guides/kabin/" className="text-[#4A7C59] underline hover:no-underline">→ 花瓶の選び方ガイド</a>
                <a href="/guides/flower-care/" className="text-[#4A7C59] underline hover:no-underline">→ 花を長持ちさせるお手入れ</a>
                <a href="/guides/hitorigurashi/" className="text-[#4A7C59] underline hover:no-underline">→ 一人暮らしの花のある生活</a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-16 bg-[#F8F8F8]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                一輪挿しと花のサブスクに関するよくある質問
              </h2>
              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <details key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden bg-white">
                    <summary className="px-5 py-4 cursor-pointer text-sm font-medium text-[#333] bg-[#FDFDFD] hover:bg-[#E8F0EB] transition-colors">Q. {item.q}</summary>
                    <div className="px-5 py-4"><p className="text-sm text-[#666] leading-relaxed">A. {item.a}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="py-12 md:py-16 bg-[#E8F0EB]">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">少量プランで一輪挿しのある暮らしを始められます</h2>
              <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
                一輪挿しで花を楽しむ場合は、3〜4本の少量プランを分けて飾る方法をおすすめします。送料込み748円/回で回数の条件がないmedelu Miniであれば、気軽に始めて、合わない場合はすぐに解約できます。まずは1回、花のある生活をお試しください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                <a href="/services/medelu/" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">medeluの詳細を見る</a>
                <a href="/compare/500yen/" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">最安プランの比較を見る</a>
                <a href="/compare/cheap/" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">安い順の比較を見る</a>
                <a href="/compare/ryokin/" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">全プラン料金一覧を見る</a>
                <a href="/know-guides/summer-care/" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">夏の花を長持ちさせる方法を見る</a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
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
              <p className="text-xs text-gray-500 mt-2">掲載料金は各公式サイトの確認値です（確認日を本文に明記）。最新の料金・サービス内容は各公式サイトでご確認ください。</p>
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
