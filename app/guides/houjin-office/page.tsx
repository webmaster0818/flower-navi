import Link from "next/link";
import Header from "@/app/components/Header";

const faqItems = [
  {
    q: "オフィス・法人向けの花の定期便にはどんな選択肢がありますか？",
    a: "大きく2つあります。①法人専用サービス（例：bloomeeの法人向け『bloomee biz』）と、②個人向けの花のサブスク（medelu・bloomee等）をオフィスで利用する方法です。少量を受付やデスクに飾る程度なら個人向けサブスクで十分ですが、複数拠点・大きめのアレンジ・請求書払いなどが必要なら法人専用サービスが向いています。",
  },
  {
    q: "法人向けの花の定期便の料金はいくらくらいですか？",
    a: "法人専用サービスの料金は、飾る本数・ボリューム・配送頻度・拠点数で変わり、公式サイトでの見積もり・問い合わせが前提になります（一律の公開価格ではありません）。一方、個人向けサブスクをオフィスで使う場合は、medeluのMiniプラン748円（送料無料）やbloomeeの体験プランなど、公式に公開された料金で始められます。まずは個人向けの少量プランで試し、必要に応じて法人プランを検討するのが失敗しにくい進め方です。",
  },
  {
    q: "なぜオフィスに花を置くと良いのですか？",
    a: "受付・応接に花があると来客の第一印象が良くなり、企業の細やかさが伝わります。また、視界に植物や花があることは働く人の気分転換につながるとされ、殺風景になりがちなオフィス空間の演出にも役立ちます。定期便なら枯れる前に新しい花が届くため、担当者が買いに行く手間や、花が枯れたまま放置されるリスクを減らせます。",
  },
  {
    q: "配送や受け取りはオフィスでも問題ないですか？",
    a: "多くのサービスがポスト投函または対面配送に対応しており、オフィスの受付での受け取りが可能です。法人専用サービスでは配送曜日を選べるものもあります（bloomee bizは月・水・金から選択）。不在が多い場合はポスト投函対応や、受け取り曜日を指定できるサービスを選ぶと安心です。",
  },
  {
    q: "花瓶やお手入れの手間はかかりますか？",
    a: "個人向けサブスクの少量プランなら、受付カウンターに置ける小さな花瓶で十分で、水替えと茎のカットが基本のお手入れです。法人専用サービスでは花器込みのプランや、活け替え・回収まで対応するものもあります。手間を最小化したい場合は、こうしたメンテナンス込みのサービスを選ぶとよいでしょう。",
  },
];

/* 法人・オフィスでの観葉植物（グリーン）導入に関するQ&A。
   金額は当サイト掲載サービスの公式確認値のみを使用し、確認日を併記する。 */
const officeGreenFaqItems = [
  {
    q: "初めてオフィスに観葉植物のサブスクを導入します。どこから選べばよいですか？",
    a: "まず「購入型」か「レンタル型」かを決めてください。受付やデスクに小さめのグリーン・花を置くだけなら購入型（届いたものが自社のものになる定期便）、大型のグリーンを常に良い状態で保ちたい・社内に管理担当を置けないならメンテナンス込みのレンタル型が向きます。当サイトでは、購入型としてAND PLANTS（観葉植物と切り花の両方を扱う）、法人向けの花・グリーンの定期便としてbloomee biz、大型観葉植物のレンタルとしてCLAS（法人利用に対応）を掲載しています。人気順を示す公開データは確認できていないため、置き場所・予算・管理体制の3点で絞り込むのが確実です。",
  },
  {
    q: "月額5,000円程度、できれば5,000円以下でオフィスに導入できますか？",
    a: "小さめの1〜数点から始めるなら、月5,000円以内は現実的な予算です。当サイトが公式で確認できている1回あたりの価格は、medeluのMiniプラン748円（送料込み・ポスト投函・2026年7月3日確認）からAND PLANTSの定期便ラージ4,980円（送料込み・2026年8月17日確認）までです。毎週配送を月4回として単純計算すると、Miniプランは月およそ2,992円になります。一方、鉢植えの観葉植物レンタルは、当サイト掲載サービスの範囲では月額の公表値を確認できていません。サイズ・鉢数・メンテナンス頻度で変わるため、5,000円以内に収まるかは見積もりで確認してください。",
  },
  {
    q: "数人〜十数人の小規模オフィスでも利用しやすいサービスはありますか？",
    a: "個人向けの少量プランをそのままオフィスで使う方法が手軽です。medeluのMiniプランは1回748円（送料込み）でポスト投函のため、日中に受け取り担当を置きにくい小規模オフィスでも受け取りやすい形式です（2026年7月3日確認）。法人契約で始めるなら、bloomee bizはミニブーケ3束プラン（お花/グリーン4〜5本・全長25〜30cm）でも1回3,000円（税込・送料無料）で、毎週と隔週を選べます（2026年8月17日確認）。拠点が1つで置き場所も1〜2か所なら、まず小さいプランで運用の負荷を確かめる進め方が安全です。",
  },
  {
    q: "社内に管理担当を置けません。管理不要で続けられるサービスはありますか？",
    a: "水やり・剪定・株の入れ替えまでを事業者が行うメンテナンス込みのレンタル契約なら、社内での作業はほとんど発生しません。当サイト掲載ではCLASが大型観葉植物のレンタルに対応し、メンテナンス不要のプランと法人利用があります（料金の公表値は確認できていないため見積もりが前提）。切り花・グリーンの定期便を選ぶ場合は、届いた花を花瓶に入れる・水を替える・次の便が届いたら入れ替える、という作業が残ります。bloomee bizは配送曜日を月・水・金から選べるため、担当者が出社している曜日に合わせられます（2026年8月17日確認）。",
  },
  {
    q: "メンテナンス付きで、植物を枯らす心配が少ないサービスはありますか？",
    a: "枯れたときの手当まで任せたいなら、交換・メンテナンスが定額に含まれるレンタル型を選んでください。掲載サービスではCLASが大型観葉植物のレンタルに対応し、交換・返却とメンテナンス不要プランがあります。購入型の定期便を選ぶ場合は、到着時の傷み・不具合に対する無料交換の受付期限がサービスごとに定められています。期限は「到着後◯日以内に連絡」という短い形で設定されていることがあるため、申込前に各公式サイトの記載を必ず確認してください。",
  },
  {
    q: "エントランスや受付をおしゃれに見せたい場合、何を置けばよいですか？",
    a: "来客の視線が最初に届く一点に絞り、床置きの中〜大型グリーンか、受付カウンター上の小さな花のどちらかから始めると計画が立てやすくなります。大型グリーンは搬入と入れ替えの負担が大きいためレンタル型、カウンター上の彩りは定期便が向きます。bloomee bizのブーケ1束プランはお花/グリーン10本以上・全長30〜35cm、ミニブーケ3束プランは4〜5本・全長25〜30cmで、いずれも1回3,000円（税込・送料無料）です（2026年8月17日確認）。全長30cm前後は受付カウンターに置いても書類や来客の視線を遮りにくいサイズです。",
  },
  {
    q: "東京で観葉植物のサブスク・レンタルを使う場合、相場はいくらくらいですか？",
    a: "当サイトが公式で確認できている価格は、切り花・グリーンの定期便で1回748円〜4,980円（いずれも送料込み）、法人向けのbloomee bizで1回3,000円（税込・送料無料）です。鉢植えの観葉植物レンタルについては、掲載サービスの範囲で月額の公表値を確認できていません。また、東京だけの相場を示す公表データも確認できていないため、当サイトではエリア別の金額を断定していません。実際の金額はサイズ・鉢数・訪問メンテナンスの頻度で変わるため、見積もりで確認してください。",
  },
  {
    q: "東京23区に対応していますか？対応エリアはどう確認すればよいですか？",
    a: "宅配やポスト投函で届く定期便は、東京23区は基本的に配送対象と考えて差し支えありませんが、訪問メンテナンスを伴うレンタルは事業者ごとの訪問可能エリアの確認が必要です。bloomee bizは公式サイトで対応エリアの記載を確認できませんでした（2026年8月17日確認）。複数の拠点・支社への導入は相談を受け付けると記載があるため、拠点の住所を伝えて可否と料金を確認するのが確実です。あわせてビル側の荷受けルール（時間指定・受付止め・台車の使用可否）も確認しておくと、初回の受け取りでつまずきにくくなります。",
  },
  {
    q: "季節ごとに植物を変更できるサービスはありますか？",
    a: "毎回内容が変わるのは切り花・ブーケの定期便で、観葉植物そのものを季節ごとに入れ替えたい場合は交換に対応するレンタル型が該当します。観葉植物は常緑の種類が中心のため、鉢そのものの見た目が季節で大きく変わるわけではありません。季節感を出したい場合は、ベースのグリーンは据え置きにして、受付やテーブルの花だけを定期便で入れ替える組み合わせが運用しやすい形です。bloomee bizは申込時に毎週と隔週を選べます（2026年8月17日確認）。",
  },
  {
    q: "月額制のサブスク・レンタルと購入では、どちらがお得ですか？",
    a: "同じ鉢を数年そのまま置き続けるなら購入、入れ替えや枯れたときの手当・日々の管理まで任せたいならレンタルが向きます。購入は初期費用がかかる代わりに以降の固定費が下がり、レンタルは初期費用を抑えられる代わりに支払いが続きます。損益が入れ替わる時期は、鉢のサイズ・レンタル料金・入れ替え頻度で変わるため一律には示せません。当サイトでは掲載サービスの観葉植物レンタルの月額を公式で確認できていないため、見積もりを取ったうえで「購入価格÷月額」で何か月分に相当するかを比べる方法をおすすめします。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "法人・オフィス向け観葉植物・花の定期便【2026年】月額の目安とメンテナンス付きの選び方",
  description: "オフィス・店舗向けの観葉植物と花の定期便（サブスク・レンタル）の選び方・月額の目安・メンテナンス付きの可否を、公式確認できる料金だけで整理。",
  datePublished: "2026-07-18T00:00:00+09:00",
  dateModified: "2026-08-17T00:00:00+09:00",
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
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">法人・オフィス向けガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              法人・オフィス向け 観葉植物・花の定期便<br className="hidden md:block" />
              メリットと選び方・月額の目安【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              受付・応接・店舗に花を飾りたい法人の方へ。法人専用サービスと個人向けサブスクのオフィス利用の違い、
              メリット、費用の目安を、公式で確認できる料金だけで整理します。
            </p>
            <p className="text-sm text-[#666] max-w-2xl mx-auto leading-relaxed mt-4">
              観葉植物（グリーン）をオフィスに置く場合の
              <Link href="#office-green-faq" className="text-[#4A7C59] font-medium underline">月額の目安・メンテナンス付きの可否・小規模オフィスでの始め方</Link>
              は、下の「法人・オフィス導入のよくある質問」で即答形式にまとめています。
            </p>
          </div>
        </section>

        {/* 30秒サマリー */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">結論：まず個人向け少量プランで試し、規模に応じて法人プランへ</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・少量を受付やデスクに飾る程度なら<strong>個人向けサブスク（medelu 748円・送料無料〜）</strong>で十分。</li>
                <li>・複数拠点・大きめのアレンジ・請求書払い・活け替え回収まで必要なら<strong>法人専用サービス（bloomee biz など）</strong>。</li>
                <li>・法人プランは本数・頻度・拠点数で変わり<strong>公式見積もりが前提</strong>（一律の公開価格ではありません）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* メリット */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">オフィスに花を置く4つのメリット</h2>
            <div className="space-y-4">
              {[
                { t: "来客の第一印象が良くなる", d: "受付・応接に花があると、来訪者に清潔感と細やかさが伝わります。商談前の印象づくりに効果的です。" },
                { t: "働く人の気分転換になる", d: "視界に花や植物があることは、働く人の気分転換につながるとされます。殺風景になりがちな執務スペースの雰囲気を和らげます。" },
                { t: "空間演出の手間を減らせる", d: "定期便なら枯れる前に新しい花が届くため、担当者が花を買いに行く手間や、枯れた花が放置されるリスクを抑えられます。" },
                { t: "コストを管理しやすい", d: "都度購入より定額のサブスクの方が予算管理がしやすく、経費処理もシンプルになります（勘定科目は税理士にご確認ください）。" },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#4A7C59] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#333] mb-1">{m.t}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選び方（2つの選択肢） */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">2つの選択肢と選び方</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-[#E8E0D5] p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">① 個人向けサブスクをオフィスで使う</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  受付やデスクに少量の花を飾るなら、公式に料金が公開された個人向けサブスクが手軽です。
                  <strong>medeluのMiniプラン748円（送料無料）</strong>など、少人数オフィスに向いています。
                </p>
                <Link href="/compare/ryokin/" className="text-sm text-[#4A7C59] font-medium underline">個人向けサブスクの料金を比較する</Link>
              </div>
              <div className="rounded-xl border border-[#E8E0D5] p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">② 法人専用サービスを使う</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  複数拠点・大きめのアレンジ・請求書払い・活け替え回収などが必要なら法人専用サービスが向いています。
                  <strong>bloomeeの法人向け「bloomee biz」</strong>は配送曜日（月・水・金）を選べるなど、法人ニーズに対応しています（料金は公式見積もり）。
                </p>
                <a href="https://business.bloomeelife.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#4A7C59] font-medium underline">bloomee biz（法人向け）公式を見る</a>
                <p className="text-sm text-[#666] leading-relaxed mt-3">
                  受付・応接に飾るグリーンも検討するなら、法人利用に対応したレンタルも含めて
                  <Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物のサブスク・レンタル比較</Link>
                  で整理しています。購入型とレンタル型の基本的な違いは
                  <Link href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物のサブスクの選び方</Link>
                  もあわせてご覧ください。
                </p>
              </div>
            </div>
            <p className="text-xs text-[#999] mt-4">※法人専用サービスの料金は本数・頻度・拠点数で変わるため、公式サイトでの見積もり・問い合わせが前提です。個人向けの料金は各サービス公式の公表値です。</p>
          </div>
        </section>

        {/* 購入とレンタルの比較（法人・オフィスの観葉植物） */}
        <section id="kaitori-rental" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              オフィスの観葉植物は購入とレンタル、どちらが得か
            </h2>
            <div className="bg-white border-2 border-[#4A7C59] rounded-2xl p-6 mb-6">
              <p className="text-sm text-[#555] leading-relaxed">
                <strong>同じ鉢を数年そのまま置き続けるなら購入、入れ替えや枯れたときの手当・日々の管理まで任せたいならレンタルが向きます。</strong>
                購入は初期費用がかかる代わりに以降の固定費が下がり、レンタルは初期費用を抑えられる代わりに支払いが続きます。
                損益が入れ替わる時期は鉢のサイズ・レンタル料金・入れ替え頻度で変わるため、当サイトでは一律の金額としては示していません。
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-[#F3EDE6]">
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">比較の観点</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">購入型（買い切り・定期便）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">レンタル型（メンテナンス付き）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "初期費用",
                      buy: "植物・鉢の代金が最初に発生。掲載サービスの定期便は1回748円〜4,980円（送料込み）で始められる。",
                      rent: "まとまった初期費用は抑えやすい。掲載サービスでは月額の公表値を確認できておらず、見積もりが前提。",
                    },
                    {
                      item: "入れ替え",
                      buy: "自社で買い替え・処分まで行う。切り花・ブーケの定期便は届くたびに内容が入れ替わる。",
                      rent: "契約内容に応じて事業者が交換。大型グリーンの搬入・搬出も任せられる契約がある。",
                    },
                    {
                      item: "枯れたときの対応",
                      buy: "原則は自社負担で買い直し。到着時の傷み・不具合は各社が定める受付期限内なら無料交換の対応がある（期限は公式で要確認）。",
                      rent: "交換込みの契約なら事業者が対応。状態が悪くなった株の入れ替えを依頼できる。",
                    },
                    {
                      item: "管理の手間",
                      buy: "水やり・剪定・受け取りは自社で対応。ポスト投函対応のプランなら受け取りの負担は小さい。",
                      rent: "訪問メンテナンスが付く契約なら社内の作業はほとんど発生しない。",
                    },
                    {
                      item: "向いているケース",
                      buy: "置き場所が固定・少量・予算を明確にしたい小規模オフィス。",
                      rent: "大型グリーン・複数拠点・管理担当を置けない体制。",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E8E0D5] align-top">
                      <td className="px-3 py-3 font-medium text-[#333] whitespace-nowrap">{row.item}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.buy}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.rent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] mt-4">
              ※金額は当サイト掲載サービスの公式確認値のみを記載しています。1回748円はmedeluのMiniプラン（送料込み・2026年7月3日確認）、
              4,980円はAND PLANTSの定期便ラージ（送料込み・2026年8月17日確認）です。鉢植えの観葉植物レンタルの月額は、掲載サービスの範囲では公表値を確認できていません。
            </p>
          </div>
        </section>

        {/* 東京・23区での導入 */}
        <section id="tokyo-23ku" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              東京・23区のオフィスに導入するときの確認ポイント
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              <strong>宅配・ポスト投函で届く定期便は東京23区なら基本的に配送対象ですが、訪問メンテナンスを伴うレンタルは事業者ごとに訪問可能エリアの確認が必要です。</strong>
              エリア別の相場を示す公表データは確認できていないため、当サイトでは東京・23区に限った金額は示していません。
            </p>
            <div className="space-y-4">
              {[
                { t: "配送エリアと訪問エリアは別物として確認する", d: "花・グリーンが届くかどうかと、定期的に人が来て手入れをしてくれるかどうかは条件が異なります。bloomee bizは公式サイトで対応エリアの記載を確認できませんでした（2026年8月17日確認）。複数の拠点・支社への導入は相談を受け付けると記載があるため、拠点の住所を伝えて可否を確認してください。" },
                { t: "ビルの荷受けルールを先に押さえる", d: "時間指定の可否、受付止めにできるか、台車の使用や搬入経路の制限があるかは、初回の受け取りでつまずきやすい箇所です。大型グリーンを入れる場合はエレベーターのサイズも確認しておくと安心です。" },
                { t: "テナント規約と設置場所の条件を確認する", d: "水回りの使用、床の耐荷重、避難動線を塞がないことなど、共用部に置く場合はビル側の規約に沿う必要があります。エントランスに大型を置く計画なら、管理会社への事前確認をおすすめします。" },
                { t: "金額はエリアではなく条件で決まる", d: "サイズ・鉢数・訪問メンテナンスの頻度・拠点数で変わるため、23区内かどうかだけでは決まりません。見積もりを取り、当サイト掲載の公式確認値（切り花・グリーンの定期便で1回748円〜4,980円、法人向けbloomee bizは1回3,000円・税込・送料無料）と比べる進め方が確実です。" },
              ].map((m, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#4A7C59] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#333] mb-1">{m.t}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 法人・オフィス導入のよくある質問 */}
        <section id="office-green-faq" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              よくある質問（法人・オフィス導入）
            </h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              オフィス・受付・エントランスへの観葉植物やグリーンの導入で、実際に多く寄せられる質問に結論から回答します。
              金額は当サイト掲載サービスの公式確認値のみを使用し、確認できていない範囲は「見積もりで確認」と明記しています。
            </p>
            <div className="space-y-3">
              {officeGreenFaqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <summary className="font-bold text-[#333] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#666] leading-relaxed">A. {f.a}</p>
                </details>
              ))}
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-6">
              サービスごとの違いを一覧で見たい方は
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] font-bold underline">観葉植物のサブスク・レンタル比較</Link>
              へ。購入型とレンタル型の基本は
              <Link href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] font-bold underline">観葉植物のサブスクの選び方</Link>
              で解説しています。
            </p>
            <p className="text-xs text-[#999] mt-4">
              ※料金・条件の確認日：medelu・bloomeeの個人向けプランは2026年7月3日、AND PLANTSの定期便料金とbloomee biz（法人向け）の料金・配送条件は2026年8月17日に各公式サイトで確認した値です。最新の内容は各公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* サービスへの導線 */}
        <section className="py-12 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">まずは個人向けの少量プランで試す</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/medelu" className="bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">medelu（748円・送料無料）</Link>
              <Link href="/services/bloomee" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">bloomee</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">料金を比較する</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">よくある質問</h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5">
                  <summary className="font-bold text-[#333] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#666] leading-relaxed">A. {f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
