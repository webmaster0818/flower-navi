// 料金・条件の単一データソース（Single Source of Truth）
// 価格・解約条件は変動するため、必ず公式サイトで確認した日付(verifiedAt)を明記する。
// 未確認の項目は null とし、断定しない（架空データ禁止）。

export type ServicePlan = {
  name: string;
  /** 1配送あたりの価格（税込・円）。送料の扱いは shippingNote 参照 */
  price: number;
  /** 本数の目安（公式表記） */
  flowers: string;
  /** ポスト投函対応プランか */
  postDelivery: boolean;
};

export type Service = {
  id: string;
  name: string;
  /** 既存の個別ページへの内部リンク */
  servicePath: string;
  officialUrl: string;
  affiliateUrl: string;
  /** 成果地点が手前のプログラム（あるサービスのみ）。検討段階が浅いページで使う */
  affiliateUrlEarly?: string;
  /** 最安プラン（比較表の主役） */
  cheapest: ServicePlan;
  plans: ServicePlan[];
  /** 送料が価格に含まれるか（公式確認） */
  shippingIncluded: boolean;
  shippingNote: string;
  /** 比較表の送料欄（送料別のサービスのみ。込みの場合は「込み」と表示） */
  shippingShort?: string;
  /** 比較表のお届け頻度（公式表記に基づく短い表記） */
  frequencyShort: string;
  /** 最低受取回数（縛り）。null = 縛りなし／公式明記なし */
  minDeliveries: number | null;
  /** 比較表に出す「縛り」の短い表記（公式表記に基づく） */
  commitmentLabel: string;
  cancellation: string;
  /** 公式確認日 */
  verifiedAt: string;
  source: string;
  /** 注意・保留事項（未確認など） */
  note?: string;
};

const V = "2026年6月27日";

export const SERVICES: Service[] = [
  {
    id: "medelu",
    name: "medelu（メデル）",
    servicePath: "/services/medelu/",
    officialUrl: "https://medelu.flowers/",
    // medelu は felmat に2プログラムある。ページの検討段階で使い分ける（2026-09-28 MediaXAI判断）。
    //   affiliateUrl      … 【9186】成果地点=決済完了 / 2,307円。申込直前のページ（サービス個別・解約・口コミ）で使う
    //   affiliateUrlEarly … 【6599】成果地点=申し込み / 1,153円。検討段階が浅いページ（比較・料金・入門）で使う
    affiliateUrl: "https://t.felmat.net/fmcl?ak=R9186L.1.31353750.A135745L",
    affiliateUrlEarly: "https://t.felmat.net/fmcl?ak=Z65995.1.I106600F.A135745L",
    cheapest: { name: "Mini", price: 748, flowers: "3〜4本", postDelivery: true },
    plans: [
      { name: "Mini", price: 748, flowers: "3〜4本", postDelivery: true },
      { name: "Lite", price: 1330, flowers: "5〜6本", postDelivery: true },
      { name: "Lite+", price: 1650, flowers: "5〜7本（ヘルプ記事は6〜7本）", postDelivery: false },
      { name: "Basic", price: 2330, flowers: "6〜9本", postDelivery: false },
    ],
    shippingIncluded: true,
    shippingNote: "送料込みです（Mini・Liteはポスト投函）。北海道・東北のLite/Lite+/Basicは、遠隔地送料（Lite 140円・Lite+ 200円・Basic 240円）が加算されます",
    frequencyShort: "毎週・隔週",
    minDeliveries: null,
    commitmentLabel: "公式に記載なし",
    cancellation: "公式に最低利用回数の記載はありません。決済日（お届け週の前週金曜）の前日の木曜までにマイページで解約すれば、次回から停止されます（過ぎると最後に1回届きます）。スキップは3回先まで可能です",
    verifiedAt: "2026年10月14日",
    source: "medelu公式（medelu.flowers/courses・特商法・ヘルプセンター）",
    note: "品質保証は、到着当日中に写真を送り、枯れていると判断されれば送料を含めて全額返金されます（交換はなし）。2026年10月14日に公式ヘルプで確認しました。",
  },
  {
    id: "hanameku",
    name: "hanameku（ハナメク）",
    servicePath: "/services/hanameku/",
    officialUrl: "https://hanameku.jp/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=W58911.1.O99396Q.A135745L",
    cheapest: { name: "ライトプラン", price: 1210, flowers: "3〜4本", postDelivery: true },
    plans: [
      { name: "ライトプラン", price: 1210, flowers: "3〜4本", postDelivery: true },
      { name: "セルフアレンジ S", price: 1958, flowers: "1〜8本", postDelivery: false },
      { name: "セルフアレンジ L", price: 3278, flowers: "1〜12本", postDelivery: false },
    ],
    shippingIncluded: true,
    shippingNote: "税込・配送料込みです（ライトはポスト投函）。セルフアレンジは地域別の追加送料があります（北海道・九州550円、関西220円、中国・四国330円。沖縄・離島は配送不可）",
    frequencyShort: "毎週・14日ごと（ライト）",
    minDeliveries: null,
    commitmentLabel: "初回（1回目）は解約不可",
    cancellation: "最低回数の記載はありませんが、初回（定期1回目）の解約は不可と公式FAQに明記されています。解約・スキップ・変更の締切は、公式FAQ・ご利用ガイドではお届け予定日の10日前、ライトプランの商品ページでは9日前と記載されています（スキップは次回分のみ）（2026年10月23日公式確認）",
    verifiedAt: "2026年10月14日",
    source: "hanameku公式（hanameku.jp ライト・セルフアレンジ各ページ・FAQ・特商法）",
    note: "「定期1回目（初回）の解約は受け付けていない」と公式FAQに明記されており（2026-10-14再確認）、実質的に初回の1回は受け取りが必要です。品質保証は、到着日を含めて3日以内に写真を添えて申請します（返金または代替品）。",
  },
  {
    id: "bloomee",
    name: "bloomee（ブルーミー）",
    servicePath: "/services/bloomee/",
    officialUrl: "https://bloomeelife.com/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    cheapest: { name: "お試しプラン", price: 980, flowers: "4本以上", postDelivery: true },
    plans: [
      { name: "お試しプラン", price: 980, flowers: "4本以上（約18〜25cm）", postDelivery: true },
      { name: "グリーンプラン", price: 980, flowers: "グリーン中心（約18〜25cm）", postDelivery: true },
      { name: "ベーシックプラン", price: 2180, flowers: "8本以上（約25〜30cm）", postDelivery: false },
    ],
    shippingIncluded: false,
    shippingNote: "花代とは別に、送料が毎回かかります（お試し・グリーン385円／ベーシック550円）。お試しは実質1,365円/回です",
    shippingShort: "別途385円〜",
    frequencyShort: "毎週（4回目以降は隔週も可）",
    minDeliveries: 4,
    commitmentLabel: "4回（未満は途中解約料）",
    cancellation: "最初の4回は受け取りが必要です。4回未満で解約すると、「4回分のうち残回数分の商品代金（税込）」を途中解約料として支払います（特商法）",
    verifiedAt: "2026年10月14日",
    source: "bloomee公式（bloomeelife.com トップの料金表・特商法表記・利用規約）",
    note: "料金は公式トップの料金画像で確認しました（2026-10-14）。本数は、ユーザーライク社の2026年2月17日のプレスリリースの表記です。品質保証の申請期限は、定期便で2週間以内です（特商法）。",
  },
  {
    id: "andplants",
    name: "AND PLANTS（アンドプランツ）",
    servicePath: "/services/and-plants/",
    officialUrl: "https://andplants.jp/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    cheapest: { name: "Standard", price: 1980, flowers: "6〜8本", postDelivery: false },
    plans: [
      { name: "Standard", price: 1980, flowers: "6〜8本", postDelivery: false },
      { name: "Medium", price: 2980, flowers: "8〜10本", postDelivery: false },
      { name: "Large", price: 4980, flowers: "14〜18本", postDelivery: false },
    ],
    shippingIncluded: true,
    shippingNote: "送料込み（クール便オプションは別料金）",
    frequencyShort: "1・2・4週ごと",
    minDeliveries: null,
    commitmentLabel: "なし（いつでも解約可）",
    cancellation: "解約はいつでも可能です（最低回数の記載なし）。スキップは決済完了前の注文のみ可能です（決済はお届けの約1週間前）",
    verifiedAt: "2026年10月14日",
    source: "AND PLANTS公式（andplants.jp/collections/subscription-flower・返品交換規定）",
    note: "2026年5月から、花の事業は「AND FLOWER」ブランドで展開されています（定期便ページはandplants.jp配下）。お届け頻度は1・2・4週ごとです。生花の交換申請は到着後1日以内です。料金の税込/税抜の明記は、公式ページで確認できませんでした。",
  },
];

/** 最低受取までの総額（縛りがある場合は price×回数、なければ1回分） */
export function minTotal(s: Service): number {
  return s.cheapest.price * (s.minDeliveries ?? 1);
}

/** 1本あたりの目安単価（本数レンジの下限本数で概算） */
export function perStem(s: Service): number {
  const m = s.cheapest.flowers.match(/(\d+)/);
  const stems = m ? parseInt(m[1], 10) : 1;
  return Math.round(s.cheapest.price / stems);
}
