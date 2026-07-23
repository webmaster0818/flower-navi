import Link from "next/link";
import Header from "@/app/components/Header";

const CONFIRMED = "2026年7月24日";

const plans = [
  { brand: "medelu（メデル）", href: "/services/medelu", plan: "Miniプラン 月748円（税込）・送料無料", point: "送料込みの実額が最安クラス。初めて・安く始めたい人の第一候補。" },
  { brand: "bloomee（ブルーミー）", href: "/services/bloomee", plan: "体験プランあり（ポスト投函・少量から）", point: "ポスト投函で受け取りやすく、少量から気軽に。まず試すのに向く。" },
  { brand: "hanameku（ハナメク）", href: "/services/hanameku", plan: "ライトプラン 1,210円/回〜（税込・送料別）", point: "セルフアレンジ型で1回あたりが手頃。ボリュームより手軽さ重視向け。" },
  { brand: "AND PLANTS（アンドプランツ）", href: "/services/and-plants", plan: "お試しプラン 1,480円〜（花・観葉植物）", point: "花に加え観葉植物も扱う。グリーンも一緒に検討したい人に。" },
];

const faqItems = [
  {
    q: "花のサブスクを一番安く始める方法は？",
    a: "送料込みの実額で見ると、medeluのMiniプラン（月748円・送料無料）が最安クラスです。安さ重視ならまずmedelu、ポスト投函で少量から試すならbloomeeの体験プランが始めやすい選択です。正確な料金・最新の特典は各社公式でご確認ください。",
  },
  {
    q: "初回無料やクーポンはありますか？",
    a: "花のサブスク各社は、時期によって初回割引・お試し価格・キャンペーンを実施することがあります。これらは変動が大きいため、当ページでは常設の「お試し・最安プラン」を比較し、時限の特典は各社公式サイト（お申込みリンク）で最新をご確認いただく形にしています（架空の割引額は掲載していません）。",
  },
  {
    q: "お試しプランから通常プランに変えられますか？",
    a: "多くのサービスでプラン変更が可能です。まずお試し・少量プランで花のある生活が続きそうか試し、良ければボリュームのあるプランに切り替えるのが失敗しにくい進め方です。プラン変更の可否・手順は各社公式でご確認ください。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "花のサブスクの初回特典・お試しプラン比較【2026年7月】安く始める方法",
  description: "bloomee・medelu・AND PLANTS・hanamekuの初回・お試しプランを送料込み実額で比較。時限クーポンは公式確認を案内。",
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
              安く始める方法【2026年7月】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              花のサブスクを初めて・安く始めたい方へ。各社の「初回に使えるお試し／最安プラン」を送料込みの実額で比較します。
              時限クーポン・初回無料は変動するため、公式での最新確認の仕方もあわせて解説します。
            </p>
          </div>
        </section>

        {/* 30秒サマリー */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">結論：安さ重視ならmedelu、まず試すならbloomee</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・<strong>送料込みで最安クラス＝medelu Miniプラン（月748円・送料無料）</strong>。</li>
                <li>・<strong>ポスト投函で少量から気軽に＝bloomeeの体験プラン</strong>。</li>
                <li>・時限の初回割引・クーポンは変動するため、<strong>各社公式（お申込みリンク）で最新をご確認ください</strong>（当ページは常設の最安・お試しプラン比較です）。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* お試し・最安プラン比較 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#4A7C59]">初回・お試しで始めやすいプラン</h2>
            <p className="text-xs text-[#999] mb-6">※料金は各サービス公式の常設プランを当サイトが確認した値（確認日：{CONFIRMED}）。詳細・最新は各社公式でご確認ください。</p>
            <div className="grid gap-4">
              {plans.map((p) => (
                <div key={p.brand} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold text-[#333]">{p.brand}</p>
                    <p className="text-sm font-bold text-[#4A7C59]">{p.plan}</p>
                  </div>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">{p.point}</p>
                  <Link href={p.href} className="mt-2 inline-block text-sm text-[#4A7C59] underline">{p.brand.split("（")[0]}の詳細・最新料金を見る</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* クーポン・キャンペーンの探し方 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">クーポン・キャンペーンの探し方（正直な話）</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-4">
              花のサブスク各社は、時期によって<strong>初回割引・お試し価格・季節キャンペーン</strong>を実施することがあります。ただし内容・期間は変動が大きく、終了済みの割引を「まだ使える」と載せるのは不正確なので、当サイトでは<strong>常設の最安・お試しプラン</strong>を比較し、時限の特典は各社公式で確認する形にしています。
            </p>
            <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
              <li>・各サービスの<strong>公式サイト（申込みページ）</strong>で、現在の初回特典・キャンペーン表示を確認する。</li>
              <li>・まずは<strong>お試し・少量プラン</strong>で始め、続きそうなら通常プランへ切り替える（最初から高いプランにしない）。</li>
              <li>・料金は「月額」だけでなく<strong>送料込みの総額と1回あたり</strong>で比べる（比較は <Link href="/compare/ryokin/" className="text-[#4A7C59] underline">料金比較表</Link> が便利）。</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">まずは安い・お試しプランから</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/medelu" className="bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">medelu（748円・送料無料）</Link>
              <Link href="/services/bloomee" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">bloomee（体験プラン）</Link>
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
