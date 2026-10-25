import PageHero from "@/app/components/PageHero";
import Header from "@/app/components/Header";

const faqs = [
  { q: "クリスマスに間に合うように花のサブスクを始められますか？", a: "お届け日を選べるサービスであれば、クリスマスに合わせて申し込めます。HitoHanaの定期便はお届け日を選んで申し込めます（選べない日もあります）。bloomeeのベーシックプランは水〜日曜日の中から日付と時間帯を指定でき、お試しプラン・グリーンプランは水〜金曜日のお届けで日付は指定できません（2026年10月20日公式確認）。ただし12月は配送が最も混み合う時期のため、遅くとも1〜2週間前までのお申し込みをおすすめします。" },
  { q: "お正月飾り・しめ飾りの代わりに花を飾ってもよいですか？", a: "はい、問題ありません。近年は、しめ飾りや門松の代わりに松・千両・菊・葉牡丹などを使った『お正月アレンジ』を飾る家庭も増えています。花のサブスクにも12月下旬〜1月上旬に正月らしい花材が届くサービスがあり、手軽に新年らしい華やかさを演出できます。" },
  { q: "冬は花が長持ちしますか？", a: "はい、長持ちしやすくなります。冬は気温が低く、夏に比べて切り花が長持ちしやすい季節です。暖房の風が直接当たる場所を避け、こまめに水を替えることで、より長く楽しめます。" },
  { q: "ギフトとして贈る場合の予算はどのくらいですか？", a: "金額に公的な目安はないため、当サイトでは相場を示していません。予算は1回あたりの料金と贈る回数で決まります。例として、LIFFTのギフトチケットは1か月3,850円・3か月10,450円（税込・2026年10月24日公式確認）です。クリスマスとお正月をまたいで2〜3回分をまとめて贈ると、年末年始を通して花を楽しんでいただけます。" },
  { q: "気に入らなかった場合は解約できますか？", a: "回数の条件がないサービス（medelu・AND PLANTS・HitoHana など）は、いつでも解約できます。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。贈り主が申し込んだ場合、停止・解約の手続きは贈り主が行います。" },
];

export default function ChristmasOshogatsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"クリスマス・お正月に飾る花のサブスク\",\"item\":\"https://ohana-delivery.com/guides/christmas-oshogatsu/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ\",\"description\":\"クリスマス・お正月に飾る花のサブスクのおすすめと選び方を解説しています。\",\"datePublished\":\"2026-07-10T00:00:00+09:00\",\"dateModified\":\"2026-10-24T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/christmas-oshogatsu/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="min-h-screen bg-[#FAF8F5] text-[#1F2420]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:underline">ホーム</a> / <a href="/guides/" className="hover:underline">ガイド</a> / <span className="text-gray-700">クリスマス・お正月に飾る花のサブスク</span>
          </nav>

          <PageHero bleed path="/guides/christmas-oshogatsu/">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">クリスマス・お正月に飾る花のサブスク・花ギフトおすすめ【2026年】</h1>
            <p className="text-sm text-gray-600 mb-6">最終更新日：2026年10月24日 ／ flowerデリ編集部</p>
          </PageHero>

          <div className="bg-white rounded-md border border-[#DEDAD2] p-5 mb-8">
            <p className="font-bold text-[#5E7F66] mb-1">クリスマスからお正月にかけて花のサブスクを利用する際の要点</p>
            <p className="text-sm leading-relaxed">冬は切り花が長持ちしやすく、<strong>クリスマスからお正月にかけては花を飾るのに適した季節</strong>です。毎回新しい花が届く<strong>花のサブスク</strong>であれば、クリスマスの華やかなアレンジから、松・千両・葉牡丹などの<strong>お正月アレンジ（しめ飾りの代わり）</strong>まで、年末年始を通して手軽に楽しめます。12月は配送が最も混み合うため、<strong>早めのお申し込み</strong>をおすすめします。「プレゼントとして送る」で申し込めるbloomee、お届け日を選べるHitoHana、配送先を相手の住所にして注文できるAND PLANTSが適しています。</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#D6D2C8] pl-3">クリスマス・お正月に花のサブスクが向く理由</h2>
            <p className="text-sm leading-relaxed text-gray-700">冬は気温が低く、切り花が夏より長持ちします。クリスマスは赤・白・グリーンの華やかなアレンジ、年末年始は松・千両・菊・葉牡丹などの和の花材で、新年らしい華やかさを演出できます。しめ飾りや門松の代わりに『お正月アレンジ』を飾る家庭も増えており、花のサブスクを利用すると手間をかけずに季節の花材が届きます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#D6D2C8] pl-3">クリスマス・お正月に花のサブスクを使う3つのメリット</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><strong>① 冬は花が長持ちします</strong>：気温が低く切り花が傷みにくいため、クリスマスからお正月まで長く飾れます。</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><strong>② 季節の花材が手間なく届きます</strong>：クリスマスのアレンジも、松・千両などのお正月アレンジも、ご自身で選ばなくても旬の花材が届きます。しめ飾りの代わりにも利用できます。</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><strong>③ ギフトにも自宅用にも利用できます</strong>：届け先を相手の住所にして申し込めば贈り物にでき、ご自宅の年末年始の彩りにも使えます。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#D6D2C8] pl-3">クリスマス・お正月に向いているサービス</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">ボリュームと、ギフトとしての贈りやすさ（申し込み方法・お届け日の指定）で選ぶことをおすすめします。各サービスの料金・回数の条件・配送の詳細は、比較ページにてご確認ください。12月は配送が混み合うため、早めのお申し込みをおすすめします。</p>
            <ul className="space-y-2 text-sm">
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><a href="/services/bloomee/" className="text-[#5E7F66] font-bold underline">bloomee（ブルーミー）</a>：お届け先の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><a href="/services/hitohana/" className="text-[#5E7F66] font-bold underline">HitoHana（ヒトハナ）</a>：定期便はお届け日を選んで申し込めます（選べない日もあります）</li>
              <li className="bg-white rounded-md border border-[#DEDAD2] p-4"><a href="/services/and-plants/" className="text-[#5E7F66] font-bold underline">AND PLANTS</a>：配送先を相手の住所、請求先をご自身の住所にして注文します。定期便はラッピングとメッセージカードに対応していません（2026年10月20日公式確認）</li>
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
              <li><a href="/guides/keirou-no-hi/" className="text-[#5E7F66] underline">敬老の日に贈る花のサブスクおすすめ</a></li>
              <li><a href="/guides/seasonal-flowers/" className="text-[#5E7F66] underline">季節の花で選ぶ花のサブスク</a></li>
              <li><a href="/compare/cheap/" className="text-[#5E7F66] underline">安い花のサブスクの比較</a></li>
            </ul>
          </section>
        </main>

        <footer className="bg-[#1F2420] text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
              <p className="text-xs text-gray-500 mt-2">掲載情報は2026年7月10日時点のものです。最新の料金・サービス内容・配送日程は、各公式サイトにてご確認ください。</p>
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
