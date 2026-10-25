"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "切り花はどのくらい持ちますか？",
    a: "花の種類・季節・室温・お手入れによって異なるため、当サイトでは一律の日数を示していません。水切り・水替え・延命剤の使用を組み合わせると、花の状態を保ちやすくなります。",
  },
  {
    q: "延命剤がないときの代わりになるものはありますか？",
    a: "家庭にあるもので代用できます。漂白剤を水1リットルに対して1〜2滴入れると、バクテリアの繁殖を抑えられます。また、砂糖を小さじ1杯ほど加えると花に栄養を補給できます。10円玉を花瓶に入れる方法も知られていますが、銅イオンの殺菌効果は限定的なため、漂白剤のほうが効果があります。",
  },
  {
    q: "花のサブスクで届いた花はどのくらい持ちますか？",
    a: "サブスクで届く花は産地直送や市場からの仕入れ直後で鮮度が高い場合が多く、適切にお手入れすれば1週間〜10日ほど楽しめます。届いたらすぐに水切りをして花瓶に生けること、毎日の水替えを欠かさないことが、長持ちさせるうえで重要です。延命剤が同封されている場合は必ずご使用ください。",
  },
  {
    q: "花瓶の大きさはどう選べばいいですか？",
    a: "花の丈の約1/3〜1/2が花瓶に収まる高さが目安です。サブスクで届く花束は3〜6本程度が多いため、高さ15〜20cm・口径5〜8cmの花瓶が使いやすいサイズです。口が広すぎると花が広がってまとまらず、狭すぎると茎が窮屈になるため、花の本数に合った口径をお選びください。",
  },
  {
    q: "夏場に花を長持ちさせるコツはありますか？",
    a: "夏場は水温が上がりバクテリアが繁殖しやすいため、水替えを1日2回に増やすことをおすすめします。氷を数個入れて水温を下げる方法もあります。エアコンの風が直接当たらない涼しい場所に置き、直射日光を避けてください。また、水の量をやや少なめにして、水に浸かって傷みやすい茎の部分を減らすことも有効です。",
  },
  {
    q: "100円ショップの花瓶でも大丈夫ですか？",
    a: "問題ありません。100円ショップには、ガラス製・陶器風など、花を生けるのに十分な品質の花瓶がそろっています。サブスクで届く3〜5本程度の花であれば、100円ショップの花瓶で十分です。小さな花瓶を複数用意しておくと、花を1〜2本ずつ分けて飾ることもできます。",
  },
  {
    q: "届いた花をドライフラワーにできますか？",
    a: "はい、多くの花はドライフラワーにできます。バラ、かすみ草、スターチス、千日紅、ユーカリなどは特にドライフラワーに適しています。花が傷む前に逆さに吊るすハンギング法が最も手軽です。完全に乾燥するまで1〜2週間かかります。ただし、ガーベラやチューリップなど水分の多い花はドライフラワーに適していません。",
  },
  {
    q: "水切りは毎日したほうがいいですか？",
    a: "毎日行う必要はありませんが、2〜3日に1回は水切りを行うことをおすすめします。水替えの際にあわせて行うと効率的です。茎の切り口にぬめりや変色がある場合は、すぐに水切りを行ってください。切れ味のよいハサミや花ばさみを使い、斜めにカットすることで水の吸い上げがよくなります。",
  },
];

/* ─── Tips Data ─── */
const tipsData = [
  {
    number: 1,
    title: "水切り（みずきり）で吸水力を回復させる",
    description:
      "花が届いたら、まず茎の先端を水の中で斜めにカットします。これを「水切り」と呼びます。空気中で切ると切り口に気泡が入り、水の吸い上げを妨げます。水中で切ることで気泡の侵入を防ぎ、吸水力を回復させることができます。",
    points: [
      "水を張ったボウルやバケツの中で茎を切る",
      "切れ味のよいハサミまたは花ばさみを使う",
      "茎を斜めにカットして断面積を広くする",
      "切り口から2〜3cmの位置でカットする",
    ],
  },
  {
    number: 2,
    title: "毎日の水替えでバクテリアを防ぐ",
    description:
      "花瓶の水は毎日取り替えることが望ましいです。水が汚れるとバクテリアが繁殖し、茎の導管を詰まらせて水の吸い上げを阻害します。水替えの際は花瓶の内側もスポンジで洗い、ぬめりを取り除いてください。",
    points: [
      "毎日新しい水に取り替える",
      "花瓶の内側を洗ってぬめりを除去する",
      "水温は常温（冷たすぎない水）が適切",
      "水の量は茎が5cm以上浸かる程度",
    ],
  },
  {
    number: 3,
    title: "延命剤（えんめいざい）を活用する",
    description:
      "延命剤には、花に必要な糖分と、バクテリアの繁殖を抑える抗菌成分が含まれています。サブスクで届く花に同封されていることが多いため、必ずご使用ください。延命剤を使うと、使わない場合に比べて花の寿命が2〜3日延びることもあります。",
    points: [
      "サブスクに同封の延命剤は必ず使う",
      "パッケージ記載の分量を守る（入れすぎは逆効果）",
      "延命剤を入れた場合も2〜3日に1回は水替えする",
      "市販品はホームセンターや100円ショップで購入できる",
    ],
  },
  {
    number: 4,
    title: "直射日光とエアコンの風を避けて置く",
    description:
      "花は直射日光に当たると温度が上がり、急速にしおれます。また、エアコンの風が直接当たる場所は乾燥が進むため避けてください。窓際に飾る場合は、レースカーテン越しの間接光が適しています。",
    points: [
      "直射日光が当たらない明るい場所に置く",
      "エアコンの吹き出し口の近くは避ける",
      "玄関や廊下など涼しい場所も適している",
      "テレビやパソコンなど熱源の近くも避ける",
    ],
  },
  {
    number: 5,
    title: "室温を管理して花の寿命を延ばす",
    description:
      "切り花に適した温度は15〜25度です。室温が高いほど花の代謝が活発になり、早くしおれます。夏場は特に注意が必要で、外出中にエアコンを切ると室温が30度以上になることもあります。できるだけ涼しい環境を保ってください。",
    points: [
      "室温15〜25度が花に適した温度",
      "夏場は冷房の効いた部屋に置く",
      "冬場は暖房の風が直接当たらない場所に置く",
      "夜間は気温が下がる玄関に移すのも有効",
    ],
  },
  {
    number: 6,
    title: "不要な葉や傷んだ花びらを取り除く",
    description:
      "水に浸かる部分の葉は必ず取り除きます。葉が水中にあるとバクテリアが繁殖しやすくなり、水が早く汚れます。また、しおれた花びらや枯れた花はエチレンガスを発生させ、周囲の花まで傷めます。",
    points: [
      "水に浸かる位置の葉はすべて除去する",
      "しおれた花びらや枯れた花はすぐに取り除く",
      "傷んだ茎はカットして短くする",
      "余分な枝や葉を整理して風通しをよくする",
    ],
  },
  {
    number: 7,
    title: "花瓶を清潔に保つ",
    description:
      "花瓶が汚れていると、新しい水を入れてもすぐにバクテリアが繁殖します。花を入れ替えるたびに花瓶を中性洗剤で洗い、十分に乾かしてから使用してください。内側に白い水垢がつく場合は、お酢やクエン酸で浸け置き洗いすると落としやすくなります。",
    points: [
      "花を入れ替えるたびに花瓶を洗う",
      "中性洗剤とスポンジでぬめりを落とす",
      "水垢にはお酢やクエン酸を使う",
      "十分に乾燥させてから再利用する",
    ],
  },
];

/* ─── Vase Guide Data ─── */
const vaseSizeData = [
  {
    size: "ミニサイズ（10〜15cm）",
    bestFor: "1〜3本の花、一輪挿し",
    scene: "デスク、洗面台、トイレなど小さなスペース",
    subsc: "medeluのMiniプラン（3〜4本（2026年10月17日公式確認））に適している",
  },
  {
    size: "スタンダード（15〜20cm）",
    bestFor: "3〜5本の花束",
    scene: "リビングのテーブル、玄関、キッチンカウンター",
    subsc: "bloomeeやhanamekuの標準プランに適している",
  },
  {
    size: "トールサイズ（20〜30cm）",
    bestFor: "5〜10本の花束、枝ものを含むアレンジ",
    scene: "リビングの棚、ダイニングテーブル",
    subsc: "AND PLANTSのStandardプラン（6〜8本（2026年10月17日公式確認））に適している",
  },
];

const vaseMaterialData = [
  {
    material: "ガラス製",
    merit: "透明で茎の状態が見える。水の汚れに気づきやすい。さまざまなインテリアに合わせやすい。",
    demerit: "割れやすい。水垢が目立ちやすい。",
    price: "100円〜数千円",
  },
  {
    material: "陶器製",
    merit: "光を遮断するため水温が上がりにくい。安定感がある。インテリア性が高い。",
    demerit: "茎の状態が見えない。重い。",
    price: "数百円〜",
  },
  {
    material: "プラスチック製",
    merit: "軽くて割れにくい。子どもやペットがいる家庭でも使いやすい。安価。",
    demerit: "表面に傷が入りやすく、バクテリアが残りやすい。見た目の質感はほかの素材に劣る。",
    price: "100円〜",
  },
];

/* ─── Main Component ─── */
export default function FlowerCarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"切り花を長持ちさせるお手入れ方法\",\"item\":\"https://ohana-delivery.com/guides/flower-care/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"切り花を長持ちさせるお手入れ方法\",\"description\":\"切り花を長持ちさせるお手入れ方法を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-24T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/flower-care/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"切り花はどのくらい持ちますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花の種類・季節・室温・お手入れによって異なるため、当サイトでは一律の日数を示していません。水切り・水替え・延命剤の使用を組み合わせると、花の状態を保ちやすくなります。\"}},{\"@type\":\"Question\",\"name\":\"延命剤がないときの代わりになるものはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"家庭にあるもので代用できます。漂白剤を水1リットルに対して1〜2滴入れると、バクテリアの繁殖を抑えられます。また、砂糖を小さじ1杯ほど加えると花に栄養を補給できます。10円玉を花瓶に入れる方法も知られていますが、銅イオンの殺菌効果は限定的なため、漂白剤のほうが効果があります。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクで届いた花はどのくらい持ちますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サブスクで届く花は産地直送や市場からの仕入れ直後で鮮度が高い場合が多く、適切にお手入れすれば1週間〜10日ほど楽しめます。届いたらすぐに水切りをして花瓶に生けること、毎日の水替えを欠かさないことが、長持ちさせるうえで重要です。延命剤が同封されている場合は必ずご使用ください。\"}},{\"@type\":\"Question\",\"name\":\"花瓶の大きさはどう選べばいいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花の丈の約1/3〜1/2が花瓶に収まる高さが目安です。サブスクで届く花束は3〜6本程度が多いため、高さ15〜20cm・口径5〜8cmの花瓶が使いやすいサイズです。口が広すぎると花が広がってまとまらず、狭すぎると茎が窮屈になるため、花の本数に合った口径をお選びください。\"}},{\"@type\":\"Question\",\"name\":\"夏場に花を長持ちさせるコツはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"夏場は水温が上がりバクテリアが繁殖しやすいため、水替えを1日2回に増やすことをおすすめします。氷を数個入れて水温を下げる方法もあります。エアコンの風が直接当たらない涼しい場所に置き、直射日光を避けてください。また、水の量をやや少なめにして、水に浸かって傷みやすい茎の部分を減らすことも有効です。\"}},{\"@type\":\"Question\",\"name\":\"100円ショップの花瓶でも大丈夫ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"問題ありません。100円ショップには、ガラス製・陶器風など、花を生けるのに十分な品質の花瓶がそろっています。サブスクで届く3〜5本程度の花であれば、100円ショップの花瓶で十分です。小さな花瓶を複数用意しておくと、花を1〜2本ずつ分けて飾ることもできます。\"}},{\"@type\":\"Question\",\"name\":\"届いた花をドライフラワーにできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、多くの花はドライフラワーにできます。バラ、かすみ草、スターチス、千日紅、ユーカリなどは特にドライフラワーに適しています。花が傷む前に逆さに吊るすハンギング法が最も手軽です。完全に乾燥するまで1〜2週間かかります。ただし、ガーベラやチューリップなど水分の多い花はドライフラワーに適していません。\"}},{\"@type\":\"Question\",\"name\":\"水切りは毎日したほうがいいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"毎日行う必要はありませんが、2〜3日に1回は水切りを行うことをおすすめします。水替えの際にあわせて行うと効率的です。茎の切り口にぬめりや変色がある場合は、すぐに水切りを行ってください。切れ味のよいハサミや花ばさみを使い、斜めにカットすることで水の吸い上げがよくなります。\"}}]}" }} />
        {/* JSONLD_INJECTED_v1 #3 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"切り花を長持ちさせるお手入れ方法\",\"description\":\"切り花を長持ちさせるお手入れの手順を解説します\"}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <a href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#4A4F49]">お役立ちガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#1F2420] font-medium">届いた花を長持ちさせる方法</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/flower-care/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のお手入れガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              届いた花を長持ちさせる7つの方法<br className="hidden md:block" />
              花瓶の選び方からお手入れまで
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクで届いた花を長く楽しむための方法をご説明します。
              当サイトでは、切り花を長持ちさせる7つの方法と、花瓶の選び方、季節ごとの注意点、
              ドライフラワーの作り方までをまとめています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">長持ちさせる方法</p>
                <p className="text-xl font-bold text-[#2F5B43]">7項目</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">花瓶の選び方</p>
                <p className="text-xl font-bold text-[#2F5B43]">サイズ別解説</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">ドライフラワー</p>
                <p className="text-xl font-bold text-[#2F5B43]">作り方を解説</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">本ページの内容</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#tips" className="hover:text-[#2F5B43] transition-colors">1. 切り花を長持ちさせる7つの方法</a></li>
                  <li><a href="#vase-guide" className="hover:text-[#2F5B43] transition-colors">2. 花瓶の選び方ガイド（サイズ別・素材別）</a></li>
                  <li><a href="#vase-subsc" className="hover:text-[#2F5B43] transition-colors">3. サブスクの花に合う花瓶の選び方</a></li>
                  <li><a href="#100yen" className="hover:text-[#2F5B43] transition-colors">4. 100円ショップでそろえる花瓶セット</a></li>
                  <li><a href="#seasonal" className="hover:text-[#2F5B43] transition-colors">5. 季節ごとのお手入れ注意点</a></li>
                  <li><a href="#dried" className="hover:text-[#2F5B43] transition-colors">6. ドライフラワーの作り方</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">7. 花のお手入れに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── 7 Tips Section ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              切り花を長持ちさせる7つの方法
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクで届いた花を長持ちさせるには、日々のお手入れが大切です。
              花を長持ちさせるための7つの方法を紹介します。
            </p>

            <div className="space-y-8">
              {tipsData.map((tip) => (
                <div key={tip.number} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] overflow-hidden">
                  <div className="bg-[#EDF1EC] border-b border-[#C9D6CB] px-5 py-4 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#2F5B43] text-white text-sm font-bold shrink-0">
                      {tip.number}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-[#1F2420]">
                      {tip.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                      {tip.description}
                    </p>
                    <div className="bg-white rounded-lg border border-[#DEDAD2] p-4">
                      <p className="text-xs font-bold text-[#2F5B43] mb-2">実践のポイント</p>
                      <ul className="text-sm text-[#4A4F49] space-y-1.5">
                        {tip.points.map((point, j) => (
                          <li key={j}>・ {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">7つの方法の要点</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                すべてを毎日行う必要はありません。まずは「水切り」と「毎日の水替え」の2つを習慣にすることで、
                花の持ちが変わります。慣れてきた段階で、延命剤の活用や置き場所の工夫も取り入れてください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Vase Guide ─── */}
        <section id="vase-guide" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花瓶の選び方ガイド（サイズ別・素材別）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花をきれいに飾るには、花に合った花瓶を選ぶことが大切です。
              当サイトでは、サイズと素材の2つの観点から花瓶の選び方をご説明します。
            </p>

            {/* Size Guide */}
            <h3 className="text-lg font-bold text-[#1F2420] mb-4">サイズ別ガイド</h3>
            <div className="space-y-4 mb-8">
              {vaseSizeData.map((item, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <h4 className="text-base font-bold text-[#1F2420] mb-3">{item.size}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-[#6B6F6A] block mb-1">向いている花</span>
                      <span className="text-[#4A4F49]">{item.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-[#6B6F6A] block mb-1">おすすめの置き場所</span>
                      <span className="text-[#4A4F49]">{item.scene}</span>
                    </div>
                    <div>
                      <span className="text-[#6B6F6A] block mb-1">サブスクとの相性</span>
                      <span className="text-[#4A4F49]">{item.subsc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Material Guide */}
            <h3 className="text-lg font-bold text-[#1F2420] mb-4">素材別ガイド</h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden" style={{ minWidth: "560px" }}>
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">素材</th>
                    <th className="px-4 py-3 text-left font-medium">メリット</th>
                    <th className="px-4 py-3 text-left font-medium">デメリット</th>
                    <th className="px-4 py-3 text-left font-medium">価格帯</th>
                  </tr>
                </thead>
                <tbody>
                  {vaseMaterialData.map((item, i) => (
                    <tr key={i} className="border-t border-[#DEDAD2]">
                      <td className="px-4 py-4 font-bold text-[#1F2420] whitespace-nowrap">{item.material}</td>
                      <td className="px-4 py-4 text-[#4A4F49]">{item.merit}</td>
                      <td className="px-4 py-4 text-[#4A4F49]">{item.demerit}</td>
                      <td className="px-4 py-4 text-[#4A4F49] whitespace-nowrap">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-md border border-[#DEDAD2] p-5">
              <h4 className="text-sm font-bold text-[#1F2420] mb-2">初めての方へのおすすめ</h4>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                選択に迷う場合は、まず透明なガラス製の花瓶を1つご用意ください。茎の状態や水の汚れがひと目でわかるため、
                お手入れの時期を判断しやすく、花のお手入れに慣れるのに適しています。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Vase for Subscription ─── */}
        <section id="vase-subsc" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              サブスクの花に合う花瓶の選び方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクは、サービスやプランによって届く花の本数や丈が異なります。
              利用しているサービスに合った花瓶を選ぶことで、花の見栄えがよくなります。
            </p>

            <div className="space-y-4">
              {/* bloomee / medelu mini */}
              <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    ポスト投函型
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">bloomee・medelu Miniプランなど（3〜4本）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      ポスト投函で届く花は茎が短めにカットされています。高さ10〜15cmのミニ花瓶や一輪挿しが適しています。
                      口径3〜5cmの細めのものを選ぶと、少ない本数でもまとまりよく飾ることができます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#2F5B43] font-bold">高さ10〜15cm</span>
                      <span className="text-[#6B6F6A]">口径3〜5cm</span>
                      <span className="text-[#6B6F6A]">一輪挿しも可</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* hanameku / bloomee regular */}
              <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    中量タイプ
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">medelu Lite・bloomeeお試しプランなど（4〜6本）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      標準的な花束に合うスタンダードサイズの花瓶をおすすめします。高さ15〜20cmで口径5〜8cm程度のものを選ぶと、
                      花束をそのまま入れても窮屈にならず、バランスよく飾ることができます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#2F5B43] font-bold">高さ15〜20cm</span>
                      <span className="text-[#6B6F6A]">口径5〜8cm</span>
                      <span className="text-[#6B6F6A]">テーブル向き</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    ボリューム型
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">AND PLANTSなど（6〜8本（2026年10月17日公式確認）・茎長め）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      宅配便で届く花は茎が長いまま届くことが多いため、高さ20〜30cmのトールサイズの花瓶が適しています。
                      口径は6〜10cm程度で、底が広く安定したタイプを選ぶと倒れにくくなります。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#2F5B43] font-bold">高さ20〜30cm</span>
                      <span className="text-[#6B6F6A]">口径6〜10cm</span>
                      <span className="text-[#6B6F6A]">安定感重視</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 100 Yen Shop Section ─── */}
        <section id="100yen" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              100円ショップでそろえる花瓶セット
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花瓶に高い費用をかける必要はありません。ダイソーやセリアなどの100円ショップには、
              花を飾るのに十分な商品がそろっています。合計500円程度で基本のセットをそろえられます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-md border border-[#DEDAD2] p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">基本の花瓶セット（税込550円）</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>・ ガラス製ミニ花瓶（高さ約15cm）... 110円</li>
                  <li>・ 一輪挿し（高さ約10cm）... 110円</li>
                  <li>・ 花ばさみ（園芸用ハサミ）... 110円</li>
                  <li>・ 霧吹きスプレー ... 110円</li>
                  <li>・ スポンジ（花瓶洗い用）... 110円</li>
                </ul>
              </div>

              <div className="bg-white rounded-md border border-[#DEDAD2] p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">あると便利な追加の道具</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>・ トールグラス（高さ約20cm）... 110円</li>
                  <li>・ 延命剤（切花長もち液）... 110円</li>
                  <li>・ 小さなバケツ（水切り用）... 110円</li>
                  <li>・ 麻ひも（ドライフラワー用）... 110円</li>
                  <li>・ クエン酸（花瓶の水垢落とし）... 110円</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#EDF1EC] rounded-md p-5">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-2">100円ショップの花瓶の活用方法</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                100円ショップの花瓶は小さめのものが多いため、サブスクで届いた花を小分けにして複数の花瓶に飾ることをおすすめします。
                リビング、玄関、洗面台など、家の複数の場所に1〜2本ずつ飾ると、少ない本数でも部屋全体が華やかになります。
                ジュースのガラス瓶やマグカップを花瓶の代わりに使うこともできます。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Seasonal Tips ─── */}
        <section id="seasonal" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              季節ごとのお手入れ注意点
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              切り花の寿命は季節によって大きく変わります。
              特に夏は注意が必要です。季節ごとの対策を把握しておくと、年間を通じて花を長く楽しめます。
            </p>

            <div className="space-y-5">
              {/* Spring */}
              <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    春（3〜5月）
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">花が最も長持ちしやすい季節</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      気温15〜20度前後の時期です（AND PLANTSは室温の目安を15〜20℃ほどと案内しています。2026年10月24日公式確認）。基本のお手入れ（水切り・水替え）を続けてください。
                      チューリップやスイートピーなど春の花は茎が柔らかいため、
                      水の量をやや少なめ（茎の3〜5cm）にすると茎が傷みにくくなります。
                    </p>
                    <div className="bg-white rounded-lg border border-[#DEDAD2] p-3">
                      <p className="text-xs text-[#6B6F6A]">春の注意点</p>
                      <p className="text-sm text-[#4A4F49]">花粉が多い季節のため、花粉症の方はユリなどの花粉が飛びやすい花には注意してください。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summer */}
              <div className="bg-[#F7F1EC] rounded-md border-2 border-[#E3D3C8] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#DC2626] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    夏（6〜8月） 注意
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">花が最も傷みやすく、対策が必要な季節</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      気温30度を超える夏場は、花の寿命が通常の半分以下になることもあります。
                      水温が上がるとバクテリアが急速に増殖し、茎の導管を詰まらせます。
                      夏は他の季節以上にこまめなケアが必要です。
                    </p>
                    <div className="bg-white rounded-lg border border-[#E3D3C8] p-4">
                      <p className="text-xs font-bold text-[#DC2626] mb-2">夏に必要な対策</p>
                      <ul className="text-sm text-[#4A4F49] space-y-1.5">
                        <li>・ 水替えは1日2回（朝・夜）に増やす</li>
                        <li>・ 氷を2〜3個入れて水温を下げる</li>
                        <li>・ 水の量は少なめ（茎の3cm程度）にする</li>
                        <li>・ 延命剤は必ず使用する</li>
                        <li>・ 冷房の効いた部屋に置く（ただし風は直接当てない）</li>
                        <li>・ 外出中もエアコンを弱く運転しておくことが望ましい</li>
                        <li>・ 帰宅後、水がぬるくなっていたらすぐに替える</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Autumn */}
              <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    秋（9〜11月）
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">花持ちが回復する過ごしやすい季節</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      気温が下がり始め、花にとっても過ごしやすい季節です。春と同様に、基本のお手入れで十分に長持ちします。
                      9月は残暑が厳しい日もあるため、9月中は夏の対策を続けることをおすすめします。
                      秋の花（コスモス、ダリアなど）はドライフラワーにしやすいものが多いのも特徴です。
                    </p>
                    <div className="bg-white rounded-lg border border-[#DEDAD2] p-3">
                      <p className="text-xs text-[#6B6F6A]">秋の注意点</p>
                      <p className="text-sm text-[#4A4F49]">暖房を使い始める時期は、暖房の風が花に直接当たらないようご注意ください。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Winter */}
              <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    冬（12〜2月）
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">花が最も長持ちする季節</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                      気温が低い季節です。AND PLANTSは生花を「寒さに強く、暑さに弱い」と案内しています（2026年10月24日公式確認）。ただし、暖房の効いた部屋は乾燥しやすいため、
                      暖房器具の近くには置かないでください。
                    </p>
                    <div className="bg-white rounded-lg border border-[#DEDAD2] p-3">
                      <p className="text-xs text-[#6B6F6A]">冬の注意点</p>
                      <p className="text-sm text-[#4A4F49]">暖房の風が当たる場所は避けてください。また、窓際は夜間に冷えすぎる場合があるため、凍結にご注意ください。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Dried Flowers ─── */}
        <section id="dried" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ドライフラワーの作り方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              サブスクで届いた花は、しおれる前にドライフラワーにすることで長期間楽しめます。
              生花として1週間、ドライフラワーとして数か月楽しめるため、1回の配送で2通りの楽しみ方ができます。
            </p>

            {/* Method */}
            <h3 className="text-lg font-bold text-[#1F2420] mb-4">ハンギング法（逆さ吊り）：最も簡単な方法</h3>
            <div className="bg-white rounded-md border border-[#DEDAD2] p-5 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="text-sm font-bold text-[#1F2420]">花が傷む前に取り出す</p>
                    <p className="text-sm text-[#4A4F49]">完全にしおれてからでは、きれいに仕上がりません。花が7〜8分咲きの状態のときが適しています。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="text-sm font-bold text-[#1F2420]">余分な葉を取り除く</p>
                    <p className="text-sm text-[#4A4F49]">葉が多いと乾燥に時間がかかり、カビの原因になります。必要最低限の葉だけを残してください。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="text-sm font-bold text-[#1F2420]">1本ずつ逆さに吊るす</p>
                    <p className="text-sm text-[#4A4F49]">麻ひもや輪ゴムで茎を留め、風通しのよい日陰に逆さに吊るします。複数本を束ねて吊るすと内部が乾きにくいため、1本ずつ吊るすことをおすすめします。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="text-sm font-bold text-[#1F2420]">1〜2週間で完成</p>
                    <p className="text-sm text-[#4A4F49]">花の種類や湿度によって異なりますが、1〜2週間で完全に乾燥します。触って乾いた手触りになっていれば完成です。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suitable flowers */}
            <h3 className="text-lg font-bold text-[#1F2420] mb-4">ドライフラワーに向く花・向かない花</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <h4 className="text-sm font-bold text-[#2F5B43] mb-3">向いている花</h4>
                <ul className="text-sm text-[#4A4F49] space-y-1.5">
                  <li>・ バラ（特に濃い色のもの）</li>
                  <li>・ かすみ草</li>
                  <li>・ スターチス</li>
                  <li>・ 千日紅</li>
                  <li>・ ユーカリ</li>
                  <li>・ ラベンダー</li>
                  <li>・ アジサイ（秋色アジサイ）</li>
                  <li>・ ミモザ</li>
                </ul>
              </div>
              <div className="bg-[#F7F1EC] rounded-md p-5 border border-[#E3D3C8]">
                <h4 className="text-sm font-bold text-[#1F2420] mb-3">向かない花</h4>
                <ul className="text-sm text-[#4A4F49] space-y-1.5">
                  <li>・ ガーベラ（水分が多く縮む）</li>
                  <li>・ チューリップ（花びらが落ちやすい）</li>
                  <li>・ スイートピー（薄く崩れやすい）</li>
                  <li>・ トルコキキョウ（変色しやすい）</li>
                  <li>・ ユリ（花びらが重く形が崩れる）</li>
                  <li>・ 菊（カビが生えやすい）</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-md border border-[#DEDAD2] p-5">
              <h4 className="text-sm font-bold text-[#1F2420] mb-2">ドライフラワーの飾り方と保存方法</h4>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                完成したドライフラワーは、直射日光を避け、湿気の少ない場所に飾ってください。
                花瓶に挿す、壁に吊るす、リースにアレンジするなど、さまざまな飾り方ができます。
                ヘアスプレーを軽く吹きかけておくと、花びらの落下を防げます。
                保存期間は環境によって異なりますが、おおよそ3か月〜半年ほど楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のお手入れに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F6F4EF] hover:bg-[#EDF1EC] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#1F2420] pr-4">
                      Q. {item.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#6B6F6A] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white">
                      <p className="text-sm text-[#4A4F49] leading-relaxed">
                        A. {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              基本のお手入れで花を長く楽しめます
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花を長持ちさせるために最も大切なのは、「水切り」と「毎日の水替え」です。
              この2つを習慣にすることで、花の寿命は延びます。
              延命剤の活用、置き場所の工夫、季節に合わせたお手入れを加えると、さらに長く楽しめます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花瓶は、利用しているサブスクのプランに合ったサイズをお選びください。
              100円ショップでそろえれば、初期費用はわずかです。
              しおれる前にドライフラワーにすると、1回の配送で生花とドライフラワーの2通りの楽しみ方ができます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクは定期的に新しい花が届くため、お手入れが習慣として定着しやすくなります。
              これからサブスクを始める方には、まず手頃なプランから試すことをおすすめします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/compare/cheap"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                花のサブスクを安い順に比較する
              </a>
              <a
                href="/guides/beginner"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                初心者向けガイドを見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
            >
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

              <p className="text-xs text-gray-400">
                花のサブスクを比較し、ご自身に合ったサービス選びを支援します。
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                トップページ
              </a>
              <a href="/#comparison" className="hover:text-white transition-colors">
                比較表
              </a>
              <a href="/#reviews" className="hover:text-white transition-colors">
                サービス詳細
              </a>
              <a href="/#faq" className="hover:text-white transition-colors">
                よくある質問
              </a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">
              当サイトはアフィリエイトプログラムに参加しています。
              リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。
            </p>
            <p className="text-xs text-gray-500 mt-2">
              掲載情報は2026年4月時点のものです。ご利用前に、各公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}
