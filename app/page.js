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
      
      {/* 1. الخلفية: الغبار الذهبي + لوغو logo.png كـ Watermark */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#221a00_0%,#000_80%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-20 animate-pulse" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none scale-125">
          <img src="/logo.png" alt="Background Logo" className="w-full max-w-7xl object-contain"/>
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
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter italic leading-none uppercase text-white">
            80DOLLARS<span className="text-yellow-500 block sm:inline ml-0 sm:ml-4">.COM</span>
          </h1>
        </motion.div>

        <p className="text-zinc-500 text-sm md:text-lg mb-12 tracking-[0.3em] uppercase font-light">Legacy Premium Domain Asset</p>

        {/* خانات المميزات (High Performance, Global Authority, Clean History) */}
        <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto w-full">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-start gap-5 text-left backdrop-blur-md hover:border-yellow-600/40 transition-all">
            <Zap className="text-yellow-500 shrink-0" size={24} />
            <div>
              <h4 className="text-sm font-bold text-white uppercase italic tracking-wider">High Performance</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">Former Hub for Tech Services & Currency Solutions.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-start gap-5 text-left backdrop-blur-md hover:border-yellow-600/40 transition-all">
            <Globe className="text-yellow-500 shrink-0" size={24} />
            <div>
              <h4 className="text-sm font-bold text-white uppercase italic tracking-wider">Global Authority</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">Indexed in Web Archives since March 2004.</p>
            </div>
          </motion.div>

          {/* الخانة التي تمت إعادتها: Clean History */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-start gap-5 text-left backdrop-blur-md hover:border-yellow-600/40 transition-all">
            <ShieldCheck className="text-yellow-500 shrink-0" size={24} />
