"use client";

import { useState } from "react";
import Logo from "@/app/components/Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* 景表法対応 */}
      <div className="bg-[#F6F4EF] text-center py-1 border-b border-[#DEDAD2]">
        <span className="text-[10px] text-[#6B6F6A]">PRを含みます</span>
      </div>
      <div className="bg-white border-b border-[#DEDAD2]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-[76px] flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="flowerデリ トップページ">
          <Logo />
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 text-[14px] text-[#1F2420]">
          <a href="/#diagnosis" className="hover:text-[#2F5B43] transition-colors">診断</a>
          <a href="/#comparison" className="hover:text-[#2F5B43] transition-colors">比較表</a>
          <a href="/compare/" className="hover:text-[#2F5B43] transition-colors">比較ガイド</a>
          <a href="/compare/ryokin/" className="hover:text-[#2F5B43] transition-colors">料金一覧</a>
          <a href="/#reviews" className="hover:text-[#2F5B43] transition-colors">サービス詳細</a>
          <a href="/#how-to-choose" className="hover:text-[#2F5B43] transition-colors">選び方</a>
          <a href="/#faq" className="hover:text-[#2F5B43] transition-colors">FAQ</a>
        </nav>
        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニュー"
        >
          <span className={`block w-6 h-0.5 bg-[#1F2420] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1F2420] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1F2420] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#DEDAD2] max-h-[80vh] overflow-y-auto">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            <a href="/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">トップページ</a>
            <a href="/#diagnosis" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">診断</a>
            <a href="/#comparison" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">比較表</a>
            <a href="/compare/ryokin/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">料金一覧（マスター表）</a>

            <div className="border-t border-[#DEDAD2] my-3" />
            <p className="text-xs text-[#6B6F6A] font-medium tracking-wider mb-2">サービス詳細</p>
            <a href="/services/bloomee/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">bloomee（ブルーミー）</a>
            <a href="/services/medelu/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">medelu（メデル）</a>
            <a href="/services/and-plants/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">AND PLANTS</a>
            <a href="/services/nihon-sogo-engei/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">花の定期便（日本総合園芸）</a>
            <a href="/services/hanameku/" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">hanameku（ハナメク）</a>

            <div className="border-t border-[#DEDAD2] my-3" />
            <p className="text-xs text-[#6B6F6A] font-medium tracking-wider mb-2">ガイド</p>
            <a href="/guides/beginner" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">初心者ガイド</a>
            <a href="/guides/flower-care" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">お花のお手入れ方法</a>
            <a href="/guides/hitorigurashi" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">一人暮らしのお花</a>
            <a href="/guides/present" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">プレゼント向け</a>
            <a href="/guides/oshare" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">おしゃれに飾る</a>
            <a href="/guides/seasonal-flowers" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">季節のお花</a>
            <a href="/guides/kaiyaku" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">解約方法</a>

            <div className="border-t border-[#DEDAD2] my-3" />
            <p className="text-xs text-[#6B6F6A] font-medium tracking-wider mb-2">比較記事</p>
            <a href="/compare/" className="block py-2.5 px-3 text-[#1F2420] font-medium hover:bg-[#F6F4EF] rounded-lg transition">比較ガイド一覧</a>
            <a href="/compare/bloomee-vs-medelu" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">bloomee vs medelu</a>
            <a href="/compare/cheap" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">安いお花の定期便</a>
            <a href="/compare/post-delivery" className="block py-2.5 px-3 text-[#1F2420] hover:bg-[#F6F4EF] rounded-lg transition">ポスト投函対応</a>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
