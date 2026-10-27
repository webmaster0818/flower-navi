"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクをプレゼントとして贈ることはできますか？",
    a: "はい、届け先を相手の住所にして申し込めば、プレゼントとして贈ることができます。bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます。AND PLANTSは、注文時の配送先を相手の住所、請求先をご自身の住所にします（2026年10月20日公式確認）。日本総合園芸のギフトでの申し込み方法は、公式サイトでご確認ください。",
  },
  {
    q: "母の日に花の定期便を贈る場合、いつまでに申し込めばよいですか？",
    a: "母の日当日に届けたい場合は、少なくとも1週間前までに申し込むことをおすすめします。bloomeeのお試しプラン・グリーンプランは水〜金曜日のお届けで、日付と時間は指定できません。ベーシックプランは水〜日曜日の中から日付と時間帯を指定できます。AND PLANTSは金〜日曜日の中から配送日を選べます（2026年10月20日公式確認）。日本総合園芸は、自社配達便が毎月決まった曜日（当社指定）のお届け、宅配便は当社指定の曜日から希望日を選ぶ方式です（2026年10月27日公式確認）。",
  },
  {
    q: "bloomeeをプレゼントとして申し込むには、どうすればよいですか？",
    a: "お届け先住所の入力画面で「プレゼントとして送る」を選び、贈り先の住所を入力します。送り主の名前も登録できます。2か所以上に届けたい場合は、届け先ごとに異なるメールアドレスで登録します。最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。なお、以前のギフトサービス「bloomee gift」は2023年12月19日に提供を終了しています。",
  },
  {
    q: "花の定期便をプレゼントする場合、相手の住所を知らなくても贈れますか？",
    a: "届け先を相手の住所にして申し込む方法では、相手の住所が必要です。bloomee・AND PLANTSとも、申し込み時に届け先の住所を入力します。なお、LIFFTは定期便のギフトチケット（1か月3,850円・3か月10,450円・6か月20,350円、税込）を販売しています（2026年10月20日公式確認）。受け取り方法は、LIFFTの公式サイトでご確認ください。",
  },
  {
    q: "プレゼントする期間（回数）は選べますか？",
    a: "届け先を相手の住所にして申し込む方法では、贈る期間は贈り主が停止・解約する時期で決まります。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます。AND PLANTSは解約がいつでも可能です（2026年10月20日公式確認）。期間の決まったギフトを贈りたい場合、LIFFTは1か月・3か月・6か月のギフトチケットを販売しています。",
  },
  {
    q: "プレゼント用にメッセージカードを付けることはできますか？",
    a: "AND PLANTSの定期便は、ラッピングとメッセージカードに対応していません。bloomeeは「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）。メッセージカードの可否は、各社の公式サイトでご確認ください。",
  },
  {
    q: "花の定期便のギフトにかかる費用はどれくらいですか？",
    a: "ギフトの費用はサービスとプラン、贈る期間によって異なります。bloomeeの定期便を贈る場合は、お試しプラン（花代980円＋送料385円/回）なら最初の4回で5,460円が目安です。AND PLANTSは1回1,980円（送料無料）からで、3か月（隔週6回）なら約11,880円です。予算に応じてプランと回数を選べるため、3,000円台から数万円台まで幅広く対応できます。",
  },
  {
    q: "贈られた側が、届く花のテイストや頻度を変更することはできますか？",
    a: "届け先を相手の住所にして申し込む方法では、申し込んだ贈り主のアカウントで管理するため、プランや頻度の変更は贈り主が行います。AND PLANTSの注文内容の変更は、決済日前の注文に限りマイページで行えます（2026年10月20日公式確認）。贈り先の好みは、申し込み前に確認しておくと安心です。",
  },
];

/* ─── Gift Service Data ─── */
const giftServices = [
  {
    rank: 1,
    name: "bloomee",
    nameJa: "ブルーミー",
    giftType: "プレゼントとして送る（届け先指定）",
    price: "980円〜/回",
    shipping: "385円〜",
    giftPlan: "最初の4回以降は週単位で停止・再開",
    addressRequired: "必要（申し込み時に入力）",
    messageCard: "送り主の名前を登録可",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    highlight: "お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）。",
    bestFor: "手軽な価格で贈りたい場合、母の日や誕生日のプレゼント",
    detail: "bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、ご自身以外の住所に花を届けられ、送り主の名前を登録できます。2か所以上に届けたい場合は、届け先ごとに異なるメールアドレスで登録します。最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。贈る期間が終わったら、贈り主が停止・解約の手続きを行います。",
  },
  {
    rank: 2,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    giftType: "届け先指定（直接配送）",
    price: "1,980円〜/回",
    shipping: "無料",
    giftPlan: "回数の条件なし（任意で解約）",
    addressRequired: "必要（注文時に指定）",
    messageCard: "定期便は対応なし（2026年10月20日公式確認）",
    url: "/services/and-plants",
    officialUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    highlight: "プロのフローリストによるおしゃれなブーケ。送料無料で6〜8本（2026年10月17日公式確認）。初回クーポンあり。",
    bestFor: "おしゃれな花を贈りたい場合、インテリアに関心のある方へのプレゼント、結婚祝いや新築祝い",
    detail: "AND PLANTSは、注文時に届け先を贈り先の住所に設定することで、ギフトとして利用できます。プロのフローリストが一つずつアレンジしたブーケが届くため、見栄えを重視するギフトに適しています。1回1,980円で送料無料、6〜8本（2026年10月17日公式確認）のボリュームがあります。回数の条件がないため、贈り主の判断で任意の時期に解約でき、3か月のみ・半年のみなど期間を自由に調整できます。初回クーポンを利用すると、さらに費用を抑えて始められます。",
  },
  {
    rank: 3,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    giftType: "ギフトでの申し込み方法は公式サイトに記載なし（2026年10月27日公式確認）",
    price: "1,298円〜/回（自社配達便）",
    shipping: "料金に含む（お届け方法で料金が異なる）",
    giftPlan: "コースにより月1回・月3回・毎週または隔週など",
    addressRequired: "必要（注文時に指定）",
    messageCard: "定期便での記載なし（公式サイトでご確認ください）",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "40コース以上から選べる花の定期便。お届け方法は自社配達便と宅配便の2種類です（2026年10月21日公式確認）。",
    bestFor: "花材やコースを細かく選んで贈りたい場合",
    detail: "日本総合園芸の花の定期便は、40コース以上から選べます。花瓶生け・水盤生け・アレンジメント花材などのコースでは花材が届き、受け取った方が自分で生けて飾ります。完成したアレンジメントやブーケが届くコース（季節のブーケコースなど）もあります（2026年10月23日公式確認）。お届け方法は、毎月決まった曜日に届ける自社配達便（留守の場合は玄関先に用意した水入りのバケツに入れる）と、宅配便の2種類で、料金はコースとお届け方法によって異なります（例：花瓶・水盤バラエティーコース 1回1,298円・自社配達便／2,530円・宅配便、いずれも月3回）（2026年10月21日公式確認）。自社配達便の対象地域は、公式サイトで郵便番号を入力して確認します。コースページには「離れて暮らすご両親へのプレゼントとしてもご利用いただけます」とありますが、ギフトでの申し込み方法とメッセージカードの可否は公式サイトに記載がないため、申し込み前にお問い合わせください（2026年10月27日公式確認）。",
  },
];

/* ─── Occasion Data ─── */
const occasions = [
  {
    name: "母の日",
    timing: "毎年5月の第2日曜日",
    description: "花の定期便は、母の日のギフトとして選ばれる機会が増えています。一度きりの花束と異なり、毎月届く花のサブスクであれば、感謝の気持ちを長く伝えられます。遠方に住むお母様にも配送で届くため、帰省できない場合にも適しています。",
    recommend: "bloomee（「プレゼントとして送る」で申し込み）またはAND PLANTS（おしゃれなブーケ）",
    budget: "LIFFTの定期便ギフトチケットは3か月10,450円・6か月20,350円（税込）（2026年10月23日公式確認）",
  },
  {
    name: "誕生日",
    timing: "相手の誕生日に合わせて開始",
    description: "誕生日プレゼントに花の定期便を贈ると、誕生月だけでなく、その後も毎月花が届く体験を贈ることができます。物ではなく体験を贈りたい方に選ばれています。",
    recommend: "AND PLANTS（おしゃれで特別感がある）またはbloomee（「プレゼントとして送る」で申し込み）",
    budget: "LIFFTの定期便ギフトチケットは3か月10,450円・6か月20,350円（税込）（2026年10月23日公式確認）",
  },
  {
    name: "結婚祝い",
    timing: "結婚報告後、新居への引越し後",
    description: "新生活を彩る花の定期便は、結婚祝いに適しています。新居のインテリアに合う花が届くため、新生活の始まりを華やかに演出できます。カタログギフトと並ぶ新しい選択肢として注目されています。",
    recommend: "AND PLANTS（インテリアになじむアレンジ）または日本総合園芸（40コース以上。花瓶生けなどのコースは花材が届き、自分で生ける）",
    budget: "LIFFTの定期便ギフトチケットは3か月10,450円・6か月20,350円（税込）（2026年10月23日公式確認）",
  },
  {
    name: "退職祝い",
    timing: "退職日前後",
    description: "退職後の新生活を応援する気持ちを込めて、花の定期便を贈る方が増えています。退職後は自宅で過ごす時間が増えるため、定期的に届く花が生活に彩りを添えます。法人からの贈り物にも、個人のプレゼントにも適しています。",
    recommend: "bloomee（「プレゼントとして送る」で申し込み）またはAND PLANTS（届け先を贈り先の住所に設定）",
    budget: "LIFFTの定期便ギフトチケットは3か月10,450円・6か月20,350円（税込）（2026年10月23日公式確認）",
  },
];

/* ─── Main Component ─── */
export default function PresentGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスクをプレゼントに贈る方法\",\"item\":\"https://ohana-delivery.com/guides/present/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスクをプレゼントに贈る方法\",\"description\":\"花のサブスクをプレゼントに贈る方法を解説します。料金・評判・選び方をまとめています。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-27T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/present/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクをプレゼントとして贈ることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、届け先を相手の住所にして申し込めば、プレゼントとして贈ることができます。bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます。AND PLANTSは、注文時の配送先を相手の住所、請求先をご自身の住所にします（2026年10月20日公式確認）。日本総合園芸のギフトでの申し込み方法は、公式サイトでご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"母の日に花の定期便を贈る場合、いつまでに申し込めばよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"母の日当日に届けたい場合は、少なくとも1週間前までに申し込むことをおすすめします。bloomeeのお試しプラン・グリーンプランは水〜金曜日のお届けで、日付と時間は指定できません。ベーシックプランは水〜日曜日の中から日付と時間帯を指定できます。AND PLANTSは金〜日曜日の中から配送日を選べます（2026年10月20日公式確認）。日本総合園芸は、自社配達便が毎月決まった曜日（当社指定）のお届け、宅配便は当社指定の曜日から希望日を選ぶ方式です（2026年10月27日公式確認）。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeをプレゼントとして申し込むには、どうすればよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"お届け先住所の入力画面で「プレゼントとして送る」を選び、贈り先の住所を入力します。送り主の名前も登録できます。2か所以上に届けたい場合は、届け先ごとに異なるメールアドレスで登録します。最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。なお、以前のギフトサービス「bloomee gift」は2023年12月19日に提供を終了しています。\"}},{\"@type\":\"Question\",\"name\":\"花の定期便をプレゼントする場合、相手の住所を知らなくても贈れますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届け先を相手の住所にして申し込む方法では、相手の住所が必要です。bloomee・AND PLANTSとも、申し込み時に届け先の住所を入力します。なお、LIFFTは定期便のギフトチケット（1か月3,850円・3か月10,450円・6か月20,350円、税込）を販売しています（2026年10月20日公式確認）。受け取り方法は、LIFFTの公式サイトでご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"プレゼントする期間（回数）は選べますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届け先を相手の住所にして申し込む方法では、贈る期間は贈り主が停止・解約する時期で決まります。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます。AND PLANTSは解約がいつでも可能です（2026年10月20日公式確認）。期間の決まったギフトを贈りたい場合、LIFFTは1か月・3か月・6か月のギフトチケットを販売しています。\"}},{\"@type\":\"Question\",\"name\":\"プレゼント用にメッセージカードを付けることはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AND PLANTSの定期便は、ラッピングとメッセージカードに対応していません。bloomeeは「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）。メッセージカードの可否は、各社の公式サイトでご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"花の定期便のギフトにかかる費用はどれくらいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ギフトの費用はサービスとプラン、贈る期間によって異なります。bloomeeの定期便を贈る場合は、お試しプラン（花代980円＋送料385円/回）なら最初の4回で5,460円が目安です。AND PLANTSは1回1,980円（送料無料）からで、3か月（隔週6回）なら約11,880円です。予算に応じてプランと回数を選べるため、3,000円台から数万円台まで幅広く対応できます。\"}},{\"@type\":\"Question\",\"name\":\"贈られた側が、届く花のテイストや頻度を変更することはできますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届け先を相手の住所にして申し込む方法では、申し込んだ贈り主のアカウントで管理するため、プランや頻度の変更は贈り主が行います。AND PLANTSの注文内容の変更は、決済日前の注文に限りマイページで行えます（2026年10月20日公式確認）。贈り先の好みは、申し込み前に確認しておくと安心です。\"}}]}" }} />
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
                  <span className="text-[#1F2420] font-medium">花の定期便をプレゼントに贈る方法</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/present/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花の定期便ギフトガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              花の定期便をプレゼントに贈る方法<br className="hidden md:block" />
              母の日・誕生日におすすめのギフト対応サービス
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクは、プレゼントとしても選ばれる機会が増えています。
              当サイトでは、ギフトに対応している花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをご説明します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">ギフト対応</p>
                <p className="text-xl font-bold text-[#2F5B43]">3サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">贈り方</p>
                <p className="text-xl font-bold text-[#2F5B43]">届け先を相手の住所に</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">ギフト予算</p>
                <p className="text-xl font-bold text-[#2F5B43]">3,000円〜</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">人気のシーン</p>
                <p className="text-xl font-bold text-[#2F5B43]">母の日・誕生日</p>
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
                  <li><a href="#intro" className="hover:text-[#2F5B43] transition-colors">1. 花の定期便がプレゼントに選ばれる理由</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#2F5B43] transition-colors">2. ギフト対応サービスの比較表</a></li>
                  <li><a href="#service-detail" className="hover:text-[#2F5B43] transition-colors">3. おすすめギフト対応サービスの詳細</a></li>
                  <li><a href="#occasions" className="hover:text-[#2F5B43] transition-colors">4. シーン別のおすすめ（母の日・誕生日・結婚祝い・退職祝い）</a></li>
                  <li><a href="#how-to-gift" className="hover:text-[#2F5B43] transition-colors">5. 花の定期便をプレゼントする手順</a></li>
                  <li><a href="#tips" className="hover:text-[#2F5B43] transition-colors">6. ギフトを贈る際の注意点</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">7. 花の定期便ギフトに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花の定期便がプレゼントに選ばれる理由
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              花の定期便（花のサブスク）をプレゼントに選ぶ方が増えています。
              一度きりの花束と異なり、毎月届く花のサブスクは、長く楽しめる体験を贈れる点が大きな魅力です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              特に母の日のギフトとして注目されており、遠方に住むお母様へ毎月花を届ける手段として選ばれています。
              誕生日や結婚祝い、退職祝いなど、さまざまなお祝いの場面に利用できるギフトです。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#EDF1EC] rounded-md p-5 text-center">
                <p className="text-2xl font-bold text-[#2F5B43] mb-2">毎月届く</p>
                <p className="text-sm text-[#4A4F49]">一度きりではなく、数か月にわたって花が届く体験型のギフト</p>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5 text-center">
                <p className="text-2xl font-bold text-[#2F5B43] mb-2">手間がかからない</p>
                <p className="text-sm text-[#4A4F49]">申し込み後は自動で配送。花屋に行く手間も不要</p>
              </div>
              <div className="bg-[#EDF1EC] rounded-md p-5 text-center">
                <p className="text-2xl font-bold text-[#2F5B43] mb-2">遠方にも配送可能</p>
                <p className="text-sm text-[#4A4F49]">離れて暮らす相手にも全国配送で届けられる</p>
              </div>
            </div>

            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6 border border-[#DEDAD2]">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">当ページの要点</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ ギフトに対応している花の定期便サービス3社を比較</li>
                <li>・ 母の日・誕生日・結婚祝い・退職祝いなどシーン別のおすすめ</li>
                <li>・ 花の定期便をプレゼントする手順を解説</li>
                <li>・ ギフトを贈る際の注意点を紹介</li>
                <li>・ 2026年4月時点の情報にもとづく</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ギフト対応サービスの比較表
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              当サイトでは、花の定期便をプレゼントとして贈れる3つのサービスを、ギフト対応の仕組み・料金・特徴の観点から比較しています。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">ギフト方式</th>
                    <th className="px-4 py-3 text-right font-medium">料金（1回）</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-center font-medium">相手の住所</th>
                    <th className="px-4 py-3 text-center font-medium">メッセージ</th>
                  </tr>
                </thead>
                <tbody>
                  {giftServices.map((item, i) => (
                    <tr key={i} className={`border-t border-[#DEDAD2] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#2F5B43] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#6B6F6A]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#4A4F49]">{item.giftType}</td>
                      <td className="px-4 py-4 text-right text-[#1F2420]">{item.price}</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === "無料" ? (
                          <span className="text-[#2F5B43] font-medium">無料</span>
                        ) : (
                          <span className="text-[#4A4F49]">{item.shipping}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.addressRequired === "不要（相手が入力）" ? (
                          <span className="inline-block bg-[#2F5B43] text-white text-xs px-2 py-0.5 rounded">不要</span>
                        ) : (
                          <span className="text-xs text-[#6B6F6A]">必要</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-xs text-[#4A4F49]">{item.messageCard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">表の補足</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ bloomeeは、お届け先住所の入力画面で「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）</li>
                <li>・ AND PLANTSは注文時に届け先を贈り先の住所に設定することで、ギフトとして利用できます</li>
                <li>・ 日本総合園芸はお届け方法（自社配達便・宅配便）とコースによって料金が異なります（2026年10月17日公式確認）</li>
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 2026年4月時点の情報です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Service Detail ─── */}
        <section id="service-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              おすすめギフト対応サービスの詳細
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花の定期便をギフトとして贈る際におすすめの3サービスについて、ギフト対応の仕組み・料金・適した利用場面をご説明します。
            </p>

            <div className="space-y-8">
              {giftServices.map((item) => (
                <div key={item.rank} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#FFFBEB] border-b border-[#F59E0B]" : "bg-[#EDF1EC] border-b border-[#C9D6CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-md text-sm font-bold ${
                      item.rank === 1 ? "bg-[#F59E0B] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      "bg-[#B45309] text-white"
                    }`}>
                      {item.rank}位
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2420]">
                        {item.name}（{item.nameJa}）
                      </h3>
                      <p className="text-sm text-[#4A4F49]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">ギフト方式</p>
                        <p className="text-sm font-bold text-[#1F2420]">{item.giftType}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">料金（1回）</p>
                        <p className="text-sm font-bold text-[#2F5B43]">{item.price}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">送料</p>
                        <p className="text-sm font-bold text-[#1F2420]">
                          {item.shipping === "無料" ? (
                            <span className="text-[#2F5B43]">無料</span>
                          ) : (
                            item.shipping
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">ギフトプラン</span>
                        <span className="text-[#1F2420]">{item.giftPlan}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">相手の住所</span>
                        <span className="text-[#1F2420]">{item.addressRequired}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#6B6F6A] w-32 shrink-0">メッセージ</span>
                        <span className="text-[#1F2420]">{item.messageCard}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Best For */}
                    <div className="bg-[#EDF1EC] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#2F5B43]">おすすめの利用場面：</span>
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

        {/* ─── Occasions ─── */}
        <section id="occasions" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              母の日・誕生日・結婚祝い・退職祝いのシーン別のおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花の定期便をプレゼントする際は、贈る場面に合わせてサービスを選ぶと、より喜ばれるギフトになります。
              当サイトでは、代表的な4つの場面ごとに、おすすめのサービスと予算の目安を以下のとおりまとめています。
            </p>

            <div className="space-y-6">
              {occasions.map((occasion, i) => (
                <div key={i} className="bg-white rounded-md border border-[#DEDAD2] overflow-hidden">
                  <div className="bg-[#EDF1EC] px-5 py-3 border-b border-[#C9D6CB]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#1F2420]">{occasion.name}</h3>
                      <span className="text-xs text-[#2F5B43] font-medium">{occasion.timing}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-4">
                      {occasion.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-[#F6F4EF] rounded-lg p-3">
                        <p className="text-xs text-[#6B6F6A] mb-1">おすすめサービス</p>
                        <p className="text-sm text-[#1F2420] font-medium">{occasion.recommend}</p>
                      </div>
                      <div className="bg-[#F6F4EF] rounded-lg p-3">
                        <p className="text-xs text-[#6B6F6A] mb-1">料金の例</p>
                        <p className="text-sm text-[#1F2420] font-medium">{occasion.budget}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Gift ─── */}
        <section id="how-to-gift" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花の定期便をプレゼントする手順
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花の定期便をギフトとして贈る方法は、サービスによって異なります。
              当サイトでは、bloomeeとAND PLANTSの手順をご説明します。どちらも、届け先に贈り先の住所を入力する方法です。日本総合園芸は、ギフトでの申し込み方法が公式サイトに記載されていないため、申し込み前にお問い合わせください（2026年10月27日公式確認）。
            </p>

            {/* Method 1: Present (bloomee) */}
            <div className="mb-8">
              <h3 className="text-base md:text-lg font-bold text-[#1F2420] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold">A</span>
                「プレゼントとして送る」で申し込む（bloomee）
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">bloomee公式サイトでメールアドレスを登録し、プランを選ぶ</p>
                    <p className="text-sm text-[#4A4F49]">現行の定期便のプランは、お試し・グリーン・ベーシックです（2026年10月15日確認）。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">お届け先の入力画面で「プレゼントとして送る」を選ぶ</p>
                    <p className="text-sm text-[#4A4F49]">贈り先の住所を入力し、「プレゼントとして送る」を選ぶと、送り主の名前を登録できます（2026年10月20日公式確認）。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">支払い方法を入力して申し込みを完了する</p>
                    <p className="text-sm text-[#4A4F49]">支払いは贈り主が行い、花は贈り先の住所に届きます。2か所以上に届けたい場合は、届け先ごとに異なるメールアドレスで登録します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">4</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">贈る期間が終わったら停止・解約する</p>
                    <p className="text-sm text-[#4A4F49]">最初の4回分のお届けが約束されており、それ以降は週単位で停止・再開できます（2026年10月20日公式確認）。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2: Direct Delivery */}
            <div className="mb-8">
              <h3 className="text-base md:text-lg font-bold text-[#1F2420] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#2F5B43] text-white text-xs font-bold">B</span>
                届け先指定方式（AND PLANTS）
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">公式サイトでプランを選んで申し込む</p>
                    <p className="text-sm text-[#4A4F49]">AND PLANTSの公式サイトから、贈りたいプランと配送頻度を選択します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">届け先に贈り先の住所を入力</p>
                    <p className="text-sm text-[#4A4F49]">注文フォームの届け先欄に、ご自身の住所ではなく贈り先の住所を入力します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EDF1EC] text-[#2F5B43] text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-[#F6F4EF] rounded-md p-4 border border-[#DEDAD2]">
                    <p className="text-sm font-bold text-[#1F2420] mb-1">支払い完了後、花が贈り先に届く</p>
                    <p className="text-sm text-[#4A4F49]">支払いは贈り主のクレジットカード等で行い、花は贈り先の住所に届きます。贈りたい期間が終了したら解約します。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF1EC] rounded-md p-5">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-2">方式の選び方</h3>
              <p className="text-sm text-[#4A4F49] leading-relaxed">
                どちらの方法も、申し込み時に贈り先の住所が必要です。
                手軽な価格で始めたい場合はbloomee、花のテイストやコースの選択肢を重視する場合はAND PLANTSや日本総合園芸をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ギフトを贈る際の注意点
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花の定期便をプレゼントする際に、事前に確認しておきたい点を以下にまとめています。
              贈った後に想定と異なる事態が生じないよう、ご確認ください。
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-2">相手の生活スタイルを考慮する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  不在が多い方には、ポスト投函に対応したサービス（bloomee）が適しています。在宅時間を確保できる方であれば、宅配便（AND PLANTSなど）でも問題ありません。日本総合園芸の自社配達便は、留守の場合も玄関先に用意した水入りのバケツに花を入れて届けます（2026年10月27日公式確認）。
                  また、花の手入れに慣れていない方には、本数が少なく管理しやすいプランから始めることをおすすめします。
                </p>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-2">配送頻度と期間を慎重に決める</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  毎週届くと、花の管理が負担になる場合があります。初めてのギフトであれば、隔週または月1回をおすすめします。
                  期間も最初は3か月程度とし、贈り先が気に入った場合に延長する方法が確実です。長期間のギフトを負担に感じる方もいるため、贈り先の反応を確認しながら調整してください。
                </p>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-2">花のアレルギーやペットの有無を確認する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  花粉アレルギーをお持ちの方には配慮が必要です。また、猫を飼っている家庭では、ユリ科の花が危険なため注意が必要です。
                  事前にアレルギーやペットの有無を確認しておくと安心です。懸念がある場合は、花の種類を選べるサービスや、届く花の品種が事前にわかるサービスをお選びください。
                </p>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-2">事前に一言伝えておく</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  サプライズで贈る方法もありますが、突然花が届いて贈り先が戸惑う可能性があります。
                  花の定期便を贈ることを事前に伝えておくと、贈り先も受け取りの準備ができます。
                </p>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-base font-bold text-[#1F2420] mb-2">解約のタイミングを把握しておく</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  ギフトを贈る場合は、贈りたい期間が終了した後の解約手続きを忘れないようご注意ください。
                  bloomee・AND PLANTSとも、贈り主が停止・解約の手続きを行います。bloomeeは最初の4回分のお届けが約束されており、それ以降は週単位で停止できます（2026年10月20日公式確認）。
                  カレンダーにリマインダーを設定しておくと確実です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花の定期便ギフトに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F6F4EF] hover:bg-[#EDF1EC] transition-colors text-left"
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
                    <div className="px-5 py-4 bg-white">
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
              花の定期便は継続して花が届くプレゼントです
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花の定期便は、一度きりの花束では実現できない、毎月花が届く喜びを贈れるギフトです。
              母の日、誕生日、結婚祝い、退職祝いなど、さまざまなシーンで活用できます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              手軽な価格で贈りたい場合は、お届け先の入力画面で「プレゼントとして送る」を選べるbloomeeをおすすめします。
              おしゃれなブーケを重視する場合はAND PLANTS、花材やコースを細かく選びたい場合は日本総合園芸が適しています。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              贈る場面や贈り先の生活スタイルに合わせて、サービスをお選びください。
              ギフト対応の詳細は、ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                1位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                2位 AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                3位 日本総合園芸の詳細を見る
              </a>
              <a
                href="/guides/keirou-no-hi/"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                敬老の日の花ギフト特集を見る
              </a>
              <a
                href="/guides/christmas-oshogatsu/"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                クリスマス・お正月の花ギフト特集を見る
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
