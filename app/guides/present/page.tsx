"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクをプレゼントとして贈ることはできますか？",
    a: "はい、ギフトに対応しているサービスであれば、贈り先の住所に花を届けることができます。bloomeeはギフトチケット（デジタル）を贈る形式、AND PLANTSは注文時に届け先を相手の住所に指定する形式です。日本総合園芸は法人向けの手渡し配達にも対応しています。サービスによってギフトの仕組みが異なるため、ご利用前に、公式サイトにて最新情報をご確認ください。",
  },
  {
    q: "母の日に花の定期便を贈る場合、いつまでに申し込めばよいですか？",
    a: "母の日当日に届けたい場合は、少なくとも1週間前までに申し込むことをおすすめします。bloomeeのギフトチケットはデジタルで発行されるため即日贈ることができますが、実際の花の配送開始日は受け取る側が設定します。AND PLANTSや日本総合園芸は配送日を指定できる場合があるため、早めに公式サイトで母の日向けの対応をご確認ください。",
  },
  {
    q: "ギフトチケットとは何ですか？どのように使いますか？",
    a: "ギフトチケットとは、花のサブスクの利用権をデジタルチケットとして贈る仕組みです。bloomeeが提供しており、購入するとURLやQRコードが発行されます。受け取った方がそのURLから届け先住所やプランを設定すると、花が届き始めます。贈り先の住所を知らなくても贈れる点が大きな利点です。",
  },
  {
    q: "花の定期便をプレゼントする場合、相手の住所を知らなくても贈れますか？",
    a: "bloomeeのギフトチケットであれば、贈り先の住所を知らなくても贈れます。チケットを受け取った方が自分で届け先を入力するため、住所を尋ねる必要がありません。一方、AND PLANTSや日本総合園芸は注文時に届け先住所の入力が必要です。サプライズで贈りたい場合は、bloomeeのギフトチケットが便利です。",
  },
  {
    q: "プレゼントする期間（回数）は選べますか？",
    a: "サービスによって異なります。bloomeeのギフトチケットは期間を指定して購入できます（例：3か月、6か月、12か月など）。AND PLANTSは通常のサブスクリプションとして申し込み、贈り主が任意の時期に解約する形式です。予算に合わせて回数や期間を調整できるため、公式サイトで最新のギフトプランをご確認ください。",
  },
  {
    q: "プレゼント用にメッセージカードを付けることはできますか？",
    a: "bloomeeのギフトチケットにはデジタルメッセージを添えることができます。AND PLANTSは初回配送時にメッセージカードを同梱できるオプションがある場合があります。日本総合園芸は法人向けの手配を含め、メッセージカードの対応が可能です。いずれも時期やプランによって対応状況が変わるため、注文前に公式サイトにて最新情報をご確認ください。",
  },
  {
    q: "花の定期便のギフトにかかる費用はどれくらいですか？",
    a: "ギフトの費用はサービスとプラン、贈る期間によって異なります。bloomeeの定期便を贈る場合は、お試しプラン（花代980円＋送料385円/回）なら最初の4回で5,460円が目安です（ギフトチケットの金額は、2026年10月15日時点で公式サイトにて確認できなかったため、掲載を控えています）。AND PLANTSは1回1,980円（送料無料）からで、3か月（隔週6回）なら約11,880円です。予算に応じてプランと回数を選べるため、3,000円台から数万円台まで幅広く対応できます。",
  },
  {
    q: "贈られた側が、届く花のテイストや頻度を変更することはできますか？",
    a: "bloomeeのギフトチケットの場合、受け取る側がプランの選択や配送頻度の設定を行えるため、好みに合わせて調整できます。AND PLANTSは贈り主のアカウントで管理する形式のため、変更は贈り主が行う必要があります。サービスによって変更できる範囲が異なるため、贈り先の好みを尊重したい場合はbloomeeのギフトチケットが適しています。",
  },
];

/* ─── Gift Service Data ─── */
const giftServices = [
  {
    rank: 1,
    name: "bloomee",
    nameJa: "ブルーミー",
    giftType: "ギフトチケット（デジタル）",
    price: "980円〜/回",
    shipping: "385円〜",
    giftPlan: "3か月 / 6か月 / 12か月",
    addressRequired: "不要（相手が入力）",
    messageCard: "デジタルメッセージ対応",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    highlight: "ギフトチケットのため住所が不要。贈り先が届け先とプランを選択可能。累計3,000万本超のお届け実績。",
    bestFor: "相手の住所を知らない場合、手軽なギフトを贈りたい場合、母の日や誕生日のサプライズ",
    detail: "bloomeeはギフトチケット方式を採用しており、購入するとデジタルチケット（URL/QRコード）が発行されます。LINEやメールで贈り先に送ると、受け取った方が届け先住所やプラン、配送頻度を設定できます。贈り先の住所を知らなくても贈れるため、遠方に住むご両親や友人へのプレゼントに適しています。全国200店舗以上の提携花屋からアレンジが届き、知名度も高いため、花の定期便になじみのない方にも贈りやすいサービスです。",
  },
  {
    rank: 2,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    giftType: "届け先指定（直接配送）",
    price: "1,980円〜/回",
    shipping: "無料",
    giftPlan: "回数の条件なし（任意で解約）",
    addressRequired: "必要（注文時に指定）",
    messageCard: "初回メッセージカード対応あり",
    url: "/services/and-plants",
    officialUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    highlight: "プロのフローリストによるおしゃれなブーケ。送料無料で6〜8本（2026年10月17日公式確認）。初回クーポンあり。",
    bestFor: "おしゃれな花を贈りたい場合、インテリアに関心のある方へのプレゼント、結婚祝いや新築祝い",
    detail: "AND PLANTSは、注文時に届け先を贈り先の住所に設定することで、ギフトとして利用できます。プロのフローリストが一つずつアレンジしたブーケが届くため、見栄えを重視するギフトに適しています。1回1,980円で送料無料、6〜8本（2026年10月17日公式確認）のボリュームがあり、価格に対する満足度が高いサービスです。回数の条件がないため、贈り主の判断で任意の時期に解約でき、3か月のみ・半年のみなど期間を自由に調整できます。初回クーポンを利用すると、さらに費用を抑えて始められます。",
  },
  {
    rank: 3,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    giftType: "届け先指定（手渡し配達対応）",
    price: "2,200円〜/回",
    shipping: "別途（地域による）",
    giftPlan: "月1回 / 月2回",
    addressRequired: "必要（注文時に指定）",
    messageCard: "対応可能",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "ボリュームのある季節の花束。手渡し配達に対応し、法人ギフトにも利用可能。老舗事業者による品質。",
    bestFor: "ボリュームのある花束を贈りたい場合、法人の退職祝い・開店祝い、手渡しで届けたい場合",
    detail: "日本総合園芸は老舗の花き事業者が運営するサービスで、季節感のある華やかな花束が届きます。他サービスと比較してボリュームがある点が特徴で、特別な贈り物に適しています。手渡し配達にも対応しているため、法人の退職祝いや開店祝い、お見舞いなど、配達員から直接手渡しで届けたい場面に適しています。メッセージカードの同梱にも対応しており、改まったギフトにも利用できます。",
  },
];

/* ─── Occasion Data ─── */
const occasions = [
  {
    name: "母の日",
    timing: "毎年5月の第2日曜日",
    description: "花の定期便は、母の日のギフトとして選ばれる機会が増えています。一度きりの花束と異なり、毎月届く花のサブスクであれば、感謝の気持ちを長く伝えられます。遠方に住むお母様にも配送で届くため、帰省できない場合にも適しています。",
    recommend: "bloomeeのギフトチケット（住所不要で手軽）またはAND PLANTS（おしゃれなブーケ）",
    budget: "3か月分で3,000円〜6,000円が目安",
  },
  {
    name: "誕生日",
    timing: "相手の誕生日に合わせて開始",
    description: "誕生日プレゼントに花の定期便を贈ると、誕生月だけでなく、その後も毎月花が届く体験を贈ることができます。物ではなく体験を贈りたい方に選ばれています。",
    recommend: "AND PLANTS（おしゃれで特別感がある）またはbloomeeのギフトチケット（贈り先が好みを選べる）",
    budget: "3か月〜6か月分で6,000円〜12,000円が目安",
  },
  {
    name: "結婚祝い",
    timing: "結婚報告後、新居への引越し後",
    description: "新生活を彩る花の定期便は、結婚祝いに適しています。新居のインテリアに合う花が届くため、新生活の始まりを華やかに演出できます。カタログギフトと並ぶ新しい選択肢として注目されています。",
    recommend: "AND PLANTS（インテリアになじむアレンジ）または日本総合園芸（ボリュームのある花束）",
    budget: "3か月〜6か月分で6,000円〜20,000円が目安",
  },
  {
    name: "退職祝い",
    timing: "退職日前後",
    description: "退職後の新生活を応援する気持ちを込めて、花の定期便を贈る方が増えています。退職後は自宅で過ごす時間が増えるため、定期的に届く花が生活に彩りを添えます。法人からの贈り物にも、個人のプレゼントにも適しています。",
    recommend: "日本総合園芸（手渡し配達で法人利用に対応）またはbloomeeのギフトチケット（個人間で手軽に贈れる）",
    budget: "3か月〜6か月分で6,000円〜15,000円が目安",
  },
];

/* ─── Main Component ─── */
export default function PresentGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスクをプレゼントに贈る方法\",\"item\":\"https://ohana-delivery.com/guides/present/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクをプレゼントに贈る方法\",\"description\":\"花のサブスクをプレゼントに贈る方法を解説します。料金・評判・選び方をまとめています。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/present/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクをプレゼントとして贈ることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、ギフトに対応しているサービスであれば、贈り先の住所に花を届けることができます。bloomeeはギフトチケット（デジタル）を贈る形式、AND PLANTSは注文時に届け先を相手の住所に指定する形式です。日本総合園芸は法人向けの手渡し配達にも対応しています。サービスによってギフトの仕組みが異なるため、ご利用前に、公式サイトにて最新情報をご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"母の日に花の定期便を贈る場合、いつまでに申し込めばよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"母の日当日に届けたい場合は、少なくとも1週間前までに申し込むことをおすすめします。bloomeeのギフトチケットはデジタルで発行されるため即日贈ることができますが、実際の花の配送開始日は受け取る側が設定します。AND PLANTSや日本総合園芸は配送日を指定できる場合があるため、早めに公式サイトで母の日向けの対応をご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"ギフトチケットとは何ですか？どのように使いますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ギフトチケットとは、花のサブスクの利用権をデジタルチケットとして贈る仕組みです。bloomeeが提供しており、購入するとURLやQRコードが発行されます。受け取った方がそのURLから届け先住所やプランを設定すると、花が届き始めます。贈り先の住所を知らなくても贈れる点が大きな利点です。\"}},{\"@type\":\"Question\",\"name\":\"花の定期便をプレゼントする場合、相手の住所を知らなくても贈れますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeのギフトチケットであれば、贈り先の住所を知らなくても贈れます。チケットを受け取った方が自分で届け先を入力するため、住所を尋ねる必要がありません。一方、AND PLANTSや日本総合園芸は注文時に届け先住所の入力が必要です。サプライズで贈りたい場合は、bloomeeのギフトチケットが便利です。\"}},{\"@type\":\"Question\",\"name\":\"プレゼントする期間（回数）は選べますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サービスによって異なります。bloomeeのギフトチケットは期間を指定して購入できます（例：3か月、6か月、12か月など）。AND PLANTSは通常のサブスクリプションとして申し込み、贈り主が任意の時期に解約する形式です。予算に合わせて回数や期間を調整できるため、公式サイトで最新のギフトプランをご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"プレゼント用にメッセージカードを付けることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeのギフトチケットにはデジタルメッセージを添えることができます。AND PLANTSは初回配送時にメッセージカードを同梱できるオプションがある場合があります。日本総合園芸は法人向けの手配を含め、メッセージカードの対応が可能です。いずれも時期やプランによって対応状況が変わるため、注文前に公式サイトにて最新情報をご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"花の定期便のギフトにかかる費用はどれくらいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ギフトの費用はサービスとプラン、贈る期間によって異なります。bloomeeの定期便を贈る場合は、お試しプラン（花代980円＋送料385円/回）なら最初の4回で5,460円が目安です（ギフトチケットの金額は、2026年10月15日時点で公式サイトにて確認できなかったため、掲載を控えています）。AND PLANTSは1回1,980円（送料無料）からで、3か月（隔週6回）なら約11,880円です。予算に応じてプランと回数を選べるため、3,000円台から数万円台まで幅広く対応できます。\"}},{\"@type\":\"Question\",\"name\":\"贈られた側が、届く花のテイストや頻度を変更することはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeのギフトチケットの場合、受け取る側がプランの選択や配送頻度の設定を行えるため、好みに合わせて調整できます。AND PLANTSは贈り主のアカウントで管理する形式のため、変更は贈り主が行う必要があります。サービスによって変更できる範囲が異なるため、贈り先の好みを尊重したい場合はbloomeeのギフトチケットが適しています。\"}}]}" }} />
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
                  <span className="text-[#666]">ガイド記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">花の定期便をプレゼントに贈る方法</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花の定期便ギフトガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花の定期便をプレゼントに贈る方法<br className="hidden md:block" />
              母の日・誕生日におすすめのギフト対応サービス
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクは、プレゼントとしても選ばれる機会が増えています。
              当サイトでは、ギフトに対応している花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ギフト対応</p>
                <p className="text-xl font-bold text-[#4A7C59]">3サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">住所不要で贈れる</p>
                <p className="text-xl font-bold text-[#4A7C59]">bloomee</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ギフト予算</p>
                <p className="text-xl font-bold text-[#4A7C59]">3,000円〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">人気のシーン</p>
                <p className="text-xl font-bold text-[#4A7C59]">母の日・誕生日</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">目次</p>
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. 花の定期便がプレゼントに選ばれる理由</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#4A7C59] transition-colors">2. ギフト対応サービスの比較表</a></li>
                  <li><a href="#service-detail" className="hover:text-[#4A7C59] transition-colors">3. おすすめギフト対応サービスの詳細</a></li>
                  <li><a href="#occasions" className="hover:text-[#4A7C59] transition-colors">4. シーン別のおすすめ（母の日・誕生日・結婚祝い・退職祝い）</a></li>
                  <li><a href="#how-to-gift" className="hover:text-[#4A7C59] transition-colors">5. 花の定期便をプレゼントする手順</a></li>
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">6. ギフトを贈る際の注意点</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. 花の定期便ギフトに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便がプレゼントに選ばれる理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花の定期便（花のサブスク）をプレゼントに選ぶ方が増えています。
              一度きりの花束と異なり、毎月届く花のサブスクは、長く楽しめる体験を贈れる点が大きな魅力です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              特に母の日のギフトとして注目されており、遠方に住むお母様へ毎月花を届ける手段として選ばれています。
              誕生日や結婚祝い、退職祝いなど、さまざまなお祝いの場面に利用できるギフトです。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#4A7C59] mb-2">毎月届く</p>
                <p className="text-sm text-[#666]">一度きりではなく、数か月にわたって花が届く体験型のギフト</p>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#4A7C59] mb-2">手間がかからない</p>
                <p className="text-sm text-[#666]">申し込み後は自動で配送。花屋に行く手間も不要</p>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#4A7C59] mb-2">遠方にも配送可能</p>
                <p className="text-sm text-[#666]">離れて暮らす相手にも全国配送で届けられる</p>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">当ページの要点</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ ギフトに対応している花の定期便サービス3社を比較</li>
                <li>・ 母の日・誕生日・結婚祝い・退職祝いなどシーン別のおすすめ</li>
                <li>・ 花の定期便をプレゼントする手順を解説</li>
                <li>・ ギフトを贈る際の注意点を紹介</li>
                <li>・ 2026年4月時点の情報にもとづく</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ギフト対応サービスの比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              当サイトでは、花の定期便をプレゼントとして贈れる3つのサービスを、ギフト対応の仕組み・料金・特徴の観点から比較しています。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">ギフト方式</th>
                    <th className="px-4 py-3 text-right font-medium">料金（1回）</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-center font-medium">住所不要</th>
                    <th className="px-4 py-3 text-center font-medium">メッセージ</th>
                  </tr>
                </thead>
                <tbody>
                  {giftServices.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#4A7C59] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#999]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#666]">{item.giftType}</td>
                      <td className="px-4 py-4 text-right text-[#333]">{item.price}</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === "無料" ? (
                          <span className="text-[#4A7C59] font-medium">無料</span>
                        ) : (
                          <span className="text-[#666]">{item.shipping}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.addressRequired === "不要（相手が入力）" ? (
                          <span className="inline-block bg-[#4A7C59] text-white text-xs px-2 py-0.5 rounded">不要</span>
                        ) : (
                          <span className="text-xs text-[#999]">必要</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-xs text-[#666]">{item.messageCard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">表の補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ bloomeeのギフトチケットは公式サイトから購入可能です</li>
                <li>・ AND PLANTSは注文時に届け先を贈り先の住所に設定することで、ギフトとして利用できます</li>
                <li>・ 日本総合園芸の送料は地域によって異なります</li>
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 2026年4月時点の情報です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Service Detail ─── */}
        <section id="service-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              おすすめギフト対応サービスの詳細
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をギフトとして贈る際におすすめの3サービスについて、ギフト対応の仕組み・料金・適した利用場面をご説明します。
            </p>

            <div className="space-y-8">
              {giftServices.map((item) => (
                <div key={item.rank} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#FFFBEB] border-b border-[#F59E0B]" : "bg-[#E8F0EB] border-b border-[#C5D9CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                      item.rank === 1 ? "bg-[#F59E0B] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      "bg-[#B45309] text-white"
                    }`}>
                      {item.rank}位
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#333]">
                        {item.name}（{item.nameJa}）
                      </h3>
                      <p className="text-sm text-[#666]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">ギフト方式</p>
                        <p className="text-sm font-bold text-[#333]">{item.giftType}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">料金（1回）</p>
                        <p className="text-sm font-bold text-[#4A7C59]">{item.price}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">送料</p>
                        <p className="text-sm font-bold text-[#333]">
                          {item.shipping === "無料" ? (
                            <span className="text-[#4A7C59]">無料</span>
                          ) : (
                            item.shipping
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#999] w-32 shrink-0">ギフトプラン</span>
                        <span className="text-[#333]">{item.giftPlan}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-32 shrink-0">相手の住所</span>
                        <span className="text-[#333]">{item.addressRequired}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-32 shrink-0">メッセージ</span>
                        <span className="text-[#333]">{item.messageCard}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#666] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Best For */}
                    <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#4A7C59]">おすすめの利用場面：</span>
                        <span className="text-[#666]">{item.bestFor}</span>
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={item.url}
                        className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                      >
                        {item.name}の詳細レビューを見る
                      </a>
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm"
                      >
                        {item.name}公式サイトはこちら
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Occasions ─── */}
        <section id="occasions" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              母の日・誕生日・結婚祝い・退職祝いのシーン別のおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をプレゼントする際は、贈る場面に合わせてサービスを選ぶと、より喜ばれるギフトになります。
              当サイトでは、代表的な4つの場面ごとに、おすすめのサービスと予算の目安を以下のとおりまとめています。
            </p>

            <div className="space-y-6">
              {occasions.map((occasion, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                  <div className="bg-[#E8F0EB] px-5 py-3 border-b border-[#C5D9CB]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#333]">{occasion.name}</h3>
                      <span className="text-xs text-[#4A7C59] font-medium">{occasion.timing}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#666] leading-relaxed mb-4">
                      {occasion.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-[#F8F8F8] rounded-lg p-3">
                        <p className="text-xs text-[#999] mb-1">おすすめサービス</p>
                        <p className="text-sm text-[#333] font-medium">{occasion.recommend}</p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg p-3">
                        <p className="text-xs text-[#999] mb-1">予算の目安</p>
                        <p className="text-sm text-[#333] font-medium">{occasion.budget}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Gift ─── */}
        <section id="how-to-gift" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便をプレゼントする手順
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をギフトとして贈る方法は、サービスによって異なります。
              当サイトでは、代表的な2つの方法を具体的な手順とともにご説明します。
            </p>

            {/* Method 1: Gift Ticket */}
            <div className="mb-8">
              <h3 className="text-base md:text-lg font-bold text-[#333] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">A</span>
                ギフトチケット方式（bloomee）
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">bloomee公式サイトでギフトチケットを購入</p>
                    <p className="text-sm text-[#666]">公式サイトの案内に沿ってプランを選び、支払いを完了します（現行の定期便のプランはお試し・グリーン・ベーシック。2026年10月15日確認）。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">デジタルチケット（URL）を受け取る</p>
                    <p className="text-sm text-[#666]">購入完了後、ギフトチケットのURLが発行されます。メッセージを添えることも可能です。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">LINEやメールで贈り先にチケットを送る</p>
                    <p className="text-sm text-[#666]">チケットのURLを、LINE、メール、SNSなど任意の方法で贈り先に共有します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">4</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">贈り先が届け先・配送頻度を設定</p>
                    <p className="text-sm text-[#666]">受け取った方がURLから住所や配送頻度を設定すると、花が届き始めます。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2: Direct Delivery */}
            <div className="mb-8">
              <h3 className="text-base md:text-lg font-bold text-[#333] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">B</span>
                届け先指定方式（AND PLANTS / 日本総合園芸）
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">公式サイトでプランを選んで申し込む</p>
                    <p className="text-sm text-[#666]">AND PLANTSまたは日本総合園芸の公式サイトから、贈りたいプランと配送頻度を選択します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">届け先に贈り先の住所を入力</p>
                    <p className="text-sm text-[#666]">注文フォームの届け先欄に、ご自身の住所ではなく贈り先の住所を入力します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">支払い完了後、花が贈り先に届く</p>
                    <p className="text-sm text-[#666]">支払いは贈り主のクレジットカード等で行い、花は贈り先の住所に届きます。贈りたい期間が終了したら解約します。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">方式の選び方</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                贈り先の住所を知らない場合や、届く時期や頻度を贈り先に選んでもらいたい場合は、bloomeeのギフトチケット方式が便利です。
                一方、花のテイストやボリュームを重視する場合や、届く日を贈り主が確実に管理したい場合は、AND PLANTSや日本総合園芸の届け先指定方式をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ギフトを贈る際の注意点
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をプレゼントする際に、事前に確認しておきたい点を以下にまとめています。
              贈った後に想定と異なる事態が生じないよう、ご確認ください。
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">相手の生活スタイルを考慮する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  不在が多い方には、ポスト投函に対応したサービス（bloomee）が適しています。在宅時間を確保できる方であれば、宅配便（AND PLANTS、日本総合園芸）でも問題ありません。
                  また、花の手入れに慣れていない方には、本数が少なく管理しやすいプランから始めることをおすすめします。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">配送頻度と期間を慎重に決める</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  毎週届くと、花の管理が負担になる場合があります。初めてのギフトであれば、隔週または月1回をおすすめします。
                  期間も最初は3か月程度とし、贈り先が気に入った場合に延長する方法が確実です。長期間のギフトを負担に感じる方もいるため、贈り先の反応を確認しながら調整してください。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">花のアレルギーやペットの有無を確認する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花粉アレルギーをお持ちの方には配慮が必要です。また、猫を飼っている家庭では、ユリ科の花が危険なため注意が必要です。
                  事前にアレルギーやペットの有無を確認しておくと安心です。懸念がある場合は、花の種類を選べるサービスや、届く花の品種が事前にわかるサービスをお選びください。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">事前に一言伝えておく</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  サプライズで贈る方法もありますが、届け先指定方式の場合は、突然花が届いて贈り先が戸惑う可能性があります。
                  花の定期便を贈ることを事前に伝えておくと、贈り先も受け取りの準備ができます。ギフトチケット方式であれば、チケットを渡す際に説明できるため円滑です。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">解約のタイミングを把握しておく</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  届け先指定方式でギフトを贈る場合は、贈りたい期間が終了した後の解約手続きを忘れないようご注意ください。
                  bloomeeのギフトチケットは購入時に期間が確定するため、自動的に終了します。AND PLANTSや日本総合園芸は贈り主が自分で解約手続きを行う必要があります。
                  カレンダーにリマインダーを設定しておくと確実です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便ギフトに関するよくある質問
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

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              花の定期便は継続して花が届くプレゼントです
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花の定期便は、一度きりの花束では実現できない、毎月花が届く喜びを贈れるギフトです。
              母の日、誕生日、結婚祝い、退職祝いなど、さまざまなシーンで活用できます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              手軽さを重視する場合は、贈り先の住所を知らなくても贈れるbloomeeのギフトチケットをおすすめします。
              おしゃれなブーケを重視する場合はAND PLANTS、ボリュームと手渡し対応を求める場合は日本総合園芸が適しています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              贈る場面や贈り先の生活スタイルに合わせて、サービスをお選びください。
              ギフト対応の詳細は、ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 日本総合園芸の詳細を見る
              </a>
              <a
                href="/guides/keirou-no-hi/"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                敬老の日の花ギフト特集を見る
              </a>
              <a
                href="/guides/christmas-oshogatsu/"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                クリスマス・お正月の花ギフト特集を見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline"
            >
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
              掲載情報は2026年4月時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。
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
