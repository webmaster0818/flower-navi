"use client";

import { useState } from "react";

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
      "初心者でも始めやすく、ポスト投函で受け取りも簡単。SNSでも話題のサービスです。",
  },
  medelu: {
    name: "medelu（メデル）",
    reason:
      "月額698円からと業界最安クラス。送料無料でコスパを重視する方に最適です。",
  },
  andplants: {
    name: "AND PLANTS（アンドプランツ）",
    reason:
      "おしゃれなアレンジが特徴。インテリアにこだわる方におすすめです。",
  },
  hananoteikibin: {
    name: "花の定期便（日本総合園芸）",
    reason:
      "農家直送で鮮度抜群。本格的なお花を楽しみたい方に向いています。",
  },
  hanameku: {
    name: "hanameku（ハナメク）",
    reason:
      "市場直送で新鮮。回数縛りなしで気軽に始められます。",
  },
};

/* ─── Service Data ─── */
const services = [
  {
    id: "bloomee",
    name: "bloomee（ブルーミー）",
    tagline: "SNSで話題の初心者向けサービス",
    overview:
      "bloomeeは、累計会員数10万人以上を誇る、日本最大級のお花の定期便サービスです。全国200店舗以上の提携花屋さんから届くお花は、季節感あふれるアレンジが魅力。届いたお花をSNSに投稿するユーザーも多く、インスタグラムでも話題のサービスです。ポスト投函で届くため、不在時でも受け取れる手軽さが初心者に支持されています。",
    plans: [
      {
        name: "体験プラン",
        price: "980円/回",
        flowers: "3本以上",
        delivery: "隔週",
      },
      {
        name: "レギュラープラン",
        price: "1,580円/回",
        flowers: "4本以上",
        delivery: "隔週",
      },
      {
        name: "リッチプラン",
        price: "2,980円/回",
        flowers: "8本以上",
        delivery: "隔週",
      },
    ],
    shipping: "385円",
    deliveryMethod: "ポスト投函（リッチプランは手渡し）",
    cancellation: "4回受け取り後に解約可能",
    pros: [
      "ポスト投函で不在でも受け取れる",
      "全国200店舗以上の提携花屋から届く",
      "品質保証制度あり（痛んでいたら再送）",
      "SNS映えするアレンジ",
    ],
    cons: [
      "送料が別途かかる（385円）",
      "最低4回の受け取りが必要",
      "花の種類は選べない",
    ],
    recommended: [
      "お花のサブスクが初めての方",
      "不在が多くポスト投函で受け取りたい方",
      "SNS映えするお花が欲しい方",
    ],
  },
  {
    id: "medelu",
    name: "medelu（メデル）",
    tagline: "コスパ最強、送料無料の実力派",
    overview:
      "medeluは、月額698円からという業界最安クラスの価格設定が魅力のお花の定期便です。送料無料なのも大きなポイント。お部屋の雰囲気に合わせて「ANYROOM」「MODERN」「NATURAL」の3コースから選べるのが特徴で、インテリアとの調和を意識したアレンジが届きます。コストを抑えながらも質の良いお花を楽しみたい方に最適なサービスです。",
    plans: [
      {
        name: "Liteコース",
        price: "698円/回",
        flowers: "3本",
        delivery: "隔週",
      },
      {
        name: "Lite+コース",
        price: "1,198円/回",
        flowers: "5〜6本",
        delivery: "隔週",
      },
      {
        name: "Basicコース",
        price: "1,958円/回",
        flowers: "6〜9本",
        delivery: "隔週",
      },
    ],
    shipping: "無料",
    deliveryMethod: "ポスト投函（Basicは宅配便）",
    cancellation: "回数縛りなし、いつでも解約可能",
    pros: [
      "月額698円からと業界最安クラス",
      "送料無料で追加費用なし",
      "部屋の雰囲気に合わせた3コース",
      "回数縛りなし、いつでも解約可能",
    ],
    cons: [
      "対応エリアが限られる場合がある",
      "Liteコースは花の本数が少なめ",
      "知名度がbloomeeほど高くない",
    ],
    recommended: [
      "とにかくコスパを重視する方",
      "送料無料でお花を楽しみたい方",
      "お部屋のインテリアに合うお花が欲しい方",
    ],
  },
  {
    id: "andplants",
    name: "AND PLANTS（アンドプランツ）",
    tagline: "おしゃれ派向けのハイセンスな花",
    overview:
      "AND PLANTSは、おしゃれなインテリアグリーンや観葉植物で知られるブランドが手掛けるお花の定期便です。プロのフローリストが厳選したセンスの良いアレンジが特徴で、インテリアにこだわる方から高い支持を得ています。初回500円OFFのキャンペーンを実施しており、気軽にお試しできるのも魅力。3つのプランから選べ、ボリューム感のあるお花が届きます。",
    plans: [
      {
        name: "Sプラン",
        price: "1,980円/回",
        flowers: "4〜6本",
        delivery: "隔週/月1回",
      },
      {
        name: "Mプラン",
        price: "2,980円/回",
        flowers: "6〜9本",
        delivery: "隔週/月1回",
      },
      {
        name: "Lプラン",
        price: "4,980円/回",
        flowers: "10〜14本",
        delivery: "隔週/月1回",
      },
    ],
    shipping: "無料",
    deliveryMethod: "宅配便（手渡し）",
    cancellation: "回数縛りなし",
    pros: [
      "プロのフローリストによるおしゃれなアレンジ",
      "初回500円OFFキャンペーン",
      "花のボリュームが多い",
      "送料無料",
    ],
    cons: [
      "価格帯がやや高め",
      "ポスト投函に非対応",
      "在宅での受け取りが必要",
    ],
    recommended: [
      "おしゃれなアレンジを楽しみたい方",
      "インテリアにこだわる方",
      "ボリュームのあるお花が欲しい方",
    ],
  },
  {
    id: "hananoteikibin",
    name: "花の定期便（日本総合園芸）",
    tagline: "農家直送で鮮度を追求",
    overview:
      "日本総合園芸が運営する「花の定期便」は、生産者から直接届く鮮度重視のサービスです。市場を通さず農家から直送されるため、通常の花屋で購入するよりも新鮮な状態のお花が届きます。季節の旬の花を中心に、本格的なアレンジメントが楽しめるのが特徴。花持ちの良さを重視する方や、本格的なお花を自宅で楽しみたい方におすすめです。",
    plans: [
      {
        name: "レギュラー",
        price: "1,500円〜/回",
        flowers: "5〜7本",
        delivery: "隔週/月1回",
      },
      {
        name: "プレミアム",
        price: "3,000円〜/回",
        flowers: "10本以上",
        delivery: "隔週/月1回",
      },
    ],
    shipping: "地域により異なる",
    deliveryMethod: "宅配便（手渡し）",
    cancellation: "コースにより異なる",
    pros: [
      "農家直送で鮮度が抜群",
      "花持ちが良い",
      "季節の旬の花が届く",
      "本格的なアレンジメント",
    ],
    cons: [
      "送料が地域により異なる",
      "ポスト投函に非対応",
      "プランの選択肢が少なめ",
    ],
    recommended: [
      "花の鮮度にこだわる方",
      "長く花を楽しみたい方",
      "本格的なアレンジメントが欲しい方",
    ],
  },
  {
    id: "hanameku",
    name: "hanameku（ハナメク）",
    tagline: "市場直送、回数縛りなしで気軽に",
    overview:
      "hanamekuは、市場直送にこだわった新鮮なお花が届くサービスです。回数の縛りがないため、いつでも自由にスキップや解約ができる気軽さが特徴。お花のプロが市場で直接仕入れた旬の花をそのまま届けるため、鮮度と品質のバランスが優れています。試しに1回だけ注文してみたいという方にもおすすめです。",
    plans: [
      {
        name: "ライトプラン",
        price: "858円/回",
        flowers: "3本",
        delivery: "隔週",
      },
      {
        name: "セルフアレンジプラン",
        price: "1,958円/回",
        flowers: "7〜10本",
        delivery: "隔週/月1回",
      },
      {
        name: "スタンダードプラン",
        price: "2,680円/回",
        flowers: "花瓶付き",
        delivery: "隔週/月1回",
      },
    ],
    shipping: "無料（一部プラン）",
    deliveryMethod: "ポスト投函/宅配便",
    cancellation: "回数縛りなし、いつでも解約可能",
    pros: [
      "市場直送で新鮮",
      "回数縛りなし、いつでも解約OK",
      "花瓶付きプランあり",
      "スキップも自由",
    ],
    cons: [
      "プランによって送料が異なる",
      "地域によっては届かない場合がある",
      "アレンジのテイストは選べない",
    ],
    recommended: [
      "まず試しに始めてみたい方",
      "縛りなしで気軽に楽しみたい方",
      "新鮮なお花にこだわる方",
    ],
  },
];

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "お花の定期便とは何ですか？",
    a: "お花の定期便（花のサブスク）とは、定期的に自宅にお花が届くサブスクリプションサービスです。毎回プロが選んだ季節のお花が届くため、自分で花屋に行く手間がなく、常に新鮮なお花を楽しめます。",
  },
  {
    q: "お花の定期便の相場はどれくらいですか？",
    a: "お花の定期便の相場は、1回あたり700円〜5,000円程度です。最安値はmedeluの698円/回、手軽に始められるbloomeeは980円/回からとなっています。送料込みの総額で比較することが大切です。",
  },
  {
    q: "ポスト投函と手渡し、どちらがいいですか？",
    a: "不在が多い方にはポスト投函がおすすめです。ポスト投函はbloomee（体験・レギュラープラン）やmedelu（Liteコース）などで対応しています。ただし、ポスト投函は花のボリュームに限りがあるため、大きなアレンジを楽しみたい方は手渡しのサービスを選びましょう。",
  },
  {
    q: "お花はどれくらい持ちますか？",
    a: "一般的に、届いたお花は適切なお手入れをすれば1週間〜10日程度楽しめます。農家直送の花の定期便（日本総合園芸）やhanamekuは鮮度が高いため、より長く楽しめる傾向があります。付属の栄養剤を使い、水をこまめに替えることがポイントです。",
  },
  {
    q: "解約は簡単にできますか？",
    a: "サービスによって異なります。medelu、AND PLANTS、hanamekuは回数縛りなしでいつでも解約可能です。bloomeeは最低4回の受け取りが必要です。解約方法はいずれもマイページからオンラインで手続きできます。",
  },
  {
    q: "届くお花の種類は選べますか？",
    a: "基本的にお花の種類はプロにおまかせとなります。ただし、medeluではお部屋の雰囲気に合わせた3コース（ANYROOM/MODERN/NATURAL）から選べるため、好みのテイストに近いお花が届きやすくなっています。",
  },
  {
    q: "お花が傷んで届いた場合はどうなりますか？",
    a: "多くのサービスで品質保証制度があります。例えばbloomeeでは、届いたお花が傷んでいた場合、写真を送ることで無料で再送してもらえます。各サービスの保証制度は申し込み前に確認しておきましょう。",
  },
  {
    q: "一人暮らしでも利用できますか？",
    a: "もちろん利用できます。むしろ一人暮らしの方にこそおすすめです。ポスト投函対応のbloomeeやmedeluなら不在時でも受け取れ、少量プランを選べばお花の世話の負担も少なく楽しめます。",
  },
  {
    q: "プレゼントとして送ることはできますか？",
    a: "一部のサービスではギフト対応が可能です。AND PLANTSはギフト向けの豪華なプランがあり、bloomeeもギフトチケットを販売しています。プレゼント目的の場合は、手渡し配送のサービスを選ぶと安心です。",
  },
  {
    q: "お花の定期便を選ぶ際に最も重要なポイントは？",
    a: "最も重要なのは「続けやすさ」です。料金、送料、届く頻度、受け取り方法、解約条件の5つを総合的に見て、自分のライフスタイルに合ったサービスを選びましょう。まずは安いプランやお試しから始めるのがおすすめです。",
  },
];

/* ─── Purpose Recommendations ─── */
const purposes = [
  {
    title: "一人暮らしの方に",
    description:
      "不在でも受け取れるポスト投函対応で、少量から始められるサービスがおすすめ。",
    services: ["bloomee 体験プラン（980円+送料385円）", "medelu Liteコース（698円・送料無料）"],
    best: "medelu",
  },
  {
    title: "プレゼント用に",
    description:
      "ボリュームのある華やかなアレンジで、ギフト対応しているサービスが最適。",
    services: ["AND PLANTS Mプラン以上（2,980円〜）", "bloomee リッチプラン（2,980円）"],
    best: "AND PLANTS",
  },
  {
    title: "おしゃれにこだわる方に",
    description:
      "プロのフローリストによるセンスの良いアレンジが届くサービスを選びましょう。",
    services: ["AND PLANTS（全プラン）", "medelu MODERNコース"],
    best: "AND PLANTS",
  },
  {
    title: "コスパ重視の方に",
    description:
      "送料込みの総額で比較して、最もお得に続けられるサービスを選びましょう。",
    services: ["medelu Liteコース（698円・送料無料）", "hanameku ライトプラン（858円）"],
    best: "medelu",
  },
  {
    title: "鮮度重視の方に",
    description:
      "農家直送や市場直送で、より新鮮な状態のお花が届くサービスがおすすめ。",
    services: [
      "花の定期便（農家直送）",
      "hanameku（市場直送）",
    ],
    best: "花の定期便",
  },
];

/* ─── How to Choose ─── */
const howToChoose = [
  {
    title: "料金と送料の総額で比較する",
    description:
      "月額料金だけでなく、送料を含めた総額で比較しましょう。例えばbloomeeは月額980円ですが送料385円が別途かかります。一方medeluは698円で送料無料。月2回届く場合の月額総額で計算すると実質的なコスパがわかります。",
  },
  {
    title: "届き方（ポスト投函 vs 手渡し）を確認する",
    description:
      "日中不在がちな方はポスト投函対応のサービスがおすすめです。ただし、ポスト投函は花のサイズに制限があるため、ボリュームのあるお花を希望する場合は手渡し配送のサービスを選びましょう。",
  },
  {
    title: "解約条件・回数縛りをチェックする",
    description:
      "お花の定期便によっては最低受け取り回数が設定されています。bloomeeは4回の縛りがありますが、medelu・AND PLANTS・hanamekuは回数縛りなし。初めて試す方は縛りなしのサービスが安心です。",
  },
  {
    title: "花の本数とボリュームを確認する",
    description:
      "同じ価格帯でも届く花の本数はサービスによって異なります。テーブルに飾るなら3〜5本で十分ですが、リビングを華やかにしたい場合は8本以上届くプランがおすすめです。",
  },
  {
    title: "品質保証制度の有無を確認する",
    description:
      "配送中にお花が傷んでしまうこともあります。品質保証があるサービスなら、写真を送るだけで再送や返金に対応してもらえるため安心です。bloomeeなどは保証制度が充実しています。",
  },
];

/* ─── Component ─── */
export default function Home() {
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
      {/* ─── Header ─── */}
      <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold text-[#4A7C59]">
            お花の定期便ナビ
          </h1>
          <nav className="hidden md:flex gap-6 text-sm text-[#666]">
            <a href="#comparison" className="hover:text-[#4A7C59] transition-colors">
              比較表
            </a>
            <a href="#reviews" className="hover:text-[#4A7C59] transition-colors">
              サービス詳細
            </a>
            <a href="#how-to-choose" className="hover:text-[#4A7C59] transition-colors">
              選び方
            </a>
            <a href="#faq" className="hover:text-[#4A7C59] transition-colors">
              よくある質問
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm md:text-base text-[#4A7C59] font-medium mb-4 tracking-wide">
              あなたにぴったりのお花が見つかる
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#333] mb-6 leading-tight">
              お花の定期便ナビ
            </h2>
            <p className="text-base md:text-lg text-[#666] max-w-2xl mx-auto leading-relaxed mb-8">
              人気のお花のサブスク5社を料金・届き方・花の本数で徹底比較。
              初心者からこだわり派まで、あなたのライフスタイルに合った
              お花の定期便が見つかります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#diagnosis"
                className="inline-block bg-[#4A7C59] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3A6247] transition-colors"
              >
                30秒で診断する
              </a>
              <a
                href="#comparison"
                className="inline-block bg-white text-[#4A7C59] border border-[#4A7C59] px-8 py-3 rounded-lg font-medium hover:bg-[#E8F0EB] transition-colors"
              >
                比較表を見る
              </a>
            </div>
          </div>
        </section>

        {/* ─── Quick Diagnosis ─── */}
        <section id="diagnosis" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-3">
              あなたに合ったサービスを診断
            </h2>
            <p className="text-center text-[#666] mb-10">
              3つの質問に答えるだけで、おすすめのお花の定期便がわかります
            </p>

            <div className="bg-[#FDF5F5] rounded-2xl p-6 md:p-10">
              {diagnosisStep === 0 && (
                <div className="text-center">
                  <p className="text-lg font-medium text-[#333] mb-6">
                    簡単3ステップであなたにぴったりのサービスを見つけましょう
                  </p>
                  <button
                    onClick={() => setDiagnosisStep(1)}
                    className="bg-[#4A7C59] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3A6247] transition-colors"
                  >
                    診断スタート
                  </button>
                </div>
              )}

              {diagnosisStep === 1 && (
                <div>
                  <p className="text-sm text-[#4A7C59] font-medium mb-2">
                    質問 1/3
                  </p>
                  <p className="text-lg font-medium text-[#333] mb-6">
                    お花の定期便に何を求めますか？
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
                        className="text-left bg-white border border-[#E5E5E5] rounded-lg px-5 py-4 hover:border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {diagnosisStep === 2 && (
                <div>
                  <p className="text-sm text-[#4A7C59] font-medium mb-2">
                    質問 2/3
                  </p>
                  <p className="text-lg font-medium text-[#333] mb-6">
                    最も重視するポイントは？
                  </p>
                  <div className="grid gap-3">
                    {[
                      { value: "cost", label: "コスパ（できるだけ安く）" },
                      { value: "freshness", label: "鮮度（長持ちするお花）" },
                      { value: "design", label: "デザイン（おしゃれさ）" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer("q2", opt.value)}
                        className="text-left bg-white border border-[#E5E5E5] rounded-lg px-5 py-4 hover:border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {diagnosisStep === 3 && (
                <div>
                  <p className="text-sm text-[#4A7C59] font-medium mb-2">
                    質問 3/3
                  </p>
                  <p className="text-lg font-medium text-[#333] mb-6">
                    受け取り方法の希望は？
                  </p>
                  <div className="grid gap-3">
                    {[
                      { value: "post", label: "ポスト投函（不在でもOK）" },
                      { value: "hand", label: "手渡し（大きなアレンジOK）" },
                      { value: "flexible", label: "どちらでもよい" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer("q3", opt.value)}
                        className="text-left bg-white border border-[#E5E5E5] rounded-lg px-5 py-4 hover:border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {diagnosisStep === 4 && result && (
                <div className="text-center">
                  <p className="text-sm text-[#4A7C59] font-medium mb-2">
                    診断結果
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-[#333] mb-3">
                    あなたにおすすめは
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-[#4A7C59] mb-4">
                    {recommendationMap[result]?.name}
                  </p>
                  <p className="text-[#666] mb-6 max-w-md mx-auto">
                    {recommendationMap[result]?.reason}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`#${result}`}
                      className="inline-block bg-[#4A7C59] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3A6247] transition-colors"
                    >
                      詳細を見る
                    </a>
                    <button
                      onClick={resetDiagnosis}
                      className="inline-block bg-white text-[#4A7C59] border border-[#4A7C59] px-6 py-3 rounded-lg font-medium hover:bg-[#E8F0EB] transition-colors"
                    >
                      もう一度診断する
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison" className="py-16 bg-[#F8F8F8]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-3">
              お花の定期便 5社比較表
            </h2>
            <p className="text-center text-[#666] mb-10">
              料金・送料・届き方を一目で比較できます
            </p>

            <div className="table-wrapper rounded-xl shadow-sm">
              <table className="comparison-table w-full bg-white">
                <thead>
                  <tr>
                    <th className="rounded-tl-xl">サービス</th>
                    <th>最安料金</th>
                    <th>送料</th>
                    <th>届き方</th>
                    <th>花の本数</th>
                    <th>頻度</th>
                    <th className="rounded-tr-xl">解約条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">bloomee</td>
                    <td>980円/回</td>
                    <td>385円</td>
                    <td>ポスト投函</td>
                    <td>3本〜</td>
                    <td>隔週</td>
                    <td>4回縛り</td>
                  </tr>
                  <tr>
                    <td className="font-medium">medelu</td>
                    <td>698円/回</td>
                    <td>無料</td>
                    <td>ポスト投函</td>
                    <td>3本〜</td>
                    <td>隔週</td>
                    <td>縛りなし</td>
                  </tr>
                  <tr>
                    <td className="font-medium">AND PLANTS</td>
                    <td>1,980円/回</td>
                    <td>無料</td>
                    <td>手渡し</td>
                    <td>4〜6本</td>
                    <td>隔週/月1</td>
                    <td>縛りなし</td>
                  </tr>
                  <tr>
                    <td className="font-medium">花の定期便</td>
                    <td>1,500円〜/回</td>
                    <td>地域別</td>
                    <td>手渡し</td>
                    <td>5〜7本</td>
                    <td>隔週/月1</td>
                    <td>コース別</td>
                  </tr>
                  <tr>
                    <td className="font-medium">hanameku</td>
                    <td>858円/回</td>
                    <td>一部無料</td>
                    <td>ポスト/手渡し</td>
                    <td>3本〜</td>
                    <td>隔週</td>
                    <td>縛りなし</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#999] mt-4 text-center">
              ※ 料金は税込み表示です。最新の料金は各公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Individual Service Reviews ─── */}
        <section id="reviews" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-3">
              各サービスの詳細レビュー
            </h2>
            <p className="text-center text-[#666] mb-12">
              5つのサービスを徹底的に解説します
            </p>

            <div className="space-y-16">
              {services.map((service, idx) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-20"
                >
                  <div className="border border-[#E5E5E5] rounded-2xl overflow-hidden">
                    {/* Service Header */}
                    <div className="bg-[#F9E8E8] px-6 py-5 md:px-8 md:py-6">
                      <p className="text-sm text-[#4A7C59] font-medium mb-1">
                        {idx + 1}. {service.tagline}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-[#333]">
                        {service.name}
                      </h3>
                    </div>

                    <div className="px-6 py-6 md:px-8 md:py-8 space-y-8">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg font-bold text-[#333] mb-3 border-l-4 border-[#4A7C59] pl-3">
                          サービス概要
                        </h4>
                        <p className="text-[#666] leading-relaxed">
                          {service.overview}
                        </p>
                      </div>

                      {/* Pricing Table */}
                      <div>
                        <h4 className="text-lg font-bold text-[#333] mb-3 border-l-4 border-[#4A7C59] pl-3">
                          料金プラン
                        </h4>
                        <div className="table-wrapper">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-[#E8F0EB]">
                                <th className="text-left px-4 py-3 font-medium text-[#333]">
                                  プラン
                                </th>
                                <th className="text-left px-4 py-3 font-medium text-[#333]">
                                  料金
                                </th>
                                <th className="text-left px-4 py-3 font-medium text-[#333]">
                                  花の本数
                                </th>
                                <th className="text-left px-4 py-3 font-medium text-[#333]">
                                  配送頻度
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {service.plans.map((plan) => (
                                <tr
                                  key={plan.name}
                                  className="border-b border-[#E5E5E5]"
                                >
                                  <td className="px-4 py-3">{plan.name}</td>
                                  <td className="px-4 py-3 font-medium text-[#4A7C59]">
                                    {plan.price}
                                  </td>
                                  <td className="px-4 py-3">{plan.flowers}</td>
                                  <td className="px-4 py-3">{plan.delivery}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#666]">
                          <span>
                            送料: <strong>{service.shipping}</strong>
                          </span>
                          <span>
                            届き方: <strong>{service.deliveryMethod}</strong>
                          </span>
                          <span>
                            解約: <strong>{service.cancellation}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-[#333] mb-3 border-l-4 border-[#4A7C59] pl-3">
                            メリット
                          </h4>
                          <ul className="space-y-2">
                            {service.pros.map((pro) => (
                              <li
                                key={pro}
                                className="flex items-start gap-2 text-[#666]"
                              >
                                <span className="text-[#4A7C59] font-bold mt-0.5 shrink-0">
                                  +
                                </span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#333] mb-3 border-l-4 border-[#F0D0D0] pl-3">
                            デメリット
                          </h4>
                          <ul className="space-y-2">
                            {service.cons.map((con) => (
                              <li
                                key={con}
                                className="flex items-start gap-2 text-[#666]"
                              >
                                <span className="text-[#C88] font-bold mt-0.5 shrink-0">
                                  -
                                </span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="bg-[#E8F0EB] rounded-xl p-5">
                        <h4 className="font-bold text-[#333] mb-3">
                          こんな方におすすめ
                        </h4>
                        <ul className="space-y-2">
                          {service.recommended.map((rec) => (
                            <li
                              key={rec}
                              className="flex items-start gap-2 text-[#555]"
                            >
                              <span className="text-[#4A7C59] font-bold mt-0.5 shrink-0">
                                &gt;
                              </span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Purpose-based Recommendations ─── */}
        <section id="purpose" className="py-16 bg-[#F8F8F8]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-3">
              目的別おすすめサービス
            </h2>
            <p className="text-center text-[#666] mb-10">
              あなたの目的に合ったサービスを見つけましょう
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {purposes.map((purpose) => (
                <div
                  key={purpose.title}
                  className="bg-white rounded-xl border border-[#E5E5E5] p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-[#333] mb-2">
                    {purpose.title}
                  </h3>
                  <p className="text-sm text-[#666] mb-4">
                    {purpose.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {purpose.services.map((s) => (
                      <p key={s} className="text-sm text-[#555] flex items-start gap-2">
                        <span className="text-[#4A7C59] shrink-0">-</span>
                        {s}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[#4A7C59]">
                    イチオシ: {purpose.best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-3">
              お花の定期便の選び方 5つのポイント
            </h2>
            <p className="text-center text-[#666] mb-10">
              失敗しないために押さえておきたいチェックポイント
            </p>

            <div className="space-y-6">
              {howToChoose.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 md:gap-6 items-start"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#4A7C59] text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#333] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-3">
              よくある質問
            </h2>
            <p className="text-center text-[#666] mb-10">
              お花の定期便に関する疑問にお答えします
            </p>

            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#FDF5F5] transition-colors"
                  >
                    <span className="font-medium text-[#333]">
                      Q. {item.q}
                    </span>
                    <span
                      className={`text-[#4A7C59] text-xl shrink-0 transition-transform ${
                        openFaq === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-[#666] leading-relaxed border-t border-[#E5E5E5] pt-4">
                      A. {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-6">
              まとめ：自分に合ったお花の定期便を選ぼう
            </h2>
            <div className="text-left bg-white rounded-2xl p-6 md:p-8 mb-8 text-[#666] leading-relaxed space-y-4">
              <p>
                お花の定期便は、忙しい毎日の中に彩りを添えてくれるサービスです。
                この記事では人気5社を比較してきましたが、それぞれに特徴があり、一概に「これが一番」とは言えません。
              </p>
              <p>大切なのは、あなたのライフスタイルに合ったサービスを選ぶことです。</p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] font-bold shrink-0">-</span>
                  <span>
                    <strong>初心者で手軽に始めたいなら</strong> → bloomee
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] font-bold shrink-0">-</span>
                  <span>
                    <strong>コスパ最優先なら</strong> → medelu（送料無料で698円〜）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] font-bold shrink-0">-</span>
                  <span>
                    <strong>おしゃれなお花が欲しいなら</strong> → AND PLANTS
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] font-bold shrink-0">-</span>
                  <span>
                    <strong>鮮度重視なら</strong> → 花の定期便（農家直送）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] font-bold shrink-0">-</span>
                  <span>
                    <strong>縛りなしで気軽に試したいなら</strong> → hanameku
                  </span>
                </li>
              </ul>
              <p>
                迷ったら、まずは安いプランやお試しキャンペーンから始めてみることをおすすめします。
                実際に届いたお花を見て、自分の好みに合うかどうかを確かめるのが一番確実な方法です。
              </p>
            </div>
            <a
              href="#diagnosis"
              className="inline-block bg-[#4A7C59] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#3A6247] transition-colors"
            >
              もう一度診断してみる
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#333] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3">お花の定期便ナビ</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                お花の定期便（花のサブスク）の比較情報サイトです。各サービスの料金、届き方、口コミなどを徹底調査し、あなたにぴったりのサービス選びをサポートします。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">コンテンツ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#comparison" className="hover:text-white transition-colors">
                    比較表
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors">
                    サービス詳細
                  </a>
                </li>
                <li>
                  <a href="#purpose" className="hover:text-white transition-colors">
                    目的別おすすめ
                  </a>
                </li>
                <li>
                  <a href="#how-to-choose" className="hover:text-white transition-colors">
                    選び方ガイド
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    よくある質問
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">サービス一覧</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#bloomee" className="hover:text-white transition-colors">
                    bloomee（ブルーミー）
                  </a>
                </li>
                <li>
                  <a href="#medelu" className="hover:text-white transition-colors">
                    medelu（メデル）
                  </a>
                </li>
                <li>
                  <a href="#andplants" className="hover:text-white transition-colors">
                    AND PLANTS
                  </a>
                </li>
                <li>
                  <a href="#hananoteikibin" className="hover:text-white transition-colors">
                    花の定期便
                  </a>
                </li>
                <li>
                  <a href="#hanameku" className="hover:text-white transition-colors">
                    hanameku（ハナメク）
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-500">
              当サイトはアフィリエイトプログラムに参加しています。掲載情報は記事執筆時点のものです。最新情報は各公式サイトでご確認ください。
            </p>
            <p className="text-sm text-gray-500 mt-2">
              &copy; 2026 お花の定期便ナビ All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
