"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Twitter, Linkedin, Gift, History, Zap, Globe, ShieldCheck } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden">
      
      {/* 1. الخلفية: logo.png كـ Watermark */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-20 animate-pulse" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none scale-150">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-6xl object-contain"/>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        
        {/* التأسيس 2004 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 border border-yellow-600/30 px-4 py-1.5 rounded-full bg-yellow-950/20 backdrop-blur-md">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </motion.div>

        {/* اسم الدومين */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-4">
          <h1 className="text-5xl sm:text-8xl font-black tracking-tighter italic leading-none uppercase text-white">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-4">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-xs sm:text-lg mb-12 tracking-[0.3em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* قائمة المميزات (شاملة Clean History) */}
        <div className="flex flex-col gap-3 mb-12 max-w-xl mx-auto w-full">
          <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 text-left backdrop-blur-md">
            <Zap className="text-yellow-500 shrink-0" size={20} />
            <div>
              <h4 className="text-xs font-bold text-white uppercase italic tracking-wider">High Performance</h4>
              <p className="text-[10px] text-zinc-500 uppercase">Former Hub for Tech Services & Currency Solutions.</p>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 text-left backdrop-blur-md">
            <Globe className="text-yellow-500 shrink-0" size={20} />
            <div>
              <h4 className="text-xs font-bold text-white uppercase italic tracking-wider">Global Authority</h4>
              <p className="text-[10px] text-zinc-500 uppercase">Indexed in Web Archives since March 2004.</p>
            </div>
          </div>

          {/* خانة Clean History المسترجعة */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 text-left backdrop-blur-md">
            <ShieldCheck className="text-yellow-500 shrink-0" size={20} />
            <div>
              <h4 className="text-xs font-bold text-white uppercase italic tracking-wider">Clean History</h4>
              <p className="text-[10px] text-zinc-500 uppercase">Verified Ownership & Secure Asset Transfer.</p>
            </div>
          </div>
        </div>

        {/* كرت السعر والروابط */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-b from-zinc-800/40 to-black border border-yellow-600/20 p-8 rounded-[2.5rem] shadow-2xl relative mb-10">
          <div className="absolute top-4 right-6 text-yellow-500 flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest">
            ● Certified Asset
          </div>
          <p className="text-[10px] text-zinc-500 uppercase mb-2 tracking-[0.3em]">Current Valuation</p>
          <div className="text-6xl font-black mb-2 text-white tracking-tighter italic">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase not-italic">USD</span></div>
          
          {/* رابط الإيميل لتقديم عرض */}
          <a href="mailto:Sales@80dollars.com?subject=Serious Offer for 80dollars.com Bundle" className="mt-8 block w-full py-5 rounded-2xl bg-yellow-500 text-black font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-yellow-400">
            Make An Offer
          </a>
        </motion.div>

        {/* قسم الهدية */}
        <div className="bg-yellow-950/10 border border-yellow-600/20 p-6 rounded-3xl mb-12 backdrop-blur-sm flex items-center gap-6 text-left">
          <Gift size={24} className="text-yellow-500 shrink-0" />
          <p className="text-zinc-400 text-[10px] uppercase tracking-wider leading-relaxed">
            Purchase includes all official matching social media accounts (YT, FB, X, IG) as a **Free Gift**.
          </p>
        </div>

        {/* روابط التواصل الاجتماعي الفعلية */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a href="https://youtube.com/@80dollars" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-yellow-500 transition-colors">
            <Youtube size={24} />
          </a>
          <a href="https://github.com/80dollars" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-yellow-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://facebook.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-yellow-500 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-yellow-500 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://x.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-yellow-500 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com/in/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-yellow-500 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-12 grayscale opacity-20 italic font-black text-lg tracking-tighter uppercase">
           <span>ESCROW.COM</span>
           <span>DAN.COM</span>
        </div>

        <footer className="text-[8px] text-zinc-800 uppercase tracking-[0.4em] pb-10">
          Private Asset Transfer • 80dollars.com
        </footer>
      </div>
    </main>
  );
}
