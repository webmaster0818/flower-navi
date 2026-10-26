"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import { findReviewEvidence } from "@/data/reviewEvidence";
import { CompareSection, ReviewEvidence, ReviewVerdict } from "@/app/components/ReviewEvidence";
import PageHero from "@/app/components/PageHero";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "medelu")!;
const RE = findReviewEvidence("medelu");

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "medelu（メデル）の口コミ・評判はどうですか？",
    a: "良い口コミは「花のセンスが良い」「鮮度が良く長持ちする」「部屋のテイストでコースを選べる」「748円（送料込）〜で始めやすい」が中心です。悪い口コミには「Miniは本数が少ない」「暑い時期は花持ちが短い・しおれて届いた」「お届け日を指定できない」などがあります。いずれも、レビュー記事のX投稿引用や編集部アンケートをもとにした傾向です（2026年10月14日確認）。",
  },
  {
    q: "メデルの花の悪い口コミで多い内容は何ですか？",
    a: "①Mini（3〜4本）はボリュームが物足りない、②暑い時期は花持ちが短い・しおれて届いたことがある、③同じような花が続く、④お届け日を指定できない、の4点が繰り返し見られます。しおれて届いた場合は、到着当日中に写真を送れば全額返金の対象となります。",
  },
  {
    q: "medelu（メデル）の料金はいくらですか？",
    a: "2026年10月14日に公式サイトで確認したANYROOMコースの料金は、Mini 748円（3〜4本）、Lite 1,330円（5〜6本）、Lite+ 1,650円（5〜7本。公式ヘルプ記事では6〜7本、2026年10月26日確認）、Basic 2,330円（6〜9本）で、いずれも1回あたり税込・送料込みです。北海道・東北のLite／Lite+／Basicは遠隔地送料（140〜240円）が加算されます。",
  },
  {
    q: "medeluに回数縛りはありますか？解約方法も教えてください。",
    a: "公式サイト・特定商取引法に基づく表記に、最低利用回数の記載は見当たりません（2026年10月14日確認）。解約はマイページから行い、決済日（お届け週の前週金曜日）の前日・木曜日までに手続きすれば次回から停止します。締切を過ぎた場合は、最後に1回届きます。",
  },
  {
    q: "medeluのお花が傷んで届いた場合はどうすればいいですか？",
    a: "公式ヘルプでは、商品到着日の当日中に写真を送り、枯れていると判断された場合は送料を含めて全額返金と案内されています（交換はなし）。届いた当日中に状態をご確認ください。",
  },
  {
    q: "medeluのお花はポストに届きますか？",
    a: "MiniとLiteはポスト投函に対応しています。Lite+とBasicは公式サイトでポスト投函の記載がないため、申込画面でお届け方法を確認してください。お届け日の指定はできません。",
  },
  {
    q: "medeluのコースの違いは何ですか？",
    a: "部屋のテイストに合わせてANYROOM・NATURAL・MODERNのコースから選べます。迷う場合は、どのような部屋にも合わせやすいANYROOMから始める方が多くなっています。",
  },
  {
    q: "スキップはできますか？",
    a: "公式ヘルプによると、スキップは3回先のお届けまで設定できます。",
  },
  {
    q: "medeluの運営会社はどこですか？",
    a: "株式会社medelu（東京都港区南青山）です（公式・特定商取引法に基づく表記で確認）。",
  },
];



/* ─── Main Component ─── */
export default function MedeluPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"medelu（メデル）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"medelu（メデル）\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/medelu/\"}" }} />
      {/* CANCEL_FLOW_SCHEMA_v1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"medelu（メデル）の解約手順\",\"description\":\"medelu（メデル）の解約方法を手順ごとにご説明します\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログインする\",\"text\":\"medelu公式サイトの「マイページ」からログインします。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「定期便一覧」を開く\",\"text\":\"マイページのメニューから「定期便一覧」を押します。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"解約する定期便の歯車マークを押す\",\"text\":\"解約したい定期便のメニューアイコン（歯車マーク）を押します。解約はご契約のコースごとに行います。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"「定期便を辞める」を押す\",\"text\":\"「定期便を辞める」を押し、画面の案内に沿って手続きを進めます。定期便の解約と、medeluからの退会は別の手続きです。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"締切までに手続きを完了する\",\"text\":\"決済日（前週金曜日）の前日・木曜日までに手続きを完了してください。期限を過ぎると、最後に1回届きます（公式ヘルプ「定期便を辞める（解約）」・2026年10月17日確認）。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"完了メールを受信する\",\"text\":\"medeluから解約完了メールが届きます。\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"medelu（メデル）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/medelu/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"medelu（メデル）の評判・口コミ・料金プラン\",\"description\":\"medelu（メデル）の評判・口コミ・料金プランについて、料金・評判・選び方をご説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-21T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/medelu/\"}}" }} />
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
                  <span className="text-[#1F2420] font-medium">medelu（メデル）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/services/medelu/" services={[{ slug: "medelu", name: "medelu（メデル）" }]}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜{RE.updatedAt}更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              medelu（メデル）の花の口コミ・評判<br className="hidden md:block" />
              良い口コミ・悪い口コミと748円〜の料金・解約を検証
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、748円（税込・送料込）〜でポストに届く花の定期便「medelu（メデル）」の口コミ・評判を、レビュー記事やアンケートの出典を明記して整理しています。
              料金・解約の締切・品質保証は、{S.verifiedAt}に公式サイトで確認した値にもとづいてご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#2F5B43]">{S.cheapest.price.toLocaleString()}円/回〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                <p className="text-xl font-bold text-[#2F5B43]">込み</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">サイズ</p>
                <p className="text-xl font-bold text-[#2F5B43]">4サイズ</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最低利用回数</p>
                <p className="text-xl font-bold text-[#2F5B43]">記載なし</p>
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
                  <li><a href="#reviews" className="hover:text-[#2F5B43] transition-colors">1. メデルの口コミ・評判（出典付き）</a></li>
                  <li><a href="#overview" className="hover:text-[#2F5B43] transition-colors">2. medeluのサービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#2F5B43] transition-colors">3. 料金プラン・コース（公式確認）</a></li>
                  <li><a href="#pros" className="hover:text-[#2F5B43] transition-colors">4. メリット（良い評判の理由）</a></li>
                  <li><a href="#cons" className="hover:text-[#2F5B43] transition-colors">5. デメリット（悪い評判の理由）</a></li>
                  <li><a href="#recommend" className="hover:text-[#2F5B43] transition-colors">6. おすすめできる方・おすすめできない方</a></li>
                  <li><a href="#comparison" className="hover:text-[#2F5B43] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#2F5B43] transition-colors">8. medeluの始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">9. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#2F5B43] transition-colors">10. 解約手順</a></li>
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
              medelu（メデル）のサービス概要
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              medelu（メデル）は、株式会社medelu（東京都港区南青山）が運営するお花の定期便（花のサブスク）です。
              部屋のテイストに合わせてコース（ANYROOM・NATURAL・MODERN）を選び、Mini〜Basicの4サイズから量を選ぶ仕組みで、最安のMiniは748円（税込・送料込）からポストに届きます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              公式に最低利用回数の記載がなく、決済日前日の木曜までに手続きすれば次回から停止できるため、まず1回試したい方にも選びやすいサービスです。
              インターネット上には旧価格（698円）を記載した記事も残っているため、料金は公式サイトの最新表示でご確認ください。
            </p>
            <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">medelu 基本情報（{S.verifiedAt} 公式確認）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {[
                  ["運営会社", "株式会社medelu"],
                  ["最安プラン", `${S.cheapest.price.toLocaleString()}円/回（${S.cheapest.name}・税込・送料込み）`],
                  ["サイズ", "Mini／Lite／Lite+／Basic"],
                  ["届き方", "Mini・Liteはポスト投函"],
                  ["お届け日", "指定不可"],
                  ["最低利用回数", "公式に記載なし"],
                  ["解約締切", "決済日（前週金曜）の前日・木曜"],
                  ["品質保証", "到着当日中の連絡で全額返金"],
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
              medeluの料金プラン・コース
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              medeluは、コースと4つのサイズの組み合わせから選べます。料金は税込・送料込みです（北海道・東北のLite以上は遠隔地送料が加算されます）。
            </p>

            {/* コース紹介 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* ANYROOM */}
              <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                <div className="bg-[#EDF1EC] px-5 py-4 text-center">
                  <p className="text-xs text-[#2F5B43] mb-1">万能タイプ</p>
                  <h3 className="text-lg font-bold text-[#1F2420]">ANYROOM</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-[#4A4F49] leading-relaxed">
                    どのようなお部屋にも合わせやすい、バランスの良いアレンジが届きます。迷う場合は、このコースをおすすめします。
                  </p>
                </div>
              </div>

              {/* MODERN */}
              <div className="bg-white rounded-md border-2 border-[#2F5B43] overflow-hidden relative">
                <div className="bg-[#EDF1EC] px-5 py-4 text-center">
                  <p className="text-xs text-[#2F5B43] mb-1">スタイリッシュ</p>
                  <h3 className="text-lg font-bold text-[#1F2420]">MODERN</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-[#4A4F49] leading-relaxed">
                    モダンでスタイリッシュなお部屋に合うアレンジで、シックな色合いのお花が中心です。
                  </p>
                </div>
              </div>

              {/* NATURAL */}
              <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                <div className="bg-[#EDF1EC] px-5 py-4 text-center">
                  <p className="text-xs text-[#6B6F6A] mb-1">やさしい雰囲気</p>
                  <h3 className="text-lg font-bold text-[#1F2420]">NATURAL</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-[#4A4F49] leading-relaxed">
                    ナチュラルテイストや北欧風のお部屋に合う、優しい色合いのお花が届きます。
                  </p>
                </div>
              </div>
            </div>

            {/* サイズ別料金（services.ts＝公式確認値から自動生成） */}
            <h3 className="text-base font-bold text-[#1F2420] mb-4">サイズ別料金（ANYROOMコース・税込）</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {S.plans.map((p, i) => (
                <div key={p.name} className={`bg-white rounded-md p-5 text-center relative ${i === 0 ? "border-2 border-[#2F5B43]" : "border border-[#DEDAD2]"}`}>
                  {i === 0 && (
                    <div className="absolute top-0 right-0 bg-[#2F5B43] text-white text-xs px-2 py-0.5 rounded-bl-lg">最安</div>
                  )}
                  <p className="text-xs text-[#6B6F6A] mb-1">{p.postDelivery ? "ポスト投函対応" : "宅配でお届け"}</p>
                  <h4 className="text-base font-bold text-[#1F2420] mb-2">{p.name}</h4>
                  <p className="text-3xl font-bold text-[#2F5B43] mb-1">{p.price.toLocaleString()}<span className="text-base font-medium">円〜</span></p>
                  <p className="text-xs text-[#2F5B43] font-medium mb-3">{p.postDelivery ? "ポスト投函" : "宅配"}</p>
                  <p className="text-sm text-[#4A4F49]">お花 {p.flowers}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">料金に関する補足</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ 表示価格はすべて税込です（{S.verifiedAt}時点・出典: {S.source}）</li>
                <li>・ {S.shippingNote}</li>
                <li>・ {S.cancellation}</li>
                <li>・ スキップは3回先のお届けまで設定できます（公式ヘルプ）</li>
                <li>・ ご利用前に、最新の料金・プラン構成を<a href={S.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">medelu公式サイト</a>にてご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              medeluのメリット（良い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "748円（税込・送料込）〜で追加費用が少ない",
                  text: "Miniは748円で、送料も含まれています。花代とは別に送料がかかるサービス（例：bloomeeのお試しは980円＋送料385円）と比べると、1回あたりの負担額は約半分です（北海道・東北のLite以上は遠隔地送料が加算されます）。",
                },
                {
                  title: "部屋のテイストでコースを選べる",
                  text: "ANYROOM・NATURAL・MODERNのコースから、部屋の雰囲気に合う花を選べます。口コミでも「センスが良い」「おしゃれ」という声が最も多く寄せられています。",
                },
                {
                  title: "最低利用回数の記載がなく、試しやすい",
                  text: "公式に最低利用回数の記載はなく、決済日前日の木曜までにマイページで手続きすれば次回から停止できます。スキップも3回先まで設定できます。",
                },
                {
                  title: "枯れていた場合は全額返金される",
                  text: "到着当日中に写真を送り、枯れていると判断されれば送料を含めて全額返金されます（公式ヘルプ）。",
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
        <section id="cons" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#E3D3C8]">
              medeluのデメリット（悪い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Miniは本数が少なめである",
                  text: "Miniは3〜4本で、テーブルを華やかに飾りたい方には物足りないという声があります。ボリュームを求める場合は、Lite（5〜6本）以上をお選びください。",
                },
                {
                  title: "暑い時期は花持ちが短くなりやすい",
                  text: "ポスト投函のため、気温が高い時期は「しおれて届いた」「花持ちが短い」という口コミが増えます。届いたら早めに取り出し、到着当日中に状態をご確認ください（返金申請の期限は当日中です）。",
                },
                {
                  title: "お届け日を指定できない",
                  text: "お届け日の指定はできません。長期不在の予定がある場合は、スキップ機能をご利用ください。",
                },
                {
                  title: "不良品は返金のみの対応（交換なし）",
                  text: "品質保証は全額返金で、代わりの花の再送はありません。また、申請期限は到着日の当日中と短く設定されています。",
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
        <section id="recommend" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              medeluをおすすめできる方・おすすめできない方
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* おすすめの人 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#2F5B43] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-md bg-[#EDF1EC] flex items-center justify-center text-sm">
                    ○
                  </span>
                  おすすめできる方
                </h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>費用を抑えてお花のサブスクを始めたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>送料込みの総額を安く抑えたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>お部屋のテイストに合ったお花が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>最低利用回数を気にせず気軽に試したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>鮮度の良いお花を求める方</span>
                  </li>
                </ul>
              </div>

              {/* おすすめしない人 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#D9BFB1] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-md bg-[#F7F1EC] flex items-center justify-center text-sm">
                    x
                  </span>
                  おすすめできない方
                </h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>宅配（手渡し）で日時を指定して受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>届く花の種類を自分で細かく選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>1回でボリュームのある大きな花束が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>傷んだ花の「再送」による補償を重視する方（medeluは返金対応）</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <CompareSection s={S} all={SERVICES} note="送料込みの1回あたりで比べると、medeluのMini（748円）が最も安く、bloomeeのお試し（980円＋送料385円＝1,365円）の約半分です。最低利用回数の記載がない点もmedeluの強みです。一方で、ボリュームや宅配での受け取りを重視する場合はAND PLANTS、セルフアレンジを楽しみたい場合はハナメクも候補になります。" />

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              medeluの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセスする",
                  text: "medeluの公式サイト（medelu.flowers）にアクセスし、「お花の定期便を申し込む」ボタンをクリックします。",
                },
                {
                  step: "STEP 2",
                  title: "コースを選択する",
                  text: "ANYROOM・NATURAL・MODERNのコースから、お部屋の雰囲気に合ったコースを選びます。迷う場合は、ANYROOMコースをおすすめします。",
                },
                {
                  step: "STEP 3",
                  title: "サイズを選択する",
                  text: "Mini（748円〜）・Lite（1,330円〜）・Lite+（1,650円〜）・Basic（2,330円〜）の4サイズから希望のサイズを選びます。試しに利用する場合は、Miniサイズをおすすめします。",
                },
                {
                  step: "STEP 4",
                  title: "お届けの条件を確認する",
                  text: "お届け日は指定できません。解約・停止の締切は決済日（お届け週の前週金曜日）の前日・木曜日です。",
                },
                {
                  step: "STEP 5",
                  title: "お届け先情報・支払い方法を登録する",
                  text: "氏名、住所、電話番号などのお届け先情報と支払い方法を登録します。ポスト投函のため、ポストのサイズを事前にご確認ください。",
                },
                {
                  step: "STEP 6",
                  title: "申し込みを完了し、お届けを待つ",
                  text: "申し込み後、お届け予定日が案内されます。届いたお花は、水切りをしてから花瓶に飾ってください。公式に最低利用回数の記載はなく、木曜の締切までに手続きすれば次回から停止できます。",
                },
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
              medeluに関するよくある質問
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
              medelu（メデル）の解約手順
            </h2>
            <p className="text-sm text-[#4A4F49] mb-6">公式に最低利用回数の記載はありません。締切は決済日（お届け週の前週金曜日）の前日・木曜日です。</p>
            <div className="bg-white rounded-md p-6 md:p-8">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">マイページにログインする</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">medelu公式サイトの「マイページ」からログインします。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「定期便一覧」を開く</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">マイページのメニューから「定期便一覧」を押します。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">解約する定期便の歯車マークを押す</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">解約したい定期便のメニューアイコン（歯車マーク）を押します。解約はご契約のコースごとに行います。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「定期便を辞める」を押す</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">「定期便を辞める」を押し、画面の案内に沿って手続きを進めます。定期便の解約と、medeluからの退会は別の手続きです。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">締切までに手続きを完了する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">決済日（前週金曜日）の前日・木曜日までに手続きを完了してください。期限を過ぎると、最後に1回届きます（公式ヘルプ「定期便を辞める（解約）」・2026年10月17日確認）。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">完了メールを受信する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">medeluから解約完了メールが届きます。</p>
                  </div>
                </div>
            </div>
            <div className="bg-white rounded-md border border-[#DEDAD2] p-5 mt-6 text-sm text-[#3F443E] leading-relaxed">
              <h3 className="font-bold text-[#1F2420] mb-2">解約前に確認すべき3つの点（公式ヘルプセンターで確認：2026年7月3日・10月14日）</h3>
              <ul className="space-y-1.5">
                <li>・「解約（定期便をやめる）」と「退会（会員情報の削除）」は別の手続きです。定期便を止めるだけであれば解約、アカウントも削除する場合は退会まで手続きします。</li>
                <li>・締切は決済日（お届け週の前週金曜日）の前日・木曜日です。決済後に解約すると、決済済みの1回が最後に届きます。</li>
                <li>・一時的に休みたい場合は、スキップ（3回先まで指定可）や休止・再開の機能も利用できます。</li>
              </ul>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4 text-center">※ 画面の名称は変更される場合があります。ご利用前に、medelu（メデル）公式サイトのヘルプセンターにて最新情報をご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              口コミ・評判からみたメデルが適している方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              medelu（メデル）は、748円（税込・送料込）〜でポストに届き、部屋のテイストでコースを選べる花のサブスクです。口コミでは花のセンスと鮮度、始めやすさが評価されています。
              公式に最低利用回数の記載がなく、枯れていた場合は到着当日中の連絡で全額返金の対象になるため、初めて花のサブスクを利用する方でも試しやすいのが特徴です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、Miniは本数が少なめである、暑い時期は花持ちが短くなりやすい、お届け日を指定できないといった口コミもあります。
              ボリュームや宅配を重視する場合はAND PLANTS、ポスト投函型の代表的なサービスを選びたい場合はbloomeeもあわせてご検討ください。
              送料込みの安さと解約のしやすさを重視する方には、medeluが有力な選択肢です。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=R9186L.1.31353750.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                medelu公式サイトはこちら
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
            <h2 className="font-heading text-2xl font-bold text-[#1F2420] mb-5">medeluに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/guides/kaiyaku/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">花のサブスク解約方法まとめ →</a>
              <a href="/vs/medelu-vs-and-plants/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">medelu vs AND PLANTS 比較 →</a>
              <a href="/vs/hitohana-vs-medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">HitoHana vs medelu 比較 →</a>
              <a href="/vs/tasuhana-vs-medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">タスハナ vs medelu 比較 →</a>
              <a href="/vs/hanameku-vs-medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">ハナメク vs medelu 比較 →</a>
              <a href="/compare/bloomee-vs-medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomee vs medelu 比較 →</a>
              <a href="/compare/cheap/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">安い花のサブスク比較 →</a>
              <a href="/compare/souryou-muryou/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">送料無料で比較 →</a>
              <a href="/guides/beginner/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">花サブスク初心者ガイド →</a>
              <a href="/guides/oshare/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">おしゃれな花サブスク →</a>
              <a href="/services/bloomee/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomeeの口コミ・評判 →</a>
              <a href="/services/and-plants/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">AND PLANTSの口コミ・評判 →</a>
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
