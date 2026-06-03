"use client";
import Link from 'next/link';
import { FaMosque, FaFacebook, FaYoutube, FaHeart, FaChevronUp } from 'react-icons/fa';

function Footer() {
  
  // স্ক্রোল করে উপরে ওঠার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-white border-t border-emerald-100/60 py-10 relative overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      {/* Decorative Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-8">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3 group text-center md:text-left">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-lg text-amber-600 border border-amber-200/40">
              <FaMosque />
            </div>
            <div>
              <span className="text-xl font-black text-[#032513] block">
               কোরানের আলো
              </span>
              <span className="text-xs text-slate-600 font-bold tracking-wide block mt-0.5">
                আলোর পথে এক ধাপ এগিয়ে
              </span>
            </div>
          </div>

          {/* Minimal Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 hover:bg-[#042414] hover:text-white transition-all duration-300 shadow-sm active:scale-95"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm active:scale-95"
            >
              <FaYoutube />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100/50 flex items-center justify-center text-amber-700 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm active:scale-95"
              title="উপরে যান"
            >
              <FaChevronUp className="text-sm" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-sm font-bold text-slate-900">
          <p>© ২০২৬ কোরানের আলো। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1 text-slate-700">
            নির্মিত হয়েছে <FaHeart className="text-red-500 animate-pulse text-xs" /> ঈমান ও ভালোবাসার সাথে
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;