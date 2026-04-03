"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* تأثير الغبار الذهبي والخلفية الاحترافية */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        
        {/* ملصق التأسيس لرفع القيمة */}
        <div className="mb-8 inline-block border border-yellow-600/40 px-6 py-2 rounded-full bg-yellow-950/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">
            Aged Domain • Established 2004
          </span>
        </div>

        {/* العنوان الرئيسي الفخم */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic text-white drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">
          80DOLLARS<span className="text-yellow-500">.COM</span>
        </h1>

        <p className="text-xl text-gray-400 font-light mb-12 tracking-widest uppercase">
          This Premium Asset is <span className="text-yellow-500 font-bold underline decoration-yellow-500/50 underline-offset-8">For Sale</span>
        </p>

        {/* بطاقة السعر الاحترافية */}
        <div className="bg-zinc-900/30 border border-zinc-800 backdrop-blur-xl p-10 rounded-3xl mb-12 shadow-2xl">
          <div className="text-sm text-zinc-500 uppercase tracking-widest mb-4 font-medium">Asking Price</div>
          <div className="text-6xl font-black mb-8 text-white">$5,000 <span className="text-lg text-zinc-500 font-normal">USD</span></div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Status</p>
              <p className="text-lg font-bold text-yellow-500">Available</p>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">History</p>
              <p className="text-lg font-bold text-yellow-500">20+ Years</p>
            </div>
          </div>

          <a 
            href="mailto:Sales@80dollars.com?subject=Serious Offer for 80dollars.com"
            className="block w-full py-5 rounded-2xl bg-yellow-500 text-black font-black text-lg uppercase tracking-[0.2em] hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 active:scale-95"
          >
            Make an Offer
          </a>
        </div>

        {/* الروابط الاجتماعية الرسمية (المحدثة بدقة) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-10 border-t border-zinc-800/60">
          <a href="https://youtube.com/@80dollars" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">YouTube</a>
          <a href="https://github.com/80dollars" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">GitHub</a>
          <a href="https://facebook.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Facebook</a>
          <a href="https://instagram.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Instagram</a>
          <a href="https://x.com/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">X</a>
          <a href="https://linkedin.com/in/80dollars_com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">LinkedIn</a>
        </div>

        <footer className="mt-16 text-[9px] text-zinc-800 uppercase tracking-[0.4em]">
          Secure Asset Transfer | Certified Domain
        </footer>
      </div>
    </main>
  );
}
