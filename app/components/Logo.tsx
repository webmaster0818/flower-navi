// flowerデリ のロゴ（A案：双葉の芽のマーク＋セリフ体の斜体）。2026-10-21 MediaXAI 決定
export function LogoMark({ size = 40, light = false }: { size?: number; light?: boolean }) {
  const ink = light ? "#F6F4EF" : "#2F4A3A";
  const leaf = light ? "#D99A7E" : "#B8735A";
  return (
    <svg width={size * 0.72} height={size} viewBox="0 0 40 56" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M20 54 C20 40 20 30 20 18" />
      <path d="M20 30 C12 30 6 24 5 15 C14 15 20 21 20 30Z" fill={leaf} stroke={leaf} />
      <path d="M20 22 C27 22 33 17 35 8 C26 8 20 13 20 22Z" />
    </svg>
  );
}

export default function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const color = light ? "text-[#F6F4EF]" : "text-[#2F4A3A]";
  return (
    <span className={`inline-flex items-center gap-2 ${color}`}>
      <LogoMark size={compact ? 32 : 38} light={light} />
      <span className="leading-none whitespace-nowrap">
        <span className="font-[family-name:var(--font-logo)] italic text-[30px] md:text-[34px] tracking-[0.01em]">flower</span>
        <span className="font-heading font-medium text-[17px] md:text-[19px] tracking-[0.06em] ml-0.5 relative top-[1px]">デリ</span>
      </span>
    </span>
  );
}
