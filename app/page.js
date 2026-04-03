"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Linkedin, Gift, History, Zap, Globe, ShieldCheck, ExternalLink } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 text-center relative overflow-x-hidden font-sans">
      
      {/* الخلفية المتحركة الثابتة */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img src="/logo.png" alt="Background" className="w-[150%] max-w-none object-contain opacity-50"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* التأسيس */}
        <div className="mb-8 inline-flex items-center gap-2 border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </div>

        {/* اسم الدومين - إصلاح الظهور في الحاسوب */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter italic leading-none uppercase text-white inline-block">
            80DOLLARS<span className="text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">.COM</span>
          </h1>
          <p className="text-zinc-500 text-xs md:text-xl mt-4 tracking-[0.4em] uppercase font-light">Legacy Premium Domain Asset</p>
        </div>

        {/* وصف المميزات - ظهور مباشر بدون تأخير */}
        <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto w-full text-left">
          {[
            { Icon: Zap, title: "HIGH PERFORMANCE", desc: "FORMER HUB FOR TECH SERVICES & CURRENCY SOLUTIONS." },
            { Icon: Globe, title: "GLOBAL AUTHORITY", desc: "INDEXED IN WEB ARCHIVES SINCE MARCH 2004." },
            { Icon: ShieldCheck, title: "CLEAN HISTORY", desc: "VERIFIED OWNERSHIP & SECURE ASSET TRANSFER." }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-2xl flex items-start gap-5 border-l-4 border-l-yellow-600/50 shadow-lg">
              <item.Icon className="text-yellow-500 shrink-0 mt-1" size={22} />
              <div>
                <h4 className="text-sm font-bold text-white uppercase italic tracking-wider">{item.title}</h4>
                <p className="text-[10px] text-zinc-500 uppercase mt-1 tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* السعر مع التوهج المصلح */}
        <div className="bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative mb-12 backdrop-blur-md">
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6], textShadow: ["0 0 5px #eab308", "0 0 15px #eab308", "0 0 5px #eab308"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-6 right-8 md:right-12 text-yellow-500 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest"
          >
            ● CERTIFIED ASSET
          </motion.div>
          
          <p className="text-[10px] text-zinc-500 uppercase mb-2 tracking-[0.3em]">CURRENT VALUATION</p>
          <div className="text-6xl md:text-8xl font-black mb-2 text-white italic tracking-tighter">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic italic-none">USD</span></div>
          <p className="text-[10px] text-yellow-600 font-black mb-8 uppercase italic tracking-[0.2em] animate-pulse">PRICE IS SUBJECT TO INCREASE</p>
          
          <a href="mailto:Sales@80dollars.com" className="block w-full py-5 rounded-2xl bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-yellow-400 hover:scale-[1.02] shadow-xl">
            MAKE AN OFFER
          </a>
        </div>

        {/* قسم الهدايا وروابط الشراء مباشرة تحتها */}
        <div className="bg-zinc-900/40 border border-zinc-800/60 p-8 rounded-[2.5rem] mb-12 backdrop-blur-xl relative text-left shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div className="relative">
              <div className="absolute -top-12 -left-12 bg-yellow-500/10 w-24 h-24 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2 flex items-center gap-3">
                <Gift className="text-yellow-500" size={28} /> FREE BONUS INCLUDED
              </h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-wider max-w-xl">
                PURCHASE INCLUDES ALL OFFICIAL MATCHING SOCIAL MEDIA ACCOUNTS (<span className="text-yellow-500 font-bold">YT, FB, IG, X, IN</span>). INSTANT BRAND AUTHORITY INCLUDED.
              </p>
            </div>
            <div className="bg-black/50 border border-yellow-600/30 px-6 py-2 rounded-full h-fit">
               <span className="text-yellow-500 font-black text-[11px] uppercase tracking-widest">$1,500 GIFT VALUE</span>
            </div>
          </div>

          {/* أزرار الشراء - مكانها الجديد مباشرة تحت الوصف */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "PURCHASE ON DAN.COM", url: "https://dan.com/buy-domain/80dollars.com", glow: "rgba(249,115,22,0.3)" },
              { label: "PURCHASE ON SEDO.COM", url: "https://sedo.com/search/details/?domain=80dollars.com", glow: "rgba(59,130,246,0.3)" },
              { label: "FIND ON AFTERNIC.COM", url: "https://www.afternic.com/domain/80dollars.com", glow: "rgba(34,197,94,0.3)" },
              { label: "SECURE VIA ESCROW.COM", url: "https://www.escrow.com", glow: "rgba(255,255,255,0.1)" }
            ].map((btn, i) => (
              <motion.a 
                key={i} 
                href={btn.url} 
                target="_blank" 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="py-4 px-6 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-between group transition-all"
                style={{ boxShadow: `0 4px 15px ${btn.glow}` }}
              >
                <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] italic group-hover:text-yellow-500">{btn.label}</span>
                <ExternalLink size={14} className="text-zinc-600 group-hover:text-yellow-500" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* السوشيال ميديا */}
        <div className="flex flex-wrap justify-center gap-10 mb-16 opacity-60">
          {[Youtube, Github, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <Icon key={i} size={24} className="hover:text-yellow-500 cursor-pointer transition-colors" />
          ))}
          <span className="font-black text-lg hover:text-yellow-500 cursor-pointer italic transition-colors">X</span>
        </div>

        <footer className="text-[9px] text-zinc-800 uppercase tracking-[0.6em] pb-8">
          PRIVATE DOMAIN ASSET • 80DOLLARS.COM
        </footer>
      </div>
    </main>
  );
}
