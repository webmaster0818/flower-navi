// 全ページ共通のクローラブルな内部リンクハブ(サイトマップ的フッター)。
// root layout から常時描画され、孤立ページを解消し内部リンクを最適化する。

const services = [
  ["bloomee", "bloomee（ブルーミー）"],
  ["medelu", "medelu（メデル）"],
  ["and-plants", "AND PLANTS"],
  ["hitohana", "HitoHana"],
  ["lifft", "LIFFT"],
  ["hanameku", "ハナメク"],
  ["tasuhana", "タスハナ"],
  ["nihon-sogo-engei", "日本総合園芸"],
];

const compares = [
  ["cheap", "安い花のサブスク比較"],
  ["500yen", "500円台の花の定期便"],
  ["souryou-muryou", "送料無料で比較"],
  ["post-delivery", "ポスト投函できる花"],
  ["kanyou-shokubutsu", "観葉植物のサブスク"],
  ["bloomee-vs-medelu", "bloomee vs medelu"],
  ["bloomee-vs-hitohana", "bloomee vs HitoHana"],
];

const guides = [
  ["beginner", "初心者ガイド"],
  ["merit-demerit", "メリット・デメリット"],
  ["kaiyaku", "解約方法まとめ"],
  ["flower-care", "花を長持ちさせるコツ"],
  ["nagamochi", "切り花を長持ち"],
  ["kabin", "花瓶の選び方"],
  ["seasonal-flowers", "季節の花カレンダー"],
  ["present", "プレゼントに贈る"],
  ["mothers-day", "母の日に贈る"],
  ["oshare", "おしゃれな花サブスク"],
  ["hitorigurashi", "一人暮らしにおすすめ"],
  ["dansei", "男性におすすめ"],
  ["butsudan", "仏花の定期便"],
  ["furusato-nouzei", "ふるさと納税で"],
  ["shoboi", "しょぼい？実態検証"],
  ["yameta", "やめた理由"],
];

const clusters = [
  ["/personas/", "ペルソナ別おすすめ"],
  ["/use-cases/", "利用シーン別(誕生日・記念日ほか)"],
  ["/regions/", "地域別(東京・大阪ほか)"],
  ["/vs/", "サービス1対1比較"],
  ["/know-guides/", "お花の豆知識ガイド"],
  ["/service-guides/", "サービス別 口コミ・解約"],
];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold text-[#C4877A] tracking-wider mb-2">{title}</p>
      <ul className="space-y-1.5">{children}</ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <nav aria-label="サイト内リンク" className="bg-[#FBF8F4] border-t border-[#E8E0D8] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-[#6B5F57]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          <Col title="サービス詳細">
            {services.map(([s, l]) => (
              <li key={s}><a href={`/services/${s}/`} className="hover:text-[#C4877A]">{l}</a></li>
            ))}
          </Col>
          <Col title="比較で選ぶ">
            {compares.map(([s, l]) => (
              <li key={s}><a href={`/compare/${s}/`} className="hover:text-[#C4877A]">{l}</a></li>
            ))}
          </Col>
          <Col title="目的・地域・診断">
            {clusters.map(([href, l]) => (
              <li key={href}><a href={href} className="hover:text-[#C4877A]">{l}</a></li>
            ))}
          </Col>
          <Col title="ガイド・コラム">
            {guides.map(([s, l]) => (
              <li key={s}><a href={`/guides/${s}/`} className="hover:text-[#C4877A]">{l}</a></li>
            ))}
          </Col>
        </div>
        <div className="mt-8 pt-6 border-t border-[#E8E0D8] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9B8F87]">
          <a href="/" className="hover:text-[#C4877A]">トップ</a>
          <a href="/about/" className="hover:text-[#C4877A]">運営者情報</a>
          <a href="/privacy-policy/" className="hover:text-[#C4877A]">プライバシーポリシー</a>
          <a href="/terms-of-service/" className="hover:text-[#C4877A]">利用規約</a>
          <a href="/content-policy/" className="hover:text-[#C4877A]">コンテンツ制作方針</a>
          <span className="ml-auto">© flowerデリ</span>
        </div>
      </div>
    </nav>
  );
}
