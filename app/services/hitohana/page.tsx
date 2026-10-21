"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "HitoHana（ヒトハナ）の公式サイトはどこですか？",
    a: "HitoHanaの公式サイトは hitohana.tokyo です。運営は株式会社Beer and Techで、観葉植物・フラワーギフト・胡蝶蘭・お花の定期便などを扱っています。なお、当サイト（flowerデリ）は花の定期便の比較サイトであり、HitoHanaの公式サイトではありません。",
  },
  {
    q: "HitoHanaの花の定期便の料金はいくらですか？",
    a: "特定商取引法に基づく表記では、1回あたりにかかる金額（税込）がLite 1,320円、S 1,980円、M 2,640円、L 3,850円、LL 4,950円と掲載されています。申込画面でも同じ金額が「(税込)/1回」と表示されています（2026年10月18日確認）。定期便について、これとは別の送料の記載は公式サイトで確認できませんでした。",
  },
  {
    q: "HitoHanaの花の定期便はどのくらいの頻度で届きますか？",
    a: "申込画面で「毎週」「2週間に1回」「4週間に1回」の3つから選べます（2026年10月18日確認）。",
  },
  {
    q: "HitoHanaの花の定期便はスキップできますか？",
    a: "できます。マイページの『次回のお届け内容の変更』で、該当する週の『お届けの有無』をスキップにして保存します。スキップした週の料金はかかりません。期限はお届け希望日の2〜3日前で、曜日によって異なります（公式FAQ）。",
  },
  {
    q: "HitoHanaの花の定期便はギフトとして贈れますか？",
    a: "贈れます。公式の「お花のサブスクギフト（定期便）」ページから申し込めます。ギフトにおすすめとされているS〜LLは透明な蓋の専用ボックスで届き、メッセージカードは有料オプションで添えられます（2026年10月18日確認）。",
  },
  {
    q: "HitoHanaの花の定期便に回数の縛りはありますか？",
    a: "ありません。特定商取引法に基づく表記に「当社の定期購入には回数の縛りがございません」と明記されています。解約はマイページの『解約』からいつでもでき、締切はお届け日の3日前0時です（特商法）。次回のお届けが確定している注文はキャンセルできません（公式FAQ）。",
  },
  {
    q: "HitoHanaの花の定期便は色を選べますか？",
    a: "選べます。6色＋おまかせから毎回色を指定でき、ボリュームは5サイズから選べます。ただし、花の種類は指定できません（公式FAQ）。",
  },
  {
    q: "HitoHanaの花はポスト投函で届きますか？",
    a: "ポスト投函ではありません。公式サイトでは、専用ボックスに入れて宅急便で届けると案内されています。",
  },
  {
    q: "HitoHanaの口コミ・評判はどうですか？",
    a: "公式の定期便ページでの総合評価は4.2（レビュー投稿件数11,691件の平均・2026年10月18日確認）です。「色味がかわいい」「花材の組み合わせが良い」という声が多い一方、「色指定と違った」「思ったよりボリュームが少ない」という声もあります。",
  },
  {
    q: "届いた花が傷んでいたら交換できますか？",
    a: "公式の定期便ページでは、お届け日を含む3日以内に写真を添えて連絡すれば、返品または交換に対応すると案内されています。ただし、受け取り方法で「手渡し」以外を選んだ場合や、指定日に受け取れなかった場合は補償の対象外です（公式FAQ）。",
  },
];

/* ─── Pricing Data ─── */
const pricingPlans = [
  { name: "Lite", price: "1,320円", volume: "4〜6本", height: "20cm前後", cool: "通常便のみ" },
  { name: "S", price: "1,980円", volume: "4〜9本", height: "25cm前後", cool: "選択可" },
  { name: "M", price: "2,640円", volume: "7〜11本", height: "25cm前後", cool: "選択可" },
  { name: "L", price: "3,850円", volume: "10〜15本", height: "35cm前後", cool: "選択可" },
  { name: "LL", price: "4,950円", volume: "13〜20本", height: "35cm前後", cool: "選択可" },
];

const HH_LAW = "https://hitohana.tokyo/law";
const HH_SUB = "https://hitohana.tokyo/flower-subscription";
const HH_NEW = "https://hitohana.tokyo/subscriptions/contract/new";
const HH_FAQ = "https://hitohana.tokyo/faq";
const HH_GIFT = "https://hitohana.tokyo/flower-subscription-gift";
const PARTNER_IDS = ["bloomee", "andplants", "hanameku", "medelu"];
const partners = PARTNER_IDS.map((id) => SERVICES.find((s) => s.id === id)!).filter(Boolean);

/* ─── Main Component ─── */
export default function HitoHanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"HitoHana（ヒトハナ）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"株式会社Beer and Tech\",\"url\":\"https://hitohana.tokyo/\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/hitohana/\"}" }} />
                {/* CANCEL_FLOW_SCHEMA_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"HowTo\", \"name\": \"HitoHana（ヒトハナ）お花の定期便の解約手順\", \"description\": \"HitoHana（ヒトハナ）のお花の定期便を解約する手順（公式FAQ・特定商取引法に基づく表記にもとづく）\", \"step\": [{\"@type\": \"HowToStep\", \"position\": 1, \"name\": \"マイページにログインする\", \"text\": \"HitoHana公式サイトのマイページにログインします。\"}, {\"@type\": \"HowToStep\", \"position\": 2, \"name\": \"『解約』の項目から手続きする\", \"text\": \"マイページの『解約』の項目から、いつでも解約できます。回数の縛りはありません。\"}, {\"@type\": \"HowToStep\", \"position\": 3, \"name\": \"締切に注意する\", \"text\": \"解約はお届け日の3日前0時までに手続きします。次回のお届けが確定している注文はキャンセルできません。\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"HitoHana（ヒトハナ）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/hitohana/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"HitoHana（ヒトハナ）花のサブスクの料金・頻度・スキップ・解約・口コミ\",\"description\":\"HitoHana（ヒトハナ）のお花の定期便の料金表・お届け頻度・スキップと解約の締切・ギフト・他社との違いを、公式サイトの確認にもとづいてご説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-21T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/hitohana/\"}}" }} />
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
                  <span className="text-[#333] font-medium">HitoHana（ヒトハナ）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー｜2026年10月21日更新
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              ヒトハナ（HitoHana）花のサブスク<br className="hidden md:block" />
              運営会社・料金表・頻度・スキップ・解約を公式確認
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-6 max-w-2xl mx-auto leading-relaxed">
              ヒトハナ（HitoHana）は、<strong>株式会社Beer and Tech（埼玉県さいたま市大宮区・代表取締役 森田憲久）が運営する</strong>花と植物の通販サイトで、観葉植物・フラワーギフト・胡蝶蘭と「お花の定期便」を扱っています（運営会社は公式の特定商取引法に基づく表記と国税庁 法人番号公表サイトで2026年10月21日に確認）。
              当サイトでは、色とボリュームを選べる花のサブスク（お花の定期便）の料金・お届け頻度・スキップと解約の締切・ギフト・口コミの傾向と、bloomee・medeluなど他社との違いを、2026年10月18日に公式サイトで確認した情報にもとづいてご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">定期便の料金</p><p className="text-xl font-bold text-[#4A7C59]">1,320円/回〜</p></div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">回数の条件</p><p className="text-xl font-bold text-[#4A7C59]">なし</p></div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">お届け頻度</p><p className="text-xl font-bold text-[#4A7C59]">毎週・2週・4週</p></div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm"><p className="text-xs text-[#999] mb-1">公式レビュー</p><p className="text-xl font-bold text-[#4A7C59]">4.2（11,691件）</p></div>
            </div>
            <p className="text-xs text-[#888]">
              HitoHanaの公式サイトは <a href="https://hitohana.tokyo/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">hitohana.tokyo</a> です（当サイトは比較・情報サイトであり、公式サイトではありません）。
            </p>
          </div>
        </section>

        {/* ─── Verdict ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F6FAF7] p-5 md:p-6">
              <p className="text-xs text-[#4A7C59] font-bold mb-1">最終更新：2026年10月18日（料金・頻度・条件・レビュー数は同日に公式サイトで確認）</p>
              <h2 className="text-lg md:text-xl font-bold text-[#333] mb-3">HitoHanaの色・ボリューム・料金・解約条件の要点</h2>
              <ul className="text-sm md:text-base text-[#444] leading-relaxed space-y-2">
                <li>・<strong>色（6色＋おまかせ）とボリューム（5サイズ）を毎回選べる</strong>点が最大の特徴です。花の種類は指定できません。</li>
                <li>・料金は1回1,320円（Lite）〜4,950円（LL）です。特定商取引法に基づく表記では「1回あたりにかかる金額（税込）」として掲載されています。</li>
                <li>・<strong>回数の条件はありません</strong>（特商法に明記）。変更・解約の締切はお届け日の3日前0時です。</li>
                <li>・専用ボックスに入れて宅急便で届きます（ポスト投函ではありません）。お届け頻度は、毎週・2週間に1回・4週間に1回から選べます。北海道・沖縄・九州の一部エリア（離島などの一部）には届きません。</li>
                <li>・スキップはマイページから週単位ででき、スキップした週の料金はかかりません。友人や家族へのギフトとしても申し込めます。</li>
                <li>・公式の定期便ページでの総合評価は4.2（レビュー投稿件数11,691件の平均）です。良い口コミには「色味がかわいい」「花材の組み合わせが良い」、気になる口コミには「色指定と違った」「思ったよりボリュームが少ない」などがあります。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">本ページの内容</p>
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. HitoHana（ヒトハナ）の概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 花の定期便の料金（公式確認）</a></li>
                  <li><a href="#frequency" className="hover:text-[#4A7C59] transition-colors">3. お届け頻度・スキップ・変更</a></li>
                  <li><a href="#gift" className="hover:text-[#4A7C59] transition-colors">4. ギフトとして贈る場合</a></li>
                  <li><a href="#compare" className="hover:text-[#4A7C59] transition-colors">5. HitoHanaと他社の違い</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">6. 口コミ・評判の傾向</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">7. メリット</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">8. デメリット・注意点</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">9. 始め方</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">10. おすすめできる方・おすすめできない方</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">11. よくある質問</a></li>
                  <li><a href="#cancellation" className="hover:text-[#4A7C59] transition-colors">12. 解約手順</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHana（ヒトハナ）の概要
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              HitoHana（ヒトハナ）は、株式会社Beer and Tech（埼玉県さいたま市）が運営する花と植物の通販サイトです。観葉植物、花束・アレンジメント・スタンド花などのフラワーギフト、胡蝶蘭、花瓶・鉢カバーなどを扱い、その中の一つとして自宅向けの「お花の定期便」を提供しています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              HitoHanaはギフトや観葉植物の通販も行っていますが、当サイトでは比較サイトとして、花の定期便（サブスク）を中心に料金・条件・口コミを整理しています。ギフトや観葉植物をお探しの方は、公式サイトをご覧ください。
            </p>
            <div className="bg-[#F8F8F8] rounded-xl p-5 mt-2">
              <h3 className="text-sm font-bold text-[#333] mb-3">HitoHana（ヒトハナ）の運営会社と基本情報（2026年10月18日・21日 公式確認）</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-[#999]">運営会社</div><div className="text-[#333]">株式会社Beer and Tech（ビアアンドテック）</div>
                <div className="text-[#999]">代表者</div><div className="text-[#333]">代表取締役 森田 憲久</div>
                <div className="text-[#999]">所在地</div><div className="text-[#333]">〒330-0855 埼玉県さいたま市大宮区上小町629-1 ハイタッチかみこ2F</div>
                <div className="text-[#999]">法人番号</div><div className="text-[#333]">5011001101756（法人番号の指定 2015年10月5日・2021年4月15日に現所在地へ移転）</div>
                <div className="text-[#999]">公式サイト</div><div className="text-[#333]"><a href="https://hitohana.tokyo/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] hover:underline">hitohana.tokyo</a></div>
                <div className="text-[#999]">主な商品</div><div className="text-[#333]">観葉植物・フラワーギフト・胡蝶蘭・お花の定期便</div>
                <div className="text-[#999]">定期便の届き方</div><div className="text-[#333]">専用ボックスの宅急便（ポスト投函なし）</div>
                <div className="text-[#999]">お届け頻度</div><div className="text-[#333]">毎週・2週間に1回・4週間に1回</div>
                <div className="text-[#999]">お届けできない地域</div><div className="text-[#333]">北海道・沖縄・九州の一部エリア（離島などの一部）</div>
                <div className="text-[#999]">支払い方法</div><div className="text-[#333]">定期便はクレジットカードのみ（Visa・Mastercard・JCB・American Express・Diners）</div>
                <div className="text-[#999]">問い合わせ</div><div className="text-[#333]">電話 048-606-2625（10:00〜17:00・土日祝日も営業）、メール、LINE</div>
              </div>
              <p className="text-xs text-[#999] mt-3">出典：HitoHana公式 <a href={HH_LAW} target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>・<a href={HH_SUB} target="_blank" rel="noopener noreferrer nofollow" className="underline">お花の定期便ページ</a>・<a href={HH_NEW} target="_blank" rel="noopener noreferrer nofollow" className="underline">定期便の申込画面</a>（2026年10月18日確認）。運営会社・代表者・所在地は<a href={HH_LAW} target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>、法人番号と所在地の変更履歴は<a href="https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=5011001101756" target="_blank" rel="noopener noreferrer nofollow" className="underline">国税庁 法人番号公表サイト</a>で2026年10月21日に確認。</p>
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHana 花の定期便の料金プラン
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              特定商取引法に基づく表記では、定期便の価格は「1回あたりにかかる金額（消費税込）」として次のとおり掲載されています。申込画面の表示も同じ金額です（2026年10月18日確認）。色は6色＋おまかせから、ボリュームは5サイズから選べます。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">ボリューム</th>
                    <th className="px-4 py-3 text-center font-medium">1回あたり（税込）</th>
                    <th className="px-4 py-3 text-center font-medium">花材の本数</th>
                    <th className="px-4 py-3 text-center font-medium">高さの目安</th>
                    <th className="px-4 py-3 text-center font-medium">クール便</th>
                  </tr>
                </thead>
                <tbody className="text-[#666]">
                  {pricingPlans.map((plan, i) => (
                    <tr key={i} className={`border-b border-[#E5E5E5] ${i % 2 === 1 ? "bg-[#F8F8F8]" : ""}`}>
                      <td className="px-4 py-3 font-bold text-[#333]">{plan.name}</td>
                      <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">{plan.price}</td>
                      <td className="px-4 py-3 text-center">{plan.volume}</td>
                      <td className="px-4 py-3 text-center">{plan.height}</td>
                      <td className="px-4 py-3 text-center">{plan.cool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="text-xs md:text-sm text-[#666] space-y-1">
              <li>・本数と高さは、申込画面の各ボリュームの表記です。</li>
              <li>・定期便について、上の金額とは別の送料の記載は、特商法の表記・定期便ページ・申込画面のいずれでも確認できませんでした。</li>
              <li>・配送タイプは通常便とクール便から選べます（Liteは通常便のみ）。クール便の追加料金の有無と金額は、公式の静的ページでは確認できなかったため、申込画面でご確認ください。</li>
              <li>・料金はお届けが完了した時点で、1回ごとにクレジットカードに課金されます（特商法）。</li>
              <li>・出典：HitoHana公式 <a href={HH_LAW} target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>・<a href={HH_NEW} target="_blank" rel="noopener noreferrer nofollow" className="underline">定期便の申込画面</a>（2026年10月18日確認）。</li>
            </ul>
          </div>
        </section>

        {/* ─── Frequency / Skip ─── */}
        <section id="frequency" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaのお届け頻度・スキップ・変更
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse bg-white">
                <tbody className="text-[#555]">
                  <tr className="border-b border-[#E5E5E5]"><th className="px-4 py-3 text-left bg-[#F6FAF7] w-1/3 font-bold text-[#333]">お届け頻度</th><td className="px-4 py-3">毎週・2週間に1回・4週間に1回から選択</td></tr>
                  <tr className="border-b border-[#E5E5E5]"><th className="px-4 py-3 text-left bg-[#F6FAF7] font-bold text-[#333]">色の指定</th><td className="px-4 py-3">申込時に選ぶのは初回の色で、2回目以降は毎回指定できます（花の種類は指定不可）</td></tr>
                  <tr className="border-b border-[#E5E5E5]"><th className="px-4 py-3 text-left bg-[#F6FAF7] font-bold text-[#333]">スキップ</th><td className="px-4 py-3">マイページの『次回のお届け内容の変更』で、該当する週の『お届けの有無』をスキップにして保存します。スキップした週の料金はかかりません</td></tr>
                  <tr className="border-b border-[#E5E5E5]"><th className="px-4 py-3 text-left bg-[#F6FAF7] font-bold text-[#333]">スキップ・変更の期限</th><td className="px-4 py-3">公式FAQではお届け希望日の2〜3日前（曜日により異なり、マイページに表示）。特商法では、お届け日の3日前0時までに連絡がなければお届け日が確定すると定めています</td></tr>
                  <tr className="border-b border-[#E5E5E5]"><th className="px-4 py-3 text-left bg-[#F6FAF7] font-bold text-[#333]">お届け内容の案内</th><td className="px-4 py-3">お届け予定日の約1週間前に「お花の定期便通信」（メール）で案内されます（メールマガジン登録者）</td></tr>
                  <tr><th className="px-4 py-3 text-left bg-[#F6FAF7] font-bold text-[#333]">お届けできない地域</th><td className="px-4 py-3">北海道・沖縄・九州の一部エリア（離島などの一部）。中国地方・九州地方の一部は、お届けの曜日が限られます</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mb-3">期限が近い場合は、3日前0時を目安に早めに手続きすると確実です。</p>
            <p className="text-xs text-[#999]">出典：HitoHana公式 <a href={HH_NEW} target="_blank" rel="noopener noreferrer nofollow" className="underline">定期便の申込画面</a>・<a href={HH_FAQ} target="_blank" rel="noopener noreferrer nofollow" className="underline">よくあるご質問</a>・<a href={HH_LAW} target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>・<a href={HH_SUB} target="_blank" rel="noopener noreferrer nofollow" className="underline">お花の定期便ページ</a>（2026年10月18日確認）</p>
          </div>
        </section>

        {/* ─── Gift ─── */}
        <section id="gift" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaの花のサブスクをギフトとして贈る場合
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              HitoHanaには、定期便を贈り物にする「お花のサブスクギフト（定期便）」があります。公式ページで案内されている内容は次のとおりです。
            </p>
            <ul className="text-sm md:text-base text-[#555] leading-relaxed space-y-2 mb-4">
              <li>・色は6色＋おまかせ、ボリュームは5サイズから選べます。</li>
              <li>・ギフトにおすすめとされているS〜LLは、透明な蓋でお花が上から見える専用ボックスに入れ、宅配業者が手渡しで届けます（Liteは横向きに梱包するボックス）。</li>
              <li>・メッセージカードを有料オプションで添えられます。内容は自由に記入でき、画面上でレイアウトを確認できます。</li>
            </ul>
            <p className="text-xs text-[#999]">出典：<a href={HH_GIFT} target="_blank" rel="noopener noreferrer nofollow" className="underline">HitoHana公式 お花のサブスクギフト（定期便）</a>（2026年10月18日確認）。メッセージカードの料金は公式の静的ページでは確認できませんでした。</p>
          </div>
        </section>

        {/* ─── Compare with partners ─── */}
        <section id="compare" className="py-12 md:py-16 bg-[#FBF8F4]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaと他社の花のサブスクの違い
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              HitoHanaは色とボリュームを選べる宅急便型です。ポスト投函型や送料の扱いが異なる他社と、最安プランで比べると次のとおりです。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse bg-white min-w-[640px]">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-3 py-3 text-left font-medium">サービス</th>
                    <th className="px-3 py-3 text-center font-medium">最安プラン（1回）</th>
                    <th className="px-3 py-3 text-center font-medium">送料</th>
                    <th className="px-3 py-3 text-center font-medium">ポスト投函</th>
                    <th className="px-3 py-3 text-center font-medium">お届け頻度</th>
                    <th className="px-3 py-3 text-center font-medium">回数の条件</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  <tr className="border-b border-[#E5E5E5] bg-[#F6FAF7]">
                    <td className="px-3 py-3 font-bold text-[#333]">HitoHana</td>
                    <td className="px-3 py-3 text-center">Lite 1,320円（4〜6本）</td>
                    <td className="px-3 py-3 text-center">別途の記載なし</td>
                    <td className="px-3 py-3 text-center">なし（宅急便）</td>
                    <td className="px-3 py-3 text-center">毎週・2週・4週</td>
                    <td className="px-3 py-3 text-center">なし</td>
                  </tr>
                  {partners.map((s) => (
                    <tr key={s.id} className="border-b border-[#E5E5E5]">
                      <td className="px-3 py-3 font-bold text-[#333]"><a href={s.servicePath} className="text-[#4A7C59] underline">{s.name}</a></td>
                      <td className="px-3 py-3 text-center">{s.cheapest.name} {s.cheapest.price.toLocaleString()}円（{s.cheapest.flowers}）</td>
                      <td className="px-3 py-3 text-center">{s.shippingIncluded ? "込み" : s.shippingShort ?? "別途"}</td>
                      <td className="px-3 py-3 text-center">{s.plans.some((p) => p.postDelivery) ? "あり" : "なし"}</td>
                      <td className="px-3 py-3 text-center">{s.frequencyShort}</td>
                      <td className="px-3 py-3 text-center">{s.commitmentLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="text-xs md:text-sm text-[#666] space-y-1 mb-2">
              <li>・色を毎回指定したい場合はHitoHana、1回あたりの安さとポスト投函を重視する場合はmedeluやhanameku、送料込みの宅急便型で比べたい場合はAND PLANTSが候補になります。</li>
              <li>・bloomeeは送料が別にかかり、最初の4回は受け取りが必要です。</li>
            </ul>
            <p className="text-xs text-[#999]">出典：HitoHanaは公式（2026年10月18日確認）、他社は各社公式（{partners.map((s) => s.verifiedAt).filter((v, i, a) => a.indexOf(v) === i).join("・")}確認）。各社の送料・地域別の追加料金の詳細は、各サービスのページをご覧ください。</p>
          </div>
        </section>

        {/* ─── Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaの口コミ・評判の傾向
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              HitoHanaは公式の定期便ページでレビューを公開しており、総合評価は4.2（レビュー投稿件数11,691件の平均・2026年10月18日確認）です。公式に掲載されたレビューから読み取れる傾向は、次のとおりです。
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              <div className="rounded-xl bg-[#F6FAF7] border border-[#DDE8E0] p-5">
                <h3 className="font-bold text-[#4A7C59] mb-3">良い口コミの傾向</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  <li>・色味がかわいく、箱を開けた瞬間に癒やされる</li>
                  <li>・スーパーにないような珍しい花材が入り、組み合わせのバランスが良い</li>
                  <li>・2回目以降は色を変えられるので、季節ごとに色味を変えて楽しめる</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#FBF7F2] border border-[#F0DCCB] p-5">
                <h3 className="font-bold text-[#C08552] mb-3">気になる口コミの傾向</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  <li>・指定した色と違う印象の花が届いた</li>
                  <li>・思ったよりボリュームが少なく、送料分を考えるとスーパーの方が量が多いと感じた</li>
                  <li>・同じ色で続けると、花材や色合いが似てきて飽きる</li>
                  <li>・暑い時期は、写真より寂しい内容に感じた</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-[#999]">出典：<a href="https://hitohana.tokyo/flower-subscription" target="_blank" rel="noopener noreferrer nofollow" className="underline">HitoHana公式 お花の定期便ページのレビュー</a>（2026年10月18日確認）。公式サイト上のレビューのため、件数・評価は変動します。当サイトでは、個人の体験談の創作・掲載は行っていません。</p>
          </div>
        </section>

        {/* ─── Pros ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaのメリット
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "色を毎回選べる",
                  text: "6色＋おまかせから、毎回お届けの色を指定できます（公式FAQ）。インテリアや季節に合わせて変更できます。",
                },
                {
                  title: "ボリュームを5サイズから選べる",
                  text: "Lite（1,320円）からLL（4,950円）まで、飾る場所や予算に合わせて選べます。",
                },
                {
                  title: "週単位でスキップできる",
                  text: "不在の週はマイページからスキップでき、その週の料金はかかりません（公式FAQ）。お届け頻度も毎週・2週間に1回・4週間に1回から選べます。",
                },
                {
                  title: "回数の条件がない",
                  text: "特定商取引法に基づく表記に「当社の定期購入には回数の縛りがございません」と明記されています。",
                },
                {
                  title: "宅急便で丁寧に届く",
                  text: "専用ボックスに入れて宅配業者が届けるため、ポストに押し込まれる心配がありません。傷んでいた場合は、お届け日を含む3日以内に写真を添えて連絡すれば、返品または交換に対応すると案内されています。",
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
              HitoHanaのデメリット・注意点
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "ポスト投函に対応していない",
                  text: "宅急便でのお届けのため、受け取りの手間はポスト投函型（medelu・ハナメクのライトなど）より大きくなります。",
                },
                {
                  title: "北海道・沖縄などに届かない",
                  text: "北海道・沖縄・九州の一部エリア（離島などの一部）には届きません（申込画面）。",
                },
                {
                  title: "花の種類は指定できない",
                  text: "選べるのは色とボリュームで、具体的な花の種類は指定できません。",
                },
                {
                  title: "最安のプランでも1,320円である",
                  text: "ポスト投函型のmedelu（748円・送料込）などと比べると、1回あたりの料金は高めです。",
                },
                {
                  title: "締切はお届け日の3日前0時である",
                  text: "解約はお届け日の3日前0時までに手続きする必要があります（特商法）。次回のお届けが確定している注文はキャンセルできません（公式FAQ）。",
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
              HitoHana 花の定期便の始め方
            </h2>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "公式の定期便ページを開く", text: "HitoHana公式サイト（hitohana.tokyo）の「お花の定期便」ページを開きます。" },
                { step: "STEP 2", title: "ボリュームと色を選ぶ", text: "Lite／S／M／L／LLの5サイズと、6色＋おまかせから選びます。申込時に選ぶ色は初回分で、2回目以降は都度変更できます。" },
                { step: "STEP 3", title: "お届け頻度・配送タイプを選ぶ", text: "毎週・2週間に1回・4週間に1回から頻度を選び、通常便かクール便を選びます（Liteは通常便のみ）。公式は、気温25度以上が続く時期などはクール便を推奨しています。" },
                { step: "STEP 4", title: "支払い方法を登録する", text: "定期便の支払いはクレジットカードのみです（公式FAQ）。" },
                { step: "STEP 5", title: "締切を確認する", text: "スキップ・変更の期限はお届け希望日の2〜3日前（マイページに表示）、解約の締切はお届け日の3日前0時です。" },
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
              HitoHanaをおすすめできる方・おすすめできない方
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#4A7C59] mb-4">おすすめできる方</h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>花の色を自分で選びたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>飾る場所に合わせてボリュームを選びたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>回数の条件なしで始めたい方</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] mt-1 shrink-0">--</span><span>宅急便で丁寧に受け取りたい方</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#C08552] mb-4">おすすめできない方</h3>
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
              HitoHana（ヒトハナ）の解約手順
            </h2>
            <p className="text-sm text-[#666] mb-6">回数の条件はありません（特商法に明記）。公式に案内されている解約の手順と条件は次のとおりです。</p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              {[
                { t: "マイページにログインする", d: "HitoHana公式サイトのマイページにログインします。" },
                { t: "『解約』の項目から手続きする", d: "マイページの『解約』の項目から、いつでも解約できます（公式FAQ・特商法）。" },
                { t: "締切に注意する", d: "解約はお届け日の3日前0時までに手続きします。それより後の連絡で次回分に間に合わない場合、その回の代金は負担となります（特商法）。次回のお届けが確定している注文はキャンセルできません（公式FAQ）。" },
                { t: "一時的に止めたいだけならスキップを使う", d: "不在の週だけ止めたい場合は、解約ではなく『次回のお届け内容の変更』からスキップできます。再開したい場合も、マイページから手続きできます（公式FAQ）。" },
              ].map((x, i) => (
                <div key={i} className="flex gap-4 items-start mb-4">
                  <div className="bg-[#4A7C59] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">{i + 1}</div>
                  <div className="flex-1 bg-white border border-[#E0D5C8] rounded-xl p-4">
                    <h3 className="font-bold text-[#333] mb-1">{x.t}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#888] mt-4 text-center">出典：HitoHana公式 <a href={HH_FAQ} target="_blank" rel="noopener noreferrer nofollow" className="underline">よくあるご質問</a>・<a href={HH_LAW} target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>（2026年10月18日確認）。マイページ内の画面の構成は、公式サイトでご確認ください。</p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              HitoHanaの花の定期便は色とボリュームを選びたい方に適しています
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              HitoHana（ヒトハナ）の花の定期便は、6色＋おまかせから色を、5サイズからボリュームを毎回選べるのが特徴です。回数の条件はなく、1回1,320円（Lite）から始められ、お届け頻度は毎週・2週間に1回・4週間に1回から選べます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              一方で、ポスト投函には対応しておらず宅急便での受け取りになる点、北海道・沖縄などには届かない点、解約の締切がお届け日の3日前0時である点にご留意ください。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              料金の安さとポスト投函を重視する場合はmedeluやハナメク、色を選んで宅急便で受け取りたい場合はHitoHanaというように、目的に応じてお選びください。
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
              <a href="/service-guides/hitohana-kaiyaku/" className="block bg-white border border-[#E8E0D8] rounded-xl p-3 hover:border-[#C4877A] hover:text-[#C4877A] transition text-sm font-medium text-[#6B5F57]">HitoHanaの解約方法 →</a>
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
              HitoHanaの料金・条件は2026年10月18日、他社は2026年10月14日時点で公式サイトから確認したものです。ご利用前に、各公式サイトにて最新情報をご確認ください。
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
