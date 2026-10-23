"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import { findReviewEvidence } from "@/data/reviewEvidence";
import { CompareSection, OfficialPlans, ReviewEvidence, ReviewVerdict } from "@/app/components/ReviewEvidence";
import PageHero from "@/app/components/PageHero";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "bloomee")!;
const RE = findReviewEvidence("bloomee");

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomee（ブルーミー）の口コミ・評判は悪いのですか？",
    a: "良い口コミは「ポスト投函で不在でも受け取れる」「花代980円〜で始めやすい」「季節の花が届く」が中心です。一方で、みん評（掲載562件・2026年10月14日確認）などでは「花がしおれていた・同じ花が続く」「最初の4回は解約できず途中解約料がかかる」「解約がわかりにくい」といった厳しい声も多く見られます。4回受け取る前提であれば有力な候補ですが、1〜2回だけ試したい方には適していません。",
  },
  {
    q: "ブルーミーライフ（bloomee）のメリット・デメリットは何ですか？",
    a: "公式情報で確認できるメリットは、お試し・グリーンプランがポストに届き不在でも受け取れること、花代980円/回から始められること、4回目以降は週単位でストップ・再開や隔週への変更ができることです。デメリットは、送料が毎回別にかかること（385円、ベーシックは550円）、最初の4回の受け取りが前提で4回未満の解約は途中解約料がかかること、お試し・グリーンは日時指定ができず花の種類も選べないことです（2026年10月20日 公式サイトで確認）。",
  },
  {
    q: "ブルーミーの花の品質やボリュームについての口コミはどうですか？",
    a: "口コミサイトのみん評（掲載562件・2026年10月14日確認）では、しおれ・同じ花が続くといった品質への不満が多く見られます。一方、複数回受け取った方のレビュー記事では、花持ちは1〜2週間程度で回や季節によって差がある、お試しプラン（公式の表記は4本以上・約18〜25cm）は最初は少なく感じても飾ると寂しくない、という記録が中心です。",
  },
  {
    q: "ブルーミーの悪い口コミで多い内容は何ですか？",
    a: "多いのは、①花の状態のばらつき（しおれ・同じ花が続く。夏場のポスト投函で増える傾向があります）、②最初の4回の受け取りが必要で、4回未満の解約は途中解約料がかかること、③解約・スキップの手続きがわかりにくいこと、の3点です。送料が毎回別にかかるため、「980円」という表記から受ける印象より高いという声もあります。",
  },
  {
    q: "ブルーミー（bloomee）の値段・料金はいくらですか？",
    a: "2026年10月23日に公式サイトで確認した継続コースの値段は、お試しプラン980円＋送料385円、グリーンプラン980円＋送料385円、ベーシックプラン2,180円＋送料550円（いずれも1回あたり）です。お試しプランは送料込みで1回1,365円、最初の4回の総額は5,460円です。",
  },
  {
    q: "ブルーミーの月額はいくらになりますか？",
    a: "公式の料金は月額ではなく、配送のある週ごとの決済です。送料込みの1回の値段から計算すると、お試し・グリーンは毎週で月4回なら5,460円（5回の月は6,825円）、隔週で月2回なら2,730円、ベーシックは毎週で月4回なら10,920円、隔週で月2回なら5,460円です（当サイトの計算）。隔週への変更は4回目を受け取った後からです。",
  },
  {
    q: "ブルーミーを1回だけ購入する場合の値段はいくらですか？",
    a: "公式サイトの「単品購入」は、お試し・グリーンが1,780円＋送料385円、ベーシックが3,300円＋送料550円です（2026年10月23日確認）。継続コースより1回あたり800円（ベーシックは1,120円）高くなりますが、最初の4回の受け取り条件はありません。",
  },
  {
    q: "ブルーミーの値段は税込みですか？",
    a: "公式の特定商取引法に基づく表記では、商品代金は「消費税込み」で表示し、配送料を別に表示すると定められています。980円・2,180円などの花代は税込みの表記で、送料は花代とは別にかかります（2026年10月23日確認）。",
  },
  {
    q: "4回未満で解約するとどうなりますか？",
    a: "公式の特定商取引法に基づく表記では、最初の4回の途中で解約する場合「4回分のうち残回数分の商品代金（税込）」を途中解約料として支払うと定められています。5回目以降は途中解約料なしで解約できます。解約の締切は規約上「当社が定める時点」とされているため、マイページで次回の締切日を確認してください。",
  },
  {
    q: "bloomeeのお花が傷んで届いた場合はどうすればいいですか？",
    a: "公式の特定商取引法に基づく表記では、商品に不良があった場合、定期便は2週間以内に連絡すれば返金または交換の対象になります（単品購入は到着後2日以内）。届いた時点の写真を撮影しておくと、申請を円滑に進められます。",
  },
  {
    q: "bloomeeのお花はポストに届きますか？",
    a: "お試しプランとグリーンプランはポストに半投函の形で届き、水〜金曜日のお届けで日時指定はできません。ベーシックプランは手渡しで、水〜日曜日から日付と時間帯を指定できます（一部エリアは宅配便）。",
  },
  {
    q: "bloomeeはどのくらいの頻度で届きますか？",
    a: "公式サイトでは毎週のお届けが基本で、4回目のお届け以降は隔週に変更できると案内されています。",
  },
  {
    q: "ブルーミーの「体験プラン」「レギュラープラン」はもうないのですか？",
    a: "2026年10月15日に公式サイトで確認したところ、プランはお試しプラン・グリーンプラン・ベーシックプランの3つで、「体験プラン」「レギュラープラン」の表記はありませんでした。インターネット上の古い記事に記載されているこれらは旧プラン名です（2024年3月に体験プランがお試しプランに変わったと説明しているレビュー記事もあります）。料金は現行プランの値で比較してください。",
  },
  {
    q: "旅行などで受け取れない週はどうすればいいですか？",
    a: "公式FAQでは、特定の週だけお届けをスキップできる機能があると案内されています。また決済は配送のある週ごとのため、4回目以降は週単位でお届けのストップ・再開ができます（2026年10月15日確認）。",
  },
  {
    q: "ブルーミーの支払い方法を教えてください。",
    a: "クレジットカード（VISA・Mastercard・AMEX・JCB）またはAmazon Payのみです。銀行振込・コンビニ払い・キャリア決済・電子マネー・デビットカードは使えません（2026年10月15日 公式FAQで確認）。",
  },
  {
    q: "ブルーミーの定期便をプレゼントとして贈れますか？",
    a: "贈ることができます。お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、自分以外の住所に届けられ、送り主の名前を登録できます（2026年10月15日 公式FAQで確認）。最初の4回の受け取りが必要な点は贈る場合も同じです。",
  },
  {
    q: "bloomeeの運営会社はどこですか？",
    a: "ユーザーライク株式会社（東京都渋谷区道玄坂）です。旧サービス名は「Bloomee LIFE（ブルーミーライフ）」で、公式サイトでは「お花のお届け実績3,000万本以上（自社調べ）」と表記されています。",
  },
];



/* ─── Main Component ─── */
export default function BloomeePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"bloomee（ブルーミー）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"bloomee（ブルーミー）\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/bloomee/\"}" }} />
      {/* CANCEL_FLOW_SCHEMA_v1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"bloomee（ブルーミー）の解約手順\",\"description\":\"bloomee（ブルーミー）の解約方法を手順ごとにご説明します\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログインする\",\"text\":\"bloomee公式サイトの右上「マイページ」から、登録メールアドレスとパスワードを入力してログインします。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「お届け情報」→「定期コース管理」を選択する\",\"text\":\"マイページのメニューから「お届け情報」→「定期コース管理」へ進みます。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「定期コースを解約する」をクリックする\",\"text\":\"ページ下部にある「定期コースを解約する」リンクをクリックし、解約手続きに進みます。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"解約理由を選択する（任意）\",\"text\":\"アンケートが表示されますが、回答は任意です。回答せずに進むことも可能です。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"「解約する」で最終確定する\",\"text\":\"最終確認画面で「解約する」ボタンをクリックします。マイページに表示される次回分の締切までに手続きを完了してください（規約上の締切は「当社が定める時点」です）。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"解約完了メールを受信する\",\"text\":\"登録メールアドレスに解約完了通知が届きます。手続きの記録として、メールを保管しておくことをおすすめします。\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"bloomee（ブルーミー）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/bloomee/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"bloomee（ブルーミー）の評判・口コミ・料金プラン\",\"description\":\"bloomee（ブルーミー）の評判・口コミ・料金プランについて、料金・評判・選び方をご説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-14T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/bloomee/\"}}" }} />
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
                  <span className="text-[#1F2420] font-medium">bloomee（ブルーミー）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/services/bloomee/" services={[{ slug: "bloomee", name: "bloomee（ブルーミー）" }]}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜{RE.updatedAt}更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              bloomee（ブルーミー）の口コミ・評判<br className="hidden md:block" />
              良い口コミ・悪い口コミと料金・最初の4回の受け取り条件を検証
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、ポストに届く花の定期便「bloomee（ブルーミー）」の口コミ・評判を、みん評やレビュー記事などの出典を明記して整理しています。
              料金（花代＋送料）・最初の4回の途中解約料・品質保証は、{S.verifiedAt}に公式サイトで確認した値にもとづいてご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最安プラン（花代）</p>
                <p className="text-xl font-bold text-[#2F5B43]">{S.cheapest.price.toLocaleString()}円/回〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                <p className="text-xl font-bold text-[#2F5B43]">385円〜/回</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最低受取回数</p>
                <p className="text-xl font-bold text-[#2F5B43]">{S.minDeliveries}回</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">届き方</p>
                <p className="text-xl font-bold text-[#2F5B43]">ポスト投函</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* ─── Price answer (2026-10-23 公式確認) ─── */}
        <section id="price" className="py-10 md:py-12 bg-white border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              ブルーミーの値段は1回1,365円から（お試しプラン・送料込み）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              ブルーミーの値段は、継続コースのお試しプランで花代980円＋送料385円の<strong>1回1,365円</strong>です。料金は月額ではなく配送ごとに決済され、最初の4回は毎週のお届けのため、最初の1か月（4回）は<strong>5,460円</strong>です。
              ベーシックプランは花代2,180円＋送料550円の1回2,730円です。継続コースではなく1回だけ購入する「単品購入」は、お試し・グリーンが1,780円＋送料385円、ベーシックが3,300円＋送料550円です（2026年10月23日 公式サイトで確認）。
            </p>
            <div className="table-wrapper overflow-x-auto rounded-md border border-[#DEDAD2] bg-white mb-4">
              <table className="w-full text-sm text-[#3F443E]">
                <caption className="sr-only">ブルーミーのプラン別の値段（2026年10月23日 公式確認）</caption>
                <thead className="bg-[#EDF1EC] text-[#1F2420]">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold">プラン</th>
                    <th className="px-3 py-2 text-left font-bold">継続コース（1回）</th>
                    <th className="px-3 py-2 text-left font-bold">送料込み（1回）</th>
                    <th className="px-3 py-2 text-left font-bold">毎週・月4回</th>
                    <th className="px-3 py-2 text-left font-bold">毎週・月5回</th>
                    <th className="px-3 py-2 text-left font-bold">隔週・月2回</th>
                    <th className="px-3 py-2 text-left font-bold">単品購入（1回）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["お試しプラン", "980円＋送料385円", "1,365円", "5,460円", "6,825円", "2,730円", "1,780円＋送料385円"],
                    ["グリーンプラン", "980円＋送料385円", "1,365円", "5,460円", "6,825円", "2,730円", "1,780円＋送料385円"],
                    ["ベーシックプラン", "2,180円＋送料550円", "2,730円", "10,920円", "13,650円", "5,460円", "3,300円＋送料550円"],
                  ].map(([name, ...cells]) => (
                    <tr key={name} className="border-t border-[#EEE] align-top">
                      <td className="px-3 py-2 font-medium text-[#1F2420] whitespace-nowrap">{name}</td>
                      {cells.map((c, i) => (
                        <td key={i} className="px-3 py-2 whitespace-nowrap">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="text-xs text-[#6B6F6A] leading-relaxed space-y-1 mb-2">
              <li>※ 1回あたりの花代・送料・単品購入の値段は、公式トップの料金表の表記です。特定商取引法に基づく表記では、商品代金は「消費税込み」で表示すると定められています。</li>
              <li>※ 月額は当サイトが「送料込みの1回の値段×回数」で計算した目安です。公式の料金は月額ではなく配送ごとの決済で、毎週のお届けは月によって4回の月と5回の月があります。公式の料金表にある「1ヶ月で¥3,200 OFF」（ベーシックは¥4,480）は、単品購入との差額の4回分です。</li>
              <li>※ 隔週への変更は4回目のお花を受け取った後からです。4回未満で解約すると「4回分のうち残回数分の商品代金（消費税込み）」が途中解約料になります。</li>
            </ul>
            <p className="text-xs text-[#6B6F6A] leading-relaxed">
              出典：<a href="https://bloomeelife.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline">bloomee公式サイト（料金表・よくある質問）</a>・<a href="https://bloomeelife.com/contacts/law" target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>（いずれも2026年10月23日確認）。料金は変更される場合があるため、お申し込み前に公式サイトでご確認ください。
            </p>
          </div>
        </section>

        <ReviewVerdict d={RE} s={S} />

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">本ページの内容</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#price" className="hover:text-[#2F5B43] transition-colors">1. ブルーミーの値段（プラン別・送料込み・月額）</a></li>
                  <li><a href="#reviews" className="hover:text-[#2F5B43] transition-colors">2. ブルーミーの口コミ・評判（出典付き）</a></li>
                  <li><a href="#flower-reviews" className="hover:text-[#2F5B43] transition-colors">3. ブルーミーの花の口コミ（品質・ボリュームの記録と掲載先）</a></li>
                  <li><a href="#overview" className="hover:text-[#2F5B43] transition-colors">4. bloomeeのサービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#2F5B43] transition-colors">5. 料金プラン・送料（公式確認）</a></li>
                  <li><a href="#merit-demerit" className="hover:text-[#2F5B43] transition-colors">6. ブルーミーライフ（bloomee）のメリット・デメリット（公式情報で整理）</a></li>
                  <li><a href="#pros" className="hover:text-[#2F5B43] transition-colors">7. メリット（良い評判の理由）</a></li>
                  <li><a href="#cons" className="hover:text-[#2F5B43] transition-colors">8. デメリット（悪い評判の理由）</a></li>
                  <li><a href="#recommend" className="hover:text-[#2F5B43] transition-colors">9. おすすめできる方・おすすめできない方</a></li>
                  <li><a href="#comparison" className="hover:text-[#2F5B43] transition-colors">10. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#2F5B43] transition-colors">11. bloomeeの始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">12. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#2F5B43] transition-colors">13. 解約手順</a></li>
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


        {/* ─── Flower quality reviews (2026-10-20) ─── */}
        <section id="flower-reviews" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ブルーミーの花の口コミ｜届く花の品質・ボリュームの記録と掲載先
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              ブルーミーの花そのもの（鮮度・花持ち・本数）についての口コミは、件数の多い口コミサイトでは厳しい声が目立ち、複数回受け取った方のレビュー記事では「花持ちは1〜2週間程度、回や季節によって差がある」という記録が中心です。
              お試しプランの公式のサイズ目安は約18〜25cm（ベーシックは約25〜30cm）で、花の組み合わせ・色味はおまかせです（2026年10月20日 公式FAQで確認）。
            </p>
            <div className="table-wrapper overflow-x-auto rounded-md border border-[#E8DFD5] bg-white mb-4">
              <table className="w-full text-sm text-[#3F443E]">
                <thead className="bg-[#F6F4EF] text-[#1F2420]">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold">掲載先</th>
                    <th className="px-3 py-2 text-left font-bold">件数・利用期間</th>
                    <th className="px-3 py-2 text-left font-bold">花の品質・ボリュームについての記載</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "みん評「ブルーミーライフ」", url: "https://minhyo.jp/bloomeelife", count: "掲載562件（2026年10月14日確認。平均点は取得できませんでした）", body: "個別の口コミには、しおれ・同じ花が続くといった品質への不満と、解約・問い合わせ対応への不満が多く見られます。" },
                    { name: "かおりハピネス", url: "https://kaori-happiness.jp/bloomee-review/", count: "お試しプラン4回（2022年9月）", body: "各回3種類の花材。花持ちは1週間〜10日程度で、1週間もたずに傷み始めた種類もあった。" },
                    { name: "Nana's Petunia", url: "https://nanas-petunia.com/bloomee_review/", count: "お試しプラン4回（2026年3月時点の情報）", body: "4回とも4本。保水ジェル付きで傷みなく届き、約3週間もった回もあった。" },
                    { name: "サブスクスタイル", url: "https://subsc-style.jp/bloomee-kuchikomi/", count: "5回（2021年・旧プランを含む）", body: "届いた花は4〜7種類。3〜4日目で元気がなくなった回と、約2週間飾れた回があった。" },
                    { name: "メモノテ", url: "https://memo-note.jp/bloomee/", count: "1年間", body: "花持ちは夏場で約1週間、冬場で約2週間。届いた当日の連絡で1回分が無料になった。" },
                    { name: "GFGreen お花", url: "https://gfgreenblog.com/bloomee/bloomee-review/", count: "約3年半（お試しプラン）", body: "花の長さは20〜25cmほど、花持ちはおおむね2週間。利用開始から1年半ほどは鮮度・ボリュームにばらつきがあった。" },
                  ].map((r) => (
                    <tr key={r.name} className="border-t border-[#EEE] align-top">
                      <td className="px-3 py-2 whitespace-nowrap"><a href={r.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">{r.name}</a></td>
                      <td className="px-3 py-2">{r.count}</td>
                      <td className="px-3 py-2">{r.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] leading-relaxed">
              ※ レビュー記事は各筆者個人の記録の要約で、時期・地域・季節によって変わります（各記事は2026年10月14日〜20日に確認）。口コミサイトの件数は確認日時点の表示です。公式サイトにも「ご利用者様の声」が掲載されていますが、事業者が選んで掲載したものです。当サイトでは、体験談の創作や独自の星評価の掲載は行っていません。
            </p>
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              bloomee（ブルーミー）のサービス概要
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              bloomee（ブルーミー）は、ユーザーライク株式会社（旧社名：株式会社Crunch Style）が運営するお花の定期便（花のサブスク）です。
              旧サービス名は「Bloomee LIFE（ブルーミーライフ）」です。公式サイトでは「お花のお届け実績3,000万本以上（自社調べ）」と表記されています。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              市場で仕入れた季節の花を小ぶりの花束にして届けるのが特徴です。お試しプラン・グリーンプランはポストに半投函の形で届くため、不在が多い方でも受け取れます。
              一方で、最初の4回は受け取りが必要であること、送料が毎回別にかかることは、お申し込み前にご確認ください。
            </p>
            <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">bloomee 基本情報（{S.verifiedAt} 公式確認）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {[
                  ["運営会社", "ユーザーライク株式会社"],
                  ["プラン", "お試し／グリーン／ベーシック"],
                  ["料金", "花代980円〜＋送料385円〜/回"],
                  ["届き方", "ポスト投函（お試し・グリーン）／手渡し（ベーシック）"],
                  ["お届け日", "水〜金曜（ポスト投函・日時指定不可）"],
                  ["最低受取回数", "4回（未満は途中解約料）"],
                  ["配送頻度", "毎週（4回目以降は隔週に変更可）"],
                  ["品質保証", "定期便は2週間以内の連絡で返金・交換（特商法）"],
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
              bloomeeの料金プランと送料
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              公式サイトの料金表（継続コース）は、お試しプラン・グリーンプランが花代980円＋送料385円、ベーシックプランが花代2,180円＋送料550円です。
              「980円」は花代のみの表記であるため、送料を含めた金額で比較することが重要です。
            </p>
            <OfficialPlans s={S} />
            <div className="bg-[#F6F4EF] rounded-md border border-[#E8DFD5] p-5 mt-6">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">送料込みの金額と最初の4回の総額</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・お試し／グリーン：980円＋送料385円＝<strong>1,365円/回</strong>（4回で5,460円）</li>
                <li>・ベーシック：2,180円＋送料550円＝<strong>2,730円/回</strong>（4回で10,920円）</li>
                <li>・4回未満で解約すると「4回分のうち残回数分の商品代金（税込）」が途中解約料になります（公式・特定商取引法に基づく表記）。</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ─── Merit / Demerit from official info (2026-10-20) ─── */}
        <section id="merit-demerit" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ブルーミーライフ（bloomee）のメリット・デメリット｜公式情報で整理
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              ブルーミー（旧ブルーミーライフ）のメリットは、ポストに届く受け取りやすさ、花代980円からの始めやすさ、4回目以降は週単位で停止・再開できる柔軟さです。
              デメリットは、送料が毎回別にかかること、最初の4回の受け取りが必要なこと、お試し・グリーンは日時指定ができず花も選べないことです。
              以下は、2026年10月20日に公式サイト（トップページのよくある質問・特定商取引法に基づく表記）で確認した内容だけを項目ごとに整理したものです。
            </p>
            <div className="table-wrapper overflow-x-auto rounded-md border border-[#DEDAD2] bg-white mb-4">
              <table className="w-full text-sm text-[#3F443E]">
                <thead className="bg-[#EDF1EC] text-[#1F2420]">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold">項目</th>
                    <th className="px-3 py-2 text-left font-bold">メリット</th>
                    <th className="px-3 py-2 text-left font-bold">デメリット</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["受け取り", "お試し・グリーンはポストに半投函で届き、不在でも受け取れる", "お試し・グリーンは水〜金曜のお届けで日付・時間の指定は不可。一部エリアは宅配便"],
                    ["料金", "花代980円/回から（お試し・グリーン）。月額ではなく配送ごとの決済", "送料が毎回別（385円、ベーシックは550円）。お試しは送料込みで1,365円/回"],
                    ["契約の条件", "半年・1年などの長期契約はない。4回目以降は週単位でストップ・再開でき、隔週への変更や特定の週のスキップもできる", "最初の4回は受け取りが前提。4回未満で解約すると「4回分のうち残回数分の商品代金」が途中解約料になり、4回目までは隔週に変更できない"],
                    ["花の内容", "市場で仕入れた季節の花を束ねて届ける。ガイドブックと栄養剤が同封される", "花の組み合わせ・色味はおまかせで選べない。サイズ目安はお試し・グリーンが約18〜25cm、ベーシックが約25〜30cm"],
                    ["品質の保証", "定期便は到着予定日から2週間以内に問い合わせフォームで連絡し、不具合が認められれば返金または代品発送", "問い合わせフォームからの申請が必要で、期限を過ぎると対象外"],
                    ["支払い方法", "クレジットカードまたはAmazon Payで支払える", "銀行振込・コンビニ払い・キャリア決済・電子マネー・デビットカードは使えない（PayPayは定期購入では使えない）"],
                    ["お届けエリア", "本州・北海道・四国・九州・沖縄本島に届く", "離島は対象外"],
                    ["プレゼント", "「プレゼントとして送る」を選ぶと自分以外の住所に届け、送り主の名前を登録できる", "2か所以上に届ける場合は、別のメールアドレスでそれぞれ登録が必要"],
                  ].map(([k, m, d]) => (
                    <tr key={k} className="border-t border-[#EEE] align-top">
                      <td className="px-3 py-2 font-medium text-[#1F2420] whitespace-nowrap">{k}</td>
                      <td className="px-3 py-2">{m}</td>
                      <td className="px-3 py-2">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] leading-relaxed">
              出典：<a href="https://bloomeelife.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline">bloomee公式サイト（よくある質問）</a>・<a href="https://bloomeelife.com/contacts/law" target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>（いずれも2026年10月20日確認）。料金は公式の料金表（継続コース）の値です。口コミで多い評価・不満は、次の「メリット（良い評判の理由）」「デメリット（悪い評判の理由）」でご説明します。
            </p>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              bloomeeのメリット（良い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "ポスト投函で不在でも受け取れる",
                  text: "お試しプランとグリーンプランはポストに半投函の形で届くため、仕事で帰宅が遅い方や一人暮らしの方でも受け取りの手間がかかりません。口コミで最も多く挙げられている利点です。",
                },
                {
                  title: "花代980円〜で始めやすい",
                  text: "お試しプランは花代980円（送料385円別）です。花瓶一つに飾れる小ぶりの花束のため、花を飾る習慣がない方の最初の一歩として選ばれています。",
                },
                {
                  title: "季節の花に出会える",
                  text: "市場で仕入れた季節の花が届くため、自分では選ばない花に出会えるという声が多く見られます。",
                },
                {
                  title: "不良品は返金・交換の対象になる",
                  text: "公式の特定商取引法に基づく表記では、定期便は2週間以内に連絡すれば不良品の返金または交換の対象になります。届いた時点で写真を撮影しておくことをおすすめします。",
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
              bloomeeのデメリット（悪い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "最初の4回は解約できない（途中解約料あり）",
                  text: "最初の4回は受け取りが必要で、途中で解約すると「4回分のうち残回数分の商品代金（税込）」を支払う決まりです。お試しプランの場合、送料込みで総額5,460円を支払う前提でお申し込みください。",
                },
                {
                  title: "送料が毎回別にかかる",
                  text: "花代とは別に送料が毎回かかります（お試し・グリーン385円、ベーシック550円）。送料込みのmedelu（748円〜）などと比べると、負担額は大きくなります。",
                },
                {
                  title: "花の状態・種類にばらつきがある",
                  text: "口コミサイトでは「しおれていた」「同じ花が続く」という声が多く見られます。とくに夏場はポスト内の暑さで傷みやすいため、届いたら早めに取り出して水に挿してください。",
                },
                {
                  title: "本数が少なく感じる場合がある",
                  text: "お試しプランは4本以上・約18〜25cmの小ぶりの花束です。テーブルを華やかに飾りたい方は、8本以上のベーシックプランや、ボリュームのある他社サービスもあわせてご検討ください。",
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
              bloomeeをおすすめできる方・おすすめできない方
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
                    <span>お花のサブスクを初めて利用する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>日中不在が多く、ポスト投函で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>手軽に少額からお花を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>品質保証のある安心なサービスを選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-1 shrink-0">--</span>
                    <span>SNSにお花の写真を投稿したい方</span>
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
                    <span>ボリュームのある豪華なお花が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>送料を含めた費用対効果を最も重視する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>継続回数の条件なしで気軽に試したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9BFB1] mt-1 shrink-0">--</span>
                    <span>お花の種類やスタイルを自分で選びたい方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <CompareSection s={S} all={SERVICES} note="ブルーミーは「花代＋送料」の料金体系で、最初の4回の受け取りが条件です。送料込みで最低回数の記載がないサービスと比較する場合はmedelu（748円〜）やハナメク（1,210円〜）、本数と宅配を重視する場合はAND PLANTS（1,980円〜）も候補になります。ブルーミーはポスト投函型の代表的なサービスで、届いた花の実例をSNSやレビューで事前に確認しやすい点が強みです。" />

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              bloomeeの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセスする",
                  text: "bloomeeの公式サイト（bloomeelife.com）にアクセスし、プラン選択へ進みます。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択する",
                  text: "お試しプラン（980円＋送料385円）、グリーンプラン（980円＋送料385円）、ベーシックプラン（2,180円＋送料550円）から選びます。迷う場合は、お試しプランから始めることをおすすめします。",
                },
                {
                  step: "STEP 3",
                  title: "最初の4回の条件を確認する",
                  text: "最初の4回は受け取りが必要です（4回未満の解約は途中解約料）。お届けは毎週が基本で、4回目以降は隔週に変更できます。",
                },
                {
                  step: "STEP 4",
                  title: "お届け先情報を入力する",
                  text: "氏名、住所、電話番号などのお届け先情報を入力します。ポスト投函の場合は、ポストのサイズを事前にご確認ください。",
                },
                {
                  step: "STEP 5",
                  title: "支払い方法を登録する",
                  text: "支払い方法はクレジットカード（VISA・Mastercard・AMEX・JCB）またはAmazon Payのみです（銀行振込・コンビニ払い・キャリア決済は不可。2026年10月15日 公式FAQで確認）。",
                },
                {
                  step: "STEP 6",
                  title: "申し込みを完了し、お届けを待つ",
                  text: "申し込みが完了すると、お届け予定日が案内されます。届いたお花は早めに取り出し、水切りをしてから花瓶に飾ってください。",
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
              bloomeeに関するよくある質問
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
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#E3D3C8]">
              bloomee（ブルーミー）の解約手順
            </h2>
            <p className="text-sm text-[#4A4F49] mb-6">初回契約時には最低受取回数（4回）が設定されています。4回未満で解約すると、残回数分の料金が発生しますのでご注意ください。</p>
            <div className="bg-white rounded-md p-6 md:p-8">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#E3D3C8] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">マイページにログインする</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">bloomee公式サイトの右上「マイページ」から、登録メールアドレスとパスワードを入力してログインします。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#E3D3C8] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「お届け情報」→「定期コース管理」を選択する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">マイページのメニューから「お届け情報」→「定期コース管理」へ進みます。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#E3D3C8] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「定期コースを解約する」をクリックする</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">ページ下部にある「定期コースを解約する」リンクをクリックし、解約手続きに進みます。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#E3D3C8] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">解約理由を選択する（任意）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">アンケートが表示されますが、回答は任意です。回答せずに進むことも可能です。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#E3D3C8] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">「解約する」で最終確定する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">最終確認画面で「解約する」ボタンをクリックします。マイページに表示される次回分の締切までに手続きを完了してください（規約上の締切は「当社が定める時点」です）。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#E3D3C8] text-white w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#DEDAD2] rounded-md p-4">
                    <h3 className="font-bold text-[#1F2420] mb-1">解約完了メールを受信する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">登録メールアドレスに解約完了通知が届きます。手続きの記録として、メールを保管しておくことをおすすめします。</p>
                  </div>
                </div>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4 text-center">※ 2026年5月時点の手順です。ご利用前に、bloomee（ブルーミー）公式サイトにて最新情報をご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              口コミ・評判からみたブルーミーが適している方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              bloomee（ブルーミー）は、ポスト投函で手軽に受け取れる点と、花代980円/回からの始めやすさが口コミで評価されている花のサブスクです。
              不良品は、定期便であれば2週間以内の連絡で返金・交換の対象になります（特商法）。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、送料が毎回別にかかる点、最初の4回は受け取りが必要な点（お試しプランの場合は総額5,460円）、花の状態にばらつきがあるという口コミがある点にご留意ください。
              費用を重視する場合はmedelu、デザイン性を重視する場合はAND PLANTSもあわせて検討し、ご自身に合ったサービスをお選びください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                bloomee公式サイトはこちら
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
            <h2 className="font-heading text-2xl font-bold text-[#1F2420] mb-5">bloomeeに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/service-guides/bloomee-kaiyaku/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomeeの解約方法（締切・注意点） →</a>
              <a href="/vs/bloomee-vs-and-plants/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomee vs AND PLANTS 比較 →</a>
              <a href="/compare/bloomee-vs-medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomee vs medelu 比較 →</a>
              <a href="/compare/bloomee-vs-hitohana/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">bloomee vs HitoHana 比較 →</a>
              <a href="/compare/cheap/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">安い花のサブスク比較 →</a>
              <a href="/compare/souryou-muryou/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">送料無料で比較 →</a>
              <a href="/guides/beginner/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">花サブスク初心者ガイド →</a>
              <a href="/guides/oshare/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">おしゃれな花サブスク →</a>
              <a href="/services/medelu/" className="block bg-white border border-[#DEDAD2] rounded-md p-3 hover:border-[#B0694F] hover:text-[#B0694F] transition text-sm font-medium text-[#4A4F49]">medeluの口コミ・評判 →</a>
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
