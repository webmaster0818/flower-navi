import Link from "next/link";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

const faqItems = [
  {
    q: "日当たりの悪い部屋でも観葉植物は育てられますか？",
    a: "耐陰性の強い種類（ポトス、サンスベリア、モンステラなど）を選べば育てられます。ただし、耐陰性とは「暗くても問題ない」という意味ではなく「弱い光にも耐えられる」という意味のため、日中に照明なしで新聞が読める程度の明るさは確保してください。窓から遠い場所に置く場合は、週に数日だけ明るい場所に移す、または土が乾きにくくなる分だけ水やりの間隔を空けるといった調整が必要です。",
  },
  {
    q: "水やりはどのくらいの頻度で行えばよいですか？",
    a: "頻度を日数で固定せず、土の状態で判断することが基本です。目安は週1〜2回程度ですが、置き場所の明るさ・室温・鉢のサイズ・季節によって変わります。土の表面が乾いてから、鉢底から流れ出るまでたっぷり与え、受け皿にたまった水は必ず捨ててください。受け皿に水をためたままにすると根が傷む原因になります。",
  },
  {
    q: "冬に気をつけることはありますか？",
    a: "気温が下がると生育がゆるやかになり、土が乾くまでの時間が長くなります。夏と同じ間隔で水を与えると土が乾かず、根を傷めることがあります。土の乾き具合を確認してから与えるようにしてください。また、暖房の風が直接当たる場所と、夜間に冷え込む窓際は避けることをおすすめします。",
  },
  {
    q: "葉が黄色くなったり、葉先が茶色くなったりするのはなぜですか？",
    a: "原因は一つではありませんが、下葉から黄色くなる場合は、水の与えすぎや受け皿に水をためたままにしたことによる根の不調が考えられます。葉先だけが茶色く乾く場合は、空気の乾燥やエアコンの風が当たっていることが考えられます。まず「置き場所の明るさ」「直前の水やりからの日数」「風が当たっていないか」の3点を確認し、該当する条件から変えてください。一度に複数の条件を変えると、どの対応が効果的だったのかを判断できなくなるためです。",
  },
  {
    q: "育てる手間の観点では、購入型とレンタル型のどちらが向いていますか？",
    a: "使い方によって異なります。同じ植物を長く育てたい場合は「購入型（毎回届いた植物が自分のものになる）」、枯らす不安を避けて手間なく入れ替えたい場合やオフィスで常に良い状態を保ちたい場合は「レンタル型（定額で専門スタッフが交換・メンテナンス）」が適しています。金額だけでなく、「育てる楽しみ」と「手間の少なさ」のどちらを重視するかで選ぶことをおすすめします。具体的な料金は各サービスの公式サイトでご確認ください。",
  },
  {
    q: "観葉植物と切り花では、お手入れの手間はどのくらい違いますか？",
    a: "両者は目的が異なります。花のサブスク（切り花の定期便）は、数週間ごとに季節の花が届き、彩りを楽しむためのサービスです。観葉植物のサブスクは、植物を長く育て、インテリアや空間の雰囲気づくりを楽しむためのサービスです。切り花は寿命が短い分、頻繁に新しい花に入れ替わります。観葉植物は水やりなどの世話をしながら長く育てるという違いがあります。両方を扱うサービス（AND PLANTS・HitoHana など）もあります。",
  },
  {
    q: "観葉植物のサブスクの費用の目安はいくらですか？",
    a: "サービスやサイズ（卓上サイズか大型か）によって幅がありますが、一般的な相場は月あたり2,000〜5,000円程度とされています。これは市場の目安であり、正確な料金・送料・支払い方式（都度払い/月額）はサービスごとに異なります。ご利用前に、公式サイトにて最新情報をご確認ください。当サイトでは、確認できない金額は掲載しておりません。サービスごとの月額の目安・メンテナンス頻度・交換対応・対応エリアは<a href=\"/compare/kanyou-shokubutsu/\">観葉植物のサブスク・レンタル比較</a>に一覧で掲載しています。",
  },
  {
    q: "初心者でも枯らさずに続けられますか？",
    a: "育てやすい種類（丈夫で日陰にも比較的強いもの）を選べば、初心者の方でも続けやすくなります。サービスによっては、植物の選定を任せられるもの、育て方のサポートがあるもの、到着時の傷みや不具合に対する無料交換保証を用意しているものもあります。世話の手間を減らしたい場合は、交換・メンテナンスまで含むレンタル型を選ぶ方法もあります。",
  },
  {
    q: "オフィスや店舗でも利用できますか？",
    a: "利用できます。受付や応接室に置くと、来客の印象づくりや空間演出に役立ちます。複数拠点・大きめのサイズ・請求書払い・メンテナンス込みなどが必要な場合は、法人向け・レンタル型のサービスが適しています。まず個人向けのサービスで小規模に試し、規模に応じて検討することをおすすめします（あわせて<a href=\"/guides/houjin-office/\">法人・オフィス向けガイド</a>もご覧ください）。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "観葉植物の育て方と置き場所【2026年】日当たり・水やり・枯らさないための管理",
  description: "観葉植物の育て方として、置き場所と日当たりの見極め方、水やりの頻度、季節ごとの管理、葉の状態から原因を確認する方法を解説します。",
  datePublished: "2026-07-20T00:00:00+09:00",
  dateModified: "2026-08-27T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/guides/kanyou-shokubutsu/" },
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } })),
};

export default function KanyouShokubutsuPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main>
        {/* Hero */}
        <PageHero path="/guides/kanyou-shokubutsu/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">観葉植物の育て方ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              観葉植物の育て方と置き場所<br className="hidden md:block" />
              日当たり・水やり・枯らさないための管理【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] max-w-2xl mx-auto leading-relaxed">
              当サイトでは、本ページで<strong>育て方（置き場所・日当たり・水やり・季節の管理）</strong>を解説しています。
              届いた観葉植物を枯らさずに育てるための手順を、順を追って確認できるようにまとめています。
            </p>
            <p className="text-xs md:text-sm text-[#4A4F49] max-w-2xl mx-auto leading-relaxed mt-4">
              <strong>サービスを比較して選ぶ場合は</strong>、月額の目安・メンテナンス頻度・交換対応・対応エリアを一覧で掲載した
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] font-medium underline mx-1">観葉植物のサブスク・レンタル比較</Link>
              をご覧ください。
            </p>
          </div>
        </PageHero>

        {/* 30秒サマリー（育て方） */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#2F5B43] rounded-md p-6">
              <p className="font-bold text-[#2F5B43] mb-3">置き場所の明るさに合う種類を選び、日数ではなく「土の乾き」を基準に水を与えます</p>
              <ul className="space-y-2 text-sm text-[#3F443E] leading-relaxed">
                <li>・置き場所は<strong>明るさで3タイプ</strong>（窓際・レースカーテン越し・窓から離れた場所）に分けて考えます。</li>
                <li>・水やりは<strong>土の表面が乾いてからたっぷり</strong>与えます。受け皿にたまった水は必ず捨ててください。</li>
                <li>・<strong>季節によって土の乾く速さが変わります</strong>。同じ間隔を一年中続けないでください。</li>
                <li>・不調が出たら「明るさ」「前回の水やりからの日数」「風が当たっていないか」の順に確認します。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 置き場所と日当たり */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">置き場所と日当たりの見極め方</h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed mb-6">
              観葉植物の育成がうまくいかない原因の多くは、置き場所と水やりの組み合わせにあります。まず置き場所の明るさを3タイプに分け、それに合う種類と水やりの間隔を決めてください。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "① 窓際（直射日光が入る）",
                  d: "光は十分ですが、夏場の直射日光によって葉が焼け、茶色く変色することがあります。レースカーテンで光をやわらげるか、真夏の間だけ窓から少し離してください。光が強い分、土が早く乾くため、水やりの間隔は短めになります。",
                },
                {
                  t: "② レースカーテン越し・窓から1〜2m（明るい日陰）",
                  d: "多くの観葉植物にとって扱いやすい場所です。葉焼けのリスクが低く、土の乾き方も極端になりません。置き場所に迷った場合はまずこの場所に置き、葉の様子を見ながら調整することをおすすめします。",
                },
                {
                  t: "③ 窓から離れた場所・デスク・日当たりの悪い部屋",
                  d: "耐陰性の強い種類（ポトス、サンスベリア、モンステラなど）を選びます。光が弱いと土が乾くまでの時間が長くなるため、水やりの間隔は明るい場所よりも空けてください。日中に照明なしで新聞が読める程度の明るさがない場所は定位置にせず、時々明るい場所に移して管理します。",
                },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <h3 className="font-bold text-[#1F2420] mb-1 text-sm md:text-base">{m.t}</h3>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">
              ※ 置き場所の明るさに合う種類を選定してもらえるか、育て方の説明が付くかは、サービスによって異なります。各社の対応は
              <Link href="/compare/kanyou-shokubutsu/#hikaku-hyou" className="text-[#2F5B43] underline mx-1">比較表</Link>
              でご確認いただけます。
            </p>
          </div>
        </section>

        {/* 水やりの基本 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">水やりの基本｜頻度ではなく「土の乾き」で判断する</h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed mb-6">
              目安は週1〜2回程度ですが、置き場所の明るさ・室温・鉢のサイズ・季節によって変わります。日付で決めるのではなく、次の手順で判断してください。
            </p>
            <div className="space-y-4">
              {[
                { t: "土の表面が乾いているか確認する", d: "指を第一関節ほど土に差し込み、湿り気が残っていれば水は与えません。表面が乾いていても、内部が湿っていることは少なくありません。" },
                { t: "与えるときは鉢底から流れ出るまでたっぷり与える", d: "少量を頻繁に与えると、鉢の下層まで水が届かず、根が上部にしか伸びなくなります。水を与える際は、鉢底から流れ出るまで与えてください。" },
                { t: "受け皿の水は必ず捨てる", d: "受け皿に水をためたままにすると、鉢の中が常に湿った状態になり、根が傷む原因になります。水やりのたびに捨てるようにしてください。" },
                { t: "葉やまわりの空気の乾燥にも目を配る", d: "エアコンの風が直接当たる場所では、土が湿っていても葉先から乾燥することがあります。風の当たらない位置に移すか、葉に霧吹きをして様子を見てください。" },
              ].map((m, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-md bg-[#2F5B43] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#1F2420] mb-1 text-sm md:text-base">{m.t}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 季節ごとの管理 */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">季節ごとの管理｜季節に応じて水やりの間隔を調整する</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { t: "春〜夏（生育期）", d: "気温が上がると土が早く乾きます。乾き具合を確認する間隔を短くし、直射日光が強い窓際では葉焼けに注意してください。エアコンの冷風が直接当たる位置も避けてください。" },
                { t: "秋〜冬（生育がゆるやかになる時期）", d: "土が乾くまでの時間が長くなります。夏と同じ間隔で与えると土が乾かず、根を傷めることがあります。暖房の風が当たる場所と、夜間に冷え込む窓際は避けることをおすすめします。" },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] p-6">
                  <p className="text-xs font-bold text-[#2F5B43] mb-2">{m.t}</p>
                  <p className="text-sm text-[#4A4F49] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4F49] leading-relaxed mt-5">
              観葉植物は常緑の種類が中心のため、鉢の見た目は季節によって大きく変わりません。季節感を出したい場合は、観葉植物はそのままにして、テーブルや玄関の花だけを入れ替える組み合わせが管理しやすい方法です。
            </p>
          </div>
        </section>

        {/* 症状別チェック */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-4 pb-3 border-b-2 border-[#2F5B43]">枯らさないためのチェック｜葉の状態から条件を見直す</h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed mb-6">
              不調のサインが見られたときは、一度に複数の条件を変えないことが大切です。次の表で該当する状態を確認し、思い当たる条件から変えて、1〜2週間様子を見てください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#F6F4EF]">
                    <th className="text-left px-3 py-3 text-xs text-[#6B6F6A] border-b border-[#DEDAD2] w-44">見られる状態</th>
                    <th className="text-left px-3 py-3 text-xs text-[#6B6F6A] border-b border-[#DEDAD2]">考えられる条件</th>
                    <th className="text-left px-3 py-3 text-xs text-[#6B6F6A] border-b border-[#DEDAD2]">まず見直すこと</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "下のほうの葉から黄色くなる", c: "水の与えすぎ、受け皿に水をためたままにしている", a: "土の乾きを確認してから与える方法に切り替え、受け皿の水を捨てる" },
                    { s: "葉先だけが茶色く乾く", c: "空気の乾燥、エアコンの風が直接当たっている", a: "風の当たらない位置に移し、葉に霧吹きをして様子を見る" },
                    { s: "葉が茶色く変色し、部分的に色が抜ける", c: "夏場の直射日光による葉焼け", a: "レースカーテンで光をやわらげるか、窓から少し離す" },
                    { s: "茎が間延びして葉の間隔が広くなる", c: "光が足りていない", a: "より明るい場所に移すか、耐陰性の強い種類に置き換える" },
                    { s: "土がいつまでも乾かない", c: "光・風が不足、鉢のサイズが大きすぎる、季節による生育の変化", a: "置き場所の明るさと風通しを確認し、水やりの間隔を空ける" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-[#DEDAD2] align-top">
                      <td className="px-3 py-3 font-medium text-[#1F2420]">{r.s}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{r.c}</td>
                      <td className="px-3 py-3 text-[#4A4F49] leading-relaxed">{r.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">
              ※ 到着時から傷んでいた場合は、育て方の問題ではありません。交換保証の対象範囲と申請期限はサービスごとに異なるため、各社の交換対応は
              <Link href="/compare/kanyou-shokubutsu/#hikaku-hyou" className="text-[#2F5B43] underline mx-1">比較表</Link>
              と公式サイトにてご確認ください。
            </p>
          </div>
        </section>

        {/* 花のサブスクとの違い */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">切り花と観葉植物ではお手入れの手間が異なります</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-md border border-[#DEDAD2] p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">花のサブスク（切り花の定期便）</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">数週間ごとに季節の花が届き、<strong>彩りを楽しむ</strong>ためのサービスです。寿命が短い分、頻繁に新しい花に入れ替わり、テーブルや玄関の雰囲気を手軽に変えられます。</p>
              </div>
              <div className="bg-white rounded-md border border-[#DEDAD2] p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">観葉植物のサブスク</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed">植物を長く育て、<strong>インテリアや空間の雰囲気づくり</strong>を楽しむためのサービスです。水やりなどの世話をしながら長く育てることが前提です。</p>
              </div>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">※両方を扱うサービス（AND PLANTS・HitoHana など）もあります。切り花の定期便をお探しの方は <Link href="/compare/ryokin/" className="text-[#2F5B43] underline">花のサブスク料金比較</Link> もご覧ください。</p>
          </div>
        </section>

        {/* 2タイプの選び方 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">お手入れの手間から、自分で育てるか専門業者に任せるかを選ぶ</h2>
            <div className="border border-[#DEDAD2] bg-[#F6F4EF] rounded-md p-6 mb-6">
              <p className="font-bold text-[#2F5B43] mb-3">サービスは、育てて楽しむなら「購入型」、手間なく入れ替えるなら「レンタル型」が適しています</p>
              <ul className="space-y-2 text-sm text-[#3F443E] leading-relaxed">
                <li>・<strong>購入型</strong>（毎回届く植物が自分のものになる）：長く育てたい方に適しています。AND PLANTS など。</li>
                <li>・<strong>レンタル型</strong>（定額で専門スタッフが交換・メンテナンス）：枯らす不安を避けたい方や、オフィスで常に良い状態を保ちたい方に適しています。</li>
                <li>・費用の相場は<strong>月2,000〜5,000円程度</strong>です（サイズ・サービスによって変動します。正確な料金は各公式サイトにてご確認ください）。</li>
              </ul>
              <p className="text-xs text-[#4A4F49] leading-relaxed mt-4">
                サービスごとの月額の目安・メンテナンス頻度・交換対応・対応エリアの一覧と、サービス間の比較は
                <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] font-medium underline mx-1">観葉植物のサブスク・レンタル比較</Link>
                に掲載しています。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-md border border-[#DEDAD2] p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">① 購入型（届いた植物が自分のものになる）</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  同じ植物を長く育てたい方に適しています。観葉植物とお花の両方を扱う<strong>AND PLANTS（アンドプランツ）</strong>のように、サイズやおまかせ選定を選べるサービスがあります（料金は公式サイトにてご確認ください）。
                </p>
                <Link href="/services/and-plants" className="text-sm text-[#2F5B43] font-medium underline">AND PLANTSの詳細を見る</Link>
              </div>
              <div className="rounded-md border border-[#DEDAD2] p-6">
                <p className="text-xs font-bold text-[#2F5B43] mb-2">② レンタル型（定額で交換・メンテナンス）</p>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  枯らす不安を避けたい方や、オフィスで常に良い状態を保ちたい方に適しています。専門スタッフが定期的に交換・メンテナンスを行うため、手間を最小限に抑えられます。複数拠点や大型サイズを希望する場合は、こちらが適しています。
                </p>
                <Link href="/guides/houjin-office/#office-green-faq" className="text-sm text-[#2F5B43] font-medium underline">法人・オフィス導入のQ&amp;A（月額の目安・メンテナンス付き・小規模オフィス）</Link>
              </div>
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">※各サービスの料金・送料・支払い方式（都度払い/月額）は、ご利用前に公式サイトにて最新情報をご確認ください。当サイトでは、確認できない金額は掲載しておりません。</p>
          </div>
        </section>

        {/* 選び方のポイント */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">置き場所と手間から逆算する4つの確認ポイント</h2>
            <div className="space-y-4">
              {[
                { t: "置き場所とサイズを決める", d: "卓上サイズ（棚・デスク）か、床置きの中〜大型かによって、選ぶサービスと料金が変わります。まず置き場所の日当たりとスペースをご確認ください。" },
                { t: "お手入れの手間で選ぶ", d: "丈夫で日陰にも比較的強い種類を選ぶと、続けやすくなります。世話の手間を最小限にしたい場合は、メンテナンス込みのレンタル型が有力な選択肢です。" },
                { t: "料金体系と保証を確認する", d: "月額制か都度払いか、送料の有無、到着時の傷みや不具合に対する交換保証の有無を公式サイトにてご確認ください。相場は月2,000〜5,000円程度が目安です。" },
                { t: "個人かオフィスかで分ける", d: "個人の場合は、手軽な購入型や小型サイズから始めることをおすすめします。オフィスの場合は、複数拠点・請求書払い・メンテナンス込みに対応した法人向け・レンタル型が適しています。" },
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

        {/* サービスへの導線 */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#1F2420] mb-4">観葉植物・お花を扱うサービスを確認する</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/and-plants" className="bg-[#2F5B43] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">AND PLANTS（観葉植物・お花）</Link>
              <Link href="/services/hitohana" className="bg-white border border-[#2F5B43] text-[#2F5B43] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F6F4EF] transition">HitoHana</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#2F5B43] text-[#2F5B43] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F6F4EF] transition">花のサブスク料金を比較</Link>
            </div>
            <p className="text-sm text-[#4A4F49] mt-5">サービスを絞り込みたい方は、 <Link href="/compare/kanyou-shokubutsu/" className="text-[#2F5B43] font-bold underline">観葉植物のサブスクおすすめ比較</Link> もご覧ください。</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">よくある質問</h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-md border border-[#DEDAD2] p-5">
                  <summary className="font-bold text-[#1F2420] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#4A4F49] leading-relaxed" dangerouslySetInnerHTML={{ __html: "A. " + f.a }} />
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
