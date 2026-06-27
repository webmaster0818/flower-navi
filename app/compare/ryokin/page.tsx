import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import SiteFooter from "@/app/components/SiteFooter";
import { SERVICES, minTotal, perStem, type Service } from "@/data/services";

const UPDATED = "2026年6月27日";

export const metadata: Metadata = {
  title: "花の定期便 料金比較表｜送料込み総額・最低支払額・1本単価で正しく比較【2026年6月確認】",
  description:
    "花のサブスク（定期便）の料金を、月額ではなく〈送料込みの1回総額・最低受取回数までの総額・1本あたり単価〉で比較。bloomee・medelu・AND PLANTS・hanamekuの最新料金を公式サイトで確認した日付つきで掲載しています。",
  alternates: { canonical: "/compare/ryokin/" },
};

// 安い順（送料込み最安）
const sorted = [...SERVICES].sort((a, b) => a.cheapest.price - b.cheapest.price);

function yen(n: number) {
  return n.toLocaleString("ja-JP");
}

export default function RyokinPage() {
  const faq = [
    {
      q: "花のサブスクの料金は何で比較すればいいですか？",
      a: "「月額」ではなく〈送料込みの1回あたり総額〉〈最低受取回数までに支払う総額〉〈1本あたり単価〉の3点で比較するのが正確です。月額が安く見えても送料や最低継続回数で総額が変わるためです。",
    },
    {
      q: "送料込みで一番安い花の定期便はどれですか？",
      a: `送料込みの1回あたり総額では、${sorted[0].name}の${sorted[0].cheapest.name}（${yen(
        sorted[0].cheapest.price
      )}円）が最安です（${UPDATED}時点・公式確認）。ただし最低受取回数や本数も合わせて確認してください。`,
    },
    {
      q: "最低受取回数（縛り）がある場合の総額はどう考えますか？",
      a: "縛りがあるサービスは『最安プラン価格 × 最低受取回数』が実質の最低支払額です。本表ではこの『最低受取までの総額』も掲載しています。縛りなしのサービスは1回分のみで解約できます。",
    },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "花の定期便 料金比較表（送料込み総額・最低支払額・1本単価）",
    description: "花のサブスクの料金を送料込み総額・最低支払額・1本単価で比較。公式確認日つき。",
    dateModified: "2026-06-27",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="max-w-[960px] mx-auto px-4 py-8 lg:py-12">
        <nav className="text-[11px] text-[#999] mb-4">
          <Link href="/" className="hover:underline">トップ</Link> ＞ 料金比較
        </nav>
        <h1 className="text-2xl md:text-3xl font-bold text-[#333] leading-tight mb-3">
          花の定期便 料金比較表｜送料込み総額・最低支払額・1本単価で正しく比較
        </h1>
        <p className="text-xs text-[#999] mb-6">最終更新：{UPDATED}／料金は各公式サイトで確認した実データです。</p>

        {/* AEO 即答ブロック */}
        <div className="bg-[#F4F8F5] border border-[#D7E6DC] rounded-lg p-4 mb-8">
          <p className="text-sm text-[#333] leading-relaxed">
            <strong>結論：</strong>花のサブスクは「月額」でなく
            <strong>〈送料込みの1回総額〉〈最低受取までの総額〉〈1本単価〉</strong>で比較するのが正確です。
            送料込み最安は<strong>{sorted[0].name}（{yen(sorted[0].cheapest.price)}円・{sorted[0].cheapest.name}）</strong>。
            縛りなしで気軽に試すなら回数縛りのないサービスがおすすめです（{UPDATED}時点・公式確認）。
          </p>
        </div>

        {/* 料金マスター表（スマホは横スクロール） */}
        <div className="overflow-x-auto mb-3">
          <table className="w-full min-w-[680px] text-sm border-collapse">
            <thead>
              <tr className="bg-[#4A7C59] text-white">
                <th className="p-3 text-left">サービス</th>
                <th className="p-3 text-left">最安プラン</th>
                <th className="p-3 text-right">1回総額<br />(送料込)</th>
                <th className="p-3 text-right">1本単価<br />(目安)</th>
                <th className="p-3 text-left">最低受取/縛り</th>
                <th className="p-3 text-right">最低支払額</th>
                <th className="p-3 text-center">公式</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s: Service, i) => (
                <tr key={s.id} className={i % 2 ? "bg-[#FAFBFA]" : "bg-white"}>
                  <td className="p-3 border-b border-[#E8E0D8] font-bold">
                    <Link href={s.servicePath} className="text-[#4A7C59] underline">{s.name}</Link>
                  </td>
                  <td className="p-3 border-b border-[#E8E0D8]">
                    {s.cheapest.name}<br /><span className="text-[11px] text-[#999]">{s.cheapest.flowers}・{s.shippingNote}</span>
                  </td>
                  <td className="p-3 border-b border-[#E8E0D8] text-right font-bold text-[#C4877A]">{yen(s.cheapest.price)}円</td>
                  <td className="p-3 border-b border-[#E8E0D8] text-right">約{yen(perStem(s))}円/本</td>
                  <td className="p-3 border-b border-[#E8E0D8]">{s.minDeliveries ? `${s.minDeliveries}回継続` : "縛りなし"}</td>
                  <td className="p-3 border-b border-[#E8E0D8] text-right">{yen(minTotal(s))}円</td>
                  <td className="p-3 border-b border-[#E8E0D8] text-center">
                    <a href={s.affiliateUrl} target="_blank" rel="sponsored nofollow noopener noreferrer" className="inline-block bg-[#4A7C59] text-white text-xs font-bold px-3 py-2 rounded-full hover:bg-[#3A6247]">公式へ</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-[#999] mb-8">
          ※価格は税込・各公式サイトで{UPDATED}に確認した最安プランです。送料の扱い・最低受取回数・本数はプランや地域で変わるため、申込前に必ず公式サイトで最新条件をご確認ください。
          {SERVICES.filter((s) => s.note).map((s) => (
            <span key={s.id} className="block mt-1">・{s.name}：{s.note}</span>
          ))}
        </p>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-[#333] mb-4 pb-2 border-b-2 border-[#4A7C59]">よくある質問</h2>
        <div className="space-y-3 mb-10">
          {faq.map((f) => (
            <details key={f.q} className="border border-[#E8E0D8] rounded-lg p-4 bg-white">
              <summary className="font-bold text-sm cursor-pointer text-[#333]">Q. {f.q}</summary>
              <p className="text-sm text-[#666] mt-2 leading-relaxed">A. {f.a}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/compare/cheap/" className="text-sm text-[#4A7C59] underline">安い花のサブスク ランキングを見る ＞</Link>
          <Link href="/compare/post-delivery/" className="text-sm text-[#4A7C59] underline">ポスト投函できる定期便を見る ＞</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
