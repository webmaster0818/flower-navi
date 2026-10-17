import Link from "next/link";
import Header from "@/app/components/Header";

const CONFIRMED = "2026年7月24日";

const plans = [
  { brand: "medelu（メデル）", href: "/services/medelu", plan: "Miniプラン 月748円（税込）・送料無料", point: "送料込みの実額が最も安い水準です。初めての方や費用を抑えて始めたい方に適しています。" },
  { brand: "bloomee（ブルーミー）", href: "/services/bloomee", plan: "お試しプランあり（ポスト投函・少量から）", point: "ポスト投函で受け取りやすく、少量から始められます。最初に試す際に適しています。" },
  { brand: "hanameku（ハナメク）", href: "/services/hanameku", plan: "ライトプラン 1,210円/回〜（税込・配送料込）", point: "ご自身で生けるセルフアレンジ型で、1回あたりの価格が手頃です。ボリュームより手軽さを重視する方に適しています。" },
  { brand: "AND PLANTS（アンドプランツ）", href: "/services/and-plants", plan: "お試しプラン 1,480円〜（花・観葉植物）", point: "花に加えて観葉植物も取り扱っています。グリーンもあわせて検討したい方に適しています。" },
];

const faqItems = [
  {
    q: "花のサブスクを最も安く始める方法はありますか？",
    a: "送料込みの実額では、medeluのMiniプラン（月748円・送料無料）が最も安い水準です。価格を重視する場合はmedelu、ポスト投函で少量から試す場合はbloomeeのお試しプランが始めやすい選択肢です。正確な料金・最新の特典は、各社の公式サイトにてご確認ください。",
  },
  {
    q: "初回無料やクーポンはありますか？",
    a: "花のサブスク各社は、時期によって初回割引・お試し価格・キャンペーンを実施することがあります。これらは内容の変動が大きいため、当サイトでは常設のお試しプラン・最安プランを比較し、期間限定の特典については各社の公式サイト（お申し込みリンク）にて最新情報をご確認いただく形としています（確認できない割引額は掲載していません）。",
  },
  {
    q: "お試しプランから通常プランに変えられますか？",
    a: "多くのサービスでプラン変更が可能です。まずお試しプランや少量プランで花のある生活を継続できるかを確かめ、問題がなければボリュームのあるプランに切り替える方法をおすすめします。プラン変更の可否・手順は、各社の公式サイトにてご確認ください。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "花のサブスクの初回特典・お試しプラン比較｜安く始める方法",
  description: "bloomee・medelu・AND PLANTS・hanamekuの初回・お試しプランを送料込みの実額で比較しています。期間限定のクーポンは公式サイトでの確認方法を案内しています。",
  datePublished: "2026-07-24T00:00:00+09:00",
  dateModified: "2026-07-24T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/compare/campaign/" },
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function CampaignPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main>
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">初回・お試しプラン比較</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクの初回特典・お試しプラン比較<br className="hidden md:block" />
              安く始める方法
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              当サイトでは、各社の初回から利用できるお試しプラン・最安プランを、送料込みの実額で比較しています。
              期間限定のクーポンや初回無料の特典は変動するため、公式サイトでの確認方法もあわせて解説します。
            </p>
          </div>
        </section>

        {/* 30秒サマリー */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">価格を重視する場合はmedelu、まず試す場合はbloomeeをおすすめします</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・送料込みで最も安い水準のプランは<strong>medelu Miniプラン（月748円・送料無料）</strong>です。</li>
                <li>・ポスト投函で少量から始められるプランは<strong>bloomeeのお試しプラン</strong>です。</li>
                <li>・期間限定の初回割引・クーポンは変動するため、<strong>各社の公式サイト（お申し込みリンク）にて最新情報をご確認ください</strong>（当サイトでは常設の最安プラン・お試しプランを比較しています）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* お試し・最安プラン比較 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#4A7C59]">初回・お試しで始めやすいプラン</h2>
            <p className="text-xs text-[#999] mb-6">※料金は、各サービスの公式サイトに掲載された常設プランを当サイトが確認した値です（確認日：{CONFIRMED}）。詳細・最新情報は各社の公式サイトにてご確認ください。</p>
            <div className="grid gap-4">
              {plans.map((p) => (
                <div key={p.brand} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold text-[#333]">{p.brand}</p>
                    <p className="text-sm font-bold text-[#4A7C59]">{p.plan}</p>
                  </div>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">{p.point}</p>
                  <Link href={p.href} className="mt-2 inline-block text-sm text-[#4A7C59] underline">{p.brand.split("（")[0]}の詳細・最新料金を確認する</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* クーポン・キャンペーンの探し方 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">クーポン・キャンペーンの確認方法</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              花のサブスク各社は、時期によって<strong>初回割引・お試し価格・季節キャンペーン</strong>を実施することがあります。ただし内容・期間の変動が大きく、終了した割引を利用可能として掲載すると不正確な情報となるため、当サイトでは<strong>常設の最安プラン・お試しプラン</strong>を比較し、期間限定の特典は各社の公式サイトで確認いただく形としています。
            </p>
            <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
              <li>・各サービスの<strong>公式サイト（お申し込みページ）</strong>で、現在の初回特典・キャンペーンの表示を確認します。</li>
              <li>・まずは<strong>お試しプラン・少量プラン</strong>で始め、継続できる場合に通常プランへ切り替えます（最初から高額なプランを選ぶことは避けてください）。</li>
              <li>・料金は月額だけでなく、<strong>送料込みの総額と1回あたりの金額</strong>で比較します（比較には <Link href="/compare/ryokin/" className="text-[#4A7C59] underline">料金比較表</Link> をご利用ください）。</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">低価格のプラン・お試しプランから始める</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/medelu" className="bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">medelu（748円・送料無料）</Link>
              <Link href="/services/bloomee" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">bloomee（お試しプラン）</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">料金を総額で比較</Link>
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
