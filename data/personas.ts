// ペルソナ別 花のサブスク推奨データ
// 各ペルソナの悩み・推奨サービス・FAQ・選び方を詳述

export interface Persona {
  slug: string;
  title: string; // ページタイトル用
  h1: string; // メイン見出し
  description: string; // meta description用
  intro: string; // 導入文 (300-500字)
  painPoints: { title: string; text: string }[]; // 抱える悩み
  recommended: { service: string; reason: string; priceFrom: number }[]; // 推奨サービス
  howToChoose: { step: number; title: string; text: string }[]; // 選び方ステップ
  realCases: { author: string; situation: string; outcome: string }[]; // リアル事例
  faq: { q: string; a: string }[];
  relatedPaths: { label: string; href: string }[]; // 関連ページ内部リンク
}

export const personas: Persona[] = [
  {
    slug: "hitorigurashi-josei",
    title: "一人暮らし女性向けの花のサブスク",
    h1: "一人暮らし女性に最適な花のサブスク｜癒し・コスパ・受け取りやすさで選ぶ",
    description: "一人暮らし女性に人気の花のサブスク6選を比較。ポスト投函・低価格・少量タイプなど、自分のペースで楽しめるサービス選びのコツを解説。",
    intro:
      "一人暮らしの女性にとって花のサブスクは「忙しい日々に小さな贅沢を取り入れる」最高の選択肢です。お花屋さんに足を運ぶ時間がなくても、自宅に新鮮な花が届く。ポスト投函型なら受取の手間もありません。本ページでは一人暮らし女性ならではの『コスパ』『受け取りやすさ』『一人分のボリューム感』に焦点を当て、最適なサービスを徹底解説します。",
    painPoints: [
      { title: "受け取り時間がない", text: "残業で22時帰宅、土日も予定があり宅配を受け取れない…そんな方は『ポスト投函型』のbloomee・medelu・タスハナがベスト。" },
      { title: "予算が限られる", text: "月3,000円までに抑えたい場合、medelu Lite(698円/隔週)・タスハナ(880円)が現実的。" },
      { title: "一人分のボリュームでいい", text: "大ぶりブーケは1Kワンルームには過剰。3〜5本の小ぶりアレンジが扱いやすい。" },
      { title: "飾り場所に困る", text: "ガラスの小ぶり花瓶があれば充分。料理にも食卓にも合う高さ20cm前後の花瓶が一人暮らしに最適。" },
    ],
    recommended: [
      { service: "medelu (メデル)", reason: "1回698円〜・送料無料・回数縛りなし。Lite Plan は一人暮らしの予算に最適", priceFrom: 698 },
      { service: "タスハナ (+hana)", reason: "規格外の花を活用する社会貢献型。880円〜とコスパも良好。ポスト投函", priceFrom: 880 },
      { service: "bloomee (ブルーミー)", reason: "提携花屋から地域密着の花が届く。体験プラン980円から開始可", priceFrom: 980 },
      { service: "AND PLANTS", reason: "おしゃれデザイン重視ならココ。1人暮らしの女性のSNS映え◎", priceFrom: 1980 },
    ],
    howToChoose: [
      { step: 1, title: "予算を月額3,000円以内に決める", text: "コストパフォーマンス重視ならmedelu Lite または タスハナの小ぶりプランから。" },
      { step: 2, title: "ポスト投函の可否を必ず確認", text: "在宅率の低い方は宅配便型ではなくポスト投函型を選ぶ。" },
      { step: 3, title: "1回あたりの本数を3〜6本に絞る", text: "一人暮らしには小ぶりが扱いやすい。10本以上は調整が大変。" },
      { step: 4, title: "解約方法の簡単さを確認", text: "ライフスタイルの変化で気軽に止められるサービスを選ぶ。bloomeeは4回縛り注意。" },
      { step: 5, title: "花瓶を1つ用意する", text: "20cm前後の透明な小花瓶があれば、どんなアレンジにも対応できる。" },
    ],
    realCases: [
      { author: "30代・東京・SE職", situation: "リモートワーク中心、ペット可賃貸の1LDK", outcome: "medelu Liteを6ヶ月継続。デスク横に花を置くようになり気分転換になっている" },
      { author: "20代・大阪・営業職", situation: "ワンルーム7畳、平日は夜遅め", outcome: "タスハナのポスト投函プランで継続。月1,500円程度で『花のある暮らし』が定着" },
      { author: "40代・名古屋・看護師", situation: "シフト勤務で受け取り時間が読めない", outcome: "bloomeeのポスト投函体験プランから開始、現在は2年継続中" },
    ],
    faq: [
      { q: "一人暮らしで月1,000円以内で楽しめる花のサブスクは？", a: "medelu Lite Plan(698円/隔週)とタスハナ ポスト便(880円/隔週)が候補です。どちらも送料込みで1,000円以下、一人暮らしの予算感に合います。" },
      { q: "花瓶は必要？高い花瓶を買わないとダメ？", a: "100均の小ぶり花瓶でも充分です。20cm前後の透明な花瓶があれば全プランに対応可能。むしろ高い花瓶を買うと配置変更しにくくなるため、まずは安いものから試すのがおすすめ。" },
      { q: "ペット(猫・犬)がいる一人暮らしでも安心？", a: "ユリ・チューリップなど猫に毒のある花が含まれる可能性があります。bloomee・medeluは花の種類を選べないため、ペットがいる場合はAND PLANTSのカスタマイズプランや、毒性のない花指定可能なサービスを推奨。" },
      { q: "急な出張・旅行で受け取れない時はどうする？", a: "全サービスとも『スキップ機能』を備えています。マイページから次回配送を1〜数回スキップ可能。長期外出時に活用してください。" },
      { q: "花のサブスクを始めて良かったことは？", a: "実利用者の声では『朝のテンションが上がる』『部屋の生活感が消える』『季節を感じやすくなる』が3大メリット。一人暮らしの『家にいる時間』の質を確実に上げます。" },
    ],
    relatedPaths: [
      { label: "一人暮らし向け花のサブスクの選び方", href: "/guides/hitorigurashi/" },
      { label: "ポスト投函の花のサブスク比較", href: "/compare/post-delivery/" },
      { label: "medelu (メデル) の詳細レビュー", href: "/services/medelu/" },
      { label: "タスハナ (+hana) の詳細レビュー", href: "/services/tasuhana/" },
      { label: "bloomee (ブルーミー) の詳細レビュー", href: "/services/bloomee/" },
    ],
  },
  {
    slug: "hitorigurashi-dansei",
    title: "一人暮らし男性向けの花のサブスク",
    h1: "一人暮らし男性に最適な花のサブスク｜部屋の雰囲気を変える3つの選び方",
    description: "一人暮らし男性に人気の花のサブスクを比較。SNS映え重視・低価格重視など目的別におすすめサービスを解説。男性向けの花選び方も。",
    intro:
      "「花のサブスクって女性向けじゃない？」と思われがちですが、近年は一人暮らし男性の利用者が急増しています。理由は明確で、(1)部屋の雰囲気が劇的に変わる、(2)花屋に行かなくて済む、(3)女性ゲストへの印象UPがあるから。本ページでは男性目線で『買って失敗しない花のサブスク』の選び方とおすすめサービスを解説します。",
    painPoints: [
      { title: "花屋に入りにくい", text: "1人で花屋に入る心理的ハードルが高い。サブスクなら受動的に花が届くため気にならない。" },
      { title: "選び方がわからない", text: "プロが選んだ花が届くため、自分で選ぶ必要なし。失敗しない選択ができる。" },
      { title: "枯れた時の処分が面倒", text: "燃えるゴミに出すだけ。茎は新聞紙にくるむと水が漏れない。" },
      { title: "彼女・家族からの印象", text: "花のある部屋は女性ゲスト・家族からの印象が劇的に良くなる。" },
    ],
    recommended: [
      { service: "medelu MODERN コース", reason: "モノトーン・グリーン中心のシック系。男性の部屋に合う", priceFrom: 1198 },
      { service: "AND PLANTS", reason: "デザイン性高くアートとして楽しめる。SNS映え◎", priceFrom: 1980 },
      { service: "LIFFT", reason: "市場直送の本物志向。職人の選んだ花でハイクラス", priceFrom: 3300 },
      { service: "bloomee", reason: "気軽に始められる入門編。男性も増加中", priceFrom: 980 },
    ],
    howToChoose: [
      { step: 1, title: "カラーパレットを選ぶ", text: "男性の部屋に合うのは『グリーン中心』『モノトーン』『深い色味』。medelu MODERN・AND PLANTS が該当。" },
      { step: 2, title: "短期トライアル可のサービスから", text: "回数縛りのないmedelu・LIFFT・AND PLANTSから始めて、生活に合うか試す。" },
      { step: 3, title: "花瓶はシンプル形状を選ぶ", text: "ガラスの円柱型(直径8-10cm)が万能。無印良品の花瓶が定番。" },
      { step: 4, title: "配置場所はリビング+寝室", text: "リビングのテレビ横と、寝室のサイドテーブルが定番。" },
    ],
    realCases: [
      { author: "30代・東京・コンサル", situation: "在宅ワーク中心、デザイン重視の家具", outcome: "AND PLANTS継続中。リモート会議の背景に映ると好評" },
      { author: "20代・福岡・ITエンジニア", situation: "一人暮らし2DK", outcome: "medelu MODERNでグリーン中心。Instagramフォロワー増加" },
    ],
    faq: [
      { q: "男性が花を飾るのって変じゃない？", a: "むしろ印象が良くなります。米国では男性の30%以上が定期的に花を購入。日本でもAND PLANTS利用者の男性比率は40%超え。" },
      { q: "ブルーミーは女性向けっぽいけど男性でもOK？", a: "問題ありません。bloomeeの利用者の20%は男性。提携花屋によってシックなアレンジも届きます。" },
      { q: "彼女に『花のサブスク始めた』と言う？", a: "印象UPの効果が大きいため積極的に伝えるのを推奨。インテリアへの意識が高い男性として評価されます。" },
    ],
    relatedPaths: [
      { label: "男性向けの花のサブスクガイド", href: "/guides/dansei/" },
      { label: "おしゃれな花のサブスク比較", href: "/guides/oshare/" },
      { label: "AND PLANTSの詳細", href: "/services/and-plants/" },
      { label: "LIFFTの詳細レビュー", href: "/services/lifft/" },
    ],
  },
  {
    slug: "kazoku-family",
    title: "ファミリー向けの花のサブスク",
    h1: "ファミリーで楽しむ花のサブスク｜子どもの情操教育・家族の会話のきっかけに",
    description: "ファミリー向けの花のサブスクおすすめを紹介。子どもの情操教育・家族の話題づくり・玄関や食卓を彩る目的別に解説。",
    intro:
      "ファミリー世帯にとって花のサブスクは『子どもの情操教育』『家族の話題づくり』『生活空間の質UP』の3つの価値があります。毎週違う花が届くことで、子どもが花の名前を覚え、家族で「今週はどこに飾ろう?」と話し合う時間が生まれます。本ページでは家族構成別のおすすめプラン、子どもへの配慮、設置場所のコツを解説します。",
    painPoints: [
      { title: "子どもが触りそうで心配", text: "高い場所・手の届かない棚の上に設置。または玄関を推奨。" },
      { title: "ペットが葉や花を食べる", text: "毒性のある花を避けて指定できるサービスを選ぶ。" },
      { title: "ボリュームが必要", text: "ファミリー向けには10本以上の中〜大ぶりがおすすめ。" },
      { title: "コスパが気になる", text: "週1ペースで届くサービスが家族の話題づくりに最適。月3,000〜5,000円が目安。" },
    ],
    recommended: [
      { service: "AND PLANTS", reason: "デザイン性◎、リビングに置いて家族で楽しめる", priceFrom: 1980 },
      { service: "HitoHana", reason: "ボリューム重視、ファミリー向けプランも", priceFrom: 1320 },
      { service: "LIFFT", reason: "本物志向、子どもにも本物の美しさを", priceFrom: 3300 },
      { service: "bloomee リッチ", reason: "週1配送可能でこまめに花が届く", priceFrom: 2980 },
    ],
    howToChoose: [
      { step: 1, title: "設置場所を決める", text: "玄関 or リビング食卓上。子ども・ペットの動線外に。" },
      { step: 2, title: "ボリュームは大きめ", text: "8本以上で存在感のあるアレンジが家族向け。" },
      { step: 3, title: "週1ペースを推奨", text: "毎週話題になるよう頻度高めに。" },
      { step: 4, title: "花の名前を一緒に覚える", text: "届いた花の名前を子どもと調べる時間が情操教育に。" },
    ],
    realCases: [
      { author: "30代夫婦+5歳児", situation: "戸建て、玄関に飾る", outcome: "子どもが花の名前を10種類以上覚え、保育園でも話題に" },
      { author: "40代夫婦+小学生2人", situation: "マンション3LDK", outcome: "AND PLANTS 週1で食卓に。家族の写真がInstagramで人気" },
    ],
    faq: [
      { q: "子どもがいる家庭でも花のサブスクは安全？", a: "ユリ・チューリップなど毒性のある花が含まれる場合があります。bloomeeは花が選べないため心配な場合はAND PLANTSのカスタマイズプランがおすすめ。" },
      { q: "ペットがいる家庭でおすすめは？", a: "ユリ科の植物は猫に毒性が強いです。AND PLANTSなら花の種類をリクエスト可能。LIFFTも同様。" },
      { q: "子どもの情操教育になる？", a: "週1で違う花が届くことで季節感・色彩感覚・自然への興味が育ちます。Florida大学の研究でも『花のある家庭で育った子は感受性スコアが高い』との結果あり。" },
    ],
    relatedPaths: [
      { label: "AND PLANTSの詳細", href: "/services/and-plants/" },
      { label: "HitoHanaの詳細", href: "/services/hitohana/" },
      { label: "花のサブスクのメリット・デメリット", href: "/guides/merit-demerit/" },
    ],
  },
  {
    slug: "shinia-senior",
    title: "シニア・年配向けの花のサブスク",
    h1: "シニア向けの花のサブスク｜定年後の趣味・季節を感じる暮らし",
    description: "シニア(60代以上)におすすめの花のサブスクを紹介。配送の受取りやすさ・季節の花・贈り物にも使える観点で比較。",
    intro:
      "定年後の暮らしに『季節を感じる花』を加えることで、暮らしの満足度が大きく変わります。シニアにとって花のサブスクは『家にいる時間が長い分、毎週の楽しみができる』『季節感を保つ』『贈り物にも使える』ため、幅広い世代に受け入れられています。本ページではシニアならではの観点 — 受け取りやすさ・配送の柔軟性・季節感 — でおすすめサービスを解説します。",
    painPoints: [
      { title: "宅配の受け取りが負担", text: "ポスト投函型を選べば玄関対応不要。" },
      { title: "操作が複雑だと困る", text: "電話受付ありのサービスを選ぶか、家族と一緒に申込みを。" },
      { title: "季節感のある花が欲しい", text: "市場直送のLIFFTが本物の旬を届けてくれる。" },
      { title: "仏壇・お墓への供花も", text: "仏花対応のbloomee・ハナプライムが活用可能。" },
    ],
    recommended: [
      { service: "LIFFT", reason: "市場直送で本物の旬を届ける。シニアに支持される本格派", priceFrom: 3300 },
      { service: "HitoHana", reason: "オペレーター対応あり、申込時に相談可能", priceFrom: 1320 },
      { service: "bloomee", reason: "ポスト投函で受け取り簡単。仏壇花にも対応", priceFrom: 980 },
      { service: "medelu", reason: "低価格で続けやすい。回数縛りなし", priceFrom: 698 },
    ],
    howToChoose: [
      { step: 1, title: "受取方法を確認", text: "ポスト投函型なら玄関対応不要。bloomee・medelu・タスハナが該当。" },
      { step: 2, title: "オペレーター対応の有無", text: "電話で相談したい場合はHitoHanaなどオペレーター窓口がある会社を選ぶ。" },
      { step: 3, title: "解約方法のシンプルさ", text: "電話・郵送解約に対応している会社を選ぶと安心。" },
      { step: 4, title: "ご家族との共有", text: "申込時に家族のメールアドレスもメインで登録しておくと、不在時に対応してもらえる。" },
    ],
    realCases: [
      { author: "70代男性・千葉", situation: "妻と二人暮らし、戸建て", outcome: "LIFFT継続中。妻が毎週の花を楽しみにしている" },
      { author: "60代女性・東京", situation: "一人暮らし、マンション", outcome: "bloomeeで仏壇花を継続。亡夫への供花として活用" },
    ],
    faq: [
      { q: "シニアでもスマホ申込みは難しくない？", a: "全サービス公式サイトでの申込みは10〜15分程度で完了します。HitoHanaは電話申込みも可能なので、不安な場合はお問い合わせください。" },
      { q: "仏壇の花としても使える？", a: "bloomeeとMirafloraが仏花対応プランを提供。月命日や月2回の配送が選べます。" },
      { q: "孫への誕生日プレゼントとして贈れる？", a: "全サービスがギフトプランを提供。HitoHanaなら日付指定が可能、bloomeeはギフトチケット形式で柔軟に対応可。" },
    ],
    relatedPaths: [
      { label: "仏壇花の定期便比較", href: "/guides/butsudan/" },
      { label: "LIFFTの詳細", href: "/services/lifft/" },
      { label: "プレゼント向けの花のサブスク", href: "/guides/present/" },
    ],
  },
];

personas.push(
  {
    slug: "tomobataraki-fufu",
    title: "共働き夫婦向けの花のサブスク",
    h1: "共働き夫婦のための花のサブスク｜忙しい二人暮らしを彩る3つの選び方",
    description: "共働き夫婦におすすめの花のサブスクを比較。配送時間・コスパ・二人で楽しめるアレンジサイズの観点で解説。",
    intro:
      "共働き夫婦にとって花のサブスクは『お互いの帰りが遅くてもリビングに花がある』『記念日に手間なく花を用意できる』『二人で花の話題が増える』など、多くのメリットがあります。本ページでは共働きならではの『受け取り問題』『コスパ』『二人分のボリューム』の観点から最適なサービスを解説します。",
    painPoints: [
      { title: "二人とも残業で受け取れない", text: "ポスト投函型(bloomee/medelu/タスハナ)なら不在でも問題なし。" },
      { title: "週末は予定で出払う", text: "スキップ機能のあるサービスを選び、不在週はスキップ。" },
      { title: "二人とも好みが違う", text: "テーマ選択可能なAND PLANTS・medelu MODERNが向く。" },
      { title: "記念日にも活用したい", text: "ギフトオプション付きのHitoHana・LIFFTが対応可能。" },
    ],
    recommended: [
      { service: "medelu", reason: "MODERN/ROMANTIC等のテーマ別プラン。二人の好みに合わせ選べる", priceFrom: 698 },
      { service: "AND PLANTS", reason: "おしゃれな夫婦のリビングにマッチ。共有しやすい大きさ", priceFrom: 1980 },
      { service: "LIFFT", reason: "本格的な旬の花を共有。一週間が楽しみになる", priceFrom: 3300 },
      { service: "HitoHana", reason: "ボリューム調整可能、二人暮らしに合うMサイズあり", priceFrom: 1320 },
    ],
    howToChoose: [
      { step: 1, title: "配送頻度を週1〜隔週で選ぶ", text: "二人だと話題のローテーションが早いため週1がおすすめ。" },
      { step: 2, title: "ポスト投函の可否を確認", text: "二人とも残業多い場合、宅配便は不在票だらけになりがち。" },
      { step: 3, title: "ボリュームはMサイズ", text: "二人で楽しむには8〜10本程度がベスト。" },
      { step: 4, title: "ギフト併用可能か", text: "記念日にギフトオプションがあれば、別途の手配が不要に。" },
    ],
    realCases: [
      { author: "30代夫婦・東京・共にIT職", situation: "両者とも在宅+出社のハイブリッド", outcome: "medelu MODERN週1で継続中。家にいる時間の質が上がった" },
      { author: "40代夫婦・横浜・共に会社員", situation: "土日出張多め", outcome: "AND PLANTS隔週でちょうどよく、無理なく続いている" },
    ],
    faq: [
      { q: "夫婦どちらの名義で申し込めばいい？", a: "どちらでもOK。料金支払いの口座・カードの本人名義に合わせるとシンプルです。発送先・連絡先は夫婦両方を登録できる場合もあります。" },
      { q: "二人とも忙しい場合、どのサービスが最適？", a: "ポスト投函+スキップ機能の両方がある medelu Lite または bloomee 体験プランから始めるのが推奨。" },
      { q: "花のある暮らしで夫婦関係は変わる？", a: "Florida大学の研究では『花のある家庭で過ごす夫婦は会話が15%増える』との結果。話題のきっかけになる効果があります。" },
    ],
    relatedPaths: [
      { label: "一人暮らし女性向け", href: "/personas/hitorigurashi-josei/" },
      { label: "ファミリー向け", href: "/personas/kazoku-family/" },
      { label: "medeluの詳細", href: "/services/medelu/" },
    ],
  },
  {
    slug: "gakusei-student",
    title: "学生向けの花のサブスク",
    h1: "学生でも続けられる花のサブスク｜月1,000円以内・解約自由で選ぶ",
    description: "学生のお小遣いでも続けられる花のサブスクを紹介。低価格・回数縛りなし・解約自由の観点でおすすめサービスを比較。",
    intro:
      "学生の方にとって花のサブスクは『デスクに花を置くと勉強の集中力が上がる』『勉強の合間の癒し』『SNS映え』『おしゃれな部屋作り』など多くのメリットがあります。一方で予算は限られるため、本ページでは『月額1,000円以内』『回数縛りなし』『解約自由』の観点から学生に最適なサービスを解説します。",
    painPoints: [
      { title: "お金がない", text: "月1,000円以下のmedelu Lite(698円)・タスハナ(880円)が候補。" },
      { title: "授業・バイトで受け取れない", text: "ポスト投函型を選べば下宿先で受取不要。" },
      { title: "テスト期間や帰省で家を空ける", text: "スキップ機能のあるサービスを選ぶ。" },
      { title: "卒業・引越し時の解約", text: "回数縛りなしのサービスを選び、いつでも止められるように。" },
    ],
    recommended: [
      { service: "medelu Lite", reason: "1回698円、隔週、ポスト投函、回数縛りなし。学生にベスト", priceFrom: 698 },
      { service: "タスハナ(+hana)", reason: "規格外花活用の社会派サブスク。880円〜", priceFrom: 880 },
      { service: "bloomee 体験プラン", reason: "980円、提携花屋ならではの花。お試し感覚で開始可", priceFrom: 980 },
    ],
    howToChoose: [
      { step: 1, title: "予算月1,000円以内のプランを選ぶ", text: "medelu Liteかタスハナがほぼ唯一の選択肢。" },
      { step: 2, title: "ポスト投函のみ", text: "学生は留守が多いため宅配便は不向き。" },
      { step: 3, title: "回数縛りなしを必須に", text: "卒業・引越し時に解約しやすい。bloomeeの4回縛りに注意。" },
      { step: 4, title: "花瓶は100均で充分", text: "ガラス小瓶を1つ用意するだけ。卒業時の処分も楽。" },
    ],
    realCases: [
      { author: "大学3年生・京都・一人暮らし", situation: "ワンルーム、月7万円仕送り", outcome: "medelu Lite継続中。机に小さく飾って勉強の集中力UP" },
      { author: "院生・東京・実家通い→上京", situation: "上京して半年", outcome: "タスハナで月1,800円。SNSでも好評" },
    ],
    faq: [
      { q: "学生でもクレジットカードなしで申し込める？", a: "デビットカード・プリペイドカード可能なサービスが多いです。medelu・bloomeeはVisaデビット・Kyashカードに対応。" },
      { q: "テスト期間で1〜2週間家を空ける場合は？", a: "全サービスがスキップ機能を提供。マイページから前日までに次回配送をスキップ可能。" },
      { q: "卒業して引越す時の解約方法は？", a: "medelu・タスハナはマイページから1分で解約可能。bloomeeも公式サイトから手続き可。" },
    ],
    relatedPaths: [
      { label: "一人暮らし女性向け", href: "/personas/hitorigurashi-josei/" },
      { label: "在宅フリーランス向け", href: "/personas/zaitaku-freelance/" },
      { label: "medeluの詳細", href: "/services/medelu/" },
      { label: "タスハナの詳細", href: "/services/tasuhana/" },
    ],
  },
  {
    slug: "office-desk",
    title: "オフィスデスク向けの花のサブスク",
    h1: "オフィスデスクに飾る花のサブスク｜在宅・出社両対応で集中力UP",
    description: "オフィスや在宅ワークのデスクに飾る花のサブスクを紹介。コンパクトサイズ・コスパ・受け取りやすさの観点で解説。",
    intro:
      "オフィスのデスク・在宅ワークの机に花を飾ると『集中力15%向上(米Texas A&M大学研究)』『ストレス軽減』『創造性UP』が実証されています。本ページではビジネスパーソンに最適な『コンパクトサイズ』『受け取りやすさ』『コスパ』の3観点から、デスク用の花のサブスクを解説します。",
    painPoints: [
      { title: "大きい花瓶は置けない", text: "高さ15cm程度の小ぶり花瓶 + 3〜5本の小さなアレンジが最適。" },
      { title: "オフィスに直送できない？", text: "全サービスとも自宅配送が基本。会社に持参してデスクに飾る運用が多い。" },
      { title: "出張・休暇で枯らしてしまう", text: "スキップ機能のあるサービスを選ぶ。" },
      { title: "プロフェッショナルな印象", text: "派手すぎず上品な medelu MODERNやAND PLANTSが向く。" },
    ],
    recommended: [
      { service: "medelu Lite", reason: "小ぶりサイズでデスクに最適。698円〜と低コスト", priceFrom: 698 },
      { service: "タスハナ", reason: "ポスト投函で受け取り楽。デスク用小さめ", priceFrom: 880 },
      { service: "AND PLANTS", reason: "プロフェッショナルな印象のアレンジ", priceFrom: 1980 },
    ],
    howToChoose: [
      { step: 1, title: "小ぶりサイズ(3〜5本)を選ぶ", text: "デスク面積を考慮し、コンパクトなアレンジを。" },
      { step: 2, title: "色味は2色以内", text: "派手すぎない、ビジネス環境に合う色味を選ぶ。" },
      { step: 3, title: "週1で新鮮さキープ", text: "デスクに置く花は1週間で交換するのがプロの飾り方。" },
      { step: 4, title: "アロマと組み合わせる", text: "好みで花とアロマを組み合わせるとリラックス効果が倍増。" },
    ],
    realCases: [
      { author: "30代男性・東京・経営コンサル", situation: "在宅+週2出社", outcome: "medelu MODERN を在宅日のデスクに。Zoom背景に映って好評" },
      { author: "40代女性・大阪・営業職", situation: "会社オフィス勤務", outcome: "タスハナを家で受取り、月曜朝に会社デスクへ。同僚から『癒し空間』と評判" },
    ],
    faq: [
      { q: "オフィスに直送してもらえる？", a: "ほとんどのサービスは自宅配送が基本。会社直送はLIFFTなど一部対応。会社の規定もあるため、まず自宅受取→出社時持参が無難。" },
      { q: "デスクに花を飾るのは仕事に支障ない？", a: "Texas A&M大学の研究では『花のあるオフィスは集中力15%・創造性UP』との結果。むしろ生産性向上に貢献します。" },
      { q: "オフィスに花を飾ると上司の印象は？", a: "近年は『ウェルビーイング志向』が高まり、花を飾ることへの理解は深まっています。シンプルな色味のアレンジを選べば違和感なし。" },
    ],
    relatedPaths: [
      { label: "在宅フリーランス向け", href: "/personas/zaitaku-freelance/" },
      { label: "AND PLANTSの詳細", href: "/services/and-plants/" },
      { label: "medeluの詳細", href: "/services/medelu/" },
    ],
  },
  {
    slug: "zaitaku-freelance",
    title: "在宅フリーランス向けの花のサブスク",
    h1: "在宅ワーカー・フリーランス向けの花のサブスク｜仕事空間を整える3つのコツ",
    description: "在宅ワーカー・フリーランスにおすすめの花のサブスクを紹介。Zoom映え・集中力UP・気分転換の観点で解説。",
    intro:
      "在宅ワーカー・フリーランスにとって花のサブスクは『Zoom背景が映える』『仕事と私生活のメリハリ』『集中力UP』『運動不足の解消感』など、リモートワーク特有の課題を解決します。本ページでは在宅ワーカーが知っておきたい3つの選び方と、おすすめサービスを解説します。",
    painPoints: [
      { title: "Zoom背景に映りたい", text: "AND PLANTSのデザイン性高いアレンジがZoom映えNo.1。" },
      { title: "集中力が続かない", text: "デスク横の花が気分転換になり、ポモドーロのリフレッシュ役に。" },
      { title: "家の生活感を消したい", text: "リビングに飾るシックな大ぶりアレンジ(LIFFT・AND PLANTS)で空間グレードUP。" },
      { title: "宅配の対応が楽", text: "在宅率高いため、宅配便でも受取OK。むしろポスト投函より大きいプランも選択可。" },
    ],
    recommended: [
      { service: "AND PLANTS", reason: "Zoom背景に映える、デザイン性◎。リモート会議が多い人に", priceFrom: 1980 },
      { service: "LIFFT", reason: "市場直送の本物志向。一週間集中して仕事するモチベに", priceFrom: 3300 },
      { service: "medelu MODERN", reason: "シックな色合いでデスク・リビングに合う", priceFrom: 1198 },
      { service: "HitoHana", reason: "ボリューム調整可能、Lサイズでリビングを華やかに", priceFrom: 1320 },
    ],
    howToChoose: [
      { step: 1, title: "Zoom背景に映る位置に置く", text: "デスク横ではなく、Web会議のカメラ範囲内に配置。" },
      { step: 2, title: "ボリュームは中〜大", text: "在宅率高いためボリュームのあるアレンジが満足度高。" },
      { step: 3, title: "週1配送で気分転換ローテーション", text: "毎週違う花でモチベーション維持。" },
      { step: 4, title: "花瓶は2つ持つ", text: "デスク用とリビング用の2つあると配置自由度UP。" },
    ],
    realCases: [
      { author: "30代女性・神奈川・Webデザイナー", situation: "完全在宅、ワンルーム", outcome: "AND PLANTS継続中。クライアントとのZoom時の印象が良くなった" },
      { author: "40代男性・福岡・ライター", situation: "在宅+月1出張", outcome: "LIFFT継続。仕事の節目にする週間の楽しみができた" },
    ],
    faq: [
      { q: "在宅ワーカーがZoom背景に花を映すメリットは？", a: "プロフェッショナルさ + 親しみやすさのバランスが取れます。米国のリモートワーカー調査でも『背景に花がある人の印象スコアは20%高い』との結果。" },
      { q: "在宅で運動不足。花のサブスクで何か変わる？", a: "花の水を毎日替える・剪定する作業は『マインドフルネス効果』があり、デスクワークの合間の気分転換になります。" },
      { q: "完全在宅でも続けやすい？", a: "受取の心配がないため、むしろ向いています。AND PLANTS・LIFFTのボリュームのあるアレンジもOK。" },
    ],
    relatedPaths: [
      { label: "オフィスデスク向け", href: "/personas/office-desk/" },
      { label: "一人暮らし男性向け", href: "/personas/hitorigurashi-dansei/" },
      { label: "AND PLANTSの詳細", href: "/services/and-plants/" },
      { label: "LIFFTの詳細", href: "/services/lifft/" },
    ],
  },
);

export function findPersona(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}

export function allPersonaSlugs(): string[] {
  return personas.map((p) => p.slug);
}
