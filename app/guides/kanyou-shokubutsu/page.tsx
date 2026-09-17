import Link from "next/link";
import Header from "@/app/components/Header";

const faqItems = [
  {
    q: "日当たりの悪い部屋でも観葉植物は育てられますか？",
    a: "耐陰性の強い種類（ポトス、サンスベリア、モンステラなど）を選べば育てられます。ただし「暗くても平気」ではなく「弱い光でも耐えられる」という意味なので、日中に照明なしで新聞が読める程度の明るさは確保してください。窓から遠い場所に置く場合は、週に数日だけ明るい場所に移す、または土が乾きにくくなる分だけ水やりの間隔を空ける、といった調整が必要です。",
  },
  {
    q: "水やりはどのくらいの頻度で行えばよいですか？",
    a: "頻度を日数で固定せず、土の状態で判断するのが基本です。目安としては週1〜2回程度ですが、これは置き場所の明るさ・室温・鉢のサイズ・季節で変わります。土の表面が乾いてから、鉢底から流れ出るまでたっぷり与え、受け皿にたまった水は必ず捨ててください。受け皿に水をためたままにすると根が傷む原因になります。",
  },
  {
    q: "冬に気をつけることはありますか？",
    a: "気温が下がると生育がゆるやかになり、土が乾くまでの時間が長くなります。夏と同じ間隔で水を与えると土が乾かず、根を傷めることがあります。土の乾き具合を確認してから与えるようにしてください。また、暖房の風が直接当たる場所と、夜間に冷え込む窓際は避けたほうが無難です。",
  },
  {
    q: "葉が黄色くなったり、葉先が茶色くなったりするのはなぜですか？",
    a: "原因はひとつではありませんが、下葉から黄色くなる場合は水の与えすぎや受け皿の水のためっぱなしによる根のトラブル、葉先だけが茶色く乾く場合は空気の乾燥やエアコンの風が当たっていることが考えられます。まず「置き場所の明るさ」「直前の水やりからの日数」「風が当たっていないか」の3点を確認し、心当たりのある条件から先に変えてください。一度に複数の条件を変えると、何が効いたのか分からなくなります。",
  },
  {
    q: "育てる手間の観点では、購入型とレンタル型のどちらが向いていますか？",
    a: "使い方によって変わります。長く同じ植物を育てて愛着を持ちたいなら「購入型（毎回届いた植物が自分のものになる）」、枯らす不安を避けて手間なく入れ替えたい・オフィスで常に良い状態を保ちたいなら「レンタル型（定額でプロが交換・メンテ）」が向いています。単純な金額だけでなく、『育てる楽しみ』か『手間の少なさ』のどちらを取るかで選ぶのが失敗しにくい考え方です。具体的な料金は各サービスの公式サイトでご確認ください。",
  },
  {
    q: "観葉植物と切り花では、お手入れの手間はどのくらい違いますか？",
    a: "目的が違います。花のサブスク（切り花の定期便）は、数週間ごとに新しい季節の花が届き“彩りを楽しむ”もの。観葉植物のサブスクは、より長く育てて“インテリアや空間の雰囲気づくり”を楽しむものです。切り花は寿命が短い分こまめに新鮮さが入れ替わり、観葉植物は水やりなどの世話をしながら長く付き合う、という性質の違いがあります。両方を扱うサービス（AND PLANTS・HitoHana など）もあります。",
  },
  {
    q: "観葉植物のサブスクの費用の目安は？",
    a: "サービスやサイズ（卓上サイズか大型か）によって幅がありますが、一般的な相場は月あたり2,000〜5,000円程度とされています。これはあくまで市場の目安で、正確な料金・送料・支払い方式（都度払い/月額）はサービスごとに異なるため、必ず各公式サイトで確認してください。当サイトでは架空の金額は掲載していません。サービスごとの月額の目安・メンテナンス頻度・交換対応・対応エリアは<a href=\"/compare/kanyou-shokubutsu/\">観葉植物のサブスク・レンタル比較</a>で一覧にしています。",
  },
  {
    q: "初心者でも枯らさずに続けられますか？",
    a: "育てやすい種類（丈夫で日陰にも比較的強いもの）を選べば、初心者でも続けやすいです。サービスによっては植物の選定をおまかせできたり、育て方のサポートや、到着時の傷み・不具合への無料交換保証を用意しているところもあります。どうしても世話の手間を減らしたい場合は、交換・メンテまで含むレンタル型を選ぶ方法もあります。",
  },
  {
    q: "オフィスや店舗でも利用できますか？",
    a: "利用できます。受付・応接に置くと来客の印象づくりや空間演出に役立ちます。複数拠点・大きめのサイズ・請求書払い・メンテナンス込みなどが必要な場合は、法人向け・レンタル型のサービスが向いています。まずは個人向けで小さく試し、規模に応じて検討するのがおすすめです（あわせて<a href=\"/guides/houjin-office/\">法人・オフィス向けガイド</a>もご覧ください）。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "観葉植物の育て方と置き場所【2026年】日当たり・水やり・枯らさないコツ",
  description: "観葉植物の育て方を、置き場所と日当たりの見極め、水やりの頻度、季節ごとの管理、葉の状態から原因を探すチェックまで実務目線で解説。",
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
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">観葉植物の育て方ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              観葉植物の育て方と置き場所<br className="hidden md:block" />
              日当たり・水やり・枯らさないコツ【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              このページは<strong>育て方（置き場所・日当たり・水やり・季節の管理）</strong>のページです。
              届いた観葉植物を枯らさずに育てるための実務を、順番に確認できる形でまとめます。
            </p>
            <p className="text-xs md:text-sm text-[#666] max-w-2xl mx-auto leading-relaxed mt-4">
              <strong>サービスを比較して選ぶなら</strong>、月額の目安・メンテナンス頻度・交換対応・対応エリアを一覧にした
              <Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物のサブスク・レンタル比較</Link>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* 30秒サマリー（育て方） */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">結論：置き場所の明るさに合う種類を選び、日数ではなく「土の乾き」で水をやる</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・置き場所は<strong>明るさで3タイプ</strong>（窓際・レースカーテン越し・窓から離れた場所）に分けて考える。</li>
                <li>・水やりは<strong>土の表面が乾いてからたっぷり</strong>。受け皿にたまった水は必ず捨てる。</li>
                <li>・<strong>季節で乾くスピードが変わる</strong>。同じ間隔を一年中続けないこと。</li>
                <li>・不調が出たら「明るさ」「前回の水やりからの日数」「風が当たっていないか」の順に確認する。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 置き場所と日当たり */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">置き場所と日当たりの見極め方</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              観葉植物でつまずく原因の多くは、置き場所と水やりの組み合わせにあります。まず置き場所の明るさを3タイプに分けて、そこに合う種類と水やりの間隔を決めてください。
            </p>
            <div className="space-y-4">
              {[
                {
                  t: "① 窓際（直射日光が入る）",
                  d: "光は十分ですが、夏場の直射日光は葉が焼けて茶色く変色することがあります。レースカーテンで光をやわらげるか、真夏だけ窓から少し離すと安全です。光が強い分、土は早く乾くため水やりの間隔は短めになります。",
                },
                {
                  t: "② レースカーテン越し・窓から1〜2m（明るい日陰）",
                  d: "多くの観葉植物にとって扱いやすい場所です。葉焼けのリスクが低く、土の乾き方も極端になりません。置き場所に迷ったらまずここから始め、葉の様子を見ながら調整するのが失敗しにくい進め方です。",
                },
                {
                  t: "③ 窓から離れた場所・デスク・日当たりの悪い部屋",
                  d: "耐陰性の強い種類（ポトス、サンスベリア、モンステラなど）を選びます。光が弱いと土が乾くまでの時間が長くなるため、水やりの間隔は明るい場所より空けてください。日中に照明なしで新聞が読める程度の明るさがない場所は、定位置にせず、時々明るい場所に移す運用にします。",
                },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <h3 className="font-bold text-[#333] mb-1 text-sm md:text-base">{m.t}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] mt-4">
              ※ 置き場所の明るさに合う種類を選定してもらえるか、育て方の説明が付くかはサービスによって異なります。各社の対応は
              <Link href="/compare/kanyou-shokubutsu/#hikaku-hyou" className="text-[#4A7C59] underline mx-1">比較表</Link>
              で確認できます。
            </p>
          </div>
        </section>

        {/* 水やりの基本 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">水やりの基本｜頻度ではなく「土の乾き」で判断する</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              目安としては週1〜2回程度ですが、これは置き場所の明るさ・室温・鉢のサイズ・季節で変わります。カレンダーで日を決めるのではなく、次の手順で判断してください。
            </p>
            <div className="space-y-4">
              {[
                { t: "土の表面が乾いているか確認する", d: "指を第一関節ほど土に差し込み、湿り気が残っていればまだ与えません。表面が乾いていても中が湿っていることはよくあります。" },
                { t: "与えるときは鉢底から出るまでたっぷり", d: "少量を頻繁に与えると、鉢の下層まで水が届かず根が上のほうにしか伸びません。与えると決めたら鉢底から流れ出るまで与えます。" },
                { t: "受け皿の水は必ず捨てる", d: "受け皿に水をためたままにすると、鉢の中が常に湿った状態になり根が傷む原因になります。水やりのたびに捨てる習慣にしてください。" },
                { t: "葉やまわりの空気の乾燥にも目を配る", d: "エアコンの風が直接当たる場所では、土が湿っていても葉先から乾いていくことがあります。風の当たらない位置に移すか、葉に霧吹きをして様子を見ます。" },
              ].map((m, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5 flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#4A7C59] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#333] mb-1 text-sm md:text-base">{m.t}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 季節ごとの管理 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">季節ごとの管理｜同じ間隔を一年中続けない</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { t: "春〜夏（生育期）", d: "気温が上がると土の乾きが早くなります。乾きを確認する間隔を短くし、直射日光が強い窓際は葉焼けに注意します。エアコンの冷風が直接当たる位置も避けてください。" },
                { t: "秋〜冬（生育がゆるやかになる時期）", d: "土が乾くまでの時間が長くなります。夏と同じ間隔で与えると土が乾かず、根を傷めることがあります。暖房の風が当たる場所と、夜間に冷え込む窓際は避けたほうが無難です。" },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-6">
                  <p className="text-xs font-bold text-[#4A7C59] mb-2">{m.t}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#666] leading-relaxed mt-5">
              観葉植物は常緑の種類が中心のため、鉢そのものの見た目は季節で大きく変わりません。季節感を出したい場合は、ベースのグリーンは据え置きにして、テーブルや玄関の花だけを入れ替える組み合わせが運用しやすい形です。
            </p>
          </div>
        </section>

        {/* 症状別チェック */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">枯らさないためのチェック｜葉の状態から条件を見直す</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              不調のサインが出たときは、一度に複数の条件を変えないことが大切です。次の表で当てはまるものを探し、心当たりのある条件から先に変えて、1〜2週間ようすを見ます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#FAF7F2]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E8E0D5] w-44">見られる状態</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E8E0D5]">考えられる条件</th>
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E8E0D5]">先に見直すこと</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "下のほうの葉から黄色くなる", c: "水の与えすぎ、受け皿の水のためっぱなし", a: "土の乾きを確認してから与える運用に切り替え、受け皿の水を捨てる" },
                    { s: "葉先だけが茶色く乾く", c: "空気の乾燥、エアコンの風が直接当たっている", a: "風の当たらない位置に移し、葉に霧吹きをして様子を見る" },
                    { s: "葉が茶色く変色し、部分的に色が抜ける", c: "夏場の直射日光による葉焼け", a: "レースカーテンで光をやわらげるか、窓から少し離す" },
                    { s: "茎が間延びして葉の間隔が広くなる", c: "光が足りていない", a: "より明るい場所に移すか、耐陰性の強い種類に置き換える" },
                    { s: "土がいつまでも乾かない", c: "光・風が不足、鉢のサイズが大きすぎる、季節による生育の変化", a: "置き場所の明るさと風通しを確認し、水やりの間隔を空ける" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-[#E8E0D5] align-top">
                      <td className="px-3 py-3 font-medium text-[#333]">{r.s}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.c}</td>
                      <td className="px-3 py-3 text-[#666] leading-relaxed">{r.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] mt-4">
              ※ 到着時から傷んでいた場合は育て方の問題ではありません。交換保証の対象範囲と申請期限はサービスごとに異なるため、各社の交換対応は
              <Link href="/compare/kanyou-shokubutsu/#hikaku-hyou" className="text-[#4A7C59] underline mx-1">比較表</Link>
              と公式サイトで確認してください。
            </p>
          </div>
        </section>

        {/* 花のサブスクとの違い */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">切り花と観葉植物、お手入れの手間はどう違う？</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-[#E8E0D5] p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">花のサブスク（切り花の定期便）</p>
                <p className="text-sm text-[#666] leading-relaxed">数週間ごとに新しい季節の花が届き、<strong>“彩りを楽しむ”</strong>もの。寿命が短い分こまめに新鮮さが入れ替わり、テーブルや玄関の雰囲気を手軽に変えられます。</p>
              </div>
              <div className="bg-white rounded-xl border border-[#E8E0D5] p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">観葉植物のサブスク</p>
                <p className="text-sm text-[#666] leading-relaxed">より長く育てて<strong>“インテリア・空間の雰囲気づくり”</strong>を楽しむもの。水やりなどの世話をしながら長く付き合う、という性質です。</p>
              </div>
            </div>
            <p className="text-xs text-[#999] mt-4">※どちらも扱うサービス（AND PLANTS・HitoHana など）もあります。切り花の定期便を探している方は <Link href="/compare/ryokin/" className="text-[#4A7C59] underline">花のサブスク料金比較</Link> もどうぞ。</p>
          </div>
        </section>

        {/* 2タイプの選び方 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">お手入れの手間で考える｜自分で育てるか、プロに任せるか</h2>
            <div className="border border-[#E8E0D5] bg-[#FAF7F2] rounded-2xl p-6 mb-6">
              <p className="font-bold text-[#4A7C59] mb-3">サービス選びの結論：育てて楽しむなら「購入型」、手間なく入れ替えるなら「レンタル型」</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・<strong>購入型</strong>（毎回届く植物が自分のものになる）＝愛着を持って長く育てたい人向け。AND PLANTS など。</li>
                <li>・<strong>レンタル型</strong>（定額でプロが交換・メンテ）＝枯らす不安を避けたい・オフィスで常に良い状態を保ちたい人向け。</li>
                <li>・費用の相場は<strong>月2,000〜5,000円程度</strong>（サイズ・サービスで変動。正確な料金は各公式で要確認）。</li>
              </ul>
              <p className="text-xs text-[#666] leading-relaxed mt-4">
                サービスごとの月額の目安・メンテナンス頻度・交換対応・対応エリアの一覧と、サービス同士の対比は
                <Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] font-medium underline mx-1">観葉植物のサブスク・レンタル比較</Link>
                にまとめています。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-[#E8E0D5] p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">① 購入型（届いた植物が自分のものに）</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  同じ植物を長く育てて愛着を持ちたい人向け。観葉植物とお花の両方を扱う<strong>AND PLANTS（アンドプランツ）</strong>のように、サイズやおまかせ選定を選べるサービスがあります（料金は公式確認）。
                </p>
                <Link href="/services/and-plants" className="text-sm text-[#4A7C59] font-medium underline">AND PLANTSの詳細を見る</Link>
              </div>
              <div className="rounded-xl border border-[#E8E0D5] p-6">
                <p className="text-xs font-bold text-[#4A7C59] mb-2">② レンタル型（定額で交換・メンテ）</p>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  枯らす不安を避けたい・オフィスで常に良い状態を保ちたい人向け。プロが定期的に交換・メンテナンスするため手間が最小限です。複数拠点・大型サイズはこちらが向きます。
                </p>
                <Link href="/guides/houjin-office/#office-green-faq" className="text-sm text-[#4A7C59] font-medium underline">法人・オフィス導入のQ&amp;A（月額の目安・メンテナンス付き・小規模オフィス）</Link>
              </div>
            </div>
            <p className="text-xs text-[#999] mt-4">※各サービスの料金・送料・支払い方式（都度払い/月額）は公式サイトでの確認が前提です。当サイトでは架空の金額は掲載していません。</p>
          </div>
        </section>

        {/* 選び方のポイント */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">置き場所と手間から逆算する4つの確認ポイント</h2>
            <div className="space-y-4">
              {[
                { t: "置き場所とサイズを決める", d: "卓上サイズ（棚・デスク）か、床置きの中〜大型かで選ぶサービス・料金が変わります。まず置き場所の日当たりとスペースを確認しましょう。" },
                { t: "お手入れの手間で選ぶ", d: "丈夫で日陰にも比較的強い種類を選ぶと続けやすいです。世話の手間を最小化したいならメンテ込みのレンタル型が有力です。" },
                { t: "料金体系と保証を確認する", d: "月額制か都度払いか、送料の有無、到着時の傷み・不具合への交換保証があるかを公式で確認します。相場は月2,000〜5,000円程度が目安です。" },
                { t: "個人かオフィスかで分ける", d: "個人なら手軽な購入型・小型から。オフィスは複数拠点・請求書払い・メンテ込みの法人/レンタル型が向きます。" },
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

        {/* サービスへの導線 */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">観葉植物・お花を扱うサービスを見る</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/and-plants" className="bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">AND PLANTS（観葉植物・お花）</Link>
              <Link href="/services/hitohana" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">HitoHana</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">花のサブスク料金を比較</Link>
            </div>
            <p className="text-sm text-[#666] mt-5">サービスを絞り込みたい方は <Link href="/compare/kanyou-shokubutsu/" className="text-[#4A7C59] font-bold underline">観葉植物のサブスクおすすめ比較</Link> もどうぞ。</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">よくある質問</h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <summary className="font-bold text-[#333] cursor-pointer text-sm md:text-base">Q. {f.q}</summary>
                  <p className="mt-3 text-sm text-[#666] leading-relaxed" dangerouslySetInnerHTML={{ __html: "A. " + f.a }} />
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
