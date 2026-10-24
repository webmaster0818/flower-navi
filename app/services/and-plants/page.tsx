"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import { findReviewEvidence } from "@/data/reviewEvidence";
import { CompareSection, OfficialPlans, ReviewEvidence, ReviewVerdict } from "@/app/components/ReviewEvidence";
import PageHero from "@/app/components/PageHero";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "andplants")!;
const RE = findReviewEvidence("andplants");

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "AND PLANTS（アンドプランツ）の口コミ・評判はどうですか？",
    a: "口コミの大半は観葉植物の購入者によるもので、「梱包が丁寧」「植物の状態が良い」「発送前に写真で確認できる」「鉢がおしゃれ」といった点が評価されています。一方で、「価格がやや高い」「品切れがある」「コバエ・茎折れ・鉢の割れ」の報告もあります。花の定期便については、実際に注文した記事で「傷や折れがなく届いた」「咲きかけの花が数日で満開になった」と状態の良さが評価される一方、「次回の決済前に解約・スキップの手続きが必要」「イメージよりボリュームが少ない」という声もあります（2026年10月15日確認）。",
  },
  {
    q: "アンドプランツの悪い評判で多い内容は何ですか？",
    a: "レビュー記事で繰り返し挙げられているのは、①ほかの通販より価格がやや高い、②人気品種の品切れ、③コバエの発生や配送時の茎折れ・鉢の割れ、の3点です。花の定期便では、生花の交換申請の期限が到着後1日以内と短い点にご注意ください。",
  },
  {
    q: "AND PLANTSの花の定期便の料金はいくらですか？",
    a: "2026年10月14日に公式サイトで確認した料金は、スタンダード1,980円（6〜8本）、ミディアム2,980円（8〜10本）、ラージ4,980円（14〜18本）で、いずれも1回あたり送料込みの表記です（クール便オプションは別料金）。",
  },
  {
    q: "AND PLANTSの花の定期便に回数縛りはありますか？",
    a: "公式ページに「解約もいつでも可能」との記載があり、最低回数や解約料の記載はありません。なお、スキップは決済完了前の注文に限られ、決済はお届けの約1週間前に行われます。",
  },
  {
    q: "AND PLANTSのお花が傷んで届いた場合はどうすればいいですか？",
    a: "公式の返品・交換規定では、生花（定期便を含む）は到着後1日以内に写真を添えてメールまたはLINEで連絡すると交換の対象になります。観葉植物・グッズは14日以内です。",
  },
  {
    q: "AND PLANTSはどのくらいの頻度で届きますか？",
    a: "1週間に1回、2週間に1回、4週間に1回から選べます。届く曜日は金〜日曜から選択できます（エリアにより異なります）。",
  },
  {
    q: "AND PLANTSの初回クーポンはありますか？",
    a: "花の定期便ページに「初回500円オフクーポンあり」の案内があります。別途、公式LINEを友だち追加してアンケートに回答すると500円OFFクーポンがもらえるという案内もあります（2026年10月15日確認）。適用条件は申込画面でご確認ください。",
  },
  {
    q: "AND PLANTSの花の定期便の支払い方法を教えてください。",
    a: "公式の花の定期便ページでは、クレジットカード・PayPal・Google Pay・Shop Payが案内されています。月額ではなく、お届けの約1週間前にその回の分が決済される都度払いです（2026年10月15日確認）。",
  },
  {
    q: "夏でも花は傷まずに届きますか？",
    a: "公式ページでは、配送先の気温を見て主に真夏・真冬にクール便を適用すると案内されています（クール便は別途有料。料金は公式ページに記載なし）。生花の交換申請は到着後1日以内のため、届いたらすぐに状態をご確認ください（2026年10月15日確認）。",
  },
  {
    q: "AND PLANTSの花の定期便はプレゼントにできますか？",
    a: "配送先をギフトのお相手、請求先をご自身の住所にすれば贈ることができます。ただし、定期便にはラッピングとメッセージカードは付けられません（2026年10月15日 公式ページで確認）。",
  },
  {
    q: "届く曜日は選べますか？",
    a: "エリアにより異なりますが、金曜日〜日曜日から選べます。2回目以降は初回と同じ曜日のお届けになります（2026年10月15日 公式ページで確認）。",
  },
  {
    q: "AND PLANTSとAND FLOWERの違いは何ですか？",
    a: "どちらも株式会社Domuzのブランドです。2026年5月から花の事業が「AND FLOWER」として展開され、観葉植物は「AND PLANTS」で販売されています。花の定期便のページは現在もandplants.jp配下にあります。",
  },
  {
    q: "楽天市場でのアンドプランツの評価はどのくらいですか？",
    a: "楽天市場の公式ショップ「【公式】アンドプランツ」のショップ評価は4.77（756件）です（2026年10月20日確認）。観葉植物を中心としたショップ全体の評価で、花の定期便だけの評価ではありません。また、多くの商品ページに「レビュー特典あり」の表示があります。",
  },
  {
    q: "アンドプランツの口コミはどこで確認できますか？",
    a: "件数が表示されている掲載先は、楽天市場の公式ショップ「【公式】アンドプランツ」（ショップ評価4.77・756件）と、花を単品で注文できる公式アプリ「アンドフラワー」の App Store 評価（4.6・33件）です（いずれも2026年10月20日確認）。どちらも花の定期便だけの評価ではありません。花の定期便については、実際に注文したレビュー記事（花と私 など）で、届いた本数や梱包の状態が記録されています。",
  },
  {
    q: "定期便を申し込まずにAND FLOWERの花を買えますか？",
    a: "公式アプリ「ANDFLOWER」で単品の注文ができます。公式の案内ページでは、1,980円から（送料無料の表記）、季節の花の新商品を日替わりで発売、到着日を複数の候補から選択可能、沖縄と離島は対象外とされています。到着時に枯れていた場合は、写真を用意してアプリの「お問い合わせ」から連絡すると交換または返金の対象です（2026年10月17日 公式ページで確認）。",
  },
];



/* ─── Main Component ─── */
export default function AndPlantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"AND PLANTS（アンドプランツ）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"AND PLANTS（アンドプランツ）\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/and-plants/\"}" }} />
      {/* CANCEL_FLOW_SCHEMA_v1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"AND PLANTS（アンドプランツ）の解約手順\",\"description\":\"AND PLANTS（アンドプランツ）の解約方法を手順ごとにご説明します\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログインする\",\"text\":\"AND PLANTS公式サイトのマイページからログインします。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「定期便管理」を選択する\",\"text\":\"マイページから定期便管理画面に進みます。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「定期便を解約する」をクリックする\",\"text\":\"画面の指示に従って解約手続きに進みます。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"解約理由を選択する（任意）\",\"text\":\"アンケートへの回答は任意です。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"「解約を確定する」をクリック\",\"text\":\"次回分の決済（お届けの約1週間前）より前に手続きを完了してください。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"確認メールを受信する\",\"text\":\"AND PLANTSから解約完了通知メールが届きます。\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/and-plants/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン\",\"description\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プランについて、料金・評判・選び方をご説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-20T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/and-plants/\"}}" }} />
      {/* JSONLD_INJECTED_v1 #2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
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
                  <span className="text-[#4A4F49]">サービス一覧</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#1F2420] font-medium">AND PLANTS（アンドプランツ）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/services/and-plants/" services={[{ slug: "and-plants", name: "AND PLANTS（アンドプランツ）" }]}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜{RE.updatedAt}更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              アンドプランツ（AND PLANTS）の口コミ・評判<br className="hidden md:block" />
              観葉植物と花の定期便の良い口コミ・悪い口コミを検証
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              アンドプランツ（AND PLANTS）の口コミは観葉植物の通販についての声が中心で、楽天市場の公式ショップ評価は4.77（756件・2026年10月20日確認）です。当サイトでは、観葉植物の通販と花の定期便（現「AND FLOWER」）を展開するアンドプランツの口コミ・評判を、出典を明記して整理しています。花の定期便の料金・解約・交換条件は、{S.verifiedAt}に公式サイトで確認した値にもとづいてご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">花の定期便</p>
                <p className="text-xl font-bold text-[#2F5B43]">{S.cheapest.price.toLocaleString()}円/回〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                <p className="text-xl font-bold text-[#2F5B43]">込み</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">回数の条件</p>
                <p className="text-xl font-bold text-[#2F5B43]">なし</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">お届け頻度</p>
                <p className="text-xl font-bold text-[#2F5B43]">1・2・4週ごと</p>
              </div>
            </div>
          </div>
        </PageHero>

        <ReviewVerdict d={RE} s={S} />

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">本ページの内容</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#reviews" className="hover:text-[#2F5B43] transition-colors">1. アンドプランツの口コミ・評判（出典付き）</a></li>
                  <li><a href="#overview" className="hover:text-[#2F5B43] transition-colors">2. AND PLANTSの概要（観葉植物と花の定期便）</a></li>
                  <li><a href="#pricing" className="hover:text-[#2F5B43] transition-colors">3. 花の定期便の料金（公式確認）</a></li>
                  <li><a href="#plants" className="hover:text-[#2F5B43] transition-colors">4. 観葉植物の通販としての特徴</a></li>
                  <li><a href="#pros" className="hover:text-[#2F5B43] transition-colors">5. メリット（良い評判の理由）</a></li>
                  <li><a href="#cons" className="hover:text-[#2F5B43] transition-colors">6. デメリット（悪い評判の理由）</a></li>
                  <li><a href="#recommend" className="hover:text-[#2F5B43] transition-colors">7. おすすめできる方・おすすめできない方</a></li>
                  <li><a href="#comparison" className="hover:text-[#2F5B43] transition-colors">8. ほかの花のサブスクとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#2F5B43] transition-colors">9. 花の定期便の始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">10. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#2F5B43] transition-colors">11. 解約手順</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── User Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <ReviewEvidence d={RE} s={S} />
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTS（アンドプランツ）の概要
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              AND PLANTS（アンドプランツ）は、株式会社Domuz（神奈川県川崎市）が運営する観葉植物の通販サイトです。鉢・プランターとセットで届く観葉植物が中心で、花の定期便もそのサービスの一つとして提供されています。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              2026年5月からは花の事業が「AND FLOWER（アンドフラワー）」ブランドとして展開されていますが、花の定期便のページは現在もandplants.jp配下にあります。「アンドプランツ 口コミ」で見つかる声の多くは観葉植物に関するものであるため、当サイトでは観葉植物と花の定期便を分けて整理しています。
            </p>
            <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">AND PLANTS 基本情報（{S.verifiedAt} 公式確認）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {[
                  ["運営会社", "株式会社Domuz"],
                  ["主な商品", "観葉植物（鉢・植え替え込み）／花の定期便"],
                  ["花の定期便", "1,980円〜（送料込み）"],
                  ["お届け頻度", "1週・2週・4週ごと"],
                  ["届く曜日", "金〜日曜から選択（エリアによる）"],
                  ["解約", "いつでも可能"],
                  ["生花の交換申請", "到着後1日以内"],
                  ["観葉植物の交換", "到着後14日以内"],
                ].map(([k, v]) => (
                  <div key={k} className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">{k}</span>
                    <span className="text-[#1F2420]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTSの花の定期便の料金・送料
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              花の定期便はスタンダード1,980円（6〜8本）、ミディアム2,980円（8〜10本）、ラージ4,980円（14〜18本）で、いずれも送料込みの表記です（クール便オプションは別料金）。定期便ページには初回500円オフクーポンの案内もあります。
            </p>
            <OfficialPlans s={S} />
          </div>
        </section>

        {/* ─── Plants ─── */}
        <section id="plants" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              観葉植物の通販としての特徴（アンドプランツの口コミが多く寄せられている分野）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              アンドプランツの口コミの大半は観葉植物の購入者によるものです。公式サイトで確認できる主な特徴は次のとおりです（2026年10月14日確認）。
            </p>
            <ul className="text-sm md:text-base text-[#3F443E] space-y-2 mb-4">
              <li>・鉢代・植え替え作業代は観葉植物の代金に含まれています（公式トップ）</li>
              <li>・観葉植物S/M/Lサイズは送料無料（北海道・沖縄は＋2,500円）。テーブル・ハンギングサイズの送料は880円です（特定商取引法に基づく表記）</li>
              <li>・観葉植物・グッズは、到着後14日以内であれば写真を添えて交換を相談できます（返品・交換規定）</li>
            </ul>
            <p className="text-sm text-[#4A4F49] leading-relaxed">
              観葉植物を選ぶ際は、料金や他社との違いを<a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#2F5B43] underline">観葉植物の通販・レンタルの料金ガイド</a>や<a href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] underline">観葉植物の比較ページ</a>でもご確認いただけます。
            </p>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTSのメリット（良い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "梱包が丁寧で、良い状態で届く",
                  text: "観葉植物・花ともに「梱包が丁寧」「状態が良い」という声がレビュー記事で多く見られます。",
                },
                {
                  title: "花の定期便は回数の条件がなく、送料込みである",
                  text: "花の定期便は送料込みの1,980円〜で、公式に「解約もいつでも可能」と明記されています。",
                },
                {
                  title: "お届け頻度を1・2・4週から選べる",
                  text: "毎週から4週に1回まで選べるため、飾るペースに合わせて調整できます。",
                },
                {
                  title: "本数が多めである",
                  text: "最安のスタンダードでも6〜8本と、ポスト投函型の花のサブスク（3〜4本前後）より本数が多めです。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#EDF1EC] rounded-md p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-md w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#1F2420] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cons Section ─── */}
        <section id="cons" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#E3D3C8]">
              AND PLANTSのデメリット（悪い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "価格はやや高めである",
                  text: "花の定期便は1,980円〜で、medelu（748円〜）やハナメク（1,210円〜）より高く設定されています。観葉植物についても「価格がやや高い」という口コミがあります。",
                },
                {
                  title: "生花の交換申請は到着後1日以内である",
                  text: "花の定期便を含む生花は、到着後1日以内に写真を添えて連絡する必要があります。届いたらすぐに状態をご確認ください。",
                },
                {
                  title: "スキップは決済前の注文のみ可能である",
                  text: "決済はお届けの約1週間前に行われます。決済が済んだ注文はスキップできません。",
                },
                {
                  title: "品切れや配送トラブルの報告がある",
                  text: "観葉植物では人気品種の品切れや、コバエ・茎折れ・鉢の割れの報告がレビュー記事で挙がっています。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F7F1EC] rounded-md p-5 border border-[#E3D3C8]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#D9BFB1] text-white text-xs font-bold rounded-md w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#1F2420] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommendation Section ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTSをおすすめできる方・おすすめできない方
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#2F5B43] mb-4">おすすめできる方</h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>回数の条件なしで花の定期便を試したい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>1回あたりの本数が多い花束を飾りたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>観葉植物と花をまとめて同じサイトで選びたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>届くペースを1〜4週で調整したい方</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#C08552] mb-4">おすすめできない方</h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#D9BFB1] mt-1 shrink-0">--</span><span>料金を最優先で抑えたい方（medeluやハナメクの方が安価です）</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D9BFB1] mt-1 shrink-0">--</span><span>ポスト投函で受け取りたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D9BFB1] mt-1 shrink-0">--</span><span>届いた花をすぐ確認できない方（生花の交換申請は1日以内）</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <CompareSection s={S} all={SERVICES} note="AND PLANTSの花の定期便は、最安プランの価格が4社で最も高い一方で、本数が多く、回数の条件もありません。料金を重視する場合はmedelu・ハナメク、ポスト投函型の代表的なサービスを選ぶ場合はbloomee、ボリュームと解約のしやすさを重視する場合はAND PLANTSが候補になります。" />

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTSの花の定期便の始め方
            </h2>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "公式の花の定期便ページを開く", text: "AND PLANTS公式サイト（andplants.jp）の花の定期便ページでプランを確認します。" },
                { step: "STEP 2", title: "プランを選択する", text: "スタンダード（1,980円）、ミディアム（2,980円）、ラージ（4,980円）から選びます。" },
                { step: "STEP 3", title: "お届け頻度と曜日を選ぶ", text: "1週・2週・4週ごとから頻度を、金〜日曜からお届け曜日を選びます（エリアによる）。" },
                { step: "STEP 4", title: "クーポンと支払い方法を確認する", text: "初回500円オフクーポンの案内がある場合は適用条件を確認し、支払い方法を登録します。" },
                { step: "STEP 5", title: "届いたらすぐに状態を確認する", text: "生花の交換申請は到着後1日以内です。届いたら早めに開封してご確認ください。" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-md p-5 border border-[#DEDAD2] flex items-start gap-4">
                  <div className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
                    {item.step}
                  </div>
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
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTSに関するよくある質問
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

                {/* CANCEL_FLOW_v1: 解約手順 step-by-step */}
        <section id="cancellation" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              AND PLANTS（アンドプランツ）の解約手順
            </h2>
            <p className="text-sm text-[#4A4F49] mb-6">回数の条件はありません（公式に「解約もいつでも可能」と記載）。決済はお届けの約1週間前に行われるため、それより前に手続きしてください。</p>
            <div className="bg-white rounded-md p-6 md:p-8">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">マイページにログインする</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">AND PLANTS公式サイトのマイページからログインします。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「定期便管理」を選択する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">マイページから定期便管理画面に進みます。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「定期便を解約する」をクリックする</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">画面の指示に従って解約手続きに進みます。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">解約理由を選択する（任意）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">アンケートへの回答は任意です。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「解約を確定する」をクリック</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">次回分の決済（お届けの約1週間前）より前に手続きを完了してください。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">確認メールを受信する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">AND PLANTSから解約完了通知メールが届きます。</p>
                  </div>
                </div>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4 text-center">※ 2026年5月時点の手順です。ご利用前に、AND PLANTS（アンドプランツ）公式サイトにて最新情報をご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              口コミ・評判からみたアンドプランツが適している方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              AND PLANTS（アンドプランツ）は観葉植物の通販が中心で、梱包の丁寧さや植物の状態の良さが口コミで評価されています。花の定期便（現AND FLOWER）は送料込み1,980円〜で6〜8本と本数が多めです。
              回数の条件はなく、公式に「解約もいつでも可能」と記載されているほか、初回500円オフクーポンの案内もあります。お届け頻度は1・2・4週ごとから選べます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、他社と比べて価格がやや高めである点、ポスト投函ではなく宅配で届く点、生花の交換申請の期限が到着後1日以内と短い点にご留意ください。
              費用を重視する場合はmedelu、手軽さを重視する場合はbloomeeもあわせて検討し、ご自身のライフスタイルに合ったサービスをお選びください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                AND PLANTS公式サイトはこちら
              </a>
              <a
                href="/"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                他のサービスと比較する
              </a>
            </div>
          </div>
        </section>

        {/* 関連リンク（第二弾: 文脈内部リンク） */}
        <section className="bg-[#F6F4EF] py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-[#1F2420] mb-5">AND PLANTSに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/service-guides/and-plants-kaiyaku/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">AND PLANTSの解約方法（締切・注意点） →</a>
              <a href="/vs/and-plants-vs-lifft/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">AND PLANTS vs LIFFT 比較 →</a>
              <a href="/vs/medelu-vs-and-plants/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">medelu vs AND PLANTS 比較 →</a>
              <a href="/vs/bloomee-vs-and-plants/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomee vs AND PLANTS 比較 →</a>
              <a href="/compare/cheap/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">安い花のサブスク比較 →</a>
              <a href="/compare/souryou-muryou/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">送料無料で比較 →</a>
              <a href="/guides/beginner/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">花サブスク初心者ガイド →</a>
              <a href="/guides/oshare/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">おしゃれな花サブスク →</a>
              <a href="/services/bloomee/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomeeの口コミ・評判 →</a>
              <a href="/services/medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">medeluの口コミ・評判 →</a>
            </div>
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
              料金・条件は{S.verifiedAt}時点で公式サイトから確認したものです。ご利用前に、各公式サイトにて最新情報をご確認ください。
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
  );
}
