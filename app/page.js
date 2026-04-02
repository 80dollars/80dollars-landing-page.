"use client";
import React, { useState, useEffect } from 'react';
import { DollarSign, ShieldCheck, Zap, Mail, Clock } from 'lucide-react';

export default function DomainSalePage() {
  const [expiryTime, setExpiryTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); 
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setExpiryTime({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black italic text-yellow-500 underline">80DOLLARS.COM</div>
        <div className="hidden md:block text-neutral-500">Premium Asset</div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold mb-6">LIMITED TIME OFFER</div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">DOMAIN FOR SALE</h1>
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(expiryTime).map(([label, value]) => (
            <div key={label} className="flex flex-col">
              <div className="bg-neutral-900 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-yellow-500 border border-neutral-800">{value}</div>
              <span className="text-[10px] uppercase mt-2 text-neutral-500 tracking-widest">{label}</span>
            </div>
          ))}
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-[2.5rem] max-w-lg mx-auto shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 italic">Make an Offer</h2>
          <p className="text-neutral-500 mb-8 text-sm">Secure transfer via Escrow or Dan.com</p>
          <a href="mailto:contact@80dollars.com" className="flex items-center justify-center gap-3 w-full bg-yellow-500 text-black font-black py-5 rounded-2xl hover:scale-105 transition-all">
            <Mail size={20} /> SEND INQUIRY
          </a>
        </div>
      </main>
    </div>
  );
}
