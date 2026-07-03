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
  /** 最安プラン（比較表の主役） */
  cheapest: ServicePlan;
  plans: ServicePlan[];
  /** 送料が価格に含まれるか（公式確認） */
  shippingIncluded: boolean;
  shippingNote: string;
  /** 最低受取回数（縛り）。null = 縛りなし／公式明記なし */
  minDeliveries: number | null;
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
    affiliateUrl: "https://t.felmat.net/fmcl?ak=R9186L.1.31353750.A135745L",
    cheapest: { name: "Mini", price: 748, flowers: "3〜4本", postDelivery: true },
    plans: [
      { name: "Mini", price: 748, flowers: "3〜4本", postDelivery: true },
      { name: "Lite", price: 1330, flowers: "5〜6本", postDelivery: true },
      { name: "Lite+", price: 1650, flowers: "5〜7本", postDelivery: false },
      { name: "Basic", price: 2330, flowers: "6〜9本", postDelivery: false },
    ],
    shippingIncluded: true,
    shippingNote: "送料込み（Mini・Liteはポスト投函）",
    minDeliveries: null,
    cancellation: "回数縛りなし。決済日（金曜）前日の木曜までにマイページで手続きすれば次回から停止",
    verifiedAt: "2026年7月3日",
    source: "medelu公式（medelu.flowers/courses）",
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
      { name: "セルフアレンジプラン", price: 1958, flowers: "1〜8本ほか", postDelivery: false },
    ],
    shippingIncluded: true,
    shippingNote: "税込・配送料込（ライトはポスト投函）",
    minDeliveries: null,
    cancellation: "回数縛りなし。ただし初回（定期1回目）の解約は不可とFAQ明記。解約・スキップは次回お届け予定日の10日前まで",
    verifiedAt: "2026年7月3日",
    source: "hanameku公式（hanameku.jp）",
    note: "「定期1回目（初回）の解約は受け付けていない」と公式FAQに明記（2026-07-03確認）＝実質初回1回は受け取り必須。",
  },
  {
    id: "bloomee",
    name: "bloomee（ブルーミー）",
    servicePath: "/services/bloomee/",
    officialUrl: "https://bloomeelife.com/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    cheapest: { name: "お試しプラン", price: 980, flowers: "3本以上", postDelivery: true },
    plans: [
      { name: "お試しプラン", price: 980, flowers: "3本以上", postDelivery: true },
    ],
    shippingIncluded: false,
    shippingNote: "花代980円＋送料385円/回（ポスト投函）。ベーシックは2,180円＋送料550円",
    minDeliveries: 4,
    cancellation: "初回契約は4回。4回未満の解約は残回数分の途中解約料が発生（5回目以降はいつでも停止可・締切は前週木曜）",
    verifiedAt: "2026年7月3日",
    source: "bloomee公式（bloomeelife.com）",
    note: "お試し980円＋送料385円、ベーシック2,180円＋送料550円を公式確認（2026-07-03）。途中解約料の根拠は特商法ページに明記。",
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
    shippingNote: "送料込み（宅配・都度払い）",
    minDeliveries: null,
    cancellation: "都度払い・いつでも解約/スキップ可",
    verifiedAt: "2026年7月3日",
    source: "AND PLANTS公式（andplants.jp/collections/subscription-flower）",
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
