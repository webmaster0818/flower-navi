import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '花のサブスクをやめた理由5選｜続けるかどうかの判断基準【2026年】｜flowerデリ',
  description: '「花のサブスク やめた」「お花の定期便 やめた理由」で検索された方に向けて、当サイトでは考えられるやめた理由と対策を整理し、継続するか解約するかの判断基準を解説します。',
  alternates: { canonical: "/guides/yameta/" },
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title: '花のサブスクをやめた理由5選｜続けるかどうかの判断基準【2026年】｜flowerデリ',
    description: '「花のサブスク やめた」「お花の定期便 やめた理由」で検索された方に向けて、当サイトでは考えられるやめた理由と対策を整理し、継続するか解約するかの判断基準を解説します。',
    url: "/guides/yameta/",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: '花のサブスクをやめた理由5選｜続けるかどうかの判断基準【2026年】｜flowerデリ', description: '「花のサブスク やめた」「お花の定期便 やめた理由」で検索された方に向けて、当サイトでは考えられるやめた理由と対策を整理し、継続するか解約するかの判断基準を解説します。' },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
