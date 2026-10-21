"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "一人暮らしで花のサブスクを始める場合、おすすめのサービスはどれですか？",
    a: "当サイトでは、一人暮らしの方にはmedelu（メデル）のMiniプランを最もおすすめしています。748円（送料込み）で始められ、ポスト投函で受け取れるため、不在が多い方でも利用しやすいサービスです。回数の条件もないため、試しに利用しやすい点も特長です。",
  },
  {
    q: "一人暮らしで不在が多くても大丈夫ですか？",
    a: "ポスト投函に対応しているサービスであれば、不在でも受け取りに支障はありません。medelu・bloomee・hanameku（ポスト投函プラン）はいずれもポストに届くため、帰宅後に受け取れます。ポストの投入口が小さい場合は、事前にサイズをご確認ください。",
  },
  {
    q: "花瓶がなくても始められますか？",
    a: "はい、始められます。100円ショップのガラスコップやジャムの空き瓶でも十分に代用できます。まずは手持ちのグラスや空き瓶で試し、継続する場合に小さな花瓶を購入する方法をおすすめします。",
  },
  {
    q: "花の手入れは大変ですか？",
    a: "基本的なお手入れは、水替えと茎のカットのみです。2〜3日に1回水を替え、茎を1cmほど斜めにカットすることで長持ちします。1回の作業は5分以内で済みます。花のサブスクにはお手入れガイドが同封されていることが多く、初めての方でも取り組みやすい内容です。",
  },
  {
    q: "ワンルームでも花を飾るスペースはありますか？",
    a: "3本程度のミニブーケであれば、テーブルの隅・キッチンカウンター・洗面台・窓際など、小さなスペースで十分に飾れます。コンパクトな空間のほうが花の存在感が際立ち、部屋全体の雰囲気が変わります。",
  },
  {
    q: "旅行や出張で受け取れない週はどうすればいいですか？",
    a: "ほとんどのサービスにスキップ（配送停止）機能があります。medeluは3回先までのスキップや一時休止ができます（決済日前日の木曜日まで）。hanamekuは次回分のスキップができます（お届け予定日の10日前まで）。bloomeeもマイページからスキップが可能です。旅行の予定が決まった時点で、早めに手続きを行ってください。",
  },
  {
    q: "月額の目安はいくらですか？",
    a: "一人暮らしの場合、月1,000〜2,000円程度が目安です。medeluのMiniプランを隔週で利用すれば月約1,496円（748円x2回）、bloomeeのお試しプランは最初の4回が毎週届くため最初の1か月は約5,460円（1,365円x4回）、5回目以降に隔週へ変えると月約2,730円（1,365円x2回）です。まずは隔週配送から始め、ご自身に合うペースを確認する方法をおすすめします。",
  },
  {
    q: "花のサブスクはいつでも解約できますか？",
    a: "medeluには回数の条件がなく、いつでも解約できます。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません。bloomeeには4回の最低受け取り回数があるため、4回受け取る前に解約すると残り回数分の料金が発生します。試しに利用したい方には、回数の条件がないサービスから始める方法をおすすめします。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "medelu",
    nameJa: "メデル",
    plan: "Miniプラン",
    price: 748,
    shipping: 0,
    total: 748,
    shippingLabel: "無料",
    flowers: "3〜4本",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "なし",
    quality: "あり",
    url: "/services/medelu",
    officialUrl: "https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L",
    highlight: "748円から、送料無料です。ポスト投函のため不在時も受け取れます。回数の条件がなく、始めやすいサービスです。",
    bestFor: "費用を抑えたい一人暮らしの方、初めて花のサブスクを試す方",
    detail:
      "当サイトでは、medeluを一人暮らしの方に最もおすすめの花のサブスクと位置付けています。Miniプランは1回748円（送料無料）で、3〜4本の花がポストに届きます。生産者と市場から直接仕入れた花を届けると案内しています（2026年10月21日公式確認）。回数の条件がないため、まず試してみたい方にも適しています。配送頻度は毎週・隔週から選べ、3回先までのスキップや一時休止もマイページで行えます。3〜4本というボリュームは、一人暮らしの小さなテーブルに飾るのに適した量です。",
  },
  {
    rank: 2,
    name: "bloomee",
    nameJa: "ブルーミー",
    plan: "お試しプラン",
    price: 980,
    shipping: 385,
    total: 1365,
    shippingLabel: "385円",
    flowers: "4本以上",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "4回",
    quality: "あり（定期便は2週間以内の連絡で返金・交換）",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    highlight: "お届け実績3,000万本以上（公式・自社調べ）です。お試しプラン・グリーンプランはポスト投函で届きます。",
    bestFor: "安心感や知名度を重視する方、SNSで花の投稿を楽しみたい方",
    detail:
      "bloomeeは公式サイトで「お花のお届け実績3,000万本以上（自社調べ）」と表記している花のサブスクです。お試しプランは980円で、送料385円を含めると1回1,365円です。季節の花が届くため、毎回異なる花を楽しめます。品質保証は、定期便であれば2週間以内の連絡で返金・交換の対象です（公式・特定商取引法に基づく表記）。SNSでの投稿が多く、他の利用者のアレンジを参考にできる点も、一人暮らしの方にとっての利点です。ただし、4回の最低受け取り回数がある点にご注意ください。",
  },
  {
    rank: 3,
    name: "hanameku",
    nameJa: "ハナメク",
    plan: "ライトプラン",
    price: 1210,
    shipping: 0,
    total: 1210,
    shippingLabel: "無料（配送料込み）",
    flowers: "3〜4本（グリーンを含む）",
    delivery: "ポスト投函（セルフアレンジプランは宅配便）",
    frequency: "毎週 / 隔週（セルフアレンジプランは月1回 / 隔週）",
    minOrders: "初回は解約不可",
    quality: "あり",
    url: "/services/hanameku",
    officialUrl: "https://t.felmat.net/fmcl?ak=W58911.1.O99396Q.A135745L",
    highlight: "ライトプランは1,210円（税込・配送料込み）です。市場直送のため鮮度が高く、ライトプランはポスト投函、セルフアレンジプランは宅配便で届きます。",
    bestFor: "鮮度を重視する方、月1回から始めたい方",
    detail:
      "hanamekuは市場直送を特長とする花のサブスクです（2026年10月21日公式確認）。ライトプランは1,210円（税込・配送料込）で、グリーンを含む3〜4本の花がポスト投函で届きます。市場から直接届くため、鮮度が高い点が特長です。ライトプランの配送頻度は毎週・隔週から選べます。宅配便で届くセルフアレンジプラン（1,958円〜・地域により220〜550円の追加送料）は月1回・隔週から選べるため、月1回から始めたい方はこちらが選択肢になります。最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません。解約・スキップは、お届け予定日の10日前までに手続きします。",
  },
];

/* ─── Main Component ─── */
export default function HitorigurashiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"一人暮らしにおすすめの花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/hitorigurashi/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"一人暮らしにおすすめの花のサブスク\",\"description\":\"一人暮らしにおすすめの花のサブスクについて、料金・評判・選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-17T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/hitorigurashi/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"一人暮らしで花のサブスクを始める場合、おすすめのサービスはどれですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"当サイトでは、一人暮らしの方にはmedelu（メデル）のMiniプランを最もおすすめしています。748円（送料込み）で始められ、ポスト投函で受け取れるため、不在が多い方でも利用しやすいサービスです。回数の条件もないため、試しに利用しやすい点も特長です。\"}},{\"@type\":\"Question\",\"name\":\"一人暮らしで不在が多くても大丈夫ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ポスト投函に対応しているサービスであれば、不在でも受け取りに支障はありません。medelu・bloomee・hanameku（ポスト投函プラン）はいずれもポストに届くため、帰宅後に受け取れます。ポストの投入口が小さい場合は、事前にサイズをご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"花瓶がなくても始められますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、始められます。100円ショップのガラスコップやジャムの空き瓶でも十分に代用できます。まずは手持ちのグラスや空き瓶で試し、継続する場合に小さな花瓶を購入する方法をおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"花の手入れは大変ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"基本的なお手入れは、水替えと茎のカットのみです。2〜3日に1回水を替え、茎を1cmほど斜めにカットすることで長持ちします。1回の作業は5分以内で済みます。花のサブスクにはお手入れガイドが同封されていることが多く、初めての方でも取り組みやすい内容です。\"}},{\"@type\":\"Question\",\"name\":\"ワンルームでも花を飾るスペースはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"3本程度のミニブーケであれば、テーブルの隅・キッチンカウンター・洗面台・窓際など、小さなスペースで十分に飾れます。コンパクトな空間のほうが花の存在感が際立ち、部屋全体の雰囲気が変わります。\"}},{\"@type\":\"Question\",\"name\":\"旅行や出張で受け取れない週はどうすればいいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ほとんどのサービスにスキップ（配送停止）機能があります。medeluは3回先までのスキップや一時休止ができます（決済日前日の木曜日まで）。hanamekuは次回分のスキップができます（お届け予定日の10日前まで）。bloomeeもマイページからスキップが可能です。旅行の予定が決まった時点で、早めに手続きを行ってください。\"}},{\"@type\":\"Question\",\"name\":\"月額の目安はいくらですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"一人暮らしの場合、月1,000〜2,000円程度が目安です。medeluのMiniプランを隔週で利用すれば月約1,496円（748円x2回）、bloomeeのお試しプランは最初の4回が毎週届くため最初の1か月は約5,460円（1,365円x4回）、5回目以降に隔週へ変えると月約2,730円（1,365円x2回）です。まずは隔週配送から始め、ご自身に合うペースを確認する方法をおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクはいつでも解約できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"medeluには回数の条件がなく、いつでも解約できます。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません。bloomeeには4回の最低受け取り回数があるため、4回受け取る前に解約すると残り回数分の料金が発生します。試しに利用したい方には、回数の条件がないサービスから始める方法をおすすめします。\"}}]}" }} />
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
                  <span className="text-[#333] font-medium">一人暮らしにおすすめの花サブスク</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              一人暮らし向けガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              一人暮らしにおすすめの花サブスク3選<br className="hidden md:block" />
              費用と手軽さで比較
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              一人暮らしの部屋に花を飾りたいものの、どのサービスを選べばよいか、継続できるかどうかで迷う方も少なくありません。
              当サイトでは、一人暮らしに適した花のサブスクを3つ選び、費用・手軽さ・受け取りやすさの観点で比較しています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">748円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#4A7C59]">3サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ポスト投函</p>
                <p className="text-xl font-bold text-[#4A7C59]">全サービス対応</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">回数の条件なし</p>
                <p className="text-xl font-bold text-[#4A7C59]">1サービス</p>
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
                  <li><a href="#why-flowers" className="hover:text-[#4A7C59] transition-colors">1. 一人暮らしに花をおすすめする理由</a></li>
                  <li><a href="#how-to-choose" className="hover:text-[#4A7C59] transition-colors">2. 一人暮らし向け花サブスクの選び方</a></li>
                  <li><a href="#ranking-table" className="hover:text-[#4A7C59] transition-colors">3. 一人暮らし向け花サブスク3選 比較表</a></li>
                  <li><a href="#ranking-detail" className="hover:text-[#4A7C59] transition-colors">4. 各サービスの詳細レビュー</a></li>
                  <li><a href="#room-tips" className="hover:text-[#4A7C59] transition-colors">5. 一人暮らしの部屋で花を飾る方法</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. 一人暮らしの花サブスクに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Why Flowers for Solo Living ─── */}
        <section id="why-flowers" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らしに花をおすすめする理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              一人暮らしの部屋に花を飾ることには、次のような利点があります。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">部屋の雰囲気が変わる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  ワンルームや1Kの部屋でも、テーブルに花が一輪あるだけで空間の印象は大きく変わります。殺風景になりがちな一人暮らしの部屋に、自然の彩りを加えられます。インテリアに費用をかけなくても、数百円の花で部屋の印象を整えられる点は、費用対効果の高い方法といえます。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">リラックス効果・ストレス軽減</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花には視覚的なリラックス効果があるとされています。仕事や学校から帰宅した際、部屋に花があることで気持ちが和らぎます。一人暮らしでは会話の機会が少ない分、花の手入れが日々の楽しみや癒やしになっているという声も多く聞かれます。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">季節感を感じられる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花のサブスクでは、季節に合わせた旬の花が届きます。忙しい日々の中でも、季節の移り変わりを感じられます。春はチューリップ、夏はヒマワリ、秋はコスモス、冬はスイートピーなど、季節ごとの花を楽しめます。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">生活にリズムが生まれる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  定期的に花が届くことで、水替えや手入れといった習慣が生まれます。一人暮らしは生活が不規則になりがちですが、花の手入れが生活のリズムを整えるきっかけになります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らし向け花サブスクの選び方
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              一人暮らしの方が花のサブスクを選ぶ際に重視すべき点は、次の4つです。
            </p>

            <div className="space-y-5">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 1
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">ポスト投函で受け取れるかを確認する</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      一人暮らしで最も重要なのは受け取り方法です。仕事や外出で不在が多い場合は、ポスト投函に対応したサービスをおすすめします。宅配便の場合は再配達の手間がかかり、負担になるためです。当サイトで紹介する3サービスは、いずれもポスト投函に対応しています。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 2
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">送料込みの総額が予算内に収まるかを確認する</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      花代だけでなく、送料を含めた総額で比較することが大切です。一人暮らしの生活費の中で無理なく続けるには、月1,000〜2,000円程度が目安です。送料無料のサービスであれば、表示価格がそのまま支払額になるため、費用を把握しやすくなります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 3
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">回数の条件と解約の自由度を確認する</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      初めて花のサブスクを利用する場合は、回数の条件がないサービスのほうが安心です。イメージと異なった場合や、手入れの時間が取れない場合に、すぐ解約できるかどうかは重要な判断材料です。medeluには回数の条件がありません。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません。bloomeeには4回の最低受け取り回数があります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 4
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">スキップ機能の有無を確認する</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      一人暮らしでは、旅行や帰省で家を空ける機会もあります。その際に配送をスキップできる機能があると便利です。当サイトで紹介する3サービスはいずれもスキップに対応しており、不在時の不要な出費を抑えられます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Ranking Table ─── */}
        <section id="ranking-table" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らし向け花サブスク3選 比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              一人暮らしにおすすめの3サービスを、料金・配送方法・回数の条件などの観点で比較しています。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "640px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">順位</th>
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-right font-medium">花代</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-right font-medium">1回あたり総額</th>
                    <th className="px-4 py-3 text-center font-medium">届き方</th>
                    <th className="px-4 py-3 text-center font-medium">回数の条件</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          i === 0 ? "bg-[#F59E0B] text-white" :
                          i === 1 ? "bg-[#9CA3AF] text-white" :
                          "bg-[#B45309] text-white"
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
                      <td className="px-4 py-4 text-center text-[#666]">{item.delivery}</td>
                      <td className="px-4 py-4 text-center">
                        {item.minOrders === "なし" ? (
                          <span className="text-[#4A7C59] font-medium">なし</span>
                        ) : (
                          <span className="text-[#666]">{item.minOrders}</span>
                        )}
                      </td>
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
                <li>・ bloomeeは4回の最低受け取り回数があります</li>
                <li>・ 2026年10月17日時点の情報です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking-detail" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスの詳細レビュー
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              一人暮らしの視点から、3サービスそれぞれの特長と注意点を解説します。
            </p>

            <div className="space-y-8">
              {rankingData.map((item) => (
                <div key={item.rank} className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
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
                        {item.name}（{item.nameJa}）{item.plan}
                      </h3>
                      <p className="text-sm text-[#666]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Price Breakdown */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花代</p>
                        <p className="text-lg font-bold text-[#333]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
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
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                        <p className="text-lg font-bold text-[#4A7C59]">
                          {item.total ? (
                            <>{item.total.toLocaleString()}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">{item.price.toLocaleString()}円＋送料</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花の本数</p>
                        <p className="text-lg font-bold text-[#333]">{item.flowers}</p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">届き方</span>
                        <span className="text-[#333]">{item.delivery}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                        <span className="text-[#333]">{item.frequency}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">回数の条件</span>
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
                        {item.name}公式サイトはこちら
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Room Decoration Tips ─── */}
        <section id="room-tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らしの部屋で花を飾る方法
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ワンルームなどスペースが限られた部屋でも、花を飾ることは可能です。一人暮らしの部屋で花を飾る際のポイントをご紹介します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">おすすめの飾る場所</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ <span className="font-medium text-[#333]">テーブル・デスクの隅</span> - 食事中やリモートワーク中に目に入り、気分転換になる</li>
                  <li>・ <span className="font-medium text-[#333]">キッチンカウンター</span> - 料理中に花が目に入り、気分が明るくなる</li>
                  <li>・ <span className="font-medium text-[#333]">洗面台</span> - 朝の身支度の際に気分を切り替えられる</li>
                  <li>・ <span className="font-medium text-[#333]">窓際</span> - 自然光で花がきれいに見える（直射日光は避ける）</li>
                  <li>・ <span className="font-medium text-[#333]">玄関</span> - 帰宅時に最初に目に入り、出迎えられる印象になる</li>
                </ul>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">花瓶がなくても飾れます</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ <span className="font-medium text-[#333]">100円ショップのガラスコップ</span> - 3本程度であればコップで十分に飾れる</li>
                  <li>・ <span className="font-medium text-[#333]">ジャムやソースの空き瓶</span> - 洗って再利用でき、ナチュラルな雰囲気になる</li>
                  <li>・ <span className="font-medium text-[#333]">マグカップ</span> - 使わなくなったカップも花瓶の代わりになる</li>
                  <li>・ <span className="font-medium text-[#333]">ペットボトルを切ったもの</span> - 一時的な代用として使える</li>
                  <li>・ <span className="font-medium text-[#333]">100円ショップの一輪挿し</span> - 110円で購入でき、デザインの選択肢も多い</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6 mb-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">花を長持ちさせる基本のお手入れ</h3>
              <div className="space-y-3 text-sm text-[#666]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">1</span>
                  <p><span className="font-medium text-[#333]">水替えは2〜3日に1回</span> - 水が濁ると雑菌が繁殖し、花が傷みやすくなります。こまめな水替えが長持ちの基本です。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">2</span>
                  <p><span className="font-medium text-[#333]">茎を斜めにカット</span> - 水替えのたびに茎を1cmほど斜めに切ると、水の吸い上げが良くなります。キッチンバサミでも問題ありません。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">3</span>
                  <p><span className="font-medium text-[#333]">直射日光・エアコンの風を避ける</span> - 直射日光は花を傷め、エアコンの乾燥した風も花持ちを悪くします。間接光の当たる涼しい場所が最適です。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">4</span>
                  <p><span className="font-medium text-[#333]">付属の栄養剤を使う</span> - 花のサブスクには延命剤が同封されていることが多く、水に混ぜることで花持ちが大きく改善します。</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
              <h3 className="text-sm font-bold text-[#333] mb-2">一人暮らしの方へのご注意</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 長期不在の際は、花を処分してから外出してください（水が腐ると不衛生になるためです）</li>
                <li>・ 猫を飼っている場合、ユリ科の花は猫に有毒なため注意が必要です</li>
                <li>・ 夏場は水が傷みやすいため、こまめに水を替えてください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らしの花サブスクに関するよくある質問
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
                    <div className="px-5 py-4 bg-[#F8F8F8]">
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
              一人暮らしの方にはmedeluをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              当サイトで一人暮らし向けの花のサブスクを3つ比較した結果、総合的に最もおすすめのサービスはmedelu（メデル）です。
              748円から始められる価格、送料無料、ポスト投函による不在時の受け取り、回数の条件がなくいつでも解約できる点など、一人暮らしの方が求める条件をすべて満たしています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              知名度と安心感を重視する場合はbloomee（ブルーミー）、鮮度を重視する場合はhanameku（ハナメク）も選択肢になります。
              bloomeeはSNS上の情報が多く、初めての方も利用のイメージをつかみやすいサービスです。hanamekuは市場直送で鮮度が高く、セルフアレンジプランなら月1回から始められる点が特長です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一人暮らしの部屋に花を飾ることで、日々の暮らしに彩りが加わります。
              まずは月700〜1,400円程度の予算から、花のある生活を始めることをおすすめします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 medeluの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/hanameku"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 hanamekuの詳細を見る
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
              掲載情報は2026年10月17日時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。
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
