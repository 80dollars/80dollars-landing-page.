"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Linkedin, Gift, History, Zap, Globe, ShieldCheck, ExternalLink } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden font-sans">
      
      {/* 1. الخلفية المتحركة (الغبار الذهبي + اللوجو المائي) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none scale-150">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-7xl object-contain"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        
        {/* شارة التأسيس 2004 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 inline-flex items-center gap-2 border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </motion.div>

        {/* اسم الدومين - العملاق والمائل */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-6">
          <h1 className="text-7xl sm:text-9xl md:text-[10rem] font-black tracking-tighter italic leading-none uppercase text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-6 drop-shadow-[0_0_40px_rgba(234,179,8,0.4)]">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-sm md:text-2xl mb-16 tracking-[0.5em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* الخانات الثلاثة الأصلية */}
        <div className="flex flex-col gap-5 mb-16 max-w-2xl mx-auto w-full text-left">
          {[
            { Icon: Zap, title: "HIGH PERFORMANCE", desc: "FORMER HUB FOR TECH SERVICES & CURRENCY SOLUTIONS." },
            { Icon: Globe, title: "GLOBAL AUTHORITY", desc: "INDEXED IN WEB ARCHIVES SINCE MARCH 2004." },
            { Icon: ShieldCheck, title: "CLEAN HISTORY", desc: "VERIFIED OWNERSHIP & SECURE ASSET TRANSFER." }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ x: 10 }} className="bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-xl p-6 rounded-2xl flex items-start gap-6 border-l-4 border-l-yellow-600/50 shadow-xl">
              <item.Icon className="text-yellow-500 shrink-0 mt-1" size={26} />
              <div>
                <h4 className="text-base font-bold text-white uppercase italic tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 uppercase mt-1 tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* كرت السعر مع CERTIFIED ASSET المتوهجة */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/30 border border-zinc-800/50 p-12 rounded-[3.5rem] shadow-2xl relative mb-16 backdrop-blur-md overflow-hidden group">
          {/* التوهج المتحرك لشارة Certified Asset */}
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], textShadow: ["0 0 5px #eab308", "0 0 20px #eab308", "0 0 5px #eab308"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-6 right-10 text-yellow-500 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em]"
          >
            ● CERTIFIED ASSET
          </motion.div>
          
          <p className="text-[11px] text-zinc-500 uppercase mb-4 tracking-[0.4em]">CURRENT VALUATION</p>
          <div className="text-7xl md:text-[8rem] font-black mb-4 text-white italic tracking-tighter drop-shadow-2xl">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span></div>
          <p className="text-[12px] text-yellow-600 font-black mb-12 uppercase italic tracking-[0.3em] animate-pulse">PRICE IS SUBJECT TO INCREASE</p>
          
          <a href="mailto:Sales@80dollars.com" className="block w-full py-7 rounded-3xl bg-yellow-500 text-black font-black text-base uppercase tracking-[0.3em] transition-all hover:bg-yellow-400 hover:scale-[1.03] shadow-[0_20px_40px_rgba(234,179,8,0.3)] active:scale-95">
            MAKE AN OFFER
          </a>
        </motion.div>

        {/* خانة الهدية (التصميم الفخم الأصلي) */}
        <motion.div whileHover={{ scale: 1.01 }} className="bg-zinc-900/40 border border-zinc-800/60 p-10 rounded-[2.5rem] mb-20 backdrop-blur-xl relative text-left group overflow-hidden shadow-2xl">
          <div className="absolute -top-5 -left-5 bg-yellow-500 text-black p-5 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:rotate-12 transition-transform">
            <Gift size={30} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-4">
            <div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-3">FREE BONUS INCLUDED</h3>
              <p className="text-zinc-500 text-[12px] leading-relaxed uppercase tracking-wider max-w-xl">
                PURCHASE INCLUDES ALL OFFICIAL MATCHING SOCIAL MEDIA ACCOUNTS (<span className="text-yellow-500 font-bold">YT, FB, IG, X, IN</span>) FOR **FREE**. INSTANT BRAND AUTHORITY INCLUDED.
              </p>
            </div>
            <div className="bg-black border border-yellow-600/30 px-8 py-3 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.1)]">
               <span className="text-yellow-500 font-black text-[12px] uppercase tracking-[0.2em]">$1,500 GIFT VALUE</span>
            </div>
          </div>
        </motion.div>

        {/* روابط الشراء (حية، توهج، حركة 3D) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 px-4">
          {[
            { label: "PURCHASE ON DAN", url: "https://dan.com/buy-domain/80dollars.com", color: "rgba(249,115,22,0.4)" },
            { label: "PURCHASE ON SEDO", url: "https://sedo.com/search/details/?domain=80dollars.com", color: "rgba(59,130,246,0.4)" },
            { label: "FIND ON AFTERNIC", url: "https://www.afternic.com/domain/80dollars.com", color: "rgba(34,197,94,0.4)" },
            { label: "SECURE VIA ESCROW", url: "https://www.escrow.com", color: "rgba(255,255,255,0.2)" }
          ].map((btn, i) => (
            <motion.a 
              key={i} 
              href={btn.url} 
              target="_blank" 
              whileHover={{ y: -10, scale: 1.05, boxShadow: `0 20px 40px ${btn.color}` }}
              whileTap={{ scale: 0.95 }}
              className="group py-6 px-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md text-white font-black text-[11px] uppercase tracking-[0.2em] transition-all flex flex-col items-center gap-3 relative overflow-hidden"
            >
              <ExternalLink size={18} className="text-zinc-500 group-hover:text-yellow-500 transition-colors" />
              <span className="group-hover:text-yellow-500 transition-colors">{btn.label}</span>
              {/* خط التوهج السفلي */}
              <div className="absolute bottom-0 left-0 h-1 bg-yellow-500 w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.a>
          ))}
        </div>

        {/* أيقونات السوشيال ميديا المتوهجة */}
        <div className="flex flex-wrap justify-center gap-12 mb-20">
          {[Youtube, Github, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <motion.a key={i} href="#" whileHover={{ scale: 1.3, rotate: 5, filter: "drop-shadow(0 0 10px #eab308)" }} className="text-zinc-600 hover:text-yellow-500 transition-all">
              <Icon size={32} />
            </motion.a>
          ))}
          <motion.a href="#" whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 10px #eab308)" }} className="text-zinc-600 hover:text-yellow-500 font-black text-2xl uppercase italic">X</motion.a>
        </div>

        <footer className="text-[10px] text-zinc-800 uppercase tracking-[0.8em] pb-10 font-bold">
          PRIVATE DOMAIN ASSET • 80DOLLARS.COM
        </footer>
      </div>
    </main>
  );
}
