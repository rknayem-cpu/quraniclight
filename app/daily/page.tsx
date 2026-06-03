"use client";
import { useState } from 'react';
import { FaQuoteLeft, FaCopy, FaShareAlt, FaChevronRight, FaRegBookmark, FaCheck } from 'react-icons/fa';

// মক ডাটা
const ayatList = [
  {
    id: 1,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    bengali: "নিশ্চয় কষ্টের সাথেই স্বস্তি রয়েছে।",
    surah: "সূরা আশ-শারহ্",
    verseNo: "৬"
  },
  // ... বাকি ডাটা একই থাকবে
];

function DailyAyat() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentAyat = ayatList[currentIndex];

  const handleCopy = () => {
    const textToCopy = `"${currentAyat.bengali}" — [${currentAyat.surah}: আয়াত ${currentAyat.verseNo}]`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ayatList.length);
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/70 flex flex-col justify-center items-center py-16 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      {/* ... আপনার আগের ব্যাকগ্রাউন্ড কোড ... */}

      <div className="relative max-w-3xl w-full bg-white border border-emerald-100/80 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(4,36,20,0.03)] z-10 flex flex-col items-center">
        
        {/* ... অন্যান্য কন্টেন্ট ... */}
        
        <div className="w-full text-center mb-8">
          <p className="text-slate-950 text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto">
            {currentAyat.bengali}
          </p>
        </div>

        {/* ... বাটন সেকশন ... */}
        
      </div>

      {/* এখানে ফিক্স করা হয়েছে: */}
      <p className="relative text-slate-800 text-sm font-semibold mt-8 z-10 italic">
        {'"'}আল্লাহর বাণীসমূহ মানুষের অন্তরে প্রশান্তি বয়ে আনে।{'"'}
      </p>

    </div>
  );
}

export default DailyAyat;