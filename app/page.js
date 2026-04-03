"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Linkedin, Gift, History, Zap, Globe, ShieldCheck } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden">
      
      {/* الخلفية: شعار logo.png */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-10 animate-pulse" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none scale-150">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-7xl object-contain"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        
        {/* التأسيس 2004 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 inline-flex items-center gap-2 border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </motion.div>

        {/* اسم الدومين */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-6">
          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter italic leading-none uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-sm md:text-xl mb-16 tracking-[0.4em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* كرت السعر والشريط الأصفر (مطابق تماماً للصورة) */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/20 border border-zinc-800/50 p-10 rounded-[2.5rem] shadow-2xl relative mb-12 backdrop-blur-sm group">
          <div className="absolute top-5 right-8 text-yellow-500 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest animate-pulse">
            ● Certified Asset
          </div>
          <p className="text-[10px] text-zinc-500 uppercase mb-2 tracking-[0.3em]">Current Valuation</p>
          <div className="text-7xl md:text-8xl font-black mb-2 text-white italic tracking-tighter">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span></div>
          <p className="text-[10px] text-yellow-600 font-black mb-10 uppercase italic tracking-widest">Price is Subject to Increase</p>
          
          <a href="mailto:Sales@80dollars.com?subject=Offer for 80dollars.com" className="block w-full py-6 rounded-2xl bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_rgba(234,179,8,0.2)]">
            Make An Offer
          </a>
        </motion.div>

        {/* خانة الهدية (إعادة التصميم الأصلي كما في الصورة) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem] mb-16 backdrop-blur-sm relative text-left group">
          {/* أيقونة الهدية الصفراء في الزاوية */}
          <div className="absolute -top-5 -left-5 bg-yellow-500 text-black p-4 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform">
            <Gift size={28} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-4">
            <div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">FREE BONUS INCLUDED</h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-wide">
                Purchase includes all official matching social media accounts (<span className="text-yellow-500 font-bold">YT, FB, IG, X, IN</span>) for instant brand authority.
              </p>
            </div>
            <div className="bg-black/60 border border-zinc-800 px-6 py-2 rounded-full whitespace-nowrap">
               <span className="text-yellow-500 font-black text-[10px] uppercase tracking-widest">$1,500 Gift Value</span>
            </div>
          </div>
        </motion.div>

        {/* أيقونات السوشيال ميديا (متوهجة وكبيرة) */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {[
            { Icon: Youtube, url: "https://youtube.com/@80dollars" },
            { Icon: Facebook, url: "https://facebook.com/80dollars_com" },
            { Icon: Instagram, url: "https://instagram.com/80dollars_com" },
            { name: "X", url: "https://x.com/80dollars_com" }, 
            { Icon: Linkedin, url: "https://linkedin.com/in/80dollars_com" }
          ].map((link, i) => (
            <motion.a key={i} href={link.url} target="_blank" whileHover={{ scale: 1.2, color: "#eab308" }} className="text-zinc-600 transition-all drop-shadow-[0_0_8px_rgba(234,179,8,0.3)] hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]">
              {link.name ? <span className="font-bold text-2xl uppercase">{link.name}</span> : <link.Icon size={32} />}
            </motion.a>
          ))}
        </div>

        {/* أزرار المنصات (3D شفافة ومتوهجة) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Purchase on DAN", url: "https://dan.com/buy-domain/80dollars.com" },
            { label: "Purchase on Sedo", url: "https://sedo.com/search/details/?domain=80dollars.com" },
            { label: "Find on Afternic", url: "https://www.afternic.com/domain/80dollars.com" },
            { label: "Secure via Escrow", url: "https://www.escrow.com" }
          ].map((btn, i) => (
            <a key={i} href={btn.url} target="_blank" className="py-4 px-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-white/10 hover:border-yellow-600/50 hover:text-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {btn.label}
            </a>
          ))}
        </div>

        <footer className="text-[10px] text-zinc-800 uppercase tracking-[0.6em] pb-10">
          Private Domain Asset • 80dollars.com
        </footer>
      </div>
    </main>
  );
}
