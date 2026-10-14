"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import { findReviewEvidence } from "@/data/reviewEvidence";
import { CompareSection, OfficialPlans, ReviewEvidence, ReviewVerdict } from "@/app/components/ReviewEvidence";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "bloomee")!;
const RE = findReviewEvidence("bloomee");

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomee（ブルーミー）の口コミ・評判は悪い？",
    a: "良い口コミは「ポスト投函で不在でも受け取れる」「花代980円〜で始めやすい」「季節の花が届く」が中心です。一方、みん評（掲載562件・2026年10月14日確認）などでは「花がしおれていた・同じ花が続く」「最初の4回は解約できず途中解約料がかかる」「解約が分かりにくい」といった厳しい声も目立ちます。4回受け取る前提なら有力候補、1〜2回だけ試したい人には向きません。",
  },
  {
    q: "ブルーミーの悪い口コミで多いのは？",
    a: "多いのは①花の状態のばらつき（しおれ・同じ花が続く。夏場のポスト投函で増えやすい）②最初の4回の受け取りが必要で、4回未満の解約は途中解約料がかかる③解約・スキップの手続きが分かりにくい、の3つです。送料が毎回別にかかり「980円」の印象より高いという声もあります。",
  },
  {
    q: "bloomee（ブルーミー）の料金はいくらですか？",
    a: "2026年10月14日に公式サイトで確認した継続コースの料金は、お試しプラン980円＋送料385円、グリーンプラン980円＋送料385円、ベーシックプラン2,180円＋送料550円（いずれも1回あたり）です。お試しプランは送料込みで実質1,365円/回、最初の4回の総額は5,460円になります。",
  },
  {
    q: "4回未満で解約するとどうなりますか？",
    a: "公式の特定商取引法に基づく表記では、最初の4回の途中で解約する場合「4回分のうち残回数分の商品代金（税込）」を途中解約料として支払うと定められています。5回目以降は途中解約料なしで解約できます。解約の締切は規約上「当社が定める時点」とされているため、マイページで次回の締切日を確認してください。",
  },
  {
    q: "bloomeeのお花が傷んで届いた場合はどうすればいいですか？",
    a: "公式の特定商取引法に基づく表記では、商品に不良があった場合、定期便は2週間以内に連絡すれば返金または交換の対象になります（単品購入は到着後2日以内）。届いた時点の写真を撮っておくと申請がスムーズです。",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"bloomee（ブルーミー）の解約手順\",\"description\":\"bloomee（ブルーミー）の解約方法をステップごとに解説\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログイン\",\"text\":\"bloomee公式サイトの右上「マイページ」からログイン。登録メールアドレスとパスワードを入力します。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「お届け情報」→「定期コース管理」を選択\",\"text\":\"マイページのメニューから「お届け情報」→「定期コース管理」へ進みます。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「定期コースを解約する」をクリック\",\"text\":\"ページ下部に「定期コースを解約する」リンクがあります。クリックして解約フローへ。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"解約理由を選択(任意)\",\"text\":\"アンケートが表示されますが、回答は任意。スキップしてもOKです。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"「解約する」を最終確定\",\"text\":\"最終確認画面で「解約する」ボタンをクリック。締切はマイページに表示される次回分の締切までに完了させましょう（規約上の締切は「当社が定める時点」）。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"解約完了メール受信\",\"text\":\"登録メールアドレスに解約完了通知が届きます。メールを保管しておくと安心。\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"bloomee（ブルーミー）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/bloomee/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"bloomee（ブルーミー）の評判・口コミ・料金プラン\",\"description\":\"bloomee（ブルーミー）の評判・口コミ・料金プラン を解説。料金・評判・選び方を網羅。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-14T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/bloomee/\"}}" }} />
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
                  <span className="text-[#333] font-medium">bloomee（ブルーミー）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜{RE.updatedAt}更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              bloomee（ブルーミー）の口コミ・評判は悪い？<br className="hidden md:block" />
              良い声・悪い声と料金・4回縛りを検証
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              ポストに届く花の定期便「bloomee（ブルーミー）」の口コミ・評判を、みん評やレビュー記事などの出典つきで整理。
              料金（花代＋送料）・最初の4回の途中解約料・品質保証は、{S.verifiedAt}に公式サイトで確認した値で解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン（花代）</p>
                <p className="text-xl font-bold text-[#4A7C59]">{S.cheapest.price.toLocaleString()}円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料</p>
                <p className="text-xl font-bold text-[#4A7C59]">385円〜/回</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最低受取回数</p>
                <p className="text-xl font-bold text-[#4A7C59]">{S.minDeliveries}回</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">届き方</p>
                <p className="text-xl font-bold text-[#4A7C59]">ポスト投函</p>
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
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">1. ブルーミーの口コミ・評判（出典つき）</a></li>
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">2. bloomeeとは？サービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">3. 料金プラン・送料（公式確認）</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">4. メリット（良い評判の理由）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">5. デメリット（悪い評判の理由）</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">8. bloomeeの始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">9. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#4A7C59] transition-colors">10. 解約手順</a></li>
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
              bloomee（ブルーミー）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              bloomee（ブルーミー）は、ユーザーライク株式会社（旧社名：株式会社Crunch Style）が運営するお花の定期便（花のサブスク）です。
              旧サービス名は「Bloomee LIFE（ブルーミーライフ）」。公式サイトでは「お花のお届け実績3,000万本以上（自社調べ）」と表記されています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              市場で仕入れた季節の花を小ぶりの花束にして届けるのが特徴で、お試しプラン・グリーンプランはポストに半投函の形で届くため、不在が多い人でも受け取れます。
              一方、最初の4回は受け取りが必要で、送料が毎回別にかかる点は申込前に知っておきたいポイントです。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">bloomee 基本情報（{S.verifiedAt} 公式確認）</h3>
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
              bloomeeの料金プラン・送料（値段はいくら？）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              公式サイトの料金表（継続コース）は、お試しプラン・グリーンプランが花代980円＋送料385円、ベーシックプランが花代2,180円＋送料550円です。
              「980円」は花代のみの表記なので、送料を含めた実質の金額で比べるのがポイントです。
            </p>
            <OfficialPlans s={S} />
            <div className="bg-[#FBF7F2] rounded-xl border border-[#E8DFD5] p-5 mt-6">
              <h3 className="text-sm font-bold text-[#333] mb-3">送料込みの実質金額と、最初の4回の総額</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・お試し／グリーン：980円＋送料385円＝<strong>1,365円/回</strong>（4回で5,460円）</li>
                <li>・ベーシック：2,180円＋送料550円＝<strong>2,730円/回</strong>（4回で10,920円）</li>
                <li>・4回未満で解約すると「4回分のうち残回数分の商品代金（税込）」が途中解約料になります（公式・特定商取引法に基づく表記）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeのメリット（良い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "ポスト投函で不在でも受け取れる",
                  text: "お試しプランとグリーンプランはポストに半投函の形で届くため、仕事で帰りが遅い人や一人暮らしでも受け取りの手間がかかりません。口コミでも最も多く挙がる良い点です。",
                },
                {
                  title: "花代980円〜で始めやすい",
                  text: "お試しプランは花代980円（送料385円別）。花瓶ひとつに飾れる小ぶりの花束なので、花を飾る習慣がない人の入門として選ばれています。",
                },
                {
                  title: "季節の花に出会える",
                  text: "市場で仕入れた季節の花が届くため、自分では選ばない花に出会えるという声が多く見られます。",
                },
                {
                  title: "不良時は返金・交換の対象",
                  text: "公式の特定商取引法に基づく表記では、定期便は2週間以内に連絡すれば不良品の返金または交換の対象になります。届いたらすぐ写真を撮っておくと安心です。",
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
        <section id="cons" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#F0D0D0]">
              bloomeeのデメリット（悪い評判の理由）
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "最初の4回は解約できない（途中解約料あり）",
                  text: "最初の4回は受け取りが必要で、途中で解約すると「4回分のうち残回数分の商品代金（税込）」を支払う決まりです。お試しプランなら、送料込みで総額5,460円は払う前提で申し込みましょう。",
                },
                {
                  title: "送料が毎回別にかかる",
                  text: "花代とは別に送料が毎回かかります（お試し・グリーン385円、ベーシック550円）。送料込みのmedelu（748円〜）などと比べると、実質の負担は大きくなります。",
                },
                {
                  title: "花の状態・種類にばらつきがある",
                  text: "口コミサイトでは「しおれていた」「同じ花が続く」という声が目立ちます。とくに夏場はポスト内の暑さで傷みやすいため、届いたら早めに取り出して水に挿しましょう。",
                },
                {
                  title: "本数が少なく感じることも",
                  text: "お試しプランは4本以上・約18〜25cmの小ぶりの花束です。テーブルを華やかにしたい人は、8本以上のベーシックプランか、ボリュームのある他社も比較しましょう。",
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
        <section id="recommend" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeはこんな人におすすめ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* おすすめの人 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#4A7C59] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#E8F0EB] flex items-center justify-center text-sm">
                    ○
                  </span>
                  おすすめの人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>お花のサブスクを初めて利用する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>日中不在が多く、ポスト投函で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>手軽に少額からお花を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>品質保証のある安心なサービスを選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>SNSにお花の写真を投稿したい方</span>
                  </li>
                </ul>
              </div>

              {/* おすすめしない人 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#E0B8B8] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FDF5F5] flex items-center justify-center text-sm">
                    x
                  </span>
                  おすすめしない人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>ボリュームのある豪華なお花が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>送料を含めたコスパを最重視する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>回数縛りなしで気軽に試したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>お花の種類やスタイルを自分で選びたい方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <CompareSection s={S} all={SERVICES} note="ブルーミーは「花代＋送料」の料金体系で、最初の4回の受け取りが条件です。送料込み・最低回数の記載なしで比べたいならmedelu（748円〜）やハナメク（1,210円〜）、本数と宅配を重視するならAND PLANTS（1,980円〜）も候補になります。ポスト投函の定番で、届いた花の実例をSNSやレビューで事前に確認しやすいのはブルーミーの強みです。" />

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "bloomeeの公式サイト（bloomeelife.com）にアクセスし、プラン選択へ進みます。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択",
                  text: "お試しプラン（980円＋送料385円）、グリーンプラン（980円＋送料385円）、ベーシックプラン（2,180円＋送料550円）から選びます。迷ったらお試しプランから。",
                },
                {
                  step: "STEP 3",
                  title: "最初の4回の条件を確認",
                  text: "最初の4回は受け取りが必要です（4回未満の解約は途中解約料）。お届けは毎週が基本で、4回目以降は隔週に変更できます。",
                },
                {
                  step: "STEP 4",
                  title: "お届け先情報を入力",
                  text: "氏名、住所、電話番号などのお届け先情報を入力します。ポスト投函の場合はポストのサイズを事前に確認しておきましょう。",
                },
                {
                  step: "STEP 5",
                  title: "支払い方法を登録",
                  text: "支払い方法を登録します。利用できる支払い方法は申込画面で確認してください。",
                },
                {
                  step: "STEP 6",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込みが完了すると、お届け予定日が案内されます。届いたお花は早めに取り出し、水切りをしてから花瓶に飾りましょう。",
                },
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
              bloomeeに関するよくある質問
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#F0D0D0]">
              bloomee（ブルーミー）の解約手順【完全ガイド】
            </h2>
            <p className="text-sm text-[#666] mb-6">初回契約時の最低受取回数(4回)に注意。4回未満で解約すると残回数分の料金が発生します。</p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#F0D0D0] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">マイページにログイン</h3>
                    <p className="text-sm text-[#666] leading-relaxed">bloomee公式サイトの右上「マイページ」からログイン。登録メールアドレスとパスワードを入力します。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#F0D0D0] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「お届け情報」→「定期コース管理」を選択</h3>
                    <p className="text-sm text-[#666] leading-relaxed">マイページのメニューから「お届け情報」→「定期コース管理」へ進みます。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#F0D0D0] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「定期コースを解約する」をクリック</h3>
                    <p className="text-sm text-[#666] leading-relaxed">ページ下部に「定期コースを解約する」リンクがあります。クリックして解約フローへ。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#F0D0D0] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">解約理由を選択(任意)</h3>
                    <p className="text-sm text-[#666] leading-relaxed">アンケートが表示されますが、回答は任意。スキップしてもOKです。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#F0D0D0] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「解約する」を最終確定</h3>
                    <p className="text-sm text-[#666] leading-relaxed">最終確認画面で「解約する」ボタンをクリック。締切はマイページに表示される次回分の締切までに完了させましょう（規約上の締切は「当社が定める時点」）。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#F0D0D0] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">解約完了メール受信</h3>
                    <p className="text-sm text-[#666] leading-relaxed">登録メールアドレスに解約完了通知が届きます。メールを保管しておくと安心。</p>
                  </div>
                </div>
            </div>
            <p className="text-xs text-[#888] mt-4 text-center">※ 2026年5月時点の手順です。最新の解約方法はbloomee（ブルーミー）公式サイトでご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：ブルーミーの口コミ・評判から分かる向き不向き
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              bloomee（ブルーミー）は、ポスト投函で手軽に受け取れる点と、花代980円/回からの始めやすさが口コミで評価されている花のサブスクです。
              不良時は定期便なら2週間以内の連絡で返金・交換の対象になります（特商法）。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、送料が毎回別にかかる点、最初の4回は受け取りが必要な点（お試しなら総額5,460円）、花の状態にばらつきがあるという口コミは把握しておきましょう。
              コスパ重視ならmedelu、デザイン性重視ならAND PLANTSも検討した上で、自分に合ったサービスを選びましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                bloomee公式サイトはこちら
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
            <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-5">bloomeeに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/service-guides/bloomee-kaiyaku/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomeeの解約方法（締切・注意点） →</a>
              <a href="/vs/bloomee-vs-and-plants/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomee vs AND PLANTS 比較 →</a>
              <a href="/compare/bloomee-vs-medelu/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomee vs medelu 比較 →</a>
              <a href="/compare/bloomee-vs-hitohana/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomee vs HitoHana 比較 →</a>
              <a href="/compare/cheap/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">安い花のサブスク比較 →</a>
              <a href="/compare/souryou-muryou/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">送料無料で比較 →</a>
              <a href="/guides/beginner/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">花サブスク初心者ガイド →</a>
              <a href="/guides/oshare/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">おしゃれな花サブスク →</a>
              <a href="/services/medelu/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">medeluの口コミ・評判 →</a>
              <a href="/services/and-plants/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">AND PLANTSの口コミ・評判 →</a>
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
