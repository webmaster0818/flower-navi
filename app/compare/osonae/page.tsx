import Link from "next/link";
import Header from "@/app/components/Header";
import { OSONAE, OSONAE_VERIFIED, VERDICT_LABEL } from "@/data/osonae";

const faqItems = [
  {
    q: "仏花やお供えの花は「花の定期便」で用意できますか？",
    a: "方法は2通りあります。1つ目は、お供え・仏花の専用商品を単発で注文する方法です（bloomee・AND PLANTS・HitoHana・日本総合園芸などにお供え専用の商品があります）。2つ目は、日常の花の定期便で落ち着いた白系の花を選び、お供え用に整える方法です。白で確実にそろえたい場合や、立て札・弔事カードが必要な場合は、1つ目の専用商品が適しています。仏壇の花を日常的に絶やさないようにしたい場合は、2つ目の定期便が便利です。",
  },
  {
    q: "お供えの花を「白系」でそろえたい場合、どこがよいですか？",
    a: "当サイトの公式サイト確認では、bloomeeの「仏花・お供え」専用アレンジ（白を選択可）、HitoHanaのお供え専用ライン（四十九日まで白基調を案内）、日本総合園芸の白ユリ・白胡蝶蘭などが白系に対応しています。日常の定期便（medelu等）には落ち着いた色のコースがありますが、白に限定して選べる専用コースは確認できませんでした。",
  },
  {
    q: "立て札やのし、弔事のメッセージカードは付けられますか？",
    a: "AND PLANTSは立て札・メッセージカードを無料で同封しています。HitoHanaは立て札・カードが無料で、御供・御霊前・御仏前の書き分けを案内しています。bloomeeは弔事の定型カードを選択できます（自由文のカードは選択できません）。のしについて明記が確認できない会社もあるため、必要な場合は各社の公式サイトにて最終確認をお願いします。",
  },
  {
    q: "お盆やお彼岸に間に合わせるには、いつ注文すればよいですか？",
    a: "お盆・お彼岸・連休の時期は配送が混み合います。お届け日を指定できる商品は、彼岸入りやお盆前の日付を早めに指定してください。日付指定ができないポスト投函型は、スキップ機能でお届けを前倒しし、数日の余裕をもって手配することをおすすめします。時期については、お盆の花・お彼岸の花の各ガイドで日程と手配時期の目安を解説しています。",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "仏花・お供えの花を定期便/通販で用意する比較【2026年】8社の公式情報を確認",
  description: "お供え・仏花の専用商品の有無、白系の可否、立て札・カード、価格、お届け日指定を、8社の公式サイトで確認して比較しています。",
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
              8社の専用商品・白系・立て札を公式サイトで確認【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              当サイトでは、お供え・仏花を配送で用意したい方に向けて、各社の<strong>お供え専用商品の有無・白系の可否・立て札／弔事カード・価格・お届け日指定</strong>を、
              2026年7月に公式サイトで確認して比較しています。確認できなかった項目は「確認できず」と記載しています。
            </p>
          </div>
        </section>

        {/* 要点 */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#4A7C59] rounded-2xl p-6">
              <p className="font-bold text-[#4A7C59] mb-3">目的別に見たお供えの花の選び方</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li>・<strong>お供え専用商品を確実に用意したい場合や、申し込みやすさを重視する場合</strong>は、当サイト提携の <Link href="/services/bloomee" className="text-[#4A7C59] underline">bloomee</Link>（仏花・お供え専用アレンジ／白を選択可／弔事カード可・<strong>4,060円〜</strong>）または <Link href="/services/and-plants" className="text-[#4A7C59] underline">AND PLANTS</Link>（お供え胡蝶蘭・立て札無料）が適しています。</li>
                <li>・<strong>お供えの品揃えを重視する場合</strong>は <Link href="/services/hitohana" className="text-[#4A7C59] underline">HitoHana</Link> が胡蝶蘭からスタンド花まで最も充実しています（※当サイトは現時点で未提携のため、内容は公式サイトにてご確認ください）。</li>
                <li>・<strong>仏壇の花を日常的に絶やさないようにしたい場合</strong>は、日常の切り花定期便で落ち着いた色を選ぶ方法もあります。ただし<strong>白限定のコースや弔事カードはない</strong>ため、お供え専用の用途には上記のサービスが適しています。</li>
                <li>・お供えの<Link href="/guides/butsudan/" className="text-[#4A7C59] underline">マナー・向く花</Link>、<Link href="/guides/obon/" className="text-[#4A7C59] underline">お盆</Link>・<Link href="/guides/ohigan/" className="text-[#4A7C59] underline">お彼岸</Link>の時期と手配時期の目安もあわせてご確認ください。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 安いプランの整理 */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#4A7C59]">仏花の定期便で安いプランの比較</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-5">
              当サイトが公式サイトを確認した範囲（{OSONAE_VERIFIED}）では、8社に仏花専用の定期便は確認できませんでした（お供え専用商品はいずれも単発のギフトです）。そのため、<strong>定期的に費用を抑えて</strong>仏壇の花を用意する場合は、日常の切り花定期便で落ち着いた色を選び、仏花として整える方法が最も安価です。確認値にもとづく安い順は次のとおりです。
            </p>
            <div className="grid gap-4">
              <div className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5">
                <p className="font-bold text-[#333] text-sm">1. medelu（メデル）｜定期便 月748円〜（税込・送料込）</p>
                <p className="mt-2 text-sm text-[#666] leading-relaxed">日常の定期便として、今回確認した範囲で最も安いサービスです。お供え専用商品ではありませんが、NATURAL系など落ち着いた色のコースを仏花として利用できます。<Link href="/services/medelu" className="text-[#4A7C59] underline">medeluの詳細を見る</Link></p>
              </div>
              <div className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5">
                <p className="font-bold text-[#333] text-sm">2. hanameku（ハナメク）｜定期便 月1,210円〜（税込・送料込）</p>
                <p className="mt-2 text-sm text-[#666] leading-relaxed">価格は安いものの、色の指定とメッセージカードに対応していないため、当サイトではお供え・弔事の用途には適さないと評価しています（公式FAQ確認）。</p>
              </div>
              <div className="bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] p-5">
                <p className="font-bold text-[#333] text-sm">3. お供え専用商品を単発で頼む場合｜3,960円〜</p>
                <p className="mt-2 text-sm text-[#666] leading-relaxed">確認した範囲での最安は、日本総合園芸の白ユリ花束3,960円〜（税込・当サイト未提携）です。申し込みやすさを重視する場合は、当サイト提携の<Link href="/services/bloomee" className="text-[#4A7C59] underline">bloomee</Link>の仏花・お供え専用アレンジ4,060円〜（税込・多くが送料無料・白を選択可）です。</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#999] leading-relaxed">
              ※タスハナ（＋actプラン660円〜＋送料330円）はさらに安価ですが、ロスフラワーのおまかせ定期便で、色指定・日時指定・ラッピングに対応していないため、お供えの用途には適していません。価格はいずれも{OSONAE_VERIFIED}時点の公式確認値です。
            </p>
            <p className="mt-3 text-sm text-[#666] leading-relaxed">
              仏花に向く花・避ける花やお手入れの基本は、<Link href="/guides/butsudan/" className="text-[#4A7C59] underline">仏壇に供える仏花の選び方・お手入れガイド</Link>で詳しく解説しています。
            </p>
          </div>
        </section>

        {/* 公式確認・比較表 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#4A7C59]">お供え・仏花への対応状況の比較（8社）</h2>
            <p className="text-xs text-[#999] mb-6">※各社の公式サイトを当サイトが確認した内容です（確認日：{OSONAE_VERIFIED}）。料金・仕様は変動します。最新かつ正確な内容は、各社の公式サイトにてご確認ください。◎は当サイトの提携サービス（お申し込みリンクあり）を示します。</p>
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">お供え専用商品があり、申し込みやすいサービス（当サイト提携）</h2>
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
                  <Link href={o.servicePath} className="mt-3 inline-block bg-[#4A7C59] text-white font-bold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition">{o.name.split("（")[0]}の詳細・最新情報を見る</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 品揃え充実・未提携 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-3 pb-3 border-b-2 border-[#4A7C59]">お供え専門の品揃えが充実したサービス（参考・当サイト未提携）</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              以下のサービスは<strong>お供え・弔事の専用商品が特に充実</strong>していますが、当サイトは現時点で提携していないため、お申し込みリンクは設けていません。品揃えやマナーへの対応を重視する場合の選択肢として、公式サイトにてご確認ください（当サイト内の紹介ページにも情報を掲載しています）。
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-3 pb-3 border-b-2 border-[#4A7C59]">日常の切り花定期便（お供え専用商品はありません）</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              以下のサービスは<strong>日常の花の定期便</strong>としては優れていますが、お供え・仏花の専用商品はありません。落ち着いた色を選んでお供えに利用することはできますが、白限定・立て札・弔事カードには対応していない点にご注意ください（当サイトの評価として掲載しています）。
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
              <li><Link href="/guides/ohigan/" className="text-[#4A7C59] underline">お彼岸の花・2026年の日程と手配時期</Link></li>
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
              当サイトはアフィリエイトプログラムに参加しており、「◎」の付いた提携サービスのリンク先で購入等が行われた場合、紹介手数料を受け取ることがあります。掲載内容は{OSONAE_VERIFIED}時点で各公式サイトを確認したものです。宗派・地域によりお供えの慣習は異なります。最新かつ正確な料金・仕様・在庫は、各公式サイトにてご確認ください。
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
