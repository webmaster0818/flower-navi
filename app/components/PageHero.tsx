import type { ReactNode } from "react";
import photos from "@/data/heroPhotos.json";
import OfficialShot, { getShot } from "@/app/components/OfficialShot";

type Photo = { src: string; width: number; height: number; orientation: string; alt: string };
const P = photos as Photo[];
const landscape = P.filter((p) => p.orientation === "landscape");

// ページごとに写真がばらけるよう、パスから決まる番号で選ぶ
function pick(key: string, offset = 0): Photo | undefined {
  if (!landscape.length) return undefined;
  let h = 0;
  for (const c of key) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return landscape[(h + offset) % landscape.length];
}

// 配下ページのファーストビュー。左に見出しと要点、右にサービスの公式サイトのキャプチャか部屋の写真
const NAMES: Record<string, string> = {
  bloomee: "bloomee（ブルーミー）", medelu: "medelu（メデル）", "and-plants": "AND PLANTS（アンドプランツ）",
  hitohana: "HitoHana（ヒトハナ）", lifft: "LIFFT（リフト）", hanameku: "hanameku（ハナメク）",
  tasuhana: "タスハナ", "nihon-sogo-engei": "花の定期便（日本総合園芸）",
};

type Svc = string | { slug: string; name: string };

export default function PageHero({
  children, path, services = [], photo, bleed = false,
}: { children: ReactNode; path: string; services?: Svc[]; photo?: number; bleed?: boolean }) {
  const shots = services
    .map((x) => (typeof x === "string" ? { slug: x, name: NAMES[x] ?? x } : x))
    .filter((s) => getShot(s.slug));
  const main = photo !== undefined ? landscape[photo % Math.max(1, landscape.length)] : pick(path);
  const sub = pick(path, 3);
  return (
    <section className={`ph relative bg-[#F6F4EF] border-b border-[#DEDAD2] ${bleed ? "w-screen ml-[calc(50%-50vw)] mb-10" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-9 md:py-14 grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-8 md:gap-14 items-center">
        <div className="ph-text">{children}</div>
        <div className="ph-media">
          {shots.length === 1 && <OfficialShot slug={shots[0].slug} name={shots[0].name} device="both" eager />}
          {shots.length >= 2 && (
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {shots.slice(0, 2).map((s) => <OfficialShot key={s.slug} slug={s.slug} name={s.name} eager />)}
            </div>
          )}
          {shots.length === 0 && main && (
            <div className="relative pb-[9%] pl-[7%]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={main.src} alt={main.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              </div>
              {sub && sub.src !== main.src && (
                <div className="absolute left-0 bottom-0 w-[36%] aspect-square overflow-hidden border-[6px] border-[#F6F4EF]">
                  <img src={sub.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
