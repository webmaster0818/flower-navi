"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomeeとmedeluはどちらが安いですか？",
    a: "送料込みの実質負担額で比較すると、medeluのほうが安くなります。medeluのLiteコースは748円（送料無料）、bloomeeのお試しプランは980円＋送料385円＝1,365円です。同じポスト投函の最安プランでも、1回あたり約667円の差があります。",
  },
  {
    q: "bloomeeとmedeluの花の品質に違いはありますか？",
    a: "口コミでは、bloomeeについて「しおれていた・同じ花が続く」など品質のばらつきを指摘する声が多く見られます。medeluについては「センスが良い・長持ちする」という声が多い一方、「暑い時期は花持ちが短い」という声もあります。品質保証は、bloomeeが定期便なら2週間以内の連絡で返金・交換（特商法）、medeluは到着当日中に写真を送れば送料込みで全額返金（交換なし）です（2026年10月14日 公式確認）。",
  },
  {
    q: "bloomeeの最低4回の受け取り条件とは何ですか？",
    a: "bloomeeでは初回申し込み時に最低4回の受け取りが条件となっています。4回受け取る前に解約すると、残り回数分の料金が違約金として発生します。お試しプランの場合、最低でも1,365円×4回＝5,460円の利用が必要です。medeluにはこのような回数の条件はなく、いつでも解約できます。",
  },
  {
    q: "medeluに回数の条件はありますか？",
    a: "medeluには回数の条件はありません。初回から解約でき、マイページからいつでも解約手続きが可能です。最低利用回数や違約金の設定がないため、試しに利用しやすい点がmedeluの利点です。",
  },
  {
    q: "配送エリアに違いはありますか？",
    a: "bloomeeは離島を除く日本全国に配送対応しています。medeluも日本全国に対応していますが、一部離島や配送困難な地域は対象外となる場合があります。どちらもポスト投函プランは日本郵便を利用しており、対応エリアに大きな差はありません。",
  },
  {
    q: "プレゼントとして贈るならどちらがおすすめですか？",
    a: "bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、相手の住所に届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。medeluのギフトでの申し込み方法は、公式サイトでご確認ください。",
  },
  {
    q: "途中でプラン変更はできますか？",
    a: "どちらもマイページからプラン変更が可能です。bloomeeはお試し・グリーン・ベーシックの各プラン間で変更でき、配送頻度（毎週・隔週）も変更可能です。medeluもMini・Lite・Lite+・Basicの各コース間で変更でき、配送頻度は隔週・毎週から選べます。",
  },
  {
    q: "bloomeeとmedelu、両方試してから決めることはできますか？",
    a: "可能です。ただし、bloomeeには最低4回の受け取り条件があるため、試しに利用する場合でも最低4回分の料金が発生します。回数の条件がないmedeluを先に利用し、その後bloomeeを検討すると、費用面の負担を抑えられます。medeluは1回受け取っただけでも解約できるため、試験的な利用に向いています。",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"bloomee vs medelu 比較\",\"description\":\"bloomeeとmedeluの料金・評判・選び方を比較し、解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/bloomee-vs-medelu/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"bloomeeとmedeluはどちらが安いですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"送料込みの実質負担額で比較すると、medeluのほうが安くなります。medeluのLiteコースは748円（送料無料）、bloomeeのお試しプランは980円＋送料385円＝1,365円です。同じポスト投函の最安プランでも、1回あたり約667円の差があります。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeとmedeluの花の品質に違いはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"口コミでは、bloomeeについて「しおれていた・同じ花が続く」など品質のばらつきを指摘する声が多く見られます。medeluについては「センスが良い・長持ちする」という声が多い一方、「暑い時期は花持ちが短い」という声もあります。品質保証は、bloomeeが定期便なら2週間以内の連絡で返金・交換（特商法）、medeluは到着当日中に写真を送れば送料込みで全額返金（交換なし）です（2026年10月14日 公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeの最低4回の受け取り条件とは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeでは初回申し込み時に最低4回の受け取りが条件となっています。4回受け取る前に解約すると、残り回数分の料金が違約金として発生します。お試しプランの場合、最低でも1,365円×4回＝5,460円の利用が必要です。medeluにはこのような回数の条件はなく、いつでも解約できます。\"}},{\"@type\":\"Question\",\"name\":\"medeluに回数の条件はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"medeluには回数の条件はありません。初回から解約でき、マイページからいつでも解約手続きが可能です。最低利用回数や違約金の設定がないため、試しに利用しやすい点がmedeluの利点です。\"}},{\"@type\":\"Question\",\"name\":\"配送エリアに違いはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeは離島を除く日本全国に配送対応しています。medeluも日本全国に対応していますが、一部離島や配送困難な地域は対象外となる場合があります。どちらもポスト投函プランは日本郵便を利用しており、対応エリアに大きな差はありません。\"}},{\"@type\":\"Question\",\"name\":\"プレゼントとして贈るならどちらがおすすめですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、相手の住所に届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。medeluのギフトでの申し込み方法は、公式サイトでご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"途中でプラン変更はできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"どちらもマイページからプラン変更が可能です。bloomeeはお試し・グリーン・ベーシックの各プラン間で変更でき、配送頻度（毎週・隔週）も変更可能です。medeluもMini・Lite・Lite+・Basicの各コース間で変更でき、配送頻度は隔週・毎週から選べます。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeとmedelu、両方試してから決めることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"可能です。ただし、bloomeeには最低4回の受け取り条件があるため、試しに利用する場合でも最低4回分の料金が発生します。回数の条件がないmedeluを先に利用し、その後bloomeeを検討すると、費用面の負担を抑えられます。medeluは1回受け取っただけでも解約できるため、試験的な利用に向いています。\"}}]}" }} />
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
                  <span className="text-[#333] font-medium">bloomee vs medelu</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-gradient-to-b from-[#E8F0EB] to-[#F0E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              bloomee vs medelu<br className="hidden md:block" />
              8つの違いを比較【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、花のサブスクで人気のある「bloomee（ブルーミー）」と「medelu（メデル）」を、
              料金・花の本数・解約条件など8つの項目で比較し、利用目的に応じた選び方をご説明します。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-[#E5E5E5] flex-1 max-w-xs mx-auto md:mx-0">
                <p className="text-xs text-[#999] mb-1">bloomee</p>
                <p className="text-lg font-bold text-[#4A7C59] mb-1">980円/回 + 送料385円</p>
                <p className="text-xs text-[#666]">花4本以上 / 最低4回の受け取り条件あり</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-[#999]">VS</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-[#E5E5E5] flex-1 max-w-xs mx-auto md:mx-0">
                <p className="text-xs text-[#999] mb-1">medelu</p>
                <p className="text-lg font-bold text-[#4A7C59] mb-1">748円/回 送料無料</p>
                <p className="text-xs text-[#666]">花3〜4本 / 回数の条件なし</p>
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
                  <li><a href="#conclusion" className="hover:text-[#4A7C59] transition-colors">1. 利用目的に応じたbloomeeとmedeluの選び分け</a></li>
                  <li><a href="#price" className="hover:text-[#4A7C59] transition-colors">2. 料金比較</a></li>
                  <li><a href="#volume" className="hover:text-[#4A7C59] transition-colors">3. 花の本数・ボリューム</a></li>
                  <li><a href="#delivery" className="hover:text-[#4A7C59] transition-colors">4. 配送方法</a></li>
                  <li><a href="#frequency" className="hover:text-[#4A7C59] transition-colors">5. 配送頻度の選択肢</a></li>
                  <li><a href="#cancel" className="hover:text-[#4A7C59] transition-colors">6. 解約のしやすさ</a></li>
                  <li><a href="#freshness" className="hover:text-[#4A7C59] transition-colors">7. 花の鮮度</a></li>
                  <li><a href="#app" className="hover:text-[#4A7C59] transition-colors">8. マイページでの手続き</a></li>
                  <li><a href="#brand" className="hover:text-[#4A7C59] transition-colors">9. ブランド認知度・実績</a></li>
                  <li><a href="#table" className="hover:text-[#4A7C59] transition-colors">10. 比較一覧表</a></li>
                  <li><a href="#scenario" className="hover:text-[#4A7C59] transition-colors">11. 利用シーン別のおすすめ</a></li>
                  <li><a href="#pros-cons" className="hover:text-[#4A7C59] transition-colors">12. 両サービスのメリット・デメリット</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">13. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">14. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Quick Conclusion ─── */}
        <section id="conclusion" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              利用目的に応じてbloomeeとmedeluを選び分けられます
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              費用と手軽さを重視する場合はmedelu、ブランドの知名度やサービスの充実度を重視する場合はbloomeeをおすすめします。
              それぞれに向いている方の特徴は以下のとおりです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* bloomeeがおすすめ */}
              <div className="bg-[#F9E8E8] rounded-xl p-5 md:p-6 border border-[#F0D0D0]">
                <h3 className="text-base font-bold text-[#333] mb-4 pb-2 border-b border-[#F0D0D0]">
                  bloomeeが向いている方
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>知名度の高いサービスを選びたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>SNSで他の利用者の投稿を参考にしたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>同封のガイドブックで飾り方を知りたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>ギフトとしてお花の定期便を贈りたい</span>
                  </li>
                </ul>
              </div>

              {/* medeluがおすすめ */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6 border border-[#C8DCC8]">
                <h3 className="text-base font-bold text-[#333] mb-4 pb-2 border-b border-[#C8DCC8]">
                  medeluが向いている方
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>送料込みの実質負担をできるだけ抑えたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>回数の条件なしで始めたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>安定した品質のお花を受け取りたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>シンプルな料金体系を希望する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>まずは1回試してから続けるか決めたい</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 1. Price Comparison ─── */}
        <section id="price" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較1：料金（送料込みの実質負担）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              料金は、表示価格だけでなく送料を含めた1回あたりの実質負担額で比較することが重要です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* bloomee料金 */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#F9E8E8] px-5 py-3 text-center">
                  <h3 className="text-base font-bold text-[#333]">bloomee</h3>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">お試しプラン</p>
                    <p className="text-sm text-[#666]">980円 + 送料385円 = <span className="font-bold text-[#333]">1,365円/回</span></p>
                  </div>
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">ベーシックプラン</p>
                    <p className="text-sm text-[#666]">2,180円 + 送料550円 = <span className="font-bold text-[#333]">2,730円/回</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-[#999] mb-1">グリーンプラン</p>
                    <p className="text-sm text-[#666]">980円 + 送料385円 = <span className="font-bold text-[#333]">1,365円/回</span></p>
                  </div>
                </div>
              </div>

              {/* medelu料金 */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-3 text-center">
                  <h3 className="text-base font-bold text-[#333]">medelu</h3>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">Miniコース</p>
                    <p className="text-sm text-[#666]">748円 送料無料 = <span className="font-bold text-[#333]">748円/回</span></p>
                  </div>
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">Liteコース</p>
                    <p className="text-sm text-[#666]">1,330円 送料無料 = <span className="font-bold text-[#333]">1,330円/回</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-[#999] mb-1">Basicコース</p>
                    <p className="text-sm text-[#666]">2,330円 送料無料 = <span className="font-bold text-[#333]">2,330円/回</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">料金比較のポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                最安プラン同士で比較すると、medeluのLiteコース（748円）はbloomeeのお試しプラン（1,365円/送料込み）の約半額です。
                medeluは送料込みの価格のため（北海道・東北へのLite以上は遠隔地送料140〜240円が加算（2026年10月17日公式確認））、表示価格がそのまま実質負担額になるシンプルな料金体系です。
                bloomeeは花代とは別に送料385〜550円がかかるため、総額で考える必要があります。
                隔週配送の場合、月額の差はbloomeeお試しプラン（月2,730円）とmedelu Miniコース（月1,496円）で約1,234円になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 2. Volume Comparison ─── */}
        <section id="volume" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較2：花の本数・ボリューム
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F9E8E8] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>お試しプラン：4本以上（約18〜25cm）</li>
                  <li>グリーンプラン：グリーン中心</li>
                  <li>ベーシックプラン：8本以上（約25〜30cm）</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>Miniコース：3〜4本</li>
                  <li>Liteコース：5〜6本／Lite+コース：5〜7本</li>
                  <li>Basicコース：6〜9本</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              最安プラン同士では、medelu Mini（3〜4本）とbloomeeお試し（4本以上）で本数に大きな差はありません。
              中間プランでは、medeluのLiteコース（5〜6本/1,330円・送料込み）がbloomeeのベーシックプラン（8本以上/2,730円・送料込み）より1回あたり約1,400円安く、本数はbloomeeのベーシックが多くなっています。
              1本あたりの単価では、medeluの費用対効果が高い水準にあります。
            </p>
          </div>
        </section>

        {/* ─── 3. Delivery Method ─── */}
        <section id="delivery" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較3：配送方法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>お試し・グリーン：ポスト投函</li>
                  <li>ベーシックプラン：宅配便</li>
                  <li>ポスト投函はゆうパケットを利用</li>
                  <li>専用の縦長パッケージで届く</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>Mini・Lite：ポスト投函</li>
                  <li>Lite+・Basic：宅配便</li>
                  <li>ポスト投函は日本郵便を利用</li>
                  <li>専用パッケージで届く</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              配送方法はどちらもほぼ同じ仕組みです。低価格プランはポスト投函、上位プランは宅配便（手渡し）になります。
              ポスト投函は不在時でも受け取れるため、一人暮らしの方や日中不在の方にとって便利です。
              どちらのサービスも、ポストの投函口が幅4.5cm以上・奥行き15cm以上あれば問題なく届きます。
            </p>
          </div>
        </section>

        {/* ─── 4. Delivery Frequency ─── */}
        <section id="frequency" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較4：配送頻度の選択肢
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F9E8E8] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>毎週 / 隔週から選択</li>
                  <li>マイページからいつでも変更可</li>
                  <li>スキップ機能あり（無料）</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>隔週 / 毎週から選択</li>
                  <li>マイページからいつでも変更可</li>
                  <li>スキップ機能あり（無料）</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              配送頻度の選択肢はどちらも同じで、毎週または隔週から選べます。
              どちらもマイページから配送頻度の変更が可能で、旅行や出張で受け取れない週は、スキップ機能で配送を休止できます。
              スキップは無料のため、生活に合わせて柔軟に調整できます。この項目では両者に差はありません。
            </p>
          </div>
        </section>

        {/* ─── 5. Cancellation ─── */}
        <section id="cancel" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較5：解約のしやすさ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              解約のしやすさは、両サービスで大きく異なるポイントです。特に、まず試してみたい方にとって重要な比較基準です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm font-bold text-[#E0B8B8]">4回の最低受け取り回数あり</p>
                </div>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>4回未満の解約は残り回数分が違約金として発生</li>
                  <li>マイページから解約手続き可能</li>
                  <li>解約ページまでに複数ステップあり</li>
                  <li>引き止めページが表示される</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8DCC8]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm font-bold text-[#4A7C59]">回数の条件なし・いつでも解約可能</p>
                </div>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>初回から解約自由</li>
                  <li>マイページから簡単に解約可能</li>
                  <li>違約金・手数料なし</li>
                  <li>解約手続きがシンプル</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#333] mb-2">解約のしやすさの評価</h3>
              <p className="text-sm text-[#666] leading-relaxed">
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較6：花の鮮度
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>口コミでは「しおれていた・同じ花が続く」という声が目立つ</li>
                  <li>定期便は2週間以内の連絡で返金・交換（特商法）</li>
                  <li>夏場のポスト投函は傷みのリスクがやや高い</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>自社で仕入れ・品質管理を一元化</li>
                  <li>市場直送で鮮度の高い花を使用</li>
                  <li>品質保証制度あり</li>
                  <li>品質のばらつきが少なく安定している</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              bloomeeは、市場で仕入れた花を束ねて届けると案内しています（2026年10月20日公式確認）。
              なお品質保証は、bloomeeが定期便なら2週間以内の連絡で返金・交換、medeluは到着当日中の写真送付で全額返金（交換なし）と条件が異なります。
            </p>
          </div>
        </section>

        {/* ─── 7. App & Services ─── */}
        <section id="app" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較7：マイページでの手続きと同封物
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F9E8E8] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>マイページで特定の週のスキップが可能</li>
                  <li>4回目の受け取り後は、マイページで隔週に変更可能</li>
                  <li>プランの変更・切り替えもマイページから</li>
                  <li>お花のガイドブックが付き、栄養剤が毎回同封される</li>
                  <li>お届け先の入力画面で「プレゼントとして送る」を選べる</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>Webのマイページで管理</li>
                  <li>マイページでプラン変更・スキップが可能</li>
                  <li>花の情報はメールで届く</li>
                  <li>シンプルなサービス設計</li>
                                  </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              どちらも、スキップやプランの変更はWebのマイページで行います。bloomeeは、4回目の受け取り後に隔週への変更ができ、お花のガイドブックが付き、栄養剤が毎回同封されます（2026年10月21日公式確認）。
              また、お届け先の入力画面で「プレゼントとして送る」を選べるため、プレゼントにも利用できます。
              当サイトでは、bloomeeの専用アプリを公式サイトとApp Storeで確認できませんでした（2026年10月21日時点）。
            </p>
          </div>
        </section>

        {/* ─── 8. Brand ─── */}
        <section id="brand" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較8：ブランド認知度・実績
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>2016年サービス開始</li>
                  <li>累計3,000万本以上のお花をお届け</li>
                  <li>SNS投稿数が花のサブスクで最多クラス</li>
                  <li>テレビ・雑誌等のメディア掲載多数</li>
                  <li>花のサブスクの代表的なサービスとして知られる</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>2018年サービス開始</li>
                  <li>価格の手頃さが口コミで広がっている</li>
                  <li>SNS投稿数はbloomeeと比べると少なめ</li>
                  <li>花のサブスク比較サイトで高評価が多い</li>
                  <li>認知度に比べてサービス内容の評価が高い</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              ブランド認知度ではbloomeeが大きく上回っています。2016年の早期参入で花のサブスク市場を開拓し、SNSやメディアでの露出も多いため「花のサブスク＝bloomee」というイメージが定着しています。
              一方、medeluは2018年開始の後発サービスですが、価格の手頃さが口コミで広がり、比較検討する層からの支持を集めています。
              利用者の多さによる安心感を重視する場合はbloomee、実質的なサービス内容を重視する場合はmedeluが適しています。
            </p>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs medelu 比較一覧表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ここまでの比較内容を一覧表にまとめました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">比較項目</th>
                    <th className="px-4 py-3 text-center font-medium">bloomee</th>
                    <th className="px-4 py-3 text-center font-medium">medelu</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "最安プラン（税込）", bloomee: "980円/回", medelu: "748円/回" },
                    { label: "送料", bloomee: "385〜550円", medelu: "無料" },
                    { label: "実質最安（送料込み）", bloomee: "1,365円/回", medelu: "748円/回" },
                    { label: "花の本数（最安）", bloomee: "4本以上", medelu: "3〜4本" },
                    { label: "プラン数", bloomee: "3プラン", medelu: "3コース" },
                    { label: "配送方法", bloomee: "ポスト投函 / 宅配便", medelu: "ポスト投函 / 宅配便" },
                    { label: "配送頻度", bloomee: "毎週 / 隔週", medelu: "毎週 / 隔週" },
                    { label: "回数の条件", bloomee: "4回", medelu: "なし" },
                    { label: "解約時の違約金", bloomee: "残り回数分発生", medelu: "なし" },
                    { label: "品質保証", bloomee: "あり（定期便は2週間以内の連絡で返金・交換）", medelu: "あり" },
                    { label: "ギフト対応", bloomee: "「プレゼントとして送る」で申し込み", medelu: "公式サイトでご確認ください" },
                                        { label: "SNS人気", bloomee: "非常に高い", medelu: "普通" },
                    { label: "サービス開始", bloomee: "2016年", medelu: "2018年" },
                    { label: "スキップ機能", bloomee: "あり（無料）", medelu: "あり（無料）" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"}>
                      <td className="px-4 py-3 font-medium text-[#333] border-b border-[#E5E5E5]">{row.label}</td>
                      <td className="px-4 py-3 text-center text-[#666] border-b border-[#E5E5E5]">{row.bloomee}</td>
                      <td className="px-4 py-3 text-center text-[#666] border-b border-[#E5E5E5]">{row.medelu}</td>
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              利用シーン別のおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
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
                  reason: "bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、相手の住所に届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。medeluのギフトでの申し込み方法は、公式サイトでご確認ください。",
                },
                {
                  scenario: "費用を重視する場合",
                  recommend: "medelu",
                  reason: "費用対効果を最も重視する場合は、medeluをおすすめします。送料込みの実質負担額はbloomeeの約半額で、回数の条件もないため不要な出費が発生しません。Liteコース（1,330円）でも5〜6本届くため、同価格帯のbloomeeお試しプラン（1,365円/4本以上）よりボリュームがあります。",
                },
                {
                  scenario: "初めての利用で不安がある場合",
                  recommend: "bloomee",
                  reason: "花のサブスクが初めてで不安がある方には、bloomeeが向いています。お花のガイドブックが付き、栄養剤も毎回同封されるため、初めての方でも飾り方を確認できます（2026年10月21日公式確認）。SNSに利用者の投稿が多いため、事前にどんな花が届くか参考にできる安心感もあります。ただし、最低4回の受け取り条件がある点にご注意ください。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-3 py-1 shrink-0">
                      {item.scenario}
                    </span>
                    <span className="text-base font-bold text-[#333]">
                      {item.recommend}がおすすめ
                    </span>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pros & Cons Summary ─── */}
        <section id="pros-cons" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              両サービスのメリット・デメリット
            </h2>

            {/* bloomee */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#333] mb-4">bloomee（ブルーミー）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#E8F0EB] rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#4A7C59] mb-3">メリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 知名度が高く安心感がある</li>
                    <li>-- お花のガイドブックが付き、栄養剤が毎回同封される</li>
                    <li>-- 「プレゼントとして送る」で相手の住所に届けられる</li>
                                        <li>-- SNSで情報収集しやすい</li>
                    <li>-- 定期便は2週間以内の連絡で返金・交換（特商法）</li>
                  </ul>
                </div>
                <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                  <h4 className="text-sm font-bold text-[#E0B8B8] mb-3">デメリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 送料が別途かかる（385〜550円）</li>
                    <li>-- 4回の最低受け取り回数がある</li>
                    <li>-- 解約手続きがやや複雑</li>
                    <li>-- 花屋により品質にばらつきがある</li>
                    <li>-- 送料込みの実質負担が高め</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* medelu */}
            <div>
              <h3 className="text-lg font-bold text-[#333] mb-4">medelu（メデル）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#E8F0EB] rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#4A7C59] mb-3">メリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 送料無料で料金がわかりやすい</li>
                    <li>-- 回数の条件がなく、いつでも解約可能</li>
                    <li>-- 自社品質管理で安定した鮮度</li>
                    <li>-- 送料込みでもbloomeeの約半額</li>
                    <li>-- 解約手続きが簡単</li>
                    <li>-- 品質保証あり</li>
                  </ul>
                </div>
                <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                  <h4 className="text-sm font-bold text-[#E0B8B8] mb-3">デメリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- SNSでの情報量が少ない</li>
                    <li>-- 知名度がbloomeeより低い</li>
                    <li>-- 花屋ごとのアレンジの多様性はない</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs medeluに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-gradient-to-b from-[#E8F0EB] to-[#F0E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              bloomeeとmedeluの選び方のまとめ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              bloomeeとmedeluは、重視する点によって適したサービスが異なります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              費用と手軽さを重視する場合はmedeluが適しています。送料無料で748円から始められ、回数の条件もないため、金銭的な負担を抑えて試すことができます。
              品質の安定した花が届くため、花のある生活を手軽に始めたい方に向いています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ブランドの知名度やサービスの充実度を重視する場合はbloomeeをおすすめします。「プレゼントとして送る」での申し込みや、お花のガイドブックなど、初めての方向けの案内があり、SNSでの情報量も豊富です。
              花のサブスクの代表的なサービスとしての安心感があり、プレゼント用途にも対応しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                bloomeeの詳細を見る
              </a>
              <p className="mt-2 text-xs"><a href="/services/bloomee/" className="text-[#4A7C59] underline">ブルーミーの値段・料金プランと口コミの詳細 →</a></p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm text-[#4A7C59] underline hover:text-[#3A6247] transition-colors"
              >
                medelu公式サイトはこちら
              </a>
              <span className="hidden sm:inline text-[#999]">|</span>
              <a
                href="https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm text-[#4A7C59] underline hover:text-[#3A6247] transition-colors"
              >
                bloomee公式サイトはこちら
              </a>
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
