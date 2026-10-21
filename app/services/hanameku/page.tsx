"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import { findReviewEvidence } from "@/data/reviewEvidence";
import { CompareSection, OfficialPlans, ReviewEvidence, ReviewVerdict } from "@/app/components/ReviewEvidence";
import PageHero from "@/app/components/PageHero";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "hanameku")!;
const RE = findReviewEvidence("hanameku");

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "ハナメク（hanameku）の口コミ・評判はどうですか？",
    a: "良い口コミは「花持ちが良い」「パステル調の色合いがかわいい」「1,210円（税込・送料込）でポストに届いて楽」が中心です。悪い口コミには「花材が重なる」「蕾やしおれ気味で届くことがある」「花の名前が書かれていない」などがあります。いずれも、SNS投稿を日付付きで引用しているレビュー記事をもとにした傾向です（2026年10月14日確認）。",
  },
  {
    q: "ハナメクを申し込む際に注意すべき点は何ですか？",
    a: "口コミの内容とは別に、お申し込み前に確認すべき点は、①初回（定期1回目）は解約できない、②解約・スキップ・変更の締切がお届け予定日の10日前と早い、③スキップは次回分のみ、の3点です。いずれも公式FAQ・お知らせに記載されています。",
  },
  {
    q: "ハナメク（hanameku）の料金はいくらですか？",
    a: "2026年10月14日に公式サイトで確認した料金は、ライトプラン1,210円（3〜4本・ポスト投函）、セルフアレンジプランS 1,958円（1〜8本）・L 3,278円（1〜12本）で、いずれも税込・配送料込みの表記です。セルフアレンジは地域別の追加送料（北海道・九州550円、関西220円、中国・四国330円）があり、沖縄・離島は配送できません。",
  },
  {
    q: "ハナメクに回数縛りはありますか？解約方法も教えてください。",
    a: "最低回数の記載はありませんが、公式FAQに「定期1回目（初回）の解約は受け付けておりません」と明記されています。2回目以降はマイページから手続きでき、締切はお届け予定日の10日前です。",
  },
  {
    q: "ハナメクのお花はどのように届きますか？",
    a: "ライトプランはポスト投函、セルフアレンジプランは宅配（宅配ボックス可）で届きます。",
  },
  {
    q: "ハナメクのお花が傷んでいた場合はどうすればいいですか？",
    a: "公式の品質保証では、到着日を含めて3日以内に写真を添えて申請すると、返金または代替品で対応すると案内されています。お客様都合の劣化や長期不在は対象外です。",
  },
  {
    q: "ハナメクの運営会社はどこですか？",
    a: "and factory株式会社（東京都目黒区）です。2026年6月1日にnarrative株式会社から事業が移管されており、カード明細の請求元は当面narrative名義となる場合があると公式に案内されています。",
  },
];



/* ─── Main Component ─── */
export default function HanamekuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"hanameku（ハナメク）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"hanameku（ハナメク）\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/hanameku/\"}" }} />
      {/* CANCEL_FLOW_SCHEMA_v1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"hanameku（ハナメク）の解約手順\",\"description\":\"hanameku（ハナメク）の解約方法を手順ごとにご説明します\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログインする\",\"text\":\"hanameku公式サイトの「マイページ」にログインします。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"定期管理ページを開く\",\"text\":\"マイページの定期管理ページで、対象商品の詳細を開きます（2026年10月17日公式確認）。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「停止」ボタンを押す\",\"text\":\"対象商品の詳細にある停止ボタンから定期便を停止します（2026年10月17日公式確認）。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"解約理由を入力する（任意）\",\"text\":\"フィードバックの入力は任意です。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"停止の手続きを確定する\",\"text\":\"お届け予定日の10日前までに手続きを完了してください。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"解約完了通知を確認する\",\"text\":\"メールで完了通知が届きます。\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"hanameku（ハナメク）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/hanameku/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"hanameku（ハナメク）の評判・口コミ・料金プラン\",\"description\":\"hanameku（ハナメク）の評判・口コミ・料金プランについて、料金・評判・選び方をご説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-14T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/hanameku/\"}}" }} />
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
                  <span className="text-[#1F2420] font-medium">ハナメク（hanameku）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/services/hanameku/" services={[{ slug: "hanameku", name: "hanameku（ハナメク）" }]}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜{RE.updatedAt}更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              ハナメク（hanameku）の口コミ・評判<br className="hidden md:block" />
              良い口コミ・悪い口コミと1,210円の料金・解約を検証
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、1,210円（税込・送料込）でポストに届く花の定期便「ハナメク（hanameku）」の口コミ・評判を、SNS投稿を引用したレビュー記事の出典を明記して整理しています。料金・初回解約不可のルール・締切・品質保証は、{S.verifiedAt}に公式サイトで確認した値にもとづいてご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">ライトプラン</p>
                <p className="text-xl font-bold text-[#2F5B43]">{S.cheapest.price.toLocaleString()}円/回</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                <p className="text-xl font-bold text-[#2F5B43]">込み</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">届き方</p>
                <p className="text-xl font-bold text-[#2F5B43]">ポスト投函</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">初回の解約</p>
                <p className="text-xl font-bold text-[#2F5B43]">不可</p>
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
                  <li><a href="#reviews" className="hover:text-[#2F5B43] transition-colors">1. ハナメクの口コミ・評判（出典付き）</a></li>
                  <li><a href="#overview" className="hover:text-[#2F5B43] transition-colors">2. ハナメクのサービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#2F5B43] transition-colors">3. 料金プラン（公式確認）</a></li>
                  <li><a href="#pros" className="hover:text-[#2F5B43] transition-colors">4. メリット（良い評判の理由）</a></li>
                  <li><a href="#cons" className="hover:text-[#2F5B43] transition-colors">5. デメリット（悪い評判の理由）</a></li>
                  <li><a href="#recommend" className="hover:text-[#2F5B43] transition-colors">6. おすすめできる方・おすすめできない方</a></li>
                  <li><a href="#comparison" className="hover:text-[#2F5B43] transition-colors">7. ほかの花のサブスクとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#2F5B43] transition-colors">8. ハナメクの始め方</a></li>
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
              ハナメク（hanameku）のサービス概要
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              ハナメク（hanameku）は、and factory株式会社が運営するお花の定期便（花のサブスク）です。2026年6月にnarrative株式会社から事業が移管されました（カード明細の請求元は当面narrative名義となる場合があります・公式のお知らせより）。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              現在のプランは、ポストに届く「ライトプラン」（1,210円・3〜4本）と、宅配で届き自分で生ける「セルフアレンジプラン」（S 1,958円・L 3,278円）の2種類です。インターネット上の記事には旧価格（858円）や2023年に終了したスタンダードプランの情報が残っているため、ご注意ください。
            </p>
            <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">ハナメク 基本情報（{S.verifiedAt} 公式確認）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {[
                  ["運営会社", "and factory株式会社"],
                  ["プラン", "ライト／セルフアレンジ（S・L）"],
                  ["料金", "1,210円〜（税込・配送料込）"],
                  ["届き方", "ライトはポスト投函・セルフアレンジは宅配"],
                  ["お届け頻度", "ライトは毎週または14日ごと"],
                  ["初回の解約", "不可（公式FAQ）"],
                  ["締切", "お届け予定日の10日前"],
                  ["品質保証", "到着日含め3日以内に写真で申請"],
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
              ハナメクの料金プラン・送料
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              ライトプランは1,210円（税込・配送料込）で、ポスト投函で届きます。セルフアレンジプランは宅配で、Sが1,958円・Lが3,278円です。セルフアレンジは地域によって追加送料がかかります。
            </p>
            <OfficialPlans s={S} />
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ハナメクのメリット（良い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "1,210円（税込・送料込）で追加費用がかからない",
                  text: "ライトプランは配送料込みの1,210円です。花代とは別に送料がかかるサービスと異なり、表示価格がそのまま1回の支払額となります。",
                },
                {
                  title: "花持ち・色合いの評価が高い",
                  text: "「2週間たっても元気」「パステル調の色がかわいい」など、花持ちと色合いを評価する声がレビュー記事で繰り返し引用されています。",
                },
                {
                  title: "ポスト投函で受け取りの手間が少ない",
                  text: "ライトプランはポストに届くため、不在がちな方でも受け取れます。",
                },
                {
                  title: "自分で生けるセルフアレンジも選べる",
                  text: "セルフアレンジプランは1〜12本の花を自分でアレンジして楽しめます（宅配）。",
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
              ハナメクのデメリット（悪い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "初回（1回目）は解約できない",
                  text: "公式FAQに「定期1回目（初回）の解約は受け付けておりません」と明記されています。最低回数の記載はないものの、少なくとも1回は受け取る前提でお申し込みください。",
                },
                {
                  title: "解約・スキップの締切が10日前と早い",
                  text: "解約・スキップ・変更の締切は、お届け予定日の10日前です（2024年7月に9日前から変更）。スキップは次回分のみで、連続スキップはできません。",
                },
                {
                  title: "花材が重なる、蕾で届くことがある",
                  text: "続けていると同じ花材が続く、蕾やしおれ気味で届くことがあるという声があります。",
                },
                {
                  title: "品質保証の申請期限が短い",
                  text: "不良時は返金または代替品の対象ですが、到着日を含め3日以内に写真を添えて申請する必要があります。",
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
              ハナメクをおすすめできる方・おすすめできない方
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#2F5B43] mb-4">おすすめできる方</h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>送料込みの定額で花のある暮らしを始めたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>ポスト投函で受け取りたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>パステル調のやさしい色合いが好きな方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] mt-1 shrink-0">--</span><span>自分で花を生けるのも楽しみたい方（セルフアレンジ）</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#C08552] mb-4">おすすめできない方</h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#D9BFB1] mt-1 shrink-0">--</span><span>1回だけ試してすぐ解約したい方（初回は解約不可）</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D9BFB1] mt-1 shrink-0">--</span><span>予定が直前まで決まらずスキップを多用したい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D9BFB1] mt-1 shrink-0">--</span><span>沖縄・離島にお住まいでセルフアレンジを希望する方（配送不可）</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <CompareSection s={S} all={SERVICES} note="送料込みで比べると、最安はmedeluのMini（748円）、次いでハナメクのライト（1,210円）です。bloomeeは花代980円に送料385円が加わり、最初の4回の受け取りが条件となります。ハナメクは、初回の解約ができない点と締切が10日前と早い点に留意すれば、送料込みの定額で続けやすいサービスです。" />

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ハナメクの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "公式サイトにアクセスする", text: "ハナメクの公式サイト（hanameku.jp）でプランを確認します。" },
                { step: "STEP 2", title: "プランを選択する", text: "ポストに届くライトプラン（1,210円）か、宅配のセルフアレンジ（S 1,958円・L 3,278円）を選びます。" },
                { step: "STEP 3", title: "お届け頻度を選択する", text: "ライトは毎週または14日ごと、セルフアレンジは月1回（第2土日）または14日ごとから選びます。" },
                { step: "STEP 4", title: "お届け先・支払い方法を登録する", text: "お届け先と支払い方法を登録します。セルフアレンジは、地域別の追加送料もご確認ください。" },
                { step: "STEP 5", title: "締切を確認する", text: "初回は解約できません。2回目以降の解約・スキップはお届け予定日の10日前が締切です。" },
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
              ハナメクに関するよくある質問
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
              hanameku（ハナメク）の解約手順
            </h2>
            <p className="text-sm text-[#4A4F49] mb-6">初回（定期1回目）は解約できません。2回目以降の解約・スキップの締切は、お届け予定日の10日前です。</p>
            <div className="bg-white rounded-md p-6 md:p-8">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">マイページにログインする</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">hanameku公式サイトの「マイページ」にログインします。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">定期管理ページを開く</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">マイページの定期管理ページで、対象商品の詳細を開きます（2026年10月17日公式確認）。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「停止」ボタンを押す</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">対象商品の詳細にある停止ボタンから定期便を停止します（2026年10月17日公式確認）。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">解約理由を入力する（任意）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">フィードバックの入力は任意です。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">停止の手続きを確定する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">お届け予定日の10日前までに手続きを完了してください。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#2F5B43] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">解約完了通知を確認する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">メールで完了通知が届きます。</p>
                  </div>
                </div>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4 text-center">※ 2026年5月時点の手順です。ご利用前に、hanameku（ハナメク）公式サイトにて最新情報をご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              口コミ・評判からみたハナメクが適している方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              ハナメク（hanameku）は、1,210円（税込・送料込）でポストに届くライトプランが中心の花のサブスクです。口コミでは花持ちの良さと色合いのかわいさが評価され、自分で生けるセルフアレンジプランも選べます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、初回（1回目）は解約できない点、解約・スキップの締切がお届け予定日の10日前と早い点、花材が重なることがあるという口コミがある点にご留意ください。
              より安く始めたい場合はmedelu（748円〜）、ポスト投函型の代表的なサービスと比較したい場合はbloomeeもあわせて検討し、ご自身に合ったサービスをお選びください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=W58911.1.O99396Q.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                ハナメク公式サイトはこちら
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
            <h2 className="font-heading text-2xl font-bold text-[#1F2420] mb-5">ハナメクに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/service-guides/hanameku-kaiyaku/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">ハナメクの解約方法（締切・注意点） →</a>
              <a href="/vs/hanameku-vs-medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">ハナメク vs medelu 比較 →</a>
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
