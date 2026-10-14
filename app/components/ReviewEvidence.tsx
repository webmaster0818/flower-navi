// 口コミ・評判の受け皿ページ（/services/<slug>/）共通ブロック。
// ルール: 架空の口コミ・星評価・体験談は載せない。口コミは「出典（サイト名・URL・確認日）付きの傾向要約」のみ。
// 料金・条件は services.ts（公式確認値・確認日つき）を参照する。
import type { Service } from "@/data/services";
import type { ReviewEvidenceData } from "@/data/reviewEvidence";

const yen = (n: number) => `${n.toLocaleString()}円`;

/** ヒーロー直下に置く「結論」ボックス（口コミ・評判の要約＋最終確認日） */
export function ReviewVerdict({ d, s }: { d: ReviewEvidenceData; s: Service }) {
  return (
    <section aria-labelledby="verdict-heading" className="bg-white py-8 border-b border-[#E5E5E5]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl border-2 border-[#4A7C59] bg-[#F6FAF7] p-5 md:p-6">
          <p className="text-xs text-[#4A7C59] font-bold mb-1">
            最終更新：{d.updatedAt}（料金は{s.verifiedAt}に公式サイトで確認）
          </p>
          <h2 id="verdict-heading" className="text-lg md:text-xl font-bold text-[#333] mb-3">
            結論：{d.shortName}の口コミ・評判をひとことで
          </h2>
          <p className="text-sm md:text-base text-[#444] leading-relaxed mb-4">{d.verdict}</p>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-xl p-4 border border-[#DDE8E0]">
              <p className="font-bold text-[#4A7C59] mb-2">良い口コミで多い声</p>
              <ul className="space-y-1.5 text-[#555]">
                {d.positive.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#4A7C59] shrink-0">◎</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#F0DCCB]">
              <p className="font-bold text-[#C08552] mb-2">悪い口コミで多い声</p>
              <ul className="space-y-1.5 text-[#555]">
                {d.negative.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#C08552] shrink-0">△</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#888] mt-3">
            口コミは下記「口コミの出典と調べ方」に挙げた公開情報の傾向要約です。当サイトは個人の体験談や星評価を創作・掲載しません。
          </p>
        </div>
      </div>
    </section>
  );
}

/** 口コミ・評判の本体（出典つき傾向・メリデメ早見表・公式確認の料金表・調べ方） */
export function ReviewEvidence({ d, s }: { d: ReviewEvidenceData; s: Service }) {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
        {d.shortName}の口コミ・評判（出典つきの傾向まとめ）
      </h2>
      <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">{d.intro}</p>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="rounded-xl bg-[#F6FAF7] border border-[#DDE8E0] p-5">
          <h3 className="font-bold text-[#4A7C59] mb-3">良い口コミ・評判の傾向</h3>
          <ul className="space-y-2">
            {d.positive.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#4A7C59] shrink-0">◎</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-[#FBF7F2] border border-[#F0DCCB] p-5">
          <h3 className="font-bold text-[#C08552] mb-3">悪い口コミ・評判の傾向</h3>
          <ul className="space-y-2">
            {d.negative.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm md:text-base text-[#555] leading-relaxed"><span className="text-[#C08552] shrink-0">△</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#333] mb-3">メリット・デメリット早見表</h3>
      <div className="table-wrapper mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#4A7C59] text-white">
              <th className="px-3 py-2 text-left font-medium">観点</th>
              <th className="px-3 py-2 text-left font-medium">メリット</th>
              <th className="px-3 py-2 text-left font-medium">デメリット・注意点</th>
            </tr>
          </thead>
          <tbody className="text-[#555]">
            {d.prosCons.map((r, i) => (
              <tr key={i} className={`border-b border-[#E5E5E5] ${i % 2 ? "bg-[#F8F8F8]" : "bg-white"}`}>
                <td className="px-3 py-2 font-bold text-[#333] whitespace-nowrap">{r.point}</td>
                <td className="px-3 py-2">{r.merit}</td>
                <td className="px-3 py-2">{r.demerit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold text-[#333] mb-3">口コミの出典と調べ方</h3>
      <div className="rounded-xl border border-[#E8DFD5] bg-[#FBF7F2] p-5 mb-2">
        <p className="text-sm text-[#555] leading-relaxed mb-3">{d.method}</p>
        <ul className="space-y-2 text-sm text-[#555]">
          {d.sources.map((src, i) => (
            <li key={i} className="leading-relaxed">
              ・{src.url ? (
                <a href={src.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">{src.label}</a>
              ) : (
                <span className="font-medium">{src.label}</span>
              )}
              {src.note ? `：${src.note}` : ""}（{src.checkedAt}確認）
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-[#999] mb-2">
        ※ 口コミは個人の感想で、時期・地域・プランにより体験は異なります。件数や評価点は確認時点の値で、変動します。
      </p>
    </>
  );
}

/** 公式確認済みの料金表（services.ts が唯一のデータ源） */
export function OfficialPlans({ s }: { s: Service }) {
  return (
    <>
      <p className="text-sm font-bold text-[#4A7C59] mb-3">料金・条件（{s.verifiedAt} 公式サイトで確認）</p>
      <div className="table-wrapper mb-3">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F0EBE3] text-[#333]">
              <th className="px-3 py-2 text-left font-medium">プラン</th>
              <th className="px-3 py-2 text-left font-medium">1回あたりの料金</th>
              <th className="px-3 py-2 text-left font-medium">本数の目安</th>
              <th className="px-3 py-2 text-left font-medium">届き方</th>
            </tr>
          </thead>
          <tbody className="text-[#555]">
            {s.plans.map((p, i) => (
              <tr key={i} className="border-b border-[#E5E5E5] bg-white">
                <td className="px-3 py-2 font-bold text-[#333]">{p.name}</td>
                <td className="px-3 py-2">{yen(p.price)}{s.shippingIncluded ? "（送料込み）" : "＋送料"}</td>
                <td className="px-3 py-2">{p.flowers}</td>
                <td className="px-3 py-2">{p.postDelivery ? "ポスト投函" : "宅配（手渡し）"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="text-xs md:text-sm text-[#666] space-y-1 mb-2">
        <li>・送料：{s.shippingNote}</li>
        <li>・回数縛り・解約：{s.cancellation}</li>
        {s.note ? <li>・補足：{s.note}</li> : null}
        <li>・出典：{s.source}（{s.verifiedAt}確認）。料金・条件は変わることがあるため、申込前に公式サイトで最新情報をご確認ください。</li>
      </ul>

    </>
  );
}

/** 提携4社の比較（services.ts の公式確認値から生成。ページごとの手書き表による食い違いを防ぐ） */
export function CompareSection({ s, all, note }: { s: Service; all: Service[]; note: string }) {
  const others = all.filter((x) => x.id !== s.id);
  const cols = [s, ...others];
  const short = (x: Service) => x.name.replace(/（.*?）/, "");
  const rows: [string, (x: Service) => string][] = [
    ["最安プラン", (x) => `${x.cheapest.name} ${yen(x.cheapest.price)}`],
    ["送料", (x) => (x.shippingIncluded ? "込み" : "別（毎回）")],
    ["本数の目安（最安）", (x) => x.cheapest.flowers],
    ["届き方（最安）", (x) => (x.cheapest.postDelivery ? "ポスト投函" : "宅配")],
    ["回数の縛り", (x) => x.commitmentLabel],
  ];
  return (
    <section id="comparison" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
          {short(s)}とほかの花のサブスクの比較
        </h2>
        <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">{note}</p>
        <div className="table-wrapper">
          <table className="comparison-table w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="rounded-tl-lg">比較項目</th>
                {cols.map((c, i) => (
                  <th key={c.id} className={i === cols.length - 1 ? "rounded-tr-lg" : ""}>{short(c)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, f]) => (
                <tr key={label}>
                  <td className="font-medium text-[#333]">{label}</td>
                  {cols.map((c, i) => (
                    <td key={c.id} className={i === 0 ? "font-bold text-[#4A7C59]" : ""}>{f(c)}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="font-medium text-[#333]">詳しい口コミ・評判</td>
                {cols.map((c, i) => (
                  <td key={c.id}>{i === 0 ? "このページ" : <a href={c.servicePath} className="text-[#4A7C59] underline">{short(c)}の口コミ</a>}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#999] mt-3">※ 各社の公式サイトで確認した値（{cols.map((c) => `${short(c)}：${c.verifiedAt}`).join("／")}）。</p>
      </div>
    </section>
  );
}
