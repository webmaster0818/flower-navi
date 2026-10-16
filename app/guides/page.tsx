import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";

const TITLE = "花のサブスク・定期便のガイド一覧【2026年】始め方・お手入れ・行事・観葉植物｜flowerデリ";
const DESC = "当サイトでは、花のサブスク（定期便）の使い方をテーマ別のガイドとして掲載しています。始める前の判断材料、届いた花を長持ちさせる手入れ、贈り物や行事の準備、観葉植物と法人での利用について、23本のガイドから目的に合うものをお選びいただけます。数値は公式サイトで確認した値のみを掲載しています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }],  title: TITLE, description: DESC, url: "/guides/", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const groups: { heading: string; note: string; items: { href: string; label: string; desc: string }[] }[] = [
  {
    heading: "始める前の判断材料を確認する",
    note: "「続けられるか不安」「思ったより地味だったらどうしよう」といった迷いがある方は、こちらからお読みください。やめた方の理由と解約手順を事前に把握しておくと、申し込み後のミスマッチを防ぎやすくなります。",
    items: [
      { href: "/guides/beginner/", label: "花サブスク初心者ガイド", desc: "サービスの選び方から申し込み、最初の受け取りまでの流れを解説します。" },
      { href: "/guides/merit-demerit/", label: "メリット・デメリット", desc: "メリット7つとデメリット5つを挙げ、向いている方と向いていない方を整理します。" },
      { href: "/guides/shoboi/", label: "「しょぼい」「ひどい」という評判の検証", desc: "実際に届く花の本数と品質を検証し、期待との差が生じる要因を説明します。" },
      { href: "/guides/yameta/", label: "やめた理由5選", desc: "飽きた、費用に見合わない、花が好みでないといった理由を取り上げ、続けるかどうかの判断基準をまとめています。" },
      { href: "/guides/kaiyaku/", label: "解約方法まとめ", desc: "主要サービスの解約手順と、締め日・違約金に関する注意点を解説します。" },
    ],
  },
  {
    heading: "届いた花を長持ちさせる",
    note: "同じ花でも、届いた日の扱いによって持ちが変わります。まずは水切りと花瓶選びをご確認ください。",
    items: [
      { href: "/guides/flower-care/", label: "長持ちさせる方法7選", desc: "水切り・水換え・置き場所など、届いた日に行う作業を手順に沿って解説します。" },
      { href: "/guides/nagamochi/", label: "切り花を長持ちさせる方法10選", desc: "栄養剤・温度管理・花瓶の清潔さなど、寿命を延ばす具体的な方法を解説します。" },
      { href: "/guides/kabin/", label: "花瓶の選び方とおすすめ15選", desc: "素材・サイズ・予算別に、届く花の量に合った花瓶の選び方を解説します。" },
      { href: "/guides/seasonal-flowers/", label: "季節の花カレンダー", desc: "月別に届く代表的な花と、季節に合わせた飾り方を紹介します。" },
    ],
  },
  {
    heading: "贈り物や行事に合わせて選ぶ",
    note: "行事の花は、日程から逆算して注文する必要があります。各ガイドに準備の目安となる時期を記載しています。",
    items: [
      { href: "/guides/present/", label: "プレゼントに贈る", desc: "ギフトに対応したサービスの比較と、贈り方の手順を解説します。" },
      { href: "/guides/mothers-day/", label: "母の日に贈る", desc: "予算別の選び方と、当日に間に合わせるための注文時期を解説します。" },
      { href: "/guides/keirou-no-hi/", label: "敬老の日に贈る", desc: "一度きりの花束ではなく、毎月届く形で贈る方法を紹介します。" },
      { href: "/guides/obon/", label: "お盆・新盆（初盆）の花", desc: "お供えに適した花と避けるべき花、月遅れ盆の日程から逆算した注文時期を解説します。" },
      { href: "/guides/ohigan/", label: "お彼岸の花", desc: "秋彼岸の日程と中日、間に合わせるための注文時期を解説します。" },
      { href: "/guides/christmas-oshogatsu/", label: "クリスマス・お正月の花", desc: "冬は切り花が長持ちしやすい季節です。松・千両・葉牡丹を使ったお正月のアレンジも紹介します。" },
      { href: "/guides/butsudan/", label: "仏壇の仏花", desc: "仏花に適した花と避けるべき花、交換の周期に合った配送頻度の考え方を解説します。" },
      { href: "/guides/furusato-nouzei/", label: "ふるさと納税で受け取る", desc: "花の定期便を返礼品としている自治体と、控除上限額の確認手順を解説します。" },
    ],
  },
  {
    heading: "暮らし方に合わせて選ぶ",
    note: "部屋の広さや生活リズムによって、続けやすい量とプランは異なります。",
    items: [
      { href: "/guides/hitorigurashi/", label: "一人暮らし向け", desc: "少量プランを中心に、費用と手軽さの観点から比較します。" },
      { href: "/guides/dansei/", label: "男性向け", desc: "一人暮らしの部屋に花を置く際の飾り方と、選びやすいサービスを紹介します。" },
      { href: "/guides/oshare/", label: "おしゃれに飾る", desc: "デザイン性とアレンジの傾向から選ぶ方法を紹介します。" },
    ],
  },
  {
    heading: "観葉植物と法人での利用",
    note: "切り花ではなく観葉植物を置きたい場合や、オフィスで導入する場合は、こちらをご覧ください。",
    items: [
      { href: "/guides/kanyou-shokubutsu/", label: "観葉植物の育て方と置き場所", desc: "日当たりの見極め方、水やりの頻度、葉の状態から原因を確認する方法を解説します。" },
      { href: "/guides/kanyou-shokubutsu-ryokin/", label: "観葉植物のサブスク・レンタル料金の考え方", desc: "金額を左右する5つの条件、初期費用と月額の内訳、予算から選ぶ手順を解説します。" },
      { href: "/guides/houjin-office/", label: "オフィス向けの導入ガイド", desc: "数人から十数人規模のオフィスにおける置き場所、メンテナンスの有無、管理の負担を解説します。" },
    ],
  },
];

export default function GuidesIndexPage() {
  const all = groups.flatMap((g) => g.items);
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "花のサブスク・定期便のガイド一覧",
    itemListElement: all.map((it, i) => ({
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
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">ガイド一覧</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスク・定期便のガイド【2026年】<br className="hidden md:block" />
              始め方・お手入れ・行事・観葉植物
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              当サイトのガイドでは、サービスの比較ではなく、<strong>使い方と判断の方法</strong>をまとめています。
              始める前の検討事項、届いた花の手入れ、行事の準備、観葉植物と法人での利用について、目的に合うものからお読みください。
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
                    <p className="text-sm text-[#666] leading-relaxed">{it.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">各サービスを比較する</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-5">
              料金と送料を合わせた総額で、各社を比較いただけます。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/compare/" className="bg-[#4A7C59] text-white font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition">比較ガイド一覧を見る</Link>
              <Link href="/compare/ryokin/" className="bg-white border border-[#4A7C59] text-[#4A7C59] font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#F3EDE6] transition">料金比較表を見る</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
