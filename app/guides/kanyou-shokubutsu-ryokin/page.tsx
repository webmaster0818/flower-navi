import Link from "next/link";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";

const UPDATED = "2026年9月16日";

/* 表示する金額は data/services.ts の公式確認値のみを使用する。
   鉢植えの観葉植物レンタルの月額は公表値を確認できていないため、当ページでは金額を断定しない。 */
const sorted = [...SERVICES].sort((a, b) => a.cheapest.price - b.cheapest.price);

function yen(n: number) {
  return n.toLocaleString("ja-JP");
}

const faqItems = [
  {
    q: "観葉植物のサブスク・レンタルの料金は何で決まりますか？",
    a: "植物そのものの値段よりも「サイズ」「鉢数」「購入型かレンタル型か」「訪問メンテナンスの有無と頻度」「個人利用か法人契約か」の5つで決まります。同じ種類の植物でも、卓上サイズを1鉢置くのか、床置きの大型を複数置いて定期的に人が手入れに来るのかで、費用の性質がまったく変わります。まずこの5つを自分の条件で埋めてから金額を尋ねると、見積もりの精度が上がります。",
  },
  {
    q: "月額5,000円以下で観葉植物のサブスクを始められますか？",
    a: "予算を「1か所あたり月いくらか」に分解してから判断してください。当サイトが公式で確認できている切り花・グリーンの定期便の価格は1回748円から4,980円（いずれも送料の扱いを併記）で、この範囲なら月の予算5,000円は現実的な水準です。一方、鉢植えの観葉植物レンタルについては、当サイト掲載サービスの範囲では月額の公表値を確認できていないため、5,000円以内に収まるかどうかを当サイトで断定することはできません。サイズ・鉢数・メンテナンス頻度を決めたうえで見積もりを取り、送料や交換費が予算の内側か外側かを確認するのが確実です。",
  },
  {
    q: "初期費用と月額は、それぞれ何にかかる費用ですか？",
    a: "購入型の初期費用は植物代と鉢代、そして送料です。買ったあとは水やりや用土の入れ替えなど自分で行う分の実費しかかからないため、継続してかかる固定費は下がります。レンタル型は、まとまった初期費用を抑えられる代わりに、契約している間ずっと月額を支払い続けます。加えて、搬入・設置の費用、撤去や返却時の費用、途中解約の扱いが別に定められていることがあるため、月額だけを比べず契約全体の費目で確認してください。",
  },
  {
    q: "メンテナンス込みにすると、どのくらい費用の考え方が変わりますか？",
    a: "メンテナンス込みの契約は、金額の中に「人が訪問して作業する時間」が含まれます。そのため訪問の頻度を上げるほど、また拠点が増えるほど金額が上がるのが基本の構造です。当サイト掲載サービスでは訪問頻度の公表値を確認できていないため、回数と金額をセットで見積もりに書いてもらい、作業範囲（水やり・剪定・株の入れ替え・清掃のどこまでか）も書面で確認してください。逆に社内で水やりができる体制があるなら、メンテナンスを外して費用を下げる選択肢もあります。",
  },
  {
    q: "購入とレンタルは、どこで損益が入れ替わりますか？",
    a: "一律の月数では示せません。鉢のサイズ、レンタルの月額、入れ替えの頻度で変わるためです。実務的には、置きたい植物の購入価格と、同等のものをレンタルした場合の月額の見積もりを並べ、「購入価格 ÷ 月額」で何か月分に相当するかを計算してください。その月数より長く置き続ける見込みなら購入、それより短い期間で入れ替える・体制が変わる可能性があるならレンタルが向きます。枯れたときの買い直しの費用をどちらが負担するかも、この計算に含めて判断してください。",
  },
  {
    q: "個人で使う場合と法人で契約する場合で、料金の出方は違いますか？",
    a: "違います。個人向けの定期便は公式サイトに価格が公開されていることが多く、申し込み前に総額を計算できます。法人契約は、鉢数・拠点数・訪問頻度・請求方法などの条件で内容が変わるため、公開価格ではなく見積もりが前提になります。したがって個人向けは「公開価格を比べる」、法人向けは「同じ条件を書いた依頼文で複数社から見積もりを取る」という、比較の方法そのものが変わります。法人での進め方は法人・オフィス向けガイドにまとめています。",
  },
  {
    q: "見落としやすい費用にはどんなものがありますか？",
    a: "送料、最低受取回数、途中解約の扱い、搬入・設置の費用、撤去や返却の費用の5つです。特に送料は、価格に含まれる場合と別建ての場合があり、北海道・沖縄・離島は追加送料または配送対象外となることがあります。最低受取回数がある場合は「1回の価格 × 最低回数」が実質の最低支払額になります。当サイトの料金比較表では、送料の扱いと最低受取回数を価格と同じ行に併記しています。",
  },
  {
    q: "当サイトに載っている金額は、どこまで信用できますか？",
    a: "当サイトに掲載している金額は、各サービスの公式サイトで確認できた値のみです。確認日を併記し、確認できていない項目は「公式サイトで要確認」と明記しています。相場として広く言われている金額であっても、当サイトの掲載サービスで裏が取れないものは金額として記載していません。申し込み・契約の前には、必ず各公式サイトで最新の料金と条件をご確認ください。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "観葉植物のサブスク・レンタル料金の考え方【2026年9月】相場が決まる5つの条件と予算の立て方",
  description:
    "観葉植物のサブスク・レンタルの金額が何で変わるのか、初期費用と月額の内訳、メンテナンスの有無による違い、個人と法人の違いを整理し、予算から選ぶときの考え方をまとめる。",
  datePublished: "2026-09-16T00:00:00+09:00",
  dateModified: "2026-09-16T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/guides/kanyou-shokubutsu-ryokin/" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://ohana-delivery.com" },
    { "@type": "ListItem", position: 2, name: "ガイド", item: "https://ohana-delivery.com/guides/kanyou-shokubutsu/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "観葉植物のサブスク・レンタル料金の考え方",
      item: "https://ohana-delivery.com/guides/kanyou-shokubutsu-ryokin/",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function KanyouShokubutsuRyokinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Header />

      <main>
        {/* パンくず */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><Link href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</Link></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">観葉植物の料金の考え方</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ヒーロー */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">料金ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              観葉植物のサブスク・レンタル料金の考え方【2026年】<br className="hidden md:block" />
              金額が決まる5つの条件と、予算から選ぶ手順
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              「いくらかかるのか」は、植物の種類よりも<strong>サイズ・鉢数・購入かレンタルか・メンテナンスの有無・個人か法人か</strong>で決まります。
              このページでは金額そのものを当てにいくのではなく、自分の条件で費用を見積もれるようになるための考え方を整理します。
            </p>
            <p className="text-xs text-[#999] max-w-2xl mx-auto leading-relaxed mt-4">
              掲載している金額は、当サイトが各サービスの公式サイトで確認できた値のみです。確認できていない金額は記載していません（最終更新：{UPDATED}）。
            </p>
          </div>
        </section>

        {/* 結論サマリー */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">結論：料金は「何を置くか」ではなく「誰が管理するか」で決まる</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・自分で水やりまで行う<strong>購入型</strong>は、最初に植物代・鉢代・送料がかかり、その後の固定費は小さくなります。</li>
                <li>・管理まで任せる<strong>レンタル型</strong>は、初期費用を抑えられる代わりに、契約している間ずっと月額を払い続けます。</li>
                <li>・予算を決めるときは「月◯円」ではなく<strong>「1か所あたり月◯円 × 置く場所の数」</strong>に分解すると、見積もりとの突き合わせが一気に楽になります。</li>
                <li>・鉢植えの観葉植物レンタルの月額は、当サイト掲載サービスの範囲では公表値を確認できていません。<strong>金額は見積もりで確認</strong>してください。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 1. 金額が変わる5つの条件 */}
        <section id="kakaku-youin" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物のサブスク・レンタルで金額が変わる5つの条件
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              同じ「観葉植物のサブスク」という言葉でも、届く形も費用の性質も大きく違います。金額を尋ねる前に、次の5つを自分の条件で埋めてください。ここが決まっていないと、どのサービスに聞いても「場合によります」という回答しか返ってきません。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "① 植物のサイズ",
                  d: "卓上に置くミニサイズ（15〜30cm程度）、棚やカウンターに置く中型、床に直接置く大型（100cm以上）では、植物そのものの価格も、運ぶ手間も、必要な鉢の大きさも変わります。大型は搬入経路やエレベーターの制約が出るため、配送・設置の条件が費用に反映されやすい部分です。まず「床に置くのか、棚の上に置くのか」から決めると迷いません。",
                },
                {
                  t: "② 鉢数と置き場所の数",
                  d: "1鉢だけなのか、受付・会議室・執務スペースに分けて複数置くのかで、費用は単純に鉢数分だけ増えるわけではありません。訪問メンテナンスが付く契約では、同じ建物にまとめて置くほど1鉢あたりの負担は下がり、拠点が分かれるほど上がります。置き場所を図に書き出し、フロアと部屋ごとに何鉢かを数えておくと、見積もりの比較がしやすくなります。",
                },
                {
                  t: "③ 購入型かレンタル型か",
                  d: "購入型は、届いた植物がそのまま自分（自社）のものになります。支払いは購入時に発生し、以降は管理の実費だけです。レンタル型は植物を借りる契約なので、使っている間ずっと支払いが続く代わりに、交換や返却の仕組みが用意されています。この違いは「安いか高いか」ではなく、費用が一度に出るか毎月出るかという性質の違いです。",
                },
                {
                  t: "④ 訪問メンテナンスの有無と頻度",
                  d: "メンテナンス込みの金額には、人が現地に来て作業する時間が含まれます。そのため訪問頻度を上げるほど金額は上がります。当サイト掲載サービスの範囲では訪問頻度の公表値を確認できていないため、回数を条件にしたい場合は「月に何回・1回あたり何を行うか」を明示して見積もりを依頼してください。社内で水やりができるなら、メンテナンスを外して費用を下げる選択肢もあります。",
                },
                {
                  t: "⑤ 個人利用か法人契約か",
                  d: "個人向けの定期便は公式サイトに価格が公開されていることが多く、申し込み前に総額を計算できます。法人契約は鉢数・拠点数・請求方法などで内容が変わるため、公開価格ではなく見積もりが前提です。つまり個人向けは「公開価格を比べる」、法人向けは「同じ条件で複数社に見積もりを依頼する」という比較の方法自体が変わります。",
                },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <h3 className="font-bold text-[#333] mb-2">{m.t}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. 初期費用と月額の内訳 */}
        <section id="uchiwake" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              初期費用と月額（継続費用）の内訳を分けて考える
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              「高い・安い」の判断がぶれる最大の原因は、最初に一度だけかかる費用と、毎月かかり続ける費用を同じ土俵で比べてしまうことです。次の表のように費目を分けてから金額を当てはめると、比較の軸がそろいます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white min-w-[560px]">
                <thead>
                  <tr className="bg-[#F3EDE6]">
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5] w-32">費目</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">購入型（買い切り・定期便）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">レンタル型</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "最初にかかる費用",
                      buy: "植物代と鉢代。受け皿・用土などの用品を別に買う場合はその分も加わります。",
                      rent: "まとまった初期費用は抑えやすい一方、搬入・設置の費用が別建てになる契約があります。",
                    },
                    {
                      item: "毎回・毎月の費用",
                      buy: "定期便なら1回ごとの価格。買い切りなら以降の固定費は発生しません。",
                      rent: "契約している間、月額が継続します。停止するまで支払いが続く性質です。",
                    },
                    {
                      item: "送料・配送費",
                      buy: "価格に含まれる場合と別建ての場合があります。北海道・沖縄・離島は追加送料または対象外の場合があります。",
                      rent: "搬入・入れ替え時の運搬費が月額に含まれるかどうかを個別に確認します。",
                    },
                    {
                      item: "メンテナンス費",
                      buy: "自分（自社）で行うため費用としては出ませんが、作業時間という形の負担は残ります。",
                      rent: "月額に含まれる契約と、別料金の契約があります。頻度と作業範囲で金額が変わります。",
                    },
                    {
                      item: "枯れた・傷んだときの費用",
                      buy: "原則は自己負担での買い直し。到着時の傷み・不具合は各社が定める期限内なら交換対応がある場合があります。",
                      rent: "交換込みの契約なら追加費用なしで対応される場合があります。範囲は契約書で確認します。",
                    },
                    {
                      item: "終わり方にかかる費用",
                      buy: "処分や引き取りを自分で手配します。大型ほど手間がかかります。",
                      rent: "撤去・返却の費用、最低契約期間、途中解約の扱いを事前に確認します。",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E8E0D5] align-top">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.buy}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{row.rent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-4">
              ※ この表は費目の整理であり、金額を示すものではありません。当サイトでは掲載サービスの観葉植物レンタルの月額の公表値を確認できていないため、金額の推計値は掲載していません。
            </p>
          </div>
        </section>

        {/* 3. メンテナンスの有無 */}
        <section id="maintenance" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              メンテナンスの有無で、料金の中身はどう変わるか
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              メンテナンス込みの金額は、植物の値段に人の作業時間が上乗せされた構造になっています。したがって「同じ植物なのに金額が違う」のではなく、「金額に含まれている作業が違う」と考えるのが正確です。見積もりを読むときは、次の3点が書かれているかを確認してください。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "訪問の頻度が書かれているか",
                  d: "月1回なのか月2回なのか、あるいは季節ごとなのかで金額は変わります。当サイト掲載サービスの範囲では訪問頻度の公表値を確認できていないため、回数は当サイトでは断定していません。回数を条件にしたい場合は、依頼文に「月◯回」と明記して見積もりを取り、契約書にも回数が記載されるかを確認してください。",
                },
                {
                  t: "1回あたりの作業範囲が書かれているか",
                  d: "水やりだけなのか、剪定・葉の清掃・肥料・害虫のチェックまで含むのか、状態が悪くなった株の入れ替えまで含むのかで、同じ「メンテナンス込み」でも中身が大きく異なります。範囲が書かれていない見積もりは、後から追加費用が出やすい形です。",
                },
                {
                  t: "交換の条件が書かれているか",
                  d: "枯れた場合に無償で交換されるのか、有償なのか、そもそも交換の対象外なのかは契約ごとに違います。購入型の定期便でも、到着時の傷み・不具合に対する交換には受付期限が設けられていることがあり、「到着後◯日以内に連絡」という短い期限の場合があります。期限と対象範囲は申し込み前に各公式サイトで確認してください。",
                },
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
            <p className="text-sm text-[#666] leading-relaxed mt-6">
              管理を任せたいのか、自分で育てたいのかが決まると、選ぶべき仕組みも絞れます。仕組みごとの違いは
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物は購入とサブスク・レンタルどちらが得か</Link>
              で、水やりや置き場所など実際の手入れは
              <Link href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物の育て方・置き場所ガイド</Link>
              で解説しています。
            </p>
          </div>
        </section>

        {/* 4. 購入とレンタルの比べ方 */}
        <section id="kaikata" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              購入とレンタルの費用を比べる手順
            </h2>
            <div className="bg-[#FAF7F2] border-2 border-[#4A7C59] rounded-2xl p-6 mb-6">
              <p className="text-sm text-[#555] leading-relaxed">
                <strong>「購入価格 ÷ レンタルの月額」で、何か月分に相当するかを出してください。</strong>
                その月数より長く置き続ける見込みなら購入、それより短い期間で入れ替える可能性があるならレンタルが向きます。
                損益が入れ替わる時期は鉢のサイズ・月額・入れ替え頻度で変わるため、一律の月数としては示せません。
              </p>
            </div>
            <ol className="space-y-4">
              {[
                { t: "置きたい植物のサイズと鉢数を決める", d: "床置きの大型を1鉢なのか、卓上サイズを3鉢なのかを先に決めます。ここが動くと、以降の金額はすべて動きます。" },
                { t: "購入した場合の総額を出す", d: "植物代・鉢代・送料を足します。自分で管理する前提なので、以降の固定費はかかりません。" },
                { t: "同じ条件でレンタルの月額の見積もりを取る", d: "サイズ・鉢数・設置場所・訪問頻度を書いて依頼します。条件を書かない依頼は、返ってくる金額も比較できません。" },
                { t: "購入価格 ÷ 月額 で月数を出す", d: "この月数が損益の分かれ目の目安です。例えば24か月と出たなら、2年より長く同じ鉢を置く見込みがあるかどうかで判断します。" },
                { t: "枯れたときの費用をどちらが負担するかを足す", d: "購入は自己負担で買い直し、レンタルは交換込みの契約なら事業者側の対応になります。この差は、置き場所の日当たりが悪いほど大きく効いてきます。" },
                { t: "やめるときの費用を確認する", d: "購入は処分や引き取りの手配、レンタルは撤去費・最低契約期間・途中解約の扱いです。ここを見ずに決めると、あとから想定外の支出になります。" },
              ].map((s, i) => (
                <li key={i} className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#4A7C59] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#333] mb-1">{s.t}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. 予算から選ぶ */}
        <section id="yosan" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              予算から選ぶときの考え方（「月額5,000円以内で始めたい」場合）
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              予算が先に決まっている場合、金額の当てっこをしても答えは出ません。予算を分解して、条件のほうを予算に合わせるのが実務的な進め方です。当サイトでは、掲載サービスの観葉植物レンタルの月額の公表値を確認できていないため、「月額5,000円以内で収まる」といった断定はしていません。代わりに、次の順番で条件を調整してください。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "予算を「1か所あたり月いくら」に割る",
                  d: "月5,000円で3か所に置きたいなら、1か所あたりは月1,667円前後です。この数字を持って条件を考えると、大型の床置きを3か所という計画は最初から成立しないと分かります。置き場所を1か所に絞る、あるいはサイズを下げる、という判断が早い段階でできます。",
                },
                {
                  t: "予算の内側に何を含めるかを決める",
                  d: "送料、メンテナンス費、交換費、搬入費のどこまでを5,000円の内側に入れるかを先に決めます。ここを決めずに見積もりを取ると、金額は安いのに総額では予算を超える、という形になりがちです。依頼文には「送料・メンテナンス込みで月◯円以内」と書くのが確実です。",
                },
                {
                  t: "調整はサイズ→鉢数→メンテナンス頻度の順で行う",
                  d: "費用に効きやすいのはサイズです。床置きの大型を棚上の中型に変えるだけで前提が変わります。次に鉢数、最後にメンテナンス頻度を調整します。メンテナンスを最初に削ると、枯らしたときの買い直しで結局支出が増えることがあるため、社内・家庭で水やりができる体制があるかを確認してから外してください。",
                },
                {
                  t: "予算内に収まらないときは「一度に全部置かない」",
                  d: "最初から全フロアに置こうとせず、来客の視線が最初に届く一点だけに置いて運用の負担を確かめる方法があります。1か所で水やりや受け取りの手間が許容できるか分かってから広げるほうが、契約をやり直すより費用の無駄が出ません。",
                },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <h3 className="font-bold text-[#333] mb-2">{m.t}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. 公式確認できている料金 */}
        <section id="kakunin-zumi" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              当サイトが公式で確認できている料金
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              予算の感覚をつかむための参考として、当サイトの掲載サービスについて公式サイトで確認できた価格を掲載します。
              これらは<strong>切り花・グリーンの定期便</strong>の価格であり、鉢植えの観葉植物レンタルの月額ではありません。
              鉢植えのレンタルについては、掲載サービスの範囲では月額の公表値を確認できていないため、当ページでは金額を記載していません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white min-w-[640px]">
                <thead>
                  <tr className="bg-[#F3EDE6]">
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">サービス</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">最安プラン（1回あたり）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">送料の扱い</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">最低受取回数</th>
                    <th className="text-left px-3 py-3 text-xs text-[#666] border-b border-[#E8E0D5]">公式確認日</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((s) => (
                    <tr key={s.id} className="border-b border-[#E8E0D5] align-top">
                      <td className="px-3 py-3 font-medium text-[#333]">
                        <Link href={s.servicePath} className="text-[#4A7C59] underline">{s.name}</Link>
                      </td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">
                        {s.cheapest.name}　{yen(s.cheapest.price)}円（{s.cheapest.flowers}）
                      </td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{s.shippingNote}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">
                        {s.minDeliveries ? `${s.minDeliveries}回` : "縛りなし"}
                      </td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed whitespace-nowrap">{s.verifiedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#555] leading-relaxed mt-6">
              観葉植物と切り花の両方を扱うサービスもあります。上の表のうち
              <Link href="/services/and-plants/" className="text-[#4A7C59] underline mx-1">AND PLANTS</Link>
              は切り花の定期便に加えて観葉植物も扱っていますが、観葉植物は単品購入のため、価格は公式サイトでご確認ください。
              プラン別の価格や1本あたりの単価まで比べたい場合は
              <Link href="/compare/ryokin/" className="text-[#4A7C59] underline mx-1">花の定期便 料金比較表</Link>
              に、送料込みの総額と最低支払額をまとめています。
            </p>
            <p className="text-xs text-[#999] leading-relaxed mt-4">
              ※ 表の金額・条件はすべて data の単一データソースから出力しており、当サイトが各公式サイトで確認できた値のみを掲載しています。確認日以降に改定されている可能性があるため、申し込み前に各公式サイトで最新の料金をご確認ください。当サイトでは架空の金額・独自の推計値は掲載していません。
            </p>
          </div>
        </section>

        {/* 7. 個人と法人の違い */}
        <section id="kojin-houjin" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              個人で使う場合と法人で契約する場合の違い
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-[#E8E0D5] bg-white p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">個人（自宅に置く）</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  価格が公式サイトに公開されているサービスが中心のため、申し込み前に総額を計算できます。確認するのは、1回あたりの価格、送料が含まれるか、最低受取回数があるか、解約の締切日の4点です。
                  置き場所は1〜2か所に収まることが多く、水やりも生活動線の中で回せるため、購入型の定期便から始めても負担になりにくい条件です。
                </p>
              </div>
              <div className="rounded-xl border border-[#E8E0D5] bg-white p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">法人（オフィス・店舗に置く）</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  鉢数・拠点数・訪問頻度・請求方法で内容が変わるため、公開価格ではなく見積もりが前提になります。
                  加えて、ビルの荷受けルール、共用部に置く場合のテナント規約、経費処理の方法といった、金額以外の確認事項が増えます。
                  導入の手順と確認項目は法人・オフィス向けガイドにまとめています。
                </p>
              </div>
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-6">
              オフィスでの導入手順、メンテナンス込みの可否、小規模オフィスでの始め方、東京23区など対応エリアの確認方法は
              <Link href="/guides/houjin-office/" className="text-[#4A7C59] font-medium underline mx-1">法人・オフィス向け観葉植物・花の定期便ガイド</Link>
              で扱っています。
            </p>
          </div>
        </section>

        {/* 8. 見積もりチェックリスト */}
        <section id="mitsumori" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">
              見積もりを依頼するときに伝える7項目
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-6">
              返ってくる金額の精度は、依頼文の情報量でほぼ決まります。次の7項目を書いて送れば、複数社の見積もりを同じ条件で並べられます。
            </p>
            <ul className="space-y-3">
              {[
                "置き場所（フロア・部屋名）と、その場所ごとの鉢数",
                "希望するサイズ（卓上／棚上の中型／床置きの大型）",
                "日当たりの条件（窓からの距離、照明のみの場所かどうか）",
                "訪問メンテナンスの希望頻度（月◯回、または不要）",
                "1回あたりの作業範囲の希望（水やり・剪定・清掃・株の入れ替え）",
                "予算の上限と、その中に含めてほしい費目（送料・メンテナンス費・搬入費）",
                "契約期間の見込みと、拠点が増える可能性の有無",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-4">
                  <span className="text-[#4A7C59] font-bold text-sm shrink-0">{i + 1}.</span>
                  <span className="text-sm text-[#666] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#666] leading-relaxed mt-6">
              受け取った見積もりは、金額の合計だけでなく「訪問回数」「作業範囲」「交換の条件」「撤去・解約の費用」が書かれているかで揃えて比べてください。
              これらが書かれていない見積もりは、契約後に条件の解釈が分かれやすい形です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物の料金に関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <summary className="font-bold text-[#333] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#666] leading-relaxed">A. {f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-xl border border-[#E8E0D5] bg-[#FAF7F2] p-6">
              <p className="text-sm font-bold text-[#333] mb-3">目的別の関連ページ</p>
              <ul className="space-y-2 text-sm text-[#666] leading-relaxed">
                <li>・買うか借りるかで迷っている：<Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物は購入とサブスク・レンタルどちらが得か</Link></li>
                <li>・置き場所・日当たり・水やりを知りたい：<Link href="/guides/kanyou-shokubutsu/" className="text-[#4A7C59] underline">観葉植物の育て方・置き場所ガイド</Link></li>
                <li>・オフィス・店舗への導入手順を知りたい：<Link href="/guides/houjin-office/" className="text-[#4A7C59] underline">法人・オフィス向けガイド</Link></li>
                <li>・切り花の定期便の料金を比べたい：<Link href="/compare/ryokin/" className="text-[#4A7C59] underline">花の定期便 料金比較表</Link></li>
                <li>・とにかく安く始めたい：<Link href="/compare/cheap/" className="text-[#4A7C59] underline">安い花のサブスク比較</Link></li>
              </ul>
            </div>
            <p className="text-xs text-[#999] leading-relaxed mt-6">
              最終更新：{UPDATED}　当サイトはアフィリエイトプログラムに参加しています。掲載している金額は各サービスの公式サイトで確認した値のみで、確認日を併記しています。最新の料金・条件は各公式サイトでご確認ください。
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
