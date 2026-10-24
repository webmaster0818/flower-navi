"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";
import { HOME_FAQ } from "@/data/homeFaq";
import heroPhotos from "@/data/heroPhotos.json";
import Header from "@/app/components/Header";
import OfficialShot from "@/app/components/OfficialShot";

/** 比較表用：services.ts（単一データソース）から安い順 */
type HeroPhoto = { src: string; alt: string; orientation: string };
// ファーストビューで切り替える写真（吊り鉢の部屋 → 花瓶の花 → 窓辺の植物 → 花瓶の花 → 植物の棚）
const FV_PHOTOS = [0, 6, 2, 7, 3].map((i) => (heroPhotos as HeroPhoto[])[i]).filter(Boolean);
const STRIP_PHOTOS = heroPhotos as HeroPhoto[];
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
      "日本総合園芸の「花の定期便」は、切り花・水盤生け・アレンジメント・鉢花・観葉植物など「40コース以上」（公式表記）から選べる定期便です。花瓶生け・水盤生け・アレンジメント花材などのコースでは花材が届き、自分で生けて飾ります。完成したアレンジメントやブーケが届くコース（季節のブーケコースなど）もあります（2026年10月23日公式確認）。関西近郊は専属スタッフの自社配達便、そのほかの対象エリアはヤマト運輸の宅配便で届き、料金はお届け方法によって異なります（2026年10月15日 公式確認）。",
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
      "届いた花材を自分で生けたい方",
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
      "hanameku（ハナメク）は、and factory株式会社が運営するお花の定期便です。ライトプランは税込・送料込み1,210円でポスト投函、セルフアレンジは宅配で届きます。最低回数の記載はありませんが、初回（定期1回目）は解約できず、解約・スキップの締切は、公式FAQ・ご利用ガイドではお届け予定日の10日前、ライトプランの商品ページでは9日前と記載されています（2026年10月23日公式確認）。",
    plans: [
      { name: "ライトプラン", price: "1,210円/回", flowers: "3〜4本", delivery: "ポスト投函" },
      { name: "セルフアレンジ S", price: "1,958円/回", flowers: "1〜8本", delivery: "宅配" },
      { name: "セルフアレンジ L", price: "3,278円/回", flowers: "1〜12本", delivery: "宅配" },
    ],
    shipping: "込み（セルフアレンジは地域別の追加送料あり）",
    deliveryMethod: "ポスト投函（ライト）／宅配（セルフアレンジ）",
    cancellation: "初回は解約不可・締切はお届け予定日の10日前（公式FAQ。ライトプランの商品ページは9日前）",
    pros: [
      "ライトは税込・送料込み1,210円で追加費用なし",
      "ライトはポスト投函で受け取りが楽",
      "傷んでいたら到着日を含め3日以内の申請で返金または代替品",
    ],
    cons: [
      "初回（1回目）は解約できない",
      "解約・スキップの締切が10日前（公式FAQ。ライトプランの商品ページは9日前）",
      "セルフアレンジは沖縄・離島に配送不可",
    ],
    recommended: [
      "送料込みの定額で始めたい方",
      "ポストで受け取りたい方",
      "自分で生けるのも楽しみたい方（セルフアレンジ）",
    ],
  },
];

/* ─── FAQ Data（data/homeFaq.ts） ─── */
const faqItems = HOME_FAQ;


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
    description: "本数の多いプランを選べ、ギフトとして贈れるサービスが選択肢になります。",
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
      "お花の定期便には、最低受取回数が設定されているものがあります。bloomeeは4回の受け取りが必要ですが、medelu・AND PLANTSは回数の縛りがありません。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません（2026年10月17日公式確認）。初めて利用する方は、回数の縛りがないサービスをおすすめします。",
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
      <Header />

      <main className="flex-1">
        {/* ─── Hero Section（2026-10-21 刷新：植物のある部屋の写真を切り替えて見せる） ─── */}
        <section className="fv relative">
          <div className="fv-stage relative h-[56vh] min-h-[340px] md:h-[78vh] md:min-h-[560px] max-h-[820px] overflow-hidden bg-[#DEDAD2]">
            {FV_PHOTOS.map((ph, i) => (
              <img
                key={ph.src}
                src={ph.src}
                alt={i === 0 ? ph.alt : ""}
                aria-hidden={i === 0 ? undefined : true}
                className="fv-slide absolute inset-0 w-full h-full object-cover"
                style={{ animationDelay: `${i * 6 - 1.2}s` }}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
          <div className="relative max-w-6xl mx-auto px-4 md:px-6">
            <div className="fv-panel bg-white md:bg-white/95 md:absolute md:left-6 md:bottom-12 md:max-w-[560px] px-1 pt-7 pb-2 md:p-10">
              <h1 className="font-heading text-[30px] leading-[1.3] md:text-[44px] md:leading-[1.25] font-bold text-[#1F2420] mb-4 tracking-[0.01em]">
                お花の定期便の
                <br />
                比較ガイド
                <span className="block text-[17px] md:text-[20px] font-bold text-[#2F5B43] mt-3 leading-snug">
                  お花の定期便おすすめ5社の比較
                </span>
              </h1>
              <p className="text-[15px] md:text-base text-[#4A4F49] leading-relaxed mb-7">
                お花のサブスク（お花の定期便）を、送料込みの料金・届き方・回数の条件で比較しています。
                ご自身の生活に合ったサービス選びにご活用ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#diagnosis" className="inline-block bg-[#2F4A3A] text-white px-7 py-3.5 rounded-md font-medium hover:bg-[#234534] transition-colors text-center">
                  30秒で診断する
                </a>
                <a href="#comparison" className="inline-block bg-transparent text-[#1F2420] border border-[#1F2420]/30 px-7 py-3.5 rounded-md font-medium hover:border-[#1F2420] transition-colors text-center">
                  比較表を確認する
                </a>
              </div>
            </div>
          </div>
          {/* 写真の帯：横にスクロールして部屋の写真を見られる */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
            <div className="fv-strip flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 md:mx-0 md:px-0">
              {STRIP_PHOTOS.map((ph) => (
                <div key={ph.src} className="snap-start shrink-0 w-[68%] sm:w-[40%] md:w-[29%] aspect-[4/5] overflow-hidden bg-[#DEDAD2]">
                  <img src={ph.src} alt={ph.alt} loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#6B6F6A] mt-2">写真：Unsplash（イメージ写真です。各サービスで届く花・植物とは異なります）</p>
          </div>
        </section>

        {/* ─── 比較の要点（2026-10-20） ─── */}
        <section id="summary-compare" className="py-12 bg-[#F6F4EF]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1F2420] mb-4 text-center">
              お花のサブスク4社を比較してわかる違い
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              送料込みの1回あたりの料金で比べると、最も安いのは{shortName(COMPARE_ROWS[0].name)}の{COMPARE_ROWS[0].cheapest.name} {COMPARE_ROWS[0].cheapest.price.toLocaleString("ja-JP")}円です。
              bloomeeは花代980円が最安ですが送料385円が別にかかり、送料込みでは1,365円になります。
              回数の条件は、medelu・AND PLANTSが最低回数の記載なし、bloomeeが最初の4回の受け取りが前提、hanamekuが初回（1回目）の解約不可です。
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                ["送料込みで安さを重視する", "medelu Mini 748円（3〜4本・ポスト投函）", "/services/medelu/"],
                ["不在でもポストで受け取りたい", "bloomee（お試し・グリーン）・medelu（Mini・Lite）・hanameku（ライト）", "/compare/post-delivery/"],
                ["回数の条件なしでボリュームも欲しい", "AND PLANTS Standard 1,980円（送料込み・6〜8本・宅配）", "/services/and-plants/"],
                ["まず4回続けて試せる", "bloomee お試しプラン 4回で総額5,460円（送料込み）", "/services/bloomee/"],
              ].map(([k, v, href]) => (
                <a key={k} href={href} className="block rounded-md border border-[#DEDAD2] bg-white p-4 hover:border-[#B0694F] transition">
                  <span className="block text-xs text-[#6B6F6A] mb-1">{k}</span>
                  <span className="font-medium text-[#1F2420]">{v}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-[#6B6F6A] mt-4">
              ※ 料金・条件は各社の公式サイトで2026年10月14日〜17日に確認した表示額・表記です。詳しくは下の比較表をご覧ください。
            </p>
          </div>
        </section>

        {/* ─── Quick Diagnosis ─── */}
        <section id="diagnosis" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="sec-head mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-4">
                ご自身に合ったサービスの診断
              </h2>
              <p className="text-[#4A4F49]">
                3つの質問に答えると、おすすめのお花の定期便がわかります
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/hero/hero-04.jpg"
                alt=""
                className="w-full h-48 md:h-56 object-cover rounded-t-md"
              />
              <div className="bg-white border border-[#DEDAD2] border-t-0 rounded-b-md p-8 md:p-12">
                {diagnosisStep === 0 && (
                  <div className="text-center">
                    <p className="text-lg text-[#1F2420] mb-8">
                      3つの質問で<br className="md:hidden" />適したサービスを確認できます
                    </p>
                    <button
                      onClick={() => setDiagnosisStep(1)}
                      className="bg-[#B0694F] text-white px-10 py-4 rounded-md font-medium hover:bg-[#8F5440] transition-all"
                    >
                      診断スタート
                    </button>
                  </div>
                )}

                {diagnosisStep === 1 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-md bg-[#B0694F] text-white text-sm flex items-center justify-center font-medium">1</span>
                      <span className="text-sm text-[#B0694F]">質問 1/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#1F2420] mb-6">
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
                          className="text-left bg-[#F6F4EF] border border-[#DEDAD2] rounded-md px-6 py-5 hover:border-[#B0694F] hover:bg-[#F9F2F0] transition-all"
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
                      <span className="w-8 h-8 rounded-md bg-[#B0694F] text-white text-sm flex items-center justify-center font-medium">2</span>
                      <span className="text-sm text-[#B0694F]">質問 2/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#1F2420] mb-6">
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
                          className="text-left bg-[#F6F4EF] border border-[#DEDAD2] rounded-md px-6 py-5 hover:border-[#B0694F] hover:bg-[#F9F2F0] transition-all"
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
                      <span className="w-8 h-8 rounded-md bg-[#B0694F] text-white text-sm flex items-center justify-center font-medium">3</span>
                      <span className="text-sm text-[#B0694F]">質問 3/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#1F2420] mb-6">
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
                          className="text-left bg-[#F6F4EF] border border-[#DEDAD2] rounded-md px-6 py-5 hover:border-[#B0694F] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 4 && result && (
                  <div className="text-center">
                    <p className="text-sm text-[#B0694F] tracking-widest mb-3">
                      RESULT
                    </p>
                    <p className="text-lg text-[#4A4F49] mb-2">
                      おすすめのサービス
                    </p>
                    <p className="font-heading text-3xl md:text-4xl font-bold text-[#B0694F] mb-5">
                      {recommendationMap[result]?.name}
                    </p>
                    <p className="text-[#4A4F49] mb-8 max-w-md mx-auto leading-relaxed">
                      {recommendationMap[result]?.reason}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`#${result}`}
                        className="inline-block bg-[#B0694F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#8F5440] transition-all"
                      >
                        詳細を確認する
                      </a>
                      <button
                        onClick={resetDiagnosis}
                        className="inline-block bg-white text-[#1F2420] border border-[#DEDAD2] px-8 py-3 rounded-md font-medium hover:bg-[#F6F4EF] transition-all"
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


        {/* ─── Comparison Table ─── */}
        <section id="comparison" className="py-20 bg-[#F6F4EF]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="sec-head mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-4">
                お花のサブスク 主要4社の比較表（送料込み料金・届き方・回数の条件）
              </h2>
              <p className="text-[#4A4F49]">
                料金・送料・届き方を一覧で比較できます
              </p>
            </div>

            <div className="table-wrapper rounded-md bg-white overflow-hidden">
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
                      <td className="font-medium text-[#1F2420]"><a href={s.servicePath} className="underline decoration-[#DEDAD2] underline-offset-4 hover:text-[#B0694F]">{shortName(s.name)}</a></td>
                      <td className={s.cheapest.price === COMPARE_ROWS[0].cheapest.price ? "text-[#B0694F] font-medium" : ""}>
                        {s.cheapest.price.toLocaleString("ja-JP")}円/回
                      </td>
                      <td className={s.shippingIncluded ? "text-[#6E8B76] font-medium" : ""}>
                        {s.shippingIncluded ? "込み" : (s.shippingShort ?? "別途")}
                      </td>
                      <td>{s.cheapest.postDelivery ? "ポスト投函" : "宅配/手渡し"}</td>
                      <td>{s.cheapest.flowers}</td>
                      <td>{s.frequencyShort}</td>
                      <td className={s.commitmentLabel.startsWith("なし") ? "text-[#6E8B76]" : ""}>
                        {s.commitmentLabel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#6B6F6A] mt-6 text-center">
              ※ 料金・条件は各社の公式サイトで2026年10月14日に、お届け頻度は2026年10月14日〜17日に確認した表示額・表記です（AND PLANTSは公式ページに税込・税抜の明記がありません）。ご利用前に、公式サイトにて最新の情報をご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Individual Service Reviews ─── */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="sec-head mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-4">
                各サービスの詳細
              </h2>
              <p className="text-[#4A4F49]">
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
                  <div className="bg-white rounded-md overflow-hidden border border-[#DEDAD2]">
                    {/* サービス名と公式サイトのキャプチャ */}
                    <div className="p-6 md:p-10 pb-0 md:pb-0 grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-6 md:gap-10 items-center">
                      <div>
                        <p className="text-[13px] text-[#6B6F6A] mb-2">
                          <span className="font-heading text-[#2F5B43] text-xl mr-2 tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                          {service.tagline}
                        </p>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1F2420] leading-snug">
                          {service.name}
                        </h3>
                      </div>
                      <OfficialShot slug={service.id === "hananoteikibin" ? "nihon-sogo-engei" : service.id} name={service.name} device="both" />
                    </div>

                    <div className="p-6 md:p-10 space-y-8">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg font-bold text-[#1F2420] mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-[#B0694F] rounded-md inline-block" />
                          サービス概要
                        </h4>
                        <p className="text-[#4A4F49] leading-[1.9]">
                          {service.overview}
                        </p>
                      </div>

                      {/* Pricing Table */}
                      <div>
                        <h4 className="text-lg font-bold text-[#1F2420] mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-[#B0694F] rounded-md inline-block" />
                          料金プラン
                        </h4>
                        <div className="table-wrapper rounded-md overflow-hidden border border-[#DEDAD2]">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-[#F6F4EF]">
                                <th className="text-left px-5 py-3.5 font-medium text-[#1F2420]">プラン</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#1F2420]">料金</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#1F2420]">花の本数</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#1F2420]">配送頻度</th>
                              </tr>
                            </thead>
                            <tbody>
                              {service.plans.map((plan) => (
                                <tr key={plan.name} className="border-t border-[#DEDAD2]">
                                  <td className="px-5 py-3.5">{plan.name}</td>
                                  <td className="px-5 py-3.5 font-medium text-[#B0694F]">{plan.price}</td>
                                  <td className="px-5 py-3.5">{plan.flowers}</td>
                                  <td className="px-5 py-3.5">{plan.delivery}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#4A4F49]">
                          <span className="bg-[#F6F4EF] px-3 py-1.5 rounded-md">送料: <strong>{service.shipping}</strong></span>
                          <span className="bg-[#F6F4EF] px-3 py-1.5 rounded-md">届き方: <strong>{service.deliveryMethod}</strong></span>
                          <span className="bg-[#F6F4EF] px-3 py-1.5 rounded-md">解約: <strong>{service.cancellation}</strong></span>
                        </div>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-t border-[#1F2420] pt-4">
                          <h4 className="font-bold text-[#2F5B43] mb-3">メリット</h4>
                          <ul className="space-y-3">
                            {service.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-[#1F2420] text-sm leading-relaxed">
                                <span className="text-[#6E8B76] mt-0.5 shrink-0">・</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-[#1F2420] pt-4">
                          <h4 className="font-bold text-[#8F5440] mb-3">デメリット</h4>
                          <ul className="space-y-3">
                            {service.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-[#1F2420] text-sm leading-relaxed">
                                <span className="text-[#B0694F] mt-0.5 shrink-0">・</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="bg-[#F6F4EF] rounded-md p-6 border border-[#DEDAD2]">
                        <h4 className="font-bold text-[#1F2420] mb-3">
                          適している方
                        </h4>
                        <ul className="space-y-2">
                          {service.recommended.map((rec) => (
                            <li key={rec} className="flex items-start gap-3 text-[#4A4F49] text-sm">
                              <span className="text-[#B0694F] shrink-0">&#9656;</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={service.href}
                        className="block text-center bg-white border border-[#B0694F] text-[#B0694F] font-bold px-6 py-3 rounded-md text-sm hover:bg-[#F9F2F0] transition"
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
        <section id="purpose" className="py-20 bg-[#F6F4EF]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="sec-head mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-4">
                目的別のおすすめサービス
              </h2>
              <p className="text-[#4A4F49]">
                目的に合ったサービスをお選びください
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {purposes.map((purpose) => (
                <div
                  key={purpose.title}
                  className="bg-white rounded-md p-7 transition-all border border-[#DEDAD2] group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold text-[#1F2420]">
                      {purpose.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#4A4F49] mb-5 leading-relaxed">
                    {purpose.description}
                  </p>
                  <div className="space-y-2 mb-5">
                    {purpose.services.map((s) => (
                      <p key={s} className="text-sm text-[#4A4F49] flex items-start gap-2">
                        <span className="text-[#B0694F] shrink-0">-</span>
                        {s}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[#B0694F] bg-[#F9F2F0] inline-block px-3 py-1 rounded-md">
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
            <div className="sec-head mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-4">
                お花の定期便の選び方
              </h2>
              <p className="text-[#4A4F49]">
                選ぶ際に確認すべき5つのポイント
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/hero/hero-05.jpg"
                alt=""
                className="w-full h-40 md:h-52 object-cover rounded-md mb-12"
              />
              <div className="space-y-8">
                {howToChoose.map((item, idx) => (
                  <div key={item.title} className="flex gap-5 md:gap-8 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-md bg-[#B0694F] text-white flex items-center justify-center font-bold text-lg font-heading">
                      {idx + 1}
                    </div>
                    <div className="flex-1 pb-8 border-b border-[#DEDAD2] last:border-b-0">
                      <h3 className="text-lg font-bold text-[#1F2420] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#4A4F49] leading-[1.9]">
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
        <section id="faq" className="py-20 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="sec-head mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-4">
                よくある質問
              </h2>
              <p className="text-[#4A4F49]">
                お花の定期便に関するよくある質問と回答です
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-md overflow-hidden border border-[#DEDAD2]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#F6F4EF] transition-colors"
                  >
                    <span className="font-medium text-[#1F2420]">
                      Q. {item.q}
                    </span>
                    <span
                      className={`text-[#B0694F] text-xl shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-[#4A4F49] leading-[1.9] border-t border-[#DEDAD2] pt-4">
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
            src="/images/hero/hero-01.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F6F4EF]/90" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2420] mb-8">
              ご自身に合ったお花の定期便を<br className="hidden md:inline" />お選びください
            </h2>
            <div className="text-left bg-white rounded-md p-8 md:p-10 mb-10 text-[#4A4F49] leading-[1.9] space-y-4 border border-[#DEDAD2]">
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
                  { label: "花材を受け取って自分で生けたい場合", value: "花の定期便（日本総合園芸）" },
                  { label: "回数の縛りなく試したい場合", value: "hanameku（最低回数の記載なし。初回（定期1回目）の解約は不可（2026年10月17日公式確認））" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-[#B0694F] shrink-0 mt-1">&#9656;</span>
                    <span>
                      <strong className="text-[#1F2420]">{item.label}</strong> → {item.value}
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
              className="inline-block bg-[#B0694F] text-white px-10 py-4 rounded-md font-medium text-lg hover:bg-[#8F5440] transition-all"
            >
              もう一度診断する
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1F2420] text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="mb-4">
                <img src="/images/logo-footer-2026.png" alt="flowerデリ" className="h-11 w-auto" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                お花の定期便（花のサブスク）の比較情報サイトです。各サービスの料金、届き方、口コミなどを調査し、サービス選びに役立つ情報を掲載しています。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">コンテンツ</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#comparison" className="hover:text-[#B0694F] transition-colors">比較表</a></li>
                <li><a href="#reviews" className="hover:text-[#B0694F] transition-colors">サービス詳細</a></li>
                <li><a href="#purpose" className="hover:text-[#B0694F] transition-colors">目的別おすすめ</a></li>
                <li><a href="#how-to-choose" className="hover:text-[#B0694F] transition-colors">選び方ガイド</a></li>
                <li><a href="#faq" className="hover:text-[#B0694F] transition-colors">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">サービス一覧</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#bloomee" className="hover:text-[#B0694F] transition-colors">bloomee（ブルーミー）</a></li>
                <li><a href="#medelu" className="hover:text-[#B0694F] transition-colors">medelu（メデル）</a></li>
                <li><a href="#andplants" className="hover:text-[#B0694F] transition-colors">AND PLANTS</a></li>
                <li><a href="#hananoteikibin" className="hover:text-[#B0694F] transition-colors">花の定期便</a></li>
                <li><a href="#hanameku" className="hover:text-[#B0694F] transition-colors">hanameku（ハナメク）</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              当サイトはアフィリエイトプログラムに参加しています。掲載情報は記事執筆時点のものです。ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-[#B0694F] transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-[#B0694F] transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-[#B0694F] transition-colors">記事の制作ポリシー</a>
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
