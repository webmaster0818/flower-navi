"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "ふるさと納税の花の定期便は確定申告が必要ですか？",
    a: "ワンストップ特例制度を利用する場合、確定申告は不要です。寄付先が5自治体以内であれば、各自治体に申請書を送付することで手続きが完了します。6自治体以上に寄付する場合や、もともと確定申告が必要な方（自営業の方など）は、確定申告で寄付金控除を申請してください。",
  },
  {
    q: "届く花の種類や色は選べますか？",
    a: "届く花の種類や色を指定できるかは、返礼品ごとに異なります。申し込み前に各返礼品のページでご確認ください。",
  },
  {
    q: "ふるさと納税の花の定期便はいつ届きますか？",
    a: "届く時期と間隔は自治体と返礼品ごとに異なります。配送スケジュールは各自治体の返礼品ページに記載されているため、事前にご確認ください。",
  },
  {
    q: "通常の花のサブスクとふるさと納税の花の定期便では、どちらがお得ですか？",
    a: "税控除を受けられるため、ふるさと納税のほうが実質的な負担は少なくなります。ただし、ふるさと納税には年間の控除上限額があり、通常のサブスクは、スキップや解約の時期を利用者が調整できます。両方を併用し、ふるさと納税で季節の花を楽しみながら、通常のサブスクで好みの花を補う方法もあります。",
  },
  {
    q: "ふるさと納税の花の定期便は、どのように探せばよいですか？",
    a: "当サイトでは、自治体の人気の順位や特定の返礼品は掲載していません。各ふるさと納税ポータルサイトで「花 定期便」と検索すると、最新の返礼品・寄付金額・届く回数を確認できます。",
  },
];

/* ─── Main Component ─── */
export default function FurusatoNouzeiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"ふるさと納税で選ぶ花の定期便\",\"item\":\"https://ohana-delivery.com/guides/furusato-nouzei/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"ふるさと納税で選ぶ花の定期便\",\"description\":\"ふるさと納税で選ぶ花の定期便の仕組み・選び方・おすすめ自治体を解説しています。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-30T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/furusato-nouzei/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"ふるさと納税の花の定期便は確定申告が必要ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ワンストップ特例制度を利用する場合、確定申告は不要です。寄付先が5自治体以内であれば、各自治体に申請書を送付することで手続きが完了します。6自治体以上に寄付する場合や、もともと確定申告が必要な方（自営業の方など）は、確定申告で寄付金控除を申請してください。\"}},{\"@type\":\"Question\",\"name\":\"届く花の種類や色は選べますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届く花の種類や色を指定できるかは、返礼品ごとに異なります。申し込み前に各返礼品のページでご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"ふるさと納税の花の定期便はいつ届きますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"届く時期と間隔は自治体と返礼品ごとに異なります。配送スケジュールは各自治体の返礼品ページに記載されているため、事前にご確認ください。\"}},{\"@type\":\"Question\",\"name\":\"通常の花のサブスクとふるさと納税の花の定期便では、どちらがお得ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"税控除を受けられるため、ふるさと納税のほうが実質的な負担は少なくなります。ただし、ふるさと納税には年間の控除上限額があり、通常のサブスクは、スキップや解約の時期を利用者が調整できます。両方を併用し、ふるさと納税で季節の花を楽しみながら、通常のサブスクで好みの花を補う方法もあります。\"}},{\"@type\":\"Question\",\"name\":\"ふるさと納税の花の定期便は、どのように探せばよいですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"当サイトでは、自治体の人気の順位や特定の返礼品は掲載していません。各ふるさと納税ポータルサイトで「花 定期便」と検索すると、最新の返礼品・寄付金額・届く回数を確認できます。\"}}]}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>お花の定期便をふるさと納税で受け取る方法｜花のある暮らしをお得に始める【2026年】｜flowerデリ</title>
      <meta name="description" content="ふるさと納税で花の定期便を受け取る方法を紹介しています。仕組み・メリット・デメリット・返礼品の探し方を解説し、費用を抑えて花のある暮らしを始める方法をご案内します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#4A4F49]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#1F2420] font-medium">ふるさと納税で花の定期便</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/furusato-nouzei/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">お得ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              お花の定期便をふるさと納税で受け取る方法<br className="hidden md:block" />
              花のある暮らしをお得に始める【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              ふるさと納税の返礼品として花の定期便を選ぶと、実質2,000円の自己負担で数か月間お花が届きます。
              当サイトでは、その仕組みと返礼品の探し方を解説しています。
            </p>
          </div>
        </PageHero>

        {/* ─── How it works ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ふるさと納税で花の定期便を受け取る仕組み
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              ふるさと納税は、任意の自治体に寄付をすると、寄付額のうち2,000円を超える部分が、所得税と住民税から原則として全額控除される制度です（控除上限額あり。総務省ふるさと納税ポータルサイト・2026年10月30日確認）。返礼品として花の定期便を選ぶと、<strong>実質2,000円の自己負担</strong>で数か月間、定期的にお花が届きます。
            </p>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "控除上限額を確認する", text: "ふるさと納税ポータルサイト（楽天ふるさと納税、さとふる、ふるなび等）のシミュレーターで、ご自身の年収や家族構成にもとづく控除上限額をご確認ください。上限額を超えた分は自己負担となるため、ご注意ください。" },
                { step: "STEP 2", title: "花の定期便の返礼品を選ぶ", text: "ポータルサイトで「花 定期便」「お花 サブスク」などのキーワードで検索します。寄付金額・届く回数・配送時期・花の種類は返礼品ごとに異なるため、各自治体の返礼品ページでご確認ください。" },
                { step: "STEP 3", title: "寄付を申し込む", text: "通常のネットショッピングと同様の手順で申し込めます。ワンストップ特例制度を利用する場合は、申請書を忘れずに提出してください。初回のお届け時期は返礼品ごとに異なります。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2] flex items-start gap-4">
                  <div className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2420] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Popular Municipalities ─── */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花の定期便の返礼品の探し方
            </h2>
            <p className="text-sm text-[#4A4F49] leading-relaxed">
              返礼品の内容・寄付金額・届く回数は、自治体と返礼品ごとに異なり、変更されることもあります。当サイトでは特定の自治体や返礼品の掲載を控えています。各ふるさと納税ポータルサイトで「花 定期便」「お花 サブスク」などのキーワードで検索し、寄付金額・届く回数・配送時期・花の種類を、申し込み前に各返礼品のページで確認してください。
            </p>
          </div>
        </section>

        {/* ─── Merits & Demerits ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ふるさと納税で花の定期便を選ぶメリット・デメリット
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C8D8CB]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">メリット</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] shrink-0">・</span>実質2,000円で数か月間花が届く</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] shrink-0">・</span>地域の花き農家を応援できる</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F5B43] shrink-0">・</span>通常のサブスクと併用可能</li>
                </ul>
              </div>
              <div className="bg-[#F7F1EC] rounded-md p-5 border border-[#D9BFB1]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">デメリット</h3>
                <ul className="text-sm text-[#4A4F49] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#B0694F] shrink-0">&#10005;</span>花の種類・色・配送時期は返礼品ごとに決まっている</li>
                  <li className="flex items-start gap-2"><span className="text-[#B0694F] shrink-0">&#10005;</span>スキップや一時停止ができるかは返礼品によって異なる</li>
                  <li className="flex items-start gap-2"><span className="text-[#B0694F] shrink-0">&#10005;</span>控除上限額を超えると自己負担が増える</li>
                  <li className="flex items-start gap-2"><span className="text-[#B0694F] shrink-0">&#10005;</span>初回のお届け時期は返礼品ごとに異なる</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              ふるさと納税の花の定期便に関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#EDF1EC] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#1F2420] pr-4">Q. {item.q}</span>
                    <svg className={`w-4 h-4 text-[#6B6F6A] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white border-t border-[#DEDAD2]">
                      <p className="text-sm text-[#4A4F49] leading-relaxed">A. {item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              ふるさと納税で花のある暮らしをお得に始められます
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              ふるさと納税の花の定期便は、<strong>実質2,000円で数か月間お花が届く</strong>方法です。自治体の返礼品として季節の花を受け取れます。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              返礼品によっては届く時期や種類を選べないため、自由度の高い花のサブスクとの併用もおすすめします。まずはふるさと納税で花のある暮らしを体験し、継続したい場合は通常のサブスクもご検討ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors">
                併用におすすめのmedeluを見る
              </a>
              <a href="/services/hitohana" className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors">
                色を選べるHitoHanaを見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline">
              トップページに戻る
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1F2420] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-footer-2026.png" alt="flowerデリ" className="h-11 w-auto" />
              <p className="text-xs text-gray-400">花のサブスクを比較し、ご自身に合ったサービス選びを支援します。</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年10月30日時点のものです。最新の料金・サービス内容は各公式サイトでご確認ください。</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">&copy; 2026 flowerデリ All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}
