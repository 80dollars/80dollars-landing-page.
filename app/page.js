"use client";
import React from 'react';
import { Mail, Github, Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function LandingPage() {
  const socialLinks = [
    { icon: <Youtube size={20}/>, url: "https://youtube.com/80dollars", label: "Youtube" },
    { icon: <Github size={20}/>, url: "https://github.com/80dollars", label: "Github" },
    { icon: <Facebook size={20}/>, url: "https://facebook.com/80dollars_com", label: "Facebook" },
    { icon: <Instagram size={20}/>, url: "https://instagram.com/80dollars_com", label: "Instagram" },
    { icon: <Twitter size={20}/>, url: "https://x.com/80dollars_com", label: "X" },
    { icon: <Linkedin size={20}/>, url: "https://linkedin.com/80dollars_com", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-yellow-500 font-bold tracking-widest mb-2 uppercase text-sm">80DOLLARS.COM</h2>
        <p className="text-gray-500 text-xs italic">Premium Digital Asset | Limited Time Offer</p>
        <h1 className="text-5xl md:text-7xl font-black mt-6 tracking-tighter uppercase">Domain For Sale</h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {socialLinks.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" 
             className="flex flex-col items-center p-3 bg-zinc-900 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 border border-zinc-800">
            {link.icon}
            <span className="text-[10px] mt-2 font-bold uppercase tracking-tighter">{link.label}</span>
          </a>
        ))}
      </div>

      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center max-w-md w-full shadow-2xl">
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Make an Offer</h3>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          Secure your brand identity with this rare 8-character domain. 
          Transfer via Escrow.com or Dan.com
        </p>
        
        <a href="mailto:admin@80dollars.com" 
           className="flex items-center justify-center gap-3 bg-yellow-500 text-black font-black py-4 px-8 rounded-full hover:scale-105 transition-transform w-full text-sm">
          <Mail size={18} />
          SEND INQUIRY
        </a>
      </div>

      <footer className="mt-16 text-gray-700 text-[10px] uppercase tracking-[0.3em] font-bold">
        © 2026 80DOLLARS PREMIUM ASSETS
      </footer>
    </div>
  );
}
