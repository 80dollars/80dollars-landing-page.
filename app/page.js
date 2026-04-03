"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Linkedin, Gift, History, Zap, Globe, ShieldCheck, ExternalLink, Mail } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  // روابط السوشيال ميديا الحقيقية للدومين
  const socialLinks = [
    { Icon: Youtube, name: "Youtube", url: "https://youtube.com/@80dollars" },
    { Icon: Facebook, name: "Facebook", url: "https://facebook.com/80dollars_com" },
    { Icon: Instagram, name: "Instagram", url: "https://instagram.com/80dollars_com" },
    { Icon: ({size, className}) => <span className={className} style={{fontSize: `${size}px`}}>X</span>, name: "X", url: "https://x.com/80dollars_com" }, // صفحة X المضافة
    { Icon: Linkedin, name: "Linkedin", url: "https://linkedin.com/in/80dollars_com" }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 text-center relative overflow-x-hidden font-sans">
      
      {/* 1. الخلفية الحية: الغبار الذهبي (واضح ويتحرك) واللوجو المائي */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-80"></div>
        {/* تأثير الغبار الذهبي المتحرك (Stardust) */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0Opacity-40" 
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none scale-150">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-7xl object-contain"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* شارة التأسيس 2004 */}
        <div className="mb-8 inline-flex items-center gap-2 border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </div>

        {/* اسم الدومين - كبير، مائل، وإصلاح الظهور في الحاسوب والهاتف */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter italic leading-none uppercase text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-6 drop-shadow-[0_0_40px_rgba(234,179,8,0.5)]">.COM</span>
          </h1>
          {/* وصف الدومين - العودة لمكانه تحت الصورة */}
          <p className="text-zinc-500 text-xs md:text-2xl mt-4 tracking-[0.4em] uppercase font-light">LEGACY PREMIUM DOMAIN ASSET</p>
        </div>

        {/* المميزات الأصلية الثلاثة */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl mx-auto w-full text-left">
          {[
            { Icon: Zap, title: "HIGH PERFORMANCE", desc: "FORMER HUB FOR TECH SERVICES & CURRENCY SOLUTIONS." },
            { Icon: Globe, title: "GLOBAL AUTHORITY", desc: "INDEXED IN WEB ARCHIVES SINCE MARCH 2004." },
            { Icon: ShieldCheck, title: "CLEAN HISTORY", desc: "VERIFIED OWNERSHIP & SECURE ASSET TRANSFER." }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ x: 10 }} className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl flex items-start gap-6 border-l-4 border-l-yellow-600/50 shadow-xl">
              <item.Icon className="text-yellow-500 shrink-0 mt-1" size={26} />
              <div>
                <h4 className="text-base font-bold text-white uppercase italic tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 uppercase mt-1 tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* كرت السعر الجديد والسينيالات */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/30 border border-zinc-800/50 p-12 rounded-[3.5rem] shadow-2xl relative mb-16 backdrop-blur-md overflow-hidden group">
          
          {/* 1. السينيال: + HIGH DEMAND (ينبض ويتحرك) */}
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6], x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-10 text-yellow-500 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em]"
          >
            ● Certified Asset <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="text-[9px] text-zinc-500">+ High Demand</motion.span>
          </motion.div>
          
          <p className="text-[11px] text-zinc-500 uppercase mb-4 tracking-[0.4em]">Current Valuation</p>
          
          {/* الرقم الجديد: $8,800 */}
          <div className="text-8xl md:text-[9.5rem] font-black mb-4 text-white italic tracking-tighter drop-shadow-2xl">$8,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span></div>
          
          {/* 2. السينيال: PRICE IS SUBJECT TO INCREASE (يتحرك ويومض) */}
          <motion.p 
            animate={{ opacity: [0.6, 1, 0.6], color: ["#ca8a04", "#facc15", "#ca8a04"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[12px] font-black mb-12 uppercase italic tracking-[0.3em]"
          >
            PRICE IS SUBJECT TO INCREASE
          </motion.p>
          
          <a href="mailto:Sales@80dollars.com?subject=Offer for 80dollars.com" className="block w-full py-7 rounded-3xl bg-yellow-500 text-black font-black text-base uppercase tracking-[0.3em] transition-all hover:bg-yellow-400 hover:scale-[1.03] shadow-[0_20px_40px_rgba(234,179,8,0.3)] active:scale-95">
            MAKE AN OFFER
          </a>
        </motion.div>

        {/* خانة الهدية (الشكل القديم والكتابة الأصلية) مع الروابط داخلها */}
        <motion.div whileHover={{ scale: 1.01 }} className="bg-zinc-900/40 border border-zinc-800/60 p-10 rounded-[2.5rem] mb-16 Backdrop-blur-xl relative text-left group overflow-hidden shadow-2xl border-l-8 border-l-yellow-500">
          <div className="absolute -top-5 -left-5 bg-yellow-500 text-black p-5 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:rotate-12 transition-transform">
            <Gift size={30} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-4 mb-10">
            <div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-3">FREE BONUS INCLUDED</h3>
              <p className="text-zinc-500 text-[12px] leading-relaxed uppercase tracking-wider max-w-xl">
                Purchase includes all official matching social media accounts (<span className="text-yellow-500 font-bold">YT, FB, IG, X, IN</span>) for **FREE**. Instant brand authority included.
              </p>
            </div>
            <div className="bg-black border border-yellow-600/30 px-8 py-3 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.1)]">
               <span className="text-yellow-500 font-black text-[12px] uppercase tracking-[0.2em]">$1,500 Gift Value</span>
            </div>
          </div>

          {/* روابط السوشيال ميديا الحقيقية داخل الخانة */}
          <div className="flex flex-wrap justify-center gap-10 mt-6 border-t border-zinc-800/50 pt-10 px-6">
            {socialLinks.map((link, i) => (
              <motion.a key={i} href={link.url} target="_blank" whileHover={{ scale: 1.2, color: "#eab308" }} className="text-zinc-600 hover:text-yellow-500 transition-all">
                <link.Icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 4 خنات روابط الشراء - تحت بعض، ويشعون بضوء */}
        <div className="flex flex-col gap-6 mb-24 max-w-2xl mx-auto w-full text-left">
          {[
            { label: "PURCHASE ON DAN.COM", url: "https://dan.com/buy-domain/80dollars.com", glow: "rgba(249,115,22,0.4)" },
            { label: "PURCHASE ON SEDO.COM", url: "https://sedo.com/search/details/?domain=80dollars.com", glow: "rgba(59,130,246,0.4)" },
            { label: "FIND ON AFTERNIC.COM", url: "https://www.afternic.com/domain/80dollars.com", glow: "rgba(34,197,94,0.4)" },
            { label: "SECURE VIA ESCROW.COM", url: "https://www.escrow.com", glow: "rgba(255,255,255,0.2)" }
          ].map((btn, i) => (
            <motion.a 
              key={i} 
              href={btn.url} 
              target="_blank" 
              whileHover={{ y: -5, scale: 1.03 }}
              animate={{ boxShadow: [`0 0 10px ${btn.glow}`, `0 0 25px ${btn.glow}`, `0 0 10px ${btn.glow}`] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="group py-6 px-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md text-white font-black text-[12px] uppercase tracking-[0.3em] Transition-all flex items-center justify-between gap-3 relative overflow-hidden"
            >
              <span>{btn.label}</span>
              <ExternalLink size={20} className="text-zinc-500 group-hover:text-yellow-500 transition-colors shrink-0" />
              {/* خط التوهج السفلي */}
              <div className="absolute bottom-0 left-0 h-1 bg-yellow-500 w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.a>
          ))}
        </div>

        <footer className="text-[10px] text-zinc-800 uppercase tracking-[0.8em] pb-10 font-bold">
          PRIVATE DOMAIN ASSET • 80DOLLARS.COM
        </footer>
      </div>
    </main>
  );
}
