"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "おしゃれな花のサブスクは、どのように選べばよいですか？",
    a: "おしゃれさを重視して選ぶ場合は、(1)花の組み合わせと色合い、(2)パッケージや梱包のデザイン、(3)SNSに投稿されている写真の雰囲気、(4)手持ちの花瓶やインテリアとの相性、の4点をご確認ください。公式サイトやInstagramで、実際に届いた花の写真を確認する方法が最も確実です。",
  },
  {
    q: "SNS向けの写真を撮りやすい花のサブスクはどれですか？",
    a: "bloomeeは利用者によるSNS投稿やレビュー記事が多く、季節の花が届くため、毎回異なる写真を撮影できます。AND PLANTSはプロのフローリストによるアレンジが届き、洗練された雰囲気の写真を撮影しやすい点が特徴です。",
  },
  {
    q: "花のサブスクで届く花は自分で選べますか？",
    a: "多くのサービスでは、プロが旬の花を選んで届けるため、花の種類は基本的に指定できません。ただし、AND PLANTSでは好みの色味やテイストの傾向を登録でき、その内容にもとづいたアレンジが届きます。何が届くかを楽しめる点も、花のサブスクの魅力の一つです。",
  },
  {
    q: "おしゃれに飾るためのおすすめの花瓶はありますか？",
    a: "透明なガラス製の花瓶は用途が広く、どのような花にも合わせやすい素材です。茎の断面や水の透明感が見えるため、写真でも見栄えがします。陶器やマットな質感の花瓶はナチュラルな雰囲気に、金属製のフラワーベースはモダンなインテリアに合います。複数の花瓶を使い分けると、飾り方の幅が広がります。",
  },
  {
    q: "花のサブスクはプレゼントとして贈れますか？",
    a: "はい、多くのサービスがギフトに対応しています。AND PLANTSはギフト用のラッピングや観葉植物のギフトにも対応しています。bloomeeにもギフトプランがあり、贈り先の住所へ直接届けることができます。デザイン性の高いパッケージで届くため、贈り物にも適しています。",
  },
  {
    q: "賃貸のワンルームでもおしゃれに飾れますか？",
    a: "飾ることができます。小さなテーブル、窓辺、キッチンカウンターなど、限られたスペースでも十分です。bloomeeのお試しプランは4本以上・約18〜25cmの小ぶりな花束で届くため、小さな花瓶にまとめて飾れます。壁掛けのフラワーベースを使う方法や、ドライフラワーにして吊るす方法も、狭い空間を有効に活用する手段です。",
  },
  {
    q: "届いた花を見栄えよく長持ちさせる方法はありますか？",
    a: "到着後すぐに茎を斜めに切り、清潔な水に生けることが基本です。水は毎日交換し、水に浸かる部分の葉は取り除いてください。直射日光やエアコンの風が直接当たる場所を避け、涼しい場所に置くと長持ちします。栄養剤を使うと、花の持ちが1.5倍ほど延びる場合もあります。",
  },
  {
    q: "花のサブスクとドライフラワーを組み合わせて楽しむことはできますか？",
    a: "おすすめの組み合わせです。サブスクで届いた生花を楽しんだ後にドライフラワーにして飾り続けると、部屋に常に花がある状態を保てます。特にバラ、アジサイ、スターチスなどはドライフラワーにしやすい花です。生花とドライフラワーを並べて飾ると、空間に奥行きが生まれます。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    plan: "Standardプラン",
    price: 1980,
    shipping: 0,
    total: 1980,
    shippingLabel: "無料",
    flowers: "6〜8本（2026年10月17日公式確認）",
    delivery: "宅配便（専用ボックス）",
    frequency: "1週・2週・4週ごと（2026年10月17日公式確認）",
    minOrders: "なし",
    quality: "あり",
    style: "洗練・モダン",
    url: "/services/and-plants",
    officialUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    highlight: "プロのフローリストが花を選定。独自デザインの梱包ボックスを使用。観葉植物も取り扱い。送料無料。",
    bestFor: "インテリアにこだわる方、洗練されたアレンジを求める方、観葉植物にも関心がある方",
    detail: "AND PLANTSは、プロのフローリストが旬の花を一つずつ選び、アレンジして届けるサービスです。主な特徴は、飾ったときの見え方を意識したデザインにあります。独自開発の梱包ボックスは花が傷みにくい設計で、開封時の印象にも配慮されています。6〜8本（2026年10月17日公式確認）の花束が届き、そのまま花瓶に生けるだけで整った見た目になります。切り花だけでなく観葉植物のサブスクも展開しており、グリーンを含めたインテリア全体をそろえられる点も、他サービスにない特徴です。回数の条件はなく、送料無料で始められます。",
    stylePoints: [
      "フローリストが色合いと質感のバランスを考慮したアレンジ",
      "ニュアンスカラーやくすみ系の色合いが得意",
      "SNS用の写真だけでなく、部屋になじむ自然な美しさ",
      "観葉植物と組み合わせて、統一感のあるインテリアを実現",
    ],
  },
  {
    rank: 2,
    name: "bloomee",
    nameJa: "ブルーミー",
    plan: "ベーシックプラン",
    price: 2180,
    shipping: 550,
    total: 2730,
    shippingLabel: "550円",
    flowers: "8本以上",
    delivery: "手渡し（日時指定可）",
    frequency: "毎週 / 隔週",
    minOrders: "4回",
    quality: "あり（定期便は2週間以内の連絡で返金・交換）",
    style: "多彩・華やか",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    highlight: "お届け実績3,000万本以上（公式・自社調べ）。ベーシックは8本以上・約25〜30cmで手渡し。",
    bestFor: "毎回異なる季節の花を楽しみたい方、SNSに花の写真を投稿したい方",
    detail: "bloomeeは公式サイトで「お花のお届け実績3,000万本以上（自社調べ）」と表記している花のサブスクです。おしゃれさとボリュームを重視する場合はベーシックプラン（花代2,180円＋送料550円・8本以上・約25〜30cm）が適しており、お試しプラン（980円＋送料385円・4本以上・約18〜25cm）と比べて花の量と長さが増えます。ベーシックは手渡しで、水〜日曜から日付と時間帯を指定できます。品質保証は、定期便なら2週間以内の連絡で返金・交換の対象です（公式・特定商取引法に基づく表記。2026年10月15日確認）。SNS上の投稿が多く、他の利用者の飾り方を参考にできる点も利点です。ただし、最低4回の受け取りが必要な点にご注意ください。",
    stylePoints: [
      "季節の花が届き、自分では選ばない花にも出会える",
      "ベーシックは8本以上・約25〜30cmで飾りごたえがある",
      "SNSに投稿された写真が多く、飾り方の参考になる",
      "季節のイベントに合わせた限定アレンジもあり",
    ],
  },
  {
    rank: 3,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    plan: "花瓶プレミアムコース",
    price: 2640,
    shipping: 0,
    total: 2640,
    shippingLabel: "料金に含む（宅配便は3,850円/回）（2026年10月17日公式確認）",
    flowers: "プロのアレンジ花束",
    delivery: "自社配達便 / 宅配便",
    frequency: "月3回（2026年10月17日公式確認）",
    minOrders: "なし",
    quality: "あり",
    style: "格式・本格派",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "プロのフローリストが一つずつ手作りする本格的なアレンジ。ボリュームのある花束。自社配達便・宅配便に対応（2026年10月17日公式確認）。",
    bestFor: "本格的な花の美しさを求める方、来客時に見栄えのするアレンジを求める方、手渡しで確実に受け取りたい方",
    detail: "日本総合園芸は、長年の実績を持つ花の専門事業者が運営するサービスです。花瓶プレミアムコース（自社配達便1回2,640円・宅配便3,850円・月3回（2026年10月17日公式確認））では、経験豊富なフローリストが一つずつ丁寧にアレンジした花束が届きます。ボリュームは他サービスと比較しても特に大きく、玄関やリビングに飾ると空間が華やかになります。お届けは自社配達便と宅配便から選べ、自社配達便は留守の場合も、玄関先に用意した水を張ったバケツに花を入れて届けます（2026年10月17日公式確認）。ポスト投函では不安のある大きなアレンジや繊細な花材も、宅配便や自社配達便であれば受け取りやすくなります。価格帯はやや高めですが、その分の品質とボリュームを備えています。",
    stylePoints: [
      "フローリストの技術による立体的なアレンジメント",
      "高品質な花材を十分に使ったボリューム感",
      "自社配達便・宅配便から選べるお届け方法（2026年10月17日公式確認）",
      "来客時やパーティーの場にもふさわしい格式",
    ],
  },
];

/* ─── Main Component ─── */
export default function OshareGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"おしゃれな花のサブスクおすすめ\",\"item\":\"https://ohana-delivery.com/guides/oshare/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"おしゃれな花のサブスクおすすめ\",\"description\":\"おしゃれな花のサブスクのおすすめを解説します。料金・評判・選び方をまとめています。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/oshare/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"おしゃれな花のサブスクは、どのように選べばよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"おしゃれさを重視して選ぶ場合は、(1)花の組み合わせと色合い、(2)パッケージや梱包のデザイン、(3)SNSに投稿されている写真の雰囲気、(4)手持ちの花瓶やインテリアとの相性、の4点をご確認ください。公式サイトやInstagramで、実際に届いた花の写真を確認する方法が最も確実です。\"}},{\"@type\":\"Question\",\"name\":\"SNS向けの写真を撮りやすい花のサブスクはどれですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeは利用者によるSNS投稿やレビュー記事が多く、季節の花が届くため、毎回異なる写真を撮影できます。AND PLANTSはプロのフローリストによるアレンジが届き、洗練された雰囲気の写真を撮影しやすい点が特徴です。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクで届く花は自分で選べますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"多くのサービスでは、プロが旬の花を選んで届けるため、花の種類は基本的に指定できません。ただし、AND PLANTSでは好みの色味やテイストの傾向を登録でき、その内容にもとづいたアレンジが届きます。何が届くかを楽しめる点も、花のサブスクの魅力の一つです。\"}},{\"@type\":\"Question\",\"name\":\"おしゃれに飾るためのおすすめの花瓶はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"透明なガラス製の花瓶は用途が広く、どのような花にも合わせやすい素材です。茎の断面や水の透明感が見えるため、写真でも見栄えがします。陶器やマットな質感の花瓶はナチュラルな雰囲気に、金属製のフラワーベースはモダンなインテリアに合います。複数の花瓶を使い分けると、飾り方の幅が広がります。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクはプレゼントとして贈れますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、多くのサービスがギフトに対応しています。AND PLANTSはギフト用のラッピングや観葉植物のギフトにも対応しています。bloomeeにもギフトプランがあり、贈り先の住所へ直接届けることができます。デザイン性の高いパッケージで届くため、贈り物にも適しています。\"}},{\"@type\":\"Question\",\"name\":\"賃貸のワンルームでもおしゃれに飾れますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"飾ることができます。小さなテーブル、窓辺、キッチンカウンターなど、限られたスペースでも十分です。bloomeeのお試しプランは4本以上・約18〜25cmの小ぶりな花束で届くため、小さな花瓶にまとめて飾れます。壁掛けのフラワーベースを使う方法や、ドライフラワーにして吊るす方法も、狭い空間を有効に活用する手段です。\"}},{\"@type\":\"Question\",\"name\":\"届いた花を見栄えよく長持ちさせる方法はありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"到着後すぐに茎を斜めに切り、清潔な水に生けることが基本です。水は毎日交換し、水に浸かる部分の葉は取り除いてください。直射日光やエアコンの風が直接当たる場所を避け、涼しい場所に置くと長持ちします。栄養剤を使うと、花の持ちが1.5倍ほど延びる場合もあります。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクとドライフラワーを組み合わせて楽しむことはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"おすすめの組み合わせです。サブスクで届いた生花を楽しんだ後にドライフラワーにして飾り続けると、部屋に常に花がある状態を保てます。特にバラ、アジサイ、スターチスなどはドライフラワーにしやすい花です。生花とドライフラワーを並べて飾ると、空間に奥行きが生まれます。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <a href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#4A4F49]">ガイド記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#1F2420] font-medium">おしゃれな花のサブスクおすすめ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/oshare/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#9A5C45] font-medium mb-3 tracking-wide">
              おしゃれな花のサブスク特集
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              おしゃれな花のサブスクおすすめ3選<br className="hidden md:block" />
              デザイン性の高いサービスを比較
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクを始めるにあたり、おしゃれなサービスを選びたいと考える方は少なくありません。
              当サイトでは、デザイン性・アレンジのセンス・SNSでの見栄えの観点から、スタイルを重視する方におすすめの3サービスを選定してご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">掲載サービス</p>
                <p className="text-xl font-bold text-[#2F5B43]">3サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最安価格帯</p>
                <p className="text-xl font-bold text-[#2F5B43]">980円〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">送料無料</p>
                <p className="text-xl font-bold text-[#2F5B43]">1サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">SNS人気</p>
                <p className="text-xl font-bold text-[#9A5C45]">No.1掲載</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">目次</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#what-is-stylish" className="hover:text-[#2F5B43] transition-colors">1. おしゃれな花のサブスクを選ぶ基準</a></li>
                  <li><a href="#ranking-table" className="hover:text-[#2F5B43] transition-colors">2. おしゃれな花のサブスク3選の比較表</a></li>
                  <li><a href="#ranking-detail" className="hover:text-[#2F5B43] transition-colors">3. 各サービスの詳細レビュー</a></li>
                  <li><a href="#instagram-tips" className="hover:text-[#2F5B43] transition-colors">4. 届いた花を美しく見せる撮影・飾り方のポイント</a></li>
                  <li><a href="#room-coordination" className="hover:text-[#2F5B43] transition-colors">5. 部屋のテイスト別のコーディネート方法</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">6. おしゃれな花のサブスクに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── What Makes It Stylish ─── */}
        <section id="what-is-stylish" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              おしゃれな花のサブスクを選ぶ基準
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              花のサブスクは数多くありますが、「おしゃれ」と感じるかどうかはサービスによって大きく異なります。
              花が届くことだけでなく、色合いの組み立て、花材の組み合わせ、梱包のデザインまで含めて総合的に評価することが重要です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              当サイトでは、おしゃれな花のサブスクを見極めるための5つの確認項目を以下のとおりご説明します。
            </p>

            <div className="space-y-4">
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#E3D3C8]">
                <h3 className="text-sm font-bold text-[#9A5C45] mb-2">1. アレンジのセンス・色合い</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  プロのフローリストがアレンジを手がけているか、色のトーンに統一感があるかが重要です。
                  くすみカラーやニュアンスカラーを取り入れたアレンジは、近年のインテリアの傾向とも相性が良く、写真でも見栄えがします。
                </p>
              </div>
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#E3D3C8]">
                <h3 className="text-sm font-bold text-[#9A5C45] mb-2">2. パッケージ・梱包のデザイン</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  開封時の印象も、おしゃれさを構成する要素の一つです。
                  オリジナルデザインのボックスやペーパー、ブランドロゴ入りのラッピングなど、細部まで配慮されたサービスは満足度が高い傾向にあります。
                </p>
              </div>
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#E3D3C8]">
                <h3 className="text-sm font-bold text-[#9A5C45] mb-2">3. SNSでの評判・投稿の雰囲気</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  InstagramやXの投稿を見ると、実際に届く花の雰囲気を把握できます。
                  投稿数が多いサービスほど飾り方の参考例も多く、理想のスタイルを具体的に想像しやすくなります。
                </p>
              </div>
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#E3D3C8]">
                <h3 className="text-sm font-bold text-[#9A5C45] mb-2">4. 花瓶・インテリアとの相性</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花がきれいであっても、部屋のインテリアと合わなければおしゃれには見えません。
                  届く花のボリュームやスタイルが、手持ちの花瓶や部屋のテイストに合うかを事前にご確認ください。
                </p>
              </div>
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#E3D3C8]">
                <h3 className="text-sm font-bold text-[#9A5C45] mb-2">5. 花以外のトータル提案力</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花だけでなく、観葉植物やドライフラワー、花瓶のセット販売など、暮らし全体のスタイリングを提案するサービスは、
                  おしゃれな空間づくりに役立ちます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Ranking Table ─── */}
        <section id="ranking-table" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              おしゃれな花のサブスク3選の比較表
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              当サイトでは、デザイン性・アレンジのセンス・SNSでの評判を総合的に評価し、おしゃれさを重視する方におすすめの3サービスを比較しています。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">順位</th>
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">プラン</th>
                    <th className="px-4 py-3 text-right font-medium">料金</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-center font-medium">花の本数</th>
                    <th className="px-4 py-3 text-center font-medium">スタイル</th>
                    <th className="px-4 py-3 text-center font-medium">配送方法</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#DEDAD2] ${i === 0 ? "bg-[#F6F4EF]" : ""}`}>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold ${
                          i === 0 ? "bg-[#9A5C45] text-white" :
                          i === 1 ? "bg-[#9CA3AF] text-white" :
                          "bg-[#B45309] text-white"
                        }`}>
                          {item.rank}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#2F5B43] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#6B6F6A]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#4A4F49]">{item.plan}</td>
                      <td className="px-4 py-4 text-right text-[#1F2420]">{item.price.toLocaleString()}円</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === 0 ? (
                          <span className="text-[#2F5B43] font-medium">無料</span>
                        ) : item.shipping ? (
                          <span className="text-[#4A4F49]">{item.shipping}円</span>
                        ) : (
                          <span className="text-xs text-[#6B6F6A]">別途</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#4A4F49]">{item.flowers}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-block bg-[#F6F4EF] text-[#9A5C45] text-xs font-medium px-2 py-0.5 rounded">
                          {item.style}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-[#4A4F49] text-xs">{item.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">表の補足</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ bloomeeはお試しプラン（980円＋送料385円）から始めることもできますが、ボリュームを重視する場合はベーシックプラン（2,180円＋送料550円・8本以上）をおすすめします</li>
                <li>・ 日本総合園芸はお届け方法（自社配達便・宅配便）とコースによって料金が異なります（2026年10月17日公式確認）</li>
                <li>・ 2026年4月時点の情報です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              各サービスの詳細レビュー
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              おしゃれさを重視して選ぶ3サービスについて、デザインの特徴・届く内容・おすすめの利用者をご説明します。
            </p>

            <div className="space-y-8">
              {rankingData.map((item) => (
                <div key={item.rank} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#F6F4EF] border-b border-[#E3D3C8]" : "bg-[#EDF1EC] border-b border-[#C9D6CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-md text-sm font-bold ${
                      item.rank === 1 ? "bg-[#9A5C45] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      "bg-[#B45309] text-white"
                    }`}>
                      {item.rank}位
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2420]">
                        {item.name}（{item.nameJa}）{item.plan}
                      </h3>
                      <p className="text-sm text-[#4A4F49]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Price Breakdown */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">料金</p>
                        <p className="text-lg font-bold text-[#1F2420]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                        <p className="text-lg font-bold text-[#1F2420]">
                          {item.shipping === 0 ? (
                            <span className="text-[#2F5B43]">無料</span>
                          ) : item.shipping ? (
                            <>{item.shipping}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">別途</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">1回あたり総額</p>
                        <p className="text-lg font-bold text-[#2F5B43]">
                          {item.total ? (
                            <>{item.total.toLocaleString()}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">{item.price.toLocaleString()}円＋送料</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">花の本数</p>
                        <p className="text-lg font-bold text-[#1F2420]">{item.flowers}</p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-28 shrink-0">届き方</span>
                        <span className="text-[#1F2420]">{item.delivery}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-28 shrink-0">配送頻度</span>
                        <span className="text-[#1F2420]">{item.frequency}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-28 shrink-0">回数の条件</span>
                        <span className="text-[#1F2420]">{item.minOrders}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-28 shrink-0">品質保証</span>
                        <span className="text-[#1F2420]">{item.quality}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Style Points */}
                    <div className="bg-[#F6F4EF] rounded-lg p-4 mb-5 border border-[#E3D3C8]">
                      <p className="text-sm font-bold text-[#9A5C45] mb-3">デザイン面の特徴</p>
                      <ul className="text-sm text-[#4A4F49] space-y-2">
                        {item.stylePoints.map((point, idx) => (
                          <li key={idx}>・ {point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <div className="bg-[#EDF1EC] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#2F5B43]">おすすめの利用者：</span>
                        <span className="text-[#4A4F49]">{item.bestFor}</span>
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={item.url}
                        className="inline-block text-center bg-white text-[#2F5B43] font-bold text-sm px-6 py-3 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
                      >
                        {item.name}の詳細レビューを見る
                      </a>
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block text-center bg-[#2F5B43] text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-[#234534] transition-colors"
                      >
                        {item.name}公式サイトはこちら
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Instagram Tips ─── */}
        <section id="instagram-tips" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#9A5C45]">
              届いた花を美しく見せる撮影・飾り方のポイント
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              届いた花の印象は、飾り方や撮影方法によって大きく変わります。
              当サイトでは、花のサブスクで届いた花をより魅力的に見せる方法をご説明します。
            </p>

            <div className="space-y-6">
              {/* Tip 1 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">自然光を活かして撮影する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花の写真は、自然光で撮影すると最も美しく仕上がります。窓辺に花を置き、午前中の柔らかい光で撮影する方法が適しています。
                  直射日光では影が強くなりすぎるため、レースカーテン越しの光をおすすめします。
                  蛍光灯やLEDライトの下では花の色味が変わるため、できるだけ自然光のある時間帯に撮影してください。
                </p>
              </div>

              {/* Tip 2 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">背景をシンプルに統一する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花を主役にするには、背景を整理することが重要です。
                  白い壁、木目のテーブル、大理石調のプレートなど、シンプルな背景を選んでください。
                  リネンやコットンの布を敷くだけでも、写真の雰囲気が向上します。
                  生活感のあるものが写り込まないよう、撮影前に周囲を片付けておくことも大切です。
                </p>
              </div>

              {/* Tip 3 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">花瓶の選び方で印象が変わる</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  透明なガラス花瓶はどの花にも合わせやすい一方、花の色に合わせて花瓶を選ぶと、さらに統一感が出ます。
                  パステルカラーの花にはマットな白い陶器、鮮やかな色の花にはシンプルなクリアガラス、
                  グリーン系の花にはブラウンやテラコッタの素材がよく合います。
                  一輪挿しを複数並べる方法は、少量の花でもおしゃれに見せられるためおすすめです。
                </p>
              </div>

              {/* Tip 4 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">小物を添えて雰囲気をつくる</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花だけでなく、本・キャンドル・コーヒーカップなどの小物を一緒に配置すると、
                  暮らしの一場面を切り取ったような写真になります。
                  ただし、小物は1〜2点に抑え、花を主役にすることが大切です。
                  色のトーンを花とそろえると、全体のまとまりが良くなります。
                </p>
              </div>

              {/* Tip 5 */}
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">真上からの撮影も活用する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花を真上から撮影する（フラットレイ）と、花びらの美しさが際立ちます。
                  特にバラやラナンキュラスなど、花びらが幾重にも重なる花は真上からの撮影に適しています。
                  花束全体のボリューム感を伝えたい場合は、斜め45度の角度が適しています。
                  複数の角度で撮影し、最も見栄えのよい1枚を選んでください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Room Coordination ─── */}
        <section id="room-coordination" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              部屋のテイスト別のコーディネート方法
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクで届いた花を、部屋のインテリアに合わせて飾る方法をテイスト別にご説明します。
            </p>

            <div className="space-y-6">
              {/* Natural */}
              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold px-2 py-1 rounded">ナチュラル</span>
                  <h3 className="text-base font-bold text-[#1F2420]">木目調・北欧風の部屋に合わせる場合</h3>
                </div>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  白やグリーンを基調としたナチュラルカラーの花が最も合います。
                  ユーカリやかすみ草などのグリーン系を中心に、差し色として淡いピンクやイエローを加えると、
                  北欧風のインテリアに自然になじみます。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#6B6F6A] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#4A4F49]">
                    <span className="font-bold text-[#2F5B43]">AND PLANTS</span> -- ニュアンスカラーのアレンジと観葉植物の組み合わせが得意
                  </p>
                </div>
              </div>

              {/* Modern */}
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#1F2420] text-white text-xs font-bold px-2 py-1 rounded">モダン</span>
                  <h3 className="text-base font-bold text-[#1F2420]">モノトーン・シンプルな部屋に合わせる場合</h3>
                </div>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  白やグレーを基調としたモダンな空間では、鮮やかな赤やオレンジの花がアクセントになります。
                  反対に、白い花だけでまとめると、洗練された印象になります。
                  花瓶はガラスやステンレスなど無機質な素材を選ぶと統一感が出ます。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#6B6F6A] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#4A4F49]">
                    <span className="font-bold text-[#2F5B43]">AND PLANTS</span> -- 洗練されたセレクトで、モダンな空間と相性が良い
                  </p>
                </div>
              </div>

              {/* Feminine */}
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#E3D3C8]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#9A5C45] text-white text-xs font-bold px-2 py-1 rounded">フェミニン</span>
                  <h3 className="text-base font-bold text-[#1F2420]">ピンク・ホワイト基調の部屋に合わせる場合</h3>
                </div>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  ピンクのバラ、ラナンキュラス、トルコキキョウなど、華やかな花がよく合います。
                  花びらにボリュームのある花を選ぶと、フェミニンなインテリアがより華やかになります。
                  パールホワイトやゴールドの花瓶を合わせると、上品な空間に仕上がります。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#6B6F6A] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#4A4F49]">
                    <span className="font-bold text-[#2F5B43]">bloomee</span> -- 多彩な花屋によるアレンジで、華やかなスタイルが豊富
                  </p>
                </div>
              </div>

              {/* Classic */}
              <div className="bg-[#F8F5F0] rounded-md p-5 border border-[#E5DDD0]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#8B6914] text-white text-xs font-bold px-2 py-1 rounded">クラシック</span>
                  <h3 className="text-base font-bold text-[#1F2420]">格式のある上品な部屋に合わせる場合</h3>
                </div>
                <p className="text-sm text-[#4A4F49] leading-relaxed mb-3">
                  深い赤のバラ、白いカサブランカ、紫のトルコキキョウなど、格式のある花材が適しています。
                  ボリュームのある花束をリビングや玄関に飾ると、ホテルのロビーのような上質な空間を演出できます。
                  陶器や真鍮の花器と合わせると、クラシカルな雰囲気が引き立ちます。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#6B6F6A] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#4A4F49]">
                    <span className="font-bold text-[#2F5B43]">日本総合園芸</span> -- プロのアレンジとボリュームで、格式のある空間を演出
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              おしゃれな花のサブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#F6F4EF] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#1F2420] pr-4">
                      Q. {item.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#6B6F6A] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white border-t border-[#DEDAD2]">
                      <p className="text-sm text-[#4A4F49] leading-relaxed">
                        A. {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              おしゃれさを重視する場合はAND PLANTSをおすすめします
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              当サイトでは、おしゃれな花のサブスクを比較した結果、デザイン性・アレンジのセンス・総合的な提案力の面から、AND PLANTS（アンドプランツ）を最もおすすめします。
              プロのフローリストによる洗練されたセレクト、独自デザインの梱包、観葉植物まで含めたコーディネートが可能な点は、他サービスにない強みです。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              SNSへの投稿を楽しみたい方には、bloomee（ブルーミー）をおすすめします。
              季節の花が届くため、毎回異なる写真を撮影できます。
              InstagramやXでの投稿事例も多く、飾り方の参考にしやすい点も利点です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              本格的な花の美しさとボリュームを求める場合は、日本総合園芸の花瓶プレミアムコースが適しています。
              自社配達便または宅配便で届く花束は、来客時やパーティーの場にもふさわしい格式を備えています。
              ライフスタイルやインテリアのテイストに合わせて、適したサービスをお選びください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/and-plants"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                1位 AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                2位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                3位 日本総合園芸の詳細を見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
            >
              トップページに戻る
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1F2420] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-footer-2026.png" alt="flowerデリ" className="h-11 w-auto" />

              <p className="text-xs text-gray-400">
                花のサブスクを比較し、ご自身に合ったサービス選びを支援します。
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                トップページ
              </a>
              <a href="/#comparison" className="hover:text-white transition-colors">
                比較表
              </a>
              <a href="/#reviews" className="hover:text-white transition-colors">
                サービス詳細
              </a>
              <a href="/#faq" className="hover:text-white transition-colors">
                よくある質問
              </a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">
              当サイトはアフィリエイトプログラムに参加しています。
              リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。
            </p>
            <p className="text-xs text-gray-500 mt-2">
              掲載情報は2026年4月時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}
