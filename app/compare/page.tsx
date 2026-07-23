import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";

const TITLE = "花のサブスク・定期便の比較【2026年】料金・送料・目的別のおすすめ比較ガイド一覧｜flowerデリ";
const DESC = "花のサブスク（定期便）の比較をお探しの方へ。料金は「総額（花代＋送料）」で比べるのが基本です。料金・安さ・送料無料・ポスト投函・一輪挿し・観葉植物・1対1比較まで、目的別の比較ガイドをまとめました。数値は公式確認値のみで、架空の価格は掲載していません。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/" },
  openGraph: { title: TITLE, description: DESC, url: "/compare/", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const groups: { heading: string; note: string; items: { href: string; label: string; desc: string }[] }[] = [
  {
    heading: "料金・安さで比較する",
    note: "花のサブスクは「月額の安さ」だけでなく、送料を含めた“総額”と1本あたり単価で比べるのが失敗しないコツです。",
    items: [
      { href: "/compare/ryokin/", label: "料金比較表（総額・最低支払額・1本単価）", desc: "送料込みの総額・最低支払額・1本単価で正しく比較。まず全体像を掴むならここ。" },
      { href: "/compare/campaign/", label: "初回特典・お試しプラン比較（安く始める）", desc: "各社の初回・お試し／最安プランを比較。時限クーポンの探し方も正直に解説。" },
      { href: "/compare/cheap/", label: "安い順ランキング（送料込み実価格）", desc: "送料込みの実価格748円〜で安い順に比較（公式確認済）。" },
      { href: "/compare/500yen/", label: "ワンコイン（500円台）で始める", desc: "500円台から始められるお試し・体験プランを比較。" },
      { href: "/compare/souryou-muryou/", label: "送料無料の定期便3選", desc: "送料無料のサービスを総額で比較。" },
    ],
  },
  {
    heading: "目的・用途で比較する",
    note: "受け取り方や飾りたいもので選ぶと、続けやすいサービスが見つかります。",
    items: [
      { href: "/compare/post-delivery/", label: "ポスト投函できる定期便", desc: "不在でも受け取れるポスト投函対応を比較。" },
      { href: "/compare/ichirinzashi/", label: "一輪挿しに合う少量プラン", desc: "少量プランと一輪挿しの飾り方のコツ。" },
      { href: "/compare/kanyou-shokubutsu/", label: "観葉植物のサブスク", desc: "切り花ではなく観葉植物の定期便・レンタルを比較（選び方は<ガイド>も）。" },
    ],
  },
  {
    heading: "人気ブランドを1対1で比較する",
    note: "候補が絞れてきたら、主要ブランドの直接比較で最終判断を。",
    items: [
      { href: "/compare/bloomee-vs-medelu/", label: "bloomee vs medelu", desc: "8つの違いを比較（総額最安はmedelu 748円/回）。" },
      { href: "/compare/bloomee-vs-hitohana/", label: "bloomee vs HitoHana", desc: "2社を徹底比較、どっちがおすすめか。" },
    ],
  },
];

export default function CompareIndexPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "花のサブスク・定期便の比較ガイド一覧",
    itemListElement: groups.flatMap((g) => g.items).map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      url: `https://ohana-delivery.com${it.href}`,
    })),
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <main>
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">比較ガイド一覧</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスク・定期便の比較【2026年】<br className="hidden md:block" />
              料金・送料・目的別に選ぶ
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              花のサブスク（定期便）は、月額の安さだけでなく<strong>「総額（花代＋送料）」</strong>で比べるのが基本。
              目的別の比較ガイドから、あなたに合うサービスを見つけてください。数値は公式確認値のみ・架空の価格は掲載していません。
            </p>
          </div>
        </section>

        {groups.map((g, gi) => (
          <section key={gi} className={gi % 2 === 0 ? "py-12 md:py-16 bg-white" : "py-12 md:py-16 bg-[#FAF7F2]"}>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#4A7C59]">{g.heading}</h2>
              <p className="text-sm text-[#666] leading-relaxed mb-6">{g.note}</p>
              <div className="grid gap-4">
                {g.items.map((it) => (
                  <Link key={it.href} href={it.href} className="block bg-white rounded-xl border border-[#E8E0D5] p-5 hover:border-[#4A7C59] hover:shadow-sm transition">
                    <p className="font-bold text-[#4A7C59] mb-1">{it.label}</p>
                    <p className="text-sm text-[#666] leading-relaxed" dangerouslySetInnerHTML={{ __html: it.desc.replace("<ガイド>", '<span class="underline">選び方ガイド</span>') }} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">まずは人気サービスから試す</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/medelu" className="bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">medelu（748円・送料無料）</Link>
              <Link href="/services/bloomee" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">bloomee</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">料金比較表を見る</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
