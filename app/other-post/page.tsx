"use client";
import axios from 'axios';
import { useState } from 'react';
import { FaUtensils, FaGavel, FaBalanceScale, FaUsers, FaHandshake, FaAward } from 'react-icons/fa';

// নতুন স্পেসিফিক ক্যাটাগরি লিস্ট
const otherCategoriesList = [
  { id: 'halal-haram', name: 'হালাল-হারাম', icon: <FaUtensils /> },
  { id: 'quranic-laws', name: 'কুরআনিক বিধান', icon: <FaGavel /> },
  { id: 'hudud', name: 'হুদুদ ও শাস্তি', icon: <FaBalanceScale /> },
  { id: 'social-life', name: 'সামাজিক জীবন', icon: <FaUsers /> },
  { id: 'business', name: 'ব্যবসা ও লেনদেন', icon: <FaHandshake /> },
  { id: 'morality', name: 'নৈতিকতা ও চরিত্র', icon: <FaAward /> },
  { id: 'fitna', name: 'ফিতনা', icon: <FaAward /> }
];

function OtherPostPage() {
  const [formData, setFormData] = useState({
    title: '',
    imgUrl: '',
    content: '',
    note: '',
    category: 'halal-haram' // ডিফল্ট ক্যাটাগরি সেট করা হলো
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // আপনি চাইলে এই এপিআই এন্ডপয়েন্ট পরিবর্তন করতে পারেন (যেমন: /api/other-post)
      await axios.post('/api/other-post', formData); 
      alert("তথ্যটি সফলভাবে সংরক্ষিত হয়েছে। আলহামদুলিল্লাহ!");
      setFormData({ title: '', imgUrl: '', content: '', note: '', category: '' });
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
      {/* Decorative Premium Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-100/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      {/* Main Wrapper */}
      <div className="relative max-w-3xl w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(4,36,20,0.03)] border border-emerald-100/50 z-10">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60">
            Special Category Portal
          </span>
          <h1 className="text-4xl font-black text-[#032513] pt-2">বিষয়ভিত্তিক কন্টেন্ট যোগ করুন</h1>
          <p className="text-slate-700 font-semibold italic">ইসলামিক জীবনব্যবস্থার সুন্দর গাইডলাইন তৈরি...</p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- Stylish Radio Button Category Section --- */}
          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-900 uppercase tracking-wider pl-1">
              ক্যাটাগরি নির্বাচন করুন *
            </label>
            
            {/* ৬টি ক্যাটাগরির জন্য রেসপন্সিভ গ্রিড লেআউট */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {otherCategoriesList.map((cat) => {
                const isSelected = formData.category === cat.id;
                return (
                  <label 
                    key={cat.id}
                    className={`group relative flex flex-col items-center justify-center p-3 rounded-2xl border cursor-pointer transition-all duration-300 select-none ${
                      isSelected 
                        ? 'bg-[#042414] border-[#042414] shadow-[0_10px_25px_rgba(4,36,20,0.15)] text-white scale-105' 
                        : 'bg-slate-50 border-slate-100 text-slate-900 hover:bg-emerald-50/50 hover:border-emerald-200'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="category" 
                      value={cat.id} 
                      checked={isSelected}
                      onChange={handleChange}
                      className="sr-only" 
                    />
                    
                    {/* Icon */}
                    <div className={`text-xl mb-1.5 transition-transform duration-300 group-hover:scale-110 ${
                      isSelected ? 'text-amber-400' : 'text-amber-600'
                    }`}>
                      {cat.icon}
                    </div>

                    {/* Category Name */}
                    <span className={`text-xs font-black text-center tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-950'
                    }`}>
                      {cat.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          {/* --- End of Category Section --- */}

          {/* Input Fields Container */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2 pl-1">শিরোনাম (Title) *</label>
              <input 
                type="text" 
                name="title" 
                placeholder="বিষয় বা আর্টিকেলের শিরোনাম লিখুন..." 
                value={formData.title} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border border-slate-100 text-slate-950 font-bold rounded-xl focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2 pl-1">ছবির লিংক (Image URL)</label>
              <input 
                type="url" 
                name="imgUrl" 
                placeholder="https://example.com/image.jpg" 
                value={formData.imgUrl} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border border-slate-100 text-slate-950 font-bold rounded-xl focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition font-mono text-sm" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2 pl-1">বিস্তারিত বিবরণ (Content) *</label>
              <textarea 
                name="content" 
                placeholder="কুরআন ও হাদিসের রেফারেন্সসহ বিস্তারিত তথ্য এখানে লিখুন..." 
                value={formData.content} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border border-slate-100 text-slate-950 font-bold rounded-xl focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition h-40 resize-none" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2 pl-1">বিশেষ দ্রষ্টব্য (Note)</label>
              <textarea 
                name="note" 
                placeholder="কোনো ফুটনোট বা সতর্কবার্তা থাকলে যোগ করুন..." 
                value={formData.note} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border border-slate-100 text-slate-950 font-bold rounded-xl focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition h-24 resize-none" 
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-4 bg-[#042414] text-white rounded-xl font-black text-lg hover:bg-emerald-950 transition-all duration-300 shadow-xl shadow-emerald-900/10 active:scale-[0.98]"
          >
            ডাটাবেসে সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtherPostPage;