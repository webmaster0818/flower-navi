import Link from "next/link";
import Header from "@/app/components/Header";
import { OSONAE, OSONAE_VERIFIED, VERDICT_LABEL } from "@/data/osonae";

const faqItems = [
  {
    q: "仏花やお供えの花は「花の定期便」で用意できますか？",
    a: "2通りあります。①お供え・仏花の専用商品を単発で注文する（bloomee・AND PLANTS・HitoHana・日本総合園芸などにお供え専用ラインがあります）。②日常の花の定期便で、落ち着いた白系の花を選んでお供えに整える。確実に白でそろえたい、立て札・弔事カードが必要、という場合は①の専用商品が向きます。日常的に仏壇の花を絶やしたくない場合は②の定期便が便利です。",
  },
  {
    q: "お供えの花を「白系」でそろえたい場合、どこがよいですか？",
    a: "本ページの一次確認では、bloomeeの「仏花・お供え」専用アレンジ（白を選択可）、HitoHanaのお供え専用ライン（四十九日まで白基調を案内）、日本総合園芸の白ユリ・白胡蝶蘭などが白系に対応しています。日常の定期便（medelu等）は落ち着いた色のコースはありますが、白限定で選べる専用コースは確認できませんでした。",
  },
  {
    q: "立て札やのし、弔事のメッセージカードは付けられますか？",
    a: "AND PLANTSは立て札・メッセージカードを無料同封、HitoHanaは立て札・カード無料で御供/御霊前/御仏前の書き分けを案内、bloomeeは弔事の定型カードを選択可（自由文カードは不可）です。のしの明記が確認できない社もあるため、必要な場合は各公式で最終確認してください。",
  },
  {
    q: "お盆やお彼岸に間に合わせるには、いつ頼めばいいですか？",
    a: "お盆・お彼岸・連休は配送が混み合います。お届け日を指定できる商品は彼岸入り・お盆前の日付を早めに指定し、日付指定ができないポスト投函型はスキップ機能で前倒しして、数日の余裕を見て手配します。時期は「お盆の花」「お彼岸の花」の各ガイドで日程と逆算の目安を解説しています。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "仏花・お供えの花を定期便/通販で用意する比較【2026年】8社を一次確認",
  description: "お供え・仏花の専用商品の有無、白系の可否、立て札・カード、価格、お届け日指定を8社公式一次確認で比較。",
  datePublished: "2026-07-24T00:00:00+09:00",
  dateModified: "2026-07-24T00:00:00+09:00",
  author: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com/about/" },
  publisher: { "@type": "Organization", name: "flowerデリ", url: "https://ohana-delivery.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ohana-delivery.com/compare/osonae/" },
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://ohana-delivery.com" },
    { "@type": "ListItem", position: 2, name: "比較", item: "https://ohana-delivery.com/compare/" },
    { "@type": "ListItem", position: 3, name: "仏花・お供えの花の比較", item: "https://ohana-delivery.com/compare/osonae/" },
  ],
};

const toneClass: Record<string, string> = {
  green: "bg-[#E8F1EA] text-[#3A6B49] border-[#B8D6C1]",
  amber: "bg-[#FBF3E2] text-[#8a6d2f] border-[#EAD9B0]",
  gray: "bg-[#F0EEE9] text-[#6b6b6b] border-[#DDD8CE]",
};

export default function OsonaePage() {
  const ready = OSONAE.filter((o) => o.verdict === "osonae-ready");
  const giftStrong = OSONAE.filter((o) => o.verdict === "gift-strong");
  const others = OSONAE.filter((o) => o.verdict === "not-dedicated" || o.verdict === "unsuitable");

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main>
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <nav className="text-xs text-[#8a8a8a] mb-4">
              <Link href="/" className="hover:underline">ホーム</Link> / <Link href="/compare/" className="hover:underline">比較</Link> / <span className="text-[#666]">仏花・お供えの花</span>
            </nav>
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">仏花・お供えの花の比較</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              仏花・お供えの花を定期便／通販で用意する比較<br className="hidden md:block" />
              8社の専用商品・白系・立て札を一次確認【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              お供え・仏花を「届く形」で用意したい方へ。各社の<strong>お供え専用商品の有無・白系の可否・立て札／弔事カード・価格・お届け日指定</strong>を、
              2026年7月に公式サイトで一次確認して比較します。確認できなかった項目は正直に「確認できず」と記載しています。
            </p>
          </div>
        </section>

        {/* 結論 */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">結論：目的で選ぶ</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・<strong>お供え専用商品を確実に・申し込みやすさ重視</strong>なら、当サイト提携の <Link href="/services/bloomee" className="text-[#4A7C59] underline">bloomee</Link>（仏花・お供え専用アレンジ／白を選択可／弔事カード可・<strong>4,060円〜</strong>）か <Link href="/services/and-plants" className="text-[#4A7C59] underline">AND PLANTS</Link>（お供え胡蝶蘭・立て札無料）。</li>
                <li>・<strong>お供えの品揃えの多さ重視</strong>なら <Link href="/services/hitohana" className="text-[#4A7C59] underline">HitoHana</Link> が胡蝶蘭〜スタンド花まで最も充実（※当サイトは現時点で未提携のため、内容は公式でご確認ください）。</li>
                <li>・<strong>日常的に仏壇の花を絶やしたくない</strong>なら、日常の切り花定期便で落ち着いた色を選ぶ方法も。ただし<strong>白限定コースや弔事カードは無い</strong>ため、専用用途には上記が向きます。</li>
                <li>・お供えの<Link href="/guides/butsudan/" className="text-[#4A7C59] underline">マナー・向く花</Link>、<Link href="/guides/obon/" className="text-[#4A7C59] underline">お盆</Link>・<Link href="/guides/ohigan/" className="text-[#4A7C59] underline">お彼岸</Link>の時期と逆算もあわせてご確認を。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 一次確認・比較表 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#4A7C59]">お供え・仏花対応の一次確認比較（8社）</h2>
            <p className="text-xs text-[#999] mb-6">※各社公式サイトを当サイトが確認した内容（確認日：{OSONAE_VERIFIED}）。料金・仕様は変動します。最新・正確な内容は各公式でご確認ください。◎=当サイト提携（申込みリンクあり）。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm border border-[#E8E0D5] bg-white rounded-xl overflow-hidden">
                <thead className="bg-[#F3EDE4]">
                  <tr>
                    <th className="text-left p-3 font-bold whitespace-nowrap">サービス</th>
                    <th className="text-left p-3 font-bold whitespace-nowrap">お供え専用</th>
                    <th className="text-left p-3 font-bold whitespace-nowrap">種別</th>
                    <th className="text-left p-3 font-bold whitespace-nowrap">白系</th>
                    <th className="text-left p-3 font-bold whitespace-nowrap">立て札・カード</th>
                    <th className="text-left p-3 font-bold whitespace-nowrap">最低価格（税込）</th>
                    <th className="text-left p-3 font-bold whitespace-nowrap">お届け日指定</th>
                  </tr>
                </thead>
                <tbody>
                  {OSONAE.map((o) => (
                    <tr key={o.id} className="border-t border-[#EADFD3] align-top">
                      <td className="p-3 font-bold whitespace-nowrap">
                        {o.name}
                        {o.affiliated && <span className="ml-1 text-[#4A7C59]">◎</span>}
                      </td>
                      <td className="p-3">{o.dedicated}</td>
                      <td className="p-3">{o.type}</td>
                      <td className="p-3">{o.color}</td>
                      <td className="p-3">{o.card}</td>
                      <td className="p-3">{o.priceFrom}</td>
                      <td className="p-3">{o.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 提携・お供え対応 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">お供え専用商品があり、申し込みやすい（当サイト提携）</h2>
            <div className="grid gap-4">
              {ready.map((o) => (
                <div key={o.id} className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold text-[#333]">{o.name}</p>
                    <span className={`text-xs px-2 py-1 rounded border ${toneClass[VERDICT_LABEL[o.verdict].tone]}`}>{VERDICT_LABEL[o.verdict].label}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">{o.dedicatedNote}</p>
                  <p className="mt-2 text-sm text-[#555]"><strong>白系：</strong>{o.color}／<strong>立て札・カード：</strong>{o.card}</p>
                  <p className="mt-1 text-sm text-[#555]"><strong>価格：</strong>{o.priceFrom}</p>
                  <Link href={o.servicePath} className="mt-3 inline-block bg-[#4A7C59] text-white font-bold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition">{o.name.split("（")[0]}の詳細・最新を見る</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 品揃え充実・未提携 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-3 pb-3 border-b-2 border-[#4A7C59]">お供え専門の品揃えが充実（参考・当サイト未提携）</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              以下は<strong>お供え・弔事の専用ラインが特に充実</strong>していますが、当サイトは現時点で申込みの提携をしていないため、申込みリンクは用意していません。品揃え・マナー対応を重視する場合の選択肢として、公式でご確認ください（当サイト内の紹介ページにもまとめています）。
            </p>
            <div className="grid gap-4">
              {giftStrong.map((o) => (
                <div key={o.id} className="bg-white rounded-xl border border-[#E8E0D5] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold text-[#333]">{o.name}</p>
                    <span className={`text-xs px-2 py-1 rounded border ${toneClass[VERDICT_LABEL[o.verdict].tone]}`}>{VERDICT_LABEL[o.verdict].label}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">{o.dedicatedNote}</p>
                  <p className="mt-2 text-sm text-[#555]"><strong>白系：</strong>{o.color}／<strong>価格：</strong>{o.priceFrom}</p>
                  <Link href={o.servicePath} className="mt-2 inline-block text-sm text-[#4A7C59] underline">{o.name.split("（")[0]}の紹介ページを見る</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 日常定期便・不向き */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-3 pb-3 border-b-2 border-[#4A7C59]">日常の切り花定期便（お供え専用商品はなし）</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              以下は<strong>日常の花の定期便</strong>としては魅力的ですが、お供え・仏花の専用商品はありません。落ち着いた色を選んでお供えに流用することはできますが、白限定・立て札・弔事カードには対応していない点にご注意ください（正直な評価として掲載しています）。
            </p>
            <div className="grid gap-4">
              {others.map((o) => (
                <div key={o.id} className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-bold text-[#333]">{o.name}{o.affiliated && <span className="ml-1 text-[#4A7C59]">◎</span>}</p>
                    <span className={`text-xs px-2 py-1 rounded border ${toneClass[VERDICT_LABEL[o.verdict].tone]}`}>{VERDICT_LABEL[o.verdict].label}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">{o.dedicatedNote}</p>
                  <Link href={o.servicePath} className="mt-2 inline-block text-sm text-[#4A7C59] underline">{o.name.split("（")[0]}の詳細を見る</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 関連 */}
        <section className="py-12 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-lg md:text-xl font-bold text-[#333] mb-4">お供えの花の関連ガイド</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li><Link href="/guides/butsudan/" className="text-[#4A7C59] underline">仏壇・仏花に向く花と選び方</Link></li>
              <li><Link href="/guides/obon/" className="text-[#4A7C59] underline">お盆・新盆（初盆）の花の用意</Link></li>
              <li><Link href="/guides/ohigan/" className="text-[#4A7C59] underline">お彼岸の花・2026年の日程と逆算</Link></li>
              <li><Link href="/compare/ryokin/" className="text-[#4A7C59] underline">花のサブスク料金を総額で比較</Link></li>
            </ul>
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
            <p className="mt-8 text-xs text-[#999] leading-relaxed">
              当サイトはアフィリエイトプログラムに参加しており、「◎」の付いた提携サービスのリンク先で購入等が行われた場合、紹介手数料を受け取ることがあります。掲載内容は{OSONAE_VERIFIED}時点で各公式サイトを確認したものです。宗派・地域によりお供えの慣習は異なります。最新・正確な料金・仕様・在庫は各公式サイトでご確認ください。
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
