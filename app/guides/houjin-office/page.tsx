import Link from "next/link";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

const faqItems = [
  {
    q: "オフィス・法人向けの花の定期便にはどんな選択肢がありますか？",
    a: "主に2つの方法があります。①法人専用サービス（例：bloomeeの法人向け『bloomee biz』）を利用する方法と、②個人向けの花のサブスク（medelu・bloomee等）をオフィスで利用する方法です。少量の花を受付やデスクに飾る程度であれば個人向けサブスクで対応できます。複数拠点・大きめのアレンジ・請求書払いなどが必要な場合は、法人専用サービスが適しています。",
  },
  {
    q: "法人向けの花の定期便の料金はいくらくらいですか？",
    a: "法人専用サービスの料金は、飾る本数・ボリューム・配送頻度・拠点数で変わり、公式サイトでの見積もり・問い合わせが前提になります（一律の公開価格ではありません）。一方、個人向けサブスクをオフィスで使う場合は、medeluのMiniプラン748円（送料無料）やbloomeeのお試しプランなど、公式に公開された料金で始められます。当サイトでは、まず個人向けの少量プランで試し、必要に応じて法人プランを検討する進め方をおすすめします。",
  },
  {
    q: "なぜオフィスに花を置くと良いのですか？",
    a: "受付・応接に花があると来客の第一印象がよくなり、企業の細やかな配慮が伝わります。また、視界に植物や花があることは働く人の気分転換につながるとされ、無機質になりやすいオフィス空間の演出にも役立ちます。定期便であれば花が枯れる前に新しい花が届くため、担当者が購入に行く手間や、枯れた花が放置されるリスクを減らせます。",
  },
  {
    q: "配送や受け取りはオフィスでも問題ないですか？",
    a: "多くのサービスがポスト投函または対面配送に対応しており、オフィスの受付での受け取りが可能です。法人専用サービスでは配送曜日を選べるものもあります（bloomee bizは月・水・金から選択）。不在が多い場合は、ポスト投函に対応したサービスや、受け取り曜日を指定できるサービスを選ぶことをおすすめします。",
  },
  {
    q: "花瓶やお手入れの手間はかかりますか？",
    a: "個人向けサブスクの少量プランであれば、受付カウンターに置ける小さな花瓶で足ります。お手入れは水替えと茎のカットが基本です。法人専用サービスには、花器込みのプランや、活け替え・回収まで対応するものもあります。手間を最小限にしたい場合は、こうしたメンテナンス込みのサービスをご検討ください。",
  },
];

/* 法人・オフィスでの観葉植物（グリーン）導入に関するQ&A。
   金額は当サイト掲載サービスの公式確認値のみを使用し、確認日を併記する。 */
const officeGreenFaqItems = [
  {
    q: "初めてオフィスに観葉植物のサブスクを導入します。どこから選べばよいですか？",
    a: "まず「購入型」か「レンタル型」かを決めてください。受付やデスクに小さめのグリーン・花を置くだけなら購入型（届いたものが自社のものになる定期便）、大型のグリーンを常によい状態に保ちたい場合や、社内に管理担当を置けない場合はメンテナンス込みのレンタル型が適しています。当サイトでは、購入型としてAND PLANTS（観葉植物と切り花の両方を扱う）、法人向けの花・グリーンの定期便としてbloomee biz、メンテナンス込みの観葉植物レンタルとしてHitoHana Rental Green（法人専用・月2回訪問）を掲載しています。CLASの観葉植物はフェイクグリーンのレンタルです（2026年10月19日公式確認）。人気順を示す公開データは確認できていないため、置き場所・予算・管理体制の3点で絞り込むことをおすすめします。",
  },
  {
    q: "月額5,000円程度、できれば5,000円以下でオフィスに導入できますか？",
    a: "小さめの1〜数点から始める場合、月5,000円以内は現実的な予算です。当サイトが公式で確認できている1回あたりの価格は、medeluのMiniプラン748円（送料込み・ポスト投函・2026年7月3日確認）からAND PLANTSの定期便ラージ4,980円（送料込み・2026年8月17日確認）までです。毎週配送を月4回として単純計算すると、Miniプランは月およそ2,992円になります。一方、鉢植えの観葉植物レンタルは、HitoHana Rental GreenがノーマルプランM 1鉢月1,600円（税別・月2回訪問・訪問1拠点あたり7,800円以上）、GOOD GREENがマイグリーンプランM/L 1鉢月2,178円（税込・水やりは自社）です（2026年10月19日公式確認）。サイズ・鉢数・メンテナンス頻度で変わるため、5,000円以内に収まるかは見積もりで確認してください。",
  },
  {
    q: "数人〜十数人の小規模オフィスでも利用しやすいサービスはありますか？",
    a: "個人向けの少量プランをそのままオフィスで利用する方法が手軽です。medeluのMiniプランは1回748円（送料込み）でポスト投函のため、日中に受け取り担当を置きにくい小規模オフィスでも受け取りやすい形式です（2026年7月3日確認）。法人契約で始めるなら、bloomee bizはミニブーケ3束プラン（お花/グリーン4〜5本・全長25〜30cm）でも1回3,300円（税込・送料込み）で、毎週と隔週を選べます（特定商取引法に基づく表記ほか・2026年10月17日確認）。拠点が1つで置き場所も1〜2か所であれば、まず小さいプランで運用の負担を確認する進め方をおすすめします。",
  },
  {
    q: "社内に管理担当を置けません。管理不要で続けられるサービスはありますか？",
    a: "水やり・剪定・株の入れ替えまでを事業者が行うメンテナンス込みのレンタル契約であれば、社内での作業はほとんど発生しません。公式サイトで確認できた例では、HitoHana Rental Greenは専門スタッフが月2回訪問し、社内での作業は発生しないと案内しています（法人専用・最低契約期間1年・訪問1拠点あたり植物レンタル代7,800円以上）。GOOD GREENのメンテナンスプランも月2回訪問します（M・Lサイズ5鉢以上・2026年10月19日確認）。切り花・グリーンの定期便を選ぶ場合は、届いた花を花瓶に入れる・水を替える・次の便が届いたら入れ替える、という作業が残ります。bloomee bizは配送曜日を月・水・金から選べるため、担当者が出社している曜日に合わせられます（2026年8月17日確認）。",
  },
  {
    q: "メンテナンス付きで、植物を枯らす心配が少ないサービスはありますか？",
    a: "植物が枯れた際の対応まで任せたい場合は、交換・メンテナンスが定額に含まれるレンタル型をお選びください。HitoHana Rental Greenは傷んだ場合に植物を交換し、GOOD GREENは枯れた場合に回数の制限なく無料で交換します（2026年10月19日公式確認）。購入型の定期便を選ぶ場合は、到着時の傷み・不具合に対する無料交換の受付期限がサービスごとに定められています。期限は「到着後◯日以内に連絡」という短い形で設定されていることがあるため、お申し込み前に、各公式サイトの記載を必ずご確認ください。",
  },
  {
    q: "エントランスや受付をおしゃれに見せたい場合、何を置けばよいですか？",
    a: "来客の視線が最初に向く1か所に絞り、床置きの中〜大型グリーンか、受付カウンター上の小さな花のどちらかから始めると計画を立てやすくなります。大型グリーンは搬入と入れ替えの負担が大きいためレンタル型、カウンター上の花は定期便が適しています。bloomee bizのブーケ1束プランはお花/グリーン10本以上・全長30〜35cm、ミニブーケ3束プランは4〜5本・全長25〜30cmで、いずれも1回3,300円（税込・送料込み）です（特定商取引法に基づく表記ほか・2026年10月17日確認）。全長30cm前後は受付カウンターに置いても書類や来客の視線を遮りにくいサイズです。",
  },
  {
    q: "東京のオフィスに導入する場合、費用はどう見積もればよいですか？",
    a: "当サイトが公式で確認できている価格は、切り花・グリーンの定期便で1回748円〜4,980円（いずれも送料込み）、法人向けのbloomee bizで1回3,300円（税込・送料込み）です。鉢植えの観葉植物レンタルは、HitoHana Rental GreenがノーマルプランM 1鉢月1,600円（税別・月2回訪問・訪問1拠点あたり7,800円以上）、GOOD GREENがマイグリーンプランM/L 1鉢月2,178円（税込・水やりは自社）です（2026年10月19日公式確認）。東京だけの相場を示す公表データは確認できていないため、当サイトではエリア別の金額を断定していません。実際の金額はサイズ・鉢数・訪問メンテナンスの頻度で変わるため、見積もりで確認してください。",
  },
  {
    q: "東京23区に対応していますか？対応エリアはどう確認すればよいですか？",
    a: "宅配やポスト投函で届く定期便については、東京23区は基本的に配送対象と考えて差し支えありません。ただし、訪問メンテナンスを伴うレンタルは事業者ごとの訪問可能エリアの確認が必要です。bloomee bizは公式サイトで対応エリアの記載を確認できませんでした（2026年8月17日確認）。複数の拠点・支社への導入は相談を受け付けると記載があるため、拠点の住所を伝えて可否と料金をご確認ください。あわせてビル側の荷受けルール（時間指定・受付止め・台車の使用可否）も確認しておくと、初回の受け取りを円滑に進められます。",
  },
  {
    q: "季節ごとに植物を変更できるサービスはありますか？",
    a: "毎回内容が変わるのは切り花・ブーケの定期便です。観葉植物そのものを季節ごとに入れ替えたい場合は、交換に対応するレンタル型が該当します。観葉植物は常緑の種類が中心のため、鉢そのものの見た目が季節で大きく変わるわけではありません。季節感を出したい場合は、ベースのグリーンは据え置きにし、受付やテーブルの花だけを定期便で入れ替える組み合わせが運用しやすい方法です。bloomee bizは申込時に毎週と隔週を選べます（2026年8月17日確認）。",
  },
  {
    q: "オフィスでは購入型とレンタル型のどちらを選ぶべきですか？",
    a: "オフィスでは、金額よりも先に「社内に手入れの担当を置けるか」で判断することをおすすめします。担当を置ける・置き場所が固定・少量の場合は購入型、担当を置けない・大型グリーン・複数拠点の場合はメンテナンス込みのレンタル型が適しています。そのうえで費用を比較する場合、当サイトでは掲載サービスの観葉植物レンタルの月額を公式で確認できていないため、見積もりを取ったうえで「購入価格÷月額」で何か月分に相当するかを比べる方法をおすすめします。買い切りと月額制でどちらが得になるかという一般的な判断は、当サイトの「観葉植物は購入とサブスク・レンタルどちらがお得か」で解説しています。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "オフィス向け観葉植物・花の定期便【2026年】小規模オフィス・メンテナンス込み・管理不要で選ぶ法人向けガイド",
  description: "オフィス・店舗への観葉植物と花の定期便（サブスク・レンタル）の導入について、小規模オフィスでの始め方、メンテナンス込みの可否、管理不要で続ける方法、エントランスに置くものの選び方、東京23区の確認手順を解説します。",
  datePublished: "2026-07-18T00:00:00+09:00",
  dateModified: "2026-09-16T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/guides/houjin-office/" },
};
/* FAQPageは1ページ1つに統合して出力する（重複出力しない） */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...faqItems, ...officeGreenFaqItems].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HoujinOfficePage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main>
        {/* Hero */}
        <PageHero path="/guides/houjin-office/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">法人・オフィス向けガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              オフィス向け 観葉植物・花の定期便【2026年】<br className="hidden md:block" />
              小規模オフィス・メンテナンス込み・管理不要で選ぶ
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] max-w-2xl mx-auto leading-relaxed">
              受付・エントランス・執務スペースにグリーンや花の設置を検討している法人の方に向けたガイドです。
              当サイトでは、小規模オフィスでの利用可否、メンテナンス込みの契約の可否、管理担当を置かずに続ける方法、エントランスに置くものの選び方について、
              公式サイトで確認できた料金にもとづいてご説明します。
            </p>
            <p className="text-sm text-[#4A4F49] max-w-2xl mx-auto leading-relaxed mt-4">
              <Link href="#office-quick" className="text-[#2F5B43] font-medium underline">4つの検討事項への回答</Link>
              は次のセクションに、より詳しい条件は
              <Link href="#office-green-faq" className="text-[#2F5B43] font-medium underline">法人・オフィス導入のよくある質問</Link>
              にまとめています。
            </p>
          </div>
        </PageHero>

        {/* 要点 */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#2F5B43] rounded-md p-6">
              <p className="font-bold text-[#2F5B43] mb-3">まず個人向けの少量プランで試し、規模に応じて法人プランを検討することをおすすめします</p>
              <ul className="space-y-2 text-sm text-[#3F443E] leading-relaxed">
                <li>・少量の花を受付やデスクに飾る程度であれば、<strong>個人向けサブスク（medelu 748円・送料無料〜）</strong>で対応できます。</li>
                <li>・複数拠点・大きめのアレンジ・請求書払い・活け替え回収まで必要な場合は、<strong>法人専用サービス（bloomee biz など）</strong>が適しています。</li>
                <li>・法人プランの料金は本数・頻度・拠点数で変わるため、<strong>公式サイトでの見積もりが前提</strong>です（一律の公開価格ではありません）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* オフィス導入の4つの検討事項 */}
        <section id="office-quick" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              オフィス導入で検討が必要な4つの事項
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-8">
              オフィスへの観葉植物・花の導入に関するご質問は、主に次の4つです。
              金額は当サイトが各公式サイトで確認できた値のみを記載し、確認できていない範囲は「見積もりで確認」と明記しています。
            </p>

            <div className="space-y-6">
              <div className="rounded-md border border-[#DEDAD2] bg-[#F6F4EF] p-6">
                <h3 className="font-bold text-[#1F2420] mb-3">1. 数人〜十数人の小規模オフィスでも利用できます</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  利用できます。小規模オフィスでは、金額よりも<strong>「日中に受け取れる人がいるか」</strong>が課題になる場合が多いため、受け取り方式から選ぶことをおすすめします。
                  medeluのMiniプランは1回748円（送料込み）でポスト投函のため、受け取り担当を常に置けない体制でも運用しやすい形式です（2026年7月3日確認）。
                  法人契約で始めるなら、bloomee bizはミニブーケ3束プラン（お花／グリーン4〜5本・全長25〜30cm）でも1回3,300円（税込・送料込み）で、毎週と隔週を選べます（特定商取引法に基づく表記ほか・2026年10月17日確認）。
                </p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  拠点が1つで置き場所も1〜2か所であれば、最初から全フロアに広げず、まず小さいプランで受け取りと手入れの負担をご確認ください。
                  1か所で運用できることを確認してから増やすほうが、契約をやり直すよりも費用の無駄を抑えられます。
                </p>
              </div>

              <div className="rounded-md border border-[#DEDAD2] bg-[#F6F4EF] p-6">
                <h3 className="font-bold text-[#1F2420] mb-3">2. 「メンテナンス込み」のプランはレンタル型で提供されています</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  メンテナンスが定額に含まれるのはレンタル型の契約です。公式サイトで確認できた例では、<strong>HitoHana Rental Greenが全プラン月2回、GOOD GREENがメンテナンスプランで月2回の訪問</strong>です。作業範囲はHitoHanaが水やり・剪定・病害虫駆除・設置環境のチェック・植栽引き取りを挙げています（2026年10月19日確認）。
                  サービスごとの条件は<Link href="/compare/kanyou-shokubutsu/#hikaku-hyou" className="text-[#2F5B43] underline mx-1">観葉植物のサブスク・レンタル比較表</Link>にまとめています。
                </p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  回数を条件にしたい場合は、見積もりの依頼文に「月◯回・1回あたりの作業範囲（水やり／剪定／葉の清掃／株の入れ替え）」を明記し、
                  受け取った見積もりにも回数と作業範囲が記載されているかを必ずご確認ください。これらの記載がない見積もりは、契約後に追加費用が発生しやすくなります。
                  金額が回数でどう変わるかの考え方は
                  <Link href="/guides/kanyou-shokubutsu-ryokin/#maintenance" className="text-[#2F5B43] underline mx-1">観葉植物の料金の考え方</Link>
                  で解説しています。
                </p>
              </div>

              <div className="rounded-md border border-[#DEDAD2] bg-[#F6F4EF] p-6">
                <h3 className="font-bold text-[#1F2420] mb-3">3. 管理担当を置けない場合はメンテナンス込みの契約を選びます</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  水やり・剪定・株の入れ替えまでを事業者が行うメンテナンス込みのレンタル契約であれば、社内での作業はほとんど発生しません。
                  HitoHana Rental Greenは月2回の訪問メンテナンスで、料金はノーマルプランで1鉢あたり月600円（XS）〜3,600円（XXL）（税別）です（2026年10月19日公式確認）。
                </p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  切り花・グリーンの定期便を選ぶ場合は、<strong>「花瓶に入れる・水を替える・次の便が届いたら入れ替える」という作業は社内に残ります</strong>。
                  作業をすべて外部に任せたいのか、週に数分の作業であれば社内で対応できるのかによって、選ぶべき契約形態が変わります。
                  作業を減らす方向で調整する場合、bloomee bizは配送曜日を月・水・金から選べるため、担当者が出社している曜日に合わせられます（2026年8月17日確認）。
                </p>
              </div>

              <div className="rounded-md border border-[#DEDAD2] bg-[#F6F4EF] p-6">
                <h3 className="font-bold text-[#1F2420] mb-3">4. エントランス・受付に置くものは1か所に絞って選びます</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  来客の視線が最初に向く1か所に絞り、<strong>床置きの中〜大型グリーン</strong>か<strong>受付カウンター上の小さな花</strong>のどちらかから始めると計画を立てやすくなります。
                  大型グリーンは搬入と入れ替えの負担が大きいためレンタル型、カウンター上の花は定期便が適しています。
                </p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  サイズの目安として、bloomee bizのブーケ1束プランはお花／グリーン10本以上・全長30〜35cm、ミニブーケ3束プランは4〜5本・全長25〜30cmで、いずれも1回3,300円（税込・送料込み）です（特定商取引法に基づく表記ほか・2026年10月17日確認）。
                  全長30cm前後は受付カウンターに置いても書類や来客の視線を遮りにくいサイズです。
                  床置きの大型グリーンを検討する場合は、搬入経路・エレベーターのサイズ・避難動線を塞がないかを事前にご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* メリット */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">オフィスに花を置く4つのメリット</h2>
            <div className="space-y-4">
              {[
                { t: "来客の第一印象がよくなる", d: "受付・応接に花があると、来訪者に清潔感と細やかな配慮が伝わります。商談前の印象づくりに役立ちます。" },
                { t: "働く人の気分転換になる", d: "視界に花や植物があることは、働く人の気分転換につながるとされます。無機質になりやすい執務スペースの雰囲気を和らげます。" },
                { t: "空間演出の手間を減らせる", d: "定期便であれば花が枯れる前に新しい花が届くため、担当者が花を購入に行く手間や、枯れた花が放置されるリスクを抑えられます。" },
                { t: "費用を管理しやすい", d: "都度購入するよりも定額のサブスクのほうが予算を管理しやすく、経費処理も簡素になります（勘定科目は税理士にご確認ください）。" },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-md bg-[#2F5B43] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#1F2420] mb-1">{m.t}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選び方（2つの選択肢） */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">2つの導入方法と選び方</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-md border border-[#DEDAD2] p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">① 個人向けサブスクをオフィスで使う</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  受付やデスクに少量の花を飾る場合は、料金が公式に公開されている個人向けサブスクが手軽です。
                  <strong>medeluのMiniプラン748円（送料無料）</strong>など、少人数のオフィスに適しています。
                </p>
                <Link href="/compare/ryokin/" className="text-sm text-[#2F5B43] font-medium underline">個人向けサブスクの料金を比較する</Link>
              </div>
              <div className="rounded-md border border-[#DEDAD2] p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">② 法人専用サービスを使う</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  複数拠点・大きめのアレンジ・請求書払い・活け替え回収などが必要な場合は、法人専用サービスが適しています。
                  <strong>bloomeeの法人向け「bloomee biz」</strong>は配送曜日（月・水・金）を選べるなど、法人ニーズに対応しています（料金は公式見積もり）。
                </p>
                <a href="https://business.bloomeelife.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#2F5B43] font-medium underline">bloomee biz（法人向け）公式を見る</a>
                <p className="text-sm text-[#4A4F49] leading-relaxed mt-3">
                  受付・応接に飾るグリーンも検討する場合は、法人利用に対応したレンタルを含めて
                  <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] underline">観葉植物は購入とサブスク・レンタルどちらがお得か</Link>
                  で解説しています。金額の決まり方は
                  <Link href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#2F5B43] underline">観葉植物のサブスク・レンタル料金の考え方</Link>
                  もあわせてご覧ください。
                </p>
              </div>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">※法人専用サービスの料金は本数・頻度・拠点数で変わるため、公式サイトでの見積もり・問い合わせが前提です。個人向けの料金は各サービス公式の公表値です。</p>
          </div>
        </section>

        {/* 購入とレンタルの比較（法人・オフィスの観葉植物） */}
        <section id="kaitori-rental" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              オフィスでは購入型とレンタル型を管理体制にもとづいて選びます
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              オフィスでは、金額よりも先に「社内で水やり・手入れの担当を置けるか」で判断すると、選択がしやすくなります。
              買い切りと月額制でどちらが得になるかという一般的な判断は
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] underline mx-1">観葉植物は購入とサブスク・レンタルどちらがお得か</Link>
              に、金額が何で変わるかの考え方は
              <Link href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#2F5B43] underline mx-1">観葉植物のサブスク・レンタル料金の考え方</Link>
              にまとめています。本セクションでは、オフィス特有の判断材料に絞ってご説明します。
            </p>
            <div className="bg-white border-2 border-[#2F5B43] rounded-md p-6 mb-6">
              <p className="text-sm text-[#3F443E] leading-relaxed">
                <strong>同じ鉢を数年間置き続ける場合は購入、入れ替えや枯れた際の対応・日々の管理まで任せたい場合はレンタルが適しています。</strong>
                購入は初期費用がかかる代わりに以降の固定費が下がり、レンタルは初期費用を抑えられる代わりに支払いが続きます。
                費用の損益が逆転する時期は鉢のサイズ・レンタル料金・入れ替え頻度によって変わるため、当サイトでは一律の金額を示していません。
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-[#F6F4EF]">
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">比較の観点</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">購入型（買い切り・定期便）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">レンタル型（メンテナンス付き）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "初期費用",
                      buy: "植物・鉢の代金が最初に発生します。掲載サービスの定期便は1回748円〜4,980円（送料込み）で始められます。",
                      rent: "まとまった初期費用を抑えやすい形態です。月額は1鉢あたりで示され、最低契約期間や1拠点あたりの最低料金が設けられている場合があります（例：HitoHana Rental Greenは1年・7,800円以上）。",
                    },
                    {
                      item: "入れ替え",
                      buy: "自社で買い替え・処分まで行います。切り花・ブーケの定期便は、届くたびに内容が入れ替わります。",
                      rent: "契約内容に応じて事業者が交換します。大型グリーンの搬入・搬出を任せられる契約もあります。",
                    },
                    {
                      item: "枯れたときの対応",
                      buy: "原則として自社負担で買い直します。到着時の傷み・不具合は、各社が定める受付期限内であれば無料交換の対象となります（期限は公式サイトでご確認ください）。",
                      rent: "交換込みの契約であれば事業者が対応します。状態が悪くなった株の入れ替えを依頼できます。",
                    },
                    {
                      item: "管理の手間",
                      buy: "水やり・剪定・受け取りは自社で対応します。ポスト投函に対応したプランであれば、受け取りの負担は小さくなります。",
                      rent: "訪問メンテナンスが付く契約であれば、社内の作業はほとんど発生しません。",
                    },
                    {
                      item: "向いているケース",
                      buy: "置き場所が固定・少量・予算を明確にしたい小規模オフィス",
                      rent: "大型グリーン・複数拠点・管理担当を置けない体制",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#DEDAD2] align-top">
                      <td className="px-3 py-3 font-medium text-[#1F2420] whitespace-nowrap">{row.item}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{row.buy}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{row.rent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">
              ※金額は当サイト掲載サービスの公式確認値のみを記載しています。1回748円はmedeluのMiniプラン（送料込み・2026年7月3日確認）、
              4,980円はAND PLANTSの定期便ラージ（送料込み・2026年8月17日確認）です。鉢植えの観葉植物レンタルは、HitoHana Rental GreenがノーマルプランM 1鉢月1,600円（税別・月2回訪問・訪問1拠点あたり7,800円以上）、GOOD GREENがマイグリーンプランM/L 1鉢月2,178円（税込・水やりは自社）です（2026年10月19日公式確認）。
            </p>
          </div>
        </section>

        {/* 東京・23区での導入 */}
        <section id="tokyo-23ku" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              東京・23区のオフィスに導入する際の確認事項
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              <strong>宅配・ポスト投函で届く定期便は、東京23区であれば基本的に配送対象です。一方、訪問メンテナンスを伴うレンタルは、事業者ごとに訪問可能エリアの確認が必要です。</strong>
              エリア別の相場を示す公表データは確認できていないため、当サイトでは東京・23区に限った金額は示していません。
            </p>
            <div className="space-y-4">
              {[
                { t: "配送エリアと訪問エリアを個別に確認する", d: "花・グリーンが配送されるかどうかと、定期的に担当者が訪問して手入れを行うかどうかは、条件が異なります。bloomee bizは公式サイトで対応エリアの記載を確認できませんでした（2026年8月17日確認）。複数の拠点・支社への導入は相談を受け付けると記載があるため、拠点の住所を伝えて可否を確認してください。" },
                { t: "ビルの荷受けルールを事前に確認する", d: "時間指定の可否、受付止めの可否、台車の使用や搬入経路の制限の有無は、初回の受け取りで問題になりやすい事項です。大型グリーンを搬入する場合は、エレベーターのサイズもあわせてご確認ください。" },
                { t: "テナント規約と設置場所の条件を確認する", d: "水回りの使用、床の耐荷重、避難動線を塞がないことなど、共用部に置く場合はビル側の規約に従う必要があります。エントランスに大型グリーンを置く場合は、管理会社への事前確認をおすすめします。" },
                { t: "金額はエリアではなく契約条件で決まる", d: "金額はサイズ・鉢数・訪問メンテナンスの頻度・拠点数によって変わるため、23区内かどうかだけでは決まりません。見積もりを取り、当サイト掲載の公式確認値（切り花・グリーンの定期便で1回748円〜4,980円、法人向けbloomee bizは1回3,300円・税込・送料込み）と比較する方法をおすすめします。" },
              ].map((m, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-md bg-[#2F5B43] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#1F2420] mb-1">{m.t}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 法人・オフィス導入のよくある質問 */}
        <section id="office-green-faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              よくある質問（法人・オフィス導入）
            </h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed mb-6">
              オフィス・受付・エントランスへの観葉植物やグリーンの導入について、多く寄せられるご質問に回答します。
              金額は当サイト掲載サービスの公式確認値のみを使用し、確認できていない範囲は「見積もりで確認」と明記しています。
            </p>
            <div className="space-y-3">
              {officeGreenFaqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <summary className="font-bold text-[#1F2420] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#4A4F49] leading-relaxed">A. {f.a}</p>
                </details>
              ))}
            </div>
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-6">
              サービスごとの違いは
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] font-bold underline">観葉植物は購入とサブスク・レンタルどちらがお得か</Link>
              で一覧にしています。金額が変わる要因と予算の立て方は
              <Link href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#2F5B43] font-bold underline">観葉植物のサブスク・レンタル料金の考え方</Link>
              に、置き場所・水やりなど育て方の基本は
              <Link href="/guides/kanyou-shokubutsu/" className="text-[#2F5B43] font-bold underline">観葉植物の育て方・置き場所ガイド</Link>
              で解説しています。
            </p>
            <p className="text-xs text-[#6B6F6A] mt-4">
              ※料金・条件の確認日：medelu・bloomeeの個人向けプランは2026年7月3日、AND PLANTSの定期便料金とbloomee biz（法人向け）の料金・配送条件は2026年8月17日に各公式サイトで確認した値です。ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
          </div>
        </section>

        {/* サービスへの導線 */}
        <section className="py-12 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#1F2420] mb-4">まずは個人向けの少量プランで試すことをおすすめします</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/medelu" className="bg-[#2F5B43] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">medelu（748円・送料無料）</Link>
              <Link href="/services/bloomee" className="bg-white border border-[#2F5B43] text-[#2F5B43] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F6F4EF] transition">bloomee</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#2F5B43] text-[#2F5B43] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F6F4EF] transition">料金を比較する</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">よくある質問</h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                  <summary className="font-bold text-[#1F2420] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#4A4F49] leading-relaxed">A. {f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
