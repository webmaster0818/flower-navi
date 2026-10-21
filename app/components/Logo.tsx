// flowerデリ のロゴ（B案：吊り鉢のマーク＋ゴシック）。2026-10-21 刷新時の仮置き。決定案に差し替える
export function LogoMark({ size = 40, light = false }: { size?: number; light?: boolean }) {
  const ink = light ? "#F6F4EF" : "#2F4A3A";
  const pot = light ? "#D99A7E" : "#B8735A";
  return (
    <svg width={size * 0.87} height={size} viewBox="0 0 52 60" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="26" cy="4" r="2.2" />
      <path d="M26 6 L10 34 M26 6 L42 34 M26 6 L26 34" />
      <path d="M8 34 H44 C44 46 36 54 26 54 C16 54 8 46 8 34Z" fill={pot} stroke={pot} />
      <path d="M15 34 C14 27 18 22 24 21 M37 34 C38 28 34 23 29 23" />
    </svg>
  );
}

export default function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const color = light ? "text-[#F6F4EF]" : "text-[#2F4A3A]";
  return (
    <span className={`inline-flex items-center gap-2.5 ${color}`}>
      <LogoMark size={compact ? 34 : 40} light={light} />
      <span className="leading-none">
        <span className="block font-[family-name:var(--font-logo)] text-[24px] md:text-[27px] tracking-[0.01em]">
          flower<b className="font-medium">デリ</b>
        </span>
        {!compact && (
          <span className="block text-[10.5px] tracking-[0.3em] mt-1.5 opacity-75">お花の定期便を比べる</span>
        )}
      </span>
    </span>
  );
}
