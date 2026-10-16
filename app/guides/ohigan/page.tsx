import Header from "@/app/components/Header";

const faqs = [
  { q: "2026年の秋のお彼岸はいつですか？", a: "2026年の秋彼岸は9月20日（日）から9月26日（土）までの7日間です。中日（ちゅうにち）は秋分の日にあたる9月23日（水・祝）で、彼岸入りが9月20日、彼岸明けが9月26日です。お墓参りやお供えは彼岸の期間中に行うのが一般的で、特に中日に行う方が多くなっています。" },
  { q: "2026年の春のお彼岸はいつでしたか？", a: "2026年の春彼岸は3月17日（火）から3月23日（月）までで、中日は春分の日の3月20日（金）でした。春・秋いずれも「春分の日・秋分の日」を中日として前後3日ずつ、合わせて7日間がお彼岸です。祝日の日付は暦要項により確定します。" },
  { q: "お彼岸のお供えに向く花・避ける花はありますか？", a: "白を基調に、菊・トルコギキョウ・カーネーション・スターチス・リンドウなど日持ちする花が適しています。故人が好きだった花を加えても問題ありません。一方、バラなどトゲのある花、彼岸花やスズランなど毒のある花、香りが強すぎる花は避けるのが一般的です（宗派・地域により考え方は異なります）。" },
  { q: "花のサブスクの花をお彼岸のお供えに使えますか？", a: "通常の定期便はお彼岸専用の仏花アレンジではありませんが、届いた花から落ち着いた色合いの花を選び、茎の長さを整えることでお供えに使えます。白・グリーン基調の落ち着いたコースを選ぶと、アレンジしやすくなります。白系で確実にそろえたい場合や、のし・立て札が必要な弔事では、定期便とは別に専用の仏花・お供え花を用意することをおすすめします。" },
  { q: "お彼岸に間に合うように花を届けてもらうには、いつ手配すればよいですか？", a: "配送方式によって考え方が異なります。ポスト投函型（日時指定ができないプラン）は、彼岸入り（9月20日）より前に届く配送回に合わせ、スキップ機能でお届けを前倒しする方法が現実的です。お届け日を指定できる宅配プランの場合は、彼岸入り前後の日付を指定します。いずれの場合も、お彼岸・連休の時期は配送が混み合うため、1週間ほど前までに手配・調整を済ませることをおすすめします。締切は各公式サイトにてご確認ください。" },
  { q: "お供えの花を長持ちさせる方法はありますか？", a: "毎日の水替え、切り花延命剤の使用、直射日光やエアコンの風が直接当たらない涼しい場所への設置が有効です。菊やスターチスなど日持ちのよい花を選ぶことも有効です。定期便であれば定期的に新しい花が届くため、彼岸の前後も新しい花を保つことができます。" },
];

export default function OhiganPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"お彼岸の花を用意する時期｜2026年秋彼岸の日程とお供えの花\",\"item\":\"https://ohana-delivery.com/guides/ohigan/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"お彼岸の花を用意する時期｜2026年秋彼岸の日程とお供えの花・注文時期の目安\",\"description\":\"2026年秋彼岸の日程、お供えに向く花・避ける花、花のサブスクでの用意の方法、配送方式ごとの注文時期の目安を解説しています。\",\"datePublished\":\"2026-07-24T00:00:00+09:00\",\"dateModified\":\"2026-07-24T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/ohigan/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="min-h-screen bg-[#FAF8F5] text-[#333]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:underline">ホーム</a> / <a href="/guides/" className="hover:underline">ガイド</a> / <span className="text-gray-700">お彼岸の花</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">お彼岸の花を用意する時期｜2026年秋彼岸の日程とお供えの花・注文時期の目安</h1>
          <p className="text-sm text-gray-600 mb-6">最終更新日：2026年7月24日 ／ flowerデリ編集部</p>

          <div className="bg-white rounded-2xl border border-[#EADFD3] p-5 mb-8">
            <p className="font-bold text-[#7a5] mb-1">2026年の秋彼岸の日程とお供えの花の選び方</p>
            <p className="text-sm leading-relaxed">2026年の秋彼岸は<strong>9月20日（日）〜26日（土）</strong>、中日は秋分の日の<strong>9月23日（水・祝）</strong>です。お供えの花は<strong>白を基調とし、菊やトルコギキョウなど日持ちする花</strong>が適しており、トゲ・毒・強い香りのある花は避けます。花のサブスクは専用の仏花ではありませんが、落ち着いた色合いのコースを選び、<strong>配送方式に合わせて注文・スキップの時期を調整</strong>することで、お彼岸に新鮮な花を用意できます。お彼岸・連休の時期は配送が混み合うため、<strong>1週間前までの手配</strong>をおすすめします。</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">2026年のお彼岸の日程</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">お彼岸は「春分の日・秋分の日」を<strong>中日（ちゅうにち）</strong>として、その前後3日ずつを合わせた<strong>7日間</strong>です。彼岸入り・中日・彼岸明けは次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#EADFD3] bg-white rounded-xl overflow-hidden">
                <thead className="bg-[#F3EDE4]">
                  <tr>
                    <th className="text-left p-3 font-bold">2026年</th>
                    <th className="text-left p-3 font-bold">彼岸入り</th>
                    <th className="text-left p-3 font-bold">中日（祝日）</th>
                    <th className="text-left p-3 font-bold">彼岸明け</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#EADFD3]">
                    <td className="p-3 font-bold">春彼岸</td>
                    <td className="p-3">3月17日（火）</td>
                    <td className="p-3">3月20日（金）春分の日</td>
                    <td className="p-3">3月23日（月）</td>
                  </tr>
                  <tr className="border-t border-[#EADFD3] bg-[#FCFAF7]">
                    <td className="p-3 font-bold">秋彼岸</td>
                    <td className="p-3">9月20日（日）</td>
                    <td className="p-3">9月23日（水）秋分の日</td>
                    <td className="p-3">9月26日（土）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">※祝日（春分の日・秋分の日）の日付は暦要項により確定します。お墓参り・お供えは彼岸の期間中、特に中日に行う方が多くなっています。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">お彼岸のお供えに向く花・避ける花</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl border border-[#EADFD3] p-4">
                <p className="font-bold text-[#7a5] mb-2">向く花</p>
                <p className="text-gray-700 leading-relaxed">菊、トルコギキョウ、カーネーション、スターチス、リンドウなどです。白を基調に、日持ちする花が適しています。故人が好きだった花を加えても問題ありません。</p>
              </div>
              <div className="bg-white rounded-xl border border-[#EADFD3] p-4">
                <p className="font-bold text-rose-700 mb-2">避ける花</p>
                <p className="text-gray-700 leading-relaxed">バラなどトゲのある花、彼岸花・スズランなど毒のある花、香りが強すぎる花は避けるのが一般的です（宗派・地域により異なります）。</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">お彼岸に間に合わせるための注文時期</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">お彼岸の時期は配送が混み合うため、<strong>彼岸入り（9月20日）に間に合うよう逆算</strong>して手配します。花のサブスクは配送方式によって日付指定の可否が異なるため、方式ごとに手配の方法が異なります。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#EADFD3] bg-white rounded-xl overflow-hidden">
                <thead className="bg-[#F3EDE4]">
                  <tr>
                    <th className="text-left p-3 font-bold">配送方式</th>
                    <th className="text-left p-3 font-bold">日付指定</th>
                    <th className="text-left p-3 font-bold">間に合わせる方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#EADFD3]">
                    <td className="p-3 font-bold">ポスト投函型<br /><span className="font-normal text-xs text-gray-500">（多くの最安プラン）</span></td>
                    <td className="p-3">不可のことが多い</td>
                    <td className="p-3">彼岸入り前に届く配送回に合わせ、スキップ機能でお届けを前倒しします。到着日を指定できないため、<strong>数日の余裕</strong>をもって手配します。</td>
                  </tr>
                  <tr className="border-t border-[#EADFD3] bg-[#FCFAF7]">
                    <td className="p-3 font-bold">宅配（手渡し）型</td>
                    <td className="p-3">可のことが多い</td>
                    <td className="p-3">お届け日を<strong>彼岸入り前後で指定</strong>します。連休で希望日が埋まる前に、早めに確定させます。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">※配送方式・日付指定の可否・注文締切はサービス・プランごとに異なります。正確な締切は各公式サイトにてご確認ください。当サイトの<a href="/compare/ryokin/" className="text-[#7a5] underline">料金比較</a>や<a href="/compare/post-delivery/" className="text-[#7a5] underline">ポスト投函の比較</a>で配送方式の違いを確認できます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">花のサブスクをお彼岸のお供えに活用する手順</h2>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>1. 落ち着いた色のコースを選ぶ</strong>：白・グリーン基調の落ち着いたコースは、お供え用にアレンジしやすくなります。白で確実にそろえたい弔事では、専用の仏花もご検討ください。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>2. 配送方式に合わせて逆算する</strong>：日付指定ができない方式はスキップ機能で前倒しし、指定できる方式は彼岸入り前後の日付を指定します。連休前に確定させてください。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>3. 届いた花からお供え用を整える</strong>：お供えに向く花を選び、仏壇の花立に合わせて茎を切りそろえます。のし・立て札が必要な弔事では、別途専用の花をご用意ください。</li>
            </ol>
            <p className="text-sm mt-4"><a href="/guides/butsudan/" className="text-[#7a5] underline">→ 仏壇・仏花の選び方の詳細</a></p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-[#cDB] pl-3">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white rounded-xl border border-[#EADFD3] p-4">
                  <summary className="font-bold cursor-pointer text-sm">{f.q}</summary>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-4 bg-white rounded-2xl border border-[#EADFD3] p-5">
            <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/guides/butsudan/" className="text-[#7a5] underline">仏壇・仏花に向く花のサブスクと選び方</a></li>
              <li><a href="/guides/obon/" className="text-[#7a5] underline">お盆・新盆（初盆）の花を花のサブスクで用意する方法</a></li>
              <li><a href="/guides/flower-care/" className="text-[#7a5] underline">花を長持ちさせるお手入れ方法</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-[#333] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
              <p className="text-xs text-gray-500 mt-2">掲載情報は2026年7月24日時点のものです。最新の料金・サービス内容・配送日程・注文締切は、各公式サイトにてご確認ください。お彼岸の時期・慣習は地域・宗派により異なります。</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
                <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
                <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
                <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
              </div>
              <p className="text-xs text-gray-500 mt-4">&copy; 2026 flowerデリ All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
