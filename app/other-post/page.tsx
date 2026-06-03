"use client";
import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaUtensils, FaGavel, FaBalanceScale, FaUsers, FaHandshake, FaAward } from 'react-icons/fa';

// টাইপ ডিফাইন করা হলো
interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface OtherFormData {
  title: string;
  imgUrl: string;
  content: string;
  note: string;
  category: string;
}

const otherCategoriesList: Category[] = [
  { id: 'halal-haram', name: 'হালাল-হারাম', icon: <FaUtensils /> },
  { id: 'quranic-laws', name: 'কুরআনিক বিধান', icon: <FaGavel /> },
  { id: 'hudud', name: 'হুদুদ ও শাস্তি', icon: <FaBalanceScale /> },
  { id: 'social-life', name: 'সামাজিক জীবন', icon: <FaUsers /> },
  { id: 'business', name: 'ব্যবসা ও লেনদেন', icon: <FaHandshake /> },
  { id: 'morality', name: 'নৈতিকতা ও চরিত্র', icon: <FaAward /> },
  { id: 'fitna', name: 'ফিতনা', icon: <FaAward /> }
];

function OtherPostPage() {
  const [formData, setFormData] = useState<OtherFormData>({
    title: '',
    imgUrl: '',
    content: '',
    note: '',
    category: 'halal-haram'
  });

  // ইনপুট হ্যান্ডলারে টাইপ সেফটি
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/other-post', formData); 
      alert("তথ্যটি সফলভাবে সংরক্ষিত হয়েছে। আলহামদুলিল্লাহ!");
      setFormData({ title: '', imgUrl: '', content: '', note: '', category: 'halal-haram' });
    } catch (error) {
      console.error(error);
      alert("দুঃখিত, কোনো একটি সমস্যা হয়েছে।");
    }
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/40 flex items-center justify-center py-16 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-100/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="relative max-w-3xl w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(4,36,20,0.03)] border border-emerald-100/50 z-10">
        
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60">
            Special Category Portal
          </span>
          <h1 className="text-4xl font-black text-[#032513] pt-2">বিষয়ভিত্তিক কন্টেন্ট যোগ করুন</h1>
          <p className="text-slate-700 font-semibold italic">ইসলামিক জীবনব্যবস্থার সুন্দর গাইডলাইন তৈরি...</p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-900 uppercase tracking-wider pl-1">
              ক্যাটাগরি নির্বাচন করুন *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
              {otherCategoriesList.map((cat) => {
                const isSelected = formData.category === cat.id;
                return (
                  <label 
                    key={cat.id}
                    className={`group relative flex flex-col items-center justify-center p-3 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected ? 'bg-[#042414] border-[#042414] text-white scale-105' : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="category" 
                      value={cat.id} 
                      checked={isSelected}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="sr-only" 
                    />
                    <div className={`text-xl mb-1.5 ${isSelected ? 'text-amber-400' : 'text-amber-600'}`}>
                      {cat.icon}
                    </div>
                    <span className={`text-[10px] font-black text-center ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                      {cat.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2">শিরোনাম (Title) *</label>
              <input name="title" value={formData.title} onChange={handleChange} className="w-full p-4 bg-slate-50 border rounded-xl outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2">বিস্তারিত বিবরণ (Content) *</label>
              <textarea name="content" value={formData.content} onChange={handleChange} className="w-full p-4 bg-slate-50 border rounded-xl outline-none h-40" required />
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-[#042414] text-white rounded-xl font-black text-lg hover:bg-emerald-950 transition-all">
            ডাটাবেসে সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtherPostPage;