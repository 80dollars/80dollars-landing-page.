"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Github, Facebook, Instagram, Twitter, Linkedin, ShieldCheck, Zap, History, Globe } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden">
      
      {/* 1. تأثير الغبار الذهبي واللوجو الخلفي */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        {/* الغبار الذهبي المتحرك */}
        <div className="absolute inset-0 opacity-30 animate-pulse" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        {/* اللوجو الكبير في الخلفية (Watermark) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <h1 className="text-[20vw] font-black italic">80$</h1>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        
        {/* Badge القوة التاريخية */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 border border-yellow-600/30 px-4 py-1.5 rounded-full bg-yellow-950/20 backdrop-blur-md">
          <History size={14} className="text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Established 2004 • 20+ Years Authority</span>
        </motion.div>

        {/* العنوان الرئيسي الفخم */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-4">
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter italic leading-none uppercase">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">80Dollars</span>
            <span className="text-yellow-500 block sm:inline ml-0 sm:ml-4 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-sm md:text-lg mb-12 tracking-[0.3em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* كرت السعر ونقاط القوة (احترافية عالية) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          
          {/* نقاط القوة - مستوحاة من تاريخ الموقع */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-3">
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex items-start gap-4 text-left backdrop-blur-md">
              <Zap className="text-yellow-500 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-white uppercase italic">High Performance</h4>
                <p className="text-[10px] text-zinc-500">Former Hub for Tech Services & Currency Solutions.</p>
              </div>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex items-start gap-4 text-left backdrop-blur-md">
              <Globe className="text-yellow-500 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-white uppercase italic">Global Authority</h4>
                <p className="text-[10px] text-zinc-500">Indexed in Web Archives since March 2004.</p>
              </div>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex items-start gap-4 text-left backdrop-blur-md">
              <ShieldCheck className="text-yellow-500 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-white uppercase italic">Clean History</h4>
                <p className="text-[10px] text-zinc-500">Verified Ownership & Secure Asset Transfer.</p>
              </div>
            </div>
          </motion.div>

          {/* بطاقة السعر */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-3 bg-gradient-to-b from-zinc-800/50 to-black border border-yellow-600/20 p-8 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute top-4 right-6 text-yellow-500 animate-pulse flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest">
              ● High Demand
            </div>
            <p className="text-[10px] text-zinc-500 uppercase mb-2 tracking-[0.2em]">Current Valuation</p>
            <div className="text-6xl font-black mb-2 text-white">$4,800 <span className="text-sm font-normal text-zinc-500 uppercase">USD</span></div>
            <p className="text-[10px] text-yellow-600 font-bold mb-8 uppercase italic">Price is Subject to Increase</p>
            
            <a href="mailto:Sales@80dollars.com" className="group block w-full py-5 rounded-2xl bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]">
              Make An Offer
            </a>
          </motion.div>
        </div>

        {/* قسم الضمان (Escrow) */}
        <div className="flex justify-center gap-8 mb-16 grayscale opacity-30 hover:opacity-100 transition-all duration-700">
           <span className="font-black text-xl italic tracking-tighter">ESCROW<span className="text-blue-500">.COM</span></span>
           <span className="font-black text-xl italic tracking-tighter">DAN<span className="text-orange-500">.COM</span></span>
        </div>

        {/* الروابط الاجتماعية بلوقو كل موقع */}
        <div className="flex flex-wrap justify-center gap-6 pt-10 border-t border-zinc-900">
          {[
            { Icon: Youtube, url: "https://youtube.com/@80dollars" },
            { Icon: Github, url: "https://github.com/80dollars" },
            { Icon: Facebook, url: "https://facebook.com/80dollars_com" },
            { Icon: Instagram, url: "https://instagram.com/80dollars_com" },
            { Icon: Twitter, url: "https://x.com/80dollars_com" },
            { Icon: Linkedin, url: "https://linkedin.com/in/80dollars_com" }
          ].map(({ Icon, url }, i) => (
            <motion.a key={i} href={url} target="_blank" whileHover={{ y: -5, color: "#eab308" }} className="text-zinc-500 transition-colors">
              <Icon size={24} />
            </motion.a>
          ))}
        </div>

      </div>
    </main>
  );
}
