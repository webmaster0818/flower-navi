"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";

/* 料金は単一データソース(services.ts)を参照（公式確認済み・ページ間のズレ防止） */
const S = SERVICES.find((s) => s.id === "andplants")!;

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "AND PLANTS（アンドプランツ）の料金はいくらですか？",
    a: "AND PLANTSには3つのプランがあります。Standardプランは1回1,980円（税込・送料無料）、Mediumプランは1回2,980円（税込・送料無料）、Largeプランは1回4,980円（税込・送料無料）です。いずれも毎週・隔週・月1回の配送頻度から選べます。",
  },
  {
    q: "AND PLANTSの解約方法を教えてください。",
    a: "AND PLANTSは都度払い方式のため、回数縛りはありません。解約はマイページからいつでも手続き可能です。次回配送日の5日前までにマイページで解約手続きを行えば、追加料金なしで解約できます。解約後の違約金や手数料も一切発生しません。",
  },
  {
    q: "AND PLANTSのお花が傷んで届いた場合はどうすればいいですか？",
    a: "AND PLANTSには品質保証制度があります。届いたお花が傷んでいた場合、マイページまたはお問い合わせフォームから写真を添付して申請すると、無料で新しいお花を再送してもらえます。独自開発の梱包システムにより傷みは非常に少ないですが、万が一の場合も安心です。",
  },
  {
    q: "AND PLANTSはどのくらいの頻度で届きますか？",
    a: "AND PLANTSの配送頻度は「毎週」「隔週」「月1回」の3つから選択できます。マイページからいつでも変更可能です。また、旅行や出張などで受け取れない場合は「スキップ機能」を使って配送を1回飛ばすこともできます。スキップは無料で、マイページから簡単に設定できます。",
  },
  {
    q: "AND PLANTSの初回クーポンはありますか？",
    a: "はい、AND PLANTSでは初回限定で500円OFFクーポンを利用できます。公式サイトから申し込む際にクーポンコードを入力するか、公式サイト上のキャンペーンバナーから申し込むと自動的に適用されます。Standardプランなら初回1,480円で始められるため、お試しにもおすすめです。",
  },
  {
    q: "AND PLANTSは観葉植物も届きますか？",
    a: "AND PLANTSはお花の定期便だけでなく、観葉植物の販売も行っています。定期便はお花（ブーケ）が届くサービスですが、公式サイトでは観葉植物やドライフラワーなどの単品購入も可能です。お花のサブスクと合わせて、お部屋のグリーンインテリアをトータルで揃えられる点が他社にはない魅力です。",
  },
  {
    q: "AND PLANTSの対応エリアはどこですか？",
    a: "AND PLANTSは宅配便（ヤマト運輸）での配送のため、一部離島や遠隔地を除き日本全国に対応しています。ただし、北海道・沖縄・離島への配送は追加送料が発生する場合や、配送対象外となる場合があります。詳しくはお申し込み時にお届け先の郵便番号で確認できます。",
  },
  {
    q: "AND PLANTSのお花はどんな状態で届きますか？",
    a: "AND PLANTSでは3万件以上の配送実績をもとに独自開発した専用梱包システムを採用しています。お花が配送中に傷まないよう、衝撃吸収素材と保水処理を施した状態で届きます。茎の切り口にはエコゼリーが付けられており、届いたらすぐに花瓶に飾れる状態になっています。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "S.Y.",
    age: "30代女性",
    rating: 5,
    title: "とにかくおしゃれなブーケに大満足",
    text: "インテリアにこだわりがあるので、お花もセンスの良いものが欲しくてAND PLANTSを選びました。毎回届くブーケがまるで花屋さんのディスプレイのようなクオリティで、部屋の雰囲気が一気に良くなります。独自梱包のおかげか、届いたお花がいつも新鮮なのも嬉しいポイントです。",
    date: "2026年2月",
  },
  {
    name: "K.H.",
    age: "20代女性",
    rating: 4,
    title: "初回500円OFFで気軽に試せた",
    text: "花のサブスクは気になっていたけど価格がネックでした。AND PLANTSの初回500円OFFクーポンを使って1,480円でStandardプランを試したところ、想像以上にボリュームのあるおしゃれなブーケが届いて感動。隔週コースにしてコストを抑えつつ楽しんでいます。",
    date: "2026年1月",
  },
  {
    name: "M.T.",
    age: "40代女性",
    rating: 5,
    title: "配送頻度が選べるのが便利",
    text: "月1回コースで利用しています。毎週だとお手入れが大変ですが、月1回なら無理なく続けられるのがありがたいです。Mediumプランにしていますが、花の種類も豊富でボリュームも十分。お花だけでなく観葉植物も一緒にサイトで購入できるので、リビングがすっかり緑と花でいっぱいになりました。",
    date: "2025年12月",
  },
  {
    name: "A.N.",
    age: "30代男性",
    rating: 3,
    title: "おしゃれだけど価格はやや高め",
    text: "デザイン性は間違いなくトップクラスです。ただ、Standardプランでも1,980円なので他社と比べるとやや割高感があります。同価格帯で比較するとbloomeeのレギュラープランの方が安いですが、AND PLANTSの方が見た目のクオリティは上。おしゃれさを取るか、コスパを取るかの選択ですね。",
    date: "2025年11月",
  },
  {
    name: "R.I.",
    age: "20代女性",
    rating: 4,
    title: "梱包が丁寧で鮮度が良い",
    text: "以前別のサービスを使っていたときはお花がしおれて届くこともありましたが、AND PLANTSに変えてからは一度もそういったことがありません。独自の梱包システムのおかげだと思います。宅配便なので受け取りは必要ですが、鮮度を考えると納得です。都度払いで回数縛りがないのも安心。",
    date: "2026年3月",
  },
];

/* ─── Star Rating Component ─── */
function StarRating({ rating }: { rating: number }) {
  return (
    <>
                {/* SERVICE_SCHEMA_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"AND PLANTS（アンドプランツ）\",\"serviceType\":\"お花の定期便\",\"provider\":{\"@type\":\"Organization\",\"name\":\"AND PLANTS（アンドプランツ）\"},\"areaServed\":\"JP\",\"url\":\"https://ohana-delivery.com/services/and-plants/\"}" }} />
        {/* SERVICE_SCHEMA_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"name\":\"AND PLANTS（アンドプランツ）\",\"description\":\"AND PLANTS（アンドプランツ）は花のサブスクリプションサービスです。\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.2\",\"reviewCount\":5,\"bestRating\":5,\"worstRating\":1},\"review\":[{\"@type\":\"Review\",\"author\":{\"@type\":\"Person\",\"name\":\"S.Y.\"},\"datePublished\":\"2026-2-01\",\"reviewBody\":\"インテリアにこだわりがあるので、お花もセンスの良いものが欲しくてAND PLANTSを選びました。毎回届くブーケがまるで花屋さんのディスプレイのようなクオリティで、部屋の雰囲気が一気に良くなります。独自梱包のおかげか、届いたお花がいつも新鮮なのも嬉しいポイントです。\",\"name\":\"とにかくおしゃれなブーケに大満足\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":5,\"bestRating\":5,\"worstRating\":1}},{\"@type\":\"Review\",\"author\":{\"@type\":\"Person\",\"name\":\"K.H.\"},\"datePublished\":\"2026-1-01\",\"reviewBody\":\"花のサブスクは気になっていたけど価格がネックでした。AND PLANTSの初回500円OFFクーポンを使って1,480円でStandardプランを試したところ、想像以上にボリュームのあるおしゃれなブーケが届いて感動。隔週コースにしてコストを抑えつつ楽しんでいます。\",\"name\":\"初回500円OFFで気軽に試せた\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":4,\"bestRating\":5,\"worstRating\":1}},{\"@type\":\"Review\",\"author\":{\"@type\":\"Person\",\"name\":\"M.T.\"},\"datePublished\":\"2025-12-01\",\"reviewBody\":\"月1回コースで利用しています。毎週だとお手入れが大変ですが、月1回なら無理なく続けられるのがありがたいです。Mediumプランにしていますが、花の種類も豊富でボリュームも十分。お花だけでなく観葉植物も一緒にサイトで購入できるので、リビングがすっかり緑と花でいっぱいになりました。\",\"name\":\"配送頻度が選べるのが便利\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":5,\"bestRating\":5,\"worstRating\":1}},{\"@type\":\"Review\",\"author\":{\"@type\":\"Person\",\"name\":\"A.N.\"},\"datePublished\":\"2025-11-01\",\"reviewBody\":\"デザイン性は間違いなくトップクラスです。ただ、Standardプランでも1,980円なので他社と比べるとやや割高感があります。同価格帯で比較するとbloomeeのレギュラープランの方が安いですが、AND PLANTSの方が見た目のクオリティは上。おしゃれさを取るか、コスパを取るかの選択ですね。\",\"name\":\"おしゃれだけど価格はやや高め\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":3,\"bestRating\":5,\"worstRating\":1}},{\"@type\":\"Review\",\"author\":{\"@type\":\"Person\",\"name\":\"R.I.\"},\"datePublished\":\"2026-3-01\",\"reviewBody\":\"以前別のサービスを使っていたときはお花がしおれて届くこともありましたが、AND PLANTSに変えてからは一度もそういったことがありません。独自の梱包システムのおかげだと思います。宅配便なので受け取りは必要ですが、鮮度を考えると納得です。都度払いで回数縛りがないのも安心。\",\"name\":\"梱包が丁寧で鮮度が良い\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":4,\"bestRating\":5,\"worstRating\":1}}]}" }} />
                {/* CANCEL_FLOW_SCHEMA_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"AND PLANTS（アンドプランツ）の解約手順\",\"description\":\"AND PLANTS（アンドプランツ）の解約方法をステップごとに解説\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"マイページにログイン\",\"text\":\"AND PLANTS公式サイトのマイページからログイン。\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"「定期便管理」を選択\",\"text\":\"マイページから定期便管理画面へ。\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"「定期便を解約する」をクリック\",\"text\":\"画面の指示に従って解約フローへ。\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"理由選択(任意)とフィードバック\",\"text\":\"アンケートに任意で回答。\"},{\"@type\":\"HowToStep\",\"position\":5,\"name\":\"「解約を確定する」をクリック\",\"text\":\"次回配送予定日の5日前までに完了させてください。\"},{\"@type\":\"HowToStep\",\"position\":6,\"name\":\"確認メール受信\",\"text\":\"AND PLANTSから解約完了通知メールが届きます。\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"サービス一覧\",\"item\":\"https://ohana-delivery.com/services/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン\",\"item\":\"https://ohana-delivery.com/services/and-plants/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン\",\"description\":\"AND PLANTS（アンドプランツ）の評判・口コミ・料金プラン を解説。料金・評判・選び方を網羅。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-07-03T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/services/and-plants/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"AND PLANTS（アンドプランツ）の料金はいくらですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSには3つのプランがあります。Standardプランは1回1,980円（税込・送料無料）、Mediumプランは1回2,980円（税込・送料無料）、Largeプランは1回4,980円（税込・送料無料）です。いずれも毎週・隔週・月1回の配送頻度から選べます。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSの解約方法を教えてください。\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSは都度払い方式のため、回数縛りはありません。解約はマイページからいつでも手続き可能です。次回配送日の5日前までにマイページで解約手続きを行えば、追加料金なしで解約できます。解約後の違約金や手数料も一切発生しません。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSのお花が傷んで届いた場合はどうすればいいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSには品質保証制度があります。届いたお花が傷んでいた場合、マイページまたはお問い合わせフォームから写真を添付して申請すると、無料で新しいお花を再送してもらえます。独自開発の梱包システムにより傷みは非常に少ないですが、万が一の場合も安心です。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSはどのくらいの頻度で届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSの配送頻度は「毎週」「隔週」「月1回」の3つから選択できます。マイページからいつでも変更可能です。また、旅行や出張などで受け取れない場合は「スキップ機能」を使って配送を1回飛ばすこともできます。スキップは無料で、マイページから簡単に設定できます。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSの初回クーポンはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、AND PLANTSでは初回限定で500円OFFクーポンを利用できます。公式サイトから申し込む際にクーポンコードを入力するか、公式サイト上のキャンペーンバナーから申し込むと自動的に適用されます。Standardプランなら初回1,480円で始められるため、お試しにもおすすめです。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSは観葉植物も届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSはお花の定期便だけでなく、観葉植物の販売も行っています。定期便はお花（ブーケ）が届くサービスですが、公式サイトでは観葉植物やドライフラワーなどの単品購入も可能です。お花のサブスクと合わせて、お部屋のグリーンインテリアをトータルで揃えられる点が他社にはない魅力です。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSの対応エリアはどこですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSは宅配便（ヤマト運輸）での配送のため、一部離島や遠隔地を除き日本全国に対応しています。ただし、北海道・沖縄・離島への配送は追加送料が発生する場合や、配送対象外となる場合があります。詳しくはお申し込み時にお届け先の郵便番号で確認できます。\"}},{\"@type\":\"Question\",\"name\":\"AND PLANTSのお花はどんな状態で届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSでは3万件以上の配送実績をもとに独自開発した専用梱包システムを採用しています。お花が配送中に傷まないよう、衝撃吸収素材と保水処理を施した状態で届きます。茎の切り口にはエコゼリーが付けられており、届いたらすぐに花瓶に飾れる状態になっています。\"}}]}" }} />
    <div className="flex gap-0.5" aria-label={`${rating}つ星`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </>
  );
}

/* ─── Main Component ─── */
export default function AndPlantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
                  <span className="text-[#333] font-medium">AND PLANTS（アンドプランツ）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              AND PLANTS（アンドプランツ）の口コミ・評判を<br className="hidden md:block" />
              徹底調査【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              おしゃれ派に人気の花サブスク「AND PLANTS」。独自開発の梱包システムとセンス抜群のブーケセレクトが話題です。
              実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">配送実績</p>
                <p className="text-xl font-bold text-[#4A7C59]">3万件以上</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">初回特典</p>
                <p className="text-xl font-bold text-[#4A7C59]">500円OFF</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">{S.cheapest.price.toLocaleString()}円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">支払い方式</p>
                <p className="text-xl font-bold text-[#4A7C59]">都度払い</p>
              </div>
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
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. AND PLANTSとは？サービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 料金プラン・送料の詳細</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">3. AND PLANTSのメリット（良い評判）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">4. AND PLANTSのデメリット（悪い評判）</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">5. 利用者の口コミ・評判</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">8. AND PLANTSの始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">9. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">10. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTS（アンドプランツ）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              AND PLANTS（アンドプランツ）は、おしゃれなインテリアとの調和を重視した花のサブスクリプションサービスです。
              プロのフローリストがセレクトしたセンス抜群のブーケが定期的に届くのが最大の特徴で、インテリアにこだわりのある方やSNS映えするお花を求める方に特に人気があります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              お花だけでなく観葉植物の販売も手がけており、「植物のある暮らし」をトータルで提案するブランドとして注目を集めています。
              3万件以上の配送実績から独自開発した梱包システムにより、新鮮な状態でお花が届く点も高く評価されています。
              都度払い方式で回数縛りがないため、気軽に始められるサービスです。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">AND PLANTS 基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">サービス名</span>
                  <span className="text-[#333]">AND PLANTS（アンドプランツ）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">配送実績</span>
                  <span className="text-[#333]">3万件以上</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">取り扱い</span>
                  <span className="text-[#333]">お花（ブーケ）/ 観葉植物</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">届き方</span>
                  <span className="text-[#333]">宅配便（手渡し）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">送料</span>
                  <span className="text-[#333]">無料</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                  <span className="text-[#333]">毎週 / 隔週 / 月1回</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">支払い方式</span>
                  <span className="text-[#333]">都度払い（回数縛りなし）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">品質保証</span>
                  <span className="text-[#333]">あり（再送対応）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSの料金プラン・送料
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              AND PLANTSは3つのプランを提供しています。いずれも税込価格で送料は無料です。
              配送頻度は「毎週」「隔週」「月1回」から選択可能で、都度払い方式のため回数縛りはありません。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* Standardプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">気軽に始めたい方に</p>
                  <h3 className="text-lg font-bold text-[#333]">Standard</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">1,980<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">送料無料</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>セレクトブーケ（Sサイズ）</p>
                    <p>届き方：宅配便</p>
                    <p>初回：1,480円（500円OFF）</p>
                  </div>
                </div>
              </div>

              {/* Mediumプラン */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  人気
                </div>
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#4A7C59] mb-1">一番人気</p>
                  <h3 className="text-lg font-bold text-[#333]">Medium</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">2,980<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">送料無料</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>セレクトブーケ（Mサイズ）</p>
                    <p>届き方：宅配便</p>
                    <p>初回：2,480円（500円OFF）</p>
                  </div>
                </div>
              </div>

              {/* Largeプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">豪華に楽しみたい方に</p>
                  <h3 className="text-lg font-bold text-[#333]">Large</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">4,980<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">送料無料</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>セレクトブーケ（Lサイズ）</p>
                    <p>届き方：宅配便</p>
                    <p>初回：4,480円（500円OFF）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">料金に関する補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 全プラン送料無料です</li>
                <li>・ 配送頻度は「毎週」「隔週」「月1回」から選択可能（マイページで変更可）</li>
                <li>・ 都度払い方式のため回数縛りはありません</li>
                <li>・ 初回500円OFFクーポンが利用できます</li>
                <li>・ スキップ機能あり（配送を1回飛ばすことが無料で可能）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSのメリット・良い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "プロがセレクトしたおしゃれなブーケ",
                  text: "AND PLANTSの最大の魅力は、プロのフローリストがセレクトしたハイセンスなブーケが届くことです。インテリアとの調和を意識した色合いやスタイリングで、お部屋の雰囲気をワンランクアップさせてくれます。SNSでも「おしゃれすぎる」と話題になっており、デザイン性を重視する方から高い支持を得ています。",
                },
                {
                  title: "独自開発の梱包システムで鮮度抜群",
                  text: "3万件以上の配送実績をもとに独自開発された専用梱包システムにより、お花が新鮮な状態で届きます。衝撃吸収素材と保水処理を施した梱包は、他社と比べても花の傷みが少ないと口コミで高評価。宅配便でのお届けのため、ポスト投函サービスで起きがちな高温による劣化の心配もありません。",
                },
                {
                  title: "初回500円OFFで始めやすい",
                  text: "初めての方は500円OFFクーポンを利用できるため、Standardプランなら1,480円でお試しできます。都度払い方式で回数縛りもないため、「まずは1回試してみたい」という方でもリスクなく始められます。合わなければすぐに解約できる気軽さが好評です。",
                },
                {
                  title: "配送頻度が3パターンから選べる",
                  text: "毎週・隔週・月1回の3つの配送頻度から選択でき、ライフスタイルに合わせて柔軟に調整できます。bloomeeやmedeluが毎週・隔週の2択なのに対し、月1回が選べるのはAND PLANTSの強み。忙しい方や「月に1回のご褒美」として楽しみたい方にぴったりです。",
                },
                {
                  title: "観葉植物もトータルで揃えられる",
                  text: "AND PLANTSはお花の定期便だけでなく、観葉植物やドライフラワーの販売も行っています。お花のサブスクと合わせて観葉植物を購入すれば、お部屋のグリーンインテリアをワンストップで揃えられます。「植物のある暮らし」をトータルで提案してくれるブランドは他にはあまりありません。",
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
              AND PLANTSのデメリット・悪い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "他社と比べて価格がやや高め",
                  text: "Standardプランでも1,980円/回と、bloomeeの体験プラン（980円）やmedeluのLiteプラン（748円）と比較すると価格は高めです。送料無料とはいえ、トータルコストではmedeluのほうがお得。ただし、ブーケのデザイン性やボリュームを考慮すると、価格に見合った品質だという声も多く見られます。",
                },
                {
                  title: "対応エリアが限定される場合がある",
                  text: "AND PLANTSは宅配便での配送のため、北海道・沖縄・離島など一部地域では追加送料が発生したり、配送対象外となる場合があります。ポスト投函対応のbloomeeやmedeluと比べると、配送エリアの面ではやや制約がある点に注意が必要です。お申し込み前に対応エリアを確認しておきましょう。",
                },
                {
                  title: "プラン変更の柔軟性にやや課題",
                  text: "プランの変更はマイページから手続きできますが、次回配送日の数日前までに変更が必要なため、タイミングによっては希望通りに変更できない場合があります。また、一時的にプランをダウングレードしたい場合の操作がやや分かりにくいという口コミも見られます。事前にマイページの操作方法を確認しておくと安心です。",
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

        {/* ─── User Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            {/* 公開口コミの傾向（出典・調査年月つき） */}
            <div className="mb-10 rounded-2xl border border-[#E8DFD5] bg-[#FBF7F2] p-5 md:p-7">
              <h3 className="font-bold text-[#333] mb-1">公開口コミの傾向</h3>
              <p className="text-xs text-[#999] mb-4">出典：App Store「アンドフラワー」アプリ（4.4★/23件・花の単発購入アプリ）・公式・レビュー記事（2026年7月時点／運営：株式会社Domuz）。口コミは傾向の要約で、個別の体験には差があります。</p>
              <div className="grid md:grid-cols-2 gap-5">
                <div><p className="font-bold text-[#4A7C59] text-sm mb-2">好意的な傾向</p><ul className="space-y-2"><li className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#4A7C59] shrink-0">◎</span><span>梱包が丁寧で美しい</span></li><li className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#4A7C59] shrink-0">◎</span><span>植物の品質・状態が良く、鉢もおしゃれでインテリア性が高い</span></li><li className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#4A7C59] shrink-0">◎</span><span>植え替え済み・ケアカード付きで初心者に優しい</span></li></ul></div>
                <div><p className="font-bold text-[#C08552] text-sm mb-2">気になる/否定的な傾向</p><ul className="space-y-2"><li className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#C08552] shrink-0">△</span><span>価格が高いという声が最も多い</span></li><li className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#C08552] shrink-0">△</span><span>樹形を指定できず「思っていた形と違う」という不満</span></li><li className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#C08552] shrink-0">△</span><span>稀に配送トラブル（倒れ・鉢割れ）</span></li></ul></div>
              </div>
              <p className="text-xs text-[#999] mt-4">※ App Storeの4.4★は花の単発購入アプリの評価で、定期便「AND FLOWER」総合の平均★ではありません。他プラットフォームの平均★は一次確認できず未掲載です。</p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTS利用者の口コミ・評判
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              実際にAND PLANTSを利用したユーザーの口コミをご紹介します。良い口コミだけでなく改善を求める声も含め、バランスよくまとめました。
            </p>
            <div className="space-y-5">
              {userReviews.map((review, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E8F0EB] flex items-center justify-center">
                        <span className="text-sm font-bold text-[#4A7C59]">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#333]">{review.name} / {review.age}</p>
                        <p className="text-xs text-[#999]">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <h3 className="text-sm font-bold text-[#333] mb-2">{review.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommendation Section ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSはこんな人におすすめ
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
                    <span>おしゃれなブーケにこだわりたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>鮮度の高いお花を受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>回数縛りなしで気軽に始めたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>月1回ペースでゆったり楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>観葉植物も合わせて揃えたい方</span>
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
                    <span>とにかく安くお花を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>ポスト投函で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>北海道・沖縄・離島にお住まいの方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>自分で花の種類を選びたい方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <section id="comparison" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTS vs 競合サービス比較
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              AND PLANTSと人気の花のサブスク2社を比較しました。それぞれの特徴を把握して、自分に合ったサービスを選びましょう。
            </p>
            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">比較項目</th>
                    <th>AND PLANTS</th>
                    <th>bloomee</th>
                    <th className="rounded-tr-lg">medelu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">最安プラン</td>
                    <td>1,980円/回</td>
                    <td>980円/回</td>
                    <td>748円/回</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">送料</td>
                    <td className="font-bold text-[#4A7C59]">無料</td>
                    <td>385〜550円</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">配送頻度</td>
                    <td className="font-bold text-[#4A7C59]">毎週/隔週/月1回</td>
                    <td>毎週/隔週</td>
                    <td>毎週/隔週</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">届き方</td>
                    <td>宅配便</td>
                    <td>ポスト投函</td>
                    <td>ポスト投函</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">回数縛り</td>
                    <td className="font-bold text-[#4A7C59]">なし</td>
                    <td>4回</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">品質保証</td>
                    <td>あり</td>
                    <td>あり</td>
                    <td>あり</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">デザイン性</td>
                    <td className="font-bold text-[#4A7C59]">非常に高い</td>
                    <td>高い</td>
                    <td>普通</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">おすすめポイント</td>
                    <td>おしゃれ重視、鮮度◎</td>
                    <td>初心者向け、手軽さ</td>
                    <td>コスパ最強</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">AND PLANTS vs bloomee</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  bloomeeは980円/回から始められる手軽さと、ポスト投函で受け取れる利便性が魅力です。一方、AND PLANTSはプロがセレクトしたおしゃれなブーケと、独自梱包による高い鮮度が強みです。
                  価格を抑えて気軽に始めたい初心者にはbloomee、デザイン性と品質にこだわりたい方にはAND PLANTSがおすすめです。AND PLANTSは回数縛りがないため、お試し感覚で1回だけ利用することも可能です。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">AND PLANTS vs medelu</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  medeluは748円/回・送料無料というコスパの高さが最大の魅力で、花のサブスクをとにかく安く始めたい方に最適です。AND PLANTSはmedeluの約3倍の価格ですが、ブーケのデザイン性・ボリューム・梱包の品質ではAND PLANTSが上回ります。
                  コスパ重視ならmedelu、見た目の美しさや特別感を求めるならAND PLANTSという棲み分けです。月1回の配送が選べるのもAND PLANTSならではの強みです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              AND PLANTSの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "AND PLANTSの公式サイトにアクセスし、「お花の定期便」ページへ移動します。初回500円OFFクーポンのバナーが表示されている場合は、そこから申し込むと自動で割引が適用されます。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択",
                  text: "Standard（1,980円）、Medium（2,980円）、Large（4,980円）の中から希望のプランを選びます。迷ったらMediumプランが人気でおすすめです。",
                },
                {
                  step: "STEP 3",
                  title: "配送頻度を選択",
                  text: "「毎週」「隔週」「月1回」の3つから配送頻度を選びます。初めての方は隔週または月1回から始めるのがおすすめです。後からマイページで変更もできます。",
                },
                {
                  step: "STEP 4",
                  title: "お届け先情報を入力",
                  text: "氏名、住所、電話番号などのお届け先情報を入力します。宅配便での配送のため、受け取り可能な日時を指定できます。",
                },
                {
                  step: "STEP 5",
                  title: "クーポンコードを入力・支払い",
                  text: "初回500円OFFクーポンコードがある場合はここで入力します。クレジットカード情報を登録して支払い手続きを完了します。",
                },
                {
                  step: "STEP 6",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込み完了後、指定した日時にプロがセレクトしたおしゃれなブーケが届きます。届いたお花は水切りをしてから花瓶に飾りましょう。同封のケアガイドも参考になります。",
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
            <p className="text-sm text-[#666] mb-6">回数縛りなし。次回配送予定日の5日前までに手続きを。</p>
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
                    <p className="text-sm text-[#666] leading-relaxed">次回配送予定日の5日前までに完了させてください。</p>
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
              まとめ：AND PLANTSはおしゃれ派に最適な花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              AND PLANTS（アンドプランツ）は、プロがセレクトしたおしゃれなブーケと、独自開発の梱包システムによる高い鮮度が魅力の花のサブスクです。
              都度払い方式で回数縛りがなく、初回500円OFFクーポンも用意されているため、気軽にお試しできます。配送頻度も毎週・隔週・月1回の3パターンから選べ、ライフスタイルに合わせた利用が可能です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、他社と比べて価格がやや高めな点や、宅配便のため在宅での受け取りが必要な点はデメリットとして把握しておきましょう。
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
  );
}
