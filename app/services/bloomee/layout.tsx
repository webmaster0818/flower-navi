import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと花の品質・料金・4回縛りを検証【2026年10月】｜flowerデリ',
  description: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判を出典付きで検証しています。届く花の品質・ボリュームの記録、公式情報で整理したメリット・デメリット、料金（花代980円＋送料385円〜）、最初の4回の途中解約料を、2026年10月20日の公式確認にもとづいてご説明します。',
  alternates: { canonical: "/services/bloomee/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと花の品質・料金・4回縛りを検証【2026年10月】｜flowerデリ',
    description: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判を出典付きで検証しています。届く花の品質・ボリュームの記録、公式情報で整理したメリット・デメリット、料金（花代980円＋送料385円〜）、最初の4回の途中解約料を、2026年10月20日の公式確認にもとづいてご説明します。',
    url: "/services/bloomee/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判｜メリット・デメリットと花の品質・料金・4回縛りを検証【2026年10月】｜flowerデリ', description: 'ブルーミー（bloomee・旧ブルーミーライフ）の口コミ・評判を出典付きで検証しています。届く花の品質・ボリュームの記録、公式情報で整理したメリット・デメリット、料金（花代980円＋送料385円〜）、最初の4回の途中解約料を、2026年10月20日の公式確認にもとづいてご説明します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
