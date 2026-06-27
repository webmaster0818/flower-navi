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
    cancellation: "回数縛りなし・いつでも解約可",
    verifiedAt: V,
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
    cancellation: "最低継続回数は公式に明記なし（申込時に要確認）",
    verifiedAt: V,
    source: "hanameku公式（hanameku.jp）",
    note: "最低継続回数・解約条件は公式ページに明記がないため、申込前に利用規約を要確認。",
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
    shippingIncluded: true,
    shippingNote: "お試しプランは郵便受け投函（税込980円）",
    minDeliveries: 4,
    cancellation: "最初の4回受け取り後にいつでもストップ/解約可",
    verifiedAt: V,
    source: "bloomee公式（bloomeelife.com）",
    note: "レギュラー/リッチプランの価格・送料は公式で未確認のため本表では最安のお試しプランのみ掲載。",
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
    verifiedAt: V,
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
