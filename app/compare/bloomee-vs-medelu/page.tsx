"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomeeとmedeluはどちらが安いですか？",
    a: "送料込みの実質負担額で比較すると、medeluのほうが安くなります。medeluのMiniコースは748円（送料込み）、bloomeeのお試しプランは980円＋送料385円＝1,365円です（2026年10月23日公式確認）。同じポスト投函の最安プランでも、1回あたり617円の差があります。",
  },
  {
    q: "bloomeeとmedeluの花の品質に違いはありますか？",
    a: "花の品質を比べた公的なデータはないため、当サイトではどちらの品質が高いかは示していません。bloomeeは市場で仕入れた花を束ねて届ける（2026年10月23日公式確認）、medeluは生産者と市場から直接仕入れた花を届ける（2026年10月21日公式確認）と案内しています。品質保証は、bloomeeが定期便なら2週間以内の連絡で返金・交換（特商法）、medeluは到着当日中に写真を送れば送料込みで全額返金（交換なし）です（2026年10月14日 公式確認）。",
  },
  {
    q: "bloomeeの最低4回の受け取り条件とは何ですか？",
    a: "bloomeeでは初回申し込み時に最低4回の受け取りが条件となっています。4回受け取る前に解約すると、「お試し途中解約料」として残りの回数分の商品代金（税込）がかかります（2026年10月30日公式確認）。お試しプランの場合、最低でも1,365円×4回＝5,460円の利用が必要です。medeluにはこのような回数の条件はなく、いつでも解約できます。",
  },
  {
    q: "medeluに回数の条件はありますか？",
    a: "medeluの公式サイトに最低利用回数の記載はなく、特商法表記では販売価格以外の費用はかからないとしています。決済日の前日（木曜日）までにマイページで解約手続きをすれば、次回以降の支払いは発生しません（2026年10月30日公式確認）。",
  },
  {
    q: "配送エリアに違いはありますか？",
    a: "bloomeeは本州・北海道・四国・九州・沖縄に配送し、離島は対象外です。北海道は冬季、沖縄は夏季に配送を停止する期間があります。medeluは沖縄県と一部離島を除く全国に配送します（いずれも2026年10月30日公式確認）。沖縄県への配送の可否が異なります。",
  },
  {
    q: "プレゼントとして贈るならどちらがおすすめですか？",
    a: "bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、相手の住所に届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。medeluは、定期便の送り主名を設定して贈り先に届けることができ、ギフトラッピングとメッセージカードには対応していません（2026年10月30日公式確認）。",
  },
  {
    q: "途中でプラン変更はできますか？",
    a: "どちらもマイページからプラン変更が可能です。bloomeeはお試し・グリーン・ベーシックの各プラン間で変更でき、プラン変更は2回目のお届けから、隔週への変更は4回受け取った後から可能です。medeluはMini・Lite・Lite+・Basicの間の変更を2回目以降のお届けから受け付けており（決済日前日の木曜日まで）、配送頻度は毎週・隔週から選べます（2026年10月30日公式確認）。",
  },
  {
    q: "bloomeeとmedelu、両方試してから決めることはできますか？",
    a: "可能です。ただし、bloomeeには最低4回の受け取り条件があるため、試しに利用する場合でも最低4回分の料金が発生します。回数の条件がないmedeluを先に利用し、その後bloomeeを検討すると、費用面の負担を抑えられます。medeluは最低利用回数の記載がなく、決済日前日の木曜日までに解約手続きをすれば次回以降の支払いは発生しません（2026年10月30日公式確認）。",
  },
];

/* ─── Main Component ─── */
export default function BloomeeVsMedeluPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"bloomee vs medelu 比較\",\"description\":\"bloomee vs medelu 比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/bloomee/\",\"name\":\"bloomee（ブルーミー）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/medelu/\",\"name\":\"medelu（メデル）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"bloomee vs medelu 比較\",\"item\":\"https://ohana-delivery.com/compare/bloomee-vs-medelu/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"bloomee vs medelu 比較\",\"description\":\"bloomeeとmedeluの料金・評判・選び方を比較し、解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-30T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/bloomee-vs-medelu/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"bloomeeとmedeluはどちらが安いですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"送料込みの実質負担額で比較すると、medeluのほうが安くなります。medeluのMiniコースは748円（送料込み）、bloomeeのお試しプランは980円＋送料385円＝1,365円です（2026年10月23日公式確認）。同じポスト投函の最安プランでも、1回あたり617円の差があります。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeとmedeluの花の品質に違いはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花の品質を比べた公的なデータはないため、当サイトではどちらの品質が高いかは示していません。bloomeeは市場で仕入れた花を束ねて届ける（2026年10月23日公式確認）、medeluは生産者と市場から直接仕入れた花を届ける（2026年10月21日公式確認）と案内しています。品質保証は、bloomeeが定期便なら2週間以内の連絡で返金・交換（特商法）、medeluは到着当日中に写真を送れば送料込みで全額返金（交換なし）です（2026年10月14日 公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeの最低4回の受け取り条件とは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeでは初回申し込み時に最低4回の受け取りが条件となっています。4回受け取る前に解約すると、「お試し途中解約料」として残りの回数分の商品代金（税込）がかかります（2026年10月30日公式確認）。お試しプランの場合、最低でも1,365円×4回＝5,460円の利用が必要です。medeluにはこのような回数の条件はなく、いつでも解約できます。\"}},{\"@type\":\"Question\",\"name\":\"medeluに回数の条件はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"medeluの公式サイトに最低利用回数の記載はなく、特商法表記では販売価格以外の費用はかからないとしています。決済日の前日（木曜日）までにマイページで解約手続きをすれば、次回以降の支払いは発生しません（2026年10月30日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"配送エリアに違いはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeは本州・北海道・四国・九州・沖縄に配送し、離島は対象外です。北海道は冬季、沖縄は夏季に配送を停止する期間があります。medeluは沖縄県と一部離島を除く全国に配送します（いずれも2026年10月30日公式確認）。沖縄県への配送の可否が異なります。\"}},{\"@type\":\"Question\",\"name\":\"プレゼントとして贈るならどちらがおすすめですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、相手の住所に届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。medeluは、定期便の送り主名を設定して贈り先に届けることができ、ギフトラッピングとメッセージカードには対応していません（2026年10月30日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"途中でプラン変更はできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"どちらもマイページからプラン変更が可能です。bloomeeはお試し・グリーン・ベーシックの各プラン間で変更でき、プラン変更は2回目のお届けから、隔週への変更は4回受け取った後から可能です。medeluはMini・Lite・Lite+・Basicの間の変更を2回目以降のお届けから受け付けており（決済日前日の木曜日まで）、配送頻度は毎週・隔週から選べます（2026年10月30日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeとmedelu、両方試してから決めることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"可能です。ただし、bloomeeには最低4回の受け取り条件があるため、試しに利用する場合でも最低4回分の料金が発生します。回数の条件がないmedeluを先に利用し、その後bloomeeを検討すると、費用面の負担を抑えられます。medeluは最低利用回数の記載がなく、決済日前日の木曜日までに解約手続きをすれば次回以降の支払いは発生しません（2026年10月30日公式確認）。\"}}]}" }} />
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
                  <span className="text-[#1F2420] font-medium">bloomee vs medelu</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/compare/bloomee-vs-medelu/" services={[{ slug: "bloomee", name: "bloomee（ブルーミー）" }, { slug: "medelu", name: "medelu（メデル）" }]}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              bloomee vs medelu<br className="hidden md:block" />
              8つの違いを比較【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、花のサブスク「bloomee（ブルーミー）」と「medelu（メデル）」を、
              料金・花の本数・解約条件など8つの項目で比較し、利用目的に応じた選び方をご説明します。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <div className="bg-white rounded-md px-6 py-4 border border-[#DEDAD2] flex-1 max-w-xs mx-auto md:mx-0">
                <p className="text-xs text-[#6B6F6A] mb-1">bloomee</p>
                <p className="text-lg font-bold text-[#2F5B43] mb-1">980円/回 + 送料385円</p>
                <p className="text-xs text-[#4A4F49]">花4本以上 / 最低4回の受け取り条件あり</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-[#6B6F6A]">VS</span>
              </div>
              <div className="bg-white rounded-md px-6 py-4 border border-[#DEDAD2] flex-1 max-w-xs mx-auto md:mx-0">
                <p className="text-xs text-[#6B6F6A] mb-1">medelu</p>
                <p className="text-lg font-bold text-[#2F5B43] mb-1">748円/回 送料無料</p>
                <p className="text-xs text-[#4A4F49]">花3〜4本 / 回数の条件なし</p>
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
                  <li><a href="#conclusion" className="hover:text-[#2F5B43] transition-colors">1. 利用目的に応じたbloomeeとmedeluの選び分け</a></li>
                  <li><a href="#price" className="hover:text-[#2F5B43] transition-colors">2. 料金比較</a></li>
                  <li><a href="#volume" className="hover:text-[#2F5B43] transition-colors">3. 花の本数・ボリューム</a></li>
                  <li><a href="#delivery" className="hover:text-[#2F5B43] transition-colors">4. 配送方法</a></li>
                  <li><a href="#frequency" className="hover:text-[#2F5B43] transition-colors">5. 配送頻度の選択肢</a></li>
                  <li><a href="#cancel" className="hover:text-[#2F5B43] transition-colors">6. 解約のしやすさ</a></li>
                  <li><a href="#freshness" className="hover:text-[#2F5B43] transition-colors">7. 花の鮮度</a></li>
                  <li><a href="#app" className="hover:text-[#2F5B43] transition-colors">8. マイページでの手続き</a></li>
                  <li><a href="#brand" className="hover:text-[#2F5B43] transition-colors">9. 公式サイトに記載の実績</a></li>
                  <li><a href="#table" className="hover:text-[#2F5B43] transition-colors">10. 比較一覧表</a></li>
                  <li><a href="#scenario" className="hover:text-[#2F5B43] transition-colors">11. 利用シーン別のおすすめ</a></li>
                  <li><a href="#pros-cons" className="hover:text-[#2F5B43] transition-colors">12. 両サービスのメリット・デメリット</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">13. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">14. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Quick Conclusion ─── */}
        <section id="conclusion" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              利用目的に応じてbloomeeとmedeluを選び分けられます
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              費用と手軽さを重視する場合はmedelu、同封のガイドブック・栄養剤や「プレゼントとして送る」での申し込みを重視する場合はbloomeeをおすすめします。
              それぞれに向いている方の特徴は以下のとおりです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* bloomeeがおすすめ */}
              <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6 border border-[#E3D3C8]">
                <h3 className="text-base font-bold text-[#1F2420] mb-4 pb-2 border-b border-[#E3D3C8]">
                  bloomeeが向いている方
                </h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>ポスト投函で花代980円から始めたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>グリーン中心のプランも選びたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>同封のガイドブックで飾り方を知りたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>ギフトとしてお花の定期便を贈りたい</span>
                  </li>
                </ul>
              </div>

              {/* medeluがおすすめ */}
              <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6 border border-[#C8DCC8]">
                <h3 className="text-base font-bold text-[#1F2420] mb-4 pb-2 border-b border-[#C8DCC8]">
                  medeluが向いている方
                </h3>
                <ul className="text-sm text-[#4A4F49] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>送料込みの実質負担をできるだけ抑えたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>回数の条件なしで始めたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>シンプルな料金体系を希望する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F5B43] mt-0.5 shrink-0 font-bold">--</span>
                    <span>まずは1回試してから続けるか決めたい</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 1. Price Comparison ─── */}
        <section id="price" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較1：料金（送料込みの実質負担）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              料金は、表示価格だけでなく送料を含めた1回あたりの実質負担額で比較することが重要です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* bloomee料金 */}
              <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                <div className="bg-[#F6F4EF] px-5 py-3 text-center">
                  <h3 className="text-base font-bold text-[#1F2420]">bloomee</h3>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="border-b border-[#DEDAD2] pb-3">
                    <p className="text-xs text-[#6B6F6A] mb-1">お試しプラン</p>
                    <p className="text-sm text-[#4A4F49]">980円 + 送料385円 = <span className="font-bold text-[#1F2420]">1,365円/回</span></p>
                  </div>
                  <div className="border-b border-[#DEDAD2] pb-3">
                    <p className="text-xs text-[#6B6F6A] mb-1">ベーシックプラン</p>
                    <p className="text-sm text-[#4A4F49]">2,180円 + 送料550円 = <span className="font-bold text-[#1F2420]">2,730円/回</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B6F6A] mb-1">グリーンプラン</p>
                    <p className="text-sm text-[#4A4F49]">980円 + 送料385円 = <span className="font-bold text-[#1F2420]">1,365円/回</span></p>
                  </div>
                </div>
              </div>

              {/* medelu料金 */}
              <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                <div className="bg-[#EDF1EC] px-5 py-3 text-center">
                  <h3 className="text-base font-bold text-[#1F2420]">medelu</h3>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="border-b border-[#DEDAD2] pb-3">
                    <p className="text-xs text-[#6B6F6A] mb-1">Miniコース</p>
                    <p className="text-sm text-[#4A4F49]">748円 送料無料 = <span className="font-bold text-[#1F2420]">748円/回</span></p>
                  </div>
                  <div className="border-b border-[#DEDAD2] pb-3">
                    <p className="text-xs text-[#6B6F6A] mb-1">Liteコース</p>
                    <p className="text-sm text-[#4A4F49]">1,330円 送料無料 = <span className="font-bold text-[#1F2420]">1,330円/回</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B6F6A] mb-1">Basicコース</p>
                    <p className="text-sm text-[#4A4F49]">2,330円 送料無料 = <span className="font-bold text-[#1F2420]">2,330円/回</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF1EC] rounded-md p-5">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-2">料金比較のポイント</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                最安プラン同士で比較すると、medeluのMiniコース（748円・送料込み）はbloomeeのお試しプラン（送料込み1,365円）より617円安くなります（2026年10月23日公式確認）。
                medeluは送料込みの価格のため（北海道・東北へのLite以上は遠隔地送料140〜240円が加算（2026年10月17日公式確認））、表示価格がそのまま実質負担額になるシンプルな料金体系です。
                bloomeeは花代とは別に送料385〜550円がかかるため、総額で考える必要があります。
                隔週配送の場合（bloomeeの隔週は4回受け取った後から）、月額の差はbloomeeお試しプラン（月2,730円）とmedelu Miniコース（月1,496円）で約1,234円になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 2. Volume Comparison ─── */}
        <section id="volume" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較2：花の本数・ボリューム
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F6F4EF] rounded-md p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>お試しプラン：4本以上（約18〜25cm）</li>
                  <li>グリーンプラン：グリーン中心</li>
                  <li>ベーシックプラン：8本以上（約25〜30cm）</li>
                </ul>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>Miniコース：3〜4本</li>
                  <li>Liteコース：5〜6本／Lite+コース：5〜7本（コース一覧。公式ヘルプ記事「何本くらいお花が届きますか？」は6〜7本（2026年10月26日公式確認））</li>
                  <li>Basicコース：6〜9本</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              最安プラン同士では、medelu Mini（3〜4本）とbloomeeお試し（4本以上）で本数に大きな差はありません。
              中間プランでは、medeluのLiteコース（5〜6本/1,330円・送料込み）がbloomeeのベーシックプラン（8本以上/2,730円・送料込み）より1回あたり約1,400円安く、本数はbloomeeのベーシックが多くなっています。
              1本あたりの価格は、medelu Mini（748円・3〜4本）で約187〜249円、bloomeeお試し（送料込み1,365円・4本以上）で最大約341円です。
            </p>
          </div>
        </section>

        {/* ─── 3. Delivery Method ─── */}
        <section id="delivery" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較3：配送方法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>お試し・グリーン：ポスト投函</li>
                  <li>ベーシックプラン：宅配便</li>
                  <li>配送会社は提携配送会社（指定不可・変更の場合あり）</li>
                  <li>投函ラインを設けたパッケージで半投函（2026年10月30日公式確認）</li>
                </ul>
              </div>
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>Mini・Lite：ポスト投函</li>
                  <li>Lite+・Basic：宅配便</li>
                  <li>Miniは日本郵便のゆうパケット（北海道・東北・関西・中国・四国はヤマト運輸）</li>
                  <li>ポスト投函は保水容器に水を入れて届く（2026年10月30日公式確認）</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              配送方法はどちらもほぼ同じ仕組みです。低価格プランはポスト投函、上位プランは宅配便（手渡し）になります。
              ポスト投函は不在時でも受け取れるため、一人暮らしの方や日中不在の方にとって便利です。
            </p>
          </div>
        </section>

        {/* ─── 4. Delivery Frequency ─── */}
        <section id="frequency" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較4：配送頻度の選択肢
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F6F4EF] rounded-md p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>最初の4回は毎週、その後は毎週 / 隔週から選択</li>
                  <li>隔週への変更は4回受け取った後にマイページから</li>
                  <li>スキップ機能あり（スキップした週は料金なし）</li>
                </ul>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>毎週 / 隔週から選択</li>
                  <li>コース・ボリュームの変更はマイページから（2回目以降）</li>
                  <li>スキップ機能あり（3回先まで）</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              どちらも毎週または隔週から選べますが、bloomeeは最初の4回が毎週のお届けです（2026年10月30日公式確認）。
              旅行や出張で受け取れない週は、どちらもマイページのスキップ機能で配送を休止できます。
              bloomeeはスキップした週の料金がかからないと案内しています。medeluのスキップは3回先まで設定できます。
            </p>
          </div>
        </section>

        {/* ─── 5. Cancellation ─── */}
        <section id="cancel" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較5：解約のしやすさ
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              解約のしやすさは、両サービスで大きく異なるポイントです。特に、まず試してみたい方にとって重要な比較基準です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F7F1EC] rounded-md p-5 border border-[#E3D3C8]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm font-bold text-[#D9BFB1]">4回の最低受け取り回数あり</p>
                </div>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>4回未満の解約はお試し途中解約料（残りの回数分の商品代金・税込）が発生</li>
                  <li>マイページから解約手続き可能</li>
                </ul>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C8DCC8]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm font-bold text-[#2F5B43]">回数の条件なし・いつでも解約可能</p>
                </div>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>決済日前日の木曜日までの手続きで次回以降の支払いなし</li>
                  <li>マイページから解約可能</li>
                  <li>違約金・手数料なし</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
              <h3 className="text-sm font-bold text-[#1F2420] mb-2">解約のしやすさの評価</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                解約のしやすさではmedeluが有利です。medeluは回数の条件も違約金もなく、いつでもマイページから解約できます。
                bloomeeは4回の最低受け取りが条件で、お試しプランの場合は最低でも5,460円（1,365円×4回）の利用が確定します。
                まず1回試してから判断したい方には、金銭的な負担が少ないmedeluをおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 6. Freshness ─── */}
        <section id="freshness" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較6：花の鮮度
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>市場で仕入れた花を束ねて届けると案内（2026年10月20日公式確認）</li>
                  <li>定期便は2週間以内の連絡で返金・交換（特商法）</li>
                </ul>
              </div>
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>生産者と市場から直接仕入れた花を届けると案内（2026年10月21日公式確認）</li>
                  <li>品質保証制度あり</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              bloomeeは、市場で仕入れた花を束ねて届けると案内しています（2026年10月20日公式確認）。
              なお品質保証は、bloomeeが定期便なら2週間以内の連絡で返金・交換、medeluは到着当日中の写真送付で全額返金（交換なし）と条件が異なります。
            </p>
          </div>
        </section>

        {/* ─── 7. App & Services ─── */}
        <section id="app" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較7：マイページでの手続きと同封物
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F6F4EF] rounded-md p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>マイページで特定の週のスキップが可能</li>
                  <li>4回目の受け取り後は、マイページで隔週に変更可能</li>
                  <li>プランの変更・切り替えもマイページから</li>
                  <li>お花のガイドブックが付き、栄養剤が毎回同封される</li>
                  <li>お届け先の入力画面で「プレゼントとして送る」を選べる</li>
                </ul>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>Webのマイページで管理</li>
                  <li>マイページでプラン変更・スキップが可能</li>
                  <li>届いた花の名前は箱のシール・QRコード（Miniを除く）やマイページで確認</li>
                                  </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              どちらも、スキップやプランの変更はWebのマイページで行います。bloomeeは、4回目の受け取り後に隔週への変更ができ、お花のガイドブックが付き、栄養剤が毎回同封されます（2026年10月21日公式確認）。
              また、お届け先の入力画面で「プレゼントとして送る」を選べるため、プレゼントにも利用できます。
              bloomeeのアプリは2021年12月10日に停止しており、手続きはマイページで行います（2026年10月30日公式確認）。
            </p>
          </div>
        </section>

        {/* ─── 8. Brand ─── */}
        <section id="brand" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              比較8：公式サイトに記載の実績
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">bloomee</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>「お花のお届け実績3,000万本以上（自社調べ）」と表記（2026年10月23日公式確認）</li>
                </ul>
              </div>
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">medelu</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li>ANYROOMコースを「人気No.1のコース」と表記（2026年10月23日公式確認）</li>
                  <li>累計の実績は公式サイトでご確認ください</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed">
              知名度や利用者数を比べた公的なデータはないため、当サイトでは両者の認知度を比較していません。
              公式サイトに記載されている実績は上記のとおりです。いずれも各社の表記で、第三者による調査ではありません。
            </p>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="table" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              bloomee vs medelu 比較一覧表
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              ここまでの比較内容を一覧表にまとめました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">比較項目</th>
                    <th className="px-4 py-3 text-center font-medium">bloomee</th>
                    <th className="px-4 py-3 text-center font-medium">medelu</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "最安プラン（税込）", bloomee: "980円/回", medelu: "748円/回" },
                    { label: "送料", bloomee: "385〜550円", medelu: "無料（北海道・東北のLite以上は遠隔地送料）" },
                    { label: "実質最安（送料込み）", bloomee: "1,365円/回", medelu: "748円/回" },
                    { label: "花の本数（最安）", bloomee: "4本以上", medelu: "3〜4本" },
                    { label: "プラン数", bloomee: "3プラン", medelu: "3コース" },
                    { label: "配送方法", bloomee: "ポスト投函 / 宅配便", medelu: "ポスト投函 / 宅配便" },
                    { label: "配送頻度", bloomee: "毎週 / 隔週", medelu: "毎週 / 隔週" },
                    { label: "回数の条件", bloomee: "4回", medelu: "なし" },
                    { label: "解約時の違約金", bloomee: "お試し途中解約料（残りの回数分の商品代金）", medelu: "なし" },
                    { label: "品質保証", bloomee: "あり（定期便は2週間以内の連絡で返金・交換）", medelu: "あり" },
                    { label: "ギフト対応", bloomee: "「プレゼントとして送る」で申し込み", medelu: "送り主名を設定して贈り先へ（ラッピング・メッセージカードなし）" },
                    { label: "スキップ機能", bloomee: "あり（その週の料金なし）", medelu: "あり（3回先まで）" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F6F4EF]"}>
                      <td className="px-4 py-3 font-medium text-[#1F2420] border-b border-[#DEDAD2]">{row.label}</td>
                      <td className="px-4 py-3 text-center text-[#4A4F49] border-b border-[#DEDAD2]">{row.bloomee}</td>
                      <td className="px-4 py-3 text-center text-[#4A4F49] border-b border-[#DEDAD2]">{row.medelu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Scenario Recommendations ─── */}
        <section id="scenario" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              利用シーン別のおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              当サイトでは、利用シーンごとにbloomeeとmedeluのどちらが適しているかをご説明します。
            </p>
            <div className="space-y-5">
              {[
                {
                  scenario: "一人暮らしの場合",
                  recommend: "medelu",
                  reason: "一人暮らしで花のサブスクを始める場合は、medeluをおすすめします。送料無料で748円から始められるため月々の負担が少なく、回数の条件がないため、生活に合わない場合はすぐに解約できます。ポスト投函で受け取れるため、不在が多い一人暮らしの方にも適しています。",
                },
                {
                  scenario: "プレゼントとして贈る場合",
                  recommend: "bloomee",
                  reason: "bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、相手の住所に届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。medeluは、定期便の送り主名を設定して贈り先に届けることができ、ギフトラッピングとメッセージカードには対応していません（2026年10月30日公式確認）。",
                },
                {
                  scenario: "費用を重視する場合",
                  recommend: "medelu",
                  reason: "1回あたりの支払額を重視する場合は、medeluをおすすめします。送料込みの支払額はMini 748円で、bloomeeのお試しプラン（1,365円）より617円安く、回数の条件もありません。Liteコース（1,330円・5〜6本）は、ほぼ同額のbloomeeお試しプラン（1,365円・4本以上）と比べて本数の下限が多くなります（2026年10月23日公式確認）。",
                },
                {
                  scenario: "初めての利用で不安がある場合",
                  recommend: "bloomee",
                  reason: "花のサブスクが初めてで不安がある方には、bloomeeが向いています。お花のガイドブックが付き、栄養剤も毎回同封されるため、初めての方でも飾り方を確認できます（2026年10月21日公式確認）。ただし、最低4回の受け取り条件がある点にご注意ください。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md p-5 md:p-6 border border-[#DEDAD2]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-3 py-1 shrink-0">
                      {item.scenario}
                    </span>
                    <span className="text-base font-bold text-[#1F2420]">
                      {item.recommend}がおすすめ
                    </span>
                  </div>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pros & Cons Summary ─── */}
        <section id="pros-cons" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              両サービスのメリット・デメリット
            </h2>

            {/* bloomee */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#1F2420] mb-4">bloomee（ブルーミー）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#EDF1EC] rounded-md p-5">
                  <h4 className="text-sm font-bold text-[#2F5B43] mb-3">メリット</h4>
                  <ul className="text-sm text-[#4A4F49] space-y-2">
                    <li>-- 公式サイトに「お花のお届け実績3,000万本以上（自社調べ）」の表記がある</li>
                    <li>-- お花のガイドブックが付き、栄養剤が毎回同封される</li>
                    <li>-- 「プレゼントとして送る」で相手の住所に届けられる</li>
                    <li>-- 定期便は2週間以内の連絡で返金・交換（特商法）</li>
                  </ul>
                </div>
                <div className="bg-[#F7F1EC] rounded-md p-5 border border-[#E3D3C8]">
                  <h4 className="text-sm font-bold text-[#D9BFB1] mb-3">デメリット</h4>
                  <ul className="text-sm text-[#4A4F49] space-y-2">
                    <li>-- 送料が別途かかる（385〜550円）</li>
                    <li>-- 4回の最低受け取り回数がある</li>
                    <li>-- 送料込みの支払額はお試しプランで1回1,365円</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* medelu */}
            <div>
              <h3 className="text-lg font-bold text-[#1F2420] mb-4">medelu（メデル）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#EDF1EC] rounded-md p-5">
                  <h4 className="text-sm font-bold text-[#2F5B43] mb-3">メリット</h4>
                  <ul className="text-sm text-[#4A4F49] space-y-2">
                    <li>-- 送料無料で料金がわかりやすい</li>
                    <li>-- 回数の条件がなく、いつでも解約可能</li>
                    <li>-- 生産者と市場から直接仕入れた花が届く</li>
                    <li>-- 送料込みでMini 1回748円（bloomeeお試しより617円安い）</li>
                    <li>-- 品質保証あり</li>
                  </ul>
                </div>
                <div className="bg-[#F7F1EC] rounded-md p-5 border border-[#E3D3C8]">
                  <h4 className="text-sm font-bold text-[#D9BFB1] mb-3">デメリット</h4>
                  <ul className="text-sm text-[#4A4F49] space-y-2">
                    <li>-- 北海道・東北へのLite以上は遠隔地送料（140〜240円）が加算される（2026年10月17日公式確認）</li>
                    <li>-- お届けは毎週か隔週で、月1回は選べない（2026年10月22日公式確認）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              bloomee vs medeluに関するよくある質問
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
              bloomeeとmedeluの選び方のまとめ
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              bloomeeとmedeluは、重視する点によって適したサービスが異なります。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              費用と手軽さを重視する場合はmedeluが適しています。送料無料で748円から始められ、回数の条件もないため、金銭的な負担を抑えて試すことができます。
              花のある生活を手軽に始めたい方に向いています。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              同封のガイドブック・栄養剤や「プレゼントとして送る」での申し込みを重視する場合はbloomeeをおすすめします。お花のガイドブックが付き、栄養剤が毎回同封されます（2026年10月21日公式確認）。
              ただし、最初の4回の継続が条件のため、お試しプランでも送料込みで5,460円（1,365円×4回）がかかります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="/services/medelu"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                bloomeeの詳細を見る
              </a>
              <p className="mt-2 text-xs"><a href="/services/bloomee/" className="text-[#2F5B43] underline">ブルーミーの値段・料金プランと口コミの詳細 →</a></p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm text-[#2F5B43] underline hover:text-[#234534] transition-colors"
              >
                medelu公式サイトはこちら
              </a>
              <span className="hidden sm:inline text-[#6B6F6A]">|</span>
              <a
                href="https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm text-[#2F5B43] underline hover:text-[#234534] transition-colors"
              >
                bloomee公式サイトはこちら
              </a>
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
              掲載情報は2026年10月30日時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。
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
