import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/app/components/SiteFooter";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-body",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-heading",
});

const logoSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-logo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohana-delivery.com"),
  title:
    "花のサブスク比較【2026年最新】お花の定期便おすすめ5選を送料込み料金で比較｜flowerデリ",
  description:
    "flowerデリは、お花の定期便（花のサブスク）の人気5社を、料金・送料・届き方・花の本数の観点で比較する専門ガイドです。bloomee・medelu・AND PLANTS・hanamekuなどについて、公式サイトの情報にもとづいて掲載しています。診断機能も利用できます。",
  keywords:
    "flowerデリ,お花の定期便,花のサブスク,比較,おすすめ,bloomee,medelu,AND PLANTS,hanameku",
  openGraph: { images: [{ url: "https://ohana-delivery.com/og-default.png", width: 1200, height: 630, alt: "flowerデリ" }], 
    title:
      "花のサブスク比較【2026年最新】お花の定期便おすすめ5選を送料込み料金で比較｜flowerデリ",
    description:
      "お花の定期便（花のサブスク）の人気5社を、料金・送料・届き方の観点で比較しています。診断機能も利用できます。",
    url: "https://ohana-delivery.com",
    siteName: "flowerデリ",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    images: ["https://ohana-delivery.com/og-default.png"],
    card: "summary_large_image",
    title:
      "花のサブスク比較【2026年最新】お花の定期便おすすめ5選を送料込み料金で比較｜flowerデリ",
    description:
      "お花の定期便（花のサブスク）の人気5社を、料金・送料・届き方の観点で比較しています。診断機能も利用できます。",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenKaku.variable} ${logoSerif.variable} ${notoSansJP.className} h-full antialiased`}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col"><div style={{background:'#f4f4f4',borderBottom:'1px solid #e2e2e2',fontSize:'11px',lineHeight:1.6,color:'#4A4F49',textAlign:'center',padding:'3px 8px'}}>本サイトはプロモーション(PR)を含みます。</div>{children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/\",\"logo\":\"https://ohana-delivery.com/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://ohana-delivery.com/about/\"]}" }}
        />
        </body>
    </html>
  );
}
