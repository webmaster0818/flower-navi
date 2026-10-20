"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクを母の日ギフトとして贈ることはできますか？",
    a: "はい、届け先をお母さんの住所にして申し込めば贈ることができます。bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます。AND PLANTSは、注文時の配送先をお母さんの住所、請求先をご自身の住所にします（2026年10月20日公式確認）。HitoHanaのギフトでの申し込み方法は、公式サイトでご確認ください。",
  },
  {
    q: "母の日ギフトにおすすめの予算はいくらですか？",
    a: "予算は、1回あたりの料金と贈る回数で決まります。bloomeeのお試しプランは1回1,365円（花代980円＋送料385円）で、最初の4回分のお届けが約束されているため、4回分の5,460円が目安です。AND PLANTSは1回1,980円（送料込み）で、解約はいつでも可能です（2026年10月20日公式確認）。HitoHanaでは1回あたり1,320〜4,950円（Lite〜LL）のプランから選べます。",
  },
  {
    q: "母の日に届くように日付を指定できますか？",
    a: "対応はサービスによって異なります。HitoHanaの定期便はお届け日を選んで申し込めます（選べない日もあります）。bloomeeのお試しプラン・グリーンプランは水〜金曜日のお届けで日付は指定できず、ベーシックプランは水〜日曜日の中から日付と時間帯を指定できます。AND PLANTSは金〜日曜日の中から配送日を選べます（2026年10月20日公式確認）。",
  },
  {
    q: "遠方の母に贈ることはできますか？",
    a: "はい、花のサブスクは配送先を指定できるため、離れて暮らすお母さんにも届けられます。ほとんどのサービスが日本全国（一部離島を除く）に対応しているため、遠方でも利用できます。事前にお届け先の住所をご確認ください。",
  },
  {
    q: "母がお花のサブスクを気に入らなかった場合、解約できますか？",
    a: "回数の条件がないサービス（medelu、AND PLANTS、HitoHanaなど）であれば、いつでも解約できます。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。贈り主が申し込んだ場合、停止・解約の手続きは贈り主が行います。",
  },
];

/* ─── Main Component ─── */
export default function MothersDayGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"母の日に贈るおすすめの花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/mothers-day/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"母の日に贈るおすすめの花のサブスク\",\"description\":\"母の日に贈る花のサブスクについて、おすすめのサービス・料金・選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/mothers-day/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクを母の日ギフトとして贈ることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、届け先をお母さんの住所にして申し込めば贈ることができます。bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます。AND PLANTSは、注文時の配送先をお母さんの住所、請求先をご自身の住所にします（2026年10月20日公式確認）。HitoHanaのギフトでの申し込み方法は、公式サイトでご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"母の日ギフトにおすすめの予算はいくらですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"予算は、1回あたりの料金と贈る回数で決まります。bloomeeのお試しプランは1回1,365円（花代980円＋送料385円）で、最初の4回分のお届けが約束されているため、4回分の5,460円が目安です。AND PLANTSは1回1,980円（送料込み）で、解約はいつでも可能です（2026年10月20日公式確認）。HitoHanaでは1回あたり1,320〜4,950円（Lite〜LL）のプランから選べます。\"}},{\"@type\":\"Question\",\"name\":\"母の日に届くように日付を指定できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"対応はサービスによって異なります。HitoHanaの定期便はお届け日を選んで申し込めます（選べない日もあります）。bloomeeのお試しプラン・グリーンプランは水〜金曜日のお届けで日付は指定できず、ベーシックプランは水〜日曜日の中から日付と時間帯を指定できます。AND PLANTSは金〜日曜日の中から配送日を選べます（2026年10月20日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"遠方の母に贈ることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、花のサブスクは配送先を指定できるため、離れて暮らすお母さんにも届けられます。ほとんどのサービスが日本全国（一部離島を除く）に対応しているため、遠方でも利用できます。事前にお届け先の住所をご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"母がお花のサブスクを気に入らなかった場合、解約できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"回数の条件がないサービス（medelu、AND PLANTS、HitoHanaなど）であれば、いつでも解約できます。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。贈り主が申し込んだ場合、停止・解約の手続きは贈り主が行います。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花のサブスクを母の日のプレゼントに｜おすすめギフト3選【2026年】</title>
      <meta name="description" content="花のサブスクを母の日のギフトとして贈る方法を解説します。当サイトでは、おすすめのサービス3選、予算別の選び方、注意点をご紹介します。毎月花が届くため、お母さんに長く楽しんでいただけます。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">母の日ギフト</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#C4877A] font-medium mb-3 tracking-wide">
              母の日ギフトガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクを母の日のプレゼントに<br className="hidden md:block" />
              おすすめギフト3選【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              2026年の母の日は5月10日（日）です。一度きりの花束に代えて、
              毎月花が届く花のサブスクを贈る方法があります。
              当サイトでは、長く楽しめるギフトとして、おすすめの花の定期便3選をご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">2026年の母の日</p>
                <p className="text-xl font-bold text-[#C4877A]">5月10日（日）</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ギフト予算</p>
                <p className="text-xl font-bold text-[#C4877A]">3,000円〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">おすすめ</p>
                <p className="text-xl font-bold text-[#C4877A]">3サービス</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">目次</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#why-subscription" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスクが母の日のギフトに適している理由</a></li>
                <li><a href="#recommend-3" className="hover:text-[#4A7C59] transition-colors">2. おすすめサービス3選</a></li>
                <li><a href="#budget" className="hover:text-[#4A7C59] transition-colors">3. 予算別のおすすめプラン</a></li>
                <li><a href="#cautions" className="hover:text-[#4A7C59] transition-colors">4. 贈る際の注意点</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">5. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Why Subscription for Mother's Day ─── */}
        <section id="why-subscription" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              花のサブスクが母の日のギフトに適している理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              母の日にカーネーションの花束を贈ることは一般的ですが、花束は1〜2週間で枯れてしまいます。花のサブスクであれば毎月新しい花が届くため、感謝の気持ちを長く伝え続けることができます。
            </p>

            <div className="space-y-4">
              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#333] mb-2">毎回異なる花が届く</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花のサブスクでは、毎回異なる種類の花が届きます。次にどの花が届くかを楽しみに待てる点は、一度きりのプレゼントにはない魅力です。季節の花が届くたびに、お子さんからの贈り物であることを思い出していただけます。
                </p>
              </div>
              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#333] mb-2">数か月にわたって楽しめる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  3か月分のギフトであれば、母の日の5月から7月まで花が届きます。花束が1〜2週間で終わるのに対し、サブスクのギフトは長期間にわたって花のある暮らしを楽しんでいただけます。6か月分や1年分のギフトであれば、さらに長く楽しんでいただけます。
                </p>
              </div>
              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#333] mb-2">受け取りの負担が少ない</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  ポスト投函に対応したサービスであれば、お母さんが不在でも受け取れます。重い花瓶付きのフラワーアレンジメントと異なり、コンパクトなパッケージで届くため、受け取りの負担もありません。届いた後は、水切りをして花瓶に生けるだけで飾れます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Recommended 3 Services ─── */}
        <section id="recommend-3" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              母の日ギフトにおすすめの花のサブスク3選
            </h2>

            <div className="space-y-6">
              {/* bloomee */}
              <div className="bg-white rounded-xl p-5 md:p-6 border-2 border-[#C4877A]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#C4877A] text-white text-xs font-bold rounded-lg px-2.5 py-1">おすすめ1</span>
                  <h3 className="text-base font-bold text-[#333]">bloomee（ブルーミー）</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、お母さんの住所に花を届けられ、送り主の名前を登録できます（2026年10月20日公式確認）。お試しプランは1回1,365円（花代980円＋送料385円）です。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">ギフト形式</p>
                    <p className="text-sm font-bold text-[#333]">プレゼントとして送る</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-sm font-bold text-[#4A7C59]">980円/回〜（送料別）</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">受け取り</p>
                    <p className="text-sm font-bold text-[#333]">ポスト投函</p>
                  </div>
                </div>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます。贈る期間が終わったら、贈り主が停止の手続きを行います（2026年10月20日公式確認）。</p>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-white rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1">おすすめ2</span>
                  <h3 className="text-base font-bold text-[#333]">AND PLANTS（アンドプランツ）</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  AND PLANTSは、プロのフローリストによるおしゃれなアレンジが特徴です。ボリュームのある花束が送料無料で届きます。注文時の配送先をお母さんの住所、請求先をご自身の住所にすると、お母さんのもとへ直接お届けできます。定期便はラッピングとメッセージカードに対応していません（2026年10月20日公式確認）。見栄えが良く、花がお好きなお母さんへのプレゼントに適しています。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">ギフト形式</p>
                    <p className="text-sm font-bold text-[#333]">届け先指定</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-sm font-bold text-[#4A7C59]">1,980円/回〜</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">花の本数</p>
                    <p className="text-sm font-bold text-[#333]">6〜8本（Standard）</p>
                  </div>
                </div>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">ボリュームのあるおしゃれなアレンジが届くため、見栄えのするプレゼントを贈りたい方におすすめです。送料無料で、回数の条件がない点も利点です。</p>
                </div>
              </div>

              {/* HitoHana */}
              <div className="bg-white rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1">おすすめ3</span>
                  <h3 className="text-base font-bold text-[#333]">HitoHana（ひとはな）</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  HitoHanaは、花の色やスタイルを選べる点が最大の特徴です。「お母さんはピンクが好きだから」「和風のアレンジが合いそう」といった細かい要望にも対応しています。メッセージカードを添えて届けられるため、感謝の気持ちを花と一緒に伝えられます。ボリュームもあり、ギフトにふさわしい華やかさがあります。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">ギフト対応</p>
                    <p className="text-sm font-bold text-[#333]">メッセージカード付</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-sm font-bold text-[#4A7C59]">1,320円/回〜</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">特徴</p>
                    <p className="text-sm font-bold text-[#333]">色指定が可能</p>
                  </div>
                </div>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">花の色やボリュームを選べるため、お母さんの好みに合わせて贈ることができます。メッセージカードに手書きで感謝の言葉を添えられる点も利点です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Budget Guide ─── */}
        <section id="budget" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              予算別のおすすめプラン
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              母の日のギフトの予算に合わせて、適したプランをお選びください。花のサブスクは1回分だけでなく、複数回分をまとめてギフトにすることもできます。
            </p>

            <div className="space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">3,000円以下のギフト</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-2">
                  気軽に贈りたい方に適しています。AND PLANTSは1回1,980円（送料込み）で、解約はいつでも可能なため、1回分から贈れます（2026年10月20日公式確認）。なお、bloomeeは最初の4回分のお届けが約束されているため、お試しプランでも4回分の5,460円が目安です。
                </p>
                <div className="bg-white rounded-lg p-3 border border-[#E5E5E5]">
                  <p className="text-xs text-[#4A7C59] font-medium">おすすめ：AND PLANTS（1回分 1,980円）</p>
                </div>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">3,000〜5,000円のギフト</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-2">
                  最も人気の価格帯です。AND PLANTSの1〜2回分（1,980〜3,960円）や、HitoHanaの2回分から選べます。ボリュームのある華やかなアレンジが届くため、お母さんの満足度も高い傾向があります。
                </p>
                <div className="bg-white rounded-lg p-3 border border-[#E5E5E5]">
                  <p className="text-xs text-[#4A7C59] font-medium">おすすめ：AND PLANTS 2回分 または HitoHana 2回分（色指定付き）</p>
                </div>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">5,000円以上のギフト</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-2">
                  しっかりと感謝を伝えたい方に適しています。HitoHanaの上位プラン3回分や、bloomeeのベーシックプラン4回分（花代2,180円＋送料550円×4回＝10,920円。最初の4回分のお届けが約束されています（2026年10月20日公式確認））をおすすめします。3か月にわたって花が届くため、母の日以降も楽しんでいただけます。LIFFTの花束プラン（3,300円）2〜3回分も、特別感のあるギフトになります。
                </p>
                <div className="bg-white rounded-lg p-3 border border-[#E5E5E5]">
                  <p className="text-xs text-[#4A7C59] font-medium">おすすめ：HitoHana 上位プラン3回分 または LIFFT 花束プラン2回分</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Cautions ─── */}
        <section id="cautions" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              花のサブスクを母の日に贈る際の注意点
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "注意 1",
                  title: "届け先の住所を事前に確認する",
                  text: "花の定期便は、配送先の住所を登録する必要があります。サプライズで贈る場合でも、正確な住所を事前にご確認ください。特に、マンション名や部屋番号の記載漏れは配送トラブルの原因になります。",
                },
                {
                  step: "注意 2",
                  title: "花粉アレルギーの有無を確認する",
                  text: "お母さんに花粉アレルギーがある場合は注意が必要です。多くのサービスでは届く花の種類を指定できないため、アレルギーの原因となる花が届く可能性があります。事前にカスタマーサポートへ相談するか、HitoHanaのように花の種類をある程度選べるサービスをご利用ください。",
                },
                {
                  step: "注意 3",
                  title: "受け取り方法を確認する（ポスト投函と宅配便）",
                  text: "お母さんが日中不在がちな場合は、ポスト投函に対応したサービス（bloomee、medeluなど）をおすすめします。宅配便タイプ（AND PLANTS、HitoHana、LIFFT）の場合は、在宅している曜日や時間帯を事前にご確認ください。置き配に対応しているサービスもあります。",
                },
                {
                  step: "注意 4",
                  title: "自動更新の有無を確認する",
                  text: "ギフトとして贈る場合は、定期便が継続する点にご注意ください。贈り主が申し込んだ定期便は、停止・解約の手続きを行うまで続きます。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止できます（2026年10月20日公式確認）。お母さんご自身の名義で申し込む場合は、解約方法もあわせてお伝えしておくことをおすすめします。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <div className="bg-[#C4877A] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              母の日の花のサブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#FFF0F0] transition-colors text-left"
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

        {/* 年間の花のギフトイベントカレンダー (Phase D) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#F0D0D0]">
              年間の花のギフトイベントカレンダー
            </h2>
            <p className="text-sm text-[#666] mb-6">
              母の日以外にも、花のサブスクをギフトとして贈れるイベントは年間を通じて多数あります。翌年以降も活用できるよう、年間の主なイベントを以下にまとめました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                <thead className="bg-[#F0D0D0] text-[#333]">
                  <tr>
                    <th className="px-3 py-2 text-left">月</th>
                    <th className="px-3 py-2 text-left">イベント</th>
                    <th className="px-3 py-2 text-left">推奨ギフト</th>
                    <th className="px-3 py-2 text-left">予算目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">1月</td><td className="px-3 py-2">お正月・新年祝い</td><td className="px-3 py-2">和風アレンジ・松竹梅</td><td className="px-3 py-2">2,000〜5,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">2月</td><td className="px-3 py-2">バレンタイン・結婚記念日</td><td className="px-3 py-2">赤バラ系・チューリップ</td><td className="px-3 py-2">3,000〜8,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">3月</td><td className="px-3 py-2">卒業・退職祝い・ホワイトデー</td><td className="px-3 py-2">スプリングフラワー</td><td className="px-3 py-2">3,000〜10,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">4月</td><td className="px-3 py-2">入学・入社祝い・新生活応援</td><td className="px-3 py-2">桜・パステル系</td><td className="px-3 py-2">3,000〜5,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8] bg-[#FFF5F5]"><td className="px-3 py-2 font-bold">5月</td><td className="px-3 py-2"><strong>母の日</strong> (第2日曜)</td><td className="px-3 py-2">カーネーション・あじさい</td><td className="px-3 py-2">3,000〜5,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">6月</td><td className="px-3 py-2"><strong>父の日</strong> (第3日曜)・ジューンブライド</td><td className="px-3 py-2">向日葵・グリーン系</td><td className="px-3 py-2">3,000〜5,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">7-8月</td><td className="px-3 py-2">お中元・夏休み</td><td className="px-3 py-2">向日葵・トロピカル</td><td className="px-3 py-2">3,000〜8,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">9月</td><td className="px-3 py-2"><strong>敬老の日</strong> (第3月曜)</td><td className="px-3 py-2">和風・落ち着いた色合い</td><td className="px-3 py-2">3,000〜5,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">10月</td><td className="px-3 py-2">ハロウィン・誕生日</td><td className="px-3 py-2">秋色・オレンジ系</td><td className="px-3 py-2">2,000〜5,000円</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-2 font-bold">11月</td><td className="px-3 py-2">七五三・お歳暮準備</td><td className="px-3 py-2">紅葉系アレンジ</td><td className="px-3 py-2">3,000〜5,000円</td></tr>
                  <tr><td className="px-3 py-2 font-bold">12月</td><td className="px-3 py-2">クリスマス・年末感謝</td><td className="px-3 py-2">クリスマスリース・赤系</td><td className="px-3 py-2">3,000〜10,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#888] mt-4">
              ※ 2026年の日程は、母の日が5月10日、父の日が6月21日、敬老の日が9月21日です。日程は毎年変動するため、最新情報をご確認ください。
            </p>
            <p className="text-sm text-[#666] mt-6 leading-relaxed">
              <strong>年間を通じた贈り方：</strong>花のサブスクをギフトとして年に複数回贈る「<strong>季節ギフトプラン</strong>」も人気があります。HitoHana・bloomee・LIFFTでは、継続的な贈呈について相談できます。
            </p>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              花のサブスクで母の日の感謝を長く届けられます
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              母の日に花を贈ることは一般的ですが、花のサブスクを贈ることで、<strong>毎月花が届く</strong>という新しい体験をプレゼントできます。一度きりの花束ではなく、数か月にわたって花が届く楽しみを、お母さんに味わっていただけます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              手軽な価格で贈る場合は<strong>bloomee</strong>（「プレゼントとして送る」で申し込み）、見栄えを重視する場合は<strong>AND PLANTS</strong>、お母さんの好みに合わせたい場合は<strong>HitoHana</strong>をおすすめします。2026年の母の日は5月10日です。余裕をもって準備することをおすすめします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#C4877A] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#B07068] transition-colors shadow-md"
              >
                bloomeeの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#C4877A] font-bold text-base px-8 py-4 rounded-full border-2 border-[#C4877A] hover:bg-[#FFF5F5] transition-colors"
              >
                AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/hitohana"
                className="inline-block bg-white text-[#C4877A] font-bold text-base px-8 py-4 rounded-full border-2 border-[#C4877A] hover:bg-[#FFF5F5] transition-colors"
              >
                HitoHanaの詳細を見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#666] hover:text-[#C4877A] transition-colors underline"
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
              bloomee・AND PLANTS・HitoHanaの料金は2026年10月14日に公式サイトで確認した値です。ご利用前に、公式サイトにて最新情報をご確認ください。
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
