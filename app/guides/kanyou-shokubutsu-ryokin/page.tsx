import Link from "next/link";
import Header from "@/app/components/Header";
import { SERVICES } from "@/data/services";
import PageHero from "@/app/components/PageHero";

const UPDATED = "2026年10月28日";

/* 表示する金額は data/services.ts の公式確認値と、下の RENTAL_CHECK（2026-10-19 公式確認）のみを使用する。 */
const sorted = [...SERVICES].sort((a, b) => a.cheapest.price - b.cheapest.price);

function yen(n: number) {
  return n.toLocaleString("ja-JP");
}

const faqItems = [
  {
    q: "月額制の観葉植物サブスクは、購入と比べてどちらがお得ですか？",
    a: "同じ鉢を1年以上置き、水やりを自分で行えるなら、支払額は購入のほうが少なくなります。公式価格で試算すると、AND PLANTSのパキラ M（高さ目安75〜110cm）13,980円（税込・送料無料）は、HitoHana Rental GreenのノーマルプランM（H80〜100cm）月1,600円（税別、税込換算1,760円）の約7.9か月分です。HitoHanaの最低契約期間は1年のため、1年間のレンタル料は税込換算21,120円となり、購入価格を上回ります。一方、レンタルの月額には月2回の訪問メンテナンスと、傷んだ場合の交換が含まれます。水やりや枯れたときの買い直しを社内で負担できない場合は、その作業の対価を含めて月額制を選ぶ意味があります。なお、HitoHana Rental Greenは法人専用で個人宅は対象外のため、個人の場合は購入が基本になります（2026年10月19日公式確認）。",
  },
  {
    q: "観葉植物のサブスク・レンタルの料金は何で決まりますか？",
    a: "植物そのものの値段よりも「サイズ」「鉢数」「購入型かレンタル型か」「訪問メンテナンスの有無と頻度」「個人利用か法人契約か」の5つで決まります。同じ種類の植物でも、卓上サイズを1鉢置くのか、床置きの大型を複数置いて定期的に手入れの訪問を受けるのかによって、費用の性質は大きく異なります。まずこの5つについてご自身の条件を整理してから金額を問い合わせると、見積もりの精度が上がります。",
  },
  {
    q: "月額5,000円以下で観葉植物のサブスクを始められますか？",
    a: "予算を「1か所あたり月いくらか」に分解してから判断してください。当サイトが公式で確認できている切り花・グリーンの定期便の価格は1回748円から4,980円（いずれも送料の扱いを併記）で、この範囲なら月の予算5,000円は現実的な水準です。鉢植えの観葉植物レンタルでは、GOOD GREENのマイグリーンプランがM/Lサイズ1鉢月2,178円（税込・水やりは自分で行う）、HitoHana Rental GreenがノーマルプランM 1鉢月1,600円（税別）です。ただしHitoHanaは訪問1拠点あたり植物レンタル代7,800円以上、GOOD GREENは月額3,800円未満だと搬入・交換月に配送費3,000円がかかるため、鉢数と配送費を含めて予算と照らし合わせてください（2026年10月19日公式確認）。",
  },
  {
    q: "初期費用と月額は、それぞれ何にかかる費用ですか？",
    a: "購入型の初期費用は植物代と鉢代、そして送料です。買ったあとは水やりや用土の入れ替えなど自分で行う分の実費のみとなるため、継続してかかる固定費は下がります。レンタル型は、まとまった初期費用を抑えられる代わりに、契約している間ずっと月額を支払い続けます。加えて、搬入・設置の費用、撤去や返却時の費用、途中解約の扱いが別に定められていることがあるため、月額だけを比べず契約全体の費目で確認してください。",
  },
  {
    q: "メンテナンス込みにすると、どのくらい費用の考え方が変わりますか？",
    a: "メンテナンス込みの契約は、金額の中に「人が訪問して作業する時間」が含まれます。そのため訪問の頻度を上げるほど、また拠点が増えるほど金額が上がるのが基本の構造です。公式サイトで確認できた例では、HitoHana Rental Greenは全プラン月2回、GOOD GREENはメンテナンスプランで月2回の訪問です。GOOD GREENでは、同じM/Lサイズ1鉢でも、自分で水やりをするマイグリーンプラン月2,178円に対し、訪問付きのメンテナンスプランは月2,728円（いずれも税込）で、差額の550円が訪問メンテナンスの分にあたります（2026年10月19日公式確認）。見積もりでは回数と金額をセットで記載してもらい、作業範囲も書面で確認してください。一方、社内で水やりができる体制がある場合は、メンテナンスを外して費用を下げる選択肢もあります。",
  },
  {
    q: "購入とレンタルは、どこで損益が入れ替わりますか？",
    a: "一律の月数では示せません。鉢のサイズ、レンタルの月額、入れ替えの頻度で変わるためです。公式価格での一例では、AND PLANTSのパキラ M 13,980円（税込）に対し、HitoHana Rental GreenのノーマルM（税込換算1,760円）で約7.9か月、GOOD GREENのマイグリーンM/L（月2,178円・税込）で約6.4か月です。実務的には、置きたい植物の購入価格と、同等のものをレンタルした場合の月額の見積もりを並べ、「購入価格 ÷ 月額」で何か月分に相当するかを計算してください。その月数より長く置き続ける見込みであれば購入、それより短い期間で入れ替える可能性や体制が変わる可能性がある場合はレンタルが適しています。枯れたときの買い直しの費用をどちらが負担するかも、この計算に含めて判断してください。",
  },
  {
    q: "個人で使う場合と法人で契約する場合で、料金の出方は違いますか？",
    a: "はい、異なります。個人向けの定期便は公式サイトに価格が公開されていることが多く、申し込み前に総額を計算できます。法人契約は、鉢数・拠点数・訪問頻度・請求方法などの条件で内容が変わるため、公開価格ではなく見積もりが前提になります。したがって個人向けは「公開価格を比べる」、法人向けは「同じ条件を書いた依頼文で複数社から見積もりを取る」という、比較の方法そのものが変わります。法人での進め方は法人・オフィス向けガイドにまとめています。",
  },
  {
    q: "見落としやすい費用には、どのようなものがありますか？",
    a: "送料、最低受取回数、途中解約の扱い、搬入・設置の費用、撤去や返却の費用の5つです。特に送料は、価格に含まれる場合と別建ての場合があり、北海道・沖縄・離島は追加送料または配送対象外となることがあります。最低受取回数がある場合は「1回の価格 × 最低回数」が実質の最低支払額になります。当サイトの料金比較表では、送料の扱いと最低受取回数を価格と同じ行に併記しています。",
  },
  {
    q: "当サイトに掲載されている金額は、どの程度信頼できますか？",
    a: "当サイトに掲載している金額は、各サービスの公式サイトで確認できた値のみです。確認日を併記し、確認できていない項目は「公式サイトで要確認」と明記しています。相場として広く言われている金額であっても、当サイトの掲載サービスで確認できないものは金額として記載していません。申し込み・契約の前には、必ず各公式サイトで最新の料金と条件をご確認ください。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "月額制の観葉植物サブスクと購入はどちらがお得か｜公式価格で試算した料金の考え方",
  description:
    "月額制の観葉植物レンタルと購入を、AND PLANTS・HitoHana Rental Green・GOOD GREENの公式価格で試算し、損益が入れ替わる月数と月額に含まれる作業を整理します。金額が決まる5つの条件、初期費用と月額の内訳、予算の立て方もまとめています。",
  datePublished: "2026-09-16T00:00:00+09:00",
  dateModified: "2026-10-31T00:00:00+09:00",
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
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><Link href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</Link></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#4A4F49]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#1F2420] font-medium">観葉植物の料金の考え方</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ヒーロー */}
        <PageHero path="/guides/kanyou-shokubutsu-ryokin/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">料金ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              月額制の観葉植物サブスクと購入はどちらがお得か<br className="hidden md:block" />
              【2026年】公式価格で試算した料金の考え方
            </h1>
            <div className="max-w-2xl mx-auto text-left bg-white border border-[#2F5B43] rounded-md p-5 mb-5">
              <p className="font-bold text-[#1F2420] mb-2">月額制の観葉植物サブスクは、購入と比べてどちらがお得ですか？</p>
              <p className="text-sm md:text-base text-[#3F443E] leading-relaxed">
                同じ鉢を1年以上置き、水やりを自分で行えるなら、支払額は<strong>購入のほうが少なくなります</strong>。AND PLANTSのパキラ M（高さ目安75〜110cm）は13,980円（税込・送料無料）で、HitoHana Rental GreenのノーマルプランM（H80〜100cm）月1,600円（税別）の約7.9か月分、GOOD GREENのマイグリーンプランM/L 月2,178円（税込）の約6.4か月分です。HitoHanaは最低契約期間が1年のため、1年間のレンタル料（税込換算21,120円）は購入価格を上回ります。
              </p>
              <p className="text-sm md:text-base text-[#3F443E] leading-relaxed mt-2">
                一方、月額制には訪問メンテナンス（HitoHanaは月2回）や、傷んだ・枯れた場合の交換が含まれます。水やりや買い直しを自分で負担できない場合や、定期的に植物を入れ替えたい場合は、月額制を選ぶ理由があります。なお、HitoHana Rental Greenは個人宅（住居区分）には対応していません。
              </p>
              <p className="text-xs text-[#6B6F6A] leading-relaxed mt-2">
                出典：<a href="https://andplants.jp/products/pachira-m" target="_blank" rel="noopener noreferrer nofollow" className="underline">AND PLANTS パキラ M</a>・<a href="https://hitohana-collect.hitohana.tokyo/pages/rental-green" target="_blank" rel="noopener noreferrer nofollow" className="underline">HitoHana Rental Green</a>（料金・よくある質問）・<a href="https://goodgreen.jp/price/" target="_blank" rel="noopener noreferrer nofollow" className="underline">GOOD GREEN 観葉植物レンタル料金</a>。2026年10月28日 各公式サイトで確認。
              </p>
            </div>
            <p className="text-sm md:text-base text-[#4A4F49] max-w-2xl mx-auto leading-relaxed">
              観葉植物のサブスク・レンタルの費用は、植物の種類よりも<strong>サイズ・鉢数・購入かレンタルか・メンテナンスの有無・個人か法人か</strong>によって決まります。
              当サイトでは、金額を推測するのではなく、ご自身の条件で費用を見積もるための考え方を整理しています。
            </p>
            <p className="text-xs text-[#6B6F6A] max-w-2xl mx-auto leading-relaxed mt-4">
              掲載している金額は、当サイトが各サービスの公式サイトで確認できた値のみです（観葉植物の購入・レンタル価格は2026年10月19日確認・10月28日再確認／最終更新：{UPDATED}）。
            </p>
          </div>
        </PageHero>

        {/* 要点サマリー */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#2F5B43] rounded-md p-6">
              <p className="font-bold text-[#2F5B43] mb-3">料金は「何を置くか」よりも「誰が管理するか」によって決まります</p>
              <ul className="space-y-2 text-sm text-[#3F443E] leading-relaxed">
                <li>・自分で水やりまで行う<strong>購入型</strong>は、最初に植物代・鉢代・送料がかかり、その後の固定費は小さくなります。</li>
                <li>・管理まで任せる<strong>レンタル型</strong>は、初期費用を抑えられる代わりに、契約している間ずっと月額を払い続けます。</li>
                <li>・予算を決めるときは「月◯円」ではなく<strong>「1か所あたり月◯円 × 置く場所の数」</strong>に分解すると、見積もりとの照合が容易になります。</li>
                <li>・公式価格での試算では、パキラ M を購入した場合の価格（13,980円）は、訪問メンテナンス付きレンタルの<strong>約8か月分</strong>です。1年以上置くなら支払額は購入のほうが少なく、レンタルの月額には水やり・交換の作業が含まれます（<a href="#shisan" className="text-[#2F5B43] underline">試算の詳細</a>）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 0. 公式価格での試算（購入とレンタルどちらがお得か） */}
        <section id="shisan" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              月額制の観葉植物サブスクと購入はどちらがお得か（公式価格で試算）
            </h2>
            <div className="bg-[#F6F4EF] border-2 border-[#2F5B43] rounded-md p-6 mb-6">
              <p className="text-sm text-[#3F443E] leading-relaxed">
                <strong>同じ鉢を1年以上置き、水やりを自分で行えるなら、支払額は購入のほうが少なくなります。</strong>
                同じ高さの観葉植物で比べると、購入価格は訪問メンテナンス付きレンタルの月額の約8か月分でした。
                レンタルの月額には、月2回の訪問メンテナンスや枯れた・傷んだ際の交換が含まれるため、その作業を社内・家庭で担えない場合に月額制を選ぶ意味があります。
              </p>
            </div>
            <h3 className="font-bold text-[#1F2420] mb-3">同じ高さのパキラで比べた場合（2026年10月19日公式確認）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white min-w-[640px]">
                <thead>
                  <tr className="bg-[#F6F4EF]">
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2] w-24">サイズ</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">購入：AND PLANTS パキラ</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">レンタル：HitoHana Rental Green ノーマル</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">購入価格は月額の何か月分か</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">最低契約期間1年のレンタル料</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DEDAD2] align-top">
                    <td className="px-3 py-3 font-medium text-[#1F2420]">M</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">13,980円（高さ目安75〜110cm・税込・送料無料）</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">月1,600円（H80〜100cm・税別、税込換算1,760円）</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">約7.9か月分</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">税込換算21,120円</td>
                  </tr>
                  <tr className="border-b border-[#DEDAD2] align-top">
                    <td className="px-3 py-3 font-medium text-[#1F2420]">L</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">19,850円（高さ目安115〜140cm・税込・送料無料）</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">月2,300円（H120〜140cm・税別、税込換算2,530円）</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">約7.8か月分</td>
                    <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">税込換算30,360円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] leading-relaxed mt-3">
              ※ 税込換算は税別価格に消費税10%を加えた当サイトの計算値です。HitoHana Rental Greenのノーマルプランにはパキラが含まれます。月数は「購入価格 ÷ 税込換算の月額」で、小数第2位を四捨五入しています。
            </p>

            <h3 id="shisan-zentei" className="font-bold text-[#1F2420] mt-8 mb-3 scroll-mt-20">この試算の前提（公式価格での単純比較）</h3>
            <ul className="text-sm text-[#3F443E] leading-relaxed space-y-2">
              <li>・<strong>比べているのは公式サイトの表示価格だけ</strong>です。AND PLANTSのパキラ M 13,980円、HitoHana Rental GreenのノーマルM 月1,600円（税別）、GOOD GREENのマイグリーンM/L 月2,178円・メンテナンスM/L 月2,728円（税込）は、2026年10月21日に各公式サイトで再確認し、10月19日の確認時から変わっていません。</li>
              <li>・<strong>植物は高さで揃えています</strong>。品種・鉢の形・鉢カバーの仕様まで同じものを比べているわけではありません。AND PLANTSは商品ページで鉢の形を選ぶ形式で、送料無料と表示されています。</li>
              <li>・<strong>購入側に含めていない費用</strong>：受け皿・肥料などの用品、水道代、枯れた場合の買い直し、社内・家庭で水やりをする時間。</li>
              <li>・<strong>レンタル側の条件</strong>：HitoHana Rental Greenは法人専用で、最低契約期間1年・訪問1拠点あたり植物レンタル代7,800円以上です。GOOD GREENは月額3,800円未満だと搬入・交換月に配送費3,000円がかかります。HitoHanaは1鉢から利用できますが最低利用料金があり、GOOD GREENは配送費が加わる場合があるため、1鉢だけ借りるときの実際の支払額は1鉢あたりの表示価格より高くなります。</li>
              <li>・<strong>個人の場合</strong>：生きた植物の訪問メンテナンス付きレンタルは、当サイトが確認できた範囲では法人向けが中心のため、個人宅に置くなら購入が基本の選択肢です。</li>
            </ul>

            <h3 className="font-bold text-[#1F2420] mt-8 mb-3">月額に含まれるもの・含まれないもの</h3>
            <ul className="space-y-3">
              {[
                { t: "HitoHana Rental Green（法人専用）", d: "専門スタッフが月2回訪問し、水やり・剪定・病害虫駆除・設置環境のチェックを行います。傷んだ場合は植物を交換します。最低契約期間は1年、訪問1拠点あたりの植物レンタル代は7,800円以上のため、Mサイズなら5鉢（月8,000円・税別）程度からの利用になります。個人宅は対象外です。" },
                { t: "GOOD GREEN", d: "自分で水やりをするマイグリーンプランはS 990円・M/L 2,178円、月2回訪問するメンテナンスプランはS 1,430円・M/L 2,728円（いずれも1鉢・税込）です。全プランで3か月に1回（スタートアッププランは6か月に1回）植物を交換でき、枯れた場合は回数の制限なく無料交換です。配送費3,000円（搬入・交換月のみ）は月額3,800円以上で無料になります。パキラ M 13,980円は、マイグリーンM/Lの約6.4か月分、メンテナンスM/Lの約5.1か月分にあたります。" },
                { t: "購入（AND PLANTS）", d: "支払いは購入時の一度だけで、その後の固定費はありません。観葉植物は到着後2週間以内であれば、初期不良による傷みや、ケアカードに従って管理したのに枯れた場合などに交換・返金の対象となります。期限を過ぎて枯れた場合は、自己負担での買い直しになります。" },
              ].map((m, i) => (
                <li key={i} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5">
                  <p className="font-bold text-[#1F2420] mb-1 text-sm">{m.t}</p>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-[#1F2420] mt-8 mb-3">試算から言えること</h3>
            <ul className="space-y-2 text-sm text-[#3F443E] leading-relaxed">
              <li>・<strong>個人で1〜2鉢を置く場合</strong>：訪問メンテナンス付きのレンタルは法人向けが中心のため、購入が基本です。1年以上置くなら、支払額も購入のほうが少なくなります。</li>
              <li>・<strong>会社で管理担当を置けない場合</strong>：レンタル料と購入価格の差は、月2回の水やり・手入れと、枯れたときの交換を外部に任せる費用と考えます。社内で同じ作業を行う時間と比べて判断してください。</li>
              <li>・<strong>季節ごとに植物を替えたい場合</strong>：購入では入れ替えのたびに買い直しになります。GOOD GREENのように3か月に1回交換できるレンタルなら、月額の範囲で入れ替えられます。</li>
            </ul>
            <p className="text-xs text-[#6B6F6A] leading-relaxed mt-5">
              出典（2026年10月19日に各公式サイトで確認）：
              <a href="https://andplants.jp/products/pachira-m" target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">AND PLANTS パキラ M</a>、
              <a href="https://andplants.jp/products/pachira-l" target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">AND PLANTS パキラ L</a>、
              <a href="https://andplants.jp/pages/returned" target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">AND PLANTS 返品・交換規定</a>、
              <a href="https://hitohana-collect.hitohana.tokyo/pages/rental-green" target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">HitoHana Rental Green</a>、
              <a href="https://goodgreen.jp/price/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#2F5B43] underline">GOOD GREEN 料金プラン</a>。
              サービスごとの入れ替え・メンテナンスの条件は
              <Link href="/compare/kanyou-shokubutsu/#hikaku-hyou" className="text-[#2F5B43] underline mx-1">観葉植物のサブスク・レンタル比較表</Link>
              にまとめています。
            </p>
          </div>
        </section>

        {/* 1. 金額が変わる5つの条件 */}
        <section id="kakaku-youin" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              観葉植物のサブスク・レンタルで金額が変わる5つの条件
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              同じ「観葉植物のサブスク」という言葉でも、届く形態や費用の性質は大きく異なります。金額を問い合わせる前に、次の5つの条件を整理してください。条件が決まっていない状態では、どのサービスに問い合わせても具体的な金額の回答を得にくいためです。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "① 植物のサイズ",
                  d: "卓上に置くミニサイズ（15〜30cm程度）、棚やカウンターに置く中型、床に直接置く大型（100cm以上）では、植物そのものの価格も、運ぶ手間も、必要な鉢の大きさも変わります。大型は搬入経路やエレベーターの制約が生じるため、配送・設置の条件が費用に反映されやすくなります。まず「床に置くのか、棚の上に置くのか」を決めておくと、検討を進めやすくなります。",
                },
                {
                  t: "② 鉢数と置き場所の数",
                  d: "1鉢だけなのか、受付・会議室・執務スペースに分けて複数置くのかで、費用は単純に鉢数分だけ増えるわけではありません。訪問メンテナンスが付く契約では、同じ建物にまとめて置くほど1鉢あたりの負担は下がり、拠点が分かれるほど上がります。置き場所を図に書き出し、フロアと部屋ごとに何鉢かを数えておくと、見積もりの比較がしやすくなります。",
                },
                {
                  t: "③ 購入型かレンタル型か",
                  d: "購入型は、届いた植物がそのまま自分（自社）のものになります。支払いは購入時に発生し、以降は管理の実費のみです。レンタル型は植物を借りる契約なので、使っている間ずっと支払いが続く代わりに、交換や返却の仕組みが用意されています。この違いは「安いか高いか」ではなく、費用が一度に出るか毎月出るかという性質の違いです。",
                },
                {
                  t: "④ 訪問メンテナンスの有無と頻度",
                  d: "メンテナンス込みの金額には、人が現地に来て作業する時間が含まれます。そのため訪問頻度を上げるほど金額は上がります。公式サイトで確認できた例では、HitoHana Rental Greenは全プラン月2回、GOOD GREENはメンテナンスプランで月2回の訪問です（2026年10月19日確認）。他社に見積もりを依頼する場合は「月に何回・1回あたり何を行うか」を明示してください。社内で水やりができる場合は、メンテナンスを外して費用を下げる選択肢もあります。",
                },
                {
                  t: "⑤ 個人利用か法人契約か",
                  d: "個人向けの定期便は公式サイトに価格が公開されていることが多く、申し込み前に総額を計算できます。法人契約は鉢数・拠点数・請求方法などで内容が変わるため、公開価格ではなく見積もりが前提です。そのため、個人向けは「公開価格を比べる」、法人向けは「同じ条件で複数社に見積もりを依頼する」という比較の方法自体が変わります。",
                },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{m.t}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. 初期費用と月額の内訳 */}
        <section id="uchiwake" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              初期費用と月額（継続費用）の内訳を分けて考える
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              「高い・安い」の判断がぶれる主な原因は、最初に一度だけかかる費用と、毎月継続してかかる費用を同じ基準で比べてしまうことです。次の表のように費目を分けてから金額を当てはめると、比較の基準がそろいます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white min-w-[560px]">
                <thead>
                  <tr className="bg-[#F6F4EF]">
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2] w-32">費目</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">購入型（買い切り・定期便）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">レンタル型</th>
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
                      item: "利用を終える際の費用",
                      buy: "処分や引き取りを自分で手配します。大型ほど手間がかかります。",
                      rent: "撤去・返却の費用、最低契約期間、途中解約の扱いを事前に確認します。",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#DEDAD2] align-top">
                      <td className="px-3 py-3 font-medium text-[#1F2420]">{row.item}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{row.buy}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{row.rent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] leading-relaxed mt-4">
              ※ この表は費目の整理であり、金額を示すものではありません。公式価格を使った購入とレンタルの比較は、このページの<a href="#shisan" className="text-[#2F5B43] underline mx-1">公式価格での試算</a>をご覧ください。
            </p>
          </div>
        </section>

        {/* 3. メンテナンスの有無 */}
        <section id="maintenance" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              メンテナンスの有無による料金の内訳の違い
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              メンテナンス込みの金額は、植物の値段に人の作業時間が上乗せされた構造になっています。そのため、「同じ植物なのに金額が違う」のではなく、「金額に含まれる作業が違う」と捉えるのが正確です。見積もりを読むときは、次の3点が書かれているかを確認してください。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "訪問の頻度が書かれているか",
                  d: "月1回なのか月2回なのか、あるいは季節ごとなのかで金額は変わります。公式サイトで確認できた例は、HitoHana Rental Green・GOOD GREEN（メンテナンスプラン）とも月2回です（2026年10月19日確認）。回数を条件にしたい場合は、依頼文に「月◯回」と明記して見積もりを取り、契約書にも回数が記載されるかを確認してください。",
                },
                {
                  t: "1回あたりの作業範囲が書かれているか",
                  d: "水やりだけなのか、剪定・葉の清掃・肥料・害虫のチェックまで含むのか、状態が悪くなった株の入れ替えまで含むのかで、同じ「メンテナンス込み」でも中身が大きく異なります。範囲が書かれていない見積もりは、後から追加費用が発生しやすいためご注意ください。",
                },
                {
                  t: "交換の条件が書かれているか",
                  d: "枯れた場合に無償で交換されるのか、有償なのか、そもそも交換の対象外なのかは契約ごとに異なります。購入型の定期便でも、到着時の傷み・不具合に対する交換には受付期限が設けられていることがあり、「到着後◯日以内に連絡」という短い期限の場合があります。期限と対象範囲は申し込み前に各公式サイトで確認してください。",
                },
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
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-6">
              管理を任せたいのか、自分で育てたいのかが決まると、選ぶべき仕組みも絞り込めます。仕組みごとの違いは
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] font-medium underline mx-1">観葉植物のサブスク・レンタル比較（季節の入れ替え・メンテナンス込み）</Link>
              で、水やりや置き場所など実際の手入れは
              <Link href="/guides/kanyou-shokubutsu/" className="text-[#2F5B43] font-medium underline mx-1">観葉植物の育て方・置き場所ガイド</Link>
              で解説しています。
            </p>
          </div>
        </section>

        {/* 4. 購入とレンタルの比べ方 */}
        <section id="kaikata" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              購入とレンタルの費用を比べる手順
            </h2>
            <div className="bg-[#F6F4EF] border-2 border-[#2F5B43] rounded-md p-6 mb-6">
              <p className="text-sm text-[#3F443E] leading-relaxed">
                <strong>「購入価格 ÷ レンタルの月額」で、何か月分に相当するかを出してください。</strong>
                その月数より長く置き続ける見込みであれば購入、それより短い期間で入れ替える可能性がある場合はレンタルが適しています。
                損益が入れ替わる時期は鉢のサイズ・月額・入れ替え頻度で変わるため、一律の月数としては示せません。
              </p>
            </div>
            <ol className="space-y-4">
              {[
                { t: "置きたい植物のサイズと鉢数を決める", d: "床置きの大型を1鉢なのか、卓上サイズを3鉢なのかを先に決めます。この条件が変わると、以降の金額もすべて変わります。" },
                { t: "購入した場合の総額を出す", d: "植物代・鉢代・送料を足します。自分で管理する前提なので、以降の固定費はかかりません。" },
                { t: "同じ条件でレンタルの月額の見積もりを取る", d: "サイズ・鉢数・設置場所・訪問頻度を書いて依頼します。条件を明記しない依頼では、提示される金額を比較できません。" },
                { t: "購入価格 ÷ 月額 で月数を出す", d: "この月数が損益の分かれ目の目安です。例えば24か月と出たなら、2年より長く同じ鉢を置く見込みがあるかどうかで判断します。" },
                { t: "枯れたときの費用をどちらが負担するかを足す", d: "購入は自己負担で買い直し、レンタルは交換込みの契約なら事業者側の対応になります。この差は、置き場所の日当たりが悪いほど大きくなります。" },
                { t: "やめるときの費用を確認する", d: "購入は処分や引き取りの手配、レンタルは撤去費・最低契約期間・途中解約の扱いです。この点を確認せずに決めると、後から想定外の支出が生じることがあります。" },
              ].map((s, i) => (
                <li key={i} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-md bg-[#2F5B43] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#1F2420] mb-1">{s.t}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. 予算から選ぶ */}
        <section id="yosan" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              予算から選ぶときの考え方（「月額5,000円以内で始めたい」場合）
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              予算が先に決まっている場合は、予算を分解し、条件を予算に合わせて調整する進め方が実務的です。参考として、GOOD GREENのマイグリーンプラン（自分で水やり）はM/Lサイズ1鉢月2,178円（税込）のため、5,000円ならM/L 2鉢程度が目安です。ただし月額3,800円未満では搬入・交換月に配送費3,000円がかかります。また、HitoHana Rental Greenは訪問1拠点あたり植物レンタル代7,800円以上のため、月5,000円の予算には収まりません（2026年10月19日公式確認）。次の順番で条件を調整してください。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "予算を「1か所あたり月いくら」に割る",
                  d: "月5,000円で3か所に置きたいなら、1か所あたりは月1,667円前後です。この数字を持って条件を考えると、大型の床置きを3か所に置く計画は成立しないことがわかります。置き場所を1か所に絞る、またはサイズを下げるといった判断を早い段階で行えます。",
                },
                {
                  t: "予算の内側に何を含めるかを決める",
                  d: "送料、メンテナンス費、交換費、搬入費のどこまでを5,000円の内側に入れるかを先に決めます。これを決めずに見積もりを取ると、金額は安く見えても総額では予算を超えることがあります。依頼文には「送料・メンテナンス込みで月◯円以内」と明記することをおすすめします。",
                },
                {
                  t: "調整はサイズ→鉢数→メンテナンス頻度の順で行う",
                  d: "費用への影響が大きいのはサイズです。床置きの大型を棚上の中型に変えるだけで前提が変わります。次に鉢数、最後にメンテナンス頻度を調整します。メンテナンスを最初に削ると、枯らしたときの買い直しによって結果的に支出が増えることがあるため、社内・家庭で水やりができる体制があるかを確認してから外してください。",
                },
                {
                  t: "予算内に収まらない場合は段階的に導入する",
                  d: "最初から全フロアに置こうとせず、来客の視線が最初に届く一点だけに置いて運用の負担を確かめる方法があります。1か所で水やりや受け取りの手間が許容できるかを確認してから範囲を広げるほうが、契約をやり直すよりも費用の無駄を抑えられます。",
                },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <h3 className="font-bold text-[#1F2420] mb-2">{m.t}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. 公式確認できている料金 */}
        <section id="kakunin-zumi" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              当サイトが公式で確認できている料金
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              予算の感覚をつかむための参考として、当サイトの掲載サービスについて公式サイトで確認できた価格を掲載します。
              これらは<strong>切り花・グリーンの定期便</strong>の価格であり、鉢植えの観葉植物レンタルの月額ではありません。
              鉢植えの観葉植物の購入価格・レンタル月額は、上の<a href="#shisan" className="text-[#2F5B43] underline mx-1">公式価格での試算</a>に掲載しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white min-w-[640px]">
                <thead>
                  <tr className="bg-[#F6F4EF]">
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">サービス</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">最安プラン（1回あたり）</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">送料の扱い</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">最低受取回数</th>
                    <th className="text-left px-3 py-3 text-xs text-[#4A4F49] border-b border-[#DEDAD2]">公式確認日</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((s) => (
                    <tr key={s.id} className="border-b border-[#DEDAD2] align-top">
                      <td className="px-3 py-3 font-medium text-[#1F2420]">
                        <Link href={s.servicePath} className="text-[#2F5B43] underline">{s.name}</Link>
                      </td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">
                        {s.cheapest.name}　{yen(s.cheapest.price)}円（{s.cheapest.flowers}）
                      </td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{s.shippingNote}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">
                        {s.minDeliveries ? `${s.minDeliveries}回` : "回数の条件なし"}
                      </td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed whitespace-nowrap">{s.verifiedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#3F443E] leading-relaxed mt-6">
              観葉植物と切り花の両方を扱うサービスもあります。上の表のうち
              <Link href="/services/and-plants/" className="text-[#2F5B43] underline mx-1">AND PLANTS</Link>
              は切り花の定期便に加えて観葉植物も扱っていますが、観葉植物は単品購入のため、価格は公式サイトでご確認ください。
              プラン別の価格や1本あたりの単価まで比べたい場合は
              <Link href="/compare/ryokin/" className="text-[#2F5B43] underline mx-1">花の定期便 料金比較表</Link>
              に、送料込みの総額と最低支払額をまとめています。
            </p>
            <p className="text-xs text-[#6B6F6A] leading-relaxed mt-4">
              ※ 表の金額・条件はすべて単一のデータソースから出力しており、当サイトが各公式サイトで確認できた値のみを掲載しています。確認日以降に改定されている可能性があるため、申し込み前に各公式サイトで最新の料金をご確認ください。当サイトでは架空の金額・独自の推計値は掲載していません。
            </p>
          </div>
        </section>

        {/* 7. 個人と法人の違い */}
        <section id="kojin-houjin" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              個人で使う場合と法人で契約する場合の違い
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-md border border-[#DEDAD2] bg-white p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">個人（自宅に置く）</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  価格が公式サイトに公開されているサービスが中心のため、申し込み前に総額を計算できます。確認するのは、1回あたりの価格、送料が含まれるか、最低受取回数があるか、解約の締切日の4点です。
                  置き場所は1〜2か所に収まることが多く、水やりも日常生活の中で行えるため、購入型の定期便から始めても負担になりにくい条件です。
                </p>
              </div>
              <div className="rounded-md border border-[#DEDAD2] bg-white p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">法人（オフィス・店舗に置く）</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  鉢数・拠点数・訪問頻度・請求方法で内容が変わるため、公開価格ではなく見積もりが前提になります。
                  加えて、ビルの荷受けルール、共用部に置く場合のテナント規約、経費処理の方法といった、金額以外の確認事項が増えます。
                  導入の手順と確認項目は法人・オフィス向けガイドにまとめています。
                </p>
              </div>
            </div>
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-6">
              オフィスでの導入手順、メンテナンス込みの可否、小規模オフィスでの始め方、東京23区など対応エリアの確認方法は
              <Link href="/guides/houjin-office/" className="text-[#2F5B43] font-medium underline mx-1">法人・オフィス向け観葉植物・花の定期便ガイド</Link>
              で扱っています。
            </p>
          </div>
        </section>

        {/* 8. 見積もりチェックリスト */}
        <section id="mitsumori" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">
              見積もりを依頼するときに伝える7項目
            </h2>
            <p className="text-sm text-[#3F443E] leading-relaxed mb-6">
              見積もり金額の精度は、依頼文の情報量によって大きく左右されます。次の7項目を記載して依頼すると、複数社の見積もりを同じ条件で比較できます。
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
                <li key={i} className="flex gap-3 bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-4">
                  <span className="text-[#2F5B43] font-bold text-sm shrink-0">{i + 1}.</span>
                  <span className="text-sm text-[#4A4F49] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-6">
              受け取った見積もりは、金額の合計だけでなく「訪問回数」「作業範囲」「交換の条件」「撤去・解約の費用」が書かれているかで揃えて比べてください。
              これらが書かれていない見積もりは、契約後に条件の解釈が分かれやすくなります。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              観葉植物の料金に関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <summary className="font-bold text-[#1F2420] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#4A4F49] leading-relaxed">A. {f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-md border border-[#DEDAD2] bg-[#F6F4EF] p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">目的別の関連ページ</p>
              <ul className="space-y-2 text-sm text-[#4A4F49] leading-relaxed">
                <li>・買うか借りるかで迷っている：<Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] underline">観葉植物のサブスク・レンタル比較（季節の入れ替え・メンテナンス込み）</Link></li>
                <li>・置き場所・日当たり・水やりを知りたい：<Link href="/guides/kanyou-shokubutsu/" className="text-[#2F5B43] underline">観葉植物の育て方・置き場所ガイド</Link></li>
                <li>・オフィス・店舗への導入手順を知りたい：<Link href="/guides/houjin-office/" className="text-[#2F5B43] underline">法人・オフィス向けガイド</Link></li>
                <li>・切り花の定期便の料金を比べたい：<Link href="/compare/ryokin/" className="text-[#2F5B43] underline">花の定期便 料金比較表</Link></li>
                <li>・費用を抑えて始めたい：<Link href="/compare/cheap/" className="text-[#2F5B43] underline">安い花のサブスク比較</Link></li>
              </ul>
            </div>
            <p className="text-xs text-[#6B6F6A] leading-relaxed mt-6">
              最終更新：{UPDATED}　当サイトはアフィリエイトプログラムに参加しています。掲載している金額は各サービスの公式サイトで確認した値のみで、確認日を併記しています。最新の料金・条件は各公式サイトでご確認ください。
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
