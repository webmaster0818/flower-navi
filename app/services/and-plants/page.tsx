"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import { findReviewEvidence } from "@/data/reviewEvidence";
import { CompareSection, OfficialPlans, ReviewEvidence, ReviewVerdict } from "@/app/components/ReviewEvidence";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "andplants")!;
const RE = findReviewEvidence("andplants");

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "AND PLANTS（アンドプランツ）の口コミ・評判は？",
    a: "口コミの大半は観葉植物の購入者によるもので、「梱包が丁寧」「植物の状態が良い」「発送前に写真で確認できる」「鉢がおしゃれ」が好評です。一方で「価格がやや高い」「品切れがある」「コバエ・茎折れ・鉢の割れ」の報告もあります。花の定期便については、実際に注文した記事で「傷や折れがなく届いた」「咲きかけの花が数日で満開になった」と状態の良さが評価される一方、「次回の決済前に解約・スキップの手続きが必要」「イメージよりボリュームが少ない」という声もあります（2026年10月15日確認）。",
  },
  {
    q: "アンドプランツの悪い評判で多いのは？",
    a: "レビュー記事で繰り返し挙がるのは、①ほかの通販より価格がやや高い②人気品種の品切れ③コバエの発生や配送時の茎折れ・鉢の割れ、の3つです。花の定期便では、生花の交換申請が到着後1日以内と短い点に注意しましょう。",
  },
  {
    q: "AND PLANTSの花の定期便の料金はいくらですか？",
    a: "2026年10月14日に公式サイトで確認した料金は、スタンダード1,980円（6〜8本）、ミディアム2,980円（8〜10本）、ラージ4,980円（14〜18本）で、いずれも1回あたり送料込みの表記です（クール便オプションは別料金）。",
  },
  {
    q: "AND PLANTSの花の定期便に回数縛りはありますか？",
    a: "公式ページに「解約もいつでも可能」と記載があり、最低回数や解約料の記載はありません。スキップは決済完了前の注文に限られ、決済はお届けの約1週間前です。",
  },
  {
    q: "AND PLANTSのお花が傷んで届いた場合はどうすればいいですか？",
    a: "公式の返品・交換規定では、生花（定期便を含む）は到着後1日以内に写真を添えてメールまたはLINEで連絡すると交換の対象になります。観葉植物・グッズは14日以内です。",
  },
  {
    q: "AND PLANTSはどのくらいの頻度で届きますか？",
    a: "1週間に1回、2週間に1回、4週間に1回から選べます。届く曜日は金〜日曜から選択できます（エリアにより異なる）。",
  },
  {
    q: "AND PLANTSの初回クーポンはありますか？",
    a: "花の定期便ページに「初回500円オフクーポンあり」の案内があります。別途、公式LINEを友だち追加してアンケートに回答すると500円OFFクーポンがもらえるという案内もあります（2026年10月15日確認）。適用条件は申込画面で確認してください。",
  },
  {
    q: "AND PLANTSの花の定期便の支払い方法は？",
    a: "公式の花の定期便ページでは、クレジットカード・PayPal・Google Pay・Shop Payが案内されています。月額ではなく、お届けの約1週間前にその回の分が決済される都度払いです（2026年10月15日確認）。",
  },
  {
    q: "夏でも花は傷まずに届きますか？",
    a: "公式ページでは、配送先の気温を見て主に真夏・真冬にクール便を適用すると案内されています（クール便は別途有料。料金は公式ページに記載なし）。生花の交換申請は到着後1日以内なので、届いたらすぐに状態を確認しましょう（2026年10月15日確認）。",
  },
  {
    q: "AND PLANTSの花の定期便はプレゼントにできますか？",
    a: "配送先をギフト相手、請求先を自分の住所にすれば贈れます。ただし定期便にはラッピングとメッセージカードは付けられません（2026年10月15日 公式ページで確認）。",
  },
  {
    q: "届く曜日は選べますか？",
    a: "エリアにより異なりますが、金曜日〜日曜日から選べます。2回目以降は初回と同じ曜日のお届けになります（2026年10月15日 公式ページで確認）。",
  },
  {
    q: "AND PLANTSとAND FLOWERの違いは？",
    a: "どちらも株式会社Domuzのブランドです。2026年5月から花の事業が「AND FLOWER」として展開され、観葉植物は「AND PLANTS」で販売されています。花の定期便のページは現在もandplants.jp配下にあります。",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"AND PLANTS（アンドプランツ）の解約手順\",\"description\":\"AND PLANTS（アンドプランツ）の解約方法をステップごとに解説\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログイン\",\"text\":\"AND PLANTS公式サイトのマイページからログイン。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「定期便管理」を選択\",\"text\":\"マイページから定期便管理画面へ。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「定期便を解約する」をクリック\",\"text\":\"画面の指示に従って解約フローへ。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"理由選択(任意)とフィードバック\",\"text\":\"アンケートに任意で回答。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"「解約を確定する」をクリック\",\"text\":\"次回分の決済（お届けの約1週間前）より前に完了させてください。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"確認メール受信\",\"text\":\"AND PLANTSから解約完了通知メールが届きます。\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/and-plants/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン\",\"description\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン を解説。料金・評判・選び方を網羅。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-15T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/and-plants/\"}}" }} />
      {/* JSONLD_INJECTED_v1 #2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Header />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#666]">サービス一覧</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">AND PLANTS（アンドプランツ）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F0EBE3] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜{RE.updatedAt}更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              AND PLANTS（アンドプランツ）の口コミ・評判は？<br className="hidden md:block" />
              観葉植物と花の定期便の良い声・悪い声を検証
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              観葉植物の通販と花の定期便（現「AND FLOWER」）を展開する「AND PLANTS（アンドプランツ）」の口コミ・評判を、出典つきで整理。花の定期便の料金・解約・交換条件は、{S.verifiedAt}に公式サイトで確認した値で解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">花の定期便</p>
                <p className="text-xl font-bold text-[#4A7C59]">{S.cheapest.price.toLocaleString()}円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料</p>
                <p className="text-xl font-bold text-[#4A7C59]">込み</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">回数縛り</p>
                <p className="text-xl font-bold text-[#4A7C59]">なし</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">お届け頻度</p>
                <p className="text-xl font-bold text-[#4A7C59]">1・2・4週ごと</p>
              </div>
            </div>
          </div>
        </section>

        <ReviewVerdict d={RE} s={S} />

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">1. アンドプランツの口コミ・評判（出典つき）</a></li>
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">2. AND PLANTSとは？観葉植物と花の定期便</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">3. 花の定期便の料金（公式確認）</a></li>
                  <li><a href="#plants" className="hover:text-[#4A7C59] transition-colors">4. 観葉植物の通販としての特徴</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">5. メリット（良い評判の理由）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">6. デメリット（悪い評判の理由）</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">7. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">8. ほかの花のサブスクとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">9. 花の定期便の始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">10. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#4A7C59] transition-colors">11. 解約手順</a></li>
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
        <section id="overview" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTS（アンドプランツ）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              AND PLANTS（アンドプランツ）は、株式会社Domuz（神奈川県川崎市）が運営する観葉植物の通販サイトです。鉢・プランターとセットで届く観葉植物が中心で、花の定期便もそのサービスの一つとして提供されています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              2026年5月からは花の事業が「AND FLOWER（アンドフラワー）」ブランドとして展開されていますが、花の定期便のページは現在もandplants.jp配下にあります。「アンドプランツ 口コミ」で見つかる声の多くは観葉植物についてのものなので、このページでは観葉植物と花の定期便を分けて整理しています。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">AND PLANTS 基本情報（{S.verifiedAt} 公式確認）</h3>
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
                    <span className="text-[#999] w-28 shrink-0">{k}</span>
                    <span className="text-[#333]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSの花の定期便の料金・送料
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花の定期便はスタンダード1,980円（6〜8本）、ミディアム2,980円（8〜10本）、ラージ4,980円（14〜18本）で、いずれも送料込みの表記です（クール便オプションは別料金）。定期便ページには初回500円オフクーポンの案内もあります。
            </p>
            <OfficialPlans s={S} />
          </div>
        </section>

        {/* ─── Plants ─── */}
        <section id="plants" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物の通販としての特徴（アンドプランツの口コミが多い分野）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              アンドプランツの口コミの大半は観葉植物の購入者によるものです。公式サイトで確認できる主な特徴は次のとおりです（2026年10月14日確認）。
            </p>
            <ul className="text-sm md:text-base text-[#555] space-y-2 mb-4">
              <li>・鉢代・植え替え作業代は観葉植物の代金に含まれる（公式トップ）</li>
              <li>・観葉植物S/M/Lサイズは送料無料（北海道・沖縄は＋2,500円）。テーブル・ハンギングサイズは880円（特定商取引法に基づく表記）</li>
              <li>・観葉植物・グッズは到着後14日以内なら写真を添えて交換を相談できる（返品・交換規定）</li>
            </ul>
            <p className="text-sm text-[#666] leading-relaxed">
              観葉植物を選ぶなら、料金や他社との違いを<a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] underline">観葉植物の通販・レンタルの料金ガイド</a>や<a href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物の比較ページ</a>でも確認できます。
            </p>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSのメリット（良い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "梱包が丁寧で状態よく届く",
                  text: "観葉植物・花ともに「梱包が丁寧」「状態が良い」という声がレビュー記事で多く見られます。",
                },
                {
                  title: "花の定期便は回数縛りなし・送料込み",
                  text: "花の定期便は送料込みの1,980円〜で、公式に「解約もいつでも可能」と明記されています。",
                },
                {
                  title: "お届け頻度を1・2・4週から選べる",
                  text: "毎週から4週に1回まで選べるので、飾るペースに合わせやすいです。",
                },
                {
                  title: "本数が多め",
                  text: "最安のスタンダードでも6〜8本と、ポスト投函型の花のサブスク（3〜4本前後）より本数が多めです。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#E8F0EB] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cons Section ─── */}
        <section id="cons" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#F0D0D0]">
              AND PLANTSのデメリット（悪い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "価格はやや高め",
                  text: "花の定期便は1,980円〜で、medelu（748円〜）やハナメク（1,210円〜）より高め。観葉植物も「価格がやや高い」という口コミがあります。",
                },
                {
                  title: "生花の交換申請は到着後1日以内",
                  text: "花の定期便を含む生花は、到着後1日以内に写真を添えて連絡する必要があります。届いたらすぐに状態を確認しましょう。",
                },
                {
                  title: "スキップは決済前の注文のみ",
                  text: "決済はお届けの約1週間前。決済が済んだ注文はスキップできません。",
                },
                {
                  title: "品切れ・配送トラブルの報告",
                  text: "観葉植物では人気品種の品切れや、コバエ・茎折れ・鉢の割れの報告がレビュー記事で挙がっています。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSはこんな人におすすめ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#4A7C59] mb-4">おすすめの人</h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>回数縛りなしで花の定期便を試したい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>1回あたりの本数が多い花束を飾りたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>観葉植物と花をまとめて同じサイトで選びたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>届くペースを1〜4週で調整したい方</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#C08552] mb-4">おすすめしない人</h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>とにかく安く始めたい方（medeluやハナメクが安い）</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>ポスト投函で受け取りたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>届いた花をすぐ確認できない方（生花の交換申請は1日以内）</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <CompareSection s={S} all={SERVICES} note="AND PLANTSの花の定期便は、最安プランの価格は4社で最も高い一方、本数が多く回数縛りもありません。安さ重視ならmedelu・ハナメク、ポスト投函の定番ならbloomee、ボリュームと解約の自由さを重視するならAND PLANTSが候補です。" />

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSの花の定期便の始め方
            </h2>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "公式の花の定期便ページを開く", text: "AND PLANTS公式サイト（andplants.jp）の花の定期便ページでプランを確認します。" },
                { step: "STEP 2", title: "プランを選択", text: "スタンダード（1,980円）、ミディアム（2,980円）、ラージ（4,980円）から選びます。" },
                { step: "STEP 3", title: "お届け頻度と曜日を選ぶ", text: "1週・2週・4週ごとから頻度を、金〜日曜からお届け曜日を選びます（エリアによる）。" },
                { step: "STEP 4", title: "クーポン・支払いを確認", text: "初回500円オフクーポンの案内がある場合は適用条件を確認し、支払い方法を登録します。" },
                { step: "STEP 5", title: "届いたらすぐ状態を確認", text: "生花の交換申請は到着後1日以内です。届いたら早めに開封して確認しましょう。" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <div className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
                    {item.step}
                  </div>
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
              AND PLANTSに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#E8F0EB] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#333] pr-4">
                      Q. {item.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                      <p className="text-sm text-[#666] leading-relaxed">
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
        <section id="cancellation" className="py-12 md:py-16 bg-[#F9F7F3]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTS（アンドプランツ）の解約手順【完全ガイド】
            </h2>
            <p className="text-sm text-[#666] mb-6">回数縛りなし（公式に「解約もいつでも可能」と記載）。決済はお届けの約1週間前なので、それより前に手続きしましょう。</p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">マイページにログイン</h3>
                    <p className="text-sm text-[#666] leading-relaxed">AND PLANTS公式サイトのマイページからログイン。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「定期便管理」を選択</h3>
                    <p className="text-sm text-[#666] leading-relaxed">マイページから定期便管理画面へ。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「定期便を解約する」をクリック</h3>
                    <p className="text-sm text-[#666] leading-relaxed">画面の指示に従って解約フローへ。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">理由選択(任意)とフィードバック</h3>
                    <p className="text-sm text-[#666] leading-relaxed">アンケートに任意で回答。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「解約を確定する」をクリック</h3>
                    <p className="text-sm text-[#666] leading-relaxed">次回分の決済（お届けの約1週間前）より前に完了させてください。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">確認メール受信</h3>
                    <p className="text-sm text-[#666] leading-relaxed">AND PLANTSから解約完了通知メールが届きます。</p>
                  </div>
                </div>
            </div>
            <p className="text-xs text-[#888] mt-4 text-center">※ 2026年5月時点の手順です。最新の解約方法はAND PLANTS（アンドプランツ）公式サイトでご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：アンドプランツの口コミ・評判から分かる向き不向き
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              AND PLANTS（アンドプランツ）は観葉植物の通販が中心で、梱包の丁寧さや植物の状態の良さが口コミで評価されています。花の定期便（現AND FLOWER）は送料込み1,980円〜で6〜8本と本数が多めです。
              回数縛りがなく「解約もいつでも可能」と公式に記載があり、初回500円オフクーポンの案内もあります。お届け頻度は1・2・4週ごとから選べます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、他社と比べて価格がやや高めな点や、ポスト投函ではなく宅配で届く点、生花の交換申請が到着後1日以内と短い点はデメリットとして把握しておきましょう。
              コスパ重視ならmedelu、手軽さ重視ならbloomeeも検討した上で、自分のライフスタイルに合ったサービスを選ぶのがおすすめです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                AND PLANTS公式サイトはこちら
              </a>
              <a
                href="/"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                他のサービスと比較する
              </a>
            </div>
          </div>
        </section>

        {/* 関連リンク（第二弾: 文脈内部リンク） */}
        <section className="bg-[#FBF8F4] py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-5">AND PLANTSに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/service-guides/and-plants-kaiyaku/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">AND PLANTSの解約方法（締切・注意点） →</a>
              <a href="/vs/and-plants-vs-lifft/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">AND PLANTS vs LIFFT 比較 →</a>
              <a href="/vs/medelu-vs-and-plants/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">medelu vs AND PLANTS 比較 →</a>
              <a href="/vs/bloomee-vs-and-plants/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomee vs AND PLANTS 比較 →</a>
              <a href="/compare/cheap/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">安い花のサブスク比較 →</a>
              <a href="/compare/souryou-muryou/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">送料無料で比較 →</a>
              <a href="/guides/beginner/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">花サブスク初心者ガイド →</a>
              <a href="/guides/oshare/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">おしゃれな花サブスク →</a>
              <a href="/services/bloomee/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomeeの口コミ・評判 →</a>
              <a href="/services/medelu/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">medeluの口コミ・評判 →</a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#333] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-flwdeli-footer.png" alt="flowerデリ" className="h-14 w-auto opacity-90" />

              <p className="text-xs text-gray-400">
                花のサブスクを徹底比較。あなたにぴったりのサービスが見つかる。
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
              料金・条件は{S.verifiedAt}時点で公式サイトから確認したものです。最新の料金・サービス内容は各公式サイトでご確認ください。
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
