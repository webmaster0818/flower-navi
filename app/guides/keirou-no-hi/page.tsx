import PageHero from "@/app/components/PageHero";
import Header from "@/app/components/Header";

const faqs = [
  { q: "花のサブスクを敬老の日ギフトとして贈れますか？", a: "はい、届け先を祖父母の住所にして申し込めば贈ることができます。bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます。AND PLANTSは、注文時の配送先を相手の住所、請求先をご自身の住所にします（2026年10月20日公式確認）。HitoHanaのギフトでの申し込み方法は、公式サイトでご確認ください。" },
  { q: "敬老の日当日に届くように指定できますか？", a: "サービスによって異なります。HitoHanaの定期便はお届け日を選んで申し込めます（選べない日もあります）。bloomeeのお試しプラン・グリーンプランは水〜金曜日のお届けで日付は指定できず、ベーシックプランは水〜日曜日の中から日付と時間帯を指定できます（2026年10月20日公式確認）。配送が混み合う時期のため、日付を指定する場合は早めのお申し込みをおすすめします。" },
  { q: "離れて暮らす祖父母にも贈れますか？", a: "はい、贈ることができます。花のサブスクは配送先を指定できるため、遠方の祖父母にも届けられます。ほとんどのサービスが日本全国に対応しています（一部離島を除く）。事前にお届け先の住所をご確認ください。" },
  { q: "予算はどのくらいが目安ですか？", a: "花のサブスクのギフトでは、1回あたり3,000〜5,000円が人気の価格帯です。1回分だけでなく3か月分などをまとめて贈ると、敬老の日のあとも長く楽しんでいただけます。" },
  { q: "気に入ってもらえなかった場合は解約できますか？", a: "回数の条件がないサービス（medelu・AND PLANTS・HitoHana など）は、いつでも解約できます。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。贈り主が申し込んだ場合、停止・解約の手続きは贈り主が行います。" },
];

export default function KeirouNoHiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"敬老の日に贈る花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/keirou-no-hi/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"敬老の日に贈る花のサブスク・花ギフトおすすめ\",\"description\":\"敬老の日に贈る花のサブスクのおすすめと贈り方を解説しています。\",\"datePublished\":\"2026-07-10T00:00:00+09:00\",\"dateModified\":\"2026-07-10T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/keirou-no-hi/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="min-h-screen bg-[#FAF8F5] text-[#1F2420]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:underline">ホーム</a> / <a href="/guides/" className="hover:underline">ガイド</a> / <span className="text-gray-700">敬老の日に贈る花のサブスク</span>
          </nav>

          <PageHero bleed path="/guides/keirou-no-hi/">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">敬老の日に贈る花のサブスク・花ギフトおすすめ【2026年】</h1>
            <p className="text-sm text-gray-600 mb-6">最終更新日：2026年6月23日 ／ flowerデリ編集部</p>
          </PageHero>

          <div className="bg-white rounded-md border border-[#DEDAD2] p-5 mb-8">
            <p className="font-bold text-[#5E7F66] mb-1">2026年の敬老の日に花のサブスクを贈る際の要点</p>
            <p className="text-sm leading-relaxed">2026年の敬老の日は<strong>9月21日（月・祝）</strong>です。一度きりの花束より、毎月新しい花が届く<strong>花のサブスク</strong>を贈ると、敬老の日のあとも長く楽しんでいただけます。「プレゼントとして送る」で申し込めるbloomee、お届け日を選べるHitoHana、配送先を相手の住所にして注文できるAND PLANTSなどが適しています。配送が混み合う時期のため、早めのお申し込みをおすすめします。</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#D6D2C8] pl-3">敬老の日の日程（2026年は9月21日）</h2>
            <p className="text-sm leading-relaxed text-gray-700">敬老の日は9月の第3月曜日で、2026年は<strong>9月21日（月・祝）</strong>です。長寿を祝い、日頃の感謝を伝える日です。形に残らず手間もかからない花は一般的なギフトですが、花束は一度きりで終わってしまいます。毎月届く花のサブスクであれば、贈ったあとも繰り返し季節の花を楽しんでいただけます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#D6D2C8] pl-3">敬老の日に花のサブスクを贈る3つのメリット</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><strong>① 長く楽しんでもらえる</strong>：一度きりの花束と異なり、毎月（または隔週）新しい花が届くため、敬老の日のあとも季節の花を楽しんでいただけます。</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><strong>② 遠方の祖父母にも届けられる</strong>：配送先を指定できるため、離れて暮らす祖父母にも届けられます（全国対応・一部離島を除く）。</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><strong>③ 手入れが負担になりにくいボリューム</strong>：少量から選べるプランが多く、世話の負担になりにくい点も、高齢の方への贈り物に適しています。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#D6D2C8] pl-3">敬老の日ギフトに向いているサービス</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">ギフトとしての贈りやすさ（申し込み方法・お届け日の指定・回数の条件の有無）で選ぶことをおすすめします。各サービスの料金・回数の条件・配送の詳細は、比較ページにてご確認ください。</p>
            <ul className="space-y-2 text-sm">
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><a href="/services/bloomee/" className="text-[#5E7F66] font-bold underline">bloomee（ブルーミー）</a>：お届け先の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><a href="/services/hitohana/" className="text-[#5E7F66] font-bold underline">HitoHana（ヒトハナ）</a>：定期便はお届け日を選んで申し込めます（選べない日もあります）</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><a href="/services/and-plants/" className="text-[#5E7F66] font-bold underline">AND PLANTS</a>：配送先を相手の住所、請求先をご自身の住所にして注文します（2026年10月20日公式確認）</li>
            </ul>
            <p className="text-sm mt-4"><a href="/compare/cheap/" className="text-[#5E7F66] underline">→ 料金で選ぶ場合：安い花のサブスクの比較</a></p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-[#D6D2C8] pl-3">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white rounded-md border border-[#DEDAD2] p-4">
                  <summary className="font-bold cursor-pointer text-sm">{f.q}</summary>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-4 bg-white rounded-md border border-[#DEDAD2] p-5">
            <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/guides/present/" className="text-[#5E7F66] underline">花のサブスクをプレゼントに贈る方法</a></li>
              <li><a href="/guides/mothers-day/" className="text-[#5E7F66] underline">母の日に贈る花のサブスクおすすめ</a></li>
              <li><a href="/compare/cheap/" className="text-[#5E7F66] underline">安い花のサブスクの比較</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-[#1F2420] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
              <p className="text-xs text-gray-500 mt-2">掲載情報は2026年6月23日時点のものです。最新の料金・サービス内容・配送日程は、各公式サイトにてご確認ください。</p>
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
