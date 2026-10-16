"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";

/** 比較表用：services.ts（単一データソース）から安い順 */
const COMPARE_ROWS = [...SERVICES].sort((a, b) => a.cheapest.price - b.cheapest.price);
const shortName = (n: string) => n.replace(/（.*）/, "");

/* ─── Diagnosis Logic ─── */
type DiagnosisAnswer = {
  q1: string;
  q2: string;
  q3: string;
};

function getRecommendation(answers: DiagnosisAnswer): string {
  const { q1, q2, q3 } = answers;
  if (q2 === "cost") return "medelu";
  if (q1 === "beginner" && q3 === "post") return "bloomee";
  if (q1 === "stylish") return "andplants";
  if (q2 === "freshness") return "hananoteikibin";
  if (q3 === "flexible") return "hanameku";
  return "bloomee";
}

const recommendationMap: Record<string, { name: string; reason: string }> = {
  bloomee: {
    name: "bloomee（ブルーミー）",
    reason:
      "花代980円から始められ、お試しプランはポスト投函で受け取りも簡単。最初の4回は受け取りが必要です。",
  },
  medelu: {
    name: "medelu（メデル）",
    reason:
      "Mini 748円（税込・送料込み）からと、比較した5社の中で最も安い価格です。費用を抑えたい方に適しています。",
  },
  andplants: {
    name: "AND PLANTS（アンドプランツ）",
    reason:
      "送料込み1,980円〜で6〜8本からとボリュームがあり、いつでも解約できます。",
  },
  hananoteikibin: {
    name: "花の定期便（日本総合園芸）",
    reason:
      "40以上のコースから器や飾り方に合わせて選べます。関西近郊は自社配達便で届きます。",
  },
  hanameku: {
    name: "hanameku（ハナメク）",
    reason:
      "ライトは税込・送料込み1,210円でポスト投函です。初回（1回目）は解約できない点にご注意ください。",
  },
};

/* ─── Service Data ───
 * 2026-10-15: 料金・プラン名を各公式サイトの確認値（services.ts／各サービスページ）に合わせて全面修正。
 * bloomee の旧プラン名（体験／レギュラー／リッチ）、出典の無い「会員数10万人」「提携花屋200店舗」、
 * hanameku の終了プラン（スタンダード）・「回数縛りなし」（初回は解約不可）、日本総合園芸の旧料金を削除。 */
const services = [
  {
    id: "bloomee",
    href: "/services/bloomee/",
    name: "bloomee（ブルーミー）",
    tagline: "ポスト投函で始めやすい定番サービス",
    image: "/images/service-bloomee.jpg",
    overview:
      "bloomee（ブルーミー・旧ブルーミーライフ）は、ユーザーライク株式会社が運営するお花の定期便です。公式サイトでは「お花のお届け実績3,000万本以上（自社調べ）」と表記されています。お試しプラン・グリーンプランはポストに半投函の形で届くため、不在が多い方でも受け取れます。最初の4回は受け取りが必要で、送料が毎回別にかかる点を申し込み前にご確認ください（2026年10月15日 公式確認）。",
    plans: [
      { name: "お試しプラン", price: "980円＋送料385円/回", flowers: "4本以上（約18〜25cm）", delivery: "毎週（4回目以降は隔週も可）" },
      { name: "グリーンプラン", price: "980円＋送料385円/回", flowers: "グリーン中心（約18〜25cm）", delivery: "毎週（4回目以降は隔週も可）" },
      { name: "ベーシックプラン", price: "2,180円＋送料550円/回", flowers: "8本以上（約25〜30cm）", delivery: "毎週（4回目以降は隔週も可）" },
    ],
    shipping: "別途385円（ベーシックは550円）",
    deliveryMethod: "ポスト投函（お試し・グリーン）／手渡し（ベーシック）",
    cancellation: "最初の4回は受け取りが必要（4回未満は途中解約料）",
    pros: [
      "お試し・グリーンはポスト投函で不在でも受け取れる",
      "花代980円から始められる",
      "4回目以降は隔週への変更や、週単位のストップ・再開ができる",
      "定期便は2週間以内の連絡で返金・交換の対象（特商法）",
    ],
    cons: [
      "送料が毎回別にかかる（お試しは実質1,365円/回）",
      "最初の4回は受け取りが必要",
      "お試し・グリーンは日時指定ができない（水〜金曜着）",
    ],
    recommended: [
      "お花のサブスクが初めての方",
      "不在が多くポスト投函で受け取りたい方",
      "4回は続ける前提で始められる方",
    ],
  },
  {
    id: "medelu",
    href: "/services/medelu/",
    name: "medelu（メデル）",
    tagline: "送料込み748円からの低価格プラン",
    image: "/images/service-medelu.jpg",
    overview:
      "medelu（メデル）は、Mini 748円（税込・送料込み）から始められるお花の定期便です。部屋のテイストに合わせてANYROOM・NATURAL・MODERNのコースを選び、Mini〜Basicの4サイズから量を選べます。Mini・Liteはポスト投函で届きます（2026年10月14日 公式確認）。",
    plans: [
      { name: "Mini", price: "748円/回", flowers: "3〜4本", delivery: "ポスト投函" },
      { name: "Lite", price: "1,330円/回", flowers: "5〜6本", delivery: "ポスト投函" },
      { name: "Lite+", price: "1,650円/回", flowers: "5〜7本", delivery: "宅配" },
      { name: "Basic", price: "2,330円/回", flowers: "6〜9本", delivery: "宅配" },
    ],
    shipping: "込み（北海道・東北のLite以上は遠隔地送料あり）",
    deliveryMethod: "ポスト投函（Mini・Lite）／宅配（Lite+・Basic）",
    cancellation: "最低回数の公式記載なし（決済日前日の木曜までに解約）",
    pros: [
      "Mini 748円（税込・送料込み）から始められる",
      "部屋のテイストに合わせてコースを選べる",
      "最低回数の公式記載なし。スキップは3回先まで",
      "枯れていたら送料を含め全額返金（到着当日中に写真で申請）",
    ],
    cons: [
      "Miniは3〜4本と小ぶり",
      "お届け日の指定ができない",
      "品質保証は返金のみで交換はない",
    ],
    recommended: [
      "とにかく送料込みの安さを重視する方",
      "お部屋のインテリアに合うお花が欲しい方",
      "回数の縛りを気にせず始めたい方",
    ],
  },
  {
    id: "andplants",
    href: "/services/and-plants/",
    name: "AND PLANTS（アンドプランツ）",
    tagline: "観葉植物ブランドが手がける花の定期便",
    image: "/images/service-andplants.jpg",
    overview:
      "AND PLANTS（アンドプランツ）は、株式会社Domuzが運営する観葉植物の通販ブランドです。花の定期便は2026年5月から「AND FLOWER」ブランドで展開されています。送料込み1,980円〜の3サイズで、1週・2週・4週ごとから頻度を選べ、解約はいつでも可能です（2026年10月14日 公式確認）。",
    plans: [
      { name: "Standard", price: "1,980円/回", flowers: "6〜8本", delivery: "1週・2週・4週ごと" },
      { name: "Medium", price: "2,980円/回", flowers: "8〜10本", delivery: "1週・2週・4週ごと" },
      { name: "Large", price: "4,980円/回", flowers: "14〜18本", delivery: "1週・2週・4週ごと" },
    ],
    shipping: "込み（クール便オプションは別料金）",
    deliveryMethod: "宅配便（金〜日曜から選択）",
    cancellation: "最低回数の記載なし・いつでも解約可",
    pros: [
      "送料込み1,980円〜で、追加費用がわかりやすい",
      "定期便ページに初回500円オフクーポンの案内あり",
      "1週・2週・4週ごとから頻度を選べる",
      "解約はいつでも可能",
    ],
    cons: [
      "bloomee・medeluの最安プランより高め",
      "ポスト投函には非対応",
      "生花の交換申請は到着後1日以内",
    ],
    recommended: [
      "ボリュームのあるお花を飾りたい方",
      "縛りなしで始めたい方",
      "週末に受け取りたい方",
    ],
  },
  {
    id: "hananoteikibin",
    href: "/services/nihon-sogo-engei/",
    name: "花の定期便（日本総合園芸）",
    tagline: "40以上のコースから選べる",
    image: "/images/service-hananoteikibin.jpg",
    overview:
      "日本総合園芸の「花の定期便」は、切り花・水盤生け・アレンジメント・鉢花・観葉植物など「40コース以上」（公式表記）から選べる定期便です。関西近郊は専属スタッフの自社配達便、そのほかの対象エリアはヤマト運輸の宅配便で届き、料金はお届け方法によって異なります（2026年10月15日 公式確認）。",
    plans: [
      { name: "A. 花瓶・水盤バラエティー", price: "1,298円／2,530円/回", flowers: "公式で確認", delivery: "月3回（自社配達便／宅配便）" },
      { name: "B. 花瓶スターター", price: "1,540円／2,750円/回", flowers: "公式で確認", delivery: "月3回（自社配達便／宅配便）" },
      { name: "W. 花瓶・水盤月2回", price: "1,947円／3,300円/回", flowers: "公式で確認", delivery: "月2回（自社配達便／宅配便）" },
    ],
    shipping: "お届け方法で料金が異なる",
    deliveryMethod: "自社配達便（関西近郊）／宅配便（ヤマト運輸）",
    cancellation: "月単位でメール・電話で中止（最低回数の記載は確認できず）",
    pros: [
      "40以上のコースから飾り方に合わせて選べる",
      "関西近郊は自社配達便で、留守の場合もバケツに入れて届けられる",
      "届く花に手引書が同封される",
    ],
    cons: [
      "北海道・東北・沖縄などは配送対象外",
      "宅配便は同じコースでも1回あたりが高い",
      "ポスト投函には非対応",
    ],
    recommended: [
      "関西近郊にお住まいの方",
      "生け方や器に合わせて本格的に楽しみたい方",
      "鉢花や観葉植物の定期便も検討したい方",
    ],
  },
  {
    id: "hanameku",
    href: "/services/hanameku/",
    name: "hanameku（ハナメク）",
    tagline: "税込・送料込み1,210円でポストに届く",
    image: "/images/service-hanameku.jpg",
    overview:
      "hanameku（ハナメク）は、and factory株式会社が運営するお花の定期便です。ライトプランは税込・送料込み1,210円でポスト投函、セルフアレンジは宅配で届きます。最低回数の記載はありませんが、初回（定期1回目）は解約できず、解約・スキップの締切はお届け予定日の10日前です（2026年10月14日 公式確認）。",
    plans: [
      { name: "ライトプラン", price: "1,210円/回", flowers: "3〜4本", delivery: "ポスト投函" },
      { name: "セルフアレンジ S", price: "1,958円/回", flowers: "1〜8本", delivery: "宅配" },
      { name: "セルフアレンジ L", price: "3,278円/回", flowers: "1〜12本", delivery: "宅配" },
    ],
    shipping: "込み（セルフアレンジは地域別の追加送料あり）",
    deliveryMethod: "ポスト投函（ライト）／宅配（セルフアレンジ）",
    cancellation: "初回は解約不可・締切はお届け予定日の10日前",
    pros: [
      "ライトは税込・送料込み1,210円で追加費用なし",
      "ライトはポスト投函で受け取りが楽",
      "傷んでいたら到着日を含め3日以内の申請で返金または代替品",
    ],
    cons: [
      "初回（1回目）は解約できない",
      "解約・スキップの締切が10日前と早い",
      "セルフアレンジは沖縄・離島に配送不可",
    ],
    recommended: [
      "送料込みの定額で始めたい方",
      "ポストで受け取りたい方",
      "自分で生けるのも楽しみたい方（セルフアレンジ）",
    ],
  },
];

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "お花の定期便とは何ですか？",
    a: "お花の定期便（花のサブスク）とは、定期的に自宅にお花が届くサブスクリプションサービスです。専門のスタッフが選んだ季節のお花が毎回届くため、花屋に行く手間がかからず、常に新鮮なお花を楽しめます。",
  },
  {
    q: "お花の定期便の相場はどれくらいですか？",
    a: "お花の定期便の相場は、1回あたり700円〜5,000円程度です。最安はmedeluの748円/回、bloomeeは花代980円/回からとなっています。送料込みの総額で比較することが大切です。",
  },
  {
    q: "ポスト投函と手渡し、どちらがいいですか？",
    a: "不在が多い方には、ポスト投函をおすすめします。ポスト投函は、bloomee（お試し・グリーンプラン）、medelu（Mini・Lite）、hanameku（ライトプラン）などで対応しています。ただし、ポスト投函は花のボリュームに限りがあるため、大きなアレンジを楽しみたい方は、手渡しのサービスをお選びください。",
  },
  {
    q: "お花はどれくらい持ちますか？",
    a: "一般的に、届いたお花は適切に手入れをすれば、1週間〜10日程度楽しめます。季節や花の種類によって差があるため、付属の栄養剤を使い、水をこまめに替えることが大切です。",
  },
  {
    q: "解約は簡単にできますか？",
    a: "サービスによって異なります。medeluとAND PLANTSは最低回数の記載がなく、hanamekuは初回（1回目）のみ解約できません。bloomeeは最初の4回の受け取りが必要で、4回未満の解約は途中解約料がかかります。締切はサービスごとに異なるため、各サービスの解約ガイドで確認してください。",
  },
  {
    q: "届くお花の種類は選べますか？",
    a: "基本的にお花の種類はプロにおまかせとなります。ただし、medeluではお部屋の雰囲気に合わせた3コース（ANYROOM/MODERN/NATURAL）から選べるため、好みのテイストに近いお花が届きやすくなっています。",
  },
  {
    q: "お花が傷んで届いた場合はどうなりますか？",
    a: "多くのサービスに品質保証制度があります。例えば、bloomeeの定期便は到着から2週間以内の連絡で返金・交換の対象（公式・特定商取引法に基づく表記）、medeluは到着当日中に写真を送れば全額返金です。各サービスの保証制度は、申し込み前にご確認ください。",
  },
  {
    q: "一人暮らしでも利用できますか？",
    a: "利用できます。一人暮らしの方にも適しており、ポスト投函に対応したbloomeeやmedeluであれば不在時でも受け取れます。少量のプランを選べば、お花の手入れの負担も少なく楽しめます。",
  },
  {
    q: "プレゼントとして送ることはできますか？",
    a: "一部のサービスではギフト対応が可能です。bloomeeは申込時に「プレゼントとして送る」を選ぶと自分以外の住所に届けられ、AND PLANTSの定期便も配送先を相手の住所にすれば贈れます（ラッピング・メッセージカードは不可）。いずれも2026年10月15日に公式サイトで確認しました。",
  },
  {
    q: "お花の定期便を選ぶ際に最も重要なポイントは？",
    a: "最も重要なのは、続けやすさです。料金、送料、届く頻度、受け取り方法、解約条件の5つを総合的に確認し、ご自身の生活に合ったサービスをお選びください。まずは安いプランやお試しから始めることをおすすめします。",
  },
];

/* ─── Purpose Recommendations ─── */
const purposes = [
  {
    title: "一人暮らしの方に",
    icon: "🏠",
    description: "不在でも受け取れるポスト投函に対応し、少量から始められるサービスが適しています。",
    services: ["bloomee お試しプラン（980円+送料385円）", "medelu Miniコース（748円・送料込み）"],
    best: "medelu",
  },
  {
    title: "プレゼント用に",
    icon: "🎁",
    description: "ボリュームのある華やかなアレンジを選べ、ギフトに対応しているサービスが適しています。",
    services: ["AND PLANTS Mプラン以上（2,980円〜）", "bloomee ベーシックプラン（2,180円+送料550円）"],
    best: "AND PLANTS",
  },
  {
    title: "おしゃれにこだわる方に",
    icon: "✨",
    description: "フローリストによるアレンジが届くサービスが適しています。",
    services: ["AND PLANTS（全プラン）", "medelu MODERNコース（748円〜）"],
    best: "AND PLANTS",
  },
  {
    title: "費用を抑えたい方に",
    icon: "💰",
    description: "送料込みの総額で比較し、最も費用を抑えて続けられるサービスをお選びください。",
    services: ["medelu Miniコース（748円・送料込み）", "hanameku ライトプラン（1,210円・送料込み）"],
    best: "medelu",
  },
  {
    title: "傷んで届くのが心配な方に",
    icon: "🌿",
    description: "届いた花の傷みに対する保証の条件と、手元に届くまでの配送方法でお選びください。",
    services: ["medelu（枯れていたら送料込みで全額返金）", "花の定期便（日本総合園芸・関西近郊は自社配達便）"],
    best: "medelu",
  },
];

/* ─── How to Choose ─── */
const howToChoose = [
  {
    title: "料金と送料の総額で比較する",
    description:
      "料金だけでなく、送料を含めた総額で比較してください。例えば、bloomeeは花代980円/回に加えて送料385円が別途かかります。一方、medeluは748円/回で送料込みです。月2回届く場合の月額の総額で計算すると、実質的な費用を比較できます。",
  },
  {
    title: "届き方（ポスト投函 vs 手渡し）を確認する",
    description:
      "日中不在がちな方には、ポスト投函に対応したサービスをおすすめします。ただし、ポスト投函は花のサイズに制限があるため、ボリュームのあるお花を希望する場合は、手渡しで配送するサービスをお選びください。",
  },
  {
    title: "解約条件・最低受取回数を確認する",
    description:
      "お花の定期便には、最低受取回数が設定されているものがあります。bloomeeは4回の受け取りが必要ですが、medelu・AND PLANTS・hanamekuは回数の縛りがありません。初めて利用する方は、回数の縛りがないサービスをおすすめします。",
  },
  {
    title: "花の本数とボリュームを確認する",
    description:
      "同じ価格帯でも、届く花の本数はサービスによって異なります。テーブルに飾る場合は3〜5本で十分ですが、リビングを華やかにしたい場合は、8本以上届くプランをおすすめします。",
  },
  {
    title: "品質保証制度の有無を確認する",
    description:
      "配送中にお花が傷む場合もあります。品質保証があるサービスであれば、写真を送ることで再送や返金に対応してもらえます。bloomeeなどは、保証制度が充実しています。",
  },
];

/* ─── Component ─── */
export default function HomeClient() {
  const [diagnosisStep, setDiagnosisStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswer>({
    q1: "",
    q2: "",
    q3: "",
  });
  const [result, setResult] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnswer = (question: keyof DiagnosisAnswer, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);

    if (question === "q1") setDiagnosisStep(2);
    else if (question === "q2") setDiagnosisStep(3);
    else if (question === "q3") {
      setResult(getRecommendation(newAnswers));
      setDiagnosisStep(4);
    }
  };

  const resetDiagnosis = () => {
    setDiagnosisStep(0);
    setAnswers({ q1: "", q2: "", q3: "" });
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50">
        {/* 景表法対応 */}
        <div className="bg-[#F5F0E8] text-center py-1">
          <span className="text-[10px] text-[#9B8F87]">PRを含みます</span>
        </div>
        <div className="bg-white/80 backdrop-blur-md border-b border-[#E8E0D8]">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo-flwdeli-a1-trimmed.png" alt="flowerデリ" className="h-16 md:h-20 w-auto" />
          </a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-[#6B5F57]">
            <a href="#diagnosis" className="hover:text-[#C4877A] transition-colors">診断</a>
            <a href="#comparison" className="hover:text-[#C4877A] transition-colors">比較表</a>
            <a href="#reviews" className="hover:text-[#C4877A] transition-colors">サービス詳細</a>
            <a href="#how-to-choose" className="hover:text-[#C4877A] transition-colors">選び方</a>
            <a href="#faq" className="hover:text-[#C4877A] transition-colors">FAQ</a>
          </nav>
          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニュー"
          >
            <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E0D8]">
            <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">ページ内</p>
              <a href="#diagnosis" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">診断</a>
              <a href="#comparison" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">比較表</a>
              <a href="#reviews" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">サービス詳細</a>
              <a href="#how-to-choose" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">選び方</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">FAQ</a>

              <div className="border-t border-[#E8E0D8] my-3" />
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">サービス詳細</p>
              <a href="/services/bloomee/" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">bloomee（ブルーミー）</a>
              <a href="/services/medelu/" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">medelu（メデル）</a>
              <a href="/services/and-plants/" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">AND PLANTS</a>
              <a href="/services/nihon-sogo-engei/" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">花の定期便（日本総合園芸）</a>
              <a href="/services/hanameku/" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">hanameku（ハナメク）</a>

              <div className="border-t border-[#E8E0D8] my-3" />
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">ガイド</p>
              <a href="/guides/beginner" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">初心者ガイド</a>
              <a href="/guides/flower-care" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">お花のお手入れ方法</a>
              <a href="/guides/hitorigurashi" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">一人暮らしのお花</a>
              <a href="/guides/present" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">プレゼント向け</a>
              <a href="/guides/oshare" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">おしゃれに飾る</a>
              <a href="/guides/seasonal-flowers" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">季節のお花</a>
              <a href="/guides/kaiyaku" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">解約方法</a>

              <div className="border-t border-[#E8E0D8] my-3" />
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">比較記事</p>
              <a href="/compare/bloomee-vs-medelu" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">bloomee vs medelu</a>
              <a href="/compare/cheap" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">安いお花の定期便</a>
              <a href="/compare/post-delivery" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">ポスト投函対応</a>
            </nav>
          </div>
        )}
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="花のある暮らし"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-0">
            <div className="max-w-xl">
              <p className="text-sm md:text-base text-[#C4877A] font-medium mb-4 tracking-widest uppercase">
                Flower Subscription Guide
              </p>
              <h1 className="heading-serif text-4xl md:text-6xl font-bold text-[#3D3632] mb-6 leading-[1.2]">
                お花の定期便の
                <br />
                比較ガイド
                <span className="block text-xl md:text-2xl font-bold text-[#C4877A] mt-4 leading-snug">
                  お花の定期便おすすめ5社の比較
                </span>
              </h1>
              <p className="text-base md:text-lg text-[#6B5F57] leading-relaxed mb-10 max-w-md">
                人気のお花の定期便5社を比較しています。
                ご自身の生活に合った
                サービス選びにご活用ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#diagnosis"
                  className="inline-block bg-[#C4877A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#A86B5E] transition-all hover:shadow-lg text-center"
                >
                  30秒で診断する
                </a>
                <a
                  href="#comparison"
                  className="inline-block bg-white/80 text-[#3D3632] border border-[#E8E0D8] px-8 py-4 rounded-full font-medium hover:bg-white transition-all text-center"
                >
                  比較表を確認する
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Flower Divider ─── */}
        <div className="flower-divider">
          <span className="text-[#C4877A] text-lg">❀</span>
        </div>

        {/* ─── Quick Diagnosis ─── */}
        <section id="diagnosis" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">DIAGNOSIS</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                ご自身に合ったサービスの診断
              </h2>
              <p className="text-[#6B5F57]">
                3つの質問に答えると、おすすめのお花の定期便がわかります
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/section-diagnosis.jpg"
                alt=""
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="bg-white border border-[#E8E0D8] border-t-0 rounded-b-3xl p-8 md:p-12 shadow-sm">
                {diagnosisStep === 0 && (
                  <div className="text-center">
                    <p className="text-lg text-[#3D3632] mb-8">
                      3つの質問で<br className="md:hidden" />適したサービスを確認できます
                    </p>
                    <button
                      onClick={() => setDiagnosisStep(1)}
                      className="bg-[#C4877A] text-white px-10 py-4 rounded-full font-medium hover:bg-[#A86B5E] transition-all hover:shadow-lg"
                    >
                      診断スタート
                    </button>
                  </div>
                )}

                {diagnosisStep === 1 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm flex items-center justify-center font-medium">1</span>
                      <span className="text-sm text-[#C4877A]">質問 1/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#3D3632] mb-6">
                      お花の定期便に求めることを選んでください
                    </p>
                    <div className="grid gap-3">
                      {[
                        { value: "beginner", label: "手軽に始めたい（初心者）" },
                        { value: "stylish", label: "おしゃれなお花が欲しい" },
                        { value: "quality", label: "品質・鮮度にこだわりたい" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer("q1", opt.value)}
                          className="text-left bg-[#FBF8F4] border border-[#E8E0D8] rounded-2xl px-6 py-5 hover:border-[#C4877A] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 2 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm flex items-center justify-center font-medium">2</span>
                      <span className="text-sm text-[#C4877A]">質問 2/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#3D3632] mb-6">
                      最も重視する点を選んでください
                    </p>
                    <div className="grid gap-3">
                      {[
                        { value: "cost", label: "価格（できるだけ安く）" },
                        { value: "freshness", label: "鮮度（長持ちするお花）" },
                        { value: "design", label: "デザイン（おしゃれさ）" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer("q2", opt.value)}
                          className="text-left bg-[#FBF8F4] border border-[#E8E0D8] rounded-2xl px-6 py-5 hover:border-[#C4877A] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 3 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm flex items-center justify-center font-medium">3</span>
                      <span className="text-sm text-[#C4877A]">質問 3/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#3D3632] mb-6">
                      希望する受け取り方法を選んでください
                    </p>
                    <div className="grid gap-3">
                      {[
                        { value: "post", label: "ポスト投函（不在でも受け取れる）" },
                        { value: "hand", label: "手渡し（大きなアレンジも可能）" },
                        { value: "flexible", label: "どちらでもよい" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer("q3", opt.value)}
                          className="text-left bg-[#FBF8F4] border border-[#E8E0D8] rounded-2xl px-6 py-5 hover:border-[#C4877A] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 4 && result && (
                  <div className="text-center">
                    <p className="text-sm text-[#C4877A] tracking-widest mb-3">
                      RESULT
                    </p>
                    <p className="text-lg text-[#6B5F57] mb-2">
                      おすすめのサービス
                    </p>
                    <p className="heading-serif text-3xl md:text-4xl font-bold text-[#C4877A] mb-5">
                      {recommendationMap[result]?.name}
                    </p>
                    <p className="text-[#6B5F57] mb-8 max-w-md mx-auto leading-relaxed">
                      {recommendationMap[result]?.reason}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`#${result}`}
                        className="inline-block bg-[#C4877A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#A86B5E] transition-all"
                      >
                        詳細を確認する
                      </a>
                      <button
                        onClick={resetDiagnosis}
                        className="inline-block bg-white text-[#3D3632] border border-[#E8E0D8] px-8 py-3 rounded-full font-medium hover:bg-[#FBF8F4] transition-all"
                      >
                        もう一度診断する
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Flower Divider ─── */}
        <div className="flower-divider bg-[#FBF8F4]">
          <span className="text-[#C4877A] text-lg">❀</span>
        </div>

        {/* ─── Comparison Table ─── */}
        <section id="comparison" className="py-20 bg-[#FBF8F4]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">COMPARISON</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                お花の定期便 主要4社の料金比較表
              </h2>
              <p className="text-[#6B5F57]">
                料金・送料・届き方を一覧で比較できます
              </p>
            </div>

            <div className="table-wrapper rounded-2xl shadow-sm bg-white overflow-hidden">
              <table className="comparison-table w-full">
                <thead>
                  <tr>
                    <th className="rounded-tl-2xl">サービス</th>
                    <th>最安料金</th>
                    <th>送料</th>
                    <th>届き方</th>
                    <th>花の本数</th>
                    <th>頻度</th>
                    <th className="rounded-tr-2xl">解約条件</th>
                  </tr>
                </thead>
                {/* 単一データソース(services.ts)から生成。価格はすべて公式確認(2026-06-27) */}
                <tbody>
                  {COMPARE_ROWS.map((s) => (
                    <tr key={s.id}>
                      <td className="font-medium text-[#3D3632]"><a href={s.servicePath} className="underline decoration-[#E8E0D8] underline-offset-4 hover:text-[#C4877A]">{shortName(s.name)}</a></td>
                      <td className={s.cheapest.price === COMPARE_ROWS[0].cheapest.price ? "text-[#C4877A] font-medium" : ""}>
                        {s.cheapest.price.toLocaleString("ja-JP")}円/回
                      </td>
                      <td className={s.shippingIncluded ? "text-[#7A9E7E] font-medium" : ""}>
                        {s.shippingIncluded ? "込み" : "要確認"}
                      </td>
                      <td>{s.cheapest.postDelivery ? "ポスト投函" : "宅配/手渡し"}</td>
                      <td>{s.cheapest.flowers}</td>
                      <td>隔週〜</td>
                      <td className={s.minDeliveries ? "" : "text-[#7A9E7E]"}>
                        {s.minDeliveries ? `${s.minDeliveries}回縛り` : "縛りなし"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#9B8F87] mt-6 text-center">
              ※ 料金は税込み表示です。ご利用前に、公式サイトにて最新の料金をご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Individual Service Reviews ─── */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">REVIEWS</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                各サービスの詳細
              </h2>
              <p className="text-[#6B5F57]">
                5つのサービスの特徴をご説明します
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, idx) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="service-card scroll-mt-24"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8E0D8]">
                    {/* Service Image Header */}
                    <div className="relative h-56 md:h-72 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="service-card-img w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <p className="text-white/80 text-sm mb-1">
                          {idx + 1}. {service.tagline}
                        </p>
                        <h3 className="heading-serif text-2xl md:text-3xl font-bold text-white">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 md:p-10 space-y-8">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg font-bold text-[#3D3632] mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-[#C4877A] rounded-full inline-block" />
                          サービス概要
                        </h4>
                        <p className="text-[#6B5F57] leading-[1.9]">
                          {service.overview}
                        </p>
                      </div>

                      {/* Pricing Table */}
                      <div>
                        <h4 className="text-lg font-bold text-[#3D3632] mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-[#C4877A] rounded-full inline-block" />
                          料金プラン
                        </h4>
                        <div className="table-wrapper rounded-xl overflow-hidden border border-[#E8E0D8]">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-[#FBF8F4]">
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">プラン</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">料金</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">花の本数</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">配送頻度</th>
                              </tr>
                            </thead>
                            <tbody>
                              {service.plans.map((plan) => (
                                <tr key={plan.name} className="border-t border-[#E8E0D8]">
                                  <td className="px-5 py-3.5">{plan.name}</td>
                                  <td className="px-5 py-3.5 font-medium text-[#C4877A]">{plan.price}</td>
                                  <td className="px-5 py-3.5">{plan.flowers}</td>
                                  <td className="px-5 py-3.5">{plan.delivery}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#6B5F57]">
                          <span className="bg-[#FBF8F4] px-3 py-1.5 rounded-full">送料: <strong>{service.shipping}</strong></span>
                          <span className="bg-[#FBF8F4] px-3 py-1.5 rounded-full">届き方: <strong>{service.deliveryMethod}</strong></span>
                          <span className="bg-[#FBF8F4] px-3 py-1.5 rounded-full">解約: <strong>{service.cancellation}</strong></span>
                        </div>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#E8F0E9] rounded-2xl p-6">
                          <h4 className="font-bold text-[#5C7F60] mb-4">メリット</h4>
                          <ul className="space-y-3">
                            {service.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-[#3D3632] text-sm leading-relaxed">
                                <span className="text-[#7A9E7E] mt-0.5 shrink-0">&#10003;</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-[#F9F2F0] rounded-2xl p-6">
                          <h4 className="font-bold text-[#A86B5E] mb-4">デメリット</h4>
                          <ul className="space-y-3">
                            {service.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-[#3D3632] text-sm leading-relaxed">
                                <span className="text-[#C4877A] mt-0.5 shrink-0">&#9651;</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="bg-[#FBF8F4] rounded-2xl p-6 border border-[#E8E0D8]">
                        <h4 className="font-bold text-[#3D3632] mb-3">
                          適している方
                        </h4>
                        <ul className="space-y-2">
                          {service.recommended.map((rec) => (
                            <li key={rec} className="flex items-start gap-3 text-[#6B5F57] text-sm">
                              <span className="text-[#C4877A] shrink-0">&#9656;</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={service.href}
                        className="block text-center bg-white border border-[#C4877A] text-[#C4877A] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F9F2F0] transition"
                      >
                        {service.name}の口コミ・評判と料金の詳細 →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Purpose-based Recommendations ─── */}
        <section id="purpose" className="py-20 bg-[#FBF8F4]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">FOR YOU</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                目的別のおすすめサービス
              </h2>
              <p className="text-[#6B5F57]">
                目的に合ったサービスをお選びください
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {purposes.map((purpose) => (
                <div
                  key={purpose.title}
                  className="bg-white rounded-2xl p-7 hover:shadow-md transition-all border border-[#E8E0D8] group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{purpose.icon}</span>
                    <h3 className="text-lg font-bold text-[#3D3632]">
                      {purpose.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B5F57] mb-5 leading-relaxed">
                    {purpose.description}
                  </p>
                  <div className="space-y-2 mb-5">
                    {purpose.services.map((s) => (
                      <p key={s} className="text-sm text-[#6B5F57] flex items-start gap-2">
                        <span className="text-[#C4877A] shrink-0">-</span>
                        {s}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[#C4877A] bg-[#F9F2F0] inline-block px-3 py-1 rounded-full">
                    おすすめ: {purpose.best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">HOW TO CHOOSE</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                お花の定期便の選び方
              </h2>
              <p className="text-[#6B5F57]">
                選ぶ際に確認すべき5つのポイント
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/section-guide.jpg"
                alt=""
                className="w-full h-40 md:h-52 object-cover rounded-3xl mb-12"
              />
              <div className="space-y-8">
                {howToChoose.map((item, idx) => (
                  <div key={item.title} className="flex gap-5 md:gap-8 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-[#C4877A] text-white flex items-center justify-center font-bold text-lg heading-serif">
                      {idx + 1}
                    </div>
                    <div className="flex-1 pb-8 border-b border-[#E8E0D8] last:border-b-0">
                      <h3 className="text-lg font-bold text-[#3D3632] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#6B5F57] leading-[1.9]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 bg-[#FBF8F4]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">FAQ</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                よくある質問
              </h2>
              <p className="text-[#6B5F57]">
                お花の定期便に関するよくある質問と回答です
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D8]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FBF8F4] transition-colors"
                  >
                    <span className="font-medium text-[#3D3632]">
                      Q. {item.q}
                    </span>
                    <span
                      className={`text-[#C4877A] text-xl shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-[#6B5F57] leading-[1.9] border-t border-[#E8E0D8] pt-4">
                      A. {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="relative py-20 overflow-hidden">
          <img
            src="/images/section-lifestyle.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-[#C4877A] tracking-widest mb-3">SUMMARY</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-8">
              ご自身に合ったお花の定期便を<br className="hidden md:inline" />お選びください
            </h2>
            <div className="text-left bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 mb-10 text-[#6B5F57] leading-[1.9] space-y-4 shadow-sm border border-[#E8E0D8]">
              <p>
                お花の定期便は、日々の暮らしに彩りを添えるサービスです。
                本ページでは人気の5社を比較しましたが、それぞれに特徴があり、一概に最適なサービスを決めることはできません。
              </p>
              <p>大切なのは、ご自身の生活に合ったサービスを選ぶことです。</p>
              <ul className="space-y-3 my-4">
                {[
                  { label: "初めてで手軽に始めたい場合", value: "bloomee" },
                  { label: "費用を最優先する場合", value: "medelu（送料込みで748円〜）" },
                  { label: "デザイン性の高いお花を希望する場合", value: "AND PLANTS" },
                  { label: "鮮度を重視する場合", value: "花の定期便（農家直送）" },
                  { label: "回数の縛りなく試したい場合", value: "hanameku" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-[#C4877A] shrink-0 mt-1">&#9656;</span>
                    <span>
                      <strong className="text-[#3D3632]">{item.label}</strong> → {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                判断に迷う場合は、まず安いプランやお試しのキャンペーンから始めることをおすすめします。
                実際に届いたお花を確認し、好みに合うかどうかを確かめる方法が確実です。
              </p>
            </div>
            <a
              href="#diagnosis"
              className="inline-block bg-[#C4877A] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#A86B5E] transition-all hover:shadow-lg"
            >
              もう一度診断する
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#3D3632] text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="mb-4">
                <img src="/images/logo-flwdeli-footer.png" alt="flowerデリ" className="h-14 w-auto opacity-90" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                お花の定期便（花のサブスク）の比較情報サイトです。各サービスの料金、届き方、口コミなどを調査し、サービス選びに役立つ情報を掲載しています。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">コンテンツ</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#comparison" className="hover:text-[#C4877A] transition-colors">比較表</a></li>
                <li><a href="#reviews" className="hover:text-[#C4877A] transition-colors">サービス詳細</a></li>
                <li><a href="#purpose" className="hover:text-[#C4877A] transition-colors">目的別おすすめ</a></li>
                <li><a href="#how-to-choose" className="hover:text-[#C4877A] transition-colors">選び方ガイド</a></li>
                <li><a href="#faq" className="hover:text-[#C4877A] transition-colors">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">サービス一覧</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#bloomee" className="hover:text-[#C4877A] transition-colors">bloomee（ブルーミー）</a></li>
                <li><a href="#medelu" className="hover:text-[#C4877A] transition-colors">medelu（メデル）</a></li>
                <li><a href="#andplants" className="hover:text-[#C4877A] transition-colors">AND PLANTS</a></li>
                <li><a href="#hananoteikibin" className="hover:text-[#C4877A] transition-colors">花の定期便</a></li>
                <li><a href="#hanameku" className="hover:text-[#C4877A] transition-colors">hanameku（ハナメク）</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              当サイトはアフィリエイトプログラムに参加しています。掲載情報は記事執筆時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-[#C4877A] transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-[#C4877A] transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-[#C4877A] transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
