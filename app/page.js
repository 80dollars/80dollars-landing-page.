"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // لازم تدير npm install framer-motion

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center relative overflow-x-hidden">
      
      {/* الخلفية: غبار ذهبي متحرك + Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_70%)] opacity-60"></div>
        <div className="absolute inset-0 opacity-20 animate-pulse" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        
        {/* Badge: التأسيس مع أنيميشن صعود */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="mb-6 border border-yellow-600/30 px-5 py-1.5 rounded-full bg-yellow-950/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
        >
          <span className="text-yellow-500 font-bold tracking-[0.3em] text-[10px] uppercase">
            Aged Asset • Established 2004
          </span>
        </motion.div>

        {/* العنوان: صلحنا مشكلة الحجم للهاتف + تأثير Glow */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 tracking-tighter italic"
        >
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">80DOLLARS</span>
          <span className="text-yellow-500 block sm:inline ml-0 sm:ml-2">.COM</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-zinc-400 text-sm md:text-lg mb-10 tracking-[0.2em] uppercase font-light"
        >
          Premium Digital Real Estate is <span className="text-white font-bold border-b border-yellow-500">For Sale</span>
        </motion.p>

        {/* بطاقة السعر: Glassmorphism Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="bg-zinc-900/40 border border-zinc-800 backdrop-blur-md p-8 rounded-3xl w-full max-w-md shadow-2xl relative"
        >
          {/* عداد الاهتمام FOMO */}
          <div className="absolute -top-3 right-6 bg-yellow-500 text-black text-[9px] font-black px-3 py-1 rounded-full animate-bounce">
            14 INQUIRIES RECEIVED
          </div>

          <div className="text-xs text-zinc-500 uppercase mb-2 font-bold tracking-widest">Asking Price</div>
          <div className="text-5xl font-black mb-8">$5,000 <span className="text-sm font-normal text-zinc-500">USD</span></div>
          
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-black/60 p-4 rounded-2xl border border-zinc-800">
              <p className="text-[9px] text-zinc-500 uppercase mb-1">Domain Age</p>
              <p className="text-sm font-bold">20+ Years</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-zinc-800">
              <p className="text-[9px] text-zinc-500 uppercase mb-1">Authority</p>
              <p className="text-sm font-bold text-yellow-500">High Trust</p>
            </div>
          </div>

          <a href="mailto:Sales@80dollars.com" className="block w-full py-4 rounded-xl bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.2em] hover:bg-yellow-400 transition-all active:scale-95 shadow-lg shadow-yellow-500/20">
            Make an Offer
          </a>
        </motion.div>

        {/* قسم الضمان (Escrow) - مهم جداً للهيبة */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Secure Transfer via Trusted Partners</p>
          <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* هنا تقدر تحط لوغو Escrow.com و Dan.com */}
             <span className="font-bold text-xl tracking-tighter">ESCROW<span className="text-blue-500">.COM</span></span>
             <span className="font-bold text-xl tracking-tighter">DAN<span className="text-orange-500">.COM</span></span>
          </div>
        </motion.div>

        {/* الروابط الاجتماعية المصلحة */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-zinc-800 w-full">
          {["Youtube", "Github", "Facebook", "Instagram", "X", "Linkedin"].map((link) => (
            <a key={link} href={`https://${link.toLowerCase()}.com/${link === "Youtube" || link === "Github" ? "@80dollars" : "80dollars_com"}`} 
               className="text-[10px] font-bold text-zinc-500 hover:text-yellow-500 transition-colors uppercase tracking-widest">
              {link}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
