"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "hitohana（ヒトハナ）の公式サイトはどこですか？",
    a: "hitohanaの公式サイトは hitohana.tokyo です。運営は株式会社Beer and Techで、観葉植物・フラワーギフト・胡蝶蘭・お花の定期便などを扱っています。当サイト（flowerデリ）は花の定期便の比較サイトで、公式サイトではありません。",
  },
  {
    q: "hitohanaの花の定期便の料金はいくらですか？",
    a: "特定商取引法に基づく表記では、1回あたりにかかる金額（税込）がLite 1,320円、S 1,980円、M 2,640円、L 3,850円、LL 4,950円と掲載されています（2026年10月14日確認）。クール便は有料オプションです（Liteは通常便のみ）。",
  },
  {
    q: "hitohanaの花の定期便に回数の縛りはありますか？",
    a: "ありません。特定商取引法に基づく表記に「当社の定期購入には回数の縛りがございません」と明記されています。変更・解約はお届け日の3日前0時までにマイページから手続きできます（確定済みの次回分はキャンセル不可）。",
  },
  {
    q: "hitohanaの花の定期便は色を選べますか？",
    a: "はい。6色＋おまかせから毎回色を指定でき、ボリュームは5サイズから選べます。花の種類は指定できません（公式FAQ）。",
  },
  {
    q: "hitohanaの花はポスト投函で届きますか？",
    a: "いいえ。専用ボックスに入れて宅急便で届けると公式に案内されており、ポスト投函ではありません。",
  },
  {
    q: "hitohanaの口コミ・評判は？",
    a: "公式の定期便ページでは総合評価4.2（レビュー11,687件の平均・2026年10月14日確認）です。「色味がかわいい」「花材の組み合わせが良い」という声が多い一方、「色指定と違った」「思ったよりボリュームが少ない」という声もあります。",
  },
  {
    q: "届いた花が傷んでいたら交換できますか？",
    a: "公式FAQでは、傷んだ花の画像を送って連絡するよう案内されています。届いたらすぐに状態を確認しましょう。",
  },
];

/* ─── Pricing Data ─── */
const pricingPlans = [
  { name: "Lite", price: "1,320円", volume: "4〜6本" },
  { name: "S", price: "1,980円", volume: "4〜9本" },
  { name: "M", price: "2,640円", volume: "7〜11本" },
  { name: "L", price: "3,850円", volume: "10〜15本" },
  { name: "LL", price: "4,950円", volume: "13〜20本" },
];

/* ─── Main Component ─── */
export default function HitoHanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"HitoHana（ヒトハナ）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"HitoHana（ヒトハナ）\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/hitohana/\"}" }} />
                {/* CANCEL_FLOW_SCHEMA_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"HitoHana（ヒトハナ）の解約手順\",\"description\":\"HitoHana（ヒトハナ）の解約方法をステップごとに解説\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログイン\",\"text\":\"HitoHana公式サイトのマイページへ。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「定期便」セクションを開く\",\"text\":\"契約中の定期便プランを表示。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「解約手続き」をクリック\",\"text\":\"解約フォームへ進みます。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"理由・改善点を入力(任意)\",\"text\":\"フィードバックは任意。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"解約を最終確定\",\"text\":\"お届け日の3日前0時までに手続き完了を。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"完了メール受信\",\"text\":\"解約完了の通知メールが届きます。\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"HitoHana（ヒトハナ）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/hitohana/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"HitoHana（ヒトハナ）の評判・口コミ・料金プラン\",\"description\":\"HitoHana（ヒトハナ）の評判・口コミ・料金プラン を解説。料金・評判・選び方を網羅。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-14T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/hitohana/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    <div className="flex flex-col min-h-screen">
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
                  <span className="text-[#333] font-medium">HitoHana（ひとはな）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜2026年10月14日更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              hitohana（ヒトハナ）の花の定期便とは？<br className="hidden md:block" />
              料金1,320円〜・口コミ評判・送料を公式確認
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-6 max-w-2xl mx-auto leading-relaxed">
              hitohana（ヒトハナ／HitoHana）は、観葉植物・フラワーギフト・胡蝶蘭と「お花の定期便」を扱う花と植物の通販サイトです。
              このページでは、色とボリュームを選べる定期便の料金・回数縛り・締切・口コミの傾向を、2026年10月14日に公式サイトで確認した情報でまとめています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">定期便の料金</p><p className="text-xl font-bold text-[#4A7C59]">1,320円/回〜</p></div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">回数縛り</p><p className="text-xl font-bold text-[#4A7C59]">なし</p></div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">選べる色</p><p className="text-xl font-bold text-[#4A7C59]">6色＋おまかせ</p></div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">公式レビュー</p><p className="text-xl font-bold text-[#4A7C59]">4.2（11,687件）</p></div>
            </div>
            <p className="text-xs text-[#888]">
              公式サイトを探している方へ：hitohanaの公式サイトは <a href="https://hitohana.tokyo/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">hitohana.tokyo</a> です（当サイトは比較・情報サイトです）。
            </p>
          </div>
        </section>

        {/* ─── Verdict ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F6FAF7] p-5 md:p-6">
              <p className="text-xs text-[#4A7C59] font-bold mb-1">最終更新：2026年10月14日（料金・条件・レビュー数は同日に公式サイトで確認）</p>
              <h2 className="text-lg md:text-xl font-bold text-[#333] mb-3">結論：hitohanaの花の定期便はこんなサービス</h2>
              <ul className="text-sm md:text-base text-[#444] leading-relaxed space-y-2">
                <li>・<strong>色（6色＋おまかせ）とボリューム（5サイズ）を毎回選べる</strong>のが最大の特徴。花の種類は指定できません。</li>
                <li>・料金は1回1,320円（Lite）〜4,950円（LL）。特定商取引法の表記では「1回あたりにかかる金額（税込）」として掲載されています。</li>
                <li>・<strong>回数の縛りはなし</strong>（特商法に明記）。変更・解約の締切はお届け日の3日前0時。</li>
                <li>・届き方は専用ボックスの宅急便（ポスト投函ではない）。お届け頻度は毎週・2週間に1回・4週間に1回の利用例があります。</li>
                <li>・公式の定期便ページでは総合評価4.2（レビュー11,687件の平均）。良い声は「色味がかわいい」「花材の組み合わせが良い」、気になる声は「色指定と違った」「思ったよりボリュームが少ない」など。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. hitohana（ヒトハナ）とは？</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 花の定期便の料金（公式確認）</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">3. 口コミ・評判の傾向</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">4. メリット</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">5. デメリット・注意点</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">6. 始め方</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">7. こんな方におすすめ</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">8. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#4A7C59] transition-colors">9. 解約手順</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohana（ヒトハナ）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              hitohana（ヒトハナ／HitoHana）は、株式会社Beer and Tech（埼玉県さいたま市）が運営する花と植物の通販サイトです。観葉植物、花束・アレンジメント・スタンド花などのフラワーギフト、胡蝶蘭、花瓶・鉢カバーなどを扱い、その中の一つとして自宅向けの「お花の定期便」を提供しています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              「hitohana」で検索する方の多くはギフトや観葉植物の購入先を探していると考えられますが、このページでは比較サイトとして、花の定期便（サブスク）を中心に料金・条件・口コミを整理しています。ギフトや観葉植物を探している方は公式サイトをご覧ください。
            </p>
            <div className="bg-[#F8F8F8] rounded-xl p-5 mt-2">
              <h3 className="text-sm font-bold text-[#333] mb-3">hitohana 基本情報（2026年10月14日 公式確認）</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-[#999]">運営会社</div><div className="text-[#333]">株式会社Beer and Tech</div>
                <div className="text-[#999]">公式サイト</div><div className="text-[#333]"><a href="https://hitohana.tokyo/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] hover:underline">hitohana.tokyo</a></div>
                <div className="text-[#999]">主な商品</div><div className="text-[#333]">観葉植物・フラワーギフト・胡蝶蘭・お花の定期便</div>
                <div className="text-[#999]">定期便の届き方</div><div className="text-[#333]">専用ボックスの宅急便（ポスト投函なし）</div>
                <div className="text-[#999]">支払い方法</div><div className="text-[#333]">定期便はクレジットカードのみ（公式FAQ）</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohana 花の定期便の料金プラン
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              特定商取引法に基づく表記では、定期便の価格は「1回あたりにかかる金額（消費税込）」として次のとおり掲載されています（2026年10月14日確認）。色は6色＋おまかせから、ボリュームは5サイズから選べます。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">ボリューム</th>
                    <th className="px-4 py-3 text-center font-medium">1回あたり（税込）</th>
                    <th className="px-4 py-3 text-center font-medium">花材の本数の目安</th>
                  </tr>
                </thead>
                <tbody className="text-[#666]">
                  {pricingPlans.map((plan, i) => (
                    <tr key={i} className={`border-b border-[#E5E5E5] ${i % 2 === 1 ? "bg-[#F8F8F8]" : ""}`}>
                      <td className="px-4 py-3 font-bold text-[#333]">{plan.name}</td>
                      <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">{plan.price}</td>
                      <td className="px-4 py-3 text-center">{plan.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="text-xs md:text-sm text-[#666] space-y-1">
              <li>・本数は公式の定期便ページに掲載されたお届け例の表記（Lite 4〜6本、S 4〜9本など）。LLは表記に揺れがあるとの公式レビューもあります。</li>
              <li>・クール便を選べます（有料・Liteは通常便のみ）。クール便の料金は公式の静的ページでは確認できなかったため、申込画面で確認してください。</li>
              <li>・出典：hitohana公式 特定商取引法に基づく表記・お花の定期便ページ（2026年10月14日確認）。</li>
            </ul>
          </div>
        </section>

        {/* ─── Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohanaの口コミ・評判の傾向
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              hitohanaは公式の定期便ページでレビューを公開しており、総合評価は4.2（レビュー投稿件数11,687件の平均・2026年10月14日確認）です。公式に掲載されたレビューから読み取れる傾向は次のとおりです。
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              <div className="rounded-xl bg-[#F6FAF7] border border-[#DDE8E0] p-5">
                <h3 className="font-bold text-[#4A7C59] mb-3">良い口コミの傾向</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  <li>◎ 色味がかわいく、箱を開けた瞬間に癒される</li>
                  <li>◎ スーパーにないような珍しい花材が入り、組み合わせのバランスが良い</li>
                  <li>◎ クール便を選ぶと暑い時期もきれいな状態で届いた</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#FBF7F2] border border-[#F0DCCB] p-5">
                <h3 className="font-bold text-[#C08552] mb-3">気になる口コミの傾向</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  <li>△ 指定した色と違う印象の花が届いた</li>
                  <li>△ 思ったよりボリュームが少なく、送料分を考えるとスーパーの方が多いと感じた</li>
                  <li>△ 同じ花材（カーネーションなど）がかぶることがある</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-[#999]">出典：<a href="https://hitohana.tokyo/flower-subscription" target="_blank" rel="noopener noreferrer nofollow" className="underline">hitohana公式 お花の定期便ページのレビュー</a>（2026年10月14日確認）。公式サイト上のレビューで、件数・評価は変動します。当サイトは個人の体験談を創作・掲載しません。</p>
          </div>
        </section>

        {/* ─── Pros ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohanaのメリット
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "色を毎回選べる",
                  text: "6色＋おまかせから、毎回お届けの色を指定できます（公式FAQ）。インテリアや季節に合わせて変えられます。",
                },
                {
                  title: "ボリュームを5サイズから選べる",
                  text: "Lite（1,320円）からLL（4,950円）まで、飾る場所や予算に合わせて選べます。",
                },
                {
                  title: "回数の縛りがない",
                  text: "特定商取引法に基づく表記に「当社の定期購入には回数の縛りがございません」と明記されています。",
                },
                {
                  title: "宅急便で丁寧に届く",
                  text: "専用ボックスで宅配業者が届けるため、ポストに押し込まれる心配がありません。傷んでいた場合は写真を送れば交換・返品の相談ができます。",
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

        {/* ─── Cons ─── */}
        <section id="cons" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohanaのデメリット・注意点
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "ポスト投函に対応していない",
                  text: "宅急便でのお届けなので、受け取りの手間はポスト投函型（medelu・ハナメクのライトなど）より大きくなります。",
                },
                {
                  title: "花の種類は指定できない",
                  text: "選べるのは色とボリュームで、具体的な花の種類は指定できません。",
                },
                {
                  title: "最安でも1,320円",
                  text: "ポスト投函型のmedelu（748円・送料込）などと比べると、1回あたりの料金は高めです。",
                },
                {
                  title: "締切はお届け日の3日前0時",
                  text: "変更・解約はお届け日の3日前0時まで（特商法）。確定済みの次回分はキャンセルできません。",
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

        {/* ─── How to Start ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohana 花の定期便の始め方
            </h2>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "公式の定期便ページを開く", text: "hitohana公式サイト（hitohana.tokyo）の「お花の定期便」ページを開きます。" },
                { step: "STEP 2", title: "ボリュームと色を選ぶ", text: "Lite／S／M／L／LLの5サイズと、6色＋おまかせから選びます。迷ったらLiteかSから。" },
                { step: "STEP 3", title: "お届け頻度・お届け日を選ぶ", text: "お届けの頻度と日付を選びます。暑い時期はクール便（有料・Lite以外）も検討しましょう。" },
                { step: "STEP 4", title: "支払い方法を登録", text: "定期便の支払いはクレジットカードのみです（公式FAQ）。" },
                { step: "STEP 5", title: "締切を確認しておく", text: "変更・スキップ・解約はお届け日の3日前0時までにマイページから。" },
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

        {/* ─── Recommendation ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              hitohanaはこんな方におすすめ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#4A7C59] mb-4">おすすめの人</h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>花の色を自分で選びたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>飾る場所に合わせてボリュームを選びたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>回数の縛りなしで始めたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>宅急便で丁寧に受け取りたい方</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#C08552] mb-4">おすすめしない人</h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>ポスト投函で受け取りたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>1回あたりの安さを最優先したい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#E0B8B8] mt-1 shrink-0">--</span><span>花の種類まで指定したい方</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#E8F0EB] transition-colors text-left"
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
                    <div className="px-5 py-4 bg-white border-t border-[#E5E5E5]">
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
              HitoHana（ヒトハナ）の解約手順【完全ガイド】
            </h2>
            <p className="text-sm text-[#666] mb-6">回数縛りなし（特商法に明記）。お届け日の3日前0時までに手続きを。</p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">マイページにログイン</h3>
                    <p className="text-sm text-[#666] leading-relaxed">HitoHana公式サイトのマイページへ。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「定期便」セクションを開く</h3>
                    <p className="text-sm text-[#666] leading-relaxed">契約中の定期便プランを表示。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">「解約手続き」をクリック</h3>
                    <p className="text-sm text-[#666] leading-relaxed">解約フォームへ進みます。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">理由・改善点を入力(任意)</h3>
                    <p className="text-sm text-[#666] leading-relaxed">フィードバックは任意。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">5</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">解約を最終確定</h3>
                    <p className="text-sm text-[#666] leading-relaxed">お届け日の3日前0時までに手続き完了を。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">6</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">完了メール受信</h3>
                    <p className="text-sm text-[#666] leading-relaxed">解約完了の通知メールが届きます。</p>
                  </div>
                </div>
            </div>
            <p className="text-xs text-[#888] mt-4 text-center">※ 2026年5月時点の手順です。最新の解約方法はHitoHana（ヒトハナ）公式サイトでご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：hitohanaの花の定期便は「色とボリュームを選びたい」方向け
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              hitohana（ヒトハナ）の花の定期便は、6色＋おまかせから色を、5サイズからボリュームを毎回選べるのが特徴です。回数の縛りがなく、1回1,320円（Lite）から始められます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              一方で、ポスト投函には対応しておらず宅急便での受け取りになる点、変更・解約の締切がお届け日の3日前0時である点は把握しておきましょう。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              安さとポスト投函を重視するならmedeluやハナメク、色を選んで丁寧に受け取りたいならhitohana、と目的で選ぶのがおすすめです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://hitohana.tokyo/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                HitoHana公式サイトはこちら
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
            <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-5">HitoHanaに関連する比較・ガイド</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/vs/lifft-vs-hitohana/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">LIFFT vs HitoHana 比較 →</a>
              <a href="/vs/hitohana-vs-medelu/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">HitoHana vs medelu 比較 →</a>
              <a href="/compare/bloomee-vs-hitohana/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">bloomee vs HitoHana 比較 →</a>
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
              料金・条件は2026年10月14日時点で公式サイトから確認したものです。最新の料金・サービス内容は各公式サイトでご確認ください。
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
