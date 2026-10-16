"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "月額制の観葉植物サブスクは、購入と比べてどちらがお得ですか？",
    a: "同じ鉢を数年そのまま置き続けるなら購入、入れ替えや枯れたときの手当・日々の管理まで任せたいなら月額制（レンタル）のほうが有利です。購入は最初に植物代・鉢代・送料がかかる代わりに以降の固定費が下がり、月額制は初期費用を抑えられる代わりに使っている間ずっと支払いが続きます。損益が入れ替わる時期は鉢のサイズ・月額・入れ替え頻度で変わるため、一律の月数では示せません。判断に迷う場合は「購入価格 ÷ 月額」で何か月分に相当するかを出し、その月数より長く置く見込みがあるかで決めてください。あわせて、枯れたときの買い直しをどちらが負担するか、やめるときの処分・撤去費がどちらにかかるかも計算に入れると、より正確に判断できます。",
  },
  {
    q: "観葉植物のサブスクと花のサブスクはどう違いますか？",
    a: "花のサブスクは切り花が定期的に届き、1〜2週間で枯れるため常に新しい花を楽しめます。観葉植物のサブスクは鉢植えのグリーンが届き、適切に育てれば何年も楽しめます。お手入れの手間は観葉植物のほうが少なく、水やりは週1〜2回程度です。初期費用は観葉植物のほうが高めですが、長期的には費用対効果が高くなります。",
  },
  {
    q: "観葉植物を枯らしてしまわないか不安ですが、初心者でも始められますか？",
    a: "AND PLANTSには、初心者でも育てやすい種類を選定してもらえるオプションがあります。また、育て方の説明書が同封されるため、水やりの頻度や日当たりの条件を把握しやすくなっています。万が一枯れてしまった場合の交換保証を設けているサービスもあるため、初心者の方でも安心して始められます。",
  },
  {
    q: "賃貸マンションでも観葉植物は置けますか？",
    a: "はい、置くことができます。小型の観葉植物（ポトス、サンスベリアなど）なら棚やテーブルの上に置けるため、床を汚す心配もありません。受け皿を使えば水漏れも防げます。壁掛けタイプや吊り下げタイプを選べば、スペースを取らずにグリーンを楽しめます。",
  },
  {
    q: "花のサブスクと観葉植物のサブスクは併用できますか？",
    a: "併用できます。観葉植物で部屋の基調となるグリーンを置き、花のサブスクで季節の彩りを加える方法は、人気のある組み合わせです。AND PLANTSでは切り花と観葉植物の両方を扱っているため、一つのサービスでまとめることも可能です。",
  },
  {
    q: "サービス別に見ると、季節ごとに植物を入れ替えられるのはどこですか？",
    a: "鉢そのものを入れ替えられるのは、交換に対応するレンタル型です。当サイトの掲載サービスでは、CLASが交換・返却に対応しています。購入型（AND PLANTSの定期便や、HitoHanaの単品購入）は届いた植物が自分のものになるため、季節ごとの入れ替えは前提になっていません。観葉植物は常緑の種類が中心で、鉢の見た目が季節によって大きく変わるわけではないため、季節感はベースのグリーンを据え置きにして切り花の定期便だけを入れ替える形が運用しやすい組み合わせです。",
  },
  {
    q: "メンテナンス付きで枯れる心配が少ないのは、どのサービスですか？",
    a: "日々の管理まで任せたい場合は、メンテナンスが定額に含まれるレンタル型が該当します。当サイトの掲載サービスでは、CLASが大型観葉植物のレンタルに対応し、メンテナンス不要のプランと交換・返却があります（料金の公表値は確認できていないため見積もりが前提です）。購入型で選ぶ場合は、AND PLANTSの14日間の交換保証のように、到着時の傷み・不具合に対する交換制度の有無が判断材料になります。訪問メンテナンスの有無によって仕組みが根本的に異なるため、まず「自分（自社）で水やりをするかどうか」を決めておくと、選択がしやすくなります。",
  },
  {
    q: "日当たりの悪い部屋でも育てやすい植物を提案してもらえますか？",
    a: "AND PLANTSには初心者でも育てやすい種類を選定してもらえるオプションがあり、育て方の説明書も同封されます。耐陰性の強い種類（ポトス、サンスベリア、モンステラなど）を選べば、日当たりの悪い部屋でも育てられます。申し込み時に置き場所の明るさを伝えられるか、選定をおまかせできるかがサービス選びのポイントです。置き場所の明るさの見極め方や水やりの調整は、当サイトの「観葉植物の育て方・置き場所ガイド」で解説しています。",
  },
  {
    q: "訪問メンテナンス込みのプランはありますか？",
    a: "メンテナンスが定額に含まれるのはレンタル型です。当サイトの掲載サービスでは、CLASにメンテナンス不要のプランがあることを確認していますが、訪問頻度・作業範囲の公表値は確認できていないため、当サイトでは回数を断定していません。回数や作業範囲を条件にしたい場合は、鉢数・サイズ・設置場所を伝えて見積もりを取り、契約前に書面で確認してください。オフィス・店舗でメンテナンス込みにしたい場合の進め方は「法人・オフィス向けガイド」に、金額の決まり方は「観葉植物の料金の考え方」にまとめています。",
  },
  {
    q: "置き場所によって向き不向きはありますか？",
    a: "「置き場所の明るさ」「人の視線が届く場所か」「手入れをする人を決められるか」の3点で判断します。常に良い状態を保つ必要がある場所にはメンテナンス込みのレンタル型が適しており、多少の手入れを自分で担える場所であれば購入型でも対応できます。水回りや什器の都合で置き場所が限られる場合は、床置きの大型より棚上の小型から試すと失敗しにくくなります。オフィス・店舗での置き場所の決め方と導入手順は当サイトの「法人・オフィス向けガイド」にまとめています。",
  },
  {
    q: "枯れてしまったときの交換対応はどのサービスにありますか？",
    a: "当サイトの掲載サービスでは、AND PLANTSに14日間の交換保証、CLASに交換・返却の仕組みがあります。HitoHanaの観葉植物については交換条件を確認できていないため、公式サイトでご確認ください。なお、到着時の傷み・不具合に対する交換と、育てている途中で枯れた場合の扱いは、別に定められていることがある点にご注意ください。申請期限が「到着後◯日以内」と短く設定されている場合もあるため、対象範囲と期限は申し込み前に各公式サイトで確認してください。",
  },
];

/* FAQPageは faqItems から生成（本文とJSON-LDのズレ防止・1ページ1つ） */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── Main Component ─── */
export default function KanyouShokubutsuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"観葉植物の定期便・サブスク比較\",\"description\":\"観葉植物の定期便・サブスク比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/and-plants/\",\"name\":\"AND PLANTS（アンドプランツ）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/hitohana/\",\"name\":\"HitoHana（ヒトハナ）\"},{\"@type\":\"ListItem\",\"position\":3,\"url\":\"https://ohana-delivery.com/services/lifft/\",\"name\":\"LIFFT（リフト）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"観葉植物の定期便・サブスク比較\",\"item\":\"https://ohana-delivery.com/compare/kanyou-shokubutsu/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"観葉植物は購入とサブスク・レンタルどちらがお得か｜月額料金・メンテナンス・交換対応で比較\",\"description\":\"観葉植物を購入して育てる方法と、サブスク・レンタルで借りて管理を任せる方法を、提供形態・月額の目安・メンテナンス頻度・交換対応で比較し、損益が入れ替わる考え方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-09-16T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/kanyou-shokubutsu/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <meta name="description" content="観葉植物を購入して育てる場合と、サブスク・レンタルで借りて管理を任せる場合の費用を比較します。AND PLANTS・CLAS・HitoHanaを提供形態・月額の目安・メンテナンス頻度・交換対応で対比し、購入価格と月額の損益が入れ替わる考え方を解説します。" />

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
                <li><span className="text-[#333] font-medium">観葉植物のサブスク</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">購入とサブスク・レンタルの比較</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              観葉植物は購入とサブスク・レンタル<br className="hidden md:block" />
              どちらがお得か【2026年】月額料金・交換対応で比較
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-6 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、<strong>観葉植物を「買って育てる」か「借りて任せる」かを判断するための情報</strong>をまとめています。
              提供形態・月額の目安・メンテナンス頻度・交換対応の有無で各社を比較し、利用者に合う仕組みを整理します。
            </p>
            <p className="text-xs md:text-sm text-[#666] max-w-2xl mx-auto leading-relaxed">
              置き場所・日当たり・水やりなど<strong>育て方</strong>を知りたい方は
              <a href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の育て方・置き場所ガイド</a>
              、<strong>料金の決まり方・予算の立て方</strong>を知りたい方は
              <a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の料金の考え方</a>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* ─── Quick Answer: Rental vs Subscription / Personal vs Corporate ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              月額制の観葉植物サブスクと購入の費用比較
            </h2>
            <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F8F8F8] p-6 mb-6">
              <p className="text-sm text-[#555] leading-relaxed">
                <strong>同じ鉢を数年そのまま置き続けるなら購入、入れ替えや枯れたときの手当・日々の管理まで任せたいならサブスク（レンタル）が有利です。</strong>
                購入は最初に植物代・鉢代・送料がかかる代わりに以降の固定費が下がり、月額制は初期費用を抑えられる代わりに使っている間ずっと支払いが続きます。
                損益が入れ替わる時期は鉢のサイズ・月額・入れ替え頻度で変わるため一律には示せません。判断に迷う場合は<strong>「購入価格 ÷ 月額」で何か月分に相当するか</strong>を出し、その月数より長く置く見込みがあるかで決めてください。
              </p>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              当サイトでの用語の使い分けは次のとおりです。「サブスク」は植物を購入して定期的に届けてもらい、自分で育てる形態を指します。「レンタル」は植物を借りる形態で、交換・返却ができ、メンテナンス込みのプランもあります。同じ「月額」でも、支払いを終えた後に植物が手元に残るかどうかが大きく異なります。
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border-2 border-[#4A7C59] p-6 bg-[#F8F8F8]">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">買って育てたい方（購入型）</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>サブスク（買い切りの定期便）が基本の選択肢</strong>です。AND PLANTSでは1,980円〜/月で育てやすい植物が届き、14日間の交換保証が付いています。枯らすことに不安がある初心者の方でも始めやすい仕組みです。届いた植物は自分のものになるため、長く置くほど1か月あたりの負担は下がります。
                </p>
                <a href="#osusume-3sen" className="text-sm text-[#4A7C59] font-medium underline">→ 購入型・レンタル型のおすすめ3選を見る</a>
              </div>
              <div className="rounded-xl border border-[#E5E5E5] p-6 bg-[#F8F8F8]">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">借りて任せたい方（レンタル型）</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  大型グリーンを手間をかけずに維持したい場合や、入れ替えを前提にする場合は、<strong>レンタルが有力な選択肢</strong>です。CLASのように、大型観葉植物をレンタルでき、交換・返却が自由で、メンテナンス不要プランを用意しているサービスがあります。
                </p>
                <p className="text-xs text-[#999] leading-relaxed">
                  オフィス・店舗での導入（管理担当を置けない、メンテナンス込みにしたい、対応エリアを確認したい）は
                  <a href="/guides/houjin-office/" className="text-[#4A7C59] underline mx-1">法人・オフィス向けガイド</a>
                  、料金の決まり方や予算の立て方は
                  <a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] underline mx-1">観葉植物の料金の考え方</a>
                  にまとめています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Difference ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクと観葉植物サブスクの違い
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">比較項目</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">花のサブスク</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">観葉植物サブスク</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "楽しめる期間", flower: "1〜2週間", plant: "数ヶ月〜数年" },
                    { item: "お手入れ", flower: "水替え毎日〜2日", plant: "水やり週1〜2回" },
                    { item: "月額目安", flower: "700〜3,000円", plant: "2,000〜5,000円" },
                    { item: "配送頻度", flower: "毎週〜月1回", plant: "月1回〜不定期" },
                    { item: "インテリア効果", flower: "華やかさ・彩り", plant: "癒し・空気清浄" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5]">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className="px-3 py-3 text-center text-[#666]">{row.flower}</td>
                      <td className="px-3 py-3 text-center text-[#666]">{row.plant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Recommendations ─── */}
        <section id="osusume-3sen" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクおすすめ3選
            </h2>
            <div className="space-y-6">
              {[
                {
                  rank: 1,
                  name: "AND PLANTS",
                  nameJa: "アンドプランツ",
                  price: "1,980円〜/月",
                  highlight: "観葉植物と切り花の両方を扱うサービスです。プロが選んだ育てやすい観葉植物が届き、育て方のサポートも用意されています。14日間の交換保証があり、初心者の方も始めやすい内容です。送料は無料です。",
                  features: ["初心者向けの育てやすい植物をセレクト", "14日間の交換保証", "育て方の説明書付き", "切り花プランとの併用可能"],
                  color: "#4A7C59",
                  url: "/services/and-plants",
                },
                {
                  rank: 2,
                  name: "CLAS",
                  nameJa: "クラス",
                  price: "月額レンタル制",
                  highlight: "家具・家電のサブスクサービスで、大型の観葉植物もレンタルできます。オフィスや広いリビングに合う大型グリーンを手軽に試せます。交換・返却にも対応しています。",
                  features: ["大型観葉植物のレンタルが可能", "交換・返却が自由", "メンテナンス不要プランあり", "法人利用にも対応"],
                  color: "#6B8E5B",
                  url: "#",
                },
                {
                  rank: 3,
                  name: "HitoHana",
                  nameJa: "ひとはな",
                  price: "3,300円〜",
                  highlight: "花の定期便で知られるHitoHanaは、観葉植物の単品購入にも対応しています。サブスクではありませんが、好みの観葉植物を選んで購入でき、育て方のサポートも受けられます。",
                  features: ["豊富な品揃えから選べる", "サイズ・種類が豊富", "ギフト対応あり", "育て方のサポート"],
                  color: "#8B6F5C",
                  url: "/services/hitohana",
                },
              ].map((item) => (
                <div key={item.rank} className={`bg-white rounded-xl overflow-hidden ${item.rank === 1 ? "border-2 border-[#4A7C59]" : "border border-[#E5E5E5]"}`}>
                  {item.rank === 1 && (
                    <div className="bg-[#4A7C59] text-white text-xs text-center py-1.5 font-bold">おすすめ第1位</div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shrink-0" style={{ backgroundColor: item.color }}>
                        {item.rank}位
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#333] mb-1">{item.name}（{item.nameJa}）</h3>
                        <p className="text-sm text-[#4A7C59] font-medium">{item.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">{item.highlight}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.map((f, fi) => (
                        <span key={fi} className="bg-[#F8F8F8] text-[#666] text-xs px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    {item.url !== "#" && (
                      <a href={item.url} className="inline-block text-sm text-[#4A7C59] font-medium hover:underline">
                        {item.name}の詳細を見る →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Comparison Table: price / maintenance / replacement / area ─── */}
        <section id="hikaku-hyou" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスク・レンタル比較表｜月額の目安・メンテナンス頻度・交換対応・対応エリア
            </h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              判断に必要な4項目（月額の目安・メンテナンス頻度・交換対応の有無・対応エリア）で比較しています。当サイトで公式に確認できた値のみを記載し、確認できていない項目は「公式サイトで要確認」と表記しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-32">比較項目</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">AND PLANTS</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">CLAS</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">HitoHana</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "提供形態",
                      ap: "購入型（定期便＋単品購入）",
                      clas: "レンタル（交換・返却あり）",
                      hh: "単品購入（サブスクではない）",
                    },
                    {
                      item: "月額の目安",
                      ap: "定期便1,980円〜（送料込み・都度払い／2026年7月3日公式確認）。観葉植物は単品購入のため価格は公式サイトで要確認",
                      clas: "月額レンタル制。月額の公表値は未確認のため、見積もりでの確認が必要",
                      hh: "3,300円〜（当サイト掲載値。最新価格は公式サイトで要確認）",
                    },
                    {
                      item: "メンテナンス頻度",
                      ap: "訪問メンテナンスなし（自分で水やり・管理）",
                      clas: "メンテナンス不要プランあり。訪問頻度の公表値は未確認のため要確認",
                      hh: "なし（購入後は自分で管理。育て方のサポートあり）",
                    },
                    {
                      item: "交換対応の有無",
                      ap: "14日間の交換保証",
                      clas: "交換・返却が可能",
                      hh: "交換条件は公式サイトで要確認",
                    },
                    {
                      item: "対応エリア",
                      ap: "宅配便で全国（北海道・沖縄・離島は追加送料または配送対象外の場合あり）",
                      clas: "公式サイトで要確認",
                      hh: "宅配便で配送（北海道・沖縄・離島は追加送料の場合あり）",
                    },
                    {
                      item: "法人利用",
                      ap: "公式サイトで要確認",
                      clas: "法人利用に対応",
                      hh: "法人向けサービスあり（請求書払いに対応）",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5] align-top">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.ap}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.clas}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.hh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-4">
              ※ 金額はいずれも当サイトが公式サイトで確認できた値のみを記載しています。確認日を併記していない値は掲載時点の情報のため、申し込み前に各公式サイトで最新の料金・条件をご確認ください。当サイトでは架空の金額・独自の推計値は掲載していません。
            </p>
            <p className="text-xs text-[#999] leading-relaxed mt-2">
              ※ 金額が何で変わるのか、初期費用と月額の内訳、予算から選ぶときの考え方は
              <a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] underline mx-1">観葉植物のサブスク・レンタル料金の考え方</a>
              で解説しています。オフィス・店舗への導入手順、メンテナンス込みの可否、対応エリアの確認方法は
              <a href="/guides/houjin-office/" className="text-[#4A7C59] underline mx-1">法人・オフィス向けガイド</a>
              に、公式確認値と確認日を付記してまとめています。
            </p>
          </div>
        </section>

        {/* ─── Head-to-head comparison ─── */}
        <section id="vs" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              サービス同士の直接比較と選び分け
            </h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              3社は仕組みが異なるため、当サイトでは優劣ではなく、利用者に合う仕組みかどうかを基準に比較しています。上の比較表の項目にもとづき、2社ずつ対比します。
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "AND PLANTS × CLAS｜買って育てるか、借りて任せるか",
                  left: {
                    name: "AND PLANTS",
                    points: [
                      "購入型。届いた植物は自分のものになる",
                      "定期便1,980円〜（送料込み・都度払い／2026年7月3日公式確認）",
                      "14日間の交換保証",
                      "宅配便で全国（一部地域は追加送料・対象外の場合あり）",
                    ],
                  },
                  right: {
                    name: "CLAS",
                    points: [
                      "レンタル型。大型の観葉植物も借りられる",
                      "月額レンタル制（月額の公表値は未確認・見積もりで確認）",
                      "交換・返却が自由／メンテナンス不要プランあり",
                      "法人利用に対応",
                    ],
                  },
                  verdict: "長く同じ植物を育てたい場合や、費用を公開値で把握したい場合はAND PLANTSが適しています。水やりや入れ替えを任せたい場合、大型グリーンを置きたい場合、法人で導入する場合はCLASが適しています。",
                },
                {
                  title: "AND PLANTS × HitoHana｜おまかせで届くか、自分で選んで買うか",
                  left: {
                    name: "AND PLANTS",
                    points: [
                      "プロが選んだ育てやすい植物が定期的に届く",
                      "初心者向けの選定オプション・育て方の説明書付き",
                      "切り花プランとの併用が可能",
                      "定期便1,980円〜（送料込み／2026年7月3日公式確認）",
                    ],
                  },
                  right: {
                    name: "HitoHana",
                    points: [
                      "単品購入。品揃えから自分で種類・サイズを選ぶ",
                      "3,300円〜（当サイト掲載値・最新価格は要確認）",
                      "ギフト対応あり／育て方のサポートあり",
                      "定期的に届く仕組みではない",
                    ],
                  },
                  verdict: "何を置くか決まっていない場合や、選定を任せたい場合はAND PLANTSが適しています。置きたい種類やサイズが決まっている場合や、贈り物にしたい場合はHitoHanaが適しています。",
                },
                {
                  title: "CLAS × HitoHana｜借りて入れ替えるか、買い切って長く置くか",
                  left: {
                    name: "CLAS",
                    points: [
                      "レンタルのため返却・交換ができる",
                      "メンテナンス不要プランあり（訪問頻度は要確認）",
                      "支払いは利用している間ずっと続く",
                      "法人利用に対応",
                    ],
                  },
                  right: {
                    name: "HitoHana",
                    points: [
                      "買い切りのため、支払いは購入時のみ",
                      "返却・交換の仕組みは公式サイトで要確認",
                      "管理は自分で行う",
                      "法人向けサービスあり（請求書払いに対応）",
                    ],
                  },
                  verdict: "模様替えや入れ替えを前提にする場合はCLAS、置き場所と種類が決まっていて長く置く場合はHitoHanaが適しています。判断に迷う場合は、レンタル月額の見積もりを取り「購入価格÷月額」で何か月分に相当するかを比べると決めやすくなります。",
                },
              ].map((v, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                  <h3 className="text-base font-bold text-[#333] mb-4">{v.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[v.left, v.right].map((s, si) => (
                      <div key={si} className="rounded-lg bg-[#F8F8F8] p-4 border border-[#E5E5E5]">
                        <p className="text-sm font-bold text-[#4A7C59] mb-2">{s.name}</p>
                        <ul className="space-y-1.5">
                          {s.points.map((p, pi) => (
                            <li key={pi} className="text-xs text-[#666] leading-relaxed">・{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed mt-4 pt-4 border-t border-[#E5E5E5]">
                    <strong className="text-[#333]">選び分け：</strong>{v.verdict}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-5">
              ※ 対比に使用した項目は、上の比較表と同じく当サイトで確認できた情報に限っています。未確認の項目は「要確認」と明記し、推測による補完は行っていません。
            </p>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクを選ぶ際の3つのポイント
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "置き場所に合ったサイズを選ぶ", text: "デスクや棚に置くならミニサイズ（15〜30cm）、リビングに飾るならミディアム（50〜100cm）、シンボルツリーなら大型（100cm以上）が目安です。サブスクで届く植物のサイズを事前にご確認ください。" },
                { num: "2", title: "日当たりの条件を確認する", text: "窓際で日光が入る部屋なら選択肢は豊富ですが、日当たりの悪い部屋でも育つ耐陰性の強い植物（ポトス、サンスベリア、モンステラなど）もあります。部屋の日当たり条件に合った植物が届くサービスを選ぶことをおすすめします。" },
                { num: "3", title: "交換・保証制度を確認する", text: "初心者の方は植物を枯らしてしまう可能性があります。AND PLANTSの14日間交換保証のように、万が一枯れた場合のサポートがあるサービスを選ぶと、安心して始められます。" },
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
            <p className="text-sm text-[#666] leading-relaxed mt-5">
              置き場所の明るさの見極め方、水やりの頻度、季節ごとの管理、枯らさないための確認事項は
              <a href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の育て方・置き場所ガイド</a>
              で解説しています。育て方の条件が決まると、選ぶべきサービスも絞り込みやすくなります。
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクに関するよくある質問
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
            <div className="mt-6 rounded-xl border border-[#E5E5E5] bg-white p-5">
              <p className="text-sm font-bold text-[#333] mb-2">目的別の関連ページ</p>
              <ul className="space-y-2 text-sm text-[#666] leading-relaxed">
                <li>・置き場所・日当たり・水やりなど<strong>育て方</strong>を知りたい：<a href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物の育て方・置き場所ガイド</a></li>
                <li>・<strong>料金の決まり方・予算の立て方</strong>を知りたい：<a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] underline">観葉植物のサブスク・レンタル料金の考え方</a></li>
                <li>・オフィス・店舗への<strong>導入手順</strong>を知りたい：<a href="/guides/houjin-office/" className="text-[#4A7C59] underline">法人・オフィス向けガイド</a></li>
                <li>・切り花の<strong>定期便の料金</strong>を比べたい：<a href="/compare/ryokin/" className="text-[#4A7C59] underline">花のサブスク料金比較</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：観葉植物サブスクにはAND PLANTSをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              観葉植物のサブスクの主な利点は、切り花と比べて手入れの負担が少なく、長く楽しめることです。初心者の方には、当サイトでは<strong>AND PLANTS</strong>を最もおすすめしています。プロが選んだ育てやすい植物が届き、14日間の交換保証もあるため、安心して始められます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクと観葉植物サブスクを併用すると、グリーンの落ち着いた雰囲気と花の華やかさの両方を楽しめます。まずは一つのサービスから試し、植物のある暮らしをご検討ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/and-plants" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                AND PLANTSの詳細を見る
              </a>
              <a href="/services/medelu" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                花のサブスク medeluを見る
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
