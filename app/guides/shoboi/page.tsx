"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── SEO Metadata (exported from layout or head) ─── */
// Note: metadata export is not available in "use client" components.
// Use a separate layout.tsx or head.tsx for metadata, or apply via <title> tag.

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクは本当にしょぼいのですか？",
    a: "「しょぼい」と感じるかどうかは、選ぶプランによって大きく異なります。最安プラン（500〜1,000円前後）では花が3本程度と少なめですが、2,000円以上のプランでは5〜8本のボリュームのあるアレンジが届きます。また、サービスによって品質に差があるため、事前に口コミや品質保証制度の有無を確認することをおすすめします。",
  },
  {
    q: "届いた花がすぐ枯れてしまいます。対処法はありますか？",
    a: "花が届いたら、すぐに水切り（水中で茎を斜めに切ること）を行い、切り花延命剤を入れた新しい水に生けてください。夏場はこまめな水替え（毎日が理想です）が必要です。また、直射日光やエアコンの風が直接当たる場所を避けることで、花持ちが大きく改善します。クール便に対応したサービスを選ぶことも有効です。",
  },
  {
    q: "ボリュームに満足できるおすすめのサービスはどれですか？",
    a: "ボリュームを重視する場合はAND PLANTS（6〜8本（2026年10月17日公式確認）、送料無料）、価格を重視する場合はmedelu（748円〜、送料無料）、鮮度を重視する場合はLIFFT（提携農園から直送（2026年10月17日公式確認）、3,300円）をおすすめします。いずれも品質保証制度があり、花が傷んでいた場合にも対応を受けられます。",
  },
  {
    q: "品質保証制度とは何ですか？",
    a: "届いた花が傷んでいた場合に、無料で再送または返金を受けられる制度です。bloomee、medelu、AND PLANTSなど主要サービスの多くが導入しています。申請は、写真を撮影してマイページやLINEから行う方法が一般的です。申請期限は、お届け日から2〜3日以内としているサービスが多く見られます。",
  },
  {
    q: "花のサブスクをやめた人が多いのはなぜですか？",
    a: "主な理由は「期待とのギャップ」「花のお手入れの手間」「価格に対する不満」の3点です。特に、最安プランで始めた方が本数の少なさに物足りなさを感じるケースが多く見られます。事前にプラン内容を確認し、お手入れ方法を理解したうえで始めると、継続しやすくなります。",
  },
];

/* ─── Main Component ─── */
export default function ShoboboiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスクが「しょぼい」と言われる理由\",\"item\":\"https://ohana-delivery.com/guides/shoboi/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクが「しょぼい」と言われる理由\",\"description\":\"花のサブスクが「しょぼい」と言われる理由について、料金・評判・選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/shoboi/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクは本当にしょぼいのですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"「しょぼい」と感じるかどうかは、選ぶプランによって大きく異なります。最安プラン（500〜1,000円前後）では花が3本程度と少なめですが、2,000円以上のプランでは5〜8本のボリュームのあるアレンジが届きます。また、サービスによって品質に差があるため、事前に口コミや品質保証制度の有無を確認することをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"届いた花がすぐ枯れてしまいます。対処法はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花が届いたら、すぐに水切り（水中で茎を斜めに切ること）を行い、切り花延命剤を入れた新しい水に生けてください。夏場はこまめな水替え（毎日が理想です）が必要です。また、直射日光やエアコンの風が直接当たる場所を避けることで、花持ちが大きく改善します。クール便に対応したサービスを選ぶことも有効です。\"}},{\"@type\":\"Question\",\"name\":\"ボリュームに満足できるおすすめのサービスはどれですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ボリュームを重視する場合はAND PLANTS（6〜8本（2026年10月17日公式確認）、送料無料）、価格を重視する場合はmedelu（748円〜、送料無料）、鮮度を重視する場合はLIFFT（提携農園から直送（2026年10月17日公式確認）、3,300円）をおすすめします。いずれも品質保証制度があり、花が傷んでいた場合にも対応を受けられます。\"}},{\"@type\":\"Question\",\"name\":\"品質保証制度とは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届いた花が傷んでいた場合に、無料で再送または返金を受けられる制度です。bloomee、medelu、AND PLANTSなど主要サービスの多くが導入しています。申請は、写真を撮影してマイページやLINEから行う方法が一般的です。申請期限は、お届け日から2〜3日以内としているサービスが多く見られます。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクをやめた人が多いのはなぜですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"主な理由は「期待とのギャップ」「花のお手入れの手間」「価格に対する不満」の3点です。特に、最安プランで始めた方が本数の少なさに物足りなさを感じるケースが多く見られます。事前にプラン内容を確認し、お手入れ方法を理解したうえで始めると、継続しやすくなります。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ─── Head (SEO) ─── */}
      <title>花のサブスクは「しょぼい」「ひどい」のか｜実際に届く花の内容を検証【2026年】</title>
      <meta name="description" content="花のサブスクが「しょぼい」「ひどい」と言われる理由を検証しました。当サイトでは、実際に届く花の品質や本数、サービスごとの違いを解説し、プランの選び方をご紹介します。" />

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
                  <span className="text-[#666]">ガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">花のサブスクが「しょぼい」と言われる理由</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              実態検証ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクは「しょぼい」「ひどい」のか<br className="hidden md:block" />
              実際に届く花の内容を検証【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、花のサブスク（お花の定期便）が「しょぼい」「ひどい」と評価される背景を整理し、
              満足度の高いサービスを選ぶためのポイントを解説します。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">目次</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#why-shoboi" className="hover:text-[#4A7C59] transition-colors">1. 「しょぼい」と言われる3つの理由</a></li>
                <li><a href="#complaints" className="hover:text-[#4A7C59] transition-colors">2. よくある不満とその原因</a></li>
                <li><a href="#good-value" className="hover:text-[#4A7C59] transition-colors">3. 費用対効果の高いプラン</a></li>
                <li><a href="#avoid-disappointment" className="hover:text-[#4A7C59] transition-colors">4. 期待とのギャップを避けるための選び方</a></li>
                <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">5. 満足度を高める5つのポイント</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Why "しょぼい" ─── */}
        <section id="why-shoboi" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              「しょぼい」と言われる3つの理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクを「しょぼい」「ひどい」と感じる方には、共通する傾向があります。多くの場合、原因はサービスの品質そのものではなく、<strong>事前の期待とのギャップ</strong>にあります。
            </p>

            <div className="space-y-4">
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                <h3 className="text-sm font-bold text-[#333] mb-2">理由1：花屋の花束を想定している</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花屋で2,000〜3,000円の花束を購入すると、相応のボリュームがあります。一方、花のサブスクの最安プラン（500〜1,000円）で届くのは3〜4本程度です。花屋の花束と同等のボリュームを想定していると、「しょぼい」と感じやすくなります。ポスト投函に対応したサービスは箱のサイズに制限があるため、本数が限られるのは構造上の制約によるものです。
                </p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                <h3 className="text-sm font-bold text-[#333] mb-2">理由2：SNSに投稿された写真との差</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  InstagramやXで見かける花のサブスクの写真は、上位プランのものや、プロが撮影したものであることが多くあります。そのため、最安プランで届く花と比較するとギャップが生じます。また、写真では花瓶やテーブルコーディネートも見栄えに影響しています。実際に届く花の雰囲気を確認したい場合は、一般利用者の投稿を参考にすることをおすすめします。
                </p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                <h3 className="text-sm font-bold text-[#333] mb-2">理由3：季節や時期による品質の差</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  生花は季節の影響を受けます。特に夏場（7〜8月）は輸送中の温度上昇により花が傷みやすく、「届いた時点でしおれていた」という不満が増える時期です。一方、春（3〜5月）や秋（9〜11月）は花の種類が豊富で、品質も安定しています。季節によって届く花の印象が大きく変わることを事前に理解しておくと、期待とのギャップを抑えられます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Common Complaints ─── */}
        <section id="complaints" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              よくある不満とその原因
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1">不満1</span>
                  <h3 className="text-sm font-bold text-[#333]">「花が少ない・しょぼい」</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>原因：</strong>最安プランを選んでいるケースがほとんどです。最安クラスのプラン（1,000円前後）は3〜4本程度で、お試しの位置付けです。1,500円以上のプランを選ぶと、花の本数とバリエーションが大きく増え、満足度も高まります。
                </p>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">解決策：medelu Lite（1,330円/回・5〜6本）やAND PLANTS（1,980円/回・6〜8本（2026年10月17日公式確認））など、中価格帯のプランをおすすめします。いずれも送料無料のため、総額でも割安です。</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1">不満2</span>
                  <h3 className="text-sm font-bold text-[#333]">「届いた花がすぐ枯れる」</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>原因：</strong>輸送中の環境（特に夏場の高温）と、到着後のお手入れ不足が主な原因です。ポスト投函の場合、ポスト内の温度が40度以上になることもあり、花が傷む要因となります。
                </p>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">解決策：夏場はクール便に対応したサービス（LIFFTなど）を選ぶか、在宅時に受け取れる宅配便プランを選択してください。到着後はすぐに水切りを行い、延命剤を入れた水に生けてください。</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1">不満3</span>
                  <h3 className="text-sm font-bold text-[#333]">「花の種類が選べない」</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>原因：</strong>花のサブスクの多くは、プロが旬の花を選ぶ形式です。自分で花を選べない点をデメリットと感じる方もいますが、自分では購入しない花に出会えるというメリットもあります。
                </p>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">解決策：色やスタイルを選びたい方には、色指定が可能なHitoHanaをおすすめします。花を自由に選びたい場合は、花屋のオンラインショップで都度購入する方法が適しています。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Good Value Plans ─── */}
        <section id="good-value" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              費用対効果の高いプラン
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              当サイトでは、本数・品質・価格のバランスが取れたプランを選定しました。1本あたりの単価で比較すると、サブスクの価格面での利点がわかります。
            </p>

            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">サービス</th>
                    <th>プラン/料金</th>
                    <th>本数</th>
                    <th>送料</th>
                    <th className="rounded-tr-lg">1本あたり</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">タスハナ</td>
                    <td>+act 660円/回</td>
                    <td>3本以上</td>
                    <td>330円</td>
                    <td className="font-bold text-[#4A7C59]">約330円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">medelu</td>
                    <td>Mini 748円/回</td>
                    <td>3〜4本（2026年10月17日公式確認）</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約187〜249円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">medelu</td>
                    <td>Lite 1,330円/回</td>
                    <td>5〜6本</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約266円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">AND PLANTS</td>
                    <td>1,980円/回</td>
                    <td>6〜8本（2026年10月17日公式確認）</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約248〜330円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">LIFFT</td>
                    <td>スタンダードプラン 3,300円/月（月1回）（2026年10月17日公式確認）</td>
                    <td>9本前後（2026年10月17日公式確認）</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約367円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#333] mb-2">花屋で購入する場合の価格</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                一般的な花屋でミニブーケを購入すると、3〜5本で800〜1,500円程度、1本あたり300〜500円が相場です。サブスクは市場から直接仕入れることで中間マージンを抑え、花屋の店頭価格より割安に提供されています。特にmedeluやタスハナは1本あたり200円台で、花屋で購入する場合より30〜50%安い計算になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Avoid Disappointment ─── */}
        <section id="avoid-disappointment" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              期待とのギャップを避けるためのサービスの選び方
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクを満足して利用するためには、ご自身のニーズに合ったサービスとプランを選ぶことが重要です。以下のポイントを確認したうえで選ぶことをおすすめします。
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "ポイント 1",
                  title: "予算は送料込みの総額で検討する",
                  text: "月額料金だけでなく、送料を含めた1回あたりの総額で比較してください。bloomeeのお試しプランは980円ですが、送料385円を加えると1,365円です。一方、medeluは748円で送料無料のため、総額は748円です。送料込みで比較すると、実質的な費用がわかります。",
                },
                {
                  step: "ポイント 2",
                  title: "受け取り方法を生活スタイルに合わせる",
                  text: "日中不在が多い方には、ポスト投函に対応したサービス（bloomee、medelu、タスハナなど）が便利です。ただし、夏場はポスト内の高温で花が傷むおそれがあります。品質を優先する場合は、宅配便（AND PLANTS、LIFFT）や時間指定が可能なサービスを選ぶことをおすすめします。",
                },
                {
                  step: "ポイント 3",
                  title: "品質保証制度の有無を確認する",
                  text: "届いた花が傷んでいた場合の保証があるサービスを選ぶと安心です。bloomee、medelu、AND PLANTSなど主要サービスは品質保証を導入しています。保証のないサービスは、価格が安くても、花が傷んでいた場合に対応を受けられないおそれがあります。",
                },
                {
                  step: "ポイント 4",
                  title: "最低受け取り回数の条件を確認する",
                  text: "bloomeeには4回の最低受け取り回数がありますが、medelu、AND PLANTS、LIFFTには回数の条件がなく、いつでも解約できます。タスハナは5回以上の出荷が前提で、5回未満の解約は原則としてできません（2026年10月17日公式確認）。初めて利用する場合は、回数の条件がないサービスから始めることをおすすめします。",
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

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              満足度を高める5つのポイント
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "ポイント 1",
                  title: "品質保証制度を活用する",
                  text: "届いた花が傷んでいた場合は、品質保証を申請してください。写真を撮影してマイページやLINEから送ることで、再送または返金の対応を受けられます。サービス側も申請内容を品質改善に活用しているため、申請はサービスの向上にもつながります。",
                },
                {
                  step: "ポイント 2",
                  title: "季節ごとの花の違いを楽しむ",
                  text: "春はチューリップやラナンキュラス、夏はひまわりやトルコキキョウ、秋はダリアやコスモス、冬はアネモネやスイートピーなど、季節によって届く花の種類や色合いが変わります。これはサブスクならではの楽しみです。届く花の変化を楽しみながら利用すると、満足度が高まります。",
                },
                {
                  step: "ポイント 3",
                  title: "花瓶を工夫して印象を変える",
                  text: "同じ花でも、花瓶によって見栄えが大きく変わります。100円ショップやIKEAなどで購入できる小さめの花瓶を2〜3個用意し、花を分けて飾ると、少ない本数でも華やかに見えます。少ない本数のアレンジには、背の高い花瓶よりも、口が小さめのコンパクトな花瓶が適しています。",
                },
                {
                  step: "ポイント 4",
                  title: "プランのアップグレードを検討する",
                  text: "最安プランで物足りなさを感じた場合は、1つ上のプランをご検討ください。数百円の差でも、花の本数やバリエーションが大きく増えます。例えばbloomeeの場合、お試しプラン（花代980円・4本以上・約18〜25cm）からベーシックプラン（花代2,180円・8本以上・約25〜30cm）に変更すると、本数と花の長さが増えます（ベーシックはポスト投函ではなく手渡しです。2026年10月15日 公式確認）。",
                },
                {
                  step: "ポイント 5",
                  title: "複数サービスを試して比較する",
                  text: "回数の条件がないサービス（medelu、LIFFTなど。タスハナは5回以上の出荷が前提（2026年10月17日公式確認））を順番に利用し、好みに合うサービスを見つける方法もおすすめです。同じ価格帯でもサービスによって花のテイストやアレンジのスタイルが異なり、実際に利用して初めてわかる違いもあります。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
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
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクに関するよくある質問
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

        {/* 口コミの見方・写真確認のポイント */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              「しょぼい」と感じないための口コミ・写真の確認方法
            </h2>
            <p className="text-sm text-[#666] mb-6">
              SNSやレビューには「しょぼい」「思ったより少ない」という声が見られますが、多くの場合、原因は<strong>プラン選びのミスマッチ</strong>です。契約前に、以下の5つのポイントで実際の内容を確認することをおすすめします。
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-[#4A7C59] bg-[#F9F7F3] p-5">
                <h3 className="font-bold text-[#333] mb-2">① Instagramの利用者投稿を時系列で確認する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  「#bloomee」「#medelu」「#anddplants」などのハッシュタグで検索し、<strong>直近3か月以内の投稿を10件以上</strong>確認してください。プロモーション投稿ではなく一般利用者の投稿に絞ると、実際の花のボリュームがわかります。
                </p>
              </div>
              <div className="border-l-4 border-[#4A7C59] bg-[#F9F7F3] p-5">
                <h3 className="font-bold text-[#333] mb-2">② 同じプランの写真を複数比較する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  季節によって、届く花は変わります。<strong>同じプランの実物写真を最低5パターン</strong>確認し、平均的なボリュームを把握してください。最も良い事例だけを基準にすると、「しょぼい」と感じやすくなります。
                </p>
              </div>
              <div className="border-l-4 border-[#4A7C59] bg-[#F9F7F3] p-5">
                <h3 className="font-bold text-[#333] mb-2">③ 「やめた」「解約」に関するレビューを確認する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  肯定的なレビューだけでなく、<strong>解約した人の理由</strong>も確認してください。「花の本数が思ったより少ない」「届くまで何が来るかわからない」などの不満を事前に把握しておくと、期待値を調整できます。
                </p>
              </div>
              <div className="border-l-4 border-[#4A7C59] bg-[#F9F7F3] p-5">
                <h3 className="font-bold text-[#333] mb-2">④ 写真の印象と実物のサイズを比較する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  公式サイトの花の写真はスタジオで撮影されており、<strong>実物より大きく華やかに見える傾向</strong>があります。一般利用者が自宅の食卓やキッチンで撮影した写真のほうが、実物に近いボリューム感を確認できます。
                </p>
              </div>
              <div className="border-l-4 border-[#4A7C59] bg-[#F9F7F3] p-5">
                <h3 className="font-bold text-[#333] mb-2">⑤ 価格帯と花の本数の相場を把握する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花のサブスクは<strong>1,000円台で3〜4本、2,000円台で5〜8本、3,000円以上で8本以上</strong>が相場です。これを下回る本数の場合は、「しょぼい」と感じる可能性が高くなります。価格帯に合わせて期待値を設定することをおすすめします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              プランを適切に選ぶことで花のサブスクの満足度は高まります
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクが「しょぼい」と感じられる主な原因は、<strong>プラン選びのミスマッチ</strong>です。最安プランはお試し用の位置付けであり、満足度を重視する場合は1,500円以上のプランを選ぶことで、花のボリュームと品質が大きく向上します。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              価格を重視する場合は<strong>medelu</strong>（748円〜・送料無料）、ボリュームとデザインを重視する場合は<strong>AND PLANTS</strong>（1,980円〜・送料無料）、鮮度と品質を重視する場合は<strong>LIFFT</strong>（3,300円・提携農園から直送（2026年10月17日公式確認））をおすすめします。品質保証制度を活用し、季節ごとの花の変化を楽しむことで、花のサブスクを日々の暮らしに取り入れやすくなります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/lifft"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                LIFFTの詳細を見る
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
              <section className="py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl p-4 text-sm">
              <a href="/services/bloomee/" className="text-[#4A7C59] font-bold underline">ブルーミーの値段・料金プランと口コミ・評判の詳細を見る →</a>
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
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
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
