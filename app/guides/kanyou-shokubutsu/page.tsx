import Link from "next/link";
import Header from "@/app/components/Header";

const faqItems = [
  {
    q: "観葉植物のサブスクは、購入とレンタルのどちらがお得ですか？",
    a: "使い方によって変わります。長く同じ植物を育てて愛着を持ちたいなら「購入型（毎回届いた植物が自分のものになる）」、枯らす不安を避けて手間なく入れ替えたい・オフィスで常に良い状態を保ちたいなら「レンタル型（定額でプロが交換・メンテ）」が向いています。単純な金額だけでなく、『育てる楽しみ』か『手間の少なさ』のどちらを取るかで選ぶのが失敗しにくい考え方です。具体的な料金は各サービスの公式サイトでご確認ください。",
  },
  {
    q: "花のサブスクと観葉植物のサブスクは何が違いますか？",
    a: "目的が違います。花のサブスク（切り花の定期便）は、数週間ごとに新しい季節の花が届き“彩りを楽しむ”もの。観葉植物のサブスクは、より長く育てて“インテリアや空間の雰囲気づくり”を楽しむものです。切り花は寿命が短い分こまめに新鮮さが入れ替わり、観葉植物は水やりなどの世話をしながら長く付き合う、という性質の違いがあります。両方を扱うサービス（AND PLANTS・HitoHana など）もあります。",
  },
  {
    q: "観葉植物のサブスクの費用の目安は？",
    a: "サービスやサイズ（卓上サイズか大型か）によって幅がありますが、一般的な相場は月あたり2,000〜5,000円程度とされています。これはあくまで市場の目安で、正確な料金・送料・支払い方式（都度払い/月額）はサービスごとに異なるため、必ず各公式サイトで確認してください。当サイトでは架空の金額は掲載していません。",
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
  headline: "観葉植物のサブスク・定期便の選び方【2026年】購入型とレンタル型の違い・費用の目安",
  description: "観葉植物のサブスク（定期便・レンタル）の選び方・購入型とレンタル型の違い・費用の目安を、公式で確認できる情報だけで整理。",
  datePublished: "2026-07-20T00:00:00+09:00",
  dateModified: "2026-07-20T00:00:00+09:00",
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
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">観葉植物のサブスク ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              観葉植物のサブスク・定期便の選び方<br className="hidden md:block" />
              購入型とレンタル型の違い・費用の目安【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              観葉植物を定期便やサブスクで取り入れたい方へ。購入型とレンタル型の違い、花のサブスクとの違い、費用の目安、
              個人・オフィスでの選び方を、公式で確認できる情報だけで整理します。
            </p>
          </div>
        </section>

        {/* 30秒サマリー */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">結論：育てて楽しむなら「購入型」、手間なく入れ替えるなら「レンタル型」</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・<strong>購入型</strong>（毎回届く植物が自分のものになる）＝愛着を持って長く育てたい人向け。AND PLANTS など。</li>
                <li>・<strong>レンタル型</strong>（定額でプロが交換・メンテ）＝枯らす不安を避けたい・オフィスで常に良い状態を保ちたい人向け。</li>
                <li>・費用の相場は<strong>月2,000〜5,000円程度</strong>（サイズ・サービスで変動。正確な料金は各公式で要確認）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 花のサブスクとの違い */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">花のサブスクとの違い</h2>
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">購入型・レンタル型の選び方</h2>
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
                <Link href="/guides/houjin-office/" className="text-sm text-[#4A7C59] font-medium underline">法人・オフィス向けの選び方</Link>
              </div>
            </div>
            <p className="text-xs text-[#999] mt-4">※各サービスの料金・送料・支払い方式（都度払い/月額）は公式サイトでの確認が前提です。当サイトでは架空の金額は掲載していません。</p>
          </div>
        </section>

        {/* 選び方のポイント */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">失敗しない選び方のポイント</h2>
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
