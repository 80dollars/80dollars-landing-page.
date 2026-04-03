"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // هادا هو سر "الهيبة" الحركية

export default function Home() {
  const [inquiries, setInquiries] = useState(14); // عداد الزوار الوهمي

  useEffect(() => {
    // زيادة وهمية للعداد لإعطاء انطباع بالنشاط
    const timer = setInterval(() => {
      if (Math.random() > 0.7) {
        setInquiries(prev => prev + 1);
      }
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  // أنيميشن الفتح (Fade-in-up)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* 1. الخلفية المتحركة (خيوط ضوء وغبار ذهبي) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/15 via-black to-black"></div>
        {/* تأثير الغبار الذهبي المتحرك ببطء */}
        <div className="absolute inset-0 opacity-20 bg-[url('/gold-dust.png')] bg-cover animate-pulse-slow"></div>
        {/* خيوط ضوء عشوائية */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-yellow-950/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        
        {/* Badge: تاريخ التأسيس مع حركة خفيفة */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-10 inline-block border border-yellow-600/40 px-6 py-2 rounded-full bg-yellow-950/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">
            Aged Asset • Established 2004
          </span>
        </motion.div>

        {/* 2. العنوان الرئيسي مع أنيميشن (Fade-in-up) و "Glow" */}
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-6xl md:text-9xl font-black mb-12 tracking-tighter italic text-white drop-shadow-[0_0_35px_rgba(234,179,8,0.5)] bg-gradient-to-r from-white via-yellow-200 to-yellow-600 bg-clip-text text-transparent"
        >
          80DOLLARS<span className="text-yellow-500">.COM</span>
        </motion.h1>

        {/* بطاقة السعر الاحترافية (Glassmorphism + FOMO + Why) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-zinc-900/30 border border-zinc-800 backdrop-blur-3xl p-10 rounded-3xl mb-12 shadow-2xl relative overflow-hidden"
        >
          {/* تأثير اللمعان خلف البطاقة */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-800/20 rounded-full blur-3xl opacity-50"></div>
          
          {/* 3. عداد الاهتمام (FOMO) */}
          <div className="absolute top-4 right-4 text-[10px] text-zinc-600 flex items-center gap-1.5 uppercase font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </span>
            <span>Recently viewed by <span className="text-yellow-500 font-bold">{inquiries}</span> potential buyers</span>
          </div>

          <div className="text-sm text-zinc-500 uppercase tracking-widest mb-4 font-semibold">Buy It Now Price</div>
          <div className="text-6xl md:text-7xl font-black mb-10 text-white tracking-tight">$5,000 <span className="text-2xl text-zinc-500 font-normal">USD</span></div>
          
          {/* 4. قسم "لماذا هذا الدومين؟" (3 نقاط قوة) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 text-left">
            <div className="bg-black/50 p-5 rounded-2xl border border-zinc-800 hover:border-yellow-700/50 transition-colors">
              <p className="text-xs text-zinc-500 uppercase mb-1">Aged & Trusted</p>
              <p className="text-xl font-bold text-yellow-500">20+ Years</p>
            </div>
            <div className="bg-black/50 p-5 rounded-2xl border border-zinc-800 hover:border-yellow-700/50 transition-colors">
              <p className="text-xs text-zinc-500 uppercase mb-1">Memorability</p>
              <p className="text-xl font-bold text-yellow-500">Brandable</p>
            </div>
            <div className="bg-black/50 p-5 rounded-2xl border border-zinc-800 hover:border-yellow-700/50 transition-colors">
              <p className="text-xs text-zinc-500 uppercase mb-1">Extension</p>
              <p className="text-xl font-bold text-yellow-500">.COM TLD</p>
            </div>
          </div>

          <a 
            href="mailto:Sales@80dollars.com?subject=Serious Offer for 80dollars.com"
            className="block w-full py-6 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black text-lg uppercase tracking-[0.25em] hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-xl shadow-yellow-600/30 active:scale-95 transform hover:-translate-y-1"
          >
            Make an Offer
          </a>
        </div>

        {/* 5. بطاقة الضمان وشعارات Escrow (لزيادة الثقة) */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-zinc-950/50 border border-zinc-900 p-8 rounded-3xl mb-16 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-sm">
            <h4 className="text-xl font-bold mb-2">Secure Asset Transfer</h4>
            <p className="text-zinc-500 text-sm">Transfer completes within 24 hours of payment via secure escrow services.</p>
          </div>
          <div className="flex items-center gap-6 opacity-80">
            <img src="/escrow.png" alt="Escrow.com" className="h-10 opacity-70 hover:opacity-100 transition-opacity"/>
            <img src="/dan.png" alt="Dan.com" className="h-10 opacity-70 hover:opacity-100 transition-opacity"/>
          </div>
        </motion.div>

        {/* 6. إصلاح الروابط التحتانية (توضيح X و LinkedIn للهاتف) */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-12 border-t border-zinc-800/80 mb-20">
          <a href="https://youtube.com/@80dollars" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">YouTube</a>
          <a href="https://github.com/80dollars" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">GitHub</a>
          <a href="https://facebook.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Facebook</a>
          <a href="https://instagram.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Instagram</a>
          {/* X و LinkedIn بوضوح أكبر */}
          <a href="https://x.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-1.5"><img src="/x-logo.png" alt="X" className="w-4 h-4 opacity-50"/> X</a>
          <a href="https://linkedin.com/in/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-1.5"><img src="/linkedin-logo.png" alt="LinkedIn" className="w-4 h-4 opacity-50"/> LinkedIn</a>
        </div>

        <footer className="mb-8 text-[10px] text-zinc-800 uppercase tracking-[0.4em]">
          Certified Premium Domain | All Rights Reserved
        </footer>
      </div>
    </main>
  );
}
