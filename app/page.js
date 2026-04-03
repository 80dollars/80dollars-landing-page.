"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Linkedin, Gift, History, Zap, Globe, ShieldCheck } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden font-sans">
      
      {/* الخلفية المستوحاة من الصورة الأصلية */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none scale-150">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-7xl object-contain"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        
        {/* شارة التأسيس - كما في الصورة 1000085815.png */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 inline-flex items-center gap-2 border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </motion.div>

        {/* اسم الدومين - كبير ومائل كما في الصورة */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-6">
          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter italic leading-none uppercase text-white">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-6">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-sm md:text-xl mb-16 tracking-[0.4em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* الخانات الثلاثة - العودة للوصف الأصلي كما في الصورة 1000085815.png */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl mx-auto w-full text-left">
          {[
            { Icon: Zap, title: "HIGH PERFORMANCE", desc: "FORMER HUB FOR TECH SERVICES & CURRENCY SOLUTIONS." },
            { Icon: Globe, title: "GLOBAL AUTHORITY", desc: "INDEXED IN WEB ARCHIVES SINCE MARCH 2004." },
            { Icon: ShieldCheck, title: "CLEAN HISTORY", desc: "VERIFIED OWNERSHIP & SECURE ASSET TRANSFER." }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md p-6 rounded-2xl flex items-start gap-6 border-l-yellow-600/50">
              <item.Icon className="text-yellow-500 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-sm font-bold text-white uppercase italic tracking-wider">{item.title}</h4>
                <p className="text-[10px] text-zinc-500 uppercase mt-1 tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* كرت السعر - العودة لشعار CERTIFIED ASSET ومكان HIGH DEMAND */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/20 border border-zinc-800/40 p-10 rounded-[2.5rem] shadow-2xl relative mb-12 backdrop-blur-sm overflow-hidden group">
          <div className="absolute top-5 right-8 text-yellow-500 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest">
            ● CERTIFIED ASSET
          </div>
          <p className="text-[9px] text-zinc-500 uppercase mb-2 tracking-[0.3em]">CURRENT VALUATION</p>
          <div className="text-7xl md:text-[7.5rem] font-black mb-2 text-white italic tracking-tighter drop-shadow-2xl">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span></div>
          <p className="text-[10px] text-yellow-600 font-black mb-10 uppercase italic tracking-[0.2em]">PRICE IS SUBJECT TO INCREASE</p>
          
          <a href="mailto:Sales@80dollars.com" className="block w-full py-6 rounded-2xl bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.25em] transition-all hover:bg-yellow-400 hover:scale-[1.02] shadow-[0_15px_30px_rgba(234,179,8,0.2)] active:scale-95">
            MAKE AN OFFER
          </a>
        </motion.div>

        {/* خانة الهدية - العودة للتصميم الأصلي بالظبط كما في الصورة 1000085807.jpg */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/20 border border-zinc-800/40 p-8 rounded-[2rem] mb-16 backdrop-blur-sm relative text-left group overflow-hidden">
          <div className="absolute -top-4 -left-4 bg-yellow-500 text-black p-4 rounded-2xl shadow-xl">
            <Gift size={24} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-2">
            <div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">FREE BONUS INCLUDED</h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-wider">
                PURCHASE INCLUDES ALL OFFICIAL MATCHING SOCIAL MEDIA ACCOUNTS (<span className="text-yellow-500 font-bold">YT, FB, IG, X, IN</span>) FOR **FREE** WITH YOUR PURCHASE. INSTANT BRAND AUTHORITY INCLUDED.
              </p>
            </div>
            {/* الكبسولة السوداء كما في الصورة */}
            <div className="bg-black border border-zinc-800 px-5 py-2 rounded-full whitespace-nowrap">
               <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">$1,500 GIFT VALUE</span>
            </div>
          </div>
        </motion.div>

        {/* أيقونات السوشيال ميديا - العودة للشكل الأصلي 1000085792.png */}
        <div className="flex flex-wrap justify-center gap-10 mb-20 opacity-40 hover:opacity-100 transition-opacity">
          {[Youtube, Github, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <motion.a key={i} href="#" whileHover={{ scale: 1.2, color: "#eab308" }} className="text-white transition-all">
              <Icon size={28} />
            </motion.a>
          ))}
          <motion.a href="#" whileHover={{ scale: 1.2, color: "#eab308" }} className="text-white font-bold text-xl uppercase tracking-tighter">X</motion.a>
        </div>

        {/* أزرار المنصات - "حية" وتتحرك وتغري بالضغط عليها كما طلبت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { label: "PURCHASE ON DAN.COM", url: "https://dan.com/buy-domain/80dollars.com", color: "hover:border-orange-500" },
            { label: "PURCHASE ON SEDO.COM", url: "https://sedo.com/search/details/?domain=80dollars.com", color: "hover:border-blue-400" },
            { label: "FIND ON AFTERNIC.COM", url: "https://www.afternic.com/domain/80dollars.com", color: "hover:border-green-500" },
            { label: "SECURE VIA ESCROW.COM", url: "https://www.escrow.com", color: "hover:border-blue-600" }
          ].map((btn, i) => (
            <motion.a 
              key={i} 
              href={btn.url} 
              target="_blank" 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`py-5 px-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-[0.25em] transition-all italic hover:bg-zinc-800/60 ${btn.color} hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] flex items-center justify-center gap-2 group`}
            >
              <span className="group-hover:translate-x-1 transition-transform">{btn.label}</span>
            </motion.a>
          ))}
        </div>

        <footer className="text-[9px] text-zinc-800 uppercase tracking-[0.6em] pb-10">
          PRIVATE DOMAIN ASSET • CERTIFIED CLEAN HISTORY • 80DOLLARS.COM
        </footer>
      </div>
    </main>
  );
}
