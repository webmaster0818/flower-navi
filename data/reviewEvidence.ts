// 「サービス名 口コミ」「サービス名 評判」の受け皿（/services/<slug>/）に載せる、出典つき口コミ傾向。
// 架空の口コミ・星評価・体験談は書かない。各項目は sources に挙げた公開情報の傾向要約のみ。

export type ReviewSource = { label: string; url?: string; note?: string; checkedAt: string };

export type ReviewEvidenceData = {
  id: string;
  shortName: string;
  updatedAt: string;
  verdict: string;
  intro: string;
  positive: string[];
  negative: string[];
  prosCons: { point: string; merit: string; demerit: string }[];
  method: string;
  sources: ReviewSource[];
};

export const REVIEW_EVIDENCE: ReviewEvidenceData[] = [
  {
    id: "bloomee",
    shortName: "bloomee（ブルーミー）",
    updatedAt: "2026年10月14日",
    verdict:
      "ポスト投函で受け取れる手軽さと「花代980円〜」の始めやすさを評価する声が多い一方、口コミサイトでは「花がしおれていた・同じ花が続く」「最初の4回は解約できず、途中解約料がかかる」「解約が分かりにくい」といった厳しい声も目立ちます。4回（お試しなら送料込みで総額5,460円）受け取る前提なら有力候補、1〜2回だけ試したい人には向きません。",
    intro:
      "ブルーミーの口コミ・評判を、口コミサイト（みん評）と、実際に利用した記事・SNS投稿を引用しているレビュー記事から整理しました。良い声と悪い声を分けて傾向だけを要約し、料金や解約条件は公式サイトで確認した値と照らし合わせています。",
    positive: [
      "ポストに届く（半投函）ので、不在が多くても受け取れる",
      "花代980円〜で「花のある暮らし」を始めやすい",
      "季節の花が届き、自分では選ばない花に出会える",
      "ポストに入る小ぶりの花束で、花瓶ひとつで飾れる",
    ],
    negative: [
      "花がしおれていた・同じ花が続くなど、品質にばらつきがある（夏場のポスト投函で増えやすい）",
      "最初の4回は受け取りが必要で、4回未満の解約は途中解約料がかかる",
      "解約・スキップの手続きや締切が分かりにくい",
      "送料が毎回別にかかり（お試しは実質1,365円/回）、「980円」の印象より高い",
      "本数が少なく「しょぼい」と感じる人もいる",
    ],
    prosCons: [
      { point: "料金", merit: "花代980円〜（お試し・グリーン）と低め", demerit: "送料が毎回別（385円／ベーシックは550円）。お試しの4回総額は5,460円" },
      { point: "受け取り", merit: "お試し・グリーンはポスト投函で不在でもOK", demerit: "日時指定不可（水〜金曜着）。夏はポスト内の暑さが心配" },
      { point: "花の量", merit: "一人暮らしの部屋に飾りやすい小ぶりサイズ", demerit: "お試しは4本以上・約18〜25cm。ボリューム重視ならベーシック（8本以上）" },
      { point: "解約", merit: "5回目以降はいつでも解約できる", demerit: "4回未満は「残回数分の商品代金」が途中解約料" },
      { point: "品質保証", merit: "定期便は2週間以内の申請で返金・交換の対象（特商法）", demerit: "写真の提出など申請の手間がかかる" },
    ],
    method:
      "2026年10月14日に「ブルーミー 口コミ」「ブルーミー 評判」で上位に出る口コミサイト・レビュー記事を確認し、複数のサイトで繰り返し挙がっている内容だけを傾向としてまとめました。1件だけの極端な声は採っていません。",
    sources: [
      { label: "みん評「ブルーミーライフ」", url: "https://minhyo.jp/bloomeelife", note: "掲載562件。平均点は取得できず。個別の口コミは品質（しおれ・同じ花）・解約・問い合わせ対応への不満が多い", checkedAt: "2026年10月14日" },
      { label: "花と私（hanatowatashi.com）のブルーミー実体験レビュー", url: "https://hanatowatashi.com/bloomee/", note: "自腹レビュー＋SNS投稿の引用", checkedAt: "2026年10月14日" },
      { label: "サブスクスタイル（subsc-style.jp）のブルーミー口コミ記事", url: "https://subsc-style.jp/bloomee-kuchikomi/", note: "5回分の実物写真、送料込みの金額への注意", checkedAt: "2026年10月14日" },
      { label: "bloomee公式 特定商取引法に基づく表記", url: "https://bloomeelife.com/contacts/law", note: "途中解約料・請求日・品質保証の申請期限", checkedAt: "2026年10月14日" },
      { label: "bloomee公式トップ（料金表・お届け方法）", url: "https://bloomeelife.com/", note: "運営：ユーザーライク株式会社", checkedAt: "2026年10月14日" },
    ],
  },
  {
    id: "andplants",
    shortName: "AND PLANTS（アンドプランツ）",
    updatedAt: "2026年10月14日",
    verdict:
      "「アンドプランツ」の口コミは観葉植物の通販としての声が大半で、梱包の丁寧さ・植物の状態の良さ・発送前に写真で確認できる点が高評価、価格の高さ・品切れ・コバエや茎折れの報告が不満点です。花の定期便（2026年5月から「AND FLOWER」ブランド）は送料込み1,980円〜・いつでも解約できる都度払いで、花の定期便だけの口コミは公開情報ではほとんど見つかりませんでした（2026年10月14日時点）。",
    intro:
      "アンドプランツは観葉植物の通販が本業で、花の定期便はその一部です。口コミも観葉植物についてのものが中心のため、観葉植物と花の定期便に分けて、出典を示しながら傾向を整理しました。",
    positive: [
      "梱包が丁寧で、植物・花の状態が良いまま届く",
      "発送前に実物の写真で確認できる（観葉植物）",
      "鉢・プランターのデザインがおしゃれで、鉢代・植え替え代込み",
      "パーソナル診断やLINE相談など初心者向けのサポートがある",
    ],
    negative: [
      "ほかの通販・花のサブスクより価格がやや高い",
      "人気の品種は品切れしていることがある",
      "コバエの発生、茎折れ・鉢の割れといった配送トラブルの報告がある",
      "花の定期便は交換申請の期限が到着後1日以内と短い",
    ],
    prosCons: [
      { point: "料金", merit: "花の定期便は送料込み1,980円〜（6〜8本）", demerit: "bloomee・medeluの最安プランより高め" },
      { point: "頻度・受け取り", merit: "1週・2週・4週ごとから選べる", demerit: "届く曜日は金〜日曜から選択（エリアによる）" },
      { point: "解約", merit: "最低回数の記載なし・いつでも解約可能", demerit: "スキップは決済完了前の注文のみ（決済はお届け約1週間前）" },
      { point: "交換", merit: "写真をメール・LINEで送れば交換に対応", demerit: "生花は到着後1日以内（観葉植物は14日以内）" },
      { point: "初回特典", merit: "定期便ページに初回500円オフクーポンの案内あり", demerit: "適用条件は申込画面で要確認" },
    ],
    method:
      "2026年10月14日に「アンドプランツ 口コミ」「アンドプランツ 評判」で上位の記事を確認しました。口コミの出典（SNS投稿・自腹購入など）が示されている記事を優先し、複数の記事で共通する内容だけを傾向としてまとめています。",
    sources: [
      { label: "レビュー100（review100.heteml.net）のAND PLANTS口コミ記事", url: "https://review100.heteml.net/andplants/", note: "良い口コミ・悪い口コミを出典URL・投稿日つきで掲載", checkedAt: "2026年10月14日" },
      { label: "ケトとむぎとハレ（keto-mugito-hare.com）の購入レビュー", url: "https://keto-mugito-hare.com/rebiew-plants-ec/life/", note: "自腹購入の写真つき", checkedAt: "2026年10月14日" },
      { label: "AND PLANTS公式 花の定期便ページ", url: "https://andplants.jp/collections/subscription-flower", note: "プラン・頻度・解約・スキップ条件", checkedAt: "2026年10月14日" },
      { label: "AND PLANTS公式 返品・交換規定", url: "https://andplants.jp/pages/returned", note: "生花1日以内・観葉植物14日以内", checkedAt: "2026年10月14日" },
      { label: "PR TIMES「AND FLOWER」ブランド独立のお知らせ（株式会社Domuz）", url: "https://prtimes.jp/main/html/rd/p/000000080.000048183.html", checkedAt: "2026年10月14日" },
    ],
  },
  {
    id: "hanameku",
    shortName: "ハナメク（hanameku）",
    updatedAt: "2026年10月14日",
    verdict:
      "1,210円（税込・送料込）でポストに届く手軽さと、花持ちの良さ・パステル調の色合いを評価する声が多い一方、「花材がかぶる」「蕾やしおれ気味で届くことがある」という声もあります。最低回数の記載はありませんが、初回（1回目）は解約できない点と、締切が「お届け予定日の10日前」と早い点に注意が必要です。",
    intro:
      "ハナメクの口コミ・評判を、SNS投稿を日付つきで引用しているレビュー記事から整理しました。ネット上の記事には旧価格（858円）や終了したスタンダードプランの情報が残っているものが多いため、料金・条件は2026年10月14日に公式サイトで確認した値に統一しています。",
    positive: [
      "2週間たっても元気など、花持ちが良い",
      "パステル調の色合いがかわいく、自分では選ばない色に出会える",
      "1,210円（税込・送料込）でポストに届き、受け取りが楽",
      "キャラクターなどのコラボ便が楽しい",
    ],
    negative: [
      "続けていると花材がかぶることがある",
      "蕾の状態や、しおれ気味で届くことがある（水揚げで回復したという声も）",
      "花の名前が書かれていない",
      "初回は解約できず、解約・スキップの締切が10日前と早い",
    ],
    prosCons: [
      { point: "料金", merit: "ライト1,210円（税込・送料込）で追加費用なし", demerit: "セルフアレンジは地域別の追加送料あり（北海道・九州550円など）" },
      { point: "受け取り", merit: "ライトはポスト投函", demerit: "セルフアレンジは宅配（沖縄・離島は配送不可）" },
      { point: "花の量", merit: "ライトは3〜4本で飾りやすい", demerit: "ボリューム重視ならセルフアレンジ（S 1〜8本・L 1〜12本）" },
      { point: "解約", merit: "最低回数の記載なし", demerit: "初回は解約不可。締切はお届け予定日の10日前" },
      { point: "品質保証", merit: "写真つきで申請すれば返金または代替品", demerit: "到着日を含め3日以内に申請が必要" },
    ],
    method:
      "2026年10月14日に「ハナメク 口コミ」「ハナメク 評判」で上位の記事を確認しました。X・Instagramの投稿を日付つきで引用している記事を優先し、複数の記事に共通する内容だけを傾向としてまとめています（2019〜2022年の旧ブランド時代の投稿は参考扱い）。",
    sources: [
      { label: "ohanaomana のハナメク徹底レビュー", url: "https://ohanaomana.com/hanameku-review/", note: "X埋め込み11件・Instagram3件", checkedAt: "2026年10月14日" },
      { label: "isshin48 のハナメク口コミ記事", url: "https://isshin48.com/hanameku-reviews/", note: "X投稿を投稿日つきで引用（2024年）", checkedAt: "2026年10月14日" },
      { label: "nanas-petunia のハナメク本音レビュー", url: "https://nanas-petunia.com/hanameku_review/", note: "実際に使ったレビュー", checkedAt: "2026年10月14日" },
      { label: "hanameku公式 よくある質問", url: "https://hanameku.jp/shop/faq", note: "初回解約不可・締切", checkedAt: "2026年10月14日" },
      { label: "hanameku公式 特定商取引法に基づく表記", url: "https://hanameku.jp/shop/law_info", note: "運営：and factory株式会社（2026年6月にnarrative株式会社から承継）", checkedAt: "2026年10月14日" },
    ],
  },
  {
    id: "medelu",
    shortName: "medelu（メデル）",
    updatedAt: "2026年10月14日",
    verdict:
      "748円（税込・送料込）〜の価格と、部屋のテイストで選べるコース・花のセンスの良さを評価する声が多い一方、「Miniは本数が少ない」「暑い時期は花持ちが短い・しおれて届いた」「日付指定ができない」という声もあります。最低利用回数の記載は公式に見当たらず、決済日前日の木曜までに手続きすれば次回から止められるため、試しやすいサービスです。",
    intro:
      "メデルの口コミ・評判を、X投稿を引用しているレビュー記事と、編集部アンケートを載せている記事から整理しました。ネット上には旧価格（698円）の記事も残っているため、料金・条件は2026年10月14日に公式サイトで確認した値に統一しています。",
    positive: [
      "花のセンスが良く、かわいい花が届く",
      "鮮度が良く長持ちする",
      "部屋のテイストに合わせてコースを選べる",
      "748円（送料込）〜で始めやすい",
    ],
    negative: [
      "Miniは3〜4本で、ボリュームを求める人には物足りない",
      "暑い時期は花持ちが短い・しおれて届いたことがある",
      "同じような花が続くことがある",
      "お届け日の指定ができない",
    ],
    prosCons: [
      { point: "料金", merit: "Mini 748円〜（税込・送料込）", demerit: "北海道・東北のLite以上は遠隔地送料が加算" },
      { point: "受け取り", merit: "Mini・Liteはポスト投函", demerit: "日付指定はできない" },
      { point: "花の量", merit: "Mini 3〜4本〜Basic 6〜9本まで4サイズ", demerit: "Miniは小ぶり" },
      { point: "解約", merit: "公式に最低回数の記載なし。スキップは3回先まで", demerit: "締切は決済日（前週金曜）前日の木曜" },
      { point: "品質保証", merit: "枯れていたら送料込みで全額返金", demerit: "到着当日中に写真の送付が必要。交換はなし" },
    ],
    method:
      "2026年10月14日に「メデル 花 口コミ」「medelu 口コミ」「メデル 評判」で上位の記事を確認しました（「メデル」単体はヘアケア商品など別ブランドと重なるため、花の定期便の記事だけを対象）。投稿の出典が確認できる記事を優先し、複数の記事に共通する内容を傾向としてまとめています。",
    sources: [
      { label: "花と私（hanatowatashi.com）のmedelu実体験レビュー", url: "https://hanatowatashi.com/medelu/", note: "2025年11月〜2026年5月のX投稿を引用", checkedAt: "2026年10月14日" },
      { label: "mamagirl のmedelu口コミ記事", url: "https://mamagirl.jp/0000309161", note: "編集部アンケート（20〜40代20名・2023年9月）", checkedAt: "2026年10月14日" },
      { label: "ohanaomana のmedeluレビュー", url: "https://ohanaomana.com/medelu-review/", note: "X埋め込み12件", checkedAt: "2026年10月14日" },
      { label: "medelu公式 プラン・コース一覧", url: "https://medelu.flowers/courses", checkedAt: "2026年10月14日" },
      { label: "medelu公式ヘルプ（品質保証）", url: "https://medelu.zendesk.com/hc/ja/articles/6849530091791", note: "到着当日中の申請で全額返金", checkedAt: "2026年10月14日" },
    ],
  },
];

export function findReviewEvidence(id: string): ReviewEvidenceData {
  const d = REVIEW_EVIDENCE.find((r) => r.id === id);
  if (!d) throw new Error(`reviewEvidence: ${id} がありません`);
  return d;
}
