import shots from "@/data/screenshots.json";

type Shot = {
  src: string; width: number; height: number;
  spSrc?: string; spWidth?: number; spHeight?: number;
  pageUrl: string; capturedOn: string; label?: string;
};

const ALIAS: Record<string, string> = { "and-plants": "andplants" };
export function getShot(slug: string): Shot | undefined {
  return (shots as Record<string, Shot>)[ALIAS[slug] ?? slug];
}

function dateJa(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

// 公式サイトのキャプチャ。PCの画面を枠つきで見せ、device="both" ならスマホの画面を右下に重ねる
export default function OfficialShot({
  slug, name, device = "pc", caption = true, className = "", eager = false,
}: { slug: string; name: string; device?: "pc" | "both"; caption?: boolean; className?: string; eager?: boolean }) {
  const s = getShot(slug);
  if (!s) return null;
  const where = s.label ? `「${s.label}」` : "";
  return (
    <figure className={className}>
      <div className={`relative ${device === "both" && s.spSrc ? "pr-[16%] pb-[6%]" : ""}`}>
        <div className="bg-white border border-[#D6D2C8]">
          <div className="flex items-center gap-1.5 px-3 h-6 border-b border-[#E6E2D9] bg-[#F3F1EB]" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-[#D6D2C8]" /><span className="w-2 h-2 rounded-full bg-[#D6D2C8]" /><span className="w-2 h-2 rounded-full bg-[#D6D2C8]" />
          </div>
          <img src={s.src} width={s.width} height={s.height} loading={eager ? "eager" : "lazy"}
            alt={`${name}の公式サイト${s.label ? `の${s.label}` : "のトップページ"}（パソコン表示）`} className="block w-full h-auto" />
        </div>
        {device === "both" && s.spSrc && (
          <div className="absolute right-0 bottom-0 w-[27%] bg-white border-[5px] border-[#1F2420] rounded-[14px] overflow-hidden">
            <img src={s.spSrc} width={s.spWidth} height={s.spHeight} loading={eager ? "eager" : "lazy"}
              alt={`${name}の公式サイト（スマートフォン表示）`} className="block w-full h-auto" />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-[11px] text-[#6B6F6A] mt-2 leading-snug">
          {name}の公式サイト{where}（{dateJa(s.capturedOn)}に取得）
        </figcaption>
      )}
    </figure>
  );
}
