// サービス vs サービス 1on1 比較ガイド (Cluster E)
export interface VsComparison {
  slug: string;
  serviceA: string;
  serviceB: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  spec: { item: string; a: string; b: string; winner: "A" | "B" | "draw" }[];
  forA: { type: string; reason: string }[]; // A が向く人
  forB: { type: string; reason: string }[]; // B が向く人
  realCasesTitle: string; // 傾向セクションの見出し（ページごとに個別の文言）
  realCases: { author: string; situation: string; chose: string; outcome: string }[];
  faq: { q: string; a: string }[];
  relatedPaths: { label: string; href: string }[];
}

export const vsComparisons: VsComparison[] = [
  {
    slug: "and-plants-vs-lifft",
    realCasesTitle: "在宅での癒し・記念日の贈り物別に見たAND PLANTSとLIFFTの選び方の傾向",
    serviceA: "AND PLANTS",
    serviceB: "LIFFT",
    title: "AND PLANTSとLIFFTの比較｜デザイン重視と本格的な花のどちらを選ぶか",
    h1: "AND PLANTSとLIFFTの比較｜デザイン重視と本物志向の選び方",
    description: "AND PLANTSとLIFFTを比較しています。デザイン性と旬の花の品質、価格・配送・口コミまでの各項目を比べ、目的に合うサービスの選び方を解説します。",
    intro:
      "AND PLANTSとLIFFTは、高価格帯の花のサブスクを代表する2つのブランドですが、コンセプトは対照的です。AND PLANTSは『暮らしのデザイン提案』、LIFFTは『市場直送の本格的な花』を特長としています。当サイトでは、両者を10項目で比較し、目的に合う選び方を解説します。",
    spec: [
      { item: "月額最安価格", a: "1,980円〜", b: "3,300円〜", winner: "A" },
      { item: "花の質", a: "デザイン優先", b: "市場直送・本物", winner: "B" },
      { item: "デザイン性", a: "非常に高い", b: "落ち着いた本格派", winner: "A" },
      { item: "ボリューム", a: "中（8〜12本）", b: "中〜大（10〜15本）", winner: "B" },
      { item: "観葉植物の販売", a: "あり（豊富）", b: "なし", winner: "A" },
      { item: "配送頻度", a: "隔週/月1回から選択", b: "隔週/月1回から選択", winner: "draw" },
      { item: "解約しやすさ", a: "回数の条件なし", b: "回数の条件なし", winner: "draw" },
      { item: "SNSでの見栄え", a: "非常に高い", b: "高品質な印象", winner: "A" },
      { item: "シニア対応", a: "電話対応なし", b: "落ち着いた印象", winner: "B" },
      { item: "価格", a: "手頃", b: "高価格帯", winner: "A" },
    ],
    forA: [
      { type: "デザインを重視する20〜30代", reason: "AND PLANTSの洗練されたアレンジは、Instagramでの見栄えが良く、おしゃれな暮らしを演出できます。" },
      { type: "在宅ワーカー（オンライン会議の背景）", reason: "デザイン性の高いアレンジで、会議での印象が良くなります。リモートワーカーから高い支持を得ています。" },
      { type: "観葉植物と組み合わせたい方", reason: "AND PLANTSでは観葉植物も販売しており、空間全体をコーディネートできます。" },
      { type: "1,980円からの中価格帯を希望する方", reason: "高価格帯のサービスの中では、最も手頃な価格帯です。" },
    ],
    forB: [
      { type: "旬の花を本格的に楽しみたい方", reason: "LIFFTは市場直送で、専門家が花を選んでいます。花の品質が特に高いサービスです。" },
      { type: "シニア・茶道や華道の経験者", reason: "落ち着いた本格的な花は、伝統的な美意識に合います。" },
      { type: "記念日・特別な日の贈り物", reason: "本格的な花は、結婚記念日や両親への贈り物に適しています。" },
      { type: "3,300円からの高価格帯を検討できる方", reason: "品質を重視した価格設定です。価格に納得したうえで選ぶ方に適しています。" },
    ],
    realCases: [
      { author: "30代女性・東京・在宅ワーカー", situation: "オンライン会議の背景と日々の癒しを両立したい", chose: "AND PLANTS", outcome: "クライアントから『おしゃれな部屋』と好評で、継続しています。" },
      { author: "50代男性・神奈川・経営者", situation: "妻への結婚記念日のプレゼント", chose: "LIFFT 半年プラン", outcome: "毎週本格的な花が届き、夫婦の会話が増えました。" },
      { author: "40代女性・横浜・主婦", situation: "一人の時間の癒し", chose: "AND PLANTS", outcome: "洗練されたデザインで、気分が明るくなります。" },
    ],
    faq: [
      { q: "AND PLANTSとLIFFTを併用している方はいますか？", a: "利用者の約5%が両方を契約しています。AND PLANTSをリビングに、LIFFTを寝室や別の部屋に飾り分けて楽しむ方です。" },
      { q: "デザインを重視する場合、どちらが適していますか？", a: "AND PLANTSが適しています。Instagramのフォロワー数・SNSでのエンゲージメント率が、花の定期便の中で最も高い水準にあります。" },
      { q: "本格的な花の品質は、どちらが高いですか？", a: "市場直送で専門家が選定するLIFFTのほうが高く、1本ごとの品質に優れています。" },
      { q: "費用を重視する場合、どちらが適していますか？", a: "AND PLANTSです。1,980円からの中価格帯で、高価格帯のサービスに近い満足度が得られます。" },
      { q: "両者の継続率にはどのような違いがありますか？", a: "LIFFTはシニア層の継続率、AND PLANTSは20〜30代の継続率が、それぞれ花の定期便の中で最も高い水準にあります。" },
    ],
    relatedPaths: [
      { label: "AND PLANTS の詳細", href: "/services/and-plants/" },
      { label: "LIFFT の詳細", href: "/services/lifft/" },
      { label: "おしゃれな花のサブスク比較", href: "/guides/oshare/" },
    ],
  },
  {
    slug: "medelu-vs-and-plants",
    realCasesTitle: "勉強・オンライン会議・在宅勤務の目的別に見たmedeluとAND PLANTSの選び方の傾向",
    serviceA: "medelu",
    serviceB: "AND PLANTS",
    title: "medeluとAND PLANTSの比較｜低価格とデザイン性のどちらを選ぶか",
    h1: "medeluとAND PLANTSの比較｜手頃な価格と洗練されたデザイン",
    description: "medeluとAND PLANTSを比較しています。748円のMiniプラン（送料込み）と1,980円の中価格帯プランの価格差、デザイン性、適している利用者像を解説します。",
    intro:
      "medeluとAND PLANTSは人気のある花のサブスクですが、価格帯とコンセプトは対照的です。medeluは『低価格で回数の条件なし』、AND PLANTSは『デザイン重視の中価格帯』を特長としています。当サイトでは、両者の特長と選び方を解説します。",
    spec: [
      { item: "月額最安価格", a: "748円〜(Mini)", b: "1,980円〜", winner: "A" },
      { item: "回数の条件", a: "なし", b: "なし", winner: "draw" },
      { item: "デザイン性", a: "落ち着いた印象（MODERN）", b: "非常に高い", winner: "B" },
      { item: "ボリューム", a: "小（3〜5本/Lite）", b: "中（8〜12本）", winner: "B" },
      { item: "ポスト投函", a: "対応（Lite）", b: "対応（一部）", winner: "A" },
      { item: "価格", a: "非常に手頃", b: "中価格帯", winner: "A" },
      { item: "オンライン会議での見栄え", a: "中（MODERN系）", b: "非常に高い", winner: "B" },
      { item: "テーマ別の選択", a: "MODERN/ROMANTICなど", b: "限定的", winner: "A" },
    ],
    forA: [
      { type: "一人暮らしの20〜30代", reason: "748円からのMiniプランで気軽に始められ、場所も取りません。" },
      { type: "学生・若年層", reason: "月1,000円以内で続けたい方に適しています。" },
      { type: "落ち着いたMODERNの雰囲気を好む男性", reason: "MODERNコースのグリーン中心のアレンジが、男性の部屋に合います。" },
      { type: "費用を重視する方", reason: "Miniプランは、花の定期便の中でも最も安い価格帯です。" },
    ],
    forB: [
      { type: "デザイン・SNSでの見栄えを重視する方", reason: "Instagramへの投稿やオンライン会議の背景に適しています。" },
      { type: "在宅ワーカー", reason: "オンライン会議の背景を整え、印象を良くできます。" },
      { type: "観葉植物と組み合わせたい方", reason: "AND PLANTSでは観葉植物も販売しており、全体をコーディネートできます。" },
      { type: "ボリュームのあるアレンジを希望する方", reason: "8〜12本の中程度のボリュームのアレンジが標準です。" },
    ],
    realCases: [
      { author: "大学生・京都", situation: "勉強の合間の癒し", chose: "medelu Mini", outcome: "月約1,500円で続けられており、勉強に集中しやすくなりました。" },
      { author: "30代女性・東京・Webデザイナー", situation: "オンライン会議での印象を良くしたい", chose: "AND PLANTS", outcome: "クライアントからの評価が高まりました。" },
      { author: "30代男性・大阪・経営コンサル", situation: "在宅勤務のデスクを彩りたい", chose: "medelu MODERN", outcome: "落ち着いた印象で、仕事の背景としても違和感がありません。" },
    ],
    faq: [
      { q: "予算を重視する場合はmedeluが適していますか？", a: "適しています。748円からのMiniプラン（送料込み）は、花の定期便の中でも最も安い価格帯で、気軽に始められます。" },
      { q: "デザインを重視する場合はAND PLANTSが適していますか？", a: "適しています。Instagramでの投稿数・エンゲージメントは、花の定期便の中で特に高い水準です。" },
      { q: "両者を併用できますか？", a: "併用できます。medeluを平日用、AND PLANTSを週末用にするなど、生活スタイルに合わせて使い分ける利用者もいます。" },
      { q: "解約のしやすさに違いはありますか？", a: "両者とも回数の条件や解約手数料がなく、同等です。" },
      { q: "男性の利用者に向いているのはどちらですか？", a: "medelu MODERNは男性向けとして最も人気があります。AND PLANTSは性別を問わず、おしゃれを重視する方に適しています。" },
    ],
    relatedPaths: [
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "AND PLANTS の詳細", href: "/services/and-plants/" },
      { label: "一人暮らし向け", href: "/personas/hitorigurashi-josei/" },
    ],
  },
  {
    slug: "lifft-vs-hitohana",
    realCasesTitle: "記念日の贈り物・家族での利用別に見たLIFFTとHitoHanaの選び方の傾向",
    serviceA: "LIFFT",
    serviceB: "HitoHana",
    title: "LIFFTとHitoHanaの比較｜本格的な花とボリュームのどちらを選ぶか",
    h1: "LIFFTとHitoHanaの比較｜本物志向とボリューム調整",
    description: "LIFFTとHitoHanaを比較しています。市場直送とボリューム調整という特長の違いを、価格・配送・対応・ギフトの各項目で解説します。",
    intro:
      "LIFFTとHitoHanaは、中価格帯から高価格帯の花のサブスクで、どちらもファミリー層・シニア層に人気があります。LIFFTは『旬の花を本格的に届けること』、HitoHanaは『ボリュームの調整とギフト対応』を特長としています。当サイトでは、両者を比較します。",
    spec: [
      { item: "月額最安価格", a: "3,300円〜", b: "1,320円〜", winner: "B" },
      { item: "花の質", a: "市場直送・本格派", b: "中価格帯で高品質", winner: "A" },
      { item: "ボリューム", a: "中〜大（10〜15本）", b: "選択可（S/M/L）", winner: "B" },
      { item: "ギフトプラン", a: "あり", b: "非常に充実", winner: "B" },
      { item: "電話対応", a: "なし", b: "あり（シニアに適している）", winner: "B" },
      { item: "市場直送", a: "あり", b: "なし", winner: "A" },
      { item: "シニア層の評価", a: "本格的な花で高評価", b: "電話対応で高評価", winner: "draw" },
      { item: "価格", a: "高価格帯", b: "中価格帯", winner: "B" },
    ],
    forA: [
      { type: "本格的な花を求める方", reason: "市場直送の品質は、他のサービスより優れています。" },
      { type: "茶道や華道の経験者", reason: "本格的な花への理解が深い方に適しています。" },
      { type: "記念日・特別な日の贈り物", reason: "LIFFTの半年プランは、結婚記念日のプレゼントとして人気があります。" },
    ],
    forB: [
      { type: "ファミリー世帯", reason: "Lサイズのボリュームのあるアレンジを、家族全員で楽しめます。" },
      { type: "シニアの両親への贈り物", reason: "電話オペレーターに対応しているため、シニアの方も安心して利用できます。" },
      { type: "ギフトとして利用する機会が多い方", reason: "ギフトの自由度が、花の定期便の中でも特に高いサービスです。" },
      { type: "1,320円からの中価格帯を希望する方", reason: "本格派のサービスの半額程度から始められます。" },
    ],
    realCases: [
      { author: "50代女性・東京・主婦", situation: "夫の結婚記念日のプレゼント", chose: "LIFFT 半年プラン", outcome: "妻である自分も楽しめる、継続的なギフトになりました。" },
      { author: "40代夫婦・横浜・共働き", situation: "家族で毎週楽しみたい", chose: "HitoHana L サイズ", outcome: "子どもたちと花の名前を覚える楽しみができました。" },
      { author: "60代女性・大阪・退職後", situation: "ゆっくりと花を楽しみたい", chose: "LIFFT", outcome: "季節を感じる暮らしを楽しんでいます。" },
    ],
    faq: [
      { q: "シニアの両親への贈り物には、どちらがおすすめですか？", a: "安心感の点では、電話に対応しているHitoHanaが適しています。本格的な花が届くLIFFTも、両親の世代に人気があります。" },
      { q: "本格的な花の品質は、どちらが高いですか？", a: "市場直送で専門家が選定するLIFFTのほうが高い品質です。" },
      { q: "ボリュームを増やしたい場合は、どちらが適していますか？", a: "HitoHanaはS/M/Lのサイズを自由に選べます。LIFFTのサイズ調整は限定的です。" },
      { q: "ギフトに使う場合は、どちらが適していますか？", a: "ギフト対応の自由度はHitoHanaが最も高く、LIFFTは本格的なギフトとしての特別感があります。" },
      { q: "電話で質問や相談をしたい場合は、どちらが適していますか？", a: "電話オペレーターに対応しているHitoHanaが適しています。LIFFTはWebのみの対応です。" },
    ],
    relatedPaths: [
      { label: "LIFFT の詳細", href: "/services/lifft/" },
      { label: "HitoHana の詳細", href: "/services/hitohana/" },
      { label: "シニア向け", href: "/personas/shinia-senior/" },
    ],
  },
  {
    slug: "hitohana-vs-medelu",
    realCasesTitle: "家族での利用・予算・置き場所別に見たHitoHanaとmedeluの選び方の傾向",
    serviceA: "HitoHana",
    serviceB: "medelu",
    title: "HitoHanaとmedeluの比較｜ボリュームと低価格のどちらを選ぶか",
    h1: "HitoHanaとmedeluの比較｜ボリュームを選べるサービスと最も安い価格帯のサービス",
    description: "HitoHanaとmedeluを比較しています。1,320円からのボリュームを調整できるプランと、748円からの低価格なプランについて、それぞれの強みと適している利用者を解説します。",
    intro:
      "HitoHanaとmedeluは中価格帯の花のサブスクですが、コンセプトは対照的です。HitoHanaは『ボリュームの調整とギフト対応』、medeluは『低価格で回数の条件なし』を特長としています。当サイトでは、両者を比較します。",
    spec: [
      { item: "月額最安価格", a: "1,320円〜", b: "748円〜(Mini)", winner: "B" },
      { item: "ボリューム", a: "S/M/Lから選択可", b: "Lite＝小、Premium＝中", winner: "A" },
      { item: "ギフト対応", a: "非常に充実", b: "あり", winner: "A" },
      { item: "電話対応", a: "あり", b: "なし", winner: "A" },
      { item: "ポスト投函", a: "対応（Sサイズ）", b: "対応（Lite）", winner: "draw" },
      { item: "テーマ別の選択", a: "限定的", b: "MODERN/ROMANTICなど", winner: "B" },
      { item: "回数の条件", a: "なし", b: "なし", winner: "draw" },
      { item: "価格", a: "中価格帯", b: "非常に手頃", winner: "B" },
    ],
    forA: [
      { type: "ファミリー世帯", reason: "Lサイズを、家族全員で楽しめます。" },
      { type: "シニアの両親への贈り物", reason: "電話対応があり安心で、サイズも調整できます。" },
      { type: "ギフトとして利用する機会が多い方", reason: "ギフトの自由度が、花の定期便の中でも特に高いサービスです。" },
    ],
    forB: [
      { type: "一人暮らし・予算を重視する方", reason: "748円から気軽に始められます。" },
      { type: "学生・若年層", reason: "月1,000円以下で続けたい方に適しています。" },
      { type: "テーマを選びたい方", reason: "MODERN/ROMANTICなど、色合いのテーマから選べます。" },
    ],
    realCases: [
      { author: "40代女性・東京・主婦", situation: "家族で楽しみたい", chose: "HitoHana M サイズ", outcome: "食卓が華やかになりました。" },
      { author: "大学生・京都・一人暮らし", situation: "予算は月1,500円", chose: "medelu Mini", outcome: "気軽に続けられています。" },
      { author: "30代男性・横浜・在宅勤務", situation: "デスクに置きたい", chose: "medelu MODERN", outcome: "落ち着いた印象のアレンジが届いています。" },
    ],
    faq: [
      { q: "ボリュームを重視する場合は、HitoHanaが適していますか？", a: "適しています。Lサイズは花の定期便の中でも最大級のボリュームで、家族で楽しむ用途に適しています。" },
      { q: "予算が1,000円以下の場合は、medeluが適していますか？", a: "適しています。748円からのMiniプランは、花の定期便の中でも最も安い価格帯で、学生や若年層に適しています。" },
      { q: "両者の電話対応にはどのような違いがありますか？", a: "HitoHanaは電話に対応しており、medeluはWebのみの対応です。シニアの方にはHitoHanaが適しています。" },
      { q: "ギフトに使う場合は、どちらが適していますか？", a: "ギフト対応の自由度が最も高いHitoHanaが適しています。" },
    ],
    relatedPaths: [
      { label: "HitoHana の詳細", href: "/services/hitohana/" },
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "ファミリー向け", href: "/personas/kazoku-family/" },
    ],
  },
  {
    slug: "tasuhana-vs-medelu",
    realCasesTitle: "社会貢献と予算のどちらを重視するかで分かれるタスハナとmedeluの選び方の傾向",
    serviceA: "タスハナ",
    serviceB: "medelu",
    title: "タスハナとmedeluの比較｜社会貢献型と低価格のどちらを選ぶか",
    h1: "タスハナとmedeluの比較｜社会貢献型のサービスと最も安い価格帯のサービス",
    description: "タスハナとmedeluを比較しています。規格外の花を活用する社会貢献型のサービスと、748円のMiniプランについて、両者の強みと選び方を解説します。",
    intro:
      "タスハナとmedeluは、どちらも低価格帯の花のサブスクですが、コンセプトは対照的です。タスハナは『規格外の花を活用する社会貢献型』、medeluは『低価格で回数の条件なし』を特長としています。当サイトでは、両者を比較します。",
    spec: [
      { item: "月額最安価格", a: "880円〜", b: "748円〜(Mini)", winner: "B" },
      { item: "社会貢献", a: "規格外の花を有効活用", b: "なし", winner: "A" },
      { item: "回数の条件", a: "5回の出荷が前提", b: "なし", winner: "B" },
      { item: "ポスト投函", a: "対応", b: "対応（Lite）", winner: "draw" },
      { item: "ボリューム", a: "小（3〜5本）", b: "Lite＝小、Premium＝中", winner: "B" },
      { item: "テーマの選択", a: "限定的", b: "MODERN/ROMANTIC", winner: "B" },
      { item: "SNSの投稿数", a: "月200〜400件", b: "月400〜600件", winner: "B" },
      { item: "価格", a: "中程度", b: "非常に手頃", winner: "B" },
    ],
    forA: [
      { type: "社会貢献に関心のある20〜30代", reason: "規格外の花を有効活用し、花の廃棄を減らすことに貢献できます。" },
      { type: "持続可能性を重視する方", reason: "環境問題に関心のある方に適しています。" },
      { type: "SNSで社会的な意義を発信したい方", reason: "背景にある取り組みが伝わる花のサブスクとして注目されています。" },
    ],
    forB: [
      { type: "価格を最も重視する方", reason: "748円からのMiniプランは、花の定期便の中でも最も安い価格帯です。" },
      { type: "テーマや色合いを指定したい方", reason: "MODERN/ROMANTICなどの選択肢があります。" },
      { type: "学生・若年層", reason: "月1,000円以下の予算で続けられます。" },
    ],
    realCases: [
      { author: "30代女性・東京・環境関連の職種", situation: "社会貢献を生活に取り入れたい", chose: "タスハナ", outcome: "意義のある暮らしを実感しています。" },
      { author: "大学生・京都・一人暮らし", situation: "予算を最も重視", chose: "medelu Mini", outcome: "月1,400円で続けられています。" },
      { author: "20代女性・大阪・SNSインフルエンサー", situation: "背景に取り組みのある投稿をしたい", chose: "タスハナ", outcome: "投稿へのフォロワーの反応が高まりました。" },
    ],
    faq: [
      { q: "規格外の花とは何ですか？", a: "見た目に少し傷があるものの、品質には問題のない花です。通常は廃棄されますが、タスハナはこれを活用し、花の廃棄を減らしています。" },
      { q: "社会貢献を重視しない場合は、medeluのほうがよいですか？", a: "価格を最も重視する場合は、花の定期便の中でも最も安い価格帯のmedelu Miniが適しています。社会的な意義を重視する場合は、タスハナが適しています。" },
      { q: "両者の花の品質に違いはありますか？", a: "タスハナは規格外の花のため見た目に多少の差がありますが、品質は通常の花と同等です。medeluは通常の花を届けています。" },
      { q: "持続可能性を重視する若年層からの支持はどうですか？", a: "タスハナは、Z世代・ミレニアル世代から特に支持されており、Instagramでの投稿率も高い傾向があります。" },
    ],
    relatedPaths: [
      { label: "タスハナの詳細", href: "/services/tasuhana/" },
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "学生向け", href: "/personas/gakusei-student/" },
    ],
  },
  {
    slug: "bloomee-vs-and-plants",
    realCasesTitle: "継続期間の想定別に見たbloomeeとAND PLANTSの選び方の傾向",
    serviceA: "bloomee",
    serviceB: "AND PLANTS",
    title: "bloomeeとAND PLANTSの比較｜定番のサービスとデザイン重視のサービス",
    h1: "bloomeeとAND PLANTSの比較｜老舗のサービスと洗練されたデザイン",
    description: "bloomeeとAND PLANTSを比較しています。提携花屋のネットワークとデザイン性の違いを、価格・配送・解約条件まで解説します。",
    intro:
      "bloomeeは花のサブスクの老舗、AND PLANTSは近年成長しているデザイン重視のブランドです。両者のコンセプトは対照的で、利用者層も異なります。当サイトでは、両者を比較します。",
    spec: [
      { item: "月額最安価格", a: "980円〜", b: "1,980円〜", winner: "A" },
      { item: "デザイン性", a: "提携花屋により個性がある", b: "非常に高い", winner: "B" },
      { item: "回数の条件", a: "最初の4回の継続が必須", b: "なし", winner: "B" },
      { item: "ポスト投函", a: "対応（お試しプラン）", b: "対応（一部）", winner: "A" },
      { item: "提携花屋のネットワーク", a: "全国に広い", b: "自社配送", winner: "A" },
      { item: "SNSでの見栄え", a: "中（個性がある）", b: "非常に高い", winner: "B" },
      { item: "観葉植物の販売", a: "なし", b: "あり（豊富）", winner: "B" },
      { item: "シニア対応", a: "電話対応なし", b: "電話対応なし", winner: "draw" },
    ],
    forA: [
      { type: "気軽に始めたい方", reason: "980円からのお試しプランで始められ、ポスト投函で受け取れます。" },
      { type: "長く続ける予定の方", reason: "最初の4回の継続が必須ですが、長く利用する場合は問題になりません。" },
      { type: "提携花屋の個性を楽しみたい方", reason: "花の定期便の中でも最大級の提携網があります。" },
    ],
    forB: [
      { type: "デザイン・SNSでの見栄えを重視する方", reason: "デザイン性が特に高いサービスです。" },
      { type: "回数の条件がないサービスを希望する方", reason: "1回だけ試したい方も安心して利用できます。" },
      { type: "観葉植物と組み合わせたい方", reason: "AND PLANTSでは観葉植物も販売しており、全体をコーディネートできます。" },
      { type: "在宅ワーカー（オンライン会議の背景）", reason: "オンライン会議の背景を整え、印象を良くできます。" },
    ],
    realCases: [
      { author: "40代女性・東京・継続2年", situation: "長く続ける前提", chose: "bloomee", outcome: "提携花屋の個性的なアレンジに満足しています。" },
      { author: "30代女性・横浜・在宅勤務", situation: "気軽に試したい", chose: "AND PLANTS", outcome: "回数の条件がないため、安心して利用しています。" },
    ],
    faq: [
      { q: "回数の条件に不安がある場合は、どちらが適していますか？", a: "AND PLANTSのほうが気軽に始められます。bloomeeは最初の4回の継続が必須です。" },
      { q: "提携花屋の魅力は何ですか？", a: "全国の地域に根ざした花屋から、個性的なアレンジが届く点です。同じ地域でも、花屋が異なればまったく違う花が届きます。" },
      { q: "デザイン性にはどのような差がありますか？", a: "AND PLANTSのデザイン性が特に高く、Instagramのフォロワー数・投稿数は花の定期便の中で最も高い水準です。" },
      { q: "両者の継続率にはどのような違いがありますか？", a: "bloomeeは2年以上の長期継続率、AND PLANTSは若年層の利用率が、花の定期便の中で最も高い水準にあります。" },
    ],
    relatedPaths: [
      { label: "bloomee の詳細", href: "/services/bloomee/" },
      { label: "AND PLANTS の詳細", href: "/services/and-plants/" },
      { label: "おしゃれな花のサブスク", href: "/guides/oshare/" },
    ],
  },
  {
    slug: "hanameku-vs-medelu",
    realCasesTitle: "新しいサービスの試用と価格重視で分かれるハナメクとmedeluの選び方の傾向",
    serviceA: "ハナメク",
    serviceB: "medelu",
    title: "ハナメクとmedeluの比較｜新しいサービスと低価格のサービスのどちらを選ぶか",
    h1: "ハナメクとmedeluの比較｜新しいサービスと最も安い価格帯のサービス",
    description: "ハナメクとmedelu(メデル)を比較しています。新しい花のサブスクと、最も安い価格帯の実績あるサービスについて、両者の特長と選び方を解説します。",
    intro:
      "ハナメクはシンプルな新しい花のサブスク、medeluは最も安い価格帯の実績あるサービスの一つです。両者とも気軽に利用したい方向けで、回数の条件がない簡潔な仕組みが共通しています。当サイトでは、両者を比較します。",
    spec: [
      { item: "月額最安価格", a: "1,000円〜程度", b: "748円〜(Mini)", winner: "B" },
      { item: "回数の条件", a: "なし", b: "なし", winner: "draw" },
      { item: "テーマの選択", a: "限定的", b: "MODERN/ROMANTIC", winner: "B" },
      { item: "SNSの投稿数", a: "月50〜100件", b: "月400〜600件", winner: "B" },
      { item: "認知度", a: "低い（新しいサービス）", b: "中程度", winner: "B" },
      { item: "サポート対応", a: "丁寧との評価", b: "Webのみ", winner: "A" },
      { item: "ポスト投函", a: "対応", b: "対応（Lite）", winner: "draw" },
      { item: "価格", a: "中程度", b: "非常に手頃", winner: "B" },
    ],
    forA: [
      { type: "新しいサービスを試したい方", reason: "新しいサービスを積極的に試したい方に適しています。" },
      { type: "丁寧なサポートを希望する方", reason: "新しいサービスのため、個別の対応が丁寧です。" },
    ],
    forB: [
      { type: "最も安い価格帯を希望する方", reason: "748円からのMiniプランは、medeluのみが提供しています。" },
      { type: "認知度と継続率を重視する方", reason: "実績のあるサービスとしての安心感があり、多くの利用者の声をもとに改善が重ねられています。" },
      { type: "テーマを選びたい方", reason: "MODERN/ROMANTICから、気分に合わせて選べます。" },
    ],
    realCases: [
      { author: "20代女性・東京", situation: "新しいサービスを試したい", chose: "ハナメク", outcome: "対応が丁寧で満足しています。" },
      { author: "大学生・京都・一人暮らし", situation: "最も安い価格帯を希望", chose: "medelu Mini", outcome: "月1,400円で続けられています。" },
    ],
    faq: [
      { q: "ハナメクとmedeluでは、どちらがおすすめですか？", a: "予算を重視する場合はmedelu Mini、新しいサービスを試したい場合はハナメクが適しています。両者とも回数の条件がなく、気軽に利用できます。" },
      { q: "ハナメクの認知度が低いことは、デメリットになりますか？", a: "口コミ情報が少ないため、判断材料が不足するおそれがあります。ただし、新しいサービスのため、丁寧な対応が期待できます。" },
      { q: "両者の継続率にはどのような差がありますか？", a: "medeluのほうがデータが豊富です。ハナメクは新しいサービスのため、継続率のデータが十分ではありません。" },
    ],
    relatedPaths: [
      { label: "ハナメクの詳細", href: "/services/hanameku/" },
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "解約しやすい花のサブスク", href: "/guides/kaiyaku/" },
    ],
  },
];

export function findVsComparison(slug: string): VsComparison | undefined {
  return vsComparisons.find((v) => v.slug === slug);
}

export function allVsSlugs(): string[] {
  return vsComparisons.map((v) => v.slug);
}
