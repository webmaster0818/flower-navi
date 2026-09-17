import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";

const TITLE = "花のサブスク・定期便のガイド一覧【2026年】始め方・お手入れ・行事・観葉植物まで｜flowerデリ";
const DESC = "花のサブスク（定期便）の使い方をテーマ別にまとめたガイド一覧です。始める前の判断材料、届いた花を長持ちさせる手入れ、贈りものや行事の準備、観葉植物と法人向けまで、23本のガイドから目的に合うものを選べます。数値は公式確認値のみを掲載しています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/guides/" },
  openGraph: { title: TITLE, description: DESC, url: "/guides/", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const groups: { heading: string; note: string; items: { href: string; label: string; desc: string }[] }[] = [
  {
    heading: "始める前に判断する",
    note: "「続けられるか不安」「思ったより地味だったらどうしよう」という迷いから読むのがおすすめです。やめた人の理由と解約手順まで先に知っておくと、失敗しにくくなります。",
    items: [
      { href: "/guides/beginner/", label: "花サブスク初心者ガイド", desc: "サービスの選び方から申し込み、最初の受け取りまでの流れをひととおり解説。" },
      { href: "/guides/merit-demerit/", label: "メリット・デメリット", desc: "メリット7つとデメリット5つ。向いている人と向いていない人を先に整理します。" },
      { href: "/guides/shoboi/", label: "「しょぼい」「ひどい」は本当か", desc: "実際に届く花の本数と品質を検証。期待値とのズレがどこで起きるのかを説明します。" },
      { href: "/guides/yameta/", label: "やめた理由5選", desc: "飽きた・コスパが合わない・花が好みでない。続けるべきかの判断基準をまとめました。" },
      { href: "/guides/kaiyaku/", label: "解約方法まとめ", desc: "主要サービスの解約手順と、締め日・違約金まわりの注意点。" },
    ],
  },
  {
    heading: "届いた花を長持ちさせる",
    note: "同じ花でも、届いた日の扱いで持ちが変わります。まず水切りと花瓶選びを押さえてください。",
    items: [
      { href: "/guides/flower-care/", label: "長持ちさせるコツ7選", desc: "水切り・水換え・置き場所など、届いた日にやることを手順で解説。" },
      { href: "/guides/nagamochi/", label: "切り花を長持ちさせる方法10選", desc: "栄養剤・温度管理・花瓶の清潔さまで、寿命を延ばす具体策。" },
      { href: "/guides/kabin/", label: "花瓶の選び方とおすすめ15選", desc: "素材別・サイズ別・予算別。届く花の量に合う一本の選び方。" },
      { href: "/guides/seasonal-flowers/", label: "季節の花カレンダー", desc: "月別に届く代表的な花と、季節に合わせた飾り方。" },
    ],
  },
  {
    heading: "贈る・行事に合わせる",
    note: "行事の花は日程から逆算して注文します。各ガイドに用意すべき時期を書いています。",
    items: [
      { href: "/guides/present/", label: "プレゼントに贈る", desc: "ギフト対応があるサービスの比較と、贈り方の手順。" },
      { href: "/guides/mothers-day/", label: "母の日に贈る", desc: "予算別の選び方と、当日に間に合わせるための注文タイミング。" },
      { href: "/guides/keirou-no-hi/", label: "敬老の日に贈る", desc: "一度きりの花束ではなく、毎月届く形で贈るという選択肢。" },
      { href: "/guides/obon/", label: "お盆・新盆（初盆）の花", desc: "お供えに向く花と避ける花、月遅れ盆の日程からの逆算。" },
      { href: "/guides/ohigan/", label: "お彼岸の花", desc: "秋彼岸の日程と中日、注文をいつ出せば間に合うか。" },
      { href: "/guides/christmas-oshogatsu/", label: "クリスマス・お正月の花", desc: "冬は切り花が長持ちする季節。松・千両・葉牡丹のお正月アレンジまで。" },
      { href: "/guides/butsudan/", label: "仏壇の仏花", desc: "仏花に向く花・避ける花と、交換サイクルに合う配送頻度の考え方。" },
      { href: "/guides/furusato-nouzei/", label: "ふるさと納税で受け取る", desc: "花の定期便を返礼品にしている自治体と、控除上限額の確認手順。" },
    ],
  },
  {
    heading: "暮らし方から選ぶ",
    note: "部屋の広さや生活リズムによって、続けやすい量とプランが変わります。",
    items: [
      { href: "/guides/hitorigurashi/", label: "一人暮らし向け", desc: "少量プランを中心に、コスパと手軽さで選ぶ。" },
      { href: "/guides/dansei/", label: "男性向け", desc: "一人暮らしの部屋に花を置くときの飾り方と、選びやすいサービス。" },
      { href: "/guides/oshare/", label: "おしゃれに飾る", desc: "デザイン性・アレンジの傾向で選ぶ。" },
    ],
  },
  {
    heading: "観葉植物・法人で使う",
    note: "切り花ではなく観葉植物を置きたい場合や、オフィスで導入する場合はこちらです。",
    items: [
      { href: "/guides/kanyou-shokubutsu/", label: "観葉植物の育て方と置き場所", desc: "日当たりの見極め、水やりの頻度、葉の状態から原因を探すチェック。" },
      { href: "/guides/kanyou-shokubutsu-ryokin/", label: "観葉植物のサブスク・レンタル料金の考え方", desc: "金額が決まる5つの条件と、初期費用と月額の内訳。予算から選ぶ手順。" },
      { href: "/guides/houjin-office/", label: "オフィス向けの導入ガイド", desc: "数人から十数人の小規模オフィスでの置き場所、メンテナンスの有無、管理の負担。" },
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
              サービスの比較ではなく、<strong>使い方と判断のしかた</strong>をまとめたガイドです。
              始める前の迷い、届いた花の手入れ、行事の準備、観葉植物と法人利用まで、目的に合うものからお読みください。
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
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">サービスを比べる</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-5">
              読みたいガイドが決まったあとは、料金と送料を合わせた総額で各社を比較できます。
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
