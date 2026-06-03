"use client";
import { useState } from 'react';
import { FaHeart, FaCopy, FaCheck, FaPhoneAlt, FaInfoCircle, FaHandHoldingHeart } from 'react-icons/fa';

function SupportPage() {
  const [copiedType, setCopiedType] = useState(null);

  const bkashAccounts = [
    { type: 'পার্সোনাল (Personal)', number: '01321302589', label: 'Send Money করুন' },
    //{ type: 'মার্চেন্ট (Merchant)', number: '018XXXXXXXX', label: 'Make Payment করুন' }
  ];

  const handleCopy = (number, type) => {
    navigator.clipboard.writeText(number);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/40 flex flex-col justify-center items-center py-20 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-100/20 rounded-full filter blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/20 rounded-full filter blur-[140px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-2xl w-full bg-white border border-emerald-100/80 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_60px_rgba(4,36,20,0.03)] z-10 flex flex-col items-center">
        
        {/* Top Floating Icon */}
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl text-emerald-800 border border-emerald-100/60 mb-6 shadow-sm animate-pulse">
          <FaHandHoldingHeart />
        </div>

        {/* Header Title */}
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-800 uppercase bg-amber-50 px-5 py-2 rounded-full border border-amber-200/50 shadow-sm inline-block">
            SADAQAH & SUPPORT
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#032513]">
            দ্বীনি কাজে সহযোগিতা
          </h1>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Beautiful Appeal Message Card */}
        <div className="bg-slate-50/80 border border-slate-100 p-6 md:p-8 rounded-2xl text-center mb-10 relative">
          <p className="text-slate-950 text-lg md:text-xl font-bold leading-relaxed">
            "দ্বীনের এই মহৎ কাজে যদি আপনি আমাদের পাশে থাকতে চান বা সহযোগিতা করতে চান, তবে আপনার সামর্থ্য অনুযায়ী কিছু আর্থিক সহযোগিতা আমরা আন্তরিকভাবে কামনা করি।"
          </p>
        </div>

        {/* Inspirational Short Hadith/Quote */}
        <p className="text-sm font-bold text-emerald-800 italic text-center mb-8 bg-emerald-50/50 px-4 py-2 rounded-xl border border-emerald-100/40">
          "নিশ্চয়ই দান সম্পদ কমিয়ে দেয় না।" — সহীহ মুসলিম, হাদীস ২৫৮৮
        </p>

        {/* bKash Payment Section */}
        <div className="w-full space-y-5">
          <h2 className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <FaInfoCircle className="text-amber-500 text-sm" /> নিচের বিকাশ নাম্বারে আপনার অনুদান পাঠাতে পারেন
          </h2>

          {bkashAccounts.map((account) => (
            <div 
              key={account.type}
              className="group relative bg-white border border-slate-100 hover:border-pink-200/60 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(226,19,110,0.04)]"
            >
              {/* Left Row: Logo + Info */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Custom Elegant bKash Branding Badge */}
                <div className="w-14 h-14 bg-[#E2136E] rounded-xl flex flex-col items-center justify-center text-white font-black text-xs shadow-sm select-none shrink-0 tracking-tighter">
                  <span className="text-sm leading-none font-black tracking-normal">বিকাশ</span>
                </div>
                <div>
                  <h3 className="text-slate-950 font-black text-base md:text-lg flex items-center gap-2">
                    {account.type}
                  </h3>
                  <p className="text-slate-600 text-sm font-bold">{account.label}</p>
                </div>
              </div>

              {/* Right Row: Number Display & Copy Trigger */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl">
                <span className="text-slate-950 font-black text-lg md:text-xl tracking-wider font-mono">
                  {account.number}
                </span>
                <button
                  onClick={() => handleCopy(account.number, account.type)}
                  className={`p-2.5 rounded-lg transition-all active:scale-95 border ${
                    copiedType === account.type 
                      ? 'bg-emerald-500 border-emerald-500 text-white' 
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-pink-50 hover:text-[#E2136E] hover:border-pink-200'
                  }`}
                  title="নাম্বার কপি করুন"
                >
                  {copiedType === account.type ? <FaCheck className="text-sm scale-110" /> : <FaCopy className="text-sm" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Disclaimer */}
        <p className="text-xs text-slate-600 text-center mt-10 max-w-sm font-semibold leading-relaxed">
          * টাকা পাঠানোর পর অনুগ্রহ করে আপনার ট্রানজেকশন আইডিটি নিজের কাছে যত্ন সহকারে রাখুন। আল্লাহ আপনার দান কবুল করুন। আমীন।
        </p>

      </div>
    </div>
  );
}

export default SupportPage;