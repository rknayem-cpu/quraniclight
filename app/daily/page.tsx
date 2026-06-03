"use client";
import { useState } from 'react';
import { FaQuoteLeft, FaCopy, FaShareAlt, FaChevronRight, FaRegBookmark, FaCheck } from 'react-icons/fa';

// মক ডাটা (পরবর্তীতে এটি আপনার MongoDB API থেকে আসবে)
const ayatList = [
  {
    id: 1,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    bengali: "নিশ্চয় কষ্টের সাথেই স্বস্তি রয়েছে।",
    surah: "সূরা আশ-শারহ্",
    verseNo: "৬"
  },
  {
    id: 2,
    arabic: "وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا",
    bengali: "আর আপনি আপনার পালনকর্তার আদেশের জন্য ধৈর্য ধারণ করুন। নিশ্চয় আপনি আমার চোখের সামনে (রক্ষণাবেক্ষণে) রয়েছেন।",
    surah: "সূরা আত-তূর",
    verseNo: "৪৮"
  },
  {
    id: 3,
    arabic: "ادْعُونِي أَسْتَجِبْ لَكُمْ",
    bengali: "তোমরা আমাকে ডাকো, আমি তোমাদের ডাকে সাড়া দেবো।",
    surah: "সূরা গাফির",
    verseNo: "৬০"
  }
];

function DailyAyat() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentAyat = ayatList[currentIndex];

  // আয়াত কপি করার ফাংশন
  const handleCopy = () => {
    const textToCopy = `"${currentAyat.bengali}" — [${currentAyat.surah}: আয়াত ${currentAyat.verseNo}]`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // পরবর্তী আয়াত দেখার ফাংশন
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ayatList.length);
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/70 flex flex-col justify-center items-center py-16 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      
      {/* Decorative Premium Glow Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/20 rounded-full filter blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-100/30 rounded-full filter blur-[140px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative text-center mb-12 space-y-4 z-10">
        <span className="text-xs font-bold tracking-[0.25em] text-amber-800 uppercase bg-amber-50 px-5 py-2.5 rounded-full border border-amber-200/60 shadow-sm">
          Ayat of the Day
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#032513]">
          দৈনিক নূরানি আয়াত
        </h1>
        <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-3"></div>
      </div>

      {/* Main Ayat Card */}
      <div className="relative max-w-3xl w-full bg-white border border-emerald-100/80 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(4,36,20,0.03)] hover:shadow-[0_30px_70px_rgba(4,36,20,0.06)] transition-all duration-500 z-10 flex flex-col items-center">
        
        {/* Quote Top Icon */}
        <div className="text-amber-100 text-5xl md:text-6xl self-start mb-2">
          <FaQuoteLeft />
        </div>

        {/* Arabic Text (Beautiful Bold Traditional Script) */}
        <div className="w-full text-center mb-8">
          <p className="text-3xl md:text-5xl font-serif text-[#032513] leading-[1.8] font-bold tracking-wide select-all" dir="rtl">
            {currentAyat.arabic}
          </p>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-100 to-transparent mb-8"></div>

        {/* Bengali Translation (High Contrast Dark Text) */}
        <div className="w-full text-center mb-8">
          <p className="text-slate-950 text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto">
            {currentAyat.bengali}
          </p>
        </div>

        {/* Surah Reference / Citation */}
        <div className="bg-emerald-50/60 border border-emerald-100/60 px-6 py-2 rounded-full text-sm font-black text-[#032513] tracking-wide mb-10">
          {currentAyat.surah} : <span className="text-amber-600">আয়াত {currentAyat.verseNo}</span>
        </div>

        {/* Interactive Action Bar */}
        <div className="w-full flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
          <div className="flex gap-3">
            <button 
              onClick={handleCopy}
              className="p-4 bg-slate-50 text-slate-800 rounded-2xl hover:bg-emerald-50 hover:text-emerald-800 transition-all active:scale-95 border border-slate-100"
              title="Copy Ayat"
            >
              {copied ? <FaCheck className="text-emerald-600 scale-110 transition-transform" /> : <FaCopy />}
            </button>
            <button className="p-4 bg-slate-50 text-slate-800 rounded-2xl hover:bg-emerald-50 hover:text-emerald-800 transition-all active:scale-95 border border-slate-100" title="Bookmark">
              <FaRegBookmark />
            </button>
          </div>

          {/* Change Ayat Button */}
          <button 
            onClick={handleNext}
            className="group flex items-center gap-2 bg-[#042414] text-white px-6 py-4 rounded-2xl font-black text-base hover:bg-emerald-900 transition-all duration-300 shadow-md active:scale-95"
          >
            <span>পরবর্তী আয়াত</span>
            <FaChevronRight className="group-hover:translate-x-1 transition-transform text-amber-400 text-xs" />
          </button>
        </div>

      </div>

      {/* Decorative Footer Statement */}
      <p className="relative text-slate-800 text-sm font-semibold mt-8 z-10 italic">
        "আল্লাহর বাণীসমূহ মানুষের অন্তরে প্রশান্তি বয়ে আনে।"
      </p>

    </div>
  );
}

export default DailyAyat;