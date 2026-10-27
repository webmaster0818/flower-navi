"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクは途中で解約できますか？",
    a: "多くのサービスで途中解約が可能です。ただし、bloomeeのように最低受取回数（4回）が設定されているサービスでは、4回受け取る前に解約すると残り回数分の料金が発生します。medeluは最低受取回数の設定がないため、いつでも解約できます。日本総合園芸は最低受取回数の設定がなく、退会フォームでは最短の回から退会を申し込めます（2026年10月27日公式確認）。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません（2026年10月17日公式確認）。AND PLANTSは都度払い方式のため、次回配送前にスキップまたは停止の手続きを行えば追加料金はかかりません。",
  },
  {
    q: "bloomeeの解約方法を教えてください。",
    a: "bloomeeはマイページから解約手続きが可能です。ログイン後、マイページの「プラン・登録情報の確認/変更」から「解約する」を選択します。ただし、4回の最低受取回数を満たしていない場合は解約できず、残り回数分の料金が発生します。解約ではなく「お届けをストップ」（休止）を選ぶことも可能で、休止中は料金が発生しません。解約と休止の違いをご確認のうえ、手続きを行ってください。",
  },
  {
    q: "解約と休止の違いは何ですか？",
    a: "解約はサービスの利用を終了することで、アカウント情報やクーポンなどが失われる場合があります。休止は一時的にお届けを止めることで、アカウントや設定はそのまま保持されます。再開する際は、休止のほうが円滑に利用を再開できます。解約するかどうか判断に迷う場合は、まず休止を選ぶことをおすすめします。bloomeeやmedeluには休止機能があります。",
  },
  {
    q: "解約後に届いた花はどうなりますか？",
    a: "解約手続きの時期によっては、すでに手配済みの花が届くことがあります。多くのサービスでは「次回お届け日の○日前まで」に解約する必要があり、この期限を過ぎると次回分が届き、料金が発生します。解約を検討している場合は、次回お届け日を確認し、余裕をもって手続きを行ってください。",
  },
  {
    q: "解約したら違約金はかかりますか？",
    a: "当サイトで紹介している5サービスのうち、違約金が発生するのはbloomeeのみです。bloomeeは4回の最低受取回数があり、4回未満で解約すると、4回分のうち残回数分の商品代金（税込）が途中解約料として請求されます（2026年10月17日公式確認）。それ以外のmedelu、AND PLANTS、hanameku、日本総合園芸には違約金はありません（日本総合園芸は入会金・手数料も不要（2026年10月27日公式確認））。",
  },
  {
    q: "花のサブスクを解約する人の主な理由は何ですか？",
    a: "主な解約理由として「花が好みに合わなかった」「費用が負担になった」「花のお手入れが負担になった」「引っ越しや生活環境の変化」「届く頻度が多すぎた」などが挙げられます。配送頻度の変更やプラン変更で解決できる場合もあるため、解約前にサービスの設定を見直すことをおすすめします。",
  },
  {
    q: "一度解約しても再開できますか？",
    a: "はい、多くのサービスで再開が可能です。ただし、解約した場合は新規登録と同じ手続きが必要になることがあります。休止の場合は、マイページからお届けを再開できるサービスが多くあります。bloomee、medelu、hanamekuはいずれも再開に対応しています。以前のアカウント情報を使えるかどうかはサービスによって異なるため、公式サイトで確認してください。",
  },
  {
    q: "解約前にやっておくべきことはありますか？",
    a: "まず次回お届け日と解約期限をご確認ください。次に、ポイントやクーポンが残っている場合は使い切ることをおすすめします。また、解約ではなく休止やスキップで対応できないかもご検討ください。配送頻度の変更やプランのダウングレードで不満が解消される場合もあります。解約理由を明確にしたうえで、解約が必要かどうかを判断することをおすすめします。",
  },
];

/* ─── Cancellation Data ─── */
const cancellationData = [
  {
    name: "bloomee",
    nameJa: "ブルーミー",
    minOrders: "4回",
    method: "マイページ",
    penalty: "あり（4回未満で残額請求）",
    pauseOption: "あり（お届けストップ）",
    deadline: "次回お届け日の前週金曜日まで",
    difficulty: "注意事項あり",
    url: "/services/bloomee",
    officialUrl: "https://t.felmat.net/fmcl?ak=U4061N.1.A75607J.A135745L",
    steps: [
      "bloomee公式サイトにログインする",
      "マイページを開く",
      "「プラン・登録情報の確認/変更」を選択",
      "ページ下部の「解約する」をクリック",
      "解約理由を選択して確認画面へ進む",
      "内容を確認し「解約する」ボタンを押す",
    ],
    notes: [
      "4回受け取るまで解約できません。4回未満で手続きすると残り回数分の料金が発生します。",
      "「解約」と「お届けストップ（休止）」は別の機能です。一時的に止めたい場合は休止をお選びください。",
      "休止中は料金が発生しません。再開の手続きも簡単です。",
      "解約期限は次回お届け日の前週金曜日です。期限を過ぎると次回分が届きます。",
      "解約するとアカウント情報やクーポンが失われる場合があります。",
    ],
  },
  {
    name: "medelu",
    nameJa: "メデル",
    minOrders: "なし",
    method: "マイページ",
    penalty: "なし",
    pauseOption: "あり（スキップ / 休止）",
    deadline: "決済日（お届け週の前週金曜日）の前日の木曜日まで（2026年10月17日公式確認）",
    difficulty: "簡単",
    url: "/services/medelu",
    officialUrl: "https://t.felmat.net/fmcl?ak=R9186L.1.31353750.A135745L",
    steps: [
      "medelu公式サイトのマイページにログインする",
      "「定期便一覧」を開く",
      "解約したい定期便のメニューアイコン（歯車マーク）を押す",
      "「定期便を辞める」を押す（2026年10月17日公式確認）",
    ],
    notes: [
      "最低受取回数の設定がないため、いつでも解約できます。",
      "解約前に、スキップ（3回先までお休み可能）（2026年10月17日公式確認）や休止もご検討ください。",
      "解約手続きは、決済日の前日（木曜日）までに完了させる必要があります。決済後の手続きでは、最後に1回お花が届きます（2026年10月17日公式確認）。",
      "手続きが完了すると確認メールが届きます。届かない場合はサポート窓口へお問い合わせください。",
    ],
  },
  {
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    minOrders: "なし",
    method: "マイページ（スキップ/停止）",
    penalty: "なし",
    pauseOption: "あり（スキップ / 停止）",
    deadline: "決済完了前まで（決済はお届けの約1週間前）（2026年10月17日公式確認）",
    difficulty: "簡単",
    url: "/services/and-plants",
    officialUrl: "https://t.felmat.net/fmcl?ak=U10465Q.1.G147840L.A135745L",
    steps: [
      "AND PLANTS公式サイトにログインする",
      "マイページを開く",
      "「お届けスケジュール」を確認する",
      "次回配送をスキップする、または定期便を停止する",
      "停止を選択して確認画面へ進む",
      "内容を確認し、停止を完了する",
    ],
    notes: [
      "都度払い方式のため、厳密には「解約」ではなく「停止」です。",
      "次回配送前にスキップすれば、その回の料金は発生しません。",
      "停止後も簡単に再開できます。",
      "スキップ・停止は決済完了前の注文に限られます（決済はお届けの約1週間前）（2026年10月17日公式確認）。",
    ],
  },
  {
    name: "hanameku",
    nameJa: "ハナメク",
    minOrders: "なし（初回は解約不可（2026年10月17日公式確認））",
    method: "マイページ",
    penalty: "なし",
    pauseOption: "あり（スキップ）",
    deadline: "お届け予定日の10日前まで（公式FAQ・ご利用ガイド）。ライトプランの商品ページは9日前まで（2026年10月23日公式確認）",
    difficulty: "簡単",
    url: "/services/hanameku",
    officialUrl: "https://t.felmat.net/fmcl?ak=W58911.1.O99396Q.A135745L",
    steps: [
      "hanameku公式サイトのマイページにログインする",
      "定期管理ページを開く",
      "対象商品の詳細を開く",
      "「停止」ボタンを押して定期便を停止する（2026年10月17日公式確認）",
    ],
    notes: [
      "最低受取回数の設定はありませんが、初回（定期1回目）の解約は受け付けていません（2026年10月17日公式確認）。",
      "解約前に、スキップ機能の利用もご検討ください。",
      "締切は、公式FAQ・ご利用ガイド・セルフアレンジプランのページでは「お届け予定日の10日前まで」、ライトプランの商品ページでは「お届け予定日の9日前まで解約可能」と記載されています。2024年6月5日のお知らせでは、2024年7月1日からライト・セルフプランの締切を9日前から10日前に変更すると案内しています（2026年10月23日公式確認）。",
      "手続き完了後、確認メールが届きます。",
    ],
  },
  {
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    minOrders: "なし",
    method: "退会フォーム / 電話 / メール（クレジット決済コースはWebのマイページでも中止可）（2026年10月27日公式確認）",
    penalty: "なし",
    pauseOption: "あり（休会フォーム・お届け日の1週間前まで）（2026年10月27日公式確認）",
    deadline: "継続的な中止は月単位。クレジット決済コースは配達週の前週水曜日まで、1回だけの中止は配達日の3日前まで（2026年10月27日公式確認）",
    difficulty: "注意事項あり",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    steps: [
      "公式サイトの「コース変更・休会・退会」ページで「退会」を選ぶ（2026年10月27日公式確認）",
      "お名前・メールアドレス・電話番号または会員番号を入力する",
      "退会希望月と退会理由を選んで送信する",
      "自動返信メールを確認する（急ぐ場合は電話で連絡する）",
    ],
    notes: [
      "クレジット決済対応コースは、配達週の前週水曜日の決済までにWebのマイページで中止を登録できます。それ以外のコースも、公式サイトの退会フォーム・電話・メールで手続きできます（2026年10月27日公式確認）。",
      "最低受取回数の設定はなく、違約金は発生しません。入会金・手数料も不要です（2026年10月27日公式確認）。",
      "継続的な中止は月単位で受け付けています。1回だけ中止する場合は配達日の3日前までにメールまたは電話で連絡します。配送準備の都合で、最初の配達日に退会手続きが間に合わない場合があります（2026年10月27日公式確認）。",
      "電話の受付時間は9:00〜12:00・13:00〜17:00（土・日休み）です（2026年10月27日公式確認）。",
    ],
  },
];

/* ─── Main Component ─── */
export default function KaiyakuGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
        {/* JSONLD_INJECTED_v1 #0 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://ohana-delivery.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://ohana-delivery.com/guides/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"花のサブスク 解約方法と注意点\",\"item\":\"https://ohana-delivery.com/guides/kaiyaku/\"}]}" }} />
        {/* JSONLD_INJECTED_v1 #1 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"花のサブスク 解約方法と注意点\",\"description\":\"花のサブスクの解約方法と注意点を解説します。\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"flowerデリ\",\"url\":\"https://ohana-delivery.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://ohana-delivery.com/guides/kaiyaku/\"}}" }} />
        {/* JSONLD_INJECTED_v1 #2 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"花のサブスクは途中で解約できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"多くのサービスで途中解約が可能です。ただし、bloomeeのように最低受取回数（4回）が設定されているサービスでは、4回受け取る前に解約すると残り回数分の料金が発生します。medeluは最低受取回数の設定がないため、いつでも解約できます。日本総合園芸は最低受取回数の設定がなく、退会フォームでは最短の回から退会を申し込めます（2026年10月27日公式確認）。hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません（2026年10月17日公式確認）。AND PLANTSは都度払い方式のため、次回配送前にスキップまたは停止の手続きを行えば追加料金はかかりません。\"}},{\"@type\":\"Question\",\"name\":\"bloomeeの解約方法を教えてください。\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"bloomeeはマイページから解約手続きが可能です。ログイン後、マイページの「プラン・登録情報の確認/変更」から「解約する」を選択します。ただし、4回の最低受取回数を満たしていない場合は解約できず、残り回数分の料金が発生します。解約ではなく「お届けをストップ」（休止）を選ぶことも可能で、休止中は料金が発生しません。解約と休止の違いをご確認のうえ、手続きを行ってください。\"}},{\"@type\":\"Question\",\"name\":\"解約と休止の違いは何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"解約はサービスの利用を終了することで、アカウント情報やクーポンなどが失われる場合があります。休止は一時的にお届けを止めることで、アカウントや設定はそのまま保持されます。再開する際は、休止のほうが円滑に利用を再開できます。解約するかどうか判断に迷う場合は、まず休止を選ぶことをおすすめします。bloomeeやmedeluには休止機能があります。\"}},{\"@type\":\"Question\",\"name\":\"解約後に届いた花はどうなりますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"解約手続きの時期によっては、すでに手配済みの花が届くことがあります。多くのサービスでは「次回お届け日の○日前まで」に解約する必要があり、この期限を過ぎると次回分が届き、料金が発生します。解約を検討している場合は、次回お届け日を確認し、余裕をもって手続きを行ってください。\"}},{\"@type\":\"Question\",\"name\":\"解約したら違約金はかかりますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"当サイトで紹介している5サービスのうち、違約金が発生するのはbloomeeのみです。bloomeeは4回の最低受取回数があり、4回未満で解約すると、4回分のうち残回数分の商品代金（税込）が途中解約料として請求されます（2026年10月17日公式確認）。それ以外のmedelu、AND PLANTS、hanameku、日本総合園芸には違約金はありません（日本総合園芸は入会金・手数料も不要（2026年10月27日公式確認））。\"}},{\"@type\":\"Question\",\"name\":\"花のサブスクを解約する人の主な理由は何ですか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"主な解約理由として「花が好みに合わなかった」「費用が負担になった」「花のお手入れが負担になった」「引っ越しや生活環境の変化」「届く頻度が多すぎた」などが挙げられます。配送頻度の変更やプラン変更で解決できる場合もあるため、解約前にサービスの設定を見直すことをおすすめします。\"}},{\"@type\":\"Question\",\"name\":\"一度解約しても再開できますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"はい、多くのサービスで再開が可能です。ただし、解約した場合は新規登録と同じ手続きが必要になることがあります。休止の場合は、マイページからお届けを再開できるサービスが多くあります。bloomee、medelu、hanamekuはいずれも再開に対応しています。以前のアカウント情報を使えるかどうかはサービスによって異なるため、公式サイトで確認してください。\"}},{\"@type\":\"Question\",\"name\":\"解約前にやっておくべきことはありますか？\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"まず次回お届け日と解約期限をご確認ください。次に、ポイントやクーポンが残っている場合は使い切ることをおすすめします。また、解約ではなく休止やスキップで対応できないかもご検討ください。配送頻度の変更やプランのダウングレードで不満が解消される場合もあります。解約理由を明確にしたうえで、解約が必要かどうかを判断することをおすすめします。\"}}]}" }} />
        {/* JSONLD_INJECTED_v1 #3 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"花のサブスク 解約方法と注意点\",\"description\":\"花のサブスクの解約手順を解説します\"}" }} />
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F6F4EF] border-b border-[#DEDAD2]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#6B6F6A]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <a href="/" className="hover:text-[#2F5B43] transition-colors">ホーム</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#4A4F49]">ガイド記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#1F2420] font-medium">花サブスクの解約方法</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <PageHero path="/guides/kaiyaku/">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#2F5B43] font-medium mb-3 tracking-wide">
              花のサブスク解約ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1F2420] mb-4 leading-tight">
              花サブスクの解約方法｜<br className="hidden md:block" />
              各社の解約手順と注意点を解説
            </h1>
            <p className="text-sm md:text-base text-[#4A4F49] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクの解約を検討している方に向けて、解約方法や違約金の有無をご説明します。
              当サイトでは、主要5サービスの解約方法・手順・注意点をまとめています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">対象サービス</p>
                <p className="text-xl font-bold text-[#2F5B43]">5サービス</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">最低受取回数の設定あり</p>
                <p className="text-xl font-bold text-[#2F5B43]">1サービスのみ</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">Web解約対応</p>
                <p className="text-xl font-bold text-[#2F5B43]">5サービス</p>
                <p className="text-xs text-[#6B6F6A] mt-1">日本総合園芸は公式サイトの退会フォーム（2026年10月27日公式確認）</p>
              </div>
              <div className="bg-white rounded-md px-5 py-3">
                <p className="text-xs text-[#6B6F6A] mb-1">違約金あり</p>
                <p className="text-xl font-bold text-[#2F5B43]">1サービスのみ</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#DEDAD2]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F6F4EF] rounded-md p-5 md:p-6">
              <p className="text-sm font-bold text-[#1F2420] mb-3">本ページの内容</p>
              <nav>
                <ol className="text-sm text-[#4A4F49] space-y-2">
                  <li><a href="#intro" className="hover:text-[#2F5B43] transition-colors">1. 花のサブスクを解約する前に確認すべきこと</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#2F5B43] transition-colors">2. 解約条件の比較表（5サービス一覧）</a></li>
                  <li><a href="#step-by-step" className="hover:text-[#2F5B43] transition-colors">3. 各サービスの解約手順と注意点</a></li>
                  <li><a href="#reasons" className="hover:text-[#2F5B43] transition-colors">4. 花のサブスクをやめた理由（よくある解約理由）</a></li>
                  <li><a href="#tips" className="hover:text-[#2F5B43] transition-colors">5. 解約前に確認していただきたい事項</a></li>
                  <li><a href="#faq" className="hover:text-[#2F5B43] transition-colors">6. 花のサブスクの解約に関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#2F5B43] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクを解約する前に確認すべきこと
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-6">
              花のサブスクを解約する際は、手続きに進む前に確認していただきたい事項がいくつかあります。
              確認せずに手続きを行うと、不要な料金が発生する可能性があります。
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-sm font-bold text-[#1F2420] mb-2">最低受取回数を満たしているか</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  bloomeeには4回の最低受取回数があります。4回受け取る前に解約すると、4回分のうち残回数分の商品代金（税込）が途中解約料として請求されます（2026年10月17日公式確認）。
                  まずはこれまでの受取回数をご確認ください。他のサービス（medelu、AND PLANTS、hanameku、日本総合園芸）には最低受取回数の設定はありません。ただし、hanamekuは最低回数の記載はありませんが、初回（定期1回目）の解約は受け付けていません（2026年10月17日公式確認）。
                </p>
              </div>

              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-sm font-bold text-[#1F2420] mb-2">次回お届け日と解約期限を確認する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  多くのサービスでは、次回お届け日の数日前までに解約手続きを完了する必要があります。
                  期限を過ぎると次回分の料金が発生するため、マイページで次回お届け日を確認し、余裕をもって手続きを行ってください。
                </p>
              </div>

              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-sm font-bold text-[#1F2420] mb-2">解約ではなく「休止」や「スキップ」で対応できるかを確認する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  一時的に花が不要な場合や、頻度を減らしたい場合は、解約ではなく休止やスキップで対応できることがあります。
                  休止の場合はアカウント情報が保持されるため、再開時の手続きが簡単です。解約するかどうか判断に迷う場合は、まず休止をご検討ください。
                </p>
              </div>

              <div className="bg-[#F6F4EF] rounded-md p-5 border border-[#DEDAD2]">
                <h3 className="text-sm font-bold text-[#1F2420] mb-2">ポイントやクーポンの残高を確認する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  解約するとポイントやクーポンが失効する場合があります。
                  残っているポイントやクーポンがある場合は、解約前に使い切ることをおすすめします。
                </p>
              </div>
            </div>

            <div className="bg-[#EDF1EC] rounded-md p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#2F5B43] mb-3">本ページの対象サービス</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ bloomee（ブルーミー）-- 4回受取後にマイページから解約</li>
                <li>・ medelu（メデル）-- 最低受取回数の設定なし、マイページからいつでも解約</li>
                <li>・ AND PLANTS（アンドプランツ）-- 都度払い、スキップ/停止で対応</li>
                <li>・ hanameku（ハナメク）-- 最低受取回数の設定なし（初回（定期1回目）の解約は不可（2026年10月17日公式確認））、マイページから解約</li>
                <li>・ 日本総合園芸 -- 公式サイトの退会フォーム・電話・メールで解約（クレジット決済コースはWebのマイページでも中止可能）（2026年10月27日公式確認）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              解約条件の比較表（5サービス一覧）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              主要5サービスの解約条件を一覧にしています。最低受取回数・解約方法・違約金・休止機能の有無をご確認いただけます。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-md overflow-hidden" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#2F5B43] text-white">
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-center font-medium">最低受取回数</th>
                    <th className="px-4 py-3 text-center font-medium">解約方法</th>
                    <th className="px-4 py-3 text-center font-medium">違約金</th>
                    <th className="px-4 py-3 text-center font-medium">休止機能</th>
                    <th className="px-4 py-3 text-center font-medium">解約難易度</th>
                  </tr>
                </thead>
                <tbody>
                  {cancellationData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#DEDAD2] ${item.name === "bloomee" ? "bg-[#F7F1EC]" : ""}`}>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#2F5B43] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#6B6F6A]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.minOrders === "なし" ? (
                          <span className="text-[#2F5B43] font-medium">なし</span>
                        ) : (
                          <span className="text-[#C53030] font-medium">{item.minOrders}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#4A4F49]">{item.method}</td>
                      <td className="px-4 py-4 text-center">
                        {item.penalty === "なし" ? (
                          <span className="text-[#2F5B43] font-medium">なし</span>
                        ) : (
                          <span className="text-[#C53030] text-xs">{item.penalty}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#4A4F49] text-xs">{item.pauseOption}</td>
                      <td className="px-4 py-4 text-center">
                        {item.difficulty === "簡単" ? (
                          <span className="bg-[#EDF1EC] text-[#2F5B43] text-xs font-medium px-2 py-1 rounded">{item.difficulty}</span>
                        ) : (
                          <span className="bg-[#F7F1EC] text-[#C53030] text-xs font-medium px-2 py-1 rounded">{item.difficulty}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-md border border-[#DEDAD2] p-5">
              <h3 className="text-sm font-bold text-[#1F2420] mb-3">表の補足</h3>
              <ul className="text-sm text-[#4A4F49] space-y-2">
                <li>・ bloomeeのみ4回の最低受取回数があり、未達で解約すると残額が請求されます</li>
                <li>・ 日本総合園芸は、公式サイトの「コース変更・休会・退会」ページの退会フォームか、電話・メールで解約します。クレジット決済対応コースは、配達週の前週水曜日の決済までにWebのマイページで中止を登録できます（2026年10月27日公式確認）</li>
                <li>・ AND PLANTSは都度払い方式のため、「解約」ではなく「停止」という扱いになります</li>
                <li>・ 2026年7月8日に各公式サイト等で再確認した情報です。ご利用前に、公式サイトにて最新情報をご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Step-by-Step Guide ─── */}
        <section id="step-by-step" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              各サービスの解約手順と注意点
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              5サービスそれぞれの解約手順を順にご説明します。注意点もあわせてご確認ください。
            </p>

            <div className="space-y-8">
              {cancellationData.map((item, idx) => (
                <div key={idx} className="bg-[#F6F4EF] rounded-md border border-[#DEDAD2] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${
                    item.name === "bloomee"
                      ? "bg-[#F7F1EC] border-b border-[#E3D3C8]"
                      : "bg-[#EDF1EC] border-b border-[#C9D6CB]"
                  }`}>
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2420]">
                        {item.name}（{item.nameJa}）の解約方法
                      </h3>
                      <p className="text-sm text-[#4A4F49]">
                        解約方法：{item.method}　｜　最低受取回数：{item.minOrders}　｜　難易度：{item.difficulty}
                      </p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">最低受取回数</p>
                        <p className={`text-base font-bold ${item.minOrders === "なし" ? "text-[#2F5B43]" : "text-[#C53030]"}`}>
                          {item.minOrders}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">解約方法</p>
                        <p className="text-base font-bold text-[#1F2420]">{item.method}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">違約金</p>
                        <p className={`text-base font-bold ${item.penalty === "なし" ? "text-[#2F5B43]" : "text-[#C53030]"}`}>
                          {item.penalty === "なし" ? "なし" : "あり"}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#DEDAD2]">
                        <p className="text-xs text-[#6B6F6A] mb-1">休止機能</p>
                        <p className="text-base font-bold text-[#1F2420]">
                          {item.pauseOption.startsWith("あり") ? "あり" : "要相談"}
                        </p>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="mb-5">
                      <h4 className="text-sm font-bold text-[#1F2420] mb-3">解約手順</h4>
                      <ol className="space-y-2">
                        {item.steps.map((step, stepIdx) => (
                          <li key={stepIdx} className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#2F5B43] text-white text-xs font-bold shrink-0 mt-0.5">
                              {stepIdx + 1}
                            </span>
                            <span className="text-sm text-[#4A4F49] leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Notes */}
                    <div className={`rounded-lg p-4 mb-5 ${
                      item.name === "bloomee" ? "bg-[#F7F1EC] border border-[#E3D3C8]" : "bg-[#EDF1EC]"
                    }`}>
                      <h4 className={`text-sm font-bold mb-2 ${
                        item.name === "bloomee" ? "text-[#C53030]" : "text-[#2F5B43]"
                      }`}>
                        注意点
                      </h4>
                      <ul className="text-sm text-[#4A4F49] space-y-2">
                        {item.notes.map((note, noteIdx) => (
                          <li key={noteIdx}>・ {note}</li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={item.url}
                        className="inline-block text-center bg-white text-[#2F5B43] font-bold text-sm px-6 py-3 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
                      >
                        {item.name}の詳細レビューを見る
                      </a>
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block text-center bg-[#2F5B43] text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-[#234534] transition-colors"
                      >
                        {item.name}公式サイトを見る
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Reasons Section ─── */}
        <section id="reasons" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクをやめた理由（よくある解約理由）
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              花のサブスクを解約した方が挙げる主な理由をまとめています。
              ご自身の状況に当てはまるかを確認し、解約以外の方法で解決できないかもご検討ください。
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由1
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">花が好みに合わなかった</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                      届く花の色合いや種類が好みと合わないという声は少なくありません。
                      特に花材をお任せで選ぶサービスでは、毎回好みの花が届くとは限りません。
                    </p>
                    <p className="text-sm text-[#2F5B43]">
                      対策：花の色を指定できるサービス（HitoHanaは6色＋おまかせから選択（2026年10月17日公式確認））に切り替える、またはプランを変更して選択肢を広げます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由2
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">費用が負担になった</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                      利用を続けるうちに、月々の費用が負担に感じられる場合があります。
                      特に送料込みで月3,000円以上かかる場合、年間では36,000円以上になります。
                    </p>
                    <p className="text-sm text-[#2F5B43]">
                      対策：より安いプランに変更する、配送頻度を隔週や月1回に変更する、送料無料のサービスに乗り換える、といった方法があります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由3
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">花のお手入れが負担になった</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                      水替えや切り戻し、枯れた花の処理など、花のお手入れが想定以上に手間に感じられるという声もあります。
                      特に忙しい時期には、お手入れが後回しになりやすくなります。
                    </p>
                    <p className="text-sm text-[#2F5B43]">
                      対策：配送頻度を減らす（月1回にする）、長持ちしやすい花を扱うサービスを選ぶ、延命剤を活用する、といった方法があります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由4
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">届く頻度が多すぎた</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                      毎週届くプランの場合、前回の花がまだ傷んでいないうちに次の花が届き、飾る場所や花瓶が不足することがあります。
                    </p>
                    <p className="text-sm text-[#2F5B43]">
                      対策：隔週や月1回の配送に変更する、スキップ機能を活用する、といった方法があります。解約の必要がない場合も多くあります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由5
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">引っ越し・生活環境の変化</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                      引っ越しや生活環境の変化（出産、入院、長期出張など）により、花を受け取れなくなる場合もあります。
                    </p>
                    <p className="text-sm text-[#2F5B43]">
                      対策：一時的な場合は、解約ではなく休止やスキップで対応できます。住所変更のみで解決する場合もあります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-5 border border-[#DEDAD2]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#2F5B43] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由6
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2420] mb-2">届いた花の鮮度に不満があった</h3>
                    <p className="text-sm text-[#4A4F49] leading-relaxed mb-2">
                      ポスト投函の場合、夏場や配送状況によって花がしおれて届くことがあります。
                      品質保証のあるサービスでは再送対応を受けられますが、同様の事態が繰り返されると不満につながります。
                    </p>
                    <p className="text-sm text-[#2F5B43]">
                      対策：宅配便で配送するサービス（AND PLANTSなど）に切り替える、品質保証を利用して再送を依頼する、といった方法があります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tips to Avoid Regret ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              解約前に確認していただきたい事項
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8">
              解約後に「続けておけばよかった」と感じる方もいます。
              以下の事項を確認してから、解約手続きに進むことをおすすめします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">まず休止・スキップを利用する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  解約する前に、1〜2か月の休止やスキップを利用することをおすすめします。
                  花のない期間を経て、花のある暮らしを続けたいと考え直す方は少なくありません。
                  休止中は料金が発生しないため、費用をかけずに判断できます。
                </p>
              </div>

              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">プラン変更で不満が解消できるかを検討する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  料金が負担であれば安いプランへの変更、頻度が多ければ月1回への変更、花の好みが合わなければ別のサービスへの乗り換えなど、
                  解約以外の方法で不満が解消される場合は多くあります。
                </p>
              </div>

              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">他サービスへの乗り換えを検討する</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  現在のサービスに不満がある場合でも、花のサブスクそのものをやめる必要がない場合があります。
                  サービスごとに花のテイスト・料金・配送方法が異なるため、別のサービスに変更することで満足度が向上することがあります。
                </p>
              </div>

              <div className="bg-[#EDF1EC] rounded-md p-5 border border-[#C9D6CB]">
                <h3 className="text-base font-bold text-[#1F2420] mb-3">解約理由を明確にする</h3>
                <p className="text-sm text-[#4A4F49] leading-relaxed">
                  理由が明確でないまま解約すると、後から再検討が必要になる場合があります。
                  具体的に何が不満なのか、その不満は解約以外の方法で解決できないかを整理することをおすすめします。
                  理由が明確であれば、解約後の判断もしやすくなります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F6F4EF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6 pb-3 border-b-2 border-[#2F5B43]">
              花のサブスクの解約に関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#DEDAD2] rounded-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#EDF1EC] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#1F2420] pr-4">
                      Q. {item.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#6B6F6A] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-[#F6F4EF]">
                      <p className="text-sm text-[#4A4F49] leading-relaxed">
                        A. {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#EDF1EC]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2420] mb-6">
              解約前に休止やプラン変更もご検討ください
            </h2>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクの解約は、多くのサービスでマイページから手続きできます。
              注意が必要なのは、bloomeeの最低受取回数（4回）と、日本総合園芸の手続き方法（退会フォーム・電話・メール。クレジット決済コースはWebのマイページでも中止可能）（2026年10月27日公式確認）の2点です。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              解約を検討している方は、まず解約が必要かどうかをご確認ください。
              配送頻度の変更、プランの変更、休止やスキップなど、解約せずに不満を解消できる方法もあります。
            </p>
            <p className="text-sm md:text-base text-[#4A4F49] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              解約する場合は、次回お届け日と解約期限を確認し、余裕をもって手続きを行ってください。
              別のサービスに乗り換えたい方は、当サイトの比較ページも参考にしてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/"
                className="inline-block bg-[#2F5B43] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#234534] transition-colors"
              >
                花サブスク5社の比較（トップページ）
              </a>
              <a
                href="/compare/cheap"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                安い花サブスクランキング
              </a>
              <a
                href="/guides/beginner"
                className="inline-block bg-white text-[#2F5B43] font-bold text-base px-8 py-4 rounded-md border-2 border-[#2F5B43] hover:bg-[#EDF1EC] transition-colors"
              >
                初心者向けガイド
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#4A4F49] hover:text-[#2F5B43] transition-colors underline"
            >
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

              <p className="text-xs text-gray-400">
                花のサブスクを比較し、ご自身に合ったサービス選びを支援します。
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                トップページ
              </a>
              <a href="/#comparison" className="hover:text-white transition-colors">
                比較表
              </a>
              <a href="/#reviews" className="hover:text-white transition-colors">
                サービス詳細
              </a>
              <a href="/#faq" className="hover:text-white transition-colors">
                よくある質問
              </a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">
              当サイトはアフィリエイトプログラムに参加しています。
              リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。
            </p>
            <p className="text-xs text-gray-500 mt-2">
              掲載情報は2026年4月時点のものです。ご利用前に、各公式サイトにて最新情報をご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}
