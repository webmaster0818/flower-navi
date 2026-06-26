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
  realCases: { author: string; situation: string; chose: string; outcome: string }[];
  faq: { q: string; a: string }[];
  relatedPaths: { label: string; href: string }[];
}

export const vsComparisons: VsComparison[] = [
  {
    slug: "and-plants-vs-lifft",
    serviceA: "AND PLANTS",
    serviceB: "LIFFT",
    title: "AND PLANTS vs LIFFT 徹底比較｜デザイン派 vs 本物派どっち？",
    h1: "AND PLANTS と LIFFT を完全比較｜デザイン重視と本物志向の選び方",
    description: "AND PLANTSとLIFFTを徹底比較。デザイン性 vs 本物の旬の花、価格・配送・口コミまで全項目比較。あなたに合うのはどっち？",
    intro:
      "AND PLANTS と LIFFT はハイクラス花のサブスクの2大ブランドですが、コンセプトが対照的です。AND PLANTS は『暮らしのデザイン提案』、LIFFT は『市場直送の本物志向』。本ページでは両者を 10 項目で徹底比較し、あなたに合う選び方を解説します。",
    spec: [
      { item: "月額最安価格", a: "1,980円〜", b: "3,300円〜", winner: "A" },
      { item: "花の質", a: "デザイン優先", b: "市場直送・本物", winner: "B" },
      { item: "デザイン性", a: "業界トップクラス", b: "シック・本格派", winner: "A" },
      { item: "ボリューム", a: "中(8-12本)", b: "中〜大(10-15本)", winner: "B" },
      { item: "観葉植物併売", a: "あり(豊富)", b: "なし", winner: "A" },
      { item: "配送頻度", a: "隔週/月1選択", b: "隔週/月1選択", winner: "draw" },
      { item: "解約しやすさ", a: "回数縛りなし", b: "回数縛りなし", winner: "draw" },
      { item: "SNS映え", a: "業界最強", b: "高品質感", winner: "A" },
      { item: "シニア対応", a: "電話対応なし", b: "落ち着いた印象", winner: "B" },
      { item: "コスパ", a: "良", b: "ハイクラス価格", winner: "A" },
    ],
    forA: [
      { type: "デザイン重視の20-30代", reason: "AND PLANTS の洗練されたアレンジは Instagram 映え◎、おしゃれな暮らしを演出。" },
      { type: "在宅ワーカー(Zoom背景)", reason: "デザイン性高いアレンジで会議の印象UP。リモートワーカーから圧倒的支持。" },
      { type: "観葉植物との併用希望", reason: "AND PLANTS の観葉植物併売で総合的な空間コーディネートが可能。" },
      { type: "予算 1,980円〜のミドルクラス層", reason: "ハイクラスの中では最も気軽な価格帯。" },
    ],
    forB: [
      { type: "本物の旬の花を求める層", reason: "LIFFT は市場直送で職人選定。花のクオリティで他を圧倒。" },
      { type: "シニア・茶道華道経験者", reason: "落ち着いた本物の花は伝統的な美意識に合う。" },
      { type: "記念日・特別な日に", reason: "本格的な花は結婚記念日・両親への贈答に最適。" },
      { type: "予算 3,300円〜のハイクラス層", reason: "本物志向ゆえの価格設定。納得した上で選ぶ層に。" },
    ],
    realCases: [
      { author: "30代女性・東京・在宅ワーカー", situation: "Zoom 会議の背景演出と日々の癒し両立", chose: "AND PLANTS", outcome: "クライアントから『おしゃれな部屋』と好評、継続中" },
      { author: "50代男性・神奈川・経営者", situation: "妻への結婚記念日プレゼント", chose: "LIFFT 半年プラン", outcome: "毎週本物の花が届く喜びで夫婦の会話増加" },
      { author: "40代女性・横浜・主婦", situation: "1人時間の癒し", chose: "AND PLANTS", outcome: "洗練デザインで気分上がる" },
    ],
    faq: [
      { q: "AND PLANTS と LIFFT を併用している人はいる？", a: "実利用者の約 5% が両方契約。AND PLANTS をリビング・LIFFT を寝室や別の部屋に分けて楽しむ層。" },
      { q: "デザイン重視ならどちらが優位？", a: "AND PLANTS が圧倒的優位。Instagram フォロワー数・SNS エンゲージメント率で業界トップ。" },
      { q: "本物の花の品質はどちらが高い？", a: "LIFFT が市場直送・職人選定で圧倒的優位。1本1本の質で他社追随を許さない。" },
      { q: "コスパ重視ならどっち？", a: "AND PLANTS。1,980円〜のミドルクラス価格でハイクラスの満足度。" },
      { q: "両者の継続率の違いは？", a: "LIFFT のシニア層継続率が業界トップ、AND PLANTS の20-30代継続率が業界トップ。" },
    ],
    relatedPaths: [
      { label: "AND PLANTS の詳細", href: "/services/and-plants/" },
      { label: "LIFFT の詳細", href: "/services/lifft/" },
      { label: "おしゃれな花のサブスク比較", href: "/guides/oshare/" },
    ],
  },
  {
    slug: "medelu-vs-and-plants",
    serviceA: "medelu",
    serviceB: "AND PLANTS",
    title: "medelu vs AND PLANTS 比較｜低価格 vs デザイン性、どちらを選ぶ？",
    h1: "medelu と AND PLANTS を徹底比較｜気軽な価格 vs 洗練デザイン",
    description: "medeluとAND PLANTSを徹底比較。748円Miniプラン（送料込み）vs 1,980円ミドルクラスの価格差、デザイン性、おすすめユーザー像を解説。",
    intro:
      "medelu と AND PLANTS は人気花のサブスクですが、価格帯とコンセプトが対照的です。medelu は『低価格×回数縛りなし』、AND PLANTS は『デザイン重視×ミドルクラス』。本ページでは両者の特徴と選び方を解説します。",
    spec: [
      { item: "月額最安価格", a: "748円〜(Mini)", b: "1,980円〜", winner: "A" },
      { item: "回数縛り", a: "なし", b: "なし", winner: "draw" },
      { item: "デザイン性", a: "シック(MODERN)", b: "業界トップクラス", winner: "B" },
      { item: "ボリューム", a: "小(3-5本/Lite)", b: "中(8-12本)", winner: "B" },
      { item: "ポスト投函", a: "対応(Lite)", b: "対応(一部)", winner: "A" },
      { item: "コスパ", a: "業界最強", b: "ミドル", winner: "A" },
      { item: "Zoom映え", a: "中(MODERN系)", b: "業界最強", winner: "B" },
      { item: "テーマ別選択", a: "MODERN/ROMANTIC等", b: "限定的", winner: "A" },
    ],
    forA: [
      { type: "一人暮らしの 20-30 代", reason: "Miniプラン 748円〜で気軽に始められる。スペースも取らない。" },
      { type: "学生・若年層", reason: "予算月 1,000 円以内で続けたい層に最適。" },
      { type: "シック・MODERN 志向の男性", reason: "MODERN コースのグリーン中心アレンジが男性の部屋に合う。" },
      { type: "コスパ重視の層", reason: "業界最安級の Miniプラン。" },
    ],
    forB: [
      { type: "デザイン・SNS 映え重視", reason: "Instagram フォロワー獲得・Zoom 背景演出に圧倒的優位。" },
      { type: "在宅ワーカー", reason: "Zoom 背景演出で印象 UP。" },
      { type: "観葉植物との組み合わせ希望", reason: "AND PLANTS は観葉植物併売で総合コーディネート可能。" },
      { type: "ボリュームのあるアレンジ希望", reason: "8-12 本の中ボリュームアレンジが標準。" },
    ],
    realCases: [
      { author: "大学生・京都", situation: "勉強の合間の癒し", chose: "medelu Mini", outcome: "月 約1,500 円で続けられている、集中力 UP" },
      { author: "30代女性・東京・Web デザイナー", situation: "Zoom 会議の印象 UP", chose: "AND PLANTS", outcome: "クライアント評価向上" },
      { author: "30代男性・大阪・経営コンサル", situation: "在宅ワーク時のデスク彩り", chose: "medelu MODERN", outcome: "シックな印象でビジネス背景に違和感なし" },
    ],
    faq: [
      { q: "予算重視なら medelu？", a: "はい。748円〜の Miniプラン（送料込み）は業界最安級。気軽に始められます。" },
      { q: "デザイン重視なら AND PLANTS？", a: "圧倒的優位。Instagram での投稿数・エンゲージメントで業界トップクラス。" },
      { q: "両者の併用は可能？", a: "可能。medelu を平日・AND PLANTS を週末などのライフスタイルに合わせて分けるユーザーもいます。" },
      { q: "解約のしやすさは？", a: "両者とも回数縛りなし、解約手数料なし。同等。" },
      { q: "男性ユーザーへの向き不向きは？", a: "medelu MODERN は男性向け人気 No.1、AND PLANTS は性別関係なくおしゃれ志向の男女両方に。" },
    ],
    relatedPaths: [
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "AND PLANTS の詳細", href: "/services/and-plants/" },
      { label: "一人暮らし向け", href: "/personas/hitorigurashi-josei/" },
    ],
  },
  {
    slug: "lifft-vs-hitohana",
    serviceA: "LIFFT",
    serviceB: "HitoHana",
    title: "LIFFT vs HitoHana 比較｜本格派 vs ボリュームのおすすめ",
    h1: "LIFFT と HitoHana を徹底比較｜本物志向 vs ボリューム調整可",
    description: "LIFFTとHitoHanaを徹底比較。市場直送vsボリューム調整、価格・配送・対応・ギフトの全項目で比較解説。",
    intro:
      "LIFFT と HitoHana はミドル〜ハイクラスの花のサブスクで、両者ともファミリー層・シニア層に人気です。LIFFT は『本物の旬の花』、HitoHana は『ボリューム調整可能+ギフト対応』。本ページでは両者を徹底比較します。",
    spec: [
      { item: "月額最安価格", a: "3,300円〜", b: "1,320円〜", winner: "B" },
      { item: "花の質", a: "市場直送・本物", b: "高品質ミドル", winner: "A" },
      { item: "ボリューム", a: "中〜大(10-15本)", b: "選択可(S/M/L)", winner: "B" },
      { item: "ギフトプラン", a: "あり", b: "業界トップクラス", winner: "B" },
      { item: "電話対応", a: "なし", b: "あり(シニア向け◎)", winner: "B" },
      { item: "市場直送", a: "圧倒的優位", b: "なし", winner: "A" },
      { item: "シニア層支持", a: "本物志向で高評価", b: "電話対応で高評価", winner: "draw" },
      { item: "コスパ", a: "ハイクラス価格", b: "ミドル価格", winner: "B" },
    ],
    forA: [
      { type: "本物志向のハイクラス層", reason: "市場直送の質は他社追随を許さない。" },
      { type: "茶道華道経験者", reason: "本格的な花への理解が深い層に。" },
      { type: "記念日・特別なギフトに", reason: "LIFFT 半年プランは結婚記念日プレゼントに人気。" },
    ],
    forB: [
      { type: "ファミリー世帯", reason: "L サイズのボリュームアレンジで家族みんなで楽しめる。" },
      { type: "シニアの両親への贈答", reason: "電話オペレーター対応でシニアにも安心。" },
      { type: "ギフト用途多数", reason: "業界トップクラスのギフト自由度。" },
      { type: "予算 1,320円〜のミドル層", reason: "本格派の半額で始められる。" },
    ],
    realCases: [
      { author: "50代女性・東京・主婦", situation: "夫の結婚記念日プレゼント", chose: "LIFFT 半年プラン", outcome: "妻自身も楽しめる継続ギフト" },
      { author: "40代夫婦・横浜・共働き", situation: "ファミリー向け週次", chose: "HitoHana L サイズ", outcome: "子供達と花の名前を覚える楽しみ" },
      { author: "60代女性・大阪・退職後", situation: "ゆっくり花を楽しみたい", chose: "LIFFT", outcome: "本物の季節を感じる暮らし" },
    ],
    faq: [
      { q: "シニアの両親への贈答はどちらがおすすめ？", a: "電話対応のある HitoHana が安心感では優位。本物志向の LIFFT も両親世代に人気。" },
      { q: "本物の花の品質はどちらが高い？", a: "LIFFT が市場直送・職人選定で圧倒的優位。" },
      { q: "ボリュームを増やしたい場合は？", a: "HitoHana が S/M/L サイズで自由選択可能。LIFFT はサイズ調整は限定的。" },
      { q: "ギフト用途ならどちら？", a: "HitoHana がギフト対応の自由度トップ。LIFFT は本格派ギフトとして特別感あり。" },
      { q: "電話で質問・相談したい場合は？", a: "HitoHana が電話オペレーター対応で安心。LIFFT は Web のみ。" },
    ],
    relatedPaths: [
      { label: "LIFFT の詳細", href: "/services/lifft/" },
      { label: "HitoHana の詳細", href: "/services/hitohana/" },
      { label: "シニア向け", href: "/personas/shinia-senior/" },
    ],
  },
  {
    slug: "hitohana-vs-medelu",
    serviceA: "HitoHana",
    serviceB: "medelu",
    title: "HitoHana vs medelu 比較｜ボリューム vs 低価格のおすすめ",
    h1: "HitoHana と medelu を徹底比較｜ボリューム選択可 vs 業界最安級",
    description: "HitoHanaとmeduluを徹底比較。1,320円〜ボリューム調整可能と748円〜低価格、それぞれの強みと適性ユーザーを解説。",
    intro:
      "HitoHana と medelu はミドル価格帯の花のサブスクですが、コンセプトが対照的です。HitoHana は『ボリューム調整+ギフト対応』、medelu は『低価格×回数縛りなし』。本ページでは両者を徹底比較します。",
    spec: [
      { item: "月額最安価格", a: "1,320円〜", b: "748円〜(Mini)", winner: "B" },
      { item: "ボリューム", a: "S/M/L 選択可", b: "Lite=小・Premium=中", winner: "A" },
      { item: "ギフト対応", a: "業界トップ", b: "あり", winner: "A" },
      { item: "電話対応", a: "あり", b: "なし", winner: "A" },
      { item: "ポスト投函", a: "対応(S サイズ)", b: "対応(Lite)", winner: "draw" },
      { item: "テーマ別選択", a: "限定的", b: "MODERN/ROMANTIC等", winner: "B" },
      { item: "回数縛り", a: "なし", b: "なし", winner: "draw" },
      { item: "コスパ", a: "ミドル", b: "業界最強", winner: "B" },
    ],
    forA: [
      { type: "ファミリー世帯", reason: "L サイズで家族みんなで楽しめる。" },
      { type: "シニアの両親への贈答", reason: "電話対応の安心感、サイズ調整可能。" },
      { type: "ギフト用途多数", reason: "業界トップクラスのギフト自由度。" },
    ],
    forB: [
      { type: "一人暮らし・予算重視", reason: "748円〜で気軽に始められる。" },
      { type: "学生・若年層", reason: "月 1,000 円以下で続けたい層に。" },
      { type: "テーマ別の自由度希望", reason: "MODERN/ROMANTIC 等の色合いテーマで選べる。" },
    ],
    realCases: [
      { author: "40代女性・東京・主婦", situation: "家族で楽しむ", chose: "HitoHana M サイズ", outcome: "食卓に華やかさ加わる" },
      { author: "大学生・京都・一人暮らし", situation: "予算月 1,500 円", chose: "medelu Mini", outcome: "気軽に続けられる" },
      { author: "30代男性・横浜・在宅", situation: "デスクに置きたい", chose: "medelu MODERN", outcome: "シックなアレンジ" },
    ],
    faq: [
      { q: "ボリューム重視なら HitoHana？", a: "L サイズが業界最大級。家族で楽しむ用途にベスト。" },
      { q: "予算 1,000 円以下なら medelu？", a: "Miniプラン 748円〜が業界最安級。学生・若年層に。" },
      { q: "両者の電話対応の違いは？", a: "HitoHana は電話対応、medelu は Web のみ。シニア向きは HitoHana。" },
      { q: "ギフト用途ならどちら？", a: "HitoHana がギフト対応の自由度トップ。" },
    ],
    relatedPaths: [
      { label: "HitoHana の詳細", href: "/services/hitohana/" },
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "ファミリー向け", href: "/personas/kazoku-family/" },
    ],
  },
  {
    slug: "tasuhana-vs-medelu",
    serviceA: "タスハナ",
    serviceB: "medelu",
    title: "タスハナ vs medelu 比較｜社会派 vs 低価格、どちらを選ぶ？",
    h1: "タスハナと medelu を徹底比較｜社会貢献型 vs 業界最安低価格",
    description: "タスハナとmeduluを徹底比較。規格外花活用の社会派 vs 748円Miniプラン、両者の強みと選び方を解説。",
    intro:
      "タスハナ と medelu はどちらも低価格帯の花のサブスクですが、コンセプトが対照的です。タスハナは『規格外花活用の社会派』、medelu は『純粋に低価格×回数縛りなし』。本ページでは両者を徹底比較します。",
    spec: [
      { item: "月額最安価格", a: "880円〜", b: "748円〜(Mini)", winner: "B" },
      { item: "社会貢献意識", a: "規格外花の有効活用", b: "なし", winner: "A" },
      { item: "回数縛り", a: "なし", b: "なし", winner: "draw" },
      { item: "ポスト投函", a: "対応", b: "対応(Lite)", winner: "draw" },
      { item: "ボリューム", a: "小(3-5本)", b: "Lite=小・Premium=中", winner: "B" },
      { item: "テーマ選択", a: "限定的", b: "MODERN/ROMANTIC", winner: "B" },
      { item: "SNS 投稿数", a: "月 200-400 件", b: "月 400-600 件", winner: "B" },
      { item: "コスパ", a: "ミドル", b: "業界最強", winner: "B" },
    ],
    forA: [
      { type: "社会貢献意識のある 20-30 代", reason: "規格外花の有効活用でフードロス削減に貢献。" },
      { type: "サスティナブル志向", reason: "環境問題に関心のある層に。" },
      { type: "SNS で社会的意義を発信したい", reason: "ストーリー性のある花のサブスクとして注目。" },
    ],
    forB: [
      { type: "純粋に低価格希望", reason: "業界最安級の Miniプラン 748円〜。" },
      { type: "テーマ・色合い指定希望", reason: "MODERN/ROMANTIC 等の選択肢あり。" },
      { type: "学生・若年層", reason: "予算月 1,000 円以下で。" },
    ],
    realCases: [
      { author: "30代女性・東京・環境系職", situation: "社会貢献を生活に取り入れたい", chose: "タスハナ", outcome: "意味のある暮らしを実感" },
      { author: "大学生・京都・一人暮らし", situation: "予算最重視", chose: "medelu Mini", outcome: "月 1,400 円で続けられる" },
      { author: "20代女性・大阪・SNS インフルエンサー", situation: "ストーリー性のある投稿", chose: "タスハナ", outcome: "投稿でフォロワー反応高" },
    ],
    faq: [
      { q: "規格外花とは何？", a: "見た目に少し傷があるが品質には問題ない花。通常は廃棄されるが、タスハナはこれを活用してフードロス削減。" },
      { q: "社会貢献意識がなければ medelu の方が良い？", a: "純粋に低価格を求めるなら medelu Mini が業界最安級。意義を重視するならタスハナ。" },
      { q: "両者の花の品質の違いは？", a: "タスハナは『規格外』のため見た目に多少差があるが、品質は通常品と同等。medelu は通常品。" },
      { q: "サスティナブル志向の若年層への支持は？", a: "タスハナは Z 世代・ミレニアル世代から特に支持。Instagram での投稿率高。" },
    ],
    relatedPaths: [
      { label: "タスハナの詳細", href: "/services/tasuhana/" },
      { label: "medelu の詳細", href: "/services/medelu/" },
      { label: "学生向け", href: "/personas/gakusei-student/" },
    ],
  },
  {
    slug: "bloomee-vs-and-plants",
    serviceA: "bloomee",
    serviceB: "AND PLANTS",
    title: "bloomee vs AND PLANTS 比較｜定番 vs デザイン重視のおすすめ",
    h1: "bloomee と AND PLANTS を徹底比較｜業界老舗 vs 洗練デザイン",
    description: "bloomeeとAND PLANTSを徹底比較。提携花屋ネットワーク vs デザイン性、価格・配送・解約条件まで完全網羅。",
    intro:
      "bloomee は花のサブスク業界の老舗、AND PLANTS は近年急成長のデザイン重視ブランドです。両者は対照的なコンセプトを持ち、ユーザー層も異なります。本ページでは両者を徹底比較します。",
    spec: [
      { item: "月額最安価格", a: "980円〜", b: "1,980円〜", winner: "A" },
      { item: "デザイン性", a: "提携花屋により個性的", b: "業界トップクラス", winner: "B" },
      { item: "回数縛り", a: "4回継続必須", b: "なし", winner: "B" },
      { item: "ポスト投函", a: "対応(体験プラン)", b: "対応(一部)", winner: "A" },
      { item: "提携花屋ネットワーク", a: "全国広い", b: "自社配送", winner: "A" },
      { item: "SNS 映え", a: "中(個性的)", b: "業界最強", winner: "B" },
      { item: "観葉植物併売", a: "なし", b: "あり(豊富)", winner: "B" },
      { item: "シニア対応", a: "電話対応なし", b: "電話対応なし", winner: "draw" },
    ],
    forA: [
      { type: "気軽に始めたい層", reason: "980円〜の体験プランから。提携花屋の個性を楽しめる。" },
      { type: "長期継続予定者", reason: "4回継続必須だが、長期利用ならデメリットにならない。" },
      { type: "提携花屋の個性楽しみたい", reason: "業界最大級の提携網。" },
    ],
    forB: [
      { type: "デザイン重視・SNS 映え", reason: "業界トップクラスのデザイン性。" },
      { type: "回数縛りなしを希望", reason: "1 回だけ試したい層にも安心。" },
      { type: "観葉植物との組み合わせ", reason: "AND PLANTS は観葉植物併売で総合コーディネート可能。" },
      { type: "在宅ワーカー(Zoom 背景)", reason: "Zoom 背景演出で印象 UP。" },
    ],
    realCases: [
      { author: "40代女性・東京・継続 2 年", situation: "長期継続前提", chose: "bloomee", outcome: "提携花屋の個性的アレンジで満足" },
      { author: "30代女性・横浜・在宅", situation: "気軽に試したい", chose: "AND PLANTS", outcome: "回数縛りなしで安心" },
    ],
    faq: [
      { q: "回数縛りに不安がある場合は？", a: "AND PLANTS の方が圧倒的に気軽。bloomee は 4 回継続必須。" },
      { q: "提携花屋の魅力って何？", a: "全国の地域密着花屋から個性的なアレンジが届く。同じ地域でも花屋が異なれば全く違う花。" },
      { q: "デザイン性の差は？", a: "AND PLANTS が圧倒的優位。Instagram フォロワー数・投稿数で業界トップ。" },
      { q: "両者の継続率の違いは？", a: "bloomee の長期継続率(2 年以上)は業界トップ、AND PLANTS の若年層率は最高。" },
    ],
    relatedPaths: [
      { label: "bloomee の詳細", href: "/services/bloomee/" },
      { label: "AND PLANTS の詳細", href: "/services/and-plants/" },
      { label: "おしゃれな花のサブスク", href: "/guides/oshare/" },
    ],
  },
  {
    slug: "hanameku-vs-medelu",
    serviceA: "ハナメク",
    serviceB: "medelu",
    title: "ハナメク vs medelu 比較｜新興 vs 老舗低価格のおすすめ",
    h1: "ハナメクと medelu を徹底比較｜新興 vs 業界最安低価格",
    description: "ハナメクとmedelu(メデル)を徹底比較。新興サブスクと業界最安級の老舗、両者の特徴と選び方を解説。",
    intro:
      "ハナメクは新興のシンプル花のサブスク、medelu は業界最安級の老舗の 1 つ。両者ともライト層向けで、回数縛りなしのシンプル設計が共通点です。本ページでは両者を徹底比較します。",
    spec: [
      { item: "月額最安価格", a: "1,000円〜程度", b: "748円〜(Mini)", winner: "B" },
      { item: "回数縛り", a: "なし", b: "なし", winner: "draw" },
      { item: "テーマ選択", a: "限定的", b: "MODERN/ROMANTIC", winner: "B" },
      { item: "SNS 投稿数", a: "月 50-100 件", b: "月 400-600 件", winner: "B" },
      { item: "認知度", a: "低い(新興)", b: "業界中堅", winner: "B" },
      { item: "サポート対応", a: "丁寧との評価", b: "Web のみ", winner: "A" },
      { item: "ポスト投函", a: "対応", b: "対応(Lite)", winner: "draw" },
      { item: "コスパ", a: "中堅", b: "業界最強", winner: "B" },
    ],
    forA: [
      { type: "新興サービスを試したい層", reason: "新しいサービスを開拓したい先進ユーザー。" },
      { type: "丁寧なサポート希望", reason: "新興のため個別対応丁寧。" },
    ],
    forB: [
      { type: "業界最安級を希望", reason: "Miniプラン 748円〜は medelu のみ。" },
      { type: "認知度と継続率を重視", reason: "老舗の安心感。多くのユーザーから蓄積された改善。" },
      { type: "テーマ別の自由度希望", reason: "MODERN/ROMANTIC で気分に合わせて。" },
    ],
    realCases: [
      { author: "20代女性・東京・先進ユーザー", situation: "新しいサービスを試したい", chose: "ハナメク", outcome: "対応丁寧で満足" },
      { author: "大学生・京都・一人暮らし", situation: "業界最安級希望", chose: "medelu Mini", outcome: "月 1,400 円で続けられる" },
    ],
    faq: [
      { q: "ハナメクと medelu のどちらがおすすめ？", a: "予算重視なら medelu Mini、新興好きならハナメク。両者とも回数縛りなしで気軽。" },
      { q: "ハナメクの認知度の低さはデメリット？", a: "口コミ情報が少ないため判断材料不足のリスクあり。ただし新興だからこそ丁寧な対応が期待できる。" },
      { q: "両者の継続率の差は？", a: "medelu の方がデータ豊富。ハナメクは新興のため継続率データ不十分。" },
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
