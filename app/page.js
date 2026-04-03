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
      
      {/* الخلفية */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* شارة التأسيس */}
        <div className="mb-6 inline-flex items-center gap-2 border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </div>

        {/* شارة PREMIUM (نمط Namecheap) */}
        <div className="flex justify-center mb-4">
          <motion.div 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-[#7b61ff] text-white text-[10px] font-bold px-4 py-1.5 rounded-md uppercase tracking-widest shadow-[0_0_20px_rgba(123,97,255,0.4)] flex items-center gap-2"
          >
            <ShieldCheck size={12}/> PREMIUM DOMAIN ASSET
          </motion.div>
        </div>

        {/* اسم الدومين - إصلاح الظهور في الحاسوب */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter italic leading-none uppercase text-white inline-block">
            80DOLLARS<span className="text-yellow-500">.COM</span>
          </h1>
          <p className="text-zinc-500 text-[10px] md:text-sm mt-4 tracking-[0.5em] uppercase font-light">Legacy Global Fintech Identity</p>
        </div>

        {/* السعر الجديد - $9,900 */}
        <div className="bg-zinc-900/30 border border-zinc-800/50 p-10 md:p-16 rounded-[3rem] shadow-2xl relative mb-12 backdrop-blur-md">
          <div className="absolute top-8 right-10 text-yellow-500 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
            ● CERTIFIED ASSET
          </div>
          
          <p className="text-[10px] text-zinc-500 uppercase mb-4 tracking-[0.5em]">FIXED ACQUISITION PRICE</p>
          <div className="text-7xl md:text-9xl font-black mb-4 text-white italic tracking-tighter shadow-yellow-500/20 drop-shadow-2xl">
            $9,900 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span>
          </div>
          
          <div className="flex justify-center gap-3 mb-10">
             <span className="text-[9px] text-green-500 font-bold border border-green-500/30 px-3 py-1 rounded-full uppercase tracking-widest bg-green-500/5">Ownership Verified</span>
             <span className="text-[9px] text-yellow-500 font-bold border border-yellow-500/30 px-3 py-1 rounded-full uppercase tracking-widest bg-yellow-500/5">Instant Transfer</span>
          </div>
          
          <a href="mailto:Sales@80dollars.com" className="block w-full py-6 rounded-2xl bg-yellow-500 text-black font-black text-lg uppercase tracking-[0.3em] transition-all hover:bg-yellow-400 hover:scale-[1.02] shadow-xl">
            MAKE AN OFFER
          </a>
        </div>

        {/* قسم الهدايا وروابط الشراء المباشرة */}
        <div className="bg-zinc-900/40 border border-zinc-800/60 p-8 rounded-[2.5rem] mb-12 text-left relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 flex items-center gap-3">
                <Gift className="text-yellow-500" size={24} /> FREE BONUS INCLUDED
              </h3>
              <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-wider max-w-lg">
                PURCHASE INCLUDES ALL MATCHING SOCIAL MEDIA ACCOUNTS (<span className="text-yellow-500 font-bold italic">YT, FB, IG, X, IN</span>).
              </p>
            </div>
            <div className="bg-black/50 border border-yellow-600/30 px-5 py-2 rounded-full h-fit">
               <span className="text-yellow-500 font-black text-[10px] uppercase tracking-widest">$1,500 GIFT VALUE</span>
            </div>
          </div>

          {/* أزرار المنصات تحت الوصف مباشرة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "PURCHASE ON DAN.COM", url: "https://dan.com/buy-domain/80dollars.com" },
              { label: "PURCHASE ON SEDO.COM", url: "https://sedo.com/search/details/?domain=80dollars.com" },
              { label: "FIND ON AFTERNIC.COM", url: "https://www.afternic.com/domain/80dollars.com" },
              { label: "SECURE VIA ESCROW.COM", url: "https://www.escrow.com" }
            ].map((btn, i) => (
              <a key={i} href={btn.url} target="_blank" className="py-4 px-6 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-between group transition-all hover:border-yellow-600/50">
                <span className="text-white font-black text-[9px] uppercase tracking-[0.2em] italic group-hover:text-yellow-500">{btn.label}</span>
                <ExternalLink size={12} className="text-zinc-600 group-hover:text-yellow-500" />
              </a>
            ))}
          </div>
        </div>

        {/* فوتر السوشيال ميديا */}
        <div className="flex justify-center gap-8 mb-12 opacity-40">
          {[Youtube, Github, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <Icon key={i} size={20} className="hover:text-yellow-500 cursor-pointer transition-colors" />
          ))}
        </div>

        <footer className="text-[8px] text-zinc-800 uppercase tracking-[0.8em] pb-8">
          PRIVATE DOMAIN ASSET • 80DOLLARS.COM
        </footer>
      </div>
    </main>
  );
}
