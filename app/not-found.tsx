"use client";
import Link from 'next/link';
import { HiHome, HiArrowLongRight } from 'react-icons/hi2';

export default function NotFound() {
  return (
    <div 
      className="relative min-h-screen bg-gradient-to-tr from-[#FAF8F5] via-[#FFFFFF] to-[#F3F7F4] flex flex-col justify-center items-center py-20 px-6 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      
      {/* Smooth Ambient Light Mesh (Sleek Modern Look) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-100/30 to-amber-100/30 rounded-full filter blur-[160px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-2xl w-full text-center space-y-12 z-10">
        
        {/* Ayat Badge */}
        <div className="inline-flex items-center justify-center">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-800 uppercase bg-amber-50/80 px-6 py-2.5 rounded-full border border-amber-200/50 shadow-[0_2px_10px_rgba(197,160,89,0.05)]">
            SURAH AD-DUHA : 7
          </span>
        </div>

        {/* Sacred Quranic Ayat (Beautiful Calligraphic Spacing) */}
        <div className="space-y-6 py-4">
          <p className="text-4xl md:text-6xl font-serif text-[#022413] leading-loose tracking-wide font-bold select-none" dir="rtl">
            وَوَجَدَكَ ضَالًّا فَهَدَىٰ
          </p>
          <div className="w-12 h-[2px] bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-950 text-xl md:text-2xl font-black max-w-xl mx-auto leading-relaxed px-2">
            "আর তিনি আপনাকে পেয়েছেন পথহারা, অতঃপর পথপ্রদর্শন করেছেন।"
          </p>
        </div>

        {/* Informative Note */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-emerald-800 uppercase tracking-widest">
            Error 404 — Page Not Found
          </h2>
          <p className="text-slate-800 text-base font-semibold max-w-sm mx-auto">
            আপনি যে পাতাটি খুঁজছেন তা এই মুহূর্তে উপলব্ধ নেই। চলুন, সঠিক পথে ফিরে যাই।
          </p>
        </div>

        {/* Smooth Modern Actions */}
        <div className="pt-4">
          <Link 
            href="/"
            className="group inline-flex items-center gap-3 bg-[#042414] text-white pl-8 pr-6 py-4 rounded-2xl font-black text-base hover:bg-emerald-900 shadow-[0_10px_35px_rgba(4,36,20,0.15)] hover:shadow-[0_15px_40px_rgba(4,36,20,0.25)] transition-all duration-300 active:scale-95"
          >
            <span>হোম পেজে ফিরে যান</span>
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 group-hover:translate-x-1 transition-transform duration-300">
              <HiArrowLongRight className="text-lg" />
            </div>
          </Link>
        </div>

      </div>

      {/* Subtle Bottom Aesthetic Line */}
      <div className="absolute bottom-10 flex items-center gap-3 opacity-40">
        <div className="w-1.5 h-1.5 bg-emerald-800 rounded-full"></div>
        <div className="w-24 h-[1px] bg-emerald-800"></div>
        <div className="w-1.5 h-1.5 bg-emerald-800 rounded-full"></div>
      </div>

    </div>
  );
}