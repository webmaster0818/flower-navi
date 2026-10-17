"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";

/* 料金は単一データソース(services.ts)を参照（公式確認値・ページ間ズレ防止） */
const sv = (id: string) => SERVICES.find((s) => s.id === id)!.cheapest.price;

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクで一番安いのはどこですか？",
    a: "送料込みの1回あたり総額で比較すると、medelu（メデル）のMiniプランが748円（税込・送料無料）で最も安く、次いでhanameku（ハナメク）のライトプランが1,210円（税込・送料込）です。送料は地域やプランによって異なるため、ご利用前に、公式サイトにて最新情報をご確認ください。",
  },
  {
    q: "1,000円以下で花のサブスクを始められますか？",
    a: "はい、1,000円以下で始められるサービスは複数あります。medeluのMiniプランは748円（税込・送料無料）です。bloomeeのお試しプランは980円（別途送料385円）で、花代のみであれば1,000円以下です。",
  },
  {
    q: "送料無料の花のサブスクはありますか？",
    a: "medeluとAND PLANTSは送料無料です（medeluは北海道・東北へのLite以上に遠隔地送料140〜240円が加算（2026年10月17日公式確認））。medeluは最安のMiniプランを748円（税込）で利用できます。AND PLANTSは送料込みの価格設定のため、追加の送料はかかりません。サービスを比較する際は、送料を含めた総額でご確認ください。",
  },
  {
    q: "安い花のサブスクでも品質に問題はありませんか？",
    a: "価格が安いことは、品質が劣ることを意味しません。medeluは市場直送により中間コストを削減しているため、低価格でも新鮮な花が届きます。bloomeeやhanamekuにも品質保証制度があり、届いた花が傷んでいた場合は再送対応を受けられます。",
  },
  {
    q: "花のサブスクの送料はいくらかかりますか？",
    a: "送料はサービスによって異なります。medeluとAND PLANTSは送料無料です（medeluは北海道・東北へのLite以上に遠隔地送料140〜240円が加算（2026年10月17日公式確認））。bloomeeはお試し・グリーンプランが385円、ベーシックプランが550円です。hanamekuはライトプランが配送料込みで、追加の送料はかかりません。セルフアレンジプランは、北海道・九州で550円、中国・四国で330円、北東北・関西で220円の追加送料がかかります（2026年10月17日に公式サイトで確認）。日本総合園芸はコースとお届け方法（自社配達便・宅配便）によって料金が異なります。送料を含めた総額での比較をおすすめします。",
  },
  {
    q: "安い花のサブスクは何本届きますか？",
    a: "サービスとプランによって異なります。medeluのMiniプランは3〜4本、hanamekuのライトプランは花とグリーンが数本、bloomeeのお試しプランは4本以上です。一般に低価格のプランほど本数は少なくなりますが、テーブルに飾るには十分な量です。",
  },
  {
    q: "月額で考えるとどのサービスが安いですか？",
    a: "月額は配送頻度によって変わります。隔週（月2回）配送の場合の目安は、medeluのMiniプランが月額約1,496円、hanamekuのライトプランが月額約2,420円（送料込）、bloomeeのお試しプランが月額約2,730円（送料込み）です。毎週配送の場合は、この約2倍になります。",
  },
  {
    q: "受け取り回数の条件なしで安く始められるサービスはどれですか？",
    a: "medeluは受け取り回数の条件がなく、748円から始められるため、試しに利用したい方に適しています。AND PLANTSにも回数の条件はありません。一方、bloomeeには4回の最低受け取り回数があり、4回受け取る前に解約すると残り回数分の料金が発生します。初めて利用する方には、回数の条件がないサービスから始めることをおすすめします。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "medelu",
    nameJa: "メデル",
    plan: "Miniプラン",
    price: sv("medelu"),
    shipping: 0,
    total: sv("medelu"),
    shippingLabel: "無料",
    flowers: "3〜4本",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "なし",
    quality: "あり",
    url: "/services/medelu",
    officialUrl: "https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L",
    highlight: "送料無料で、業界最安水準の価格です。市場直送で新鮮な花が届き、受け取り回数の条件がないため気軽に試せます。",
    bestFor: "費用を抑えて始めたい方、送料込みの費用対効果を重視する方",
    detail: "medeluは市場直送の仕組みにより中間マージンを削減し、送料無料を実現しています。Miniプランは1回748円（税込）で3〜4本の花が届き、送料込みの総額は業界最安水準です。受け取り回数の条件もないため、花のサブスクを初めて利用する方にも適しています。配送は隔週・毎週から選べ、スキップも自由にできます。",
  },
  {
    rank: 2,
    name: "hanameku",
    nameJa: "ハナメク",
    plan: "ライトプラン",
    price: sv("hanameku"),
    shipping: 0,
    total: sv("hanameku"),
    shippingLabel: "無料（込み）",
    flowers: "花とグリーン数本",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週 / 月1回",
    minOrders: "なし",
    quality: "あり",
    url: "/services/hanameku",
    officialUrl: "https://t.felmat.net/fmcl?ak=W58911.1.O99396Q.A135745L",
    highlight: "1,210円（税込・送料込）から始められます。ポスト投函のため受け取りやすいサービスです。",
    bestFor: "配送頻度を柔軟に選びたい方、月1回から始めたい方",
    detail: "hanamekuは1,210円（税込・送料込）のライトプランから始められる花のサブスクです。ライトプランはポスト投函のため受け取りやすく、上位のセルフアレンジプランは宅配で届きます。受け取り回数の条件は明記されていないため、契約条件は申込前に公式サイト（hanameku.jp）でご確認ください。運営会社はnarrative.incです。",
  },
  {
    rank: 3,
    name: "bloomee",
    nameJa: "ブルーミー",
    plan: "お試しプラン",
    price: sv("bloomee"),
    shipping: 385,
    total: sv("bloomee") + 385,
    shippingLabel: "385円",
    flowers: "4本以上",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "4回",
    quality: "あり（定期便は2週間以内の連絡で返金・交換）",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    highlight: "お届け実績3,000万本以上（公式・自社調べ）です。お試し・グリーンプランはポスト投函で届きます。",
    bestFor: "ポスト投函で受け取りたい方、4回以上継続する前提で始められる方",
    detail: "bloomeeは公式サイトで「お花のお届け実績3,000万本以上（自社調べ）」と表記している花のサブスクです。お試しプランは980円で、送料385円を合わせると1回あたり1,365円です。季節の花が届き、品質保証は定期便の場合、2週間以内に連絡すれば返金・交換の対象となります（公式・特定商取引法に基づく表記）。なお、4回の最低受け取り回数がある点にご注意ください。",
  },
  {
    rank: 4,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    plan: "Standardプラン",
    price: sv("andplants"),
    shipping: 0,
    total: sv("andplants"),
    shippingLabel: "無料",
    flowers: "6〜8本（2026年10月17日公式確認）",
    delivery: "宅配便",
    frequency: "1週・2週・4週ごと（2026年10月17日公式確認）",
    minOrders: "なし",
    quality: "あり",
    url: "/services/and-plants",
    officialUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    highlight: "プロのフローリストによるアレンジが届きます。送料無料で、6〜8本（2026年10月17日公式確認）とボリュームがあります。",
    bestFor: "デザイン性の高いアレンジを求める方、インテリアにこだわる方",
    detail: "AND PLANTSは、プロのフローリストが一つひとつアレンジした花束が届くサービスです。Standardプランは1,980円で送料無料、6〜8本（2026年10月17日公式確認）の花が届きます。価格帯はやや高めですが、送料無料でボリュームもあるため、1本あたりの単価で見ると費用対効果は良好です。宅配便で配送されるため、花が良い状態で届きやすい点も利点です。受け取り回数の条件もありません。",
  },
  {
    rank: 5,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    plan: "花瓶・水盤バラエティーコース（宅配便）",
    price: 2530,
    shipping: 0,
    total: 2530,
    shippingLabel: "料金に含む（自社配達便は1,298円/回）（2026年10月17日公式確認）",
    flowers: "季節の花束",
    delivery: "自社配達便 / 宅配便",
    frequency: "月3回（切り花）・月1〜2回・毎週/隔週などコースにより異なる（2026年10月17日公式確認）",
    minOrders: "なし",
    quality: "あり",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "創業以来の実績を持つ老舗です。季節感のある花束が届き、法人利用にも対応しています。",
    bestFor: "老舗の安心感を求める方、季節感のある花を楽しみたい方",
    detail: "日本総合園芸は、長年の実績を持つ老舗の花き業者が運営するサービスです。切り花で最安の花瓶・水盤バラエティーコースは、宅配便で1回2,530円、自社配達便で1回1,298円（いずれも月3回・別途の送料なし）です（2026年10月17日公式確認）。季節に合わせた花束が届くのが特徴で、花の専門家が選んだ旬の花を楽しめます。法人向けのオフィス装花にも対応しており、個人利用だけでなくビジネス用途にも適しています。",
  },
];

/* ─── Main Component ─── */
export default function CheapRankingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"安い花のサブスク比較ランキング\",\"description\":\"安い花のサブスク比較ランキングのサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/medelu/\",\"name\":\"medelu（メデル）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/tasuhana/\",\"name\":\"+hana（タスハナ）\"},{\"@type\":\"ListItem\",\"position\":3,\"url\":\"https://ohana-delivery.com/services/bloomee/\",\"name\":\"bloomee（ブルーミー）\"},{\"@type\":\"ListItem\",\"position\":4,\"url\":\"https://ohana-delivery.com/services/hanameku/\",\"name\":\"hanameku（ハナメク）\"},{\"@type\":\"ListItem\",\"position\":5,\"url\":\"https://ohana-delivery.com/services/hitohana/\",\"name\":\"HitoHana（ヒトハナ）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"安い花のサブスク比較ランキング\",\"item\":\"https://ohana-delivery.com/compare/cheap/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"安い花のサブスク比較ランキング\",\"description\":\"花のサブスク各社の最安プランを送料込みの総額で比較し、料金・評判・選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-06-14T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/cheap/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクで一番安いのはどこですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"送料込みの1回あたり総額で比較すると、medelu（メデル）のMiniプランが748円（税込・送料無料）で最も安く、次いでhanameku（ハナメク）のライトプランが1,210円（税込・送料込）です。送料は地域やプランによって異なるため、ご利用前に、公式サイトにて最新情報をご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"1,000円以下で花のサブスクを始められますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、1,000円以下で始められるサービスは複数あります。medeluのMiniプランは748円（税込・送料無料）です。bloomeeのお試しプランは980円（別途送料385円）で、花代のみであれば1,000円以下です。\"}},{\"@type\":\"Question\",\"name\":\"送料無料の花のサブスクはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"medeluとAND PLANTSは送料無料です（medeluは北海道・東北へのLite以上に遠隔地送料140〜240円が加算（2026年10月17日公式確認））。medeluは最安のMiniプランを748円（税込）で利用できます。AND PLANTSは送料込みの価格設定のため、追加の送料はかかりません。サービスを比較する際は、送料を含めた総額でご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"安い花のサブスクでも品質に問題はありませんか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"価格が安いことは、品質が劣ることを意味しません。medeluは市場直送により中間コストを削減しているため、低価格でも新鮮な花が届きます。bloomeeやhanamekuにも品質保証制度があり、届いた花が傷んでいた場合は再送対応を受けられます。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクの送料はいくらかかりますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"送料はサービスによって異なります。medeluとAND PLANTSは送料無料です（medeluは北海道・東北へのLite以上に遠隔地送料140〜240円が加算（2026年10月17日公式確認））。bloomeeはお試し・グリーンプランが385円、ベーシックプランが550円です。hanamekuはライトプランが配送料込みで、追加の送料はかかりません。セルフアレンジプランは、北海道・九州で550円、中国・四国で330円、北東北・関西で220円の追加送料がかかります（2026年10月17日に公式サイトで確認）。日本総合園芸はコースとお届け方法（自社配達便・宅配便）によって料金が異なります。送料を含めた総額での比較をおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"安い花のサブスクは何本届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サービスとプランによって異なります。medeluのMiniプランは3〜4本、hanamekuのライトプランは花とグリーンが数本、bloomeeのお試しプランは4本以上です。一般に低価格のプランほど本数は少なくなりますが、テーブルに飾るには十分な量です。\"}},{\"@type\":\"Question\",\"name\":\"月額で考えるとどのサービスが安いですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"月額は配送頻度によって変わります。隔週（月2回）配送の場合の目安は、medeluのMiniプランが月額約1,496円、hanamekuのライトプランが月額約2,420円（送料込）、bloomeeのお試しプランが月額約2,730円（送料込み）です。毎週配送の場合は、この約2倍になります。\"}},{\"@type\":\"Question\",\"name\":\"受け取り回数の条件なしで安く始められるサービスはどれですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"medeluは受け取り回数の条件がなく、748円から始められるため、試しに利用したい方に適しています。AND PLANTSにも回数の条件はありません。一方、bloomeeには4回の最低受け取り回数があり、4回受け取る前に解約すると残り回数分の料金が発生します。初めて利用する方には、回数の条件がないサービスから始めることをおすすめします。\"}}]}" }} />
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
                  <span className="text-[#666]">比較記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">安い花サブスクランキング</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク価格比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              【2026年最新】花のサブスクを安い順にランキング<br className="hidden md:block" />
              送料込みの総額で比較
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクを選ぶ際は、花代だけでなく送料を含めた総額の確認が欠かせません。
              当サイトでは、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式で紹介します。料金は2026年6月14日に各公式サイトで確認した金額です。料金は改定される場合があるため、ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安サービス</p>
                <p className="text-xl font-bold text-[#4A7C59]">748円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#4A7C59]">5サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料無料</p>
                <p className="text-xl font-bold text-[#4A7C59]">2サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">1,000円以下</p>
                <p className="text-xl font-bold text-[#4A7C59]">2サービス</p>
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
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. 「送料込み」の総額で比較する理由</a></li>
                  <li><a href="#ranking-table" className="hover:text-[#4A7C59] transition-colors">2. 花のサブスク安い順ランキング比較表</a></li>
                  <li><a href="#ranking-detail" className="hover:text-[#4A7C59] transition-colors">3. 各サービスの詳細（価格・内容・おすすめの方）</a></li>
                  <li><a href="#under-1000" className="hover:text-[#4A7C59] transition-colors">4. 1,000円以下で始められるサービス</a></li>
                  <li><a href="#free-shipping" className="hover:text-[#4A7C59] transition-colors">5. 送料無料のサービス</a></li>
                  <li><a href="#budget-guide" className="hover:text-[#4A7C59] transition-colors">6. 予算別のおすすめサービス</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. 花のサブスクの料金に関するよくある質問</a></li>
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
              「送料込み」の総額で比較する理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクを選ぶ際、「月額○○円」という花代だけで比較されることが多くあります。
              しかし、実際にかかる費用は「花代＋送料」の総額です。
              送料無料のサービスもあれば、1回あたり385円〜550円の送料がかかるサービスもあります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              たとえば、花代が980円でも送料が385円かかれば、1回あたりの実質負担は1,365円です。
              一方、花代が748円で送料無料であれば、748円のまま利用できます。
              花代だけで比較すると差は282円ですが、送料込みでは667円の差になります。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">当サイトの比較基準</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 各サービスの「最安プラン」を対象に比較</li>
                <li>・ 花代＋送料の「1回あたり総額」で安い順にランキング</li>
                <li>・ 送料が地域により異なる場合は、その旨を明記</li>
                <li>・ 表示価格はすべて税込</li>
                <li>・ 2026年6月14日に各公式サイトで確認した情報にもとづく</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Table ─── */}
        <section id="ranking-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスク安い順ランキング比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              人気5サービスの最安プランを、送料込みの1回あたり総額で安い順に掲載しています。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "640px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">順位</th>
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">プラン</th>
                    <th className="px-4 py-3 text-right font-medium">花代</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-right font-medium">1回あたり総額</th>
                    <th className="px-4 py-3 text-center font-medium">花の本数</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          i === 0 ? "bg-[#F59E0B] text-white" :
                          i === 1 ? "bg-[#9CA3AF] text-white" :
                          i === 2 ? "bg-[#B45309] text-white" :
                          "bg-[#E5E5E5] text-[#666]"
                        }`}>
                          {item.rank}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#4A7C59] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#999]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#666]">{item.plan}</td>
                      <td className="px-4 py-4 text-right text-[#333]">{item.price.toLocaleString()}円</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === 0 ? (
                          <span className="text-[#4A7C59] font-medium">無料</span>
                        ) : item.shipping ? (
                          <span className="text-[#666]">{item.shipping}円</span>
                        ) : (
                          <span className="text-xs text-[#999]">別途</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right">
                        {item.total ? (
                          <span className="font-bold text-[#333]">{item.total.toLocaleString()}円</span>
                        ) : (
                          <span className="text-xs text-[#999]">{item.price.toLocaleString()}円＋送料</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#666]">{item.flowers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">表の補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ hanamekuのライトプランは配送料込みで、追加の送料はかかりません。セルフアレンジプランは地域により220〜550円の追加送料がかかります（2026年10月17日に公式サイトで確認）</li>
                <li>・ 日本総合園芸はお届け方法（自社配達便・宅配便）とコースによって料金が異なります（2026年10月17日公式確認）</li>
                <li>・ 2026年6月14日に各公式サイトで確認した金額です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスの詳細
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              安い順に掲載した5サービスについて、料金の内訳・届く内容・おすすめの方を解説します。
            </p>

            <div className="space-y-8">
              {rankingData.map((item) => (
                <div key={item.rank} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#FFFBEB] border-b border-[#F59E0B]" : "bg-[#E8F0EB] border-b border-[#C5D9CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                      item.rank === 1 ? "bg-[#F59E0B] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      item.rank === 3 ? "bg-[#B45309] text-white" :
                      "bg-[#E5E5E5] text-[#666]"
                    }`}>
                      {item.rank}位
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#333]">
                        {item.name}（{item.nameJa}）{item.plan}
                      </h3>
                      <p className="text-sm text-[#666]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Price Breakdown */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花代</p>
                        <p className="text-lg font-bold text-[#333]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">送料</p>
                        <p className="text-lg font-bold text-[#333]">
                          {item.shipping === 0 ? (
                            <span className="text-[#4A7C59]">無料</span>
                          ) : item.shipping ? (
                            <>{item.shipping}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">別途</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                        <p className="text-lg font-bold text-[#4A7C59]">
                          {item.total ? (
                            <>{item.total.toLocaleString()}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">{item.price.toLocaleString()}円＋送料</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花の本数</p>
                        <p className="text-lg font-bold text-[#333]">{item.flowers}</p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">配送方法</span>
                        <span className="text-[#333]">{item.delivery}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                        <span className="text-[#333]">{item.frequency}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">最低受取回数</span>
                        <span className="text-[#333]">{item.minOrders}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">品質保証</span>
                        <span className="text-[#333]">{item.quality}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#666] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Best For */}
                    <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#4A7C59]">おすすめの方：</span>
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
                        {item.name}の公式サイトを見る
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Under 1000 Yen Section ─── */}
        <section id="under-1000" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              1,000円以下で始められる花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              費用を抑えて試したい方に向けて、花代が1,000円以下のサービスをまとめました。
              送料の有無によって実質負担額が変わるため、総額もあわせてご確認ください。
            </p>

            <div className="space-y-4">
              {/* medelu */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] p-5 relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  総額も1,000円以下
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F59E0B] text-white text-sm font-bold">1位</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-1">medelu Miniプラン</h3>
                    <p className="text-sm text-[#666] mb-3">
                      花代748円・送料無料で、1回あたりの総額も748円です。受け取り回数の条件がなく、送料込みで1,000円以下となるサービスはmedeluのみです（タスハナの+actも送料込み990円ですが、5回の出荷が前提です）。
                      回数の条件がないため、1回利用して合わなければすぐに解約できます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">総額748円/回</span>
                      <span className="text-[#999]">送料無料</span>
                      <span className="text-[#999]">3〜4本</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* hanameku */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9CA3AF] text-white text-sm font-bold">2位</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-1">hanameku ライトプラン</h3>
                    <p className="text-sm text-[#666] mb-3">
                      ライトプランは1,210円（税込・送料込）で利用できます。
                      ポスト投函で届き、地域による追加送料はかかりません。配送頻度を月1回にすると、月あたりの費用も抑えられます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">1,210円/回（送料込）</span>
                      <span className="text-[#999]">追加送料なし</span>
                      <span className="text-[#999]">花とグリーン数本</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* bloomee */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B45309] text-white text-sm font-bold">3位</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-1">bloomee お試しプラン</h3>
                    <p className="text-sm text-[#666] mb-3">
                      花代は980円で1,000円以下ですが、別途送料385円がかかるため、1回あたりの総額は1,365円です。
                      花代のみではわずかに1,000円を下回りますが、送料込みでは1,000円を超える点にご注意ください。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#666] font-bold">総額1,365円/回</span>
                      <span className="text-[#999]">送料385円</span>
                      <span className="text-[#999]">4本以上</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">送料込みの総額で1,000円以下となるプラン</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                送料込みの総額で1,000円以下となるのは、medeluのMiniプランのみです。
                「花代1,000円以下」と「総額1,000円以下」は異なるため、予算を検討する際は送料を含めた金額でご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Free Shipping Section ─── */}
        <section id="free-shipping" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料の花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              送料がかかるサービスでは、毎回数百円の追加負担が生じます。
              継続期間が長いほど送料の差は大きくなるため、送料無料のサービスは費用面で有利です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* medelu */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold px-2 py-1 rounded">送料無料</span>
                  <h3 className="text-base font-bold text-[#333]">medelu</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  全プランが送料無料です。Miniプラン748円、Liteプラン1,330円、Lite+プラン1,650円、Basicプラン2,330円のいずれも送料込みの価格です（北海道・東北のLite以上は遠隔地送料が加算されます）。
                  市場直送で中間コストを削減することにより、送料無料を実現しています。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">1年間（隔週）の送料節約額</p>
                  <p className="text-sm text-[#666]">
                    送料385円のサービスと比較した場合：385円 x 24回 = <span className="font-bold text-[#4A7C59]">年間9,240円の節約</span>
                  </p>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold px-2 py-1 rounded">送料無料</span>
                  <h3 className="text-base font-bold text-[#333]">AND PLANTS</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  送料込みの価格設定のため、追加の送料はかかりません。Standardプラン1,980円がそのまま1回あたりの総額です。
                  宅配便で配送されるにもかかわらず送料無料である点は、大きな利点です。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">宅配便でも送料無料</p>
                  <p className="text-sm text-[#666]">
                    一般に宅配便の送料は550円以上かかることが多いため、<span className="font-bold text-[#4A7C59]">実質的な負担を抑えられます</span>。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
              <h3 className="text-sm font-bold text-[#333] mb-2">送料が有料のサービスの注意点</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                bloomee（送料385〜550円）と日本総合園芸（送料別途）は、花代とは別に送料がかかります。hanamekuはライトプランが配送料込みで、セルフアレンジプランのみ地域により追加送料がかかります。
                毎週配送を選ぶと月4回分の送料が発生するため、月間で1,540円以上の送料負担となる場合があります。
                隔週配送にすれば送料は半分になりますが、年間では大きな金額になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Budget Guide ─── */}
        <section id="budget-guide" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              予算別のおすすめサービス
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              毎月の予算に応じたおすすめのサービスをまとめました。
              配送頻度は隔週（月2回）を想定しています。
            </p>

            <div className="space-y-5">
              {/* Under 1500 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月1,500円以下
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">medelu Miniプラン</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      隔週配送で月額約1,496円（748円 x 2回）です。送料無料・受け取り回数の条件なしで、月1,500円以下に収まります。
                      3〜4本の花が届くため、小さな花瓶に飾るのに適した量です。費用対効果を最も重視する方に適しています。
                    </p>
                  </div>
                </div>
              </div>

              {/* 1500-2000 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月2,000円以下
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">medelu または hanameku</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      medeluのMiniプラン（月約1,496円）に加え、hanamekuのライトプラン（月約2,420円・送料込み）も候補になります。
                      hanamekuは月1回配送も選べるため、月1回にすれば1,210円（送料込）で利用できます。
                      配送頻度の調整により予算内に収めやすい点が、hanamekuの利点です。
                    </p>
                  </div>
                </div>
              </div>

              {/* 2000-3000 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月3,000円以下
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">bloomee または AND PLANTS（4週間に1回）</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      bloomeeお試しプランの隔週配送（月約2,730円：1,365円 x 2回）、AND PLANTS Standardプランの4週間に1回の配送（1回1,980円・月およそ1回）が候補です（AND PLANTSの頻度は1週間・2週間・4週間に1回から選択（2026年10月17日公式確認））。
                      知名度と安心感を重視する場合はbloomee、デザイン性の高いアレンジとボリュームを重視する場合はAND PLANTSをおすすめします。
                      AND PLANTSは4週間に1回でも6〜8本（2026年10月17日公式確認）届くため、1回あたりの満足度が高いサービスです。
                    </p>
                  </div>
                </div>
              </div>

              {/* Over 3000 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月3,000円以上
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">すべてのサービスから選べます</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      月3,000円以上の予算があれば、AND PLANTSの隔週配送（月約3,960円）や日本総合園芸（コース・お届け方法により料金が異なります）も含め、すべてのサービスから選べます。
                      この予算帯では、価格よりも花のテイスト・配送方法・ブランドの好みで選ぶことをおすすめします。
                      medeluの上位プラン（Lite: 1,330円、Lite+: 1,650円、Basic: 2,330円）も検討の対象になります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクの料金に関するよくある質問
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
              価格を重視する場合はmedeluをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクを安い順に比較した結果、送料込みの総額ではmedelu（メデル）のMiniプラン（748円/回・送料無料）が最も安いサービスです。
              受け取り回数の条件もなく、気軽に始められる点も利点です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              次いでhanameku（1,210円/回・送料込）、bloomee（980円＋送料385円＝1,365円/回）の順です。
              bloomeeは送料を含めると割高になりますが、ポスト投函で受け取れる点や、SNS・レビュー記事による情報量の多さが強みです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              価格以外にも、花のボリューム・配送方法・受け取り回数の条件の有無・アレンジのテイストなど、重視する点を踏まえて選ぶことが大切です。
              ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 medeluの詳細を見る
              </a>
              <a
                href="/services/hanameku"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 hanamekuの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 bloomeeの詳細を見る
              </a>
              <p className="mt-2 text-xs"><a href="/services/bloomee/" className="text-[#4A7C59] underline">ブルーミーの値段・料金プランと口コミの詳細 →</a></p>
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
              掲載情報は2026年6月14日に各公式サイトで確認したものです。最新の料金・サービス内容は各公式サイトでご確認ください。
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
