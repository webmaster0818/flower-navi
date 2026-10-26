"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "仏花に向かない花はありますか？",
    a: "バラなどトゲのある花は仏花には不向きとされています。また、毒のある花（彼岸花、スズラン等）や香りが強すぎる花も避けるのが一般的です。ただし、故人が好んだ花であれば、トゲを取り除いて供える場合もあります。宗派や地域の慣習によって異なるため、ご不明な点は菩提寺にご確認ください。",
  },
  {
    q: "月命日に合わせて届けてもらえますか？",
    a: "定期便サービスの多くは「毎週」「隔週」「月1回」といった配送頻度の選択が可能ですが、特定の日付指定ができるサービスは限られます。月命日に合わせたい場合は、月1回配送を選び、届いた花を月命日まで涼しい場所で保管する方法が現実的です。medeluやbloomeeにはスキップ機能があるため、配送のタイミングを調整しやすくなっています。",
  },
  {
    q: "仏花は1対（2束）必要ですか？",
    a: "正式には仏壇の左右に1束ずつ、計2束（1対）を供えるのが基本です。ただし、小さな仏壇や現代的な仏壇では1束だけ飾る方も増えています。定期便で届く花を1束とし、もう1束を近くの花屋やスーパーで購入して補う方法もあります。無理のない範囲で供えることが大切です。",
  },
  {
    q: "定期便の花はそのまま仏壇に供えられますか？",
    a: "定期便で届く花は、基本的に花瓶にそのまま飾る用途のアレンジです。仏花として供える場合は、届いた花の中から仏花に適したもの（菊、カーネーション、スターチスなど）を選び、仏壇用の花立に合わせて茎の長さを切りそろえてお供えください。medeluのNATURALコースやANYROOMコースは落ち着いた色合いの花が多く、仏花にもアレンジしやすい内容です。",
  },
  {
    q: "夏場でも仏花は長持ちしますか？",
    a: "夏場は気温が高く花が傷みやすいため、通常より花持ちが短くなります。対策としては、こまめな水替え（毎日が理想）、切り花延命剤の使用、エアコンの風が直接当たらない涼しい場所に仏壇を置くことが有効です。また、菊やスターチスなど、暑さに比較的強い花を選ぶことも効果的です。定期便であれば新しい花が定期的に届くため、夏場でも新鮮な花をお供えできます。",
  },
  {
    q: "お盆やお彼岸用の特別な仏花は届きますか？",
    a: "一般的な花の定期便は、お盆・お彼岸専用の仏花アレンジには対応していません。ただし、通常の定期便で届く花を仏花としてアレンジすることは可能です。お盆やお彼岸に特別な仏花が必要な場合は、通常の定期便に加えて花屋やオンラインショップで仏花セットを別途購入することをおすすめします。",
  },
];

/* ─── Main Component ─── */
export default function ButsudanGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"仏壇花の定期便・サブスクおすすめ\",\"item\":\"https://ohana-delivery.com/guides/butsudan/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"仏壇花の定期便・サブスクおすすめ\",\"description\":\"仏壇花の定期便・サブスクのおすすめについて、料金・評判・選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-26T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/butsudan/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"仏花に向かない花はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"バラなどトゲのある花は仏花には不向きとされています。また、毒のある花（彼岸花、スズラン等）や香りが強すぎる花も避けるのが一般的です。ただし、故人が好んだ花であれば、トゲを取り除いて供える場合もあります。宗派や地域の慣習によって異なるため、ご不明な点は菩提寺にご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"月命日に合わせて届けてもらえますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"定期便サービスの多くは「毎週」「隔週」「月1回」といった配送頻度の選択が可能ですが、特定の日付指定ができるサービスは限られます。月命日に合わせたい場合は、月1回配送を選び、届いた花を月命日まで涼しい場所で保管する方法が現実的です。medeluやbloomeeにはスキップ機能があるため、配送のタイミングを調整しやすくなっています。\"}},{\"@type\":\"Question\",\"name\":\"仏花は1対（2束）必要ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"正式には仏壇の左右に1束ずつ、計2束（1対）を供えるのが基本です。ただし、小さな仏壇や現代的な仏壇では1束だけ飾る方も増えています。定期便で届く花を1束とし、もう1束を近くの花屋やスーパーで購入して補う方法もあります。無理のない範囲で供えることが大切です。\"}},{\"@type\":\"Question\",\"name\":\"定期便の花はそのまま仏壇に供えられますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"定期便で届く花は、基本的に花瓶にそのまま飾る用途のアレンジです。仏花として供える場合は、届いた花の中から仏花に適したもの（菊、カーネーション、スターチスなど）を選び、仏壇用の花立に合わせて茎の長さを切りそろえてお供えください。medeluのNATURALコースやANYROOMコースは落ち着いた色合いの花が多く、仏花にもアレンジしやすい内容です。\"}},{\"@type\":\"Question\",\"name\":\"夏場でも仏花は長持ちしますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"夏場は気温が高く花が傷みやすいため、通常より花持ちが短くなります。対策としては、こまめな水替え（毎日が理想）、切り花延命剤の使用、エアコンの風が直接当たらない涼しい場所に仏壇を置くことが有効です。また、菊やスターチスなど、暑さに比較的強い花を選ぶことも効果的です。定期便であれば新しい花が定期的に届くため、夏場でも新鮮な花をお供えできます。\"}},{\"@type\":\"Question\",\"name\":\"お盆やお彼岸用の特別な仏花は届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"一般的な花の定期便は、お盆・お彼岸専用の仏花アレンジには対応していません。ただし、通常の定期便で届く花を仏花としてアレンジすることは可能です。お盆やお彼岸に特別な仏花が必要な場合は、通常の定期便に加えて花屋やオンラインショップで仏花セットを別途購入することをおすすめします。\"}}]}" }} />
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
                  <span className="text-[#4A4F49]">ガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#1F2420] font-medium">仏花の定期便おすすめ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/butsudan/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              仏花ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              仏花の定期便おすすめ3選<br className="hidden md:block" />
              仏壇の花を定期的に届けるサービス【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              仏花の定期便は、仏壇にお供えする花を定期的に自宅へ届けるサービスです。
              忙しい日々の中でも、新鮮な花を仏壇に供えることができます。
              当サイトでは、仏花に適した定期便サービスを選び、ご紹介しています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">おすすめ</p>
                <p className="text-xl font-bold text-[#2F5B43]">3サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最安価格</p>
                <p className="text-xl font-bold text-[#2F5B43]">748円/回〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">送料無料あり</p>
                <p className="text-xl font-bold text-[#2F5B43]">medelu</p>
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
                  <li><a href="#what-is" className="hover:text-[#2F5B43] transition-colors">1. 仏花の定期便の概要</a></li>
                  <li><a href="#flowers" className="hover:text-[#2F5B43] transition-colors">2. 仏花に適した花の種類</a></li>
                  <li><a href="#how-to-choose" className="hover:text-[#2F5B43] transition-colors">3. 仏花の定期便を選ぶ4つのポイント</a></li>
                  <li><a href="#comparison" className="hover:text-[#2F5B43] transition-colors">4. 仏花におすすめの定期便サービス3選</a></li>
                  <li><a href="#tips" className="hover:text-[#2F5B43] transition-colors">5. 仏花を長持ちさせる5つの方法</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">6. 仏花の定期便に関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── What is 仏花の定期便 ─── */}
        <section id="what-is" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              仏花の定期便の概要
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              仏花の定期便とは、仏壇にお供えする花を定期的に自宅まで届けるサービスです。花屋やスーパーへ買いに行く手間が省け、常に新鮮な花を仏壇にお供えできる点が最大の利点です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              特に、ご高齢で外出が難しい方、仕事が忙しく花屋に立ち寄る時間がない方、遠方に住んでいてご実家の仏壇の花を気にかけている方などに利用されています。近年は花のサブスクリプションサービスの普及に伴い、仏花にも対応したサービスが増えています。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
              一般的な花の定期便サービスでは仏花専用のプランを設けていないことが多いものの、届いた花の中から仏花に適した花を選んでお供えする、落ち着いた色味のコースを選択するといった方法で、仏花としても十分に活用できます。
            </p>
            <div className="bg-[#F6F4EF] rounded-md p-5 mt-6">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">仏花の定期便をおすすめする方</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>忙しくて花屋に行く時間がない方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>ご高齢で外出が大変な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>いつも新鮮な花を仏壇に供えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>仏花選びに迷う方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F5B43] mt-0.5 shrink-0">--</span>
                  <span>遠方のご実家に花を届けたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Suitable Flowers ─── */}
        <section id="flowers" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              仏花に適した花の種類
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              当サイトでは、伝統的に仏花に使われる花の種類と、その理由をご紹介します。仏花選びの参考としてご活用ください。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  name: "菊（きく）",
                  desc: "仏花によく使われる花です。白・黄色・紫など色の種類も豊富で、宗派を問わず使えます。小菊やスプレー菊も仏花によく使われます。",
                },
                {
                  name: "カーネーション",
                  desc: "菊に次いで仏花に多く使われる花です。花持ちが良く、白やピンクなどの柔らかい色合いが仏壇によく合います。トゲがないため扱いやすく、一年を通して安定的に入手できる点も利点です。",
                },
                {
                  name: "スターチス",
                  desc: "ドライフラワーにできるほど花持ちが良い点が特徴です。紫・ピンク・白など色も豊富で、仏花のアクセントとして重宝します。乾燥しても色が褪せにくいため、長くお供えしたい場合にも適しています。",
                },
                {
                  name: "百合（ゆり）",
                  desc: "格式の高い印象があり、法事や葬儀でもよく使われます。白い百合は清楚で厳かな雰囲気を演出します。ただし花粉が多いため、花粉を取り除いてからお供えすることで、仏壇や仏具が汚れにくくなります。",
                },
                {
                  name: "りんどう",
                  desc: "秋の仏花としてよく使われる花です。紫や青の花が仏壇に落ち着いた雰囲気を添えます。花持ちも比較的良く、秋のお彼岸の時期に適しています。",
                },
                {
                  name: "トルコキキョウ",
                  desc: "上品で華やかな見た目が特徴です。白や紫のトルコキキョウは仏花にもよく合います。",
                },
              ].map((flower, i) => (
                <div key={i} className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                  <h3 className="text-base font-bold text-[#2F5B43] mb-2">{flower.name}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{flower.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#F7F1EC] rounded-md p-5 mt-6 border border-[#D9BFB1]">
              <h3 className="text-sm font-bold text-[#D9BFB1] mb-2">仏花として避けたほうがよい花</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                トゲのある花（バラなど）、毒のある花（彼岸花、スズラン、水仙など）、香りが強すぎる花は、一般的に仏花には不向きとされています。ただし、故人がバラを好んでいた場合はトゲを取って供えるなど、心を込めてお供えすることが最も大切です。
              </p>
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              仏花の定期便を選ぶ4つのポイント
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              仏花用に花の定期便を利用する場合、通常のインテリア用途とは選び方が一部異なります。次の4つのポイントを踏まえ、ご自身の状況に合ったサービスをお選びください。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "配送頻度 ─ 仏花の交換サイクルに合わせる",
                  text: "花が持つ日数は、花の種類・室温・お手入れによって異なります。夏場は花が傷みやすいため、花の状態を見て交換してください。毎週と隔週の配送を選べるサービスであれば、交換の間隔に合わせて頻度を選べます。月命日や法事に合わせたい場合は、スキップ機能のあるサービスが便利です。",
                },
                {
                  num: "2",
                  title: "花持ちの良さ ─ 鮮度と品質が重要",
                  text: "仏花は長く飾るものであるため、花持ちの良さは重要な判断基準です。品質保証制度があるサービスを選ぶと、傷んだ花が届いた場合にも対応を受けられます。",
                },
                {
                  num: "3",
                  title: "花の色味・スタイル ─ 落ち着いた色合いを選ぶ",
                  text: "仏花には白・黄色・紫・ピンクなど、落ち着いた色合いの花が適しています。華やかすぎるアレンジや原色の花は仏壇には不向きな場合があります。medeluのNATURALコースやANYROOMコースのように、ナチュラルで落ち着いた雰囲気のコースを選ぶと、仏花に適した花が届きやすくなります。",
                },
                {
                  num: "4",
                  title: "価格と送料 ─ 継続しやすい費用を確認する",
                  text: "仏花は継続的にお供えするものであるため、長く続けられる価格帯のサービスを選ぶことが大切です。花代だけでなく、送料も含めた総額で比較してください。medeluは送料無料で748円からと手頃な価格のため、長期的な費用を抑えやすいサービスです。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
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

        {/* ─── Service Comparison ─── */}
        <section id="comparison" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              仏花におすすめの定期便サービス3選
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              当サイトでは、仏花に適した花の定期便サービスを3つ選んでいます。価格・花持ち・配送方法などを比較し、ご自身に合ったサービス選びにお役立てください。
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              <a href="/compare/cheap/" className="inline-block bg-[#EDF3EE] text-[#2F5B43] font-bold rounded-lg px-4 py-2 hover:bg-[#dfeae1] transition">→ 安い花のサブスク比較ランキングを見る</a>
              <a href="/guides/obon/" className="inline-block bg-[#EDF3EE] text-[#2F5B43] font-bold rounded-lg px-4 py-2 hover:bg-[#dfeae1] transition">→ お盆・新盆のお供えの花を用意する方法</a>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">比較項目</th>
                    <th className="px-4 py-3 text-center font-medium">bloomee</th>
                    <th className="px-4 py-3 text-center font-medium">medelu</th>
                    <th className="px-4 py-3 text-center font-medium">花の定期便<br />(日本総合園芸)</th>
                  </tr>
                </thead>
                <tbody className="text-[#4A4F49]">
                  <tr className="border-b border-[#DEDAD2]">
                    <td className="px-4 py-3 font-medium text-[#1F2420]">最安価格</td>
                    <td className="px-4 py-3 text-center">980円/回</td>
                    <td className="px-4 py-3 text-center font-bold text-[#2F5B43]">748円/回</td>
                    <td className="px-4 py-3 text-center">1,298円/回〜（自社配達便。宅配便は2,530円/回〜）（2026年10月17日公式確認）</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2] bg-[#F6F4EF]">
                    <td className="px-4 py-3 font-medium text-[#1F2420]">送料</td>
                    <td className="px-4 py-3 text-center">385円</td>
                    <td className="px-4 py-3 text-center font-bold text-[#2F5B43]">無料</td>
                    <td className="px-4 py-3 text-center">料金に含む（お届け方法で料金が異なる）（2026年10月17日公式確認）</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2]">
                    <td className="px-4 py-3 font-medium text-[#1F2420]">配送方法</td>
                    <td className="px-4 py-3 text-center">ポスト投函</td>
                    <td className="px-4 py-3 text-center">ポスト投函</td>
                    <td className="px-4 py-3 text-center">宅配便</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2] bg-[#F6F4EF]">
                    <td className="px-4 py-3 font-medium text-[#1F2420]">配送頻度</td>
                    <td className="px-4 py-3 text-center">毎週/隔週</td>
                    <td className="px-4 py-3 text-center">毎週/隔週</td>
                    <td className="px-4 py-3 text-center">月3回（切り花）・月1〜2回・毎週/隔週などコースにより異なる（2026年10月17日公式確認）</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2]">
                    <td className="px-4 py-3 font-medium text-[#1F2420]">品質保証</td>
                    <td className="px-4 py-3 text-center">あり</td>
                    <td className="px-4 py-3 text-center">あり</td>
                    <td className="px-4 py-3 text-center">あり</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2] bg-[#F6F4EF]">
                    <td className="px-4 py-3 font-medium text-[#1F2420]">回数の条件</td>
                    <td className="px-4 py-3 text-center">4回</td>
                    <td className="px-4 py-3 text-center font-bold text-[#2F5B43]">なし</td>
                    <td className="px-4 py-3 text-center font-bold text-[#2F5B43]">なし</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1F2420]">仏花への適性</td>
                    <td className="px-4 py-3 text-center">適している</td>
                    <td className="px-4 py-3 text-center font-bold text-[#2F5B43]">特に適している</td>
                    <td className="px-4 py-3 text-center font-bold text-[#2F5B43]">特に適している</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Service Details */}
            <div className="space-y-6">
              {/* bloomee */}
              <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                <div className="bg-[#F6F4EF] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white text-[#2F5B43] text-sm font-bold">1</span>
                    <div>
                      <h3 className="text-base font-bold text-[#1F2420]">bloomee（ブルーミー）</h3>
                      <p className="text-xs text-[#4A4F49]">ポスト投函で手軽に受け取れる、利用者の多いサービス</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                    bloomeeは公式サイトで「お花のお届け実績3,000万本以上（自社調べ）」と表記している花のサブスクです。お試しプランは980円からと手頃な価格で、ポスト投函で届くため不在時でも受け取れます。季節の花が届きます（最初の4回は受け取りが必要です）。
                  </p>
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                    仏花として利用する場合、届く花は花屋がアレンジしたものであるため、菊やカーネーションなど仏花に適した花が含まれることもあります。ただし仏花専用のコースはないため、届いた花から仏花に適したものを選んでお供えする形になります。ポスト投函の手軽さを重視する方におすすめです。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">お試しプラン980円/回</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">送料385円</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">ポスト投函</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">品質保証あり</span>
                  </div>
                  <a
                    href="/services/bloomee"
                    className="inline-block text-sm text-[#2F5B43] font-medium hover:underline"
                  >
                    bloomeeの詳細レビューを見る →
                  </a>
                </div>
              </div>

              {/* medelu */}
              <div className="bg-white rounded-md border-2 border-[#2F5B43] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#2F5B43] text-white text-xs px-3 py-1 rounded-bl-lg">
                  仏花に最もおすすめ
                </div>
                <div className="bg-[#EDF1EC] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white text-[#2F5B43] text-sm font-bold">2</span>
                    <div>
                      <h3 className="text-base font-bold text-[#1F2420]">medelu（メデル）</h3>
                      <p className="text-xs text-[#4A4F49]">送料無料・748円からの低価格。NATURAL/ANYROOMコースが仏花に適しています</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                    medeluは、生産者と市場から直接仕入れた花を届けるサービスです（2026年10月21日公式確認）。748円から・送料無料で利用できます。仏花として利用する場合は、特に「ANYROOMコース」と「NATURALコース」をおすすめします。
                  </p>
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                    ANYROOMコースは、どんなインテリアにもなじむ色とりどりの花が届きます（2026年10月17日公式確認）。NATURALコースはナチュラルな雰囲気の花が中心で、仏壇に飾っても違和感のない上品な花が届きます。生産者と市場から直接仕入れた花を届けると案内しています（2026年10月21日公式確認）。回数の条件がないため、試しに始めやすいサービスです。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">748円/回〜</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">送料無料</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">回数の条件なし</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">NATURAL/ANYROOMコース推奨</span>
                  </div>
                  <a
                    href="/services/medelu"
                    className="inline-block text-sm text-[#2F5B43] font-medium hover:underline"
                  >
                    medeluの詳細レビューを見る →
                  </a>
                </div>
              </div>

              {/* 日本総合園芸 */}
              <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                <div className="bg-[#F6F4EF] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white text-[#2F5B43] text-sm font-bold">3</span>
                    <div>
                      <h3 className="text-base font-bold text-[#1F2420]">花の定期便（日本総合園芸）</h3>
                      <p className="text-xs text-[#4A4F49]">花材が届き、自分で生けて飾るコースが中心の定期便</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                    日本総合園芸が運営する「花の定期便」は、40コース以上（公式表記）から選べる定期便です。花瓶生け・水盤生け・アレンジメント花材などのコースでは花材が届き、自分で生けて飾ります。完成したアレンジメントやブーケが届くコース（季節のブーケコースなど）もあります（2026年10月23日公式確認）。切り花の花瓶・水盤バラエティーコースは1回1,298円（自社配達便・月3回。宅配便は2,530円）です（2026年10月17日公式確認）。
                  </p>
                  <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4">
                    お届けは、関西近郊の自社配達便と、そのほかの対象エリアの宅配便から選べます。仏花として飾る場合は、届いた花材を仏壇の花立ての大きさに合わせて切りそろえて生けてください。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">1,298円/回〜（自社配達便）（2026年10月17日公式確認）</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">花材が届く</span>
                    <span className="text-xs bg-[#EDF1EC] text-[#2F5B43] px-3 py-1 rounded-md">自社配達便・宅配便</span>
                  </div>
                  <a
                    href="/services/nihon-sogo-engei"
                    className="inline-block text-sm text-[#2F5B43] font-medium hover:underline"
                  >
                    花の定期便の詳細レビューを見る →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tips for Longevity ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              仏花を長持ちさせる5つの方法
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              定期便で届いた花を長く美しく保つため、次の5つのポイントの実践をおすすめします。適切なお手入れによって、花の寿命は大きく変わります。
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "ポイント 1",
                  title: "水切りをしてから飾る",
                  text: "届いた花は、まず茎の根元を水の中で斜めにカット（水切り）してください。空気が入った導管を切り落とすことで水の吸い上げが良くなり、花持ちが大きく向上します。切れ味の良いハサミやカッターをご使用ください。",
                },
                {
                  step: "ポイント 2",
                  title: "こまめに水を替える",
                  text: "花立（花瓶）の水は毎日替えるのが理想です。特に夏場は水が腐りやすいため、1日1回は必ず交換してください。水替えの際に花立も軽く洗い、ぬめりを取り除くことで雑菌の繁殖を防げます。",
                },
                {
                  step: "ポイント 3",
                  title: "切り花延命剤を使う",
                  text: "市販の切り花延命剤（フラワーフード）を水に混ぜて使います。延命剤には栄養分と抗菌成分が含まれており、水の腐敗を防ぎながら花に栄養を供給します。ダイソー公式ネットストアでは「切り花長持ち液」（成分：水・糖類・抗菌剤・金属イオン）を550円（税込）で販売しています（2026年10月26日公式確認）。",
                },
                {
                  step: "ポイント 4",
                  title: "直射日光・エアコンの風を避ける",
                  text: "仏壇の置き場所にもご注意ください。直射日光やエアコンの風が直接当たる場所では、花が早く傷みます。涼しく風通しの良い場所に仏壇を配置するのが理想的です。",
                },
                {
                  step: "ポイント 5",
                  title: "傷んだ花はこまめに取り除く",
                  text: "花束の中に傷み始めた花があれば、早めに取り除いてください。傷んだ花から発生するエチレンガスが、周りの花の傷みを早めるためです。状態の良い花だけを残すことで、残りの花をより長く楽しめます。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2] flex items-start gap-4">
                  <div className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              仏花の定期便に関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#EDF1EC] transition-colors text-left"
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
                    <div className="px-5 py-4 bg-white border-t border-[#DEDAD2]">
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
        <section id="summary" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              仏花の定期便で仏壇に新鮮な花を供え続けられます
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              仏花の定期便を利用すると、忙しい日々の中でも仏壇に常に新鮮な花をお供えできます。花屋に行く手間が省けるほか、専門家が選んだ旬の花が届くため、普段は選ばない花に出会える点も定期便の利点です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              当サイトが仏花としておすすめするのは、送料無料で748円からと手頃な<strong>medelu</strong>のNATURAL/ANYROOMコースです。生産者と市場から直接仕入れた落ち着いた色合いの花が届きます。回数の条件もないため、試しに始めることができます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              仏花を定期的に受け取りたい方には<strong>花の定期便（日本総合園芸）</strong>、手軽さを重視する方には<strong>bloomee</strong>のポスト投函をおすすめします。ご自身の生活に合ったサービスをお選びください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                花の定期便の詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                bloomeeの詳細を見る
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
