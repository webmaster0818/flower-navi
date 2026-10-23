// お供え・仏花の定期便/ギフト比較データ（単一データソース）
// 全項目 2026年7月24日に各社公式サイトを一次確認。未確認は「確認できず」と明記し断定しない（架空データ禁止）。
// 送客はfelmat提携4社（medelu / hanameku / bloomee / andplants）のみ。未提携社は内部の /services ページへ誘導（アフィリンクなし）。

export type OsonaeEntry = {
  id: string;
  name: string;
  /** 内部サービスページ */
  servicePath: string;
  /** felmat提携（送客可）か */
  affiliated: boolean;
  /** お供え・仏花の専用商品/カテゴリがあるか */
  dedicated: "あり" | "なし" | "確認できず";
  dedicatedNote: string;
  /** 提供形態 */
  type: string;
  /** 白系・淡色（お供え向き）を選べるか */
  color: string;
  /** 立て札・のし・メッセージカード対応 */
  card: string;
  /** お供え関連の最低価格（税込・出典どおり） */
  priceFrom: string;
  /** お届け日指定 */
  delivery: string;
  /** この用途での位置づけ（当サイトの評価・正直に） */
  verdict: "osonae-ready" | "gift-strong" | "not-dedicated" | "unsuitable";
  sources: string[];
};

export const OSONAE_VERIFIED = "2026年7月24日";

export const OSONAE: OsonaeEntry[] = [
  {
    id: "bloomee",
    name: "bloomee（ブルーミー）",
    servicePath: "/services/bloomee",
    affiliated: true,
    dedicated: "あり",
    dedicatedNote: "ブルーミーストアに「仏花・お供え・お悔やみの花」の専用カテゴリがあります。白/青紫/ピンクのアレンジメント・お供え花束・線香付きハーバリウム等を扱っています。",
    type: "単発ギフト（日常の花の定期便とは別ライン）",
    color: "白系を選べる（白・青紫・ピンクから選択）",
    card: "弔事の定型カード（御命日・お悔やみ等）を選択できます。自由文のカードの封入は不可です。立て札は確認できませんでした",
    priceFrom: "4,060円〜（税込／多くが送料無料・商品により送料が異なる）",
    delivery: "お届け日の指定は可（時間指定は不可）",
    verdict: "osonae-ready",
    sources: [
      "https://bloomeelife.com/presents/funeral",
      "https://bloomeelife.com/presents/funeral/funeralflowers/buddhist-flowers",
    ],
  },
  {
    id: "andplants",
    name: "AND PLANTS（アンドプランツ）",
    servicePath: "/services/and-plants",
    affiliated: true,
    dedicated: "あり",
    dedicatedNote: "「お供え・お悔やみの花」の専用コレクションがあります。お供え用胡蝶蘭（紫系）・線香とお供え花のセット・アレンジメント等を扱っています。",
    type: "単発ギフト（花の定期便は別サービス）",
    color: "主な商品はお供え用胡蝶蘭（紫系）です。胡蝶蘭はホワイトも選択できますが、お供え用の白系アレンジの具体的な商品は確認できませんでした",
    card: "立て札・メッセージカードを無料同封（縦型/横型を選択可）",
    priceFrom: "お供え用胡蝶蘭 15,480円〜（税込の明記は確認できず／送料は商品により異なる）",
    delivery: "お届け日・時間帯（6区分）を指定できます。12時までの注文で、最短当日に発送されます",
    verdict: "osonae-ready",
    sources: [
      "https://andplants.jp/collections/offering-flower",
      "https://andplants.jp/pages/delivery",
    ],
  },
  {
    id: "hitohana",
    name: "HitoHana（ひとはな）",
    servicePath: "/services/hitohana",
    affiliated: false,
    dedicated: "あり",
    dedicatedNote: "お供えの専用カテゴリが最も充実しています。胡蝶蘭・アレンジメント・花束・スタンド花（供花）・カーネーション・ペット用まで、弔事向けの商品を幅広くそろえています。四十九日のマナーや立て札の書き方の案内もあります。",
    type: "単発ギフト（お供えの定期便はありません。定期便は自宅用として別に用意されています）",
    color: "白系・淡色を選べます。四十九日までは白を基調とし、以降は淡色も可能と公式サイトで案内されています",
    card: "立て札・メッセージカードを無料で提供しています。御供/御霊前/御仏前の書き分けについても案内されています",
    priceFrom: "3,000円台〜（税込表記の可否は確認できず）",
    delivery: "お届け日を指定でき、最短で翌日に届きます。配送前に商品の写真がメールで送付されます",
    verdict: "gift-strong",
    sources: [
      "https://hitohana.tokyo/offering",
      "https://hitohana.tokyo/funeral",
    ],
  },
  {
    id: "nihon-sogo-engei",
    name: "日本総合園芸",
    servicePath: "/services/nihon-sogo-engei",
    affiliated: false,
    dedicated: "あり",
    dedicatedNote: "「お供え・お悔やみ」の専用カテゴリに、白ユリの花束・白胡蝶蘭・お供えアレンジ・プリザーブド等が約20点あります。ただし、公式サイトで確認できるのは単発ギフトで、仏花の定期便の商品は確認できませんでした。",
    type: "単発ギフト（お供え専用の定期便は確認できず）",
    color: "白系が中心です（真っ白なユリ・白胡蝶蘭など）。商品によっては、ピンク/紫を添えたバリエーションもあります",
    card: "メッセージカードに対応しています（手書き100文字程度）。立札の選択肢はありますが、内容・のしへの対応は確認できませんでした",
    priceFrom: "白ユリ花束 3,960円〜（税込）",
    delivery: "日時指定は可（到着推奨曜日あり／遠方は希望日不可の場合あり）",
    verdict: "gift-strong",
    sources: [
      "https://nihon-sogo-engei.com/flowers/usage/condolences/",
    ],
  },
  {
    id: "lifft",
    name: "LIFFT（リフト）",
    servicePath: "/services/lifft",
    affiliated: false,
    dedicated: "あり",
    dedicatedNote: "弔事向けの「お悔み」コレクション（Violet Nightブーケ・季節のアレンジメントWhite/Green）があります。命日・法事・法要向けのギフトで、「仏花」の名称の専用商品ではありません。",
    type: "単発ギフト（弔事は単発）＋日常の花の定期便も別途あり",
    color: "白緑のアレンジ・紫系のブーケが用意されています。細かな色味の指定はできません",
    card: "メッセージカードは、指定欄への入力で対応しています（定期便は対象外）。のしは購入画面では受け付けておらず、個別に対応する場合があります",
    priceFrom: "弔事ブーケ 4,400円〜（税込）",
    delivery: "ヤマト運輸・日時指定可（注文から概ね3日目以降）",
    verdict: "gift-strong",
    sources: [
      "https://lifft.jp/collections/okuyami",
    ],
  },
  {
    id: "medelu",
    name: "medelu（メデル）",
    servicePath: "/services/medelu",
    affiliated: true,
    dedicated: "なし",
    dedicatedNote: "お供え・仏花の専用商品は確認できませんでした。通常の定期便コース（NATURAL系など落ち着いた色）と、慶事系のギフト花束のみです。",
    type: "定期便（日常の切り花）",
    color: "NATURAL系など落ち着いた色はあるが、白限定のお供け向けコースは確認できず",
    card: "のし・立て札の対応は確認できず（メッセージカードはギフト文脈で一部）",
    priceFrom: "定期便 月748円〜（税込・送料込）※お供え専用価格ではない",
    delivery: "Mini・Liteはポスト投函（日時指定は確認できず）",
    verdict: "not-dedicated",
    sources: [
      "https://www.medelu.flowers/courses",
    ],
  },
  {
    id: "hanameku",
    name: "hanameku（ハナメク）",
    servicePath: "/services/hanameku",
    affiliated: true,
    dedicated: "なし",
    dedicatedNote: "お供え・仏花の専用商品はなく、季節の花のおまかせの定期便のみです。色の指定やメッセージカードに対応していないため、弔事の用途には適していません。",
    type: "定期便のみ（単発購入不可）",
    color: "選べない（季節のお任せ）",
    card: "メッセージカードは不可です（公式FAQに明記）。のし・立て札の記載はありません",
    priceFrom: "定期便 月1,210円〜（税込・送料込）※お供え専用ではない",
    delivery: "ライトはポスト投函（到着日指定不可）／セルフアレンジは宅急便で日時指定可",
    verdict: "unsuitable",
    sources: [
      "https://hanameku.jp/shop/faq",
    ],
  },
  {
    id: "tasuhana",
    name: "タスハナ（tasuhana）",
    servicePath: "/services/tasuhana",
    affiliated: false,
    dedicated: "なし",
    dedicatedNote: "ロスフラワーを届ける花の定期便のみです。色の指定・ラッピング・日時指定に対応していないため、お供え・弔事の用途には適していません。",
    type: "定期便のみ（単発購入不可）",
    color: "選べない（ロスフラワーのため色指定不可）",
    card: "ラッピングは不可です。のし・立て札・カードの提供は確認できませんでした",
    priceFrom: "＋actプラン 660円〜（税込）＋送料330円 ※お供え用ではない",
    delivery: "ゆうパケット（ポスト投函）・日時指定不可",
    verdict: "unsuitable",
    sources: [
      "https://tasuhana.com/Page/question.aspx",
    ],
  },
];

export const VERDICT_LABEL: Record<OsonaeEntry["verdict"], { label: string; tone: string }> = {
  "osonae-ready": { label: "お供え専用商品あり・当サイト提携", tone: "green" },
  "gift-strong": { label: "お供え専門の品揃えが充実（参考／当サイト未提携）", tone: "amber" },
  "not-dedicated": { label: "お供え専用商品なし（日常の定期便）", tone: "gray" },
  unsuitable: { label: "お供え・弔事用途には不向き", tone: "gray" },
};
