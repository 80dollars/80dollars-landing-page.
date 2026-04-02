"use client";
import React from 'react';
import { Youtube, Github, Facebook, Instagram, Twitter, Linkedin, Mail, ShieldCheck, History, Globe } from 'lucide-react';

export default function DomainSalePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-4 py-16 relative overflow-hidden">
      
      {/* Golden Logo Watermark - اللوجو الذهبي في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none w-full max-w-[500px]">
        <img 
          src="https://raw.githubusercontent.com/80dollars/80dollars-landing-page/main/public/logo.png" 
          alt="Golden Logo Background"
          className="w-full h-auto grayscale-[0.5]"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-yellow-500 font-bold tracking-[0.4em] text-xs mb-4">ESTABLISHED 2004</h2>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic drop-shadow-2xl">
          80DOLLARS <br /> <span className="text-yellow-500">.COM</span>
        </h1>
        <p className="text-gray-500 text-sm mt-6 font-medium uppercase tracking-widest">Premium Digital Real Estate</p>
      </div>

      {/* Domain Value Props - الوصف المقنع بالإنجليزية */}
      <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 z-10">
        <div className="bg-zinc-900/40 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 text-center">
          <History className="text-yellow-500 mx-auto mb-3" size={24} />
          <h4 className="text-xs font-bold mb-1 tracking-tighter">AGED ASSET</h4>
          <p className="text-[10px] text-gray-400 leading-tight">20+ years of SEO authority. A trusted brand since 2004.</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 text-center">
          <Globe className="text-yellow-500 mx-auto mb-3" size={24} />
          <h4 className="text-xs font-bold mb-1 tracking-tighter">GLOBAL POTENTIAL</h4>
          <p className="text-[10px] text-gray-400 leading-tight">Ideal for Fintech, Payments, Crypto or E-commerce brands.</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 text-center">
          <ShieldCheck className="text-yellow-500 mx-auto mb-3" size={24} />
          <h4 className="text-xs font-bold mb-1 tracking-tighter">FULL BUNDLE</h4>
          <p className="text-[10px] text-gray-400 leading-tight">Includes premium social media handles as a free gift.</p>
        </div>
      </div>

      {/* Social Media Assets - الروابط المصححة */}
      <div className="max-w-3xl w-full mb-16 z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          <SocialIcon icon={<Youtube size={20}/>} label="@80dollars" href="https://youtube.com/@80dollars" />
          <SocialIcon icon={<Github size={20}/>} label="Github" href="https://github.com/80dollars" />
          <SocialIcon icon={<Facebook size={20}/>} label="Facebook" href="https://facebook.com/80dollars_com" />
          <SocialIcon icon={<Instagram size={20}/>} label="Instagram" href="https://instagram.com/80dollars_com" />
          <SocialIcon icon={<Twitter size={20}/>} label="X / Twitter" href="https://x.com/80dollars_com" />
          <SocialIcon icon={<Linkedin size={20}/>} label="LinkedIn" href="https://linkedin.com/company/80dollars-com" />
        </div>
      </div>

      {/* Acquisition Section */}
      <div className="max-w-md w-full bg-gradient-to-b from-zinc-900 to-black p-10 rounded-[2.5rem] border border-zinc-800 text-center shadow-2xl relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
        <h3 className="text-3xl font-black text-white mb-4 italic">MAKE AN OFFER</h3>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium">
          Secure this rare 8-character domain today. Secure transfer via Escrow.com or Dan.com
        </p>
        
        <a 
          href="mailto:contact@80dollars.com"
          className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-white text-black font-black py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-yellow-500/10 w-full text-sm tracking-widest"
        >
          <Mail size={20} />
          CONTACT BROKER
        </a>
      </div>

      <footer className="mt-20 text-zinc-700 text-[9px] tracking-[0.6em] font-black uppercase z-10">
        © 80DOLLARS PREMIUM ASSETS
      </footer>
    </div>
  );
}

function SocialIcon({ icon, label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className="flex flex-col items-center justify-center p-4 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-yellow-500 hover:bg-zinc-900 transition-all group">
      <div className="text-zinc-500 group-hover:text-yellow-500 transition-colors mb-2">{icon}</div>
      <span className="text-[8px] font-bold text-zinc-600 group-hover:text-white uppercase tracking-tighter">{label}</span>
    </a>
  );
}
