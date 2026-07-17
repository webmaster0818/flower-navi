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

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "法人・オフィス向け花の定期便【2026年】メリットと選び方・費用の目安",
  description: "オフィス・店舗向けの花の定期便（サブスク）の選び方・メリット・費用の目安を、公式確認できる料金だけで整理。",
  datePublished: "2026-07-18T00:00:00+09:00",
  dateModified: "2026-07-18T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/guides/houjin-office/" },
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
              法人・オフィス向け 花の定期便<br className="hidden md:block" />
              メリットと選び方・費用の目安【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              受付・応接・店舗に花を飾りたい法人の方へ。法人専用サービスと個人向けサブスクのオフィス利用の違い、
              メリット、費用の目安を、公式で確認できる料金だけで整理します。
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
              </div>
            </div>
            <p className="text-xs text-[#999] mt-4">※法人専用サービスの料金は本数・頻度・拠点数で変わるため、公式サイトでの見積もり・問い合わせが前提です。個人向けの料金は各サービス公式の公表値です。</p>
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
