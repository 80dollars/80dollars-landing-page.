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
      
      {/* 1. تأثير الخلفية الفخم (الغبار الذهبي + اللوجو المائي logo.png) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-20 animate-pulse" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none scale-150">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-6xl object-contain"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        
        {/* ملصق التأسيس 2004 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 border border-yellow-600/30 px-4 py-2 rounded-full bg-yellow-950/20 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.2)]">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </motion.div>

        {/* اسم الدومين */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter italic leading-none uppercase text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-4 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-sm md:text-xl mb-12 tracking-[0.4em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* قائمة المميزات (High Performance, Global Authority, Clean History) */}
        <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto w-full text-left">
          {[
            { Icon: Zap, title: "High Performance", desc: "Former Hub for Tech Services & Currency Solutions." },
            { Icon: Globe, title: "Global Authority", desc: "Indexed in Web Archives since March 2004." },
            { Icon: ShieldCheck, title: "Clean History", desc: "Verified Ownership & Secure Asset Transfer." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i*0.1 }} className="bg-zinc-900/30 border border-zinc-800 backdrop-blur-md p-6 rounded-2xl flex items-start gap-6 hover:border-yellow-600/50 transition-colors group">
              <item.Icon className="text-yellow-500 group-hover:scale-110 transition-transform shrink-0 mt-1" size={28} />
              <div>
                <h4 className="text-base font-bold text-white uppercase italic tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed mt-1 uppercase">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* كرت السعر وتأثير High Demand */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gradient-to-b from-zinc-800/40 to-black border border-yellow-600/20 p-10 rounded-[3rem] shadow-2xl relative mb-12 overflow-hidden group">
          
          <div className="absolute top-5 right-8 text-yellow-500 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest animate-pulse whitespace-nowrap">
            ● High Demand
          </div>
          
          <p className="text-[11px] text-zinc-500 uppercase mb-3 tracking-[0.3em]">Current Valuation</p>
          <div className="text-7xl md:text-8xl font-black mb-3 text-white tracking-tighter italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span></div>
          
          <p className="text-[11px] text-yellow-600 font-black mb-10 uppercase italic whitespace-nowrap tracking-wider">Price is Subject to Increase</p>
          
          {/* زر الشراء الموجه لـ Dan.com */}
          <a href="https://dan.com/buy-domain/80dollars.com" target="_blank" className="block w-full py-6 rounded-2xl bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.25em] transition-all hover:bg-yellow-400 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] active:scale-95">
             Secure Purchase via DAN.COM
          </a>
        </motion.div>

        {/* قسم الهدية FREE BONUS INCLUDED */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-yellow-950/10 border border-yellow-600/30 p-10 rounded-3xl mb-16 backdrop-blur-sm relative overflow-hidden group text-left">
          <div className="absolute -top-6 -left-6 bg-yellow-500 text-black p-5 rounded-full shadow-xl group-hover:rotate-12 transition-transform">
            <Gift size={32} />
          </div>
          <div className="md:flex md:items-center md:justify-between gap-10">
            <div>
              <h3 className="text-3xl font-black text-white uppercase italic mb-3 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">FREE BONUS INCLUDED</h3>
              <p className="text-zinc-400 text-sm max-w-xl leading-relaxed uppercase">Get all official 80dollars social media accounts (<span className="text-yellow-500 font-bold">YT, FB, IG, X, IN</span>) for **FREE** with your purchase. Instant brand authority included.</p>
            </div>
            <div className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest bg-black/80 px-6 py-2 rounded-full border border-zinc-800 whitespace-nowrap mt-4 md:mt-0">
              $1,500 Gift Value
            </div>
          </div>
        </motion.div>

        {/* الروابط الاجتماعية (بما في ذلك X الجديد) */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-20 pt-10 border-t border-zinc-900/60 w-full max-w-3xl mx-auto">
          {[
            { Icon: Youtube, url: "https://youtube.com/@80dollars" },
            { Icon: Github, url: "https://github.com/80dollars" },
            { Icon: Facebook, url: "https://facebook.com/80dollars_com" },
            { Icon: Instagram, url: "https://instagram.com/80dollars_com" },
            { name: "X", url: "https://x.com/80dollars_com" }, 
            { Icon: Linkedin, url: "https://linkedin.com/in/80dollars_com" }
          ].map((link, i) => (
            <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.15 }} className="text-zinc-500 hover:text-yellow-500 transition-colors">
              {link.name ? (
                <span className="font-bold text-xl tracking-tighter uppercase">{link.name}</span>
              ) : (
                <link.Icon size={28} />
              )}
            </motion.a>
          ))}
        </div>

        {/* شركات الضمان (مع روابط التوجه) */}
        <div className="flex flex-wrap justify-center gap-12 mb-16 grayscale opacity-20 hover:opacity-100 transition-all italic font-black text-xl tracking-tighter uppercase">
           <a href="https://www.escrow.com" target="_blank" className="hover:text-blue-500 transition-colors">
              ESCROW<span className="text-blue-500">.COM</span>
           </a>
           <a href="https://dan.com/buy-domain/80dollars.com" target="_blank" className="hover:text-orange-500 transition-colors">
              DAN<span className="text-orange-500">.COM</span>
           </a>
           <a href="https://www.afternic.com/domain/80dollars.com" target="_blank" className="hover:text-green-500 transition-colors">
              AFTER<span className="text-green-500">NIC</span>.COM
           </a>
        </div>

        <footer className="text-[9px] text-zinc-800 uppercase tracking-[0.5em] pb-10">
          Private Domain Asset • Certified Clean History
        </footer>
      </div>
    </main>
  );
}
