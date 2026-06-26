import Header from "@/app/components/Header";

const faqs = [
  { q: "2026年のお盆はいつですか？", a: "全国的に多い「月遅れ盆」では2026年は8月13日（木）〜16日（日）です。地域によっては7月13〜16日に行う「七月盆（新盆）」のところもあります。お住まいや帰省先の慣習に合わせてご準備ください。" },
  { q: "新盆（初盆）とは何ですか？", a: "新盆（にいぼん・あらぼん／初盆）は、故人が亡くなって四十九日の忌明け後に初めて迎えるお盆のことです。通常のお盆より丁寧に供養するのが一般的で、お供えの花も白を基調に整えることが多いです。" },
  { q: "お盆のお供えに向かない花はありますか？", a: "バラなどトゲのある花、彼岸花やスズランなど毒のある花、香りが強すぎる花は避けるのが一般的です。新盆は特に白を基調に、菊・トルコギキョウ・スターチス・カーネーションなど日持ちする花が向いています。故人が好きだった花を加える場合はトゲを取り除いて供えます。" },
  { q: "花のサブスクの花をお盆のお供えに使えますか？", a: "通常の定期便はお盆専用の仏花アレンジではありませんが、届いた花から落ち着いた色合いの花を選び、茎の長さを整えてお供えに使えます。medeluのNATURAL系コースなど落ち着いた色のコースは仏花にアレンジしやすいです。専用の仏花が必要な場合は、定期便に加えて仏花セットを別途用意するのが確実です。" },
  { q: "お盆の時期に合わせて届けてもらえますか？", a: "多くのサービスは「毎週」「隔週」「月1回」から配送頻度を選べますが、特定日への日付指定は限られます。medeluやbloomeeのスキップ機能を使って配送タイミングを調整し、お盆前に新しい花が届くようにするのが現実的です。お盆は配送が混み合うため早めの調整がおすすめです。" },
  { q: "夏場のお供えの花を長持ちさせるには？", a: "夏は花が傷みやすいため、毎日の水替え、切り花延命剤の使用、エアコンの風が直接当たらない涼しい場所への設置が有効です。菊・スターチスなど暑さに比較的強い花を選ぶのもポイント。定期便なら定期的に新しい花が届くため、夏場でも新鮮な花を保てます。" },
];

export default function ObonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"お盆・新盆の花を花のサブスクで用意する方法\",\"item\":\"https://ohana-delivery.com/guides/obon/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"お盆・新盆（初盆）の花を花のサブスクで用意する方法\",\"description\":\"お盆・新盆のお供えの花を花のサブスクで用意する方法を解説\",\"datePublished\":\"2026-06-23T00:00:00+09:00\",\"dateModified\":\"2026-06-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/obon/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="min-h-screen bg-[#FAF8F5] text-[#333]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:underline">ホーム</a> / <a href="/guides/" className="hover:underline">ガイド</a> / <span className="text-gray-700">お盆・新盆の花</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">お盆・新盆（初盆）の花を花のサブスクで用意する方法【2026年】</h1>
          <p className="text-sm text-gray-600 mb-6">最終更新日：2026年6月23日 ／ flowerデリ編集部</p>

          <div className="bg-white rounded-2xl border border-[#EADFD3] p-5 mb-8">
            <p className="font-bold text-[#7a5] mb-1">結論</p>
            <p className="text-sm leading-relaxed">2026年のお盆は<strong>8月13〜16日（月遅れ盆）</strong>。お供えの花は<strong>白基調・菊やトルコギキョウなど日持ちする花</strong>が向き、トゲ・毒・強い香りの花は避けます。花のサブスクは専用の仏花ではありませんが、落ち着いた色合いのコース（medeluのNATURAL系など）を選び、<strong>スキップ機能で配送をお盆前に調整</strong>すれば、新鮮なお供えの花を用意できます。新盆（初盆）は特に丁寧に整えましょう。</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">2026年のお盆・新盆はいつ？</h2>
            <p className="text-sm leading-relaxed text-gray-700">全国的に多い「月遅れ盆」では2026年は<strong>8月13日（木）〜16日（日）</strong>です。地域により7月13〜16日の「七月盆」もあります。<strong>新盆（初盆）</strong>は、故人が四十九日の忌明け後に初めて迎えるお盆で、通常より丁寧に供養し、お供えの花も白を基調に整えるのが一般的です。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">お盆のお供えに向く花・避ける花</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl border border-[#EADFD3] p-4">
                <p className="font-bold text-[#7a5] mb-2">向く花</p>
                <p className="text-gray-700 leading-relaxed">菊、トルコギキョウ、スターチス、カーネーション、リンドウなど。白を基調に、日持ちする花が向きます。新盆は特に白で整えるのが一般的です。</p>
              </div>
              <div className="bg-white rounded-xl border border-[#EADFD3] p-4">
                <p className="font-bold text-rose-700 mb-2">避ける花</p>
                <p className="text-gray-700 leading-relaxed">バラなどトゲのある花、彼岸花・スズランなど毒のある花、香りが強すぎる花は避けるのが一般的です（宗派・地域により異なります）。</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">花のサブスクをお盆のお供えに活用する手順</h2>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>1. 落ち着いた色のコースを選ぶ</strong>：medeluのNATURAL系など白・グリーン基調のコースはお供えにアレンジしやすいです。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>2. スキップ機能で配送を調整</strong>：medeluやbloomeeのスキップ機能で、お盆前に新しい花が届くようタイミングを合わせます（お盆は配送が混むため早めに）。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>3. 届いた花からお供え用を整える</strong>：向く花を選び、仏壇の花立に合わせて茎を切りそろえます。専用仏花が必要なら定期便に加えて別途用意を。</li>
            </ol>
            <p className="text-sm mt-4"><a href="/guides/butsudan/" className="text-[#7a5] underline">→ 仏壇・仏花の選び方をもっと詳しく</a></p>
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
              <li><a href="/guides/flower-care/" className="text-[#7a5] underline">花を長持ちさせるお手入れ方法</a></li>
              <li><a href="/compare/cheap/" className="text-[#7a5] underline">安い花のサブスク比較ランキング</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-[#333] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
              <p className="text-xs text-gray-500 mt-2">掲載情報は2026年6月23日時点のものです。最新の料金・サービス内容・配送日程は各公式サイトでご確認ください。お盆の時期・慣習は地域・宗派により異なります。</p>
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
