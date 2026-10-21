import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

const TITLE = "花のサブスク・定期便の比較【2026年】料金・送料・目的別のおすすめ比較ガイド一覧｜flowerデリ";
const DESC = "花のサブスク（定期便）の比較ガイド一覧です。当サイトでは、料金を「総額（花代＋送料）」で比較することを基本としています。料金・送料無料・ポスト投函・一輪挿し・観葉植物・2社の直接比較など、目的別の比較ガイドを掲載しています。数値は公式サイトで確認した値のみを掲載しています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/compare/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }],  title: TITLE, description: DESC, url: "/compare/", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const groups: { heading: string; note: string; items: { href: string; label: string; desc: string }[] }[] = [
  {
    heading: "料金・安さで比較する",
    note: "花のサブスクは、月額料金だけでなく、送料を含めた総額と1本あたりの単価で比較することをおすすめします。",
    items: [
      { href: "/compare/ryokin/", label: "料金比較表（総額・最低支払額・1本単価）", desc: "送料込みの総額・最低支払額・1本あたりの単価で比較しています。全体像を把握する際にご利用ください。" },
      { href: "/compare/campaign/", label: "初回特典・お試しプラン比較（安く始める）", desc: "各社の初回特典・お試しプラン・最安プランを比較しています。期間限定クーポンの確認方法も解説しています。" },
      { href: "/compare/cheap/", label: "安い順の比較（送料込みの実価格）", desc: "送料込みの実価格（748円〜）を安い順に比較しています（公式サイトで確認済み）。" },
      { href: "/compare/500yen/", label: "500円台から始められる最安プランの比較", desc: "最安プランを、送料込みの総額と回数の条件で比較しています。" },
      { href: "/compare/souryou-muryou/", label: "送料無料の定期便3選", desc: "送料無料のサービスを総額で比較しています。" },
    ],
  },
  {
    heading: "目的・用途で比較する",
    note: "受け取り方法や飾りたいものに合わせて選ぶと、継続しやすいサービスを見つけやすくなります。",
    items: [
      { href: "/compare/post-delivery/", label: "ポスト投函できる定期便", desc: "不在時でも受け取れるポスト投函対応のサービスを比較しています。" },
      { href: "/compare/ichirinzashi/", label: "一輪挿しに合う少量プラン", desc: "少量プランの比較と、一輪挿しの飾り方を解説しています。" },
      { href: "/compare/kanyou-shokubutsu/", label: "観葉植物のサブスク", desc: "切り花ではなく、観葉植物の定期便・レンタルを比較しています（選び方は<ガイド>もご参照ください）。" },
      { href: "/compare/osonae/", label: "仏花・お供えの花（定期便／通販）", desc: "お供え専用商品の有無・白系の花・立て札・価格を、8社の公式情報で比較しています。お盆・お彼岸の準備にもご利用いただけます。" },
    ],
  },
  {
    heading: "人気ブランドを1対1で比較する",
    note: "候補を絞り込んだ後は、主要ブランドの直接比較を最終判断にお役立てください。",
    items: [
      { href: "/compare/bloomee-vs-medelu/", label: "bloomee vs medelu", desc: "8つの違いを比較しています（総額の最安はmedeluの748円/回）。" },
      { href: "/compare/bloomee-vs-hitohana/", label: "bloomee vs HitoHana", desc: "2社の違いを比較し、目的別のおすすめを解説しています。" },
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
        <PageHero path="/compare/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">比較ガイド一覧</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              花のサブスク・定期便の比較【2026年】<br className="hidden md:block" />
              料金・送料・目的別に選ぶ
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] max-w-2xl mx-auto leading-relaxed">
              当サイトでは、花のサブスク（定期便）を月額料金だけでなく<strong>総額（花代＋送料）</strong>で比較しています。
              目的別の比較ガイドから、ご自身に合うサービスをお選びください。数値は公式サイトで確認した値のみを掲載しています。
            </p>
          </div>
        </PageHero>

        {groups.map((g, gi) => (
          <section key={gi} className={gi % 2 === 0 ? "py-12 md:py-16 bg-white" : "py-12 md:py-16 bg-[#F6F4EF]"}>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-2 pb-3 border-b-2 border-[#2F5B43]">{g.heading}</h2>
              <p className="text-sm text-[#4A4F49] leading-relaxed mb-6">{g.note}</p>
              <div className="grid gap-4">
                {g.items.map((it) => (
                  <Link key={it.href} href={it.href} className="block bg-white rounded-md border border-[#DEDAD2] p-5 hover:border-[#2F5B43] transition">
                    <p className="font-bold text-[#2F5B43] mb-1">{it.label}</p>
                    <p className="text-sm text-[#4A4F49] leading-relaxed" dangerouslySetInnerHTML={{ __html: it.desc.replace("<ガイド>", '<span class="underline">選び方ガイド</span>') }} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#1F2420] mb-4">人気のサービスから選ぶ</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/medelu" className="bg-[#2F5B43] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">medelu（748円・送料無料）</Link>
              <Link href="/services/bloomee" className="bg-white border border-[#2F5B43] text-[#2F5B43] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F6F4EF] transition">bloomee</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#2F5B43] text-[#2F5B43] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F6F4EF] transition">料金比較表を見る</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
