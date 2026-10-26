"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* --- FAQ Data --- */
const faqItems = [
  {
    q: "花のサブスクは月額いくらから始められますか？",
    a: "当サイト掲載サービスのうち最も安いのはmedelu（メデル）のMiniプランで、1回748円（送料込み）から始められます。隔週配送の場合、月額は約1,496円です。bloomeeのお試しプランは980円＋送料385円で、1回あたり1,365円です。まずは1,000円前後のプランから試すことをおすすめします。",
  },
  {
    q: "花のサブスクはどのくらいの頻度で届きますか？",
    a: "サービスやプランによって異なりますが、一般的には毎週・隔週（2週間に1回）・月1回から選べます。初めての方には隔週をおすすめします。届いたお花が枯れる頃に次のお花が届く周期となるため、負担なく続けやすい頻度です。",
  },
  {
    q: "届いたお花はどのくらい持ちますか？",
    a: "季節やお花の種類によって異なりますが、適切にお手入れすれば5日から10日ほど楽しめます。こまめに水替えをし、茎を斜めにカットする「水切り」を行うことで、より長持ちさせることができます。夏場はやや短く、冬場はより長持ちする傾向があります。",
  },
  {
    q: "花瓶を持っていないのですが大丈夫ですか？",
    a: "花瓶がなくても問題ありません。コップやグラス、空き瓶、マグカップなど、水を入れられる容器であれば代用できます。ダイソー公式ネットストアでは、ガラス花瓶を110円（税込）から販売しています（2026年10月26日公式確認）。サブスクで届くお花は3〜5本程度の小ぶりなブーケが多いため、大きな花瓶は必要ありません。",
  },
  {
    q: "ポスト投函と宅配便の違いは何ですか？",
    a: "ポスト投函は、不在でも受け取れる点が利点です。専用の箱に入ってポストに届くため、受け取りの時間を気にする必要がありません。一方、宅配便は手渡しのため在宅が必要ですが、花が箱の中で潰れにくく、よい状態で届きやすいという利点があります。初めての方には、手軽なポスト投函をおすすめします。",
  },
  {
    q: "届いたお花が傷んでいた場合はどうすればいいですか？",
    a: "品質保証制度があるサービスであれば、返金・交換などの対応を受けられます。bloomeeの定期便は、到着から2週間以内の連絡で返金・交換の対象です（公式・特定商取引法に基づく表記）。medeluやhanamekuにも品質保証があります。届いた直後に写真を撮っておくと、問い合わせを円滑に進められます。",
  },
  {
    q: "花のサブスクは途中で解約できますか？",
    a: "多くのサービスで解約可能です。ただし、サービスによって条件が異なります。medeluは最低受取回数の設定がなく、いつでも解約できます。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません。bloomeeは最低4回の受け取りが条件で、4回未満で解約すると残り回数分の料金が発生します。継続できるか不安な方には、最低受取回数の設定がないサービスから始めることをおすすめします。",
  },
  {
    q: "花のサブスクでお花の種類は選べますか？",
    a: "基本的に、お花の種類はおまかせです。花屋やフローリストが季節のお花を選んで届けるため、ご自身では選ばないお花に触れる機会になります。これは花のサブスクの特長の一つです。色味の好み（暖色系・寒色系など）を指定できるサービスもあります。",
  },
];

/* --- Step Data --- */
const stepData = [
  {
    step: 1,
    title: "サービスを選んで申し込む",
    description: "公式サイトからプランを選び、配送先住所・配送頻度・支払い方法を登録します。多くのサービスがクレジットカード決済に対応しています。申し込みは5分程度で完了します。",
  },
  {
    step: 2,
    title: "お花が届く",
    description: "指定した頻度でお花が届きます。ポスト投函の場合は専用の箱でポストに届くため、不在でも受け取れます。届いたらすぐに箱から出して水に浸けてください。",
  },
  {
    step: 3,
    title: "お花を飾って楽しむ",
    description: "届いたお花を花瓶やグラスに生けて、お部屋に飾ります。テーブル、玄関、洗面台など、目に入りやすい場所に置くことをおすすめします。毎日水を替えることで、お花が長持ちします。",
  },
  {
    step: 4,
    title: "次回のお届けを待つ",
    description: "お花が枯れる頃に次のお届けがあります。スキップ機能があるサービスであれば、旅行や外出で不在の週はお届けを休止できます。ご自身の予定に合わせて続けられます。",
  },
];

/* --- Check Points Data --- */
const checkPoints = [
  {
    title: "料金（花代＋送料の総額）",
    detail: "花代だけでなく、送料を含めた1回あたりの総額で比較することが重要です。送料無料のサービスもあれば、1回あたり385〜550円の送料がかかるサービスもあります。月額は「1回あたり総額 × 月の配送回数」で計算してください。",
  },
  {
    title: "配送方法（ポスト投函 or 宅配便）",
    detail: "ポスト投函は、不在でも受け取れる点が利点です。一方、宅配便は花がよい状態で届きやすいという利点があります。一人暮らしの方や日中不在が多い方には、ポスト投函に対応したサービスをおすすめします。",
  },
  {
    title: "配送頻度（毎週・隔週・月1回）",
    detail: "初めての方には隔週（2週間に1回）をおすすめします。毎週の場合は前回の花がまだ飾られているうちに次の花が届くことがあり、月1回の場合はお花がない期間が長くなります。隔週であれば、前の花が枯れる頃に次の花が届きます。",
  },
  {
    title: "解約条件（最低受取回数の有無）",
    detail: "サービスによっては最低受け取り回数が設定されています。bloomeeは4回の最低受け取りが条件です。継続できるか不安な方には、medeluのように最低受取回数の設定がないサービスをおすすめします（hanamekuは最低回数の記載はありませんが、初回の解約は受け付けていません）。",
  },
  {
    title: "品質保証の有無",
    detail: "配送中にお花が傷むことがまれにあります。品質保証制度があるサービスであれば、傷んだお花が届いた場合に再送や返金の対応を受けられます。bloomee、medelu、hanamekuはいずれも品質保証制度を設けています。",
  },
];

/* --- Mistake Data --- */
const mistakeData = [
  {
    mistake: "送料を考慮せずにサービスを選ぶ",
    solution: "花代だけでなく、送料込みの総額で比較してください。花代が安くても、送料を含めると割高になる場合があります。medeluやAND PLANTSのような送料無料のサービスは、総額が明確でわかりやすいのが特長です。",
  },
  {
    mistake: "最初から毎週配送で申し込む",
    solution: "最初から毎週配送にすると、前回の花がまだ飾られているうちに次の花が届く状態になりやすくなります。まずは隔週から始め、慣れた段階で頻度を上げることをおすすめします。",
  },
  {
    mistake: "届いたお花をすぐに水に浸けない",
    solution: "届いたお花は配送中に水分を失っています。届いたらすぐに箱から出し、茎の先端を1〜2cm斜めにカットしてから水に浸けてください。この作業により、お花の持ちが大きく変わります。",
  },
  {
    mistake: "直射日光やエアコンの風が当たる場所に飾る",
    solution: "直射日光はお花を早く傷めます。エアコンの風も乾燥の原因になります。明るい日陰で、風が直接当たらない場所が適しています。玄関や、リビングの窓から少し離れた場所をおすすめします。",
  },
  {
    mistake: "水替えをしない",
    solution: "水は毎日替えることが望ましく、少なくとも2日に1回は替えてください。水が濁ると雑菌が繁殖し、茎が腐って花の寿命が縮みます。水替えの際に花瓶の内側も軽く洗うと、より長持ちします。",
  },
  {
    mistake: "最低受取回数を確認せずに申し込む",
    solution: "解約条件は事前に必ずご確認ください。特にbloomeeは4回の最低受け取りが条件です。お試しのつもりで申し込んでも、想定以上の支出になることがあります。不安な方には、最低受取回数の設定がないサービスから始めることをおすすめします。",
  },
];

/* --- Main Component --- */
export default function BeginnerGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"初心者向け 花のサブスクの選び方\",\"item\":\"https://ohana-delivery.com/guides/beginner/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"初心者向け 花のサブスクの選び方\",\"description\":\"初心者向けに花のサブスクの選び方を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-24T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/beginner/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクは月額いくらから始められますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"当サイト掲載サービスのうち最も安いのはmedelu（メデル）のMiniプランで、1回748円（送料込み）から始められます。隔週配送の場合、月額は約1,496円です。bloomeeのお試しプランは980円＋送料385円で、1回あたり1,365円です。まずは1,000円前後のプランから試すことをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクはどのくらいの頻度で届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"サービスやプランによって異なりますが、一般的には毎週・隔週（2週間に1回）・月1回から選べます。初めての方には隔週をおすすめします。届いたお花が枯れる頃に次のお花が届く周期となるため、負担なく続けやすい頻度です。\"}},{\"@type\":\"Question\",\"name\":\"届いたお花はどのくらい持ちますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"季節やお花の種類によって異なりますが、適切にお手入れすれば5日から10日ほど楽しめます。こまめに水替えをし、茎を斜めにカットする「水切り」を行うことで、より長持ちさせることができます。夏場はやや短く、冬場はより長持ちする傾向があります。\"}},{\"@type\":\"Question\",\"name\":\"花瓶を持っていないのですが大丈夫ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"花瓶がなくても問題ありません。コップやグラス、空き瓶、マグカップなど、水を入れられる容器であれば代用できます。ダイソー公式ネットストアでは、ガラス花瓶を110円（税込）から販売しています（2026年10月26日公式確認）。サブスクで届くお花は3〜5本程度の小ぶりなブーケが多いため、大きな花瓶は必要ありません。\"}},{\"@type\":\"Question\",\"name\":\"ポスト投函と宅配便の違いは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ポスト投函は、不在でも受け取れる点が利点です。専用の箱に入ってポストに届くため、受け取りの時間を気にする必要がありません。一方、宅配便は手渡しのため在宅が必要ですが、花が箱の中で潰れにくく、よい状態で届きやすいという利点があります。初めての方には、手軽なポスト投函をおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"届いたお花が傷んでいた場合はどうすればいいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"品質保証制度があるサービスであれば、返金・交換などの対応を受けられます。bloomeeの定期便は、到着から2週間以内の連絡で返金・交換の対象です（公式・特定商取引法に基づく表記）。medeluやhanamekuにも品質保証があります。届いた直後に写真を撮っておくと、問い合わせを円滑に進められます。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクは途中で解約できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"多くのサービスで解約可能です。ただし、サービスによって条件が異なります。medeluは最低受取回数の設定がなく、いつでも解約できます。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません。bloomeeは最低4回の受け取りが条件で、4回未満で解約すると残り回数分の料金が発生します。継続できるか不安な方には、最低受取回数の設定がないサービスから始めることをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクでお花の種類は選べますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"基本的に、お花の種類はおまかせです。花屋やフローリストが季節のお花を選んで届けるため、ご自身では選ばないお花に触れる機会になります。これは花のサブスクの特長の一つです。色味の好み（暖色系・寒色系など）を指定できるサービスもあります。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* --- Breadcrumbs --- */}
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
                  <span className="text-[#1F2420] font-medium">花サブスク初心者ガイド</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* --- Hero Section --- */}
        <PageHero path="/guides/beginner/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花サブスク初心者向けガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              花サブスク初心者ガイド｜<br className="hidden md:block" />
              選び方と始め方を解説
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスク（定期便）を初めて利用する方に向けて、サービスの選び方と届いたお花の扱い方をご説明します。
              当サイトでは、サービスの選び方・申し込みの流れ・お花の飾り方までを順に解説しています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#2F5B43]">748円/回〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">申し込み時間</p>
                <p className="text-xl font-bold text-[#2F5B43]">約5分</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">お花の日持ち</p>
                <p className="text-xl font-bold text-[#2F5B43]">5〜10日</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最低受取回数の設定なし</p>
                <p className="text-xl font-bold text-[#2F5B43]">複数のサービス</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* --- Table of Contents --- */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">本ページの内容</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#what-is" className="hover:text-[#2F5B43] transition-colors">1. 花のサブスク（定期便）とは</a></li>
                  <li><a href="#how-it-works" className="hover:text-[#2F5B43] transition-colors">2. 花のサブスクの仕組み（申込から届くまで）</a></li>
                  <li><a href="#check-points" className="hover:text-[#2F5B43] transition-colors">3. 申し込み前に確認すべき5つの項目</a></li>
                  <li><a href="#recommended" className="hover:text-[#2F5B43] transition-colors">4. 初心者におすすめのサービス</a></li>
                  <li><a href="#display-tips" className="hover:text-[#2F5B43] transition-colors">5. 届いたお花の飾り方ガイド</a></li>
                  <li><a href="#mistakes" className="hover:text-[#2F5B43] transition-colors">6. 初めての方に多い失敗と対策</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">7. 花のサブスク初心者のよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* --- What Is Flower Subscription --- */}
        <section id="what-is" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスク（定期便）とは
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              花のサブスクとは、定期的にお花が自宅に届くサービスです。
              「花の定期便」とも呼ばれ、毎週や隔週など決まった頻度で、花屋が選んだ季節のお花がポスト投函や宅配便で届きます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              自分でお花を買いに行く必要がなく、どのようなお花が届くかを楽しみに待つこともできます。
              花屋を利用した経験が少ない方でも気軽に始められることが、花のサブスクの特長です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#EDF1EC] rounded-md p-5 text-center">
                <p className="text-sm font-bold text-[#2F5B43] mb-2">手軽さ</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  申し込むだけで定期的にお花が届きます。買いに行く手間がかかりません。
                </p>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5 text-center">
                <p className="text-sm font-bold text-[#2F5B43] mb-2">お花との出会い</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花屋が選んだ旬のお花が届きます。ご自身では選ばない花に触れる機会になります。
                </p>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5 text-center">
                <p className="text-sm font-bold text-[#2F5B43] mb-2">手頃な価格</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  1回748円から利用でき、花屋で購入するよりも手頃な価格で始められます。
                </p>
              </div>
            </div>

            <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">花のサブスクが適している方</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ お花のある暮らしを始めたいものの、何から始めればよいかわからない方</li>
                <li>・ 仕事が忙しく、花屋に行く時間がない方</li>
                <li>・ お花の知識がなくても気軽に楽しみたい方</li>
                <li>・ インテリアに彩りを加えたい方</li>
                <li>・ 季節の移ろいをお花で感じたい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- How It Works --- */}
        <section id="how-it-works" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクの仕組み（申込から届くまで）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクの仕組みは簡単で、次の4つの手順で利用を始められます。
            </p>

            <div className="space-y-6">
              {stepData.map((item) => (
                <div key={item.step} className="bg-white rounded-md border border-[#DEDAD2] p-5 flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#2F5B43] text-white text-sm font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#EDF1EC] rounded-md p-5">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-2">配送周期について</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                隔週配送の場合、届いたお花を5〜10日ほど楽しめるため、お花が枯れる頃に次のお花が届きます。
                旅行や出張で受け取れない週は、スキップ機能を使えばお届けを休めます。ご自身の生活に合わせて調整できることも、花のサブスクの利点です。
              </p>
            </div>
          </div>
        </section>

        {/* --- 5 Check Points --- */}
        <section id="check-points" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              申し込み前に確認すべき5つの項目
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクを選ぶ際に、事前に確認していただきたい5つの項目をまとめています。
              この5項目を確認することで、ご自身に合ったサービスを選びやすくなります。
            </p>

            <div className="space-y-5">
              {checkPoints.map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] overflow-hidden">
                  <div className="px-5 py-4 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#2F5B43] text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[#1F2420] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#4A4F49] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-md border-2 border-[#2F5B43] p-5">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">初めての方向けの選び方の要点</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ minWidth: "480px" }}>
                  <thead>
                    <tr className="bg-[#EDF1EC]">
                      <th className="px-3 py-2 text-left font-medium text-[#1F2420]">項目</th>
                      <th className="px-3 py-2 text-left font-medium text-[#1F2420]">初めての方へのおすすめ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">料金</td>
                      <td className="px-3 py-2 text-[#4A4F49]">送料込みで1回1,000円前後</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">配送方法</td>
                      <td className="px-3 py-2 text-[#4A4F49]">ポスト投函（不在でも受け取れる）</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">配送頻度</td>
                      <td className="px-3 py-2 text-[#4A4F49]">隔週（2週間に1回）</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">解約条件</td>
                      <td className="px-3 py-2 text-[#4A4F49]">最低受取回数の設定なし</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">品質保証</td>
                      <td className="px-3 py-2 text-[#4A4F49]">あり（再送・返金対応）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* --- Recommended Services --- */}
        <section id="recommended" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              初心者におすすめのサービス
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              当サイトでは、初めての方に適したサービスとして、次の2つをご紹介します。
              料金・最低受取回数・品質保証の有無をもとに選んでいます。
            </p>

            {/* bloomee - Primary Recommendation */}
            <div className="bg-white rounded-md border-2 border-[#2F5B43] overflow-hidden mb-6">
              <div className="px-5 py-4 bg-[#EDF1EC] border-b border-[#C9D6CB] flex items-center gap-3">
                <span className="bg-[#2F5B43] text-white text-xs font-bold px-3 py-1 rounded">
                  初めての方に特におすすめ
                </span>
                <h3 className="text-lg font-bold text-[#1F2420]">bloomee（ブルーミー）</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-5">
                  bloomeeは累計3,000万本以上のお届け実績を持つ、日本最大級の花のサブスクサービスです。
                  利用者のSNS投稿やレビュー記事が多く、飾り方の参考情報を探しやすい点が特長です。
                  季節の花が届くため、届くたびに異なる花を楽しめます。お試し・グリーンプランは、ポストへの半投函の形で届きます。
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">お試しプラン</p>
                    <p className="text-lg font-bold text-[#1F2420]">980<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                    <p className="text-lg font-bold text-[#1F2420]">385<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">1回あたり総額</p>
                    <p className="text-lg font-bold text-[#2F5B43]">1,365<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">花の本数</p>
                    <p className="text-lg font-bold text-[#1F2420]">4本以上</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">届き方</span>
                    <span className="text-[#1F2420]">ポスト投函</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">配送頻度</span>
                    <span className="text-[#1F2420]">毎週 / 隔週</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">最低受取回数</span>
                    <span className="text-[#1F2420]">4回</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">品質保証</span>
                    <span className="text-[#1F2420]">あり（定期便は2週間以内の連絡で返金・交換）</span>
                  </div>
                </div>

                <div className="bg-[#EDF1EC] rounded-lg p-4 mb-5">
                  <p className="text-sm font-bold text-[#2F5B43] mb-2">初めての方におすすめする理由</p>
                  <ul className="text-sm text-[#4A4F49] space-y-1.5">
                    <li>・ 花代980円から始められる</li>
                    <li>・ 定期便は2週間以内の連絡で返金・交換の対象（公式・特定商取引法に基づく表記）</li>
                    <li>・ SNSに口コミが多く、飾り方の参考情報が多い</li>
                    <li>・ ポスト投函に対応しており、不在でも受け取れる</li>
                    <li>・ 4回目以降は隔週への変更や、週単位のストップ・再開ができる</li>
                  </ul>
                </div>

                <div className="bg-[#F7F1EC] rounded-lg p-4 mb-5 border border-[#E3D3C8]">
                  <p className="text-sm font-bold text-[#1F2420] mb-1">注意点</p>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">
                    最低4回の受け取りが条件です。4回受け取る前に解約すると、残り回数分の料金が発生します。
                    最初の4回は毎週のお届けとなるため、約1か月間は継続する必要があります（隔週への変更は4回目の受け取り後に可能です）。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services/bloomee"
                    className="inline-block text-center bg-white text-[#2F5B43] font-bold text-sm px-6 py-3 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
                  >
                    bloomeeの詳細レビューを見る
                  </a>
                  <a
                    href="https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block text-center bg-[#2F5B43] text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-[#234534] transition-colors"
                  >
                    bloomee公式サイトを見る
                  </a>
                </div>
              </div>
            </div>

            {/* medelu - Runner Up */}
            <div className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
              <div className="px-5 py-4 bg-[#FFFBEB] border-b border-[#F59E0B] flex items-center gap-3">
                <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded">
                  費用を抑えたい方に
                </span>
                <h3 className="text-lg font-bold text-[#1F2420]">medelu（メデル）</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-5">
                  medeluは送料無料で最低受取回数の設定がなく、気軽に始めやすい花のサブスクです。
                  Miniプランは1回748円で、業界でも低い価格水準です。生産者と市場から直接仕入れた花を届けると案内しています（2026年10月21日公式確認）。
                  費用を抑えて試したい方や、合わない場合にすぐ解約したい方に適しています。
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">Miniプラン</p>
                    <p className="text-lg font-bold text-[#1F2420]">748<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                    <p className="text-lg font-bold text-[#2F5B43]">無料</p>
                  </div>
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">1回あたり総額</p>
                    <p className="text-lg font-bold text-[#2F5B43]">748<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F6F4EF] rounded-lg p-3 text-center border border-[#DEDAD2]">
                    <p className="text-xs text-[#6B6F6A] mb-1">花の本数</p>
                    <p className="text-lg font-bold text-[#1F2420]">3〜4本</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">届き方</span>
                    <span className="text-[#1F2420]">ポスト投函</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">配送頻度</span>
                    <span className="text-[#1F2420]">毎週 / 隔週</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">最低受取回数</span>
                    <span className="text-[#1F2420]">なし</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#6B6F6A] w-28 shrink-0">品質保証</span>
                    <span className="text-[#1F2420]">あり</span>
                  </div>
                </div>

                <div className="bg-[#EDF1EC] rounded-lg p-4 mb-5">
                  <p className="text-sm font-bold text-[#2F5B43] mb-2">初めての方におすすめする理由</p>
                  <ul className="text-sm text-[#4A4F49] space-y-1.5">
                    <li>・ 業界でも低い価格水準の748円/回（送料無料）で始められる</li>
                    <li>・ 最低受取回数の設定がなく、いつでも解約可能</li>
                    <li>・ 送料無料のため、表示価格と支払総額が一致しわかりやすい</li>
                    <li>・ 生産者と市場から直接仕入れた花が届く（2026年10月21日公式確認）</li>
                    <li>・ スキップの手続きができる</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services/medelu"
                    className="inline-block text-center bg-white text-[#2F5B43] font-bold text-sm px-6 py-3 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
                  >
                    medeluの詳細レビューを見る
                  </a>
                  <a
                    href="https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block text-center bg-[#2F5B43] text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-[#234534] transition-colors"
                  >
                    medelu公式サイトを見る
                  </a>
                </div>
              </div>
            </div>

            {/* Comparison Box */}
            <div className="mt-8 bg-white rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-4">2つのサービスの比較</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ minWidth: "480px" }}>
                  <thead>
                    <tr className="bg-[#EDF1EC]">
                      <th className="px-3 py-2 text-left font-medium text-[#1F2420]">項目</th>
                      <th className="px-3 py-2 text-center font-medium text-[#1F2420]">bloomee</th>
                      <th className="px-3 py-2 text-center font-medium text-[#1F2420]">medelu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">1回あたり総額</td>
                      <td className="px-3 py-2 text-center text-[#1F2420]">1,365円</td>
                      <td className="px-3 py-2 text-center text-[#2F5B43] font-bold">748円</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">送料</td>
                      <td className="px-3 py-2 text-center text-[#1F2420]">385円</td>
                      <td className="px-3 py-2 text-center text-[#2F5B43] font-bold">無料</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">最低受取回数</td>
                      <td className="px-3 py-2 text-center text-[#1F2420]">4回</td>
                      <td className="px-3 py-2 text-center text-[#2F5B43] font-bold">なし</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">品質保証</td>
                      <td className="px-3 py-2 text-center text-[#1F2420]">あり</td>
                      <td className="px-3 py-2 text-center text-[#1F2420]">あり</td>
                    </tr>
                    <tr className="border-t border-[#DEDAD2]">
                      <td className="px-3 py-2 text-[#4A4F49]">おすすめの人</td>
                      <td className="px-3 py-2 text-center text-[#4A4F49]">3つのプランから選びたい方</td>
                      <td className="px-3 py-2 text-center text-[#4A4F49]">費用重視</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* --- How to Display Flowers --- */}
        <section id="display-tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              届いたお花の飾り方ガイド
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              届いたお花を長く楽しむための方法を、花瓶の選び方・水替え・置き場所の3つの観点からご説明します。
            </p>

            {/* Vase Selection */}
            <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5 mb-6">
              <h3 className="text-base font-bold text-[#1F2420] mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold">1</span>
                花瓶の選び方
              </h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                花のサブスクで届くお花は3〜5本程度の小ぶりなブーケが多いため、大きな花瓶は必要ありません。
                口径5〜8cm、高さ15〜20cm程度の小さめの花瓶が適しています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-[#DEDAD2]">
                  <p className="text-sm font-bold text-[#1F2420] mb-2">初めての方に適した花瓶</p>
                  <ul className="text-sm text-[#4A4F49] space-y-1.5">
                    <li>・ 口が狭めのもの（花がまとまりやすい）</li>
                    <li>・ 透明なガラス製（水の汚れがわかりやすい）</li>
                    <li>・ 安定感のある底が広いもの</li>
                    <li>・ 高さが届く花の長さに合うもの</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#DEDAD2]">
                  <p className="text-sm font-bold text-[#1F2420] mb-2">花瓶の代わりになるもの</p>
                  <ul className="text-sm text-[#4A4F49] space-y-1.5">
                    <li>・ グラスやコップ</li>
                    <li>・ 空き瓶（ジャムの瓶など）</li>
                    <li>・ マグカップ</li>
                    <li>・ ペットボトルの上部をカットしたもの</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Water Change */}
            <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5 mb-6">
              <h3 className="text-base font-bold text-[#1F2420] mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold">2</span>
                水替えの方法
              </h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                水替えはお花を長持ちさせるために最も重要なお手入れです。
                毎日替えることが望ましく、少なくとも2日に1回は行ってください。
              </p>
              <div className="bg-white rounded-lg p-4 border border-[#DEDAD2]">
                <p className="text-sm font-bold text-[#1F2420] mb-3">水替えの手順</p>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li>1. 花瓶から花を取り出す</li>
                  <li>2. 花瓶の内側をスポンジや指で軽く洗う（ぬめりを取る）</li>
                  <li>3. 茎の先端を1〜2cm斜めにカットする（水切り）</li>
                  <li>4. 新しい水を花瓶の半分〜7分目まで入れる</li>
                  <li>5. 枯れた花や変色した葉があれば取り除く</li>
                  <li>6. 花を戻す</li>
                </ol>
              </div>
              <div className="mt-4 bg-[#EDF1EC] rounded-lg p-4">
                <p className="text-sm font-bold text-[#2F5B43] mb-1">補足</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  茎を切る際は、よく切れるハサミを使い、水の中で切る「水切り」をおすすめします。
                  切り口を斜めにすることで、水を吸い上げる面積が大きくなり、お花が長持ちします。
                  キッチンバサミでも代用できます。
                </p>
              </div>
            </div>

            {/* Placement */}
            <div className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-base font-bold text-[#1F2420] mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold">3</span>
                置き場所の選び方
              </h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                お花を飾る場所によって、見た目の印象も花の持ちも変わります。
                適切な場所に飾ることで、お花をより長く楽しめます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-[#DEDAD2]">
                  <p className="text-sm font-bold text-[#2F5B43] mb-2">おすすめの場所</p>
                  <ul className="text-sm text-[#4A4F49] space-y-1.5">
                    <li>・ リビングのテーブル</li>
                    <li>・ 玄関（帰宅時に目に入る）</li>
                    <li>・ ダイニングテーブル</li>
                    <li>・ 洗面台（朝の身支度が華やかに）</li>
                    <li>・ デスク周り（仕事中の気分転換に）</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#DEDAD2]">
                  <p className="text-sm font-bold text-[#1F2420] mb-2">避けたい場所</p>
                  <ul className="text-sm text-[#4A4F49] space-y-1.5">
                    <li>・ 直射日光が当たる窓際</li>
                    <li>・ エアコンの風が直接当たる場所</li>
                    <li>・ テレビやパソコンなど熱を発する家電の近く</li>
                    <li>・ 果物の近く（エチレンガスで花が傷む）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Common Mistakes --- */}
        <section id="mistakes" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              初めての方に多い失敗と対策
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクを始めたばかりの方に多い失敗例と、その対策をまとめています。
              事前に把握しておくことで、円滑に利用を始められます。
            </p>

            <div className="space-y-4">
              {mistakeData.map((item, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                  <div className="px-5 py-4">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-[#F7F1EC] text-[#C53030] text-xs font-bold px-2 py-1 rounded border border-[#E3D3C8] shrink-0">
                        失敗例
                      </span>
                      <p className="text-sm font-bold text-[#1F2420]">{item.mistake}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#EDF1EC] text-[#2F5B43] text-xs font-bold px-2 py-1 rounded border border-[#C9D6CB] shrink-0">
                        対策
                      </span>
                      <p className="text-sm text-[#4A4F49] leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスク初心者のよくある質問
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

        {/* --- Summary + CTA --- */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              初めての方にはbloomeeかmedeluをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクは、申し込むだけで花屋が選んだお花が定期的に届くサービスです。
              花屋に行く手間がかからず、季節のお花を楽しめます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              初めてサービスを選ぶ際は、料金（送料込みの総額）・配送方法・配送頻度・解約条件・品質保証の5点をご確認ください。
              選択に迷う場合は、プランを3つ（お試し・グリーン・ベーシック）から選びたいならbloomee、費用と始めやすさを重視するならmedeluをおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              届いたお花は、こまめな水替えと適切な置き場所を心がけることで、5〜10日ほど楽しめます。
              まずは隔週配送から始めることをおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクは、利用を始めた方から満足の声が多く寄せられているサービスです。
              サービス選びの際に、本ページの内容をご活用ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                bloomeeの詳細を見る
              </a>
              <a
                href="/services/medelu"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                medeluの詳細を見る
              </a>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="/compare/cheap"
                className="inline-block text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
              >
                安い花のサブスクランキングを見る
              </a>
              <a
                href="/compare/campaign/"
                className="inline-block text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
              >
                初回特典・お試しプランを比較する
              </a>
              <a
                href="/"
                className="inline-block text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
              >
                トップページに戻る
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
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
              掲載情報は2026年10月17日時点のものです。ご利用前に、各公式サイトにて最新情報をご確認ください。
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
