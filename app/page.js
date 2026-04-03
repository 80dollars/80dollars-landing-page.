"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // تأكد من تشغيل: npm install framer-motion

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 text-center relative overflow-hidden">
      
      {/* 1. تأثير الخلفية الفخم (غبار ذهبي + هالة ضوئية) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')", animation: "pulse 4s infinite" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* Badge التأسيس - هيبة الـ 20 سنة */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-block border border-yellow-600/30 px-5 py-2 rounded-full bg-yellow-950/20 backdrop-blur-sm"
        >
          <p className="text-yellow-500 font-bold tracking-[0.3em] text-[10px] uppercase">
            Aged Asset • Established 2004
          </p>
        </motion.div>

        {/* اسم الدومين - تم تصليحه للهاتف ليظهر كاملاً */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter italic leading-none">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] uppercase">80Dollars</span>
            <span className="text-yellow-500 block mt-2 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">.COM</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-zinc-400 text-xs sm:text-sm mb-12 tracking-[0.2em] uppercase font-light"
        >
          This Premium Asset is <span className="text-white font-bold border-b-2 border-yellow-500 pb-1">For Sale</span>
        </motion.p>

        {/* بطاقة السعر الفخمة (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl p-8 rounded-[2.5rem] w-full shadow-2xl relative"
        >
          {/* عداد FOMO - حركة سريعة لجذب العين */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce whitespace-nowrap">
            🔥 14 SERIOUS OFFERS RECEIVED
          </div>

          <p className="text-[10px] text-zinc-500 uppercase mb-3 tracking-[0.2em] font-bold">Asking Price</p>
          <div className="text-5xl font-black mb-8 text-white">$5,000 <span className="text-sm font-normal text-zinc-500 uppercase">Usd</span></div>
          
          {/* لماذا هذا الدومين؟ (النقاط التي ترفع السعر) */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-black/60 p-4 rounded-2xl border border-zinc-800/50">
              <p className="text-[9px] text-zinc-500 uppercase mb-1">Domain Age</p>
              <p className="text-sm font-bold text-yellow-500 italic">20+ Years</p>
            </div>
            <div className="bg-black/60 p-4 rounded-2xl border border-zinc-800/50">
              <p className="text-[9px] text-zinc-500 uppercase mb-1">TLD Type</p>
              <p className="text-sm font-bold text-yellow-500 italic">Premium .COM</p>
            </div>
          </div>

          <a 
            href="mailto:Sales@80dollars.com?subject=Serious Offer for 80dollars.com"
            className="block w-full py-5 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg shadow-yellow-600/30"
          >
            Make an Offer
          </a>
        </motion.div>

        {/* ضمان الثقة (Escrow) - ضروري جداً */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-12 w-full flex flex-col items-center"
        >
          <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-4">Secure Transaction Partners</p>
          <div className="flex gap-10 items-center opacity-30 grayscale contrast-125">
             <span className="font-black text-lg tracking-tighter italic">ESCROW<span className="text-blue-500">.COM</span></span>
             <span className="font-black text-lg tracking-tighter italic">DAN<span className="text-orange-500">.COM</span></span>
          </div>
        </motion.div>

        {/* روابط التواصل الاجتماعي - تم توضيحها للهاتف */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-16 pt-8 border-t border-zinc-900 w-full">
          {[
            {name: "Youtube", url: "https://youtube.com/@80dollars"},
            {name: "Github", url: "https://github.com/80dollars"},
            {name: "Facebook", url: "https://facebook.com/80dollars_com"},
            {name: "Instagram", url: "https://instagram.com/80dollars_com"},
            {name: "X", url: "https://x.com/80dollars_com"},
            {name: "Linkedin", url: "https://linkedin.com/in/80dollars_com"}
          ].map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" 
               className="text-[10px] font-bold text-zinc-500 hover:text-yellow-500 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>

        <footer className="mt-12 text-[8px] text-zinc-800 uppercase tracking-[0.5em] pb-10">
          Private Domain Asset • Certified
        </footer>
      </div>
    </main>
  );
}
