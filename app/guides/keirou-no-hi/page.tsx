import Header from "@/app/components/Header";

const faqs = [
  { q: "花のサブスクを敬老の日ギフトとして贈れますか？", a: "はい、多くのサービスでギフト対応が可能です。bloomeeはギフトチケットを購入して贈ることができ、受け取った方が好きなタイミングで定期便を始められます。HitoHanaはメッセージカード付きで届け先と配送日を指定でき、AND PLANTSもギフト対応に力を入れています。" },
  { q: "敬老の日当日に届くように指定できますか？", a: "サービスによります。HitoHanaは配送日の日付指定ができるため敬老の日当日に届けられます。bloomeeのギフトチケットは受け取った方が開始日を設定する形なので、チケット自体を敬老の日に渡す使い方になります。配送が混み合う時期のため、日付指定する場合は早めの申し込みが安心です。" },
  { q: "離れて暮らす祖父母にも贈れますか？", a: "はい。花のサブスクは配送先を指定できるため、遠方の祖父母にも届けられます。日本全国対応（一部離島を除く）のサービスがほとんどです。事前にお届け先の住所を確認しておきましょう。" },
  { q: "予算はどのくらいが目安ですか？", a: "花のサブスクのギフトでは1回あたり3,000〜5,000円が人気の価格帯です。1回分だけでなく3ヶ月分などをまとめてギフトにすると、敬老の日のあとも長く楽しんでもらえます。" },
  { q: "気に入ってもらえなかった場合は解約できますか？", a: "回数縛りのないサービス（medelu・AND PLANTS・HitoHana など）ならいつでも解約できます。bloomeeのギフトチケットはチケット分の回数のみで自動更新されないため、贈られた側が気軽に試せます。" },
];

export default function KeirouNoHiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"敬老の日に贈る花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/keirou-no-hi/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"敬老の日に贈る花のサブスク・花ギフトおすすめ\",\"description\":\"敬老の日に贈る花のサブスクのおすすめと贈り方を解説\",\"datePublished\":\"2026-06-23T00:00:00+09:00\",\"dateModified\":\"2026-06-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/keirou-no-hi/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="min-h-screen bg-[#FAF8F5] text-[#333]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:underline">ホーム</a> / <a href="/guides/" className="hover:underline">ガイド</a> / <span className="text-gray-700">敬老の日に贈る花のサブスク</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年】</h1>
          <p className="text-sm text-gray-600 mb-6">最終更新日：2026年6月23日 ／ flowerデリ編集部</p>

          <div className="bg-white rounded-2xl border border-[#EADFD3] p-5 mb-8">
            <p className="font-bold text-[#7a5] mb-1">結論</p>
            <p className="text-sm leading-relaxed">2026年の敬老の日は<strong>9月21日（月・祝）</strong>。一度きりの花束より、毎月新しい花が届く<strong>花のサブスク</strong>を贈ると、敬老の日のあとも長く楽しんでもらえます。ギフトチケットのbloomee、日付指定・メッセージカードのHitoHana、ギフト対応のAND PLANTSなどが向いています。配送が混む時期のため早めの申し込みが安心です。</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">敬老の日（2026年は9月21日）はいつ？</h2>
            <p className="text-sm leading-relaxed text-gray-700">敬老の日は「9月の第3月曜日」で、2026年は<strong>9月21日（月・祝）</strong>です。長寿を祝い、日頃の感謝を伝える日。形に残らず手間にもならない花は定番のギフトですが、「一度きりで終わってしまう」のが惜しいところ。毎月届く花のサブスクなら、贈ったあとも繰り返し季節の花を楽しんでもらえます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">敬老の日に花のサブスクを贈る3つのメリット</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>① 長く楽しんでもらえる</strong>：一度きりの花束と違い、毎月（または隔週）新しい花が届くため、敬老の日のあとも季節の花を楽しんでもらえます。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>② 遠方の祖父母にも届けられる</strong>：配送先を指定できるので、離れて暮らす祖父母にも届きます（全国対応・一部離島除く）。</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><strong>③ 手入れが負担になりにくいボリューム</strong>：少量から選べるプランが多く、世話の負担になりにくいのも高齢の方への贈り物に向いています。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#cDB] pl-3">敬老の日ギフトに向いているサービス</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">ギフトのしやすさ（チケット・日付指定・メッセージカード・回数縛りなし）で選ぶのがおすすめです。各サービスの料金・縛り・配送の詳細は比較ページでご確認ください。</p>
            <ul className="space-y-2 text-sm">
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><a href="/services/bloomee/" className="text-[#7a5] font-bold underline">bloomee（ブルーミー）</a>：ギフトチケットで贈れ、受け取った方が開始日を選べる</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><a href="/services/hitohana/" className="text-[#7a5] font-bold underline">HitoHana（ヒトハナ）</a>：配送日の指定・メッセージカードに対応</li>
              <li className="bg-white rounded-xl border border-[#EADFD3] p-4"><a href="/services/and-plants/" className="text-[#7a5] font-bold underline">AND PLANTS</a>：ギフト対応に力を入れている</li>
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
              <li><a href="/guides/mothers-day/" className="text-[#7a5] underline">母の日に贈る花のサブスクおすすめ</a></li>
              <li><a href="/compare/cheap/" className="text-[#7a5] underline">安い花のサブスク比較ランキング</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-[#333] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
              <p className="text-xs text-gray-500 mt-2">掲載情報は2026年6月23日時点のものです。最新の料金・サービス内容・配送日程は各公式サイトでご確認ください。</p>
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
