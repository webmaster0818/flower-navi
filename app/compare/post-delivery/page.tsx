"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import PageHero from "@/app/components/PageHero";

/* 料金は単一データソース(services.ts・公式確認値)を参照 */
const sv = (id: string) => SERVICES.find((s) => s.id === id)!.cheapest.price;

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "ポスト投函の花のサブスクとは何ですか？",
    a: "ポスト投函（ポストに届く）タイプの花のサブスクは、自宅の郵便ポストに直接花が届くサービスです。専用の細長い箱に入った状態で届くため、不在時でも受け取れます。再配達の手間がないため、忙しい方や一人暮らしの方に多く利用されています。",
  },
  {
    q: "ポスト投函で花が傷むことはありませんか？",
    a: "各サービスとも、ポスト投函用に設計された専用ボックスを使用し、花が傷みにくいよう工夫しています。保水ゼリーや保水キャップで水分を保ち、通気口付きの箱で蒸れを防ぎます。届いた花が傷んでいた場合は、bloomee・medelu・hanamekuのいずれも品質保証制度（再送・返金対応）の対象となります。",
  },
  {
    q: "ポストに入らない場合はどうなりますか？",
    a: "一般的な郵便ポスト（投函口の幅が約3.5cm以上）であれば問題なく届きます。ただし、投函口が極端に小さい場合や、集合住宅で投函口のサイズが合わない場合は、玄関前に置き配されるか、不在票が入ることがあります。事前にポストの投函口のサイズをご確認ください。",
  },
  {
    q: "ポスト投函と宅配便で、届く花に違いはありますか？",
    a: "配送方法による花の状態の違いを比べた公的なデータは見当たらないため、当サイトではどちらが良いかを示していません。ポスト投函は投函口に入る大きさに限られるため、本数の多いプランは宅配便や手渡しで届くものが中心です。例として、bloomeeのベーシックプラン（8本以上・1回2,180円＋送料550円）は手渡しで届きます（2026年10月24日公式確認）。",
  },
  {
    q: "ポスト投函対応のサービスで一番安いのはどこですか？",
    a: "ポスト投函対応サービスの中で最も安いのはmedelu（メデル）のMiniプランで、1回748円（送料無料）です。次いでhanameku（ハナメク）のライトプランが1,210円（税込・配送料込）、bloomee（ブルーミー）のお試しプランが980円（送料385円、総額1,365円）です。",
  },
  {
    q: "ポスト投函の花のサブスクは何本届きますか？",
    a: "サービスやプランによって異なりますが、ポスト投函タイプは一般に3〜5本程度です。medeluのMiniプランは3本、bloomeeのお試しプランは4本以上、hanamekuのライトプランは花とグリーンが数本届きます。ポストに入るサイズの制約があるため宅配便タイプより少なめですが、テーブルや玄関に飾るには十分な量です。",
  },
  {
    q: "宅配便のみのサービスを不在時に受け取る方法はありますか？",
    a: "AND PLANTSや日本総合園芸などポスト投函に対応していないサービスでは、配送日を選べる場合があります。AND PLANTSは配送日の指定ができ、日本総合園芸は宅配便なら当社指定の曜日から希望日を選べ、自社配達便は毎月決まった曜日に届きます（2026年10月17日公式確認）。また、宅配ボックスがある場合は、宅配ボックスに届けてもらえることもあります。再配達の依頼も可能ですが、生花は時間とともに鮮度が落ちるため、早めの受け取りをおすすめします。",
  },
  {
    q: "一人暮らしにはポスト投函と宅配便どちらがおすすめですか？",
    a: "一人暮らしの方には、不在でも受け取れるポスト投函タイプをおすすめします。日中は仕事で不在がちな場合でも、帰宅後にポストから花を取り出すだけで受け取れます。再配達の手間がなく、配達時間を気にする必要もありません。medelu・bloomee・hanamekuの3サービスがポスト投函に対応しています。",
  },
];

/* ─── Service Data ─── */
const serviceData = [
  {
    rank: 1,
    name: "bloomee",
    nameJa: "ブルーミー",
    postDelivery: "OK",
    postDeliveryDetail: "お試しプラン・グリーンプラン対応",
    postPlans: "お試しプラン / グリーンプラン",
    boxType: "ポストに半投函できる箱",
    price: sv("bloomee"),
    shipping: 385,
    total: sv("bloomee") + 385,
    shippingLabel: "385円",
    flowers: "4本以上",
    delivery: "ポスト投函 / 手渡し（ベーシック）",
    frequency: "毎週 / 隔週",
    minOrders: "4回",
    quality: "あり（定期便は2週間以内の連絡で返金・交換）",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    highlight: "累計3,000万本以上の実績があります。お試し・グリーンプランはポスト投函で届きます。",
    bestFor: "4本以上の小さな花束をポストで受け取りたい方、4回目以降は週単位で停止・再開したい方",
    detail: "bloomeeは公式サイトで「お花のお届け実績3,000万本以上（自社調べ）」と表記している花のサブスクです。お試しプラン（花代980円＋送料385円）とグリーンプラン（同）はポストに半投函の形で届き、到着は水〜金曜で、日時指定はできません。ベーシックプラン（花代2,180円＋送料550円）は手渡しで、日付と時間帯を指定できます。品質保証は、定期便の場合、2週間以内に連絡すれば返金・交換の対象となります（公式・特定商取引法に基づく表記。2026年10月15日確認）。",
  },
  {
    rank: 2,
    name: "medelu",
    nameJa: "メデル",
    postDelivery: "OK",
    postDeliveryDetail: "Mini・Liteのみ対応（2026年10月17日公式確認）",
    postPlans: "Mini / Liteプラン（Lite+・Basicは手渡し）（2026年10月17日公式確認）",
    boxType: "専用ボックス（保水処理済み）",
    price: sv("medelu"),
    shipping: 0,
    total: sv("medelu"),
    shippingLabel: "無料",
    flowers: "3〜4本（2026年10月17日公式確認）",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "なし",
    quality: "あり",
    url: "/services/medelu",
    officialUrl: "https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L",
    highlight: "ポスト投函はMini・Liteが対応し（2026年10月17日公式確認）、送料無料です。748円から始められ、ポスト投函サービスの中でも費用を抑えやすいサービスです。",
    bestFor: "送料無料でポスト投函を利用したい方、費用対効果を重視する方",
    detail: "medeluはMini・Liteがポスト投函に対応しており（Lite+・Basicは手渡し）（2026年10月17日公式確認）、送料無料である点がポスト投函サービスの中で特に優れた点です。Miniプラン（748円）は業界最安水準で、送料を含めた総額でも特に安く利用できます。生産者と市場から直接仕入れた花を届けると案内しています（2026年10月21日公式確認）。受け取り回数の条件もないため、ポスト投函型の花のサブスクを初めて利用する方も気軽に始められます。",
  },
  {
    rank: 3,
    name: "hanameku",
    nameJa: "ハナメク",
    postDelivery: "OK",
    postDeliveryDetail: "ライトプラン対応",
    postPlans: "ライトプラン（セルフアレンジプランは宅配）",
    boxType: "専用ボックス（保水キャップ付き）",
    price: sv("hanameku"),
    shipping: 0,
    total: sv("hanameku"),
    shippingLabel: "無料（込み）",
    flowers: "花とグリーン数本",
    delivery: "ポスト投函 / 宅配便",
    frequency: "毎週 / 隔週 / 月1回",
    minOrders: "なし",
    quality: "あり",
    url: "/services/hanameku",
    officialUrl: "https://t.felmat.net/fmcl?ak=W58911.1.O99396Q.A135745L",
    highlight: "ライトプランはポスト投函、セルフアレンジプランは宅配便で届きます。ライトプランは配送料込みの1,210円です。",
    bestFor: "ポスト投函と宅配便を使い分けたい方、配送頻度を柔軟に選びたい方",
    detail: "hanamekuは、ライトプラン（1,210円・税込・配送料込）がポスト投函に対応しています。セルフアレンジプラン（1,958円〜）はヤマト運輸の宅急便で届き、地域により220〜550円の追加送料がかかります（2026年10月17日に公式サイトで確認）。配送頻度も毎週・隔週・月1回から選べるため、生活に合わせて利用できます。最低回数の記載はありませんが、初回（定期1回目）は解約できません。解約・スキップはマイページで手続きし、締切は公式FAQ・ご利用ガイドでは次回お届け予定日の10日前、ライトプランの商品ページでは9日前と記載されています（2026年10月23日公式確認）。",
  },
  {
    rank: 4,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    postDelivery: "NG",
    postDeliveryDetail: "宅配便のみ",
    postPlans: "なし（全プラン宅配便）",
    boxType: "宅配便用ボックス（手渡し配送）",
    price: sv("andplants"),
    shipping: 0,
    total: sv("andplants"),
    shippingLabel: "無料",
    flowers: "6〜8本（2026年10月17日公式確認）",
    delivery: "宅配便のみ",
    frequency: "1週・2週・4週ごと（2026年10月17日公式確認）",
    minOrders: "なし",
    quality: "あり",
    url: "/services/and-plants",
    officialUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    highlight: "宅配便のみの対応ですが、プロのフローリストによるアレンジが届きます。送料無料で、6〜8本（2026年10月17日公式確認）とボリュームがあります。",
    bestFor: "在宅で受け取れる方、本数の多いプランを選びたい方",
    detail: "AND PLANTSはポスト投函には対応しておらず、すべて宅配便で配送されます。宅配便ならではのボリューム（6〜8本（2026年10月17日公式確認））と、プロのフローリストによるデザイン性の高いアレンジが特長です。送料無料で1,980円と、宅配便サービスの中では手頃な価格です。配送日を指定できるため、在宅のタイミングに合わせて受け取れます。花が良い状態で届きやすい点も、宅配便の利点です。",
  },
  {
    rank: 5,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    postDelivery: "NG",
    postDeliveryDetail: "非対応（自社配達便・宅配便）（2026年10月17日公式確認）",
    postPlans: "なし（自社配達便・宅配便）",
    boxType: "自社配達便・宅配便（2026年10月17日公式確認）",
    price: 2530,
    shipping: 0,
    total: 2530,
    shippingLabel: "料金に含む（自社配達便は1,298円/回〜）（2026年10月17日公式確認）",
    flowers: "季節の花束",
    delivery: "自社配達便 / 宅配便",
    frequency: "月3回（切り花）・月1〜2回・毎週/隔週などコースにより異なる（2026年10月17日公式確認）",
    minOrders: "なし",
    quality: "あり",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "自社配達便または宅配便で届きます（2026年10月17日公式確認）。専門家が選んだ季節感のある花束が届きます。",
    bestFor: "花の状態を最も重視する方、対面で受け取りたい方",
    detail: "日本総合園芸はポスト投函に対応しておらず、自社配達便と宅配便の2つのお届け方法があります。自社配達便は毎月決まった曜日（当社指定）に届き、留守の場合も玄関先に用意した水を張ったバケツに花を入れて届けます。宅配便は当社指定の曜日から希望日を選べます（2026年10月17日公式確認）。配達時に花の取り扱いについて助言を受けられる場合もあり、花の扱いに慣れていない方も安心して利用できます。",
  },
];

/* ─── Main Component ─── */
export default function PostDeliveryComparisonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const postOkCount = serviceData.filter((s) => s.postDelivery === "OK").length;
  const postNgCount = serviceData.filter((s) => s.postDelivery === "NG").length;

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"ポスト投函の花のサブスク比較\",\"description\":\"ポスト投函の花のサブスク比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/bloomee/\",\"name\":\"bloomee（ブルーミー）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/medelu/\",\"name\":\"medelu（メデル）\"},{\"@type\":\"ListItem\",\"position\":3,\"url\":\"https://ohana-delivery.com/services/tasuhana/\",\"name\":\"+hana（タスハナ）\"},{\"@type\":\"ListItem\",\"position\":4,\"url\":\"https://ohana-delivery.com/services/hanameku/\",\"name\":\"hanameku（ハナメク）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"ポスト投函型の花のサブスク比較\",\"item\":\"https://ohana-delivery.com/compare/post-delivery/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"ポスト投函型の花のサブスク比較\",\"description\":\"ポスト投函に対応する花のサブスクを比較し、料金・対応プラン・選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/post-delivery/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"ポスト投函の花のサブスクとは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ポスト投函（ポストに届く）タイプの花のサブスクは、自宅の郵便ポストに直接花が届くサービスです。専用の細長い箱に入った状態で届くため、不在時でも受け取れます。再配達の手間がないため、忙しい方や一人暮らしの方に多く利用されています。\"}},{\"@type\":\"Question\",\"name\":\"ポスト投函で花が傷むことはありませんか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"各サービスとも、ポスト投函用に設計された専用ボックスを使用し、花が傷みにくいよう工夫しています。保水ゼリーや保水キャップで水分を保ち、通気口付きの箱で蒸れを防ぎます。届いた花が傷んでいた場合は、bloomee・medelu・hanamekuのいずれも品質保証制度（再送・返金対応）の対象となります。\"}},{\"@type\":\"Question\",\"name\":\"ポストに入らない場合はどうなりますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"一般的な郵便ポスト（投函口の幅が約3.5cm以上）であれば問題なく届きます。ただし、投函口が極端に小さい場合や、集合住宅で投函口のサイズが合わない場合は、玄関前に置き配されるか、不在票が入ることがあります。事前にポストの投函口のサイズをご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"ポスト投函と宅配便で、届く花に違いはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"配送方法による花の状態の違いを比べた公的なデータは見当たらないため、当サイトではどちらが良いかを示していません。ポスト投函は投函口に入る大きさに限られるため、本数の多いプランは宅配便や手渡しで届くものが中心です。例として、bloomeeのベーシックプラン（8本以上・1回2,180円＋送料550円）は手渡しで届きます（2026年10月24日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"ポスト投函対応のサービスで一番安いのはどこですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ポスト投函対応サービスの中で最も安いのはmedelu（メデル）のMiniプランで、1回748円（送料無料）です。次いでhanameku（ハナメク）のライトプランが1,210円（税込・配送料込）、bloomee（ブルーミー）のお試しプランが980円（送料385円、総額1,365円）です。\"}},{\"@type\":\"Question\",\"name\":\"ポスト投函の花のサブスクは何本届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サービスやプランによって異なりますが、ポスト投函タイプは一般に3〜5本程度です。medeluのMiniプランは3本、bloomeeのお試しプランは4本以上、hanamekuのライトプランは花とグリーンが数本届きます。ポストに入るサイズの制約があるため宅配便タイプより少なめですが、テーブルや玄関に飾るには十分な量です。\"}},{\"@type\":\"Question\",\"name\":\"宅配便のみのサービスを不在時に受け取る方法はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSや日本総合園芸などポスト投函に対応していないサービスでは、配送日を選べる場合があります。AND PLANTSは配送日の指定ができ、日本総合園芸は宅配便なら当社指定の曜日から希望日を選べ、自社配達便は毎月決まった曜日に届きます（2026年10月17日公式確認）。また、宅配ボックスがある場合は、宅配ボックスに届けてもらえることもあります。再配達の依頼も可能ですが、生花は時間とともに鮮度が落ちるため、早めの受け取りをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"一人暮らしにはポスト投函と宅配便どちらがおすすめですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"一人暮らしの方には、不在でも受け取れるポスト投函タイプをおすすめします。日中は仕事で不在がちな場合でも、帰宅後にポストから花を取り出すだけで受け取れます。再配達の手間がなく、配達時間を気にする必要もありません。medelu・bloomee・hanamekuの3サービスがポスト投函に対応しています。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
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
                  <span className="text-[#4A4F49]">比較記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#1F2420] font-medium">ポスト投函できるお花の定期便比較</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/compare/post-delivery/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク ポスト投函比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              ポスト投函できるお花の定期便<br className="hidden md:block" />
              おすすめ比較｜不在でも安心
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              ポスト投函に対応した花のサブスクは、不在時でも郵便ポストに花が届きます。
              当サイトでは、人気5サービスのポスト投函への対応状況を比較しています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">ポスト投函対応</p>
                <p className="text-xl font-bold text-[#2F5B43]">{postOkCount}サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#2F5B43]">5サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最安ポスト投函</p>
                <p className="text-xl font-bold text-[#2F5B43]">748円/回〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">宅配便のみ</p>
                <p className="text-xl font-bold text-[#1F2420]">{postNgCount}サービス</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">目次</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#intro" className="hover:text-[#2F5B43] transition-colors">1. ポスト投函できる花のサブスクの概要</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#2F5B43] transition-colors">2. ポスト投函対応 花のサブスク比較表</a></li>
                  <li><a href="#service-detail" className="hover:text-[#2F5B43] transition-colors">3. 各サービスのポスト投函詳細</a></li>
                  <li><a href="#pros-cons" className="hover:text-[#2F5B43] transition-colors">4. ポスト投函のメリット・デメリット</a></li>
                  <li><a href="#how-to-choose" className="hover:text-[#2F5B43] transition-colors">5. ポスト投函と宅配便の選び方</a></li>
                  <li><a href="#tips" className="hover:text-[#2F5B43] transition-colors">6. ポスト投函で届いた花を長持ちさせる方法</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">7. ポスト投函の花のサブスクに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ポスト投函できる花のサブスクの概要
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              ポスト投函タイプの花のサブスクは、自宅の郵便ポストに花が届くサービスです。
              専用の細長いボックスに入った状態で届くため、不在時でも受け取れます。
              再配達の手間がないため、一人暮らしの方や共働き世帯に多く利用されています。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              ただし、すべての花のサブスクがポスト投函に対応しているわけではありません。
              宅配便のみのサービスや、自社の配達便で届けるサービス（日本総合園芸）もあります（2026年10月17日公式確認）。
              当サイトでは、人気5サービスのポスト投函への対応状況を比較し、それぞれの特徴を解説します。
            </p>
            <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">ポスト投函のポイント</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ 不在でも受け取れるため、再配達の手間がかからない</li>
                <li>・ 専用ボックスで保水処理されており、品質が保たれやすい</li>
                <li>・ ポストのサイズによっては投函できない場合がある</li>
                <li>・ 宅配便に比べて花のボリュームはやや少なめ</li>
                <li>・ 2026年4月時点の情報にもとづく</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ポスト投函対応 花のサブスク比較表
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              人気5サービスのポスト投函への対応状況を一覧で比較しています。対応プラン・料金・届く花の本数もあわせてご確認いただけます。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden" style={{ minWidth: "720px" }}>
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-center font-medium">ポスト投函</th>
                    <th className="px-4 py-3 text-left font-medium">対応プラン</th>
                    <th className="px-4 py-3 text-right font-medium">最安料金</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-center font-medium">花の本数</th>
                    <th className="px-4 py-3 text-center font-medium">品質保証</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#DEDAD2] ${item.postDelivery === "OK" ? "bg-white" : "bg-[#FAFAFA]"}`}>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#2F5B43] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#6B6F6A]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.postDelivery === "OK" ? (
                          <span className="inline-flex items-center justify-center bg-[#EDF1EC] text-[#2F5B43] font-bold text-xs px-3 py-1 rounded-md">
                            対応
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#6B6F6A] font-bold text-xs px-3 py-1 rounded-md">
                            非対応
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-[#4A4F49] text-xs">{item.postDeliveryDetail}</td>
                      <td className="px-4 py-4 text-right text-[#1F2420]">{item.price.toLocaleString()}円</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === 0 ? (
                          <span className="text-[#2F5B43] font-medium">無料</span>
                        ) : item.shipping ? (
                          <span className="text-[#4A4F49]">{item.shipping}円</span>
                        ) : (
                          <span className="text-xs text-[#6B6F6A]">別途</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#4A4F49]">{item.flowers}</td>
                      <td className="px-4 py-4 text-center text-[#4A4F49] text-xs">{item.quality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">表の補足</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ ポスト投函に対応しているサービスは3社（bloomee・medelu・hanameku）です</li>
                <li>・ AND PLANTSは宅配便のみ、日本総合園芸は自社配達便と宅配便での対応です（2026年10月17日公式確認）</li>
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 2026年4月時点の情報です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Service Detail ─── */}
        <section id="service-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              各サービスのポスト投函詳細
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              5サービスそれぞれのポスト投函への対応状況・対応プラン・配送の仕組みを解説します。
            </p>

            <div className="space-y-8">
              {serviceData.map((item) => (
                <div key={item.rank} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${
                    item.postDelivery === "OK"
                      ? "bg-[#EDF1EC] border-b border-[#C9D6CB]"
                      : "bg-[#F5F5F5] border-b border-[#DEDAD2]"
                  }`}>
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-md text-xs font-bold ${
                      item.postDelivery === "OK"
                        ? "bg-[#2F5B43] text-white"
                        : "bg-[#6B6F6A] text-white"
                    }`}>
                      ポスト投函{item.postDelivery === "OK" ? "対応" : "非対応"}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2420]">
                        {item.name}（{item.nameJa}）
                      </h3>
                      <p className="text-sm text-[#4A4F49]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Delivery Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">ポスト投函</p>
                        <p className={`text-lg font-bold ${item.postDelivery === "OK" ? "text-[#2F5B43]" : "text-[#6B6F6A]"}`}>
                          {item.postDelivery === "OK" ? "対応" : "非対応"}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">最安料金</p>
                        <p className="text-lg font-bold text-[#1F2420]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                        <p className="text-lg font-bold text-[#1F2420]">
                          {item.shipping === 0 ? (
                            <span className="text-[#2F5B43]">無料</span>
                          ) : item.shipping ? (
                            <>{item.shipping}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">別途</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">花の本数</p>
                        <p className="text-lg font-bold text-[#1F2420]">{item.flowers}</p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">対応プラン</span>
                        <span className="text-[#1F2420]">{item.postPlans}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">配送方法</span>
                        <span className="text-[#1F2420]">{item.boxType}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">配送頻度</span>
                        <span className="text-[#1F2420]">{item.frequency}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">最低受取回数</span>
                        <span className="text-[#1F2420]">{item.minOrders}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Best For */}
                    <div className="bg-[#EDF1EC] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#2F5B43]">おすすめの方：</span>
                        <span className="text-[#4A4F49]">{item.bestFor}</span>
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={item.url}
                        className="inline-block text-center bg-white text-[#2F5B43] font-bold text-sm px-6 py-3 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
                      >
                        {item.name}の詳細レビューを見る
                      </a>
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block text-center bg-[#2F5B43] text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-[#234534] transition-colors"
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

        {/* ─── Pros & Cons ─── */}
        <section id="pros-cons" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ポスト投函のメリット・デメリット
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              ポスト投函タイプの花のサブスクは便利な一方、いくつかの注意点があります。メリットとデメリットを理解したうえでの選択をおすすめします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Merits */}
              <div className="bg-white rounded-md p-5 border-2 border-[#2F5B43]">
                <h3 className="text-base font-bold text-[#2F5B43] mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-[#2F5B43] text-white rounded-md text-xs">○</span>
                  ポスト投函のメリット
                </h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex gap-2">
                    <span className="text-[#2F5B43] font-bold shrink-0">1.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">不在でも受け取れる</span>
                      <p className="text-xs mt-0.5">再配達の手間がなく、届く日に在宅する必要がありません</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2F5B43] font-bold shrink-0">2.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">配達時間を気にする必要がない</span>
                      <p className="text-xs mt-0.5">時間指定が不要のため、生活リズムに影響しません</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2F5B43] font-bold shrink-0">3.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">送料が安い傾向にある</span>
                      <p className="text-xs mt-0.5">宅配便より配送コストが低いため、送料が安いか無料の場合が多くあります</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2F5B43] font-bold shrink-0">4.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">対面での受け取りが不要</span>
                      <p className="text-xs mt-0.5">配達員とのやり取りがなく、手軽に受け取れます</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2F5B43] font-bold shrink-0">5.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">一人暮らし・共働き世帯に適している</span>
                      <p className="text-xs mt-0.5">日中不在がちな方でも確実に受け取れます</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Demerits */}
              <div className="bg-white rounded-md p-5 border-2 border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#6B6F6A] mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-[#6B6F6A] text-white rounded-md text-xs">・</span>
                  ポスト投函のデメリット
                </h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex gap-2">
                    <span className="text-[#6B6F6A] font-bold shrink-0">1.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">花のボリュームに制限がある</span>
                      <p className="text-xs mt-0.5">ポストに入るサイズのため、3〜5本程度と少なめです</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6B6F6A] font-bold shrink-0">2.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">茎が短めにカットされている</span>
                      <p className="text-xs mt-0.5">ポストに入る長さに合わせるため、茎の長さに制限があります</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6B6F6A] font-bold shrink-0">3.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">夏場は花が傷みやすい</span>
                      <p className="text-xs mt-0.5">ポスト内の温度が高くなる真夏は、花の品質に影響する場合があります</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6B6F6A] font-bold shrink-0">4.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">ポストのサイズによって受け取れない場合がある</span>
                      <p className="text-xs mt-0.5">投函口が小さいポストでは届かない場合があります</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6B6F6A] font-bold shrink-0">5.</span>
                    <div>
                      <span className="font-medium text-[#1F2420]">大きな花や枝物は対象外</span>
                      <p className="text-xs mt-0.5">ユリやひまわりなど大ぶりの花は、ポスト投函では届きません</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-[#EDF1EC] rounded-md p-5">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-2">ポスト投函の利点と宅配便タイプとの使い分け</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                ポスト投函の主な利点は、手軽さと確実な受け取りです。花のボリュームやサイズに制限はありますが、
                小さな花瓶に飾るには十分な量が届きます。忙しい方や不在がちな方には、ポスト投函タイプから始めることをおすすめします。
                ボリュームを重視する場合は、宅配便タイプ（AND PLANTSなど）をご検討ください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ポスト投函と宅配便の選び方
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              ポスト投函と宅配便のそれぞれに適した方をまとめました。生活スタイルに合った配送方法の選択にお役立てください。
            </p>

            <div className="space-y-5">
              {/* Post Delivery */}
              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <h3 className="text-base font-bold text-[#2F5B43] mb-4">ポスト投函が適している方</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">日中不在がちな方（一人暮らし・共働き）</p>
                    <p className="text-xs text-[#4A4F49]">帰宅後にポストから花を取り出すだけで受け取れるため、再配達の手間がかかりません。</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">配達時間に左右されたくない方</p>
                    <p className="text-xs text-[#4A4F49]">時間指定や在宅の必要がないため、予定を気にせず受け取れます。</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">費用対効果を重視する方</p>
                    <p className="text-xs text-[#4A4F49]">ポスト投函は送料が安い傾向にあり、medeluであれば送料無料で748円から利用できます。</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">花のサブスクを初めて利用する方</p>
                    <p className="text-xs text-[#4A4F49]">少量の花から始められるため、花の手入れに慣れていない方にも適した量です。</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#2F5B43] font-medium">
                  おすすめサービス：bloomee / medelu / hanameku
                </div>
              </div>

              {/* Courier Delivery */}
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-4">宅配便・手渡しが適している方</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">在宅時間が確保できる方</p>
                    <p className="text-xs text-[#4A4F49]">在宅ワークの方や、配送日時を指定して受け取れる方に適しています。</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">本数の多い花束を受け取りたい方</p>
                    <p className="text-xs text-[#4A4F49]">AND PLANTSのスタンダードプランは6〜8本（2026年10月17日公式確認）の花束が届きます。</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-medium text-[#1F2420] mb-1">大きな花や珍しい花材を楽しみたい方</p>
                    <p className="text-xs text-[#4A4F49]">ポストに入らないサイズの花（ユリ・ひまわり・枝物など）は宅配便でのみ届きます。</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#4A4F49] font-medium">
                  おすすめサービス：AND PLANTS / 日本総合園芸
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ポスト投函で届いた花を長持ちさせる方法
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              ポスト投函で届いた花は、到着後の手入れによって持ちが大きく変わります。花を長く楽しむためのポイントは以下のとおりです。
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-md w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">届いたらすぐに開封する</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">
                      ポストの中は高温・多湿になりやすいため、帰宅後はすぐに箱から取り出してください。特に夏場は早めの開封が重要です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-md w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">茎を1〜2cm斜めにカットする（水切り）</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">
                      配送中に茎の切り口が乾燥しているため、水の中で斜めにカットすると水の吸い上げが良くなります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-md w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">付属の栄養剤を花瓶の水に入れる</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">
                      多くのサービスでは栄養剤（延命剤）が同封されています。花瓶の水に混ぜることで、花の持ちが大きく向上します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-md w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">直射日光・エアコンの風を避けて飾る</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">
                      直射日光やエアコンの風が直接当たる場所では、花が傷みやすくなります。明るい日陰に飾ることをおすすめします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-md w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">5</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">2〜3日ごとに水を替える</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">
                      花瓶の水は雑菌が繁殖しやすいため、こまめに替えてください。水替えの際に茎の先端を少しカットすると、さらに長持ちします。
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
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ポスト投函の花のサブスクに関するよくある質問
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

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              不在がちな方にはポスト投函対応サービスをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスク5サービスを比較した結果、ポスト投函に対応しているのはbloomee・medelu・hanamekuの3サービスです。
              不在がちな方や再配達の手間を省きたい方には、この3サービスからの選択をおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              ポスト投函対応サービスのうち、費用を重視する場合はmedelu（748円/回・送料無料・Mini・Liteが対応（2026年10月17日公式確認））、
              公式サイトに記載の実績や品質保証を確認したい場合はbloomee（お届け実績3,000万本以上・自社調べ、品質保証あり）、
              配送の柔軟さを重視する場合はhanameku（ポスト投函と宅配便を選択可能・月1回配送も可能）をおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方、本数の多いプランを選びたい場合は宅配便のAND PLANTS（ミディアム8〜10本・ラージ14〜18本が目安）、花材を受け取って自分で生けたい場合は自社配達便・宅配便の日本総合園芸もご検討ください（2026年10月23日公式確認）。
              ポスト投函に限らず、生活スタイルに合った配送方法を選ぶことが、花のサブスクを長く続けるうえで重要です。
              ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                bloomeeの詳細を見る
              </a>
              <a
                href="/services/medelu"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/hanameku"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                hanamekuの詳細を見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
            >
              トップページに戻る
            </a>
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
              掲載情報は2026年4月時点のものです。最新の料金・サービス内容は各公式サイトでご確認ください。
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
