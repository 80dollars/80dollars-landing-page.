"use client";
import React from 'react';
import { Youtube, Github, Facebook, Instagram, Twitter, Linkedin, Mail, ShieldCheck, History, Globe } from 'lucide-react';

export default function DomainSalePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-4 py-16 relative overflow-hidden">
      
      {/* Golden Logo Watermark - زيادة حجم اللوجو وتغيير موقعه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none w-full max-w-[800px] z-0">
        <img 
          src="/logo.png" 
          alt="Brand Logo"
          className="w-full h-auto"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      {/* Content Section - هذا هو الجزء الذي يظهر فوق اللوجو */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-yellow-500 font-bold tracking-[0.4em] text-[10px] mb-4">ESTABLISHED 2004</h2>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">
          80DOLLARS <br /> <span className="text-yellow-500">.COM</span>
        </h1>
        <p className="text-zinc-500 text-xs mt-6 font-bold uppercase tracking-[0.3em]">Premium Digital Real Estate</p>
      </div>

      {/* Domain Value Props */}
      <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 z-10">
        <div className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/50 text-center">
          <History className="text-yellow-500 mx-auto mb-3" size={24} />
          <h4 className="text-[10px] font-black mb-1 tracking-widest uppercase">Aged Asset</h4>
          <p className="text-[9px] text-zinc-500 leading-tight uppercase font-bold">20+ Years Authority. Trusted since 2004.</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/50 text-center">
          <Globe className="text-yellow-500 mx-auto mb-3" size={24} />
          <h4 className="text-[10px] font-black mb-1 tracking-widest uppercase">Global Brand</h4>
          <p className="text-[9px] text-zinc-500 leading-tight uppercase font-bold">Perfect for Fintech or E-commerce.</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/50 text-center">
          <ShieldCheck className="text-yellow-500 mx-auto mb-3" size={24} />
          <h4 className="text-[10px] font-black mb-1 tracking-widest uppercase">Full Bundle</h4>
          <p className="text-[9px] text-zinc-500 leading-tight uppercase font-bold">Includes all social media handles.</p>
        </div>
      </div>

      {/* Social Media Assets - الروابط المصححة */}
      <div className="max-w-3xl w-full mb-16 z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          <SocialIcon icon={<Youtube size={20}/>} label="YouTube" href="https://youtube.com/@80dollars" />
          <SocialIcon icon={<Github size={20}/>} label="GitHub" href="https://github.com/80dollars" />
          <SocialIcon icon={<Facebook size={20}/>} label="Facebook" href="https://facebook.com/80dollars_com" />
          <SocialIcon icon={<Instagram size={20}/>} label="Instagram" href="https://instagram.com/80dollars_com" />
          <SocialIcon icon={<Twitter size={20}/>} label="X" href="https://x.com/80dollars_com" />
          <SocialIcon icon={<Linkedin size={20}/>} label="LinkedIn" href="https://linkedin.com/company/80dollars_com" />
        </div>
      </div>

      {/* Acquisition Section */}
      <div className="max-w-md w-full bg-zinc-900/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-zinc-800 text-center shadow-2xl z-10 overflow-visible">
        <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tighter">Make an Offer</h3>
        <p className="text-zinc-400 text-xs mb-10 leading-relaxed font-bold uppercase tracking-wide">
          Secure this rare asset. Transfer via Escrow.com or Dan.com
        </p>
        
        <a 
          href="mailto:contact@80dollars.com"
          className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-white text-black font-black py-5 rounded-2xl transition-all duration-300 w-full text-xs tracking-[0.2em] uppercase shadow-lg shadow-yellow-500/10"
        >
          <Mail size={18} />
          Contact Broker
        </a>
      </div>

      <footer className="mt-20 text-zinc-800 text-[8px] tracking-[0.5em] font-black uppercase z-10">
        © 80DOLLARS PREMIUM ASSETS
      </footer>
    </div>
  );
}

function SocialIcon({ icon, label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className="flex flex-col items-center justify-center p-4 bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/50 rounded-2xl hover:border-yellow-500 hover:bg-zinc-900 transition-all group">
      <div className="text-zinc-600 group-hover:text-yellow-500 transition-colors mb-2">{icon}</div>
      <span className="text-[7px] font-black text-zinc-700 group-hover:text-zinc-300 uppercase tracking-tighter">{label}</span>
    </a>
  );
}
