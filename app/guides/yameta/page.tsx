"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクをやめた後、また再開できますか？",
    a: "はい、ほとんどのサービスで再開できます。bloomee、medelu、AND PLANTSなどは解約後も再登録が可能で、以前のアカウント情報が残っている場合もあります。再開時にクーポンが配布されることもあるため、公式サイトやメールマガジンを確認しておくと、割安に再開できる場合があります。",
  },
  {
    q: "やめる前にスキップ機能で様子を見ることはできますか？",
    a: "多くのサービスがスキップ（配送停止）機能を提供しています。medeluは次回配送のスキップが可能で、bloomeeもマイページからスキップできます。「しばらく休みたいが、解約するかは迷っている」という場合は、スキップ機能を活用して様子を見ることをおすすめします。",
  },
  {
    q: "花のサブスクの代わりになるものはありますか？",
    a: "生花以外の選択肢として、ドライフラワーの定期便、観葉植物のサブスク（AND PLANTSなど）、造花・アーティフィシャルフラワーがあります。また、近所のスーパーや直売所で季節の花を購入する方法も、自分のペースで花を楽しめるためおすすめです。",
  },
  {
    q: "花のサブスクを続けるメリットは何ですか？",
    a: "定期的に届くことで花を飾る習慣が身につき、部屋の雰囲気が明るくなります。自分では選ばない花に出会えること、花屋に行く時間を節約できること、季節の移り変わりを感じられることが主なメリットです。継続割引があるサービスもあり、長く続けるほど割安になる場合があります。",
  },
];

/* ─── Main Component ─── */
export default function YametaGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスクをやめた人の理由と対処法\",\"item\":\"https://ohana-delivery.com/guides/yameta/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクをやめた人の理由と対処法\",\"description\":\"花のサブスクをやめた方の理由と対処法を解説します。料金・評判・選び方もあわせて説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/yameta/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクをやめた後、また再開できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、ほとんどのサービスで再開できます。bloomee、medelu、AND PLANTSなどは解約後も再登録が可能で、以前のアカウント情報が残っている場合もあります。再開時にクーポンが配布されることもあるため、公式サイトやメールマガジンを確認しておくと、割安に再開できる場合があります。\"}},{\"@type\":\"Question\",\"name\":\"やめる前にスキップ機能で様子を見ることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"多くのサービスがスキップ（配送停止）機能を提供しています。medeluは次回配送のスキップが可能で、bloomeeもマイページからスキップできます。「しばらく休みたいが、解約するかは迷っている」という場合は、スキップ機能を活用して様子を見ることをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクの代わりになるものはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"生花以外の選択肢として、ドライフラワーの定期便、観葉植物のサブスク（AND PLANTSなど）、造花・アーティフィシャルフラワーがあります。また、近所のスーパーや直売所で季節の花を購入する方法も、自分のペースで花を楽しめるためおすすめです。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクを続けるメリットは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"定期的に届くことで花を飾る習慣が身につき、部屋の雰囲気が明るくなります。自分では選ばない花に出会えること、花屋に行く時間を節約できること、季節の移り変わりを感じられることが主なメリットです。継続割引があるサービスもあり、長く続けるほど割安になる場合があります。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ─── Head (SEO) ─── */}
      <title>花のサブスクをやめた理由5選｜続けるかどうかの判断基準【2026年】</title>
      <meta name="description" content="当サイトでは、花のサブスクをやめた方に多い理由5つを解説します。飽きた、費用に見合わない、花が好みに合わないといった利用者の声と、継続をおすすめする方・解約を検討すべき方の判断基準をご紹介します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#4A4F49]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#1F2420] font-medium">花のサブスクをやめた理由</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/yameta/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">お花の定期便ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              花のサブスクをやめた理由5選<br className="hidden md:block" />
              続けるかどうかの判断基準【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              「花のサブスク やめた」「お花の定期便 やめた理由」で検索された方に向けて、
              当サイトではよくあるやめた理由を分析し、継続するか解約するかの判断基準を解説します。
            </p>
          </div>
        </PageHero>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">目次</p>
              <ol className="text-sm text-[#4A4F49] space-y-2">
                <li><a href="#reasons" className="hover:text-[#2F5B43] transition-colors">1. よくあるやめた理由5選</a></li>
                <li><a href="#continue" className="hover:text-[#2F5B43] transition-colors">2. 継続をおすすめする方の特徴</a></li>
                <li><a href="#quit" className="hover:text-[#2F5B43] transition-colors">3. 解約を検討すべき方の特徴</a></li>
                <li><a href="#alternatives" className="hover:text-[#2F5B43] transition-colors">4. やめた後の代替案</a></li>
                <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">5. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Reasons ─── */}
        <section id="reasons" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクをやめた理由5選
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              SNSや口コミサイトに寄せられた「やめた理由」を分析すると、大きく5つのパターンに分けられます。いずれも、<strong>期待と実際の内容との差</strong>が原因であることが多いのが共通点です。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "届く花に飽きてしまった",
                  text: "毎回似たような花が届くと、変化が乏しく感じられることがあります。特に同じサービスを半年以上続けると、季節の花が一巡し、以前と同じ印象を受けやすくなります。対策としては、別のサービスに乗り換える、上位プランに変更して花の種類を増やすなどの方法があります。",
                },
                {
                  num: "2",
                  title: "費用に見合わないと感じた",
                  text: "「スーパーで花を買ったほうが安い」「花屋のほうがボリュームがある」という不満は多く見られます。スーパーや花屋の切り花は、好みの花を必要な分だけ選んで購入できます。ただし、サブスクには自宅に届く利便性、フローリストによるアレンジ、季節の花に出会えるという付加価値があります。",
                },
                {
                  num: "3",
                  title: "届く花が好みに合わなかった",
                  text: "おまかせアレンジのサービスでは、好みに合わない花が届くことがあります。「派手な色は苦手なのにビビッドな花が届いた」「部屋のインテリアと合わない」という声が多く見られます。色やテイストを選べるHitoHanaや、好みを学習するAND PLANTSなど、好みを反映しやすいサービスに切り替えることが有効です。",
                },
                {
                  num: "4",
                  title: "花がすぐに枯れてしまう",
                  text: "特に夏場は配送中に花が傷みやすく、届いた時点で状態が良くない場合もあります。水切りや栄養剤の活用、こまめな水替えなどのお手入れを行わないと花が早く枯れてしまい、費用に見合わないと感じる原因になります。クール便に対応したサービスを選ぶ、品質保証制度を活用するなどの対策があります。",
                },
                {
                  num: "5",
                  title: "忙しくてお手入れができない",
                  text: "花の水替えや花瓶の洗浄など、日々のお手入れを負担に感じる方もいます。仕事や育児で忙しい場合、届いた花を飾る時間を確保できないこともあります。配送頻度を隔週や月1回に変更する、お手入れが容易な茎の強い花が届くサービスを選ぶ、ドライフラワーに切り替えるなどの方法で解決できる場合があります。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFF8F0] rounded-md p-5 border border-[#F0E0D0]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#B0694F] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      理由{item.num}
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

        {/* ─── Continue ─── */}
        <section id="continue" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクの継続をおすすめする方の特徴
            </h2>
            <div className="space-y-3">
              {[
                "花屋に行く時間がなく、定期的に届く利便性に価値を感じる方",
                "季節の花との新しい出会いを楽しめる方",
                "インテリアとして部屋に花を飾る習慣をつけたい方",
                "プランやサービスの変更で不満を解消できる見込みがある方",
                "品質保証制度を活用して、傷んだ花の再送を受けられることを把握している方",
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-md p-4 border border-[#DEDAD2] flex items-start gap-3">
                  <span className="text-[#2F5B43] text-lg shrink-0">・</span>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Quit ─── */}
        <section id="quit" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクの解約を検討すべき方の特徴
            </h2>
            <div className="space-y-3">
              {[
                "自分で花を選びたい方、おまかせアレンジに負担を感じる方",
                "花のお手入れが負担で、枯れた花をそのままにしてしまう方",
                "月々の出費をできるだけ減らしたい方、花に費用をかけたくない方",
                "不在が多く、届いた花がポストに長時間置かれたままになる方",
                "複数のサービスを試しても満足できなかった方",
              ].map((item, i) => (
                <div key={i} className="bg-[#F7F1EC] rounded-md p-4 border border-[#D9BFB1] flex items-start gap-3">
                  <span className="text-[#B0694F] text-lg shrink-0">&#10005;</span>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Alternatives ─── */}
        <section id="alternatives" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              解約後の代替案3選
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "スーパーや直売所で自分で花を買う",
                  text: "週末にスーパーの花売り場や地元の直売所で花を選ぶ方法です。好みの花を、必要な分だけ選んで購入できます。ただし、花屋のような専門的なアレンジや助言は受けられません。",
                },
                {
                  num: "2",
                  title: "観葉植物のサブスクに切り替える",
                  text: "AND PLANTSなどの観葉植物のサブスクは、切り花に比べてお手入れの手間が少なく、長く楽しめます。水やりは週1〜2回で済み、インテリアとしての見栄えも良好です。植物のある暮らしを楽しみたい方におすすめです。",
                },
                {
                  num: "3",
                  title: "ドライフラワーや造花を活用する",
                  text: "お手入れが不要で長期間楽しめるドライフラワーや、高品質な造花（アーティフィシャルフラワー）も選択肢の一つです。初期費用はかかりますが、継続的な費用がかからない点が利点です。季節ごとに入れ替えることで、変化も楽しめます。",
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
              花のサブスクをやめる前に確認したいQ&A
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F6F4EF] hover:bg-[#EDF1EC] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#1F2420] pr-4">Q. {item.q}</span>
                    <svg
                      className={`w-4 h-4 text-[#6B6F6A] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white">
                      <p className="text-sm text-[#4A4F49] leading-relaxed">A. {item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス別 解約条件の一覧 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              サービス別 解約の条件一覧
            </h2>
            <p className="text-sm text-[#4A4F49] mb-6">
              解約したいと考えた際にすぐ解約できるかどうかは、申し込み前に確認しておくべき点です。当サイトでは、回数の条件・違約金・解約方法をサービス別にまとめています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white border border-[#DEDAD2]">
                <thead className="bg-[#2F5B43] text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">サービス</th>
                    <th className="px-3 py-2 text-left">回数の条件</th>
                    <th className="px-3 py-2 text-left">違約金</th>
                    <th className="px-3 py-2 text-left">解約手続き</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DEDAD2]"><td className="px-3 py-2 font-bold">bloomee</td><td className="px-3 py-2">4回</td><td className="px-3 py-2 text-[#C56565]">あり (残回数分)</td><td className="px-3 py-2">マイページから手続き</td></tr>
                  <tr className="border-b border-[#DEDAD2]"><td className="px-3 py-2 font-bold">medelu</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2">マイページから手続き</td></tr>
                  <tr className="border-b border-[#DEDAD2]"><td className="px-3 py-2 font-bold">HitoHana</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2">マイページから手続き</td></tr>
                  <tr className="border-b border-[#DEDAD2]"><td className="px-3 py-2 font-bold">AND PLANTS</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2">マイページから手続き</td></tr>
                  <tr className="border-b border-[#DEDAD2]"><td className="px-3 py-2 font-bold">LIFFT</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2">毎月19日までにメール（info@lifft.jp）で連絡（2026年10月17日公式確認）</td></tr>
                  <tr><td className="px-3 py-2 font-bold">タスハナ</td><td className="px-3 py-2">5回（出荷が前提）（2026年10月17日公式確認）</td><td className="px-3 py-2 text-[#2F5B43]">なし</td><td className="px-3 py-2">マイページから手続き</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">
              ※ 2026年5月時点の各社公式情報にもとづいています。ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <p className="text-sm text-[#4A4F49] mt-6 leading-relaxed">
              表のとおり、いつでも解約できることを重視する場合は、<a href="/services/medelu" className="text-[#2F5B43] underline">medelu</a>が適しています。bloomeeには初回4回の最低受け取り回数があるため、試しに始める場合はまずmedeluを利用し、継続を決めた段階でbloomeeに乗り換える方法をおすすめします。
            </p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              解約の前にサービスの見直しをご検討ください
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクをやめたいと感じる理由の多くは、<strong>プランやサービスの選び直し</strong>で解決できる可能性があります。飽きた場合は別のサービスへの乗り換え、費用に不満がある場合はmedeluのような送料無料のサービス、花が好みに合わない場合はHitoHanaのような色を選べるサービスをご検討ください。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              それでも満足できない場合は、無理に続ける必要はありません。スーパーで花を選ぶ、観葉植物に切り替えるなど、ご自身に合った方法で花のある暮らしをお楽しみください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors">
                費用を抑えたい方向け medeluを見る
              </a>
              <a href="/services/hitohana" className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors">
                色を選べる HitoHanaを見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline">
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
              <p className="text-xs text-gray-400">花のサブスクを比較し、ご自身に合ったサービス選びを支援します。</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年4月時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">&copy; 2026 flowerデリ All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}
