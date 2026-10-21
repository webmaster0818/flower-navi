"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクは月いくらかかりますか？",
    a: "サービスやプランによって異なりますが、最も安い価格帯で月1,000円前後（タスハナ+actの月1回で送料込み990円、medelu Miniの隔週で1,496円）、一般的には月1,000〜3,000円程度です。送料が別途かかるサービス（bloomeeは385〜550円）と送料無料のサービス（medelu、AND PLANTS）があるため、送料込みの総額で比較することをおすすめします。",
  },
  {
    q: "花のサブスクはどのくらい続ける人が多いですか？",
    a: "当サイトでは、各社が公表した継続率を確認できませんでした（2026年10月21日時点）。続けられるか不安な場合は、まずは回数の条件がないサービスで1〜2ヶ月試すことをおすすめします。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。",
  },
  {
    q: "一人暮らしでも花のサブスクは使えますか？",
    a: "一人暮らしの方にもおすすめです。ポスト投函に対応したサービスであれば不在時でも受け取れ、少量のプランを選べば場所も取りません。部屋に花を飾ることで空間の印象が明るくなり、帰宅時の気分も変わります。一人暮らしの方には、medelu ANYROOMコースやタスハナが人気です。",
  },
  {
    q: "花のサブスクとお花屋さんでは、どちらが割安ですか？",
    a: "費用面では、サブスクのほうが割安になるケースが多くあります。花屋のミニブーケは800〜1,500円程度ですが、サブスクにはmedelu Mini（748円・送料込み・3〜4本）のように1回1,000円以下のプランもあります。一方、特定の花を指定して購入したい場合は、花屋のほうが自由度が高くなります。",
  },
  {
    q: "花のアレルギーがある場合でも利用できますか？",
    a: "花粉アレルギーの方は注意が必要です。多くのサービスでは届く花の種類を事前に指定できないため、アレルギーの原因となる花が届く可能性があります。事前にカスタマーサポートへ相談すると、特定の花を避けて配送してもらえるサービスもあります。花粉が少ない品種を中心に扱うサービスを選ぶことも一つの方法です。",
  },
];

/* ─── Main Component ─── */
export default function MeritDemeritGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスクのメリット・デメリット\",\"item\":\"https://ohana-delivery.com/guides/merit-demerit/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクのメリット・デメリット\",\"description\":\"花のサブスクのメリット・デメリットを解説します。料金・評判・選び方もあわせて説明します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/merit-demerit/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクは月いくらかかりますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サービスやプランによって異なりますが、最も安い価格帯で月1,000円前後（タスハナ+actの月1回で送料込み990円、medelu Miniの隔週で1,496円）、一般的には月1,000〜3,000円程度です。送料が別途かかるサービス（bloomeeは385〜550円）と送料無料のサービス（medelu、AND PLANTS）があるため、送料込みの総額で比較することをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクはどのくらい続ける人が多いですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"当サイトでは、各社が公表した継続率を確認できませんでした（2026年10月21日時点）。続けられるか不安な場合は、まずは回数の条件がないサービスで1〜2ヶ月試すことをおすすめします。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"一人暮らしでも花のサブスクは使えますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"一人暮らしの方にもおすすめです。ポスト投函に対応したサービスであれば不在時でも受け取れ、少量のプランを選べば場所も取りません。部屋に花を飾ることで空間の印象が明るくなり、帰宅時の気分も変わります。一人暮らしの方には、medelu ANYROOMコースやタスハナが人気です。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクとお花屋さんでは、どちらが割安ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"費用面では、サブスクのほうが割安になるケースが多くあります。花屋のミニブーケは800〜1,500円程度ですが、サブスクにはmedelu Mini（748円・送料込み・3〜4本）のように1回1,000円以下のプランもあります。一方、特定の花を指定して購入したい場合は、花屋のほうが自由度が高くなります。\"}},{\"@type\":\"Question\",\"name\":\"花のアレルギーがある場合でも利用できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花粉アレルギーの方は注意が必要です。多くのサービスでは届く花の種類を事前に指定できないため、アレルギーの原因となる花が届く可能性があります。事前にカスタマーサポートへ相談すると、特定の花を避けて配送してもらえるサービスもあります。花粉が少ない品種を中心に扱うサービスを選ぶことも一つの方法です。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花のサブスクのメリット・デメリット7選｜始める前に確認すべき点</title>
      <meta name="description" content="当サイトでは、花のサブスクのメリット7つとデメリット5つを解説します。お花の定期便を始める前に確認すべき点や、おすすめできる方・おすすめしない方の特徴もご紹介します。" />

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
                <li><span className="text-[#333] font-medium">メリット・デメリット</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              メリット・デメリット解説
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクのメリット・デメリット7選<br className="hidden md:block" />
              始める前に確認すべき点
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              お花の定期便（花のサブスク）を検討中の方に向けて、当サイトではメリット7つとデメリット5つを解説します。
              ご自身に合うかどうか、始める前の判断材料としてご活用ください。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">目次</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#merits" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスクのメリット7つ</a></li>
                <li><a href="#demerits" className="hover:text-[#4A7C59] transition-colors">2. 花のサブスクのデメリット5つ</a></li>
                <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">3. おすすめできる方・おすすめしない方</a></li>
                <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">4. 各サービスのメリット・デメリット比較</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">5. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Merits ─── */}
        <section id="merits" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクのメリット7つ
            </h2>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "花を選ぶ手間がなく、忙しい方でも続けられる",
                  text: "花屋に行く時間がなくても、専門スタッフが選んだ旬の花が定期的に届きます。通勤途中に花屋に寄る余裕がない方や、近くに花屋がない方にとって大きなメリットです。一度申し込めば毎回の注文は不要で自動的に届くため、忙しい方ほど利便性を実感しやすいサービスです。",
                },
                {
                  num: "2",
                  title: "フローリストによるデザイン性の高いアレンジ",
                  text: "花のサブスクでは、フローリストが季節の花を組み合わせてアレンジします。自分では選ばないような色や花の組み合わせを楽しめる点は、サブスクならではの魅力です。花の知識がなくても、花瓶に飾るだけで部屋のインテリアとして見栄えよく整います。",
                },
                {
                  num: "3",
                  title: "花屋で購入するより費用を抑えやすい",
                  text: "花屋でミニブーケを購入すると1本あたり300〜500円ですが、medeluは1本約187〜249円（Mini 748円・3〜4本）、タスハナは約220円（+act 660円・3本以上、送料別）です。送料無料のサービスも多く、総額で比較すると花屋より経済的です。",
                },
                {
                  num: "4",
                  title: "季節の移り変わりを花で感じられる",
                  text: "春はチューリップやスイートピー、夏はひまわり、秋はダリアやコスモス、冬はアネモネやラナンキュラスなど、毎回異なる花が届くため、部屋にいながら季節の移り変わりを感じられます。花の名前や特徴を覚える楽しみも生まれ、暮らしに彩りが加わります。",
                },
                {
                  num: "5",
                  title: "癒やし効果・ストレス軽減に関する研究結果がある",
                  text: "千葉大学の研究では、生花を部屋に飾ることでストレスホルモン（コルチゾール）が減少し、リラックス効果があることが実証されています。在宅勤務のデスクや寝室に花を飾ることで、仕事の疲れやストレスの軽減が期待できます。花の色や香りが心身に良い影響を与えることは、科学的にも裏付けられています。",
                },
                {
                  num: "6",
                  title: "部屋のインテリアの印象が向上する",
                  text: "生花を飾ることで、部屋の雰囲気は大きく変わります。特別な飾り付けをしなくても、テーブルや窓辺に小さな花瓶を置くだけで、整った空間になります。来客時にも良い印象を与えられます。インテリアに自信がない方でも、花を飾ることで部屋が洗練された印象になります。",
                },
                {
                  num: "7",
                  title: "ギフトとしても利用できる",
                  text: "花のサブスクは、届け先を相手の住所にして申し込めば、母の日や誕生日のプレゼントにも利用できます。一度きりの花束ではなく、数ヶ月にわたって定期的に花が届く点が特徴です。たとえばbloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">{item.num}</span>
                    <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed pl-8">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Demerits ─── */}
        <section id="demerits" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#E0B8B8]">
              花のサブスクのデメリット5つ
            </h2>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "届く花の種類を自分で選べない",
                  text: "ほとんどのサービスでは、届く花の種類はフローリストに一任する形です。「バラだけがほしい」「白い花だけがいい」といった細かい要望には対応していません。ただし、HitoHanaでは色の指定が可能で、一部のサービスでは避けたい花材を指定できる場合もあります。花をすべて自分で選びたい方には適していません。",
                },
                {
                  num: "2",
                  title: "夏場は花が傷みやすい",
                  text: "生花は温度の影響を受けやすく、特に夏場（7〜8月）は輸送中やポスト内で花が傷むリスクが高まります。ポスト投函の場合、ポスト内の温度が40度以上になることもあり、届いた時点でしおれている場合があります。対策としては、クール便に対応したサービスを選ぶか、宅配便で直接受け取る方法があります。品質保証制度がある各サービスでは、傷んだ花の再送にも対応しています。",
                },
                {
                  num: "3",
                  title: "最低受け取り回数の条件があるサービスがある",
                  text: "bloomeeには4回の最低受け取り回数があり、途中で解約すると残り回数分の料金が発生します。「お試しで1回だけ」という利用ができないため、初めての方は注意が必要です。一方、medelu、AND PLANTS、LIFFTには回数の条件がなく、いつでも解約できます。タスハナは5回以上の出荷が前提で、5回未満の解約は原則としてできません（2026年10月17日公式確認）。初めて試す場合は、回数の条件がないサービスから始めることをおすすめします。",
                },
                {
                  num: "4",
                  title: "不在時の受け取りに工夫が必要",
                  text: "ポスト投函に対応したサービスであれば不在時でも受け取れますが、宅配便タイプ（AND PLANTS、LIFFTなど）は在宅が必要です。不在が多い方は、ポスト投函に対応したサービスか、配送日時を指定できるサービスをご利用ください。置き配に対応しているサービスもあるため、事前にご確認ください。",
                },
                {
                  num: "5",
                  title: "花粉アレルギーのリスク",
                  text: "花粉アレルギーの方は、特にユリやカスミソウなど花粉が多い花が届いた場合に、アレルギー症状が出る可能性があります。事前にカスタマーサポートへ相談すれば、特定の花を避けて配送してもらえるサービスもありますが、完全に対応することは難しいのが現状です。花粉が出にくい品種を中心に扱うサービスを選ぶか、届いた花から花粉を取り除く対処が必要です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">{item.num}</span>
                    <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed pl-8">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommend / Not Recommend ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              おすすめできる方・おすすめしない方
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-3">おすすめできる方</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>忙しくて花屋に行く時間がない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>花の知識がなくても見栄えよく飾りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>部屋のインテリアにアクセントがほしい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>季節の花との出会いを楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>日々のストレスを和らげたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>費用を抑えて花のある暮らしを始めたい方</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#C4877A] mb-3">おすすめしない方</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花の種類を自分で細かく選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花のお手入れをまったくしたくない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>月500円でも固定費を増やしたくない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>重度の花粉アレルギーがある方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>ペットが花を食べてしまうおそれがある方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスのメリット・デメリット比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              当サイトでは、主要5サービスのメリット・デメリットを一覧で比較しています。重視する点に合わせてサービスをお選びください。
            </p>

            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">サービス</th>
                    <th>主なメリット</th>
                    <th>主なデメリット</th>
                    <th className="rounded-tr-lg">適している方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">bloomee</td>
                    <td>花代980円〜、初心者向け、ポスト投函</td>
                    <td>最低4回の受け取りが必要、送料別、お試しは4本以上</td>
                    <td>手軽に始めたい初心者</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">medelu</td>
                    <td>送料無料、748円〜、回数の条件なし</td>
                    <td>花の本数が少なめ、知名度が低い</td>
                    <td>費用を重視する方</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">AND PLANTS</td>
                    <td>送料無料、デザイン性が高い、ボリュームが多い</td>
                    <td>最安1,980円とやや高め、宅配便のみ</td>
                    <td>デザイン重視の方</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">タスハナ</td>
                    <td>660円〜（送料別）、ロスフラワー活用、ポスト投函</td>
                    <td>送料別330円、5回の出荷が前提</td>
                    <td>費用を抑えて試したい方</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">LIFFT</td>
                    <td>提携農園から直送（2026年10月17日公式確認）で鮮度が高い、Journal付き</td>
                    <td>スタンダードは3,300円/月・月1回。ライト（1,480円/回・2週間または4週間に1回）は本州の一部地域のみ（2026年10月21日公式確認）</td>
                    <td>品質にこだわる方</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              花のサブスクのメリットを生かすには選び方が重要です
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクには、「手間をかけずにフローリストのアレンジが届く」「費用を抑えやすい」「癒やし効果がある」など多くのメリットがあります。一方で、「花の種類を選べない」「夏場に品質が低下するリスクがある」「最低受け取り回数の条件がある」といったデメリットもあります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              重要なのは、ご自身のライフスタイルや重視する点に合ったサービスを選ぶことです。費用を重視する場合は<strong>medelu</strong>、手軽さを重視する場合は<strong>bloomee</strong>、デザインを重視する場合は<strong>AND PLANTS</strong>、品質を重視する場合は<strong>LIFFT</strong>をおすすめします。まずは回数の条件がないサービスからお試しください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                おすすめサービスを比較する
              </a>
              <a
                href="/guides/beginner"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                初心者ガイドを読む
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
        <section className="py-10 bg-[#FBF8F4]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-[#333] mb-4">サービスごとのメリット・デメリットと口コミ</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li><a href="/services/bloomee/" className="text-[#4A7C59] underline">ブルーミー（bloomee）のメリット・デメリットと口コミ</a></li>
              <li><a href="/services/medelu/" className="text-[#4A7C59] underline">メデル（medelu）のメリット・デメリットと口コミ</a></li>
              <li><a href="/services/hanameku/" className="text-[#4A7C59] underline">ハナメク（hanameku）のメリット・デメリットと口コミ</a></li>
              <li><a href="/services/and-plants/" className="text-[#4A7C59] underline">アンドプランツ（AND PLANTS）のメリット・デメリットと口コミ</a></li>
            </ul>
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
