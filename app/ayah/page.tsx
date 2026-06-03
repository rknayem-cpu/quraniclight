"use client";

import { useRouter } from 'next/navigation';
import { FaMosque, FaPray, FaHandsHelping, FaMoon, FaKaaba, FaArrowRight } from 'react-icons/fa';

const categories = [
  { name: 'ঈমান', icon: <FaMosque />, desc: 'ইসলামের মূল ভিত্তি ও অটুট বিশ্বাস',link: '/ayah/iman' },
  { name: 'নামাজ', icon: <FaPray />, desc: 'ঈমানের খুঁটি ও দৈনিক ৫ ওয়াক্ত ফরজ ইবাদত',link: '/ayah/namaz' },
  { name: 'যাকাত', icon: <FaHandsHelping />, desc: 'সম্পদশালীদের জন্য পবিত্র আর্থিক বিধান',link: '/ayah/zakat' },
  { name: 'রোজা', icon: <FaMoon />, desc: 'আত্মশুদ্ধি ও পবিত্র রমজানের সিয়াম সাধনা',link: '/ayah/roza' },
  { name: 'হজ্জ', icon: <FaKaaba />, desc: 'সামর্থ্যবানদের জন্য মক্কা শরীফের সফর',link: '/ayah/hajj' },
];

function IslamicFivePillars() {
  const router = useRouter();
  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/70 py-20 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      
      {/* Background Decorative Blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200/30 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative max-w-3xl mx-auto text-center mb-20 space-y-5 z-10">
        <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase bg-amber-50 px-4 py-2 rounded-full border border-amber-200/60">
          The Pillars of Islam
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#032513] tracking-tight">
          ইসলামের পঞ্চস্তম্ভ
        </h1>
        <p className="text-slate-900 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
          ইসলাম দাঁড়িয়ে আছে এই পাঁচটি বিষয়ের ওপর। অতএব, এই পাঁচটি স্তম্ভ সম্পর্কে সঠিক ও স্বচ্ছ ধারণা রাখা প্রত্যেক মুসলিমের জন্য অত্যন্ত জরুরি।
        </p>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full shadow-sm mt-4"></div>
      </div>

      {/* Grid Categories */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 z-10">
        {categories.map((item, index) => (
          <div 
            key={index} onClick={() => router.push(item.link)}
            className="group bg-white border border-emerald-100 p-8 rounded-[2.5rem] shadow-[0_10px_35px_rgba(4,36,20,0.02)] hover:shadow-[0_25px_50px_rgba(4,36,20,0.08)] transition-all duration-500 hover:-translate-y-3 cursor-pointer text-center flex flex-col items-center relative overflow-hidden"
          >
            {/* Top Border Indicator */}
            <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-2 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"></div>
            
            {/* Soft Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon Wrapper */}
            <div className="relative text-4xl text-amber-600 mb-6 p-6 bg-amber-50/80 
            rounded-2xl group-hover:bg-[#042414] group-hover:text-amber-400 
            group-hover:rotate-2 transition-all duration-300 shadow-sm border border-amber-100/50">
              {item.icon}
            </div>
            
            {/* Heading & Paragraph with Maximum Contrast */}
            <h3 className="relative text-2xl font-black text-[#032513] mb-3 group-hover:text-amber-600 transition-colors duration-300">
              {item.name}
            </h3>
            <p className="relative text-base text-slate-900 font-semibold leading-relaxed px-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="relative max-w-4xl mx-auto mt-24 text-center z-10" onClick={() => router.push('/others')}>
        <button className="group flex items-center gap-3 mx-auto bg-[#042414] text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-emerald-900 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95">
       আরও জানুন 
          <FaArrowRight className="group-hover:translate-x-2 transition-transform text-amber-400" />
        </button>
      </div>
    </div>
  );
}

export default IslamicFivePillars;