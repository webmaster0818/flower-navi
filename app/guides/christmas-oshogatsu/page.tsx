import Header from "@/app/components/Header";

const faqs = [
  { q: "クリスマスに間に合うように花のサブスクを始められますか？", a: "配送日を指定できるサービス（HitoHana など）ならクリスマス当日に合わせて届けられます。bloomeeはギフトチケットを渡す形になります。ただし12月は配送が最も混み合う時期のため、遅くとも1〜2週間前には申し込んでおくと安心です。" },
  { q: "お正月飾り・しめ飾りの代わりに花を飾ってもいいですか？", a: "はい。近年はしめ飾りや門松の代わりに、松・千両・菊・葉牡丹などを使った『お正月アレンジ』を飾る家庭も増えています。花のサブスクでも、12月下旬〜1月上旬に正月らしい花材が届くサービスがあり、手軽に新年の華やぎを演出できます。" },
  { q: "冬は花が長持ちしますか？", a: "はい。冬は気温が低く、夏に比べて切り花が長持ちしやすい季節です。暖房の風が直接当たる場所を避け、こまめに水を替えれば、より長く楽しめます。ボリュームのある花が届くプランは、クリスマス〜お正月の飾りに向いています。" },
  { q: "ギフトとして贈る場合の予算はどのくらいですか？", a: "花のサブスクのギフトでは1回あたり3,000〜5,000円が人気の価格帯です。クリスマスとお正月をまたいで2〜3回分をまとめて贈ると、年末年始を通して花を楽しんでもらえます。" },
  { q: "気に入らなかった場合は解約できますか？", a: "回数縛りのないサービス（medelu・AND PLANTS・HitoHana など）ならいつでも解約できます。bloomeeのギフトチケットはチケット分の回数のみで自動更新されないため、贈られた側が気軽に試せます。" },
];

export default function ChristmasOshogatsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"クリスマス・お正月に飾る花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/christmas-oshogatsu/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ\",\"description\":\"クリスマス・お正月に飾る花のサブスクのおすすめと選び方を解説\",\"datePublished\":\"2026-07-10T00:00:00+09:00\",\"dateModified\":\"2026-07-10T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/christmas-oshogatsu/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="min-h-screen bg-[#FAF8F5] text-[#333]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:underline">ホーム</a> / <a href="/guides/" className="hover:underline">ガイド</a> / <span className="text-gray-700">クリスマス・お正月に飾る花のサブスク</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】</h1>
          <p className="text-sm text-gray-600 mb-6">最終更新日：2026年7月10日 ／ flowerデリ編集部</p>

          <div className="bg-white rounded-2xl border border-[#EADFD3] p-5 mb-8">
            <p className="font-bold text-[#7a5] mb-1">結論</p>
            <p className="text-sm leading-relaxed">冬は切り花が長持ちしやすく、<strong>クリスマス〜お正月は花を飾るのに最適な季節</strong>です。毎回新しい花が届く<strong>花のサブスク</strong>なら、クリスマスの華やかなアレンジから、松・千両・葉牡丹などの<strong>お正月アレンジ（しめ飾りの代わり）</strong>まで、年末年始を通して手軽に楽しめます。12月は配送が最も混むため、<strong>早めの申し込み</strong>が安心。ギフトチケットのbloomee、日付指定・メッセージカードのHitoHana、ギフト対応のAND PLANTSが向いています。</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">クリスマス・お正月に花のサブスクが向く理由</h2>
            <p className="text-sm leading-relaxed text-gray-700">冬は気温が低く、切り花が夏より長持ちします。クリスマスは赤・白・グリーンの華やかなアレンジ、年末年始は松・千両・菊・葉牡丹などの和の花材で、新年の華やぎを演出できます。しめ飾りや門松の代わりに『お正月アレンジ』を飾る家庭も増えており、花のサブスクなら手間なく季節の花材が届きます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">クリスマス・お正月に花のサブスクを使う3つのメリット</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>① 冬は花が長持ち</strong>：気温が低く切り花が傷みにくいため、クリスマス〜お正月まで長く飾れます。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>② 季節の花材が手間なく届く</strong>：クリスマスのアレンジも、松・千両などのお正月アレンジも、選ばずに旬の花材が届きます。しめ飾りの代わりにも。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>③ ギフトにも自宅用にも</strong>：ギフトチケットや日付指定で贈り物にでき、自宅の年末年始の彩りにも使えます。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">クリスマス・お正月に向いているサービス</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">ボリューム・ギフトのしやすさ（日付指定・メッセージカード・チケット）で選ぶのがおすすめです。各サービスの料金・縛り・配送の詳細は比較ページでご確認ください。12月は配送が混むため早めの申し込みを。</p>
            <ul className="space-y-2 text-sm">
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><a href="/services/bloomee/" className="text-[#7a5] font-bold underline">bloomee（ブルーミー）</a>：ギフトチケットで贈れ、受け取った方が開始日を選べる</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><a href="/services/hitohana/" className="text-[#7a5] font-bold underline">HitoHana（ヒトハナ）</a>：配送日の指定・メッセージカードに対応。クリスマス当日指定も</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><a href="/services/and-plants/" className="text-[#7a5] font-bold underline">AND PLANTS</a>：ボリューム・ギフト対応に強み</li>
            </ul>
            <p className="text-sm mt-4"><a href="/compare/cheap/" className="text-[#7a5] underline">→ 料金で選ぶなら：安い花のサブスク比較</a></p>
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
              <li><a href="/guides/present/" className="text-[#7a5] underline">花のサブスクをプレゼントに贈る方法</a></li>
              <li><a href="/guides/keirou-no-hi/" className="text-[#7a5] underline">敬老の日に贈る花のサブスクおすすめ</a></li>
              <li><a href="/guides/seasonal-flowers/" className="text-[#7a5] underline">季節の花で選ぶ花のサブスク</a></li>
              <li><a href="/compare/cheap/" className="text-[#7a5] underline">安い花のサブスク比較ランキング</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-[#333] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
              <p className="text-xs text-gray-500 mt-2">掲載情報は2026年7月10日時点のものです。最新の料金・サービス内容・配送日程は各公式サイトでご確認ください。</p>
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
