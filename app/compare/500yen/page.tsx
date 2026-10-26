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
    q: "本当に500円台でお花の定期便を始められますか？",
    a: "当サイトが公式サイトで確認した範囲（2026年10月16日）では、花代が500円台の定期便は見つかりませんでした。花代が最も安いのはタスハナ（+hana）の+actプランで660円ですが、送料330円が毎回かかるため1回990円です。送料込みの総額で最も安いのはmedeluのMiniコース748円（送料込み・ポスト投函）でした。",
  },
  {
    q: "安い花のサブスクでも品質保証はありますか？",
    a: "確認した3社には品質保証の定めがあります。medeluは到着当日中に写真を送り、枯れていると判断されれば送料を含めて全額返金（交換はなし）、hanamekuは到着日を含め3日以内に写真付きで申請（返金または代替品）、bloomeeは定期便で2週間以内の連絡が条件です（いずれも各社公式で確認）。",
  },
  {
    q: "送料込みの料金なのはどのサービスですか？",
    a: "medeluとhanamekuは送料込みの料金です。medeluは北海道・東北のLite以上のコースに遠隔地送料が加わります（Miniは対象外）。bloomeeは花代とは別に送料385円（お試し・グリーン）、タスハナは送料330円が毎回かかります。",
  },
  {
    q: "最安プランで何本くらいの花が届きますか？",
    a: "公式の表記では、medelu Miniが3〜4本、hanamekuライトプランが3〜4本、bloomeeお試しプランが4本以上（約18〜25cm）、タスハナ+actが花・葉物合わせて3品目・3本以上です。",
  },
  {
    q: "安い花のサブスクに回数の条件はありますか？",
    a: "サービスによって異なります。bloomeeは最初の4回の受け取りが必要で、4回未満で解約すると残り回数分の商品代金がかかります。タスハナは5回以上の出荷を前提とした定期便です。hanamekuは初回（定期1回目）の解約ができません。medeluは公式に最低利用回数の記載がありません。",
  },
  {
    q: "2回受け取るといくらかかりますか？",
    a: "送料込みの1回あたりの総額×2回で、medelu Mini 1,496円、タスハナ+act 1,980円、hanamekuライト 2,420円、bloomeeお試し 2,730円です。お届けの間隔（毎週・隔週など）の選択肢はサービスごとに異なるため、各公式サイトでご確認ください。",
  },
  {
    q: "ポストに届く安いプランはどれですか？",
    a: "medeluのMini・Lite、hanamekuのライトプラン、bloomeeのお試し・グリーンプラン、タスハナはポストに届きます。この中で送料込みの総額が最も安いのはmedelu Mini（748円）です。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "medelu",
    nameJa: "メデル",
    plan: "Miniコース",
    price: sv("medelu"),
    shippingLabel: "込み",
    total: sv("medelu"),
    flowers: "3〜4本",
    delivery: "ポスト投函",
    minOrders: "公式に記載なし",
    quality: "あり（当日中に写真・全額返金）",
    url: "/services/medelu/",
    highlight: "花代748円（送料込み）で、送料込みの総額は確認した中で最安です。公式に最低利用回数の記載はありません。",
    color: "#F59E0B",
  },
  {
    rank: 2,
    name: "タスハナ",
    nameJa: "+hana",
    plan: "+actプラン",
    price: 660,
    shippingLabel: "330円",
    total: 990,
    flowers: "3品目・3本以上",
    delivery: "ポスト投函",
    minOrders: "5回以上の出荷が前提",
    quality: "当サイト未確認",
    url: "/services/tasuhana/",
    highlight: "花代660円は確認した中で最安です。ただし送料330円が毎回かかるため、1回あたり990円となります。5回以上の出荷を前提とした定期便です（2026年8月6日のお届け分から新価格）。",
    color: "#9CA3AF",
  },
  {
    rank: 3,
    name: "hanameku",
    nameJa: "ハナメク",
    plan: "ライトプラン",
    price: sv("hanameku"),
    shippingLabel: "込み",
    total: sv("hanameku"),
    flowers: "3〜4本",
    delivery: "ポスト投函",
    minOrders: "初回は解約不可",
    quality: "あり（3日以内に写真・返金または代替品）",
    url: "/services/hanameku/",
    highlight: "1,210円（配送料込み）です。初回（定期1回目）は解約できない点にご注意ください。",
    color: "#B45309",
  },
  {
    rank: 4,
    name: "bloomee",
    nameJa: "ブルーミー",
    plan: "お試しプラン",
    price: sv("bloomee"),
    shippingLabel: "385円",
    total: sv("bloomee") + 385,
    flowers: "4本以上",
    delivery: "ポスト投函",
    minOrders: "4回",
    quality: "あり（定期便は2週間以内）",
    url: "/services/bloomee/",
    highlight: "花代980円＋送料385円で1回1,365円。最初の4回は受け取りが必要です。",
    color: "#6B7280",
  },
];

/* ─── Main Component ─── */
export default function FiveHundredYenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"花のサブスク最安プラン比較\",\"description\":\"花のサブスク最安プラン比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/medelu/\",\"name\":\"medelu（メデル）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/bloomee/\",\"name\":\"bloomee（ブルーミー）\"},{\"@type\":\"ListItem\",\"position\":3,\"url\":\"https://ohana-delivery.com/services/tasuhana/\",\"name\":\"+hana（タスハナ）\"},{\"@type\":\"ListItem\",\"position\":4,\"url\":\"https://ohana-delivery.com/services/hanameku/\",\"name\":\"hanameku（ハナメク）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"500円台の花のサブスク比較\",\"item\":\"https://ohana-delivery.com/compare/500yen/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"500円台の花のサブスク比較\",\"description\":\"花のサブスク各社の最安プランを、送料込みの総額で比較・解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-17T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/500yen/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
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
                  <span className="text-[#1F2420] font-medium">500円台で始められる花のサブスク</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/compare/500yen/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク価格比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              お花の定期便を500円台で始められるかを検証<br className="hidden md:block" />
                最安プランを送料込みで比較【2026年10月】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              まずは500円程度の安いプランで試したい方に向けて、当サイトでは
                4サービスの最安プランを公式サイトで確認し（2026年10月14〜16日）、送料込みの総額と回数の条件で比較しました。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">実質最安</p>
                <p className="text-xl font-bold text-[#2F5B43]">748円/回</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">花代最安</p>
                <p className="text-xl font-bold text-[#2F5B43]">660円/回</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#2F5B43]">4サービス</p>
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
                  <li><a href="#intro" className="hover:text-[#2F5B43] transition-colors">1. 500円台で始められるお花の定期便の有無</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#2F5B43] transition-colors">2. 最安プラン比較表（送料込み総額）</a></li>
                  <li><a href="#ranking" className="hover:text-[#2F5B43] transition-colors">3. 安い花のサブスクランキング</a></li>
                  <li><a href="#total-cost" className="hover:text-[#2F5B43] transition-colors">4. 送料込みの総額で比較する理由</a></li>
                  <li><a href="#caution" className="hover:text-[#2F5B43] transition-colors">5. 価格以外に確認すべき点</a></li>
                  <li><a href="#tips" className="hover:text-[#2F5B43] transition-colors">6. 1,000円前後で花のある暮らしを始める方法</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">7. よくある質問</a></li>
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
              500円台で始められるお花の定期便の有無
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              当サイトが公式サイトで確認した範囲（2026年10月16日）では、花代が500円台の定期便は見つかりませんでした。花代が最も安いのはタスハナ（+hana）の+actプランで1回660円（税込）です。ただし花代とは別に送料がかかるサービスもあるため、送料を含めた総額で比較することが大切です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              例えば、タスハナは花代660円に送料330円が毎回かかるため、1回あたりの総額は990円になります。一方、花代748円のmedelu Miniは送料込みなので、総額はそのまま748円です。花代だけでは、実際の支出を正確に把握できません。
              </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              当サイトでは、各サービスの最安プランを送料込みの総額で比較し、費用を抑えて利用できるサービスをご紹介します。1,000円前後で花のある暮らしを始めたい方はご参照ください。
            </p>

            <div className="bg-[#EDF1EC] rounded-md p-5 mt-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-2">本ページの要点</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>花代だけでなく送料込みの総額で比較することが重要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>送料込みで最安はmedelu Miniコース（748円/回）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>花代のみではタスハナ+act（660円/回）が最安。ただし送料330円を加えた総額は990円で、5回以上の出荷が前提</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>確認した範囲では、花代500円台の定期便はなし</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              最安プラン比較表（送料込み総額で比較）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              各サービスの最安プランを、花代・送料・1回あたりの総額で比較しました。総額の安い順に掲載しています。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-3 py-3 text-left font-medium">順位</th>
                    <th className="px-3 py-3 text-left font-medium">サービス</th>
                    <th className="px-3 py-3 text-center font-medium">花代</th>
                    <th className="px-3 py-3 text-center font-medium">送料</th>
                    <th className="px-3 py-3 text-center font-medium">総額/回</th>
                    <th className="px-3 py-3 text-center font-medium">花の本数</th>
                    <th className="px-3 py-3 text-center font-medium">回数の条件</th>
                  </tr>
                </thead>
                <tbody className="text-[#4A4F49]">
                  <tr className="border-b border-[#DEDAD2] bg-[#FFFBEB]">
                    <td className="px-3 py-3 font-bold text-[#F59E0B]">1位</td>
                    <td className="px-3 py-3 font-bold text-[#1F2420]">medelu Miniコース</td>
                    <td className="px-3 py-3 text-center">748円</td>
                    <td className="px-3 py-3 text-center">込み</td>
                    <td className="px-3 py-3 text-center font-bold">748円</td>
                    <td className="px-3 py-3 text-center">3〜4本</td>
                    <td className="px-3 py-3 text-center">公式に記載なし</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2]">
                    <td className="px-3 py-3 font-bold text-[#9CA3AF]">2位</td>
                    <td className="px-3 py-3 font-bold text-[#1F2420]">タスハナ +actプラン</td>
                    <td className="px-3 py-3 text-center">660円</td>
                    <td className="px-3 py-3 text-center">330円</td>
                    <td className="px-3 py-3 text-center font-bold">990円</td>
                    <td className="px-3 py-3 text-center">3品目・3本以上</td>
                    <td className="px-3 py-3 text-center">5回以上が前提</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2] bg-[#F6F4EF]">
                    <td className="px-3 py-3 font-bold text-[#B45309]">3位</td>
                    <td className="px-3 py-3 font-bold text-[#1F2420]">hanameku ライトプラン</td>
                    <td className="px-3 py-3 text-center">1,210円</td>
                    <td className="px-3 py-3 text-center">込み</td>
                    <td className="px-3 py-3 text-center font-bold">1,210円</td>
                    <td className="px-3 py-3 text-center">3〜4本</td>
                    <td className="px-3 py-3 text-center">初回は解約不可</td>
                  </tr>
                  <tr className="">
                    <td className="px-3 py-3 font-bold text-[#6B7280]">4位</td>
                    <td className="px-3 py-3 font-bold text-[#1F2420]">bloomee お試しプラン</td>
                    <td className="px-3 py-3 text-center">980円</td>
                    <td className="px-3 py-3 text-center">385円</td>
                    <td className="px-3 py-3 text-center font-bold">1,365円</td>
                    <td className="px-3 py-3 text-center">4本以上</td>
                    <td className="px-3 py-3 text-center">4回</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#6B6F6A] mt-3">
              ※ 価格はすべて税込。medelu・hanameku・bloomeeは2026年10月14日、タスハナは10月16日に各公式サイトで確認。medeluは北海道・東北のLite以上に遠隔地送料が加わります（Miniは対象外）。
            </p>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              安い花のサブスクランキング（詳細）
            </h2>

            <div className="space-y-6">
              {rankingData.map((item) => (
                <div
                  key={item.rank}
                  className={`bg-white rounded-md overflow-hidden ${item.rank === 1 ? "border-2 border-[#2F5B43]" : "border border-[#DEDAD2]"}`}
                >
                  {item.rank === 1 && (
                    <div className="bg-[#2F5B43] text-white text-xs text-center py-1.5 font-bold">
                      送料込みの総額が最安
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white text-sm font-bold shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.rank}位
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#1F2420] mb-1">
                          {item.name}（{item.nameJa}）{item.plan}
                        </h3>
                        <p className="text-sm text-[#4A4F49] leading-relaxed">{item.highlight}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-[#F6F4EF] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#6B6F6A] mb-1">花代</p>
                        <p className="text-sm font-bold text-[#1F2420]">{item.price}円</p>
                      </div>
                      <div className="bg-[#F6F4EF] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                        <p className="text-sm font-bold text-[#1F2420]">{item.shippingLabel}</p>
                      </div>
                      <div className="bg-[#EDF1EC] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#2F5B43] mb-1">総額/回</p>
                        <p className="text-sm font-bold text-[#2F5B43]">
                          {`${item.total.toLocaleString()}円`}
                        </p>
                      </div>
                      <div className="bg-[#F6F4EF] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#6B6F6A] mb-1">花の本数</p>
                        <p className="text-sm font-bold text-[#1F2420]">{item.flowers}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 text-xs">
                      <span className="bg-[#F6F4EF] text-[#4A4F49] px-3 py-1 rounded-md">配送: {item.delivery}</span>
                                            <span className="bg-[#F6F4EF] text-[#4A4F49] px-3 py-1 rounded-md">回数の条件: {item.minOrders}</span>
                      <span className="bg-[#F6F4EF] text-[#4A4F49] px-3 py-1 rounded-md">品質保証: {item.quality}</span>
                    </div>

                    {item.url && (
                      <a
                        href={item.url}
                        className="inline-block text-sm text-[#2F5B43] font-medium hover:underline"
                      >
                        {item.name}の詳細レビューを見る →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Total Cost Importance ─── */}
        <section id="total-cost" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              送料込みの総額で比較する理由
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              花のサブスクを比較する際は、花代だけで価格を判断しがちです。しかし、実際の支出は花代と送料を合わせた総額で決まり、その差は小さくありません。
            </p>

            <div className="bg-white rounded-md p-5 border border-[#DEDAD2] mb-6">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">具体例による比較</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#DEDAD2]">
                  <span className="text-[#4A4F49]">タスハナ: 花代660円 + 送料330円</span>
                  <span className="font-bold text-[#1F2420]">= 990円/回</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#DEDAD2]">
                  <span className="text-[#4A4F49]">medelu Mini: 748円（送料込み）</span>
                  <span className="font-bold text-[#2F5B43]">= 748円/回</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#4A4F49]">bloomee: 花代980円 + 送料385円</span>
                  <span className="font-bold text-[#1F2420]">= 1,365円/回</span>
                </div>
              </div>
              <p className="text-sm text-[#4A4F49] mt-4 leading-relaxed">
                花代だけを見るとタスハナ（660円）が最安ですが、送料を加えた総額ではmedelu（748円）が最も安くなります。実際の支出は、送料を含めて考える必要があります。
              </p>
            </div>

            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              受け取る回数が増えるほど差は広がります。2回受け取ると、medelu Miniは1,496円、bloomeeお試しは2,730円で、差は1,234円です。
            </p>
          </div>
        </section>

        {/* ─── Caution ─── */}
        <section id="caution" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              価格以外に確認すべき3つの点
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              価格は重要な判断基準ですが、価格だけで選ぶと期待と異なる場合があります。申し込み前に、以下の3点もご確認ください。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "最安プランは花の本数が少ない",
                  text: "最安クラスのプランは、公式の表記で3〜4本程度です。一輪挿しや小さな花瓶には十分ですが、ボリュームが足りないと感じる方も少なくありません。見栄えを重視する場合は、上位のプランもご検討ください。1本あたりの単価では、上位プランのほうが割安な場合もあります。",
                },
                {
                  num: "2",
                  title: "回数の条件により、すぐには解約できない",
                  text: "bloomeeは最初の4回の受け取りが必要で、お試しプランでも最低1,365円×4回＝5,460円かかります。タスハナは5回以上の出荷が前提（最低990円×5回＝4,950円）、hanamekuは初回の解約ができません。1回試して判断したい場合は、申し込む前に各社の解約条件をご確認ください。medeluは公式に最低利用回数の記載がありません。",
                },
                {
                  num: "3",
                  title: "花の品質やアレンジが期待と異なる場合がある",
                  text: "最安クラスのプランは、花の種類や色を選べないおまかせが基本です（タスハナは公式FAQで「選べない」と明記）。インテリアに合わせて色を選びたい方は、多少価格が上がってもHitoHanaのような色が選べるサービスをご検討ください。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F7F1EC] rounded-md p-5 border border-[#D9BFB1]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#D9BFB1] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      {item.num}
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

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              1,000円前後で花のある暮らしを始める3つの方法
            </h2>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "お届けの間隔を空けて始める",
                  text: "お届けの間隔が短いほど、月あたりの支出は増えます。最初は間隔を空けて始め、慣れてから頻度を増やす方法をおすすめします。選べる間隔はサービスごとに異なるため、申し込み画面でご確認ください。",
                },
                {
                  num: "2",
                  title: "切り花延命剤で花を長持ちさせる",
                  text: "届いた花を少しでも長く楽しむために、切り花延命剤の活用をおすすめします。ダイソー公式ネットストアでは「切り花長持ち液」（成分：水・糖類・抗菌剤・金属イオン）を550円（税込）で販売しています（2026年10月26日公式確認）。花が長持ちすれば、お届けの間隔を空けても花のある状態を保ちやすくなります。",
                },
                {
                  num: "3",
                  title: "解約条件を確かめてから申し込む",
                  text: "初めて利用する方は、最低受け取り回数と解約の締め切りを事前にご確認ください。bloomeeは4回、タスハナは5回以上が前提、hanamekuは初回の解約不可です。medeluは公式に最低利用回数の記載がなく、送料込み748円から始められます。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      {item.num}
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

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              安い花のサブスクに関するよくある質問
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
              送料込みの最安はmedelu、花代の最安はタスハナです
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花代500円台の定期便は、確認した範囲では見つかりませんでした。送料込みの総額で最も安いのは<strong>medelu Miniコース（748円/回・送料込み）</strong>です。公式に最低利用回数の記載がなく、ポストで受け取れます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花代だけで見ると<strong>タスハナ+act（660円/回）</strong>が最安ですが、送料330円を加えると990円/回で、5回以上の出荷が前提です。初回のみ受け取って試したい場合は、初回の解約ができない<strong>hanameku（1,210円/回）</strong>より、medeluのほうが条件は緩やかです。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              価格だけでなく、花の本数・品質・回数の条件の有無・配送方法などを総合的に判断することが大切です。初めての方には、回数の条件が少ないサービスから試す方法をおすすめします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                1位 medeluの詳細を見る
              </a>
              <a
                href="/services/hanameku"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                3位 hanamekuの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                4位 bloomeeの詳細を見る
              </a>
              <p className="mt-2 text-xs"><a href="/services/bloomee/" className="text-[#2F5B43] underline">ブルーミーの値段・料金プランと口コミの詳細 →</a></p>
            </div>
            <a
              href="/compare/cheap"
              className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
            >
              安い花のサブスク総合ランキングも見る
            </a>
            <a
              href="/compare/campaign/"
              className="inline-block mt-4 ml-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
            >
              初回特典・お試しプランの比較も見る
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
              掲載情報は2026年10月14〜16日に各公式サイトで確認したものです。ご利用前に、公式サイトにて最新情報をご確認ください。
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
