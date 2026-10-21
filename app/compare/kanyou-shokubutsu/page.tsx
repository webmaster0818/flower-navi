import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "季節ごとに植物を変更できる観葉植物サブスクサービスはありますか？",
    a: "あります。ただし、植物の定期的な入れ替えに対応しているのは主に法人向けのレンタルです。個人向けの購入型（AND PLANTSやHitoHanaの単品購入）には、定期的に入れ替える仕組みはありません。当サイトが公式サイトで確認できた範囲では、GOOD GREENが3か月に1回（スタートアッププランは6か月に1回）の植物交換に対応しており、枯れた場合は回数の制限なく無料で交換されます。HitoHana Rental Greenは月2回の訪問メンテナンスの中で傷んだ植物を交換しますが、季節ごとの定期的な入れ替えについては公式サイトに記載がありません。個人宅で模様替えに合わせて替えたい場合は、CLASのフェイクグリーン（人工の観葉植物）のレンタルが、いつでも交換・返却できる仕組みです（いずれも2026年10月19日公式確認）。",
  },
  {
    q: "忙しい会社でも管理不要で利用できる観葉植物サブスクリプションサービスを知りたいです。",
    a: "水やり・剪定・病害虫の対応まで事業者が行う、訪問メンテナンス付きの法人向けレンタルが該当します。公式サイトで確認できた例では、HitoHana Rental Greenは専門スタッフが月2回訪問し、社内での作業は発生しないと案内しています。傷んだ植物は交換され、料金はノーマルプランで1鉢あたり月600円（XS）〜3,600円（XXL）（税別）、最低契約期間は1年、訪問1拠点あたりの植物レンタル代は7,800円以上です。GOOD GREENのメンテナンスプランも月2回の訪問で、1鉢あたり月1,430円（S）・2,728円（M/L）（税込）、M・Lサイズ5鉢以上が条件です。生きた植物にこだわらない場合は、水やりが不要なフェイクグリーン（CLASのレンタル、HitoHanaの買い切り）という選択肢もあります（いずれも2026年10月19日公式確認）。",
  },
  {
    q: "会社で季節ごとに観葉植物を入れ替えてもらうには、見積もりで何を伝えればよいですか？",
    a: "「入れ替えの頻度」「季節に合った植物を使うか」「枯れたときの交換の扱い」「巡回の回数と作業内容」「鉢のサイズと設置場所ごとの鉢数」「水道料金などの負担区分」を依頼文に書いてください。公的な契約の例では、那覇市役所本庁舎の観葉植物等賃貸借仕様書（令和8年度）が、3か月に1回・季節に合った植物への取り替え、枯れた場合は時期にかかわらず貸す側の責任で交換、月2回以上の巡回、水道料金は借りる側の負担と定めています（2026年10月21日確認）。公開プランで3か月に1回の交換を定めているのはGOOD GREENです（2026年10月19日公式確認）。",
  },
  {
    q: "月額制の観葉植物サブスクは、購入と比べてどちらがお得ですか？",
    a: "同じ鉢を長く置き続け、水やりを自分で行えるなら購入、水やり・交換まで任せたいなら月額制（レンタル）が向いています。公式価格で試算すると、AND PLANTSのパキラ M（高さ目安75〜110cm）13,980円（税込・送料無料）は、HitoHana Rental GreenのノーマルプランM（H80〜100cm）月1,600円（税別、税込換算1,760円）の約8か月分にあたります。HitoHanaの最低契約期間は1年のため、1鉢を置くだけなら購入のほうが支払額は少なくなります。レンタルの月額には月2回の訪問メンテナンスと傷んだ際の交換が含まれるため、その作業を社内で担えるかどうかで判断してください。試算の詳細は「観葉植物の料金の考え方」にまとめています（2026年10月19日公式確認）。",
  },
  {
    q: "観葉植物のサブスクと花のサブスクはどう違いますか？",
    a: "花のサブスクは切り花が定期的に届き、届くたびに次の花に入れ替わります。観葉植物は鉢植えのため、適切に管理すれば長く置き続けられます。また、花の定期便は1回ごとの料金を払う形が中心ですが、観葉植物は「単品で購入する」か「法人向けのレンタルで借りる」かで費用の性質が大きく異なります。購入なら支払いは一度で、レンタルなら契約期間中は月額が続く代わりに交換やメンテナンスが含まれます。",
  },
  {
    q: "観葉植物を枯らしてしまわないか不安ですが、初心者でも始められますか？",
    a: "始められます。AND PLANTSには置き場所の日当たりなどから植物を絞り込む「パーソナル植物診断」があり、育て方を記したケアカードが付きます。観葉植物は到着後2週間以内であれば、初期不良による傷みや、ケアカードに従って管理したのに枯れた場合などに交換・返金の対象となります（2026年10月19日公式確認）。それでも管理に不安がある場合は、枯れた際の交換が月額に含まれるレンタル（法人向け）か、水やりが不要なフェイクグリーンを検討してください。",
  },
  {
    q: "賃貸マンションでも観葉植物は置けますか？",
    a: "はい、置くことができます。小型の観葉植物（ポトス、サンスベリアなど）なら棚やテーブルの上に置けるため、床を汚す心配もありません。受け皿を使えば水漏れも防げます。壁掛けタイプや吊り下げタイプを選べば、スペースを取らずにグリーンを楽しめます。",
  },
  {
    q: "花のサブスクと観葉植物のサブスクは併用できますか？",
    a: "併用できます。観葉植物で部屋の基調となるグリーンを置き、花のサブスクで季節の彩りを加える組み合わせ方です。観葉植物は常緑の種類が中心で季節による見た目の変化が小さいため、季節感は切り花の定期便で出すと運用が簡単になります。AND PLANTSは切り花の定期便と観葉植物の単品購入の両方を扱っているため、一つのサービスでまとめることもできます。",
  },
  {
    q: "メンテナンス付きで枯れる心配が少ないのは、どのサービスですか？",
    a: "訪問メンテナンスと交換が月額に含まれる法人向けレンタルが該当します。HitoHana Rental Greenは月2回の訪問で、傷んだ場合は植物を交換します。GOOD GREENは全プランで枯れた場合に回数の制限なく無料交換し、メンテナンスプランでは月2回訪問します（いずれも2026年10月19日公式確認）。購入型では、AND PLANTSの観葉植物は到着後2週間以内、HitoHanaの観葉植物は到着から7日以内の連絡で、到着時の傷み等に対する交換の対象となります。",
  },
  {
    q: "日当たりの悪い部屋でも育てやすい植物を提案してもらえますか？",
    a: "AND PLANTSの「パーソナル植物診断」では置き場所の日当たりなどから植物を絞り込め、育て方のケアカードも付きます。耐陰性の強い種類（ポトス、サンスベリア、モンステラなど）を選べば、日当たりの悪い部屋でも育てられます。法人向けレンタルでは、HitoHana Rental Greenが専門のデザイナーによる提案、GOOD GREENがカタログからの選択に対応しています。日照が確保できない場所には、HitoHanaがフェイクグリーンとの組み合わせを提案しています。置き場所の明るさの見極め方は、当サイトの「観葉植物の育て方・置き場所ガイド」で解説しています。",
  },
  {
    q: "訪問メンテナンス込みのプランはありますか？",
    a: "あります。公式サイトで確認できた範囲では、HitoHana Rental Green（全プラン月2回訪問・法人専用）と、GOOD GREENのメンテナンスプラン（月2回訪問・M・Lサイズ5鉢以上）が該当します。作業内容は、HitoHanaが水やり・剪定・病害虫駆除・設置環境のチェック・植栽引き取り、GOOD GREENが水やりと病害虫・トラブル時の訪問を挙げています（2026年10月19日公式確認）。対応エリアは首都圏が中心のため、拠点の住所で可否を確認してください。オフィスでの進め方は「法人・オフィス向けガイド」にまとめています。",
  },
  {
    q: "枯れてしまったときの交換対応はどのサービスにありますか？",
    a: "レンタルでは、GOOD GREENが枯れた場合に回数の制限なく無料で交換し、HitoHana Rental Greenは傷んだ場合に植物を交換します。購入型では、AND PLANTSの観葉植物は到着後2週間以内（ケアカードに従って管理したのに枯れた場合を含む）、HitoHanaの観葉植物は到着時の傷み・破損について到着から7日以内の連絡で交換の対象となります（いずれも2026年10月19日公式確認）。購入型は期限を過ぎると自己負担での買い直しになるため、期限と対象範囲は申し込み前に各公式サイトで確認してください。",
  },
];

/* FAQPageは faqItems から生成（本文とJSON-LDのズレ防止・1ページ1つ） */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── Main Component ─── */
export default function KanyouShokubutsuPage() {
  return (
    <>
                {/* COMPARE_ITEMLIST_v1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"観葉植物の定期便・サブスク比較\",\"description\":\"観葉植物の定期便・サブスク比較のサービス一覧\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://ohana-delivery.com/services/and-plants/\",\"name\":\"AND PLANTS（アンドプランツ）\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://ohana-delivery.com/services/hitohana/\",\"name\":\"HitoHana（ヒトハナ）\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"比較\",\"item\":\"https://ohana-delivery.com/compare/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"観葉植物の定期便・サブスク比較\",\"item\":\"https://ohana-delivery.com/compare/kanyou-shokubutsu/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"観葉植物のサブスク・レンタル比較｜季節の入れ替え・メンテナンス込み（管理不要）で選ぶ\",\"description\":\"季節ごとに植物を入れ替えられる観葉植物サブスク・レンタルと、水やりまで任せられる法人向けのメンテナンス込みレンタルを、公式サイトで確認した月額・交換頻度・訪問回数・契約条件で比較します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-21T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/compare/kanyou-shokubutsu/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <meta name="description" content="季節ごとに植物を入れ替えられる観葉植物サブスク・レンタルと、水やりまで任せられる法人向けのメンテナンス込みレンタルを、公式サイトで確認した月額・交換頻度・訪問回数・契約条件で比較します（2026年10月19日確認）。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">比較</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">観葉植物のサブスク</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">観葉植物サブスク・レンタルの比較</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              観葉植物のサブスク・レンタル比較【2026年】<br className="hidden md:block" />
              季節の入れ替え・メンテナンス込みで選ぶ
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-6 max-w-2xl mx-auto leading-relaxed">
              当サイトでは、<strong>観葉植物を「買って育てる」か「借りて任せる」かを判断するための情報</strong>をまとめています。
              植物の入れ替え頻度・訪問メンテナンスの回数・月額・契約条件を各社の公式サイトで確認し、確認日を付けて比較しています（最終更新：2026年10月21日）。
            </p>
            <p className="text-xs md:text-sm text-[#666] max-w-2xl mx-auto leading-relaxed">
              置き場所・日当たり・水やりなど<strong>育て方</strong>を知りたい方は
              <a href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の育て方・置き場所ガイド</a>
              、<strong>料金の決まり方・予算の立て方</strong>を知りたい方は
              <a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の料金の考え方</a>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* ─── Direct answers: seasonal swap / maintenance-free ─── */}
        <section id="nyuretae-kanri-fuyou" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              季節ごとに植物を入れ替えられる観葉植物サブスクはありますか
            </h2>
            <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F8F8F8] p-6 mb-6">
              <p className="text-sm text-[#555] leading-relaxed">
                <strong>あります。ただし、植物の定期的な入れ替えに対応しているのは主に法人向けのレンタルです。</strong>
                当サイトが公式サイトで確認できた範囲では、GOOD GREENが3か月に1回（スタートアッププランは6か月に1回）の植物交換に対応し、枯れた場合は回数の制限なく無料で交換されます。
                HitoHana Rental Greenは月2回の訪問メンテナンスの中で傷んだ植物を交換しますが、季節ごとの定期的な入れ替えについては公式サイトに記載がありません。
                個人向けの購入型（AND PLANTS・HitoHanaの単品購入）には、定期的に入れ替える仕組みはありません。
              </p>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mb-10">
              個人宅で模様替えに合わせて替えたい場合は、CLASのフェイクグリーン（人工の観葉植物）のレンタルが、いつでも交換・返却できる仕組みです。
              観葉植物は常緑の種類が中心で、季節によって見た目が大きく変わるわけではありません。季節感を出したい場合は、ベースのグリーンを据え置き、
              <a href="/compare/ryokin/" className="text-[#4A7C59] underline mx-1">切り花の定期便</a>
              を組み合わせる方法もあります。
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              忙しい会社でも管理不要で使える観葉植物サブスクはありますか
            </h2>
            <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F8F8F8] p-6 mb-6">
              <p className="text-sm text-[#555] leading-relaxed">
                <strong>あります。水やり・剪定・病害虫の対応まで事業者が行う、訪問メンテナンス付きの法人向けレンタルを選んでください。</strong>
                HitoHana Rental Greenは専門スタッフが月2回訪問し、社内での作業は発生しないと案内しています（法人専用・最低契約期間1年・訪問1拠点あたりの植物レンタル代7,800円以上）。
                GOOD GREENのメンテナンスプランも月2回の訪問で、M・Lサイズ5鉢以上が条件です。
              </p>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mb-8">
              生きた植物にこだわらない場合は、水やりが不要なフェイクグリーン（CLASのレンタル、HitoHanaの買い切り）も選択肢になります。
              一方、AND PLANTSやHitoHanaの観葉植物を購入する場合は、水やりなどの管理を社内で担う必要があります。
              導入の手順や見積もりの取り方は
              <a href="/guides/houjin-office/" className="text-[#4A7C59] underline mx-1">法人・オフィス向けガイド</a>
              にまとめています。
            </p>

            <h3 id="hikaku-hyou" className="text-base md:text-lg font-bold text-[#333] mb-3 scroll-mt-20">観葉植物サブスク・レンタル比較表｜公式サイトで確認した入れ替え・メンテナンスの条件（2026年10月19日確認）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-36">サービス</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">対象・形態</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">料金（公式表示）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">入れ替え・交換</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">訪問メンテナンス</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">契約条件・エリア</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "HitoHana Rental Green",
                      who: "法人専用のレンタル（個人宅は対象外）",
                      price: "1鉢あたり月額（税別）ノーマル XS 600円・S 1,000円・M 1,600円・L 2,300円・XL 3,000円・XXL 3,600円／プレミアム XS 1,300円〜XXL 5,300円",
                      swap: "傷んだ場合に植物を交換。季節ごとの定期入れ替えの記載はなし",
                      maint: "全プラン月2回（水やり・剪定・病害虫駆除・設置環境のチェック・植栽引き取り）",
                      terms: "最低契約期間1年。訪問1拠点あたり植物レンタル代7,800円以上。請求書払い・クレジットカード。東京・神奈川・埼玉・千葉（一部除く）を中心に名古屋・大阪・兵庫・広島（他県は別途見積もり）",
                    },
                    {
                      name: "GOOD GREEN",
                      who: "観葉植物のレンタル（法人は無料お試しあり）",
                      price: "1鉢あたり月額（税込）マイグリーン S 990円・M/L 2,178円／メンテナンス S 1,430円・M/L 2,728円／スタートアップ M/L 1,958円",
                      swap: "3か月に1回交換可（スタートアップは6か月に1回）。枯れた場合は回数の制限なく無料交換",
                      maint: "メンテナンスプランのみ月2回（M・Lサイズ5鉢以上）。他のプランは自分で水やり（簡単水やりキット付き）",
                      terms: "1鉢単位のプランは最短利用期間なし。停止希望月の前月25日までの連絡で違約金なし。配送費3,000円（搬入・交換月のみ、月額3,800円以上で無料）。東京都・神奈川県・千葉県・埼玉県（その他は相談）",
                    },
                    {
                      name: "CLAS",
                      who: "家具・家電のレンタル（個人・法人）。観葉植物はフェイクグリーンと鉢・プランター",
                      price: "商品ごとに月額を表示（公式サイトで確認）",
                      swap: "いつでも交換・返却が可能",
                      maint: "なし（フェイクグリーンのため水やり不要）",
                      terms: "対応エリア・配送条件は公式サイトで確認",
                    },
                    {
                      name: "AND PLANTS",
                      who: "観葉植物の単品購入（届いた植物は自分のもの）",
                      price: "例：パキラ M（高さ目安75〜110cm）13,980円・L（115〜140cm）19,850円（税込・送料無料）",
                      swap: "定期入れ替えなし。到着後2週間以内の初期不良等は交換・返金",
                      maint: "なし（自分で管理。ケアカード付き）",
                      terms: "法人は請求書払いで購入可。宅配便",
                    },
                    {
                      name: "HitoHana",
                      who: "観葉植物の単品購入",
                      price: "価格帯「3,000円〜」から掲載",
                      swap: "定期入れ替えなし。到着時の傷み・破損は到着から7日以内の連絡で返品・交換",
                      maint: "なし（自分で管理）",
                      terms: "宅配便",
                    },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5] align-top">
                      <td className="px-3 py-3 font-medium text-[#333]">{r.name}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.who}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.price}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.swap}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.maint}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.terms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-4">
              出典（2026年10月19日に各公式サイトで確認）：
              <a href="https://hitohana-collect.hitohana.tokyo/pages/rental-green" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">HitoHana Rental Green</a>、
              <a href="https://goodgreen.jp/price/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">GOOD GREEN 料金プラン</a>、
              <a href="https://clas.style/furniture/interior_green/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">CLAS 観葉植物</a>、
              <a href="https://andplants.jp/pages/returned" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">AND PLANTS 返品・交換規定</a>、
              <a href="https://andplants.jp/products/pachira-m" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">AND PLANTS パキラ M</a>、
              <a href="https://hitohana.tokyo/indoor-plants" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">HitoHana 観葉植物</a>。
              料金・条件は改定されることがあるため、申し込み前に各公式サイトでご確認ください。GOOD GREENのサイズ区分はS（〜40cm）・M（50〜130cm）・L（140〜200cm）で、HitoHanaとは異なります。
            </p>

            <h3 id="mitsumori-jouken" className="text-base md:text-lg font-bold text-[#333] mt-10 mb-3 scroll-mt-20">会社で季節ごとの入れ替えを依頼するときに見積もりへ書く条件</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              法人向けレンタルは、公開プランのほかに見積もりで条件を決める契約が多くあります。季節ごとの入れ替えと管理不要を両立させたい場合は、次の項目を依頼文に明記すると、各社の回答を同じ条件で比べられます。公的な契約の例として、那覇市役所本庁舎の観葉植物等賃貸借仕様書（令和8年度）は、これらを契約条件として定めています（2026年10月21日確認）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-40">見積もりで指定する項目</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">那覇市の仕様書での定め方</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { k: "入れ替えの頻度", v: "鉢の取り替えは3か月に1回。季節に合った植物を使う" },
                    { k: "枯れたときの交換", v: "通常の状態で枯れた場合は、取り替えの時期にかかわらず貸す側の責任で交換する" },
                    { k: "巡回・手入れ", v: "月2回以上巡回し、必要に応じて剪定・堆肥・防除を行う" },
                    { k: "鉢のサイズと数", v: "特大（樹高170cm以上）・大（150〜170cm）・小（50〜60cm）の別に、設置場所ごとの鉢数を指定" },
                    { k: "費用の負担区分", v: "水やりに使う水道料金は借りる側が負担する" },
                    { k: "報告", v: "年間の予定樹種表を提出し、入れ替え後は作業写真付きの報告書を提出する" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-[#F0F0F0] align-top">
                      <td className="px-3 py-3 font-bold text-[#333]">{r.k}</td>
                      <td className="px-3 py-3 text-[#555] leading-relaxed">{r.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-3">
              出典：<a href="https://www.city.naha.okinawa.jp/_res/projects/default_project/_page_/001/011/330/r8kanyousyokubutsu_shiyousyo.pdf" target="_blank" rel="noopener noreferrer nofollow" className="underline">那覇市役所本庁舎観葉植物等賃貸借仕様書</a>（2026年10月21日確認）。自治体の契約条件の一例であり、民間の各社のプランの内容を示すものではありません。公開プランでは、GOOD GREENが3か月に1回の交換（上の比較表）を定めています。
            </p>
          </div>
        </section>

        {/* ─── Quick Answer: Rental vs Subscription / Personal vs Corporate ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              月額制の観葉植物サブスクと購入の費用比較
            </h2>
            <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F8F8F8] p-6 mb-6">
              <p className="text-sm text-[#555] leading-relaxed">
                <strong>同じ鉢を数年そのまま置き続けるなら購入、入れ替えや枯れたときの手当・日々の管理まで任せたいならサブスク（レンタル）が有利です。</strong>
                購入は最初に植物代・鉢代・送料がかかる代わりに以降の固定費が下がり、月額制は初期費用を抑えられる代わりに使っている間ずっと支払いが続きます。
                損益が入れ替わる時期は鉢のサイズ・月額・入れ替え頻度で変わるため一律には示せません。判断に迷う場合は<strong>「購入価格 ÷ 月額」で何か月分に相当するか</strong>を出し、その月数より長く置く見込みがあるかで決めてください。
              </p>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              当サイトでの用語の使い分けは次のとおりです。植物を購入して自分のものにし、自分で育てる形態を「購入型」、月額で借りる形態を「レンタル型」と呼びます。レンタル型には交換・返却があり、訪問メンテナンス込みのプランもあります。支払いを終えた後に植物が手元に残るかどうかが大きく異なります。公式価格を使った試算は<a href="/guides/kanyou-shokubutsu-ryokin/#shisan" className="text-[#4A7C59] underline mx-1">観葉植物の料金の考え方</a>に掲載しています。
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border-2 border-[#4A7C59] p-6 bg-[#F8F8F8]">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">買って育てたい方（購入型）</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>単品購入が基本の選択肢</strong>です。AND PLANTSではパキラ M（高さ目安75〜110cm）が13,980円（税込・送料無料）で、到着後2週間以内の初期不良等には交換・返金の対応があります（2026年10月19日公式確認）。届いた植物は自分のものになるため、長く置くほど1か月あたりの負担は下がります。
                </p>
                <a href="#osusume-3sen" className="text-sm text-[#4A7C59] font-medium underline">→ 購入型・レンタル型のおすすめ3選を見る</a>
              </div>
              <div className="rounded-xl border border-[#E5E5E5] p-6 bg-[#F8F8F8]">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">借りて任せたい方（レンタル型）</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  大型グリーンを手間をかけずに維持したい場合や、入れ替えを前提にする場合は、<strong>レンタルが有力な選択肢</strong>です。生きた植物の訪問メンテナンス付きレンタルは法人向けが中心で、HitoHana Rental Green（月2回訪問・法人専用）やGOOD GREEN（3か月に1回交換可）があります。個人宅ではCLASのフェイクグリーンのレンタルが利用できます。
                </p>
                <p className="text-xs text-[#999] leading-relaxed">
                  オフィス・店舗での導入（管理担当を置けない、メンテナンス込みにしたい、対応エリアを確認したい）は
                  <a href="/guides/houjin-office/" className="text-[#4A7C59] underline mx-1">法人・オフィス向けガイド</a>
                  、料金の決まり方や予算の立て方は
                  <a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] underline mx-1">観葉植物の料金の考え方</a>
                  にまとめています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Difference ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクと観葉植物サブスクの違い
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">比較項目</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">花のサブスク</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">観葉植物サブスク</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "楽しめる期間", flower: "切り花のため次の便までが目安（日持ちは花材・季節で変わる）", plant: "鉢植えのため、管理しだいで長く置ける" },
                    { item: "お手入れ", flower: "花瓶の水替え・茎の切り戻し", plant: "土の乾き具合を見て水やり（頻度は種類・季節・置き場所で変わる）" },
                    { item: "費用の払い方", flower: "1回ごとの料金（定期便）", plant: "単品購入、または法人向けレンタルの月額" },
                    { item: "入れ替え", flower: "届くたびに新しい花", plant: "購入は入れ替えなし／レンタルは3か月ごと等の交換あり" },
                    { item: "インテリア効果", flower: "華やかさ・季節の彩り", plant: "通年で落ち着いた緑" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5]">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className="px-3 py-3 text-center text-[#666]">{row.flower}</td>
                      <td className="px-3 py-3 text-center text-[#666]">{row.plant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Recommendations ─── */}
        <section id="osusume-3sen" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクおすすめ3選
            </h2>
            <div className="space-y-6">
              {[
                {
                  rank: 1,
                  name: "AND PLANTS",
                  nameJa: "アンドプランツ",
                  price: "観葉植物は単品購入（例：パキラ M 13,980円・税込・送料無料）",
                  highlight: "観葉植物と切り花の両方を扱うサービスです。観葉植物は定期便ではなく単品購入で、置き場所の日当たりなどから植物を絞り込める「パーソナル植物診断」と、育て方を記したケアカードがあります。到着後2週間以内であれば、初期不良による傷みや、ケアカードに従って管理したのに枯れた場合などに交換・返金の対象となります（2026年10月19日公式確認）。",
                  features: ["パーソナル植物診断", "到着後2週間以内の交換・返金対応", "ケアカード付き", "切り花の定期便も提供"],
                  color: "#4A7C59",
                  url: "/services/and-plants",
                },
                {
                  rank: 2,
                  name: "CLAS",
                  nameJa: "クラス",
                  price: "月額レンタル制（商品ごとに表示）",
                  highlight: "家具・家電のレンタルサービスで、観葉植物のカテゴリではフェイクグリーン（人工の観葉植物）と鉢・プランターを扱っています。生きた植物ではないため水やりは不要で、いつでも交換・返却ができます（2026年10月19日公式確認）。法人向けのCLAS Bizもあります。",
                  features: ["フェイクグリーンのレンタル", "いつでも交換・返却が可能", "水やり不要", "法人向けCLAS Bizあり"],
                  color: "#6B8E5B",
                  url: "#",
                },
                {
                  rank: 3,
                  name: "HitoHana",
                  nameJa: "ひとはな",
                  price: "価格帯「3,000円〜」から掲載",
                  highlight: "花の定期便で知られるHitoHanaは、観葉植物の単品購入にも対応しています。個人向けはサブスクではなく購入で、到着時の傷み・破損は到着から7日以内の連絡で返品・交換の対象です。法人向けには、月2回の訪問メンテナンスが付くレンタル「HitoHana Rental Green」があります（2026年10月19日公式確認）。",
                  features: ["価格帯・サイズから選べる", "ギフト対応あり", "到着から7日以内の返品・交換", "法人向けレンタルグリーンあり"],
                  color: "#8B6F5C",
                  url: "/services/hitohana",
                },
              ].map((item) => (
                <div key={item.rank} className={`bg-white rounded-xl overflow-hidden ${item.rank === 1 ? "border-2 border-[#4A7C59]" : "border border-[#E5E5E5]"}`}>
                  {item.rank === 1 && (
                    <div className="bg-[#4A7C59] text-white text-xs text-center py-1.5 font-bold">おすすめ第1位</div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shrink-0" style={{ backgroundColor: item.color }}>
                        {item.rank}位
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#333] mb-1">{item.name}（{item.nameJa}）</h3>
                        <p className="text-sm text-[#4A7C59] font-medium">{item.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">{item.highlight}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.map((f, fi) => (
                        <span key={fi} className="bg-[#F8F8F8] text-[#666] text-xs px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    {item.url !== "#" && (
                      <a href={item.url} className="inline-block text-sm text-[#4A7C59] font-medium hover:underline">
                        {item.name}の詳細を見る →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Head-to-head comparison ─── */}
        <section id="vs" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              サービス同士の直接比較と選び分け
            </h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              各社は仕組みが異なるため、当サイトでは優劣ではなく、利用者に合う仕組みかどうかを基準に比較しています。上の比較表の項目にもとづき、2社ずつ対比します（2026年10月19日公式確認）。
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "AND PLANTS × HitoHana Rental Green｜買って育てるか、借りて任せるか",
                  left: {
                    name: "AND PLANTS",
                    points: [
                      "単品購入。届いた植物は自分のものになる",
                      "例：パキラ M 13,980円・L 19,850円（税込・送料無料）",
                      "到着後2週間以内の初期不良等は交換・返金",
                      "水やりなどの管理は自分で行う",
                    ],
                  },
                  right: {
                    name: "HitoHana Rental Green",
                    points: [
                      "法人専用のレンタル（個人宅は対象外）",
                      "ノーマルM 月1,600円・L 月2,300円（1鉢・税別）",
                      "月2回の訪問メンテナンス・傷んだ場合は交換",
                      "最低契約期間1年・1拠点あたり7,800円以上",
                    ],
                  },
                  verdict: "長く同じ植物を育てたい場合や、個人宅に置く場合はAND PLANTSが適しています。水やりや交換を任せたい法人で、首都圏などの対応エリアに拠点がある場合はHitoHana Rental Greenが適しています。",
                },
                {
                  title: "HitoHana Rental Green × GOOD GREEN｜メンテナンス込みで任せるか、入れ替え頻度で選ぶか",
                  left: {
                    name: "HitoHana Rental Green",
                    points: [
                      "全プラン月2回訪問（水やり・剪定・病害虫駆除）",
                      "1鉢から（1拠点あたり7,800円以上）",
                      "季節ごとの定期入れ替えの記載はなし",
                      "最低契約期間1年",
                    ],
                  },
                  right: {
                    name: "GOOD GREEN",
                    points: [
                      "3か月に1回交換可（スタートアップは6か月に1回）",
                      "訪問はメンテナンスプランのみ（M・L 5鉢以上）",
                      "枯れた場合は回数の制限なく無料交換",
                      "1鉢単位のプランは最短利用期間なし",
                    ],
                  },
                  verdict: "社内の作業をなくしたい場合はHitoHana Rental Green、植物を定期的に入れ替えたい場合や、水やりは社内で行い費用を抑えたい場合はGOOD GREENが適しています。",
                },
                {
                  title: "CLAS × HitoHana｜水やり不要のフェイクグリーンか、生きた植物を買うか",
                  left: {
                    name: "CLAS",
                    points: [
                      "フェイクグリーンと鉢・プランターのレンタル",
                      "いつでも交換・返却が可能",
                      "水やり不要",
                      "法人向けのCLAS Bizあり",
                    ],
                  },
                  right: {
                    name: "HitoHana",
                    points: [
                      "生きた観葉植物の単品購入（価格帯「3,000円〜」）",
                      "到着から7日以内の連絡で返品・交換",
                      "管理は自分で行う",
                      "法人向けにレンタルグリーンもあり",
                    ],
                  },
                  verdict: "日当たりが確保できない場所や、模様替えのたびに替えたい場合はCLASのフェイクグリーン、生きた植物を長く育てたい場合はHitoHanaが適しています。",
                },
              ].map((v, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                  <h3 className="text-base font-bold text-[#333] mb-4">{v.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[v.left, v.right].map((s, si) => (
                      <div key={si} className="rounded-lg bg-[#F8F8F8] p-4 border border-[#E5E5E5]">
                        <p className="text-sm font-bold text-[#4A7C59] mb-2">{s.name}</p>
                        <ul className="space-y-1.5">
                          {s.points.map((p, pi) => (
                            <li key={pi} className="text-xs text-[#666] leading-relaxed">・{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed mt-4 pt-4 border-t border-[#E5E5E5]">
                    <strong className="text-[#333]">選び分け：</strong>{v.verdict}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-5">
              ※ 対比に使用した項目は、上の比較表と同じく当サイトが公式サイトで確認できた情報に限っています。記載のない項目は推測で補っていません。
            </p>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスク・レンタルを選ぶ際の3つのポイント
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "置き場所に合ったサイズを選ぶ", text: "デスクや棚に置くならミニサイズ（15〜30cm）、リビングに飾るならミディアム（50〜100cm）、シンボルツリーなら大型（100cm以上）が目安です。サイズの区切り方はサービスごとに異なるため（例：HitoHana Rental GreenのMは80〜100cm、GOOD GREENのMは50〜130cm）、申し込み前に高さの数値でご確認ください。" },
                { num: "2", title: "日当たりの条件を確認する", text: "窓際で日光が入る部屋なら選択肢は豊富ですが、日当たりの悪い部屋でも育つ耐陰性の強い植物（ポトス、サンスベリア、モンステラなど）もあります。日照が確保できない場所には、水やりも不要なフェイクグリーンという選択肢もあります。" },
                { num: "3", title: "交換の条件と期限を確認する", text: "購入型の交換は到着時の不具合などが対象で、期限があります（AND PLANTSの観葉植物は到着後2週間以内、HitoHanaは到着から7日以内）。期限後に枯れた場合も交換してほしいときは、GOOD GREEN（枯れた場合は回数の制限なく無料交換）のようなレンタルが該当します（2026年10月19日公式確認）。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-5">
              置き場所の明るさの見極め方、水やりの頻度、季節ごとの管理、枯らさないための確認事項は
              <a href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の育て方・置き場所ガイド</a>
              で解説しています。育て方の条件が決まると、選ぶべきサービスも絞り込みやすくなります。
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden bg-white">
                  <summary className="px-5 py-4 cursor-pointer hover:bg-[#E8F0EB] transition-colors text-sm font-medium text-[#333]">Q. {item.q}</summary>
                  <div className="px-5 py-4 border-t border-[#E5E5E5]">
                    <p className="text-sm text-[#666] leading-relaxed">A. {item.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-[#E5E5E5] bg-white p-5">
              <p className="text-sm font-bold text-[#333] mb-2">目的別の関連ページ</p>
              <ul className="space-y-2 text-sm text-[#666] leading-relaxed">
                <li>・置き場所・日当たり・水やりなど<strong>育て方</strong>を知りたい：<a href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物の育て方・置き場所ガイド</a></li>
                <li>・<strong>料金の決まり方・予算の立て方</strong>を知りたい：<a href="/guides/kanyou-shokubutsu-ryokin/" className="text-[#4A7C59] underline">観葉植物のサブスク・レンタル料金の考え方</a></li>
                <li>・オフィス・店舗への<strong>導入手順</strong>を知りたい：<a href="/guides/houjin-office/" className="text-[#4A7C59] underline">法人・オフィス向けガイド</a></li>
                <li>・切り花の<strong>定期便の料金</strong>を比べたい：<a href="/compare/ryokin/" className="text-[#4A7C59] underline">花のサブスク料金比較</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              個人は購入、法人はメンテナンス込みのレンタルから選びます
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              自宅に置く場合は、生きた観葉植物の訪問メンテナンス付きレンタルは個人宅を対象外とするサービスもあるため、購入が基本になります。初心者の方には、当サイトでは<strong>AND PLANTS</strong>をおすすめしています。パーソナル植物診断で置き場所に合う植物を絞り込め、到着後2週間以内の初期不良等には交換・返金の対応があります。会社で管理の手間をなくしたい場合は、月2回の訪問メンテナンスが付くHitoHana Rental Greenや、3か月ごとに入れ替えられるGOOD GREENをご検討ください。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクと観葉植物サブスクを併用すると、グリーンの落ち着いた雰囲気と花の華やかさの両方を楽しめます。まずは一つのサービスから試し、植物のある暮らしをご検討ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/and-plants" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                AND PLANTSの詳細を見る
              </a>
              <a href="/services/medelu" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                花のサブスク medeluを見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline">
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
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年4月時点のものです。最新の料金・サービス内容は各公式サイトでご確認ください。</p>
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
