"use client";
import axios from 'axios';
import { useState } from 'react';
import { FaMosque, FaPray, FaHandsHelping, FaMoon, FaKaaba } from 'react-icons/fa';
import { GiPrayerBeads } from "react-icons/gi";
// ক্যাটাগরি লিস্ট আইকনসহ
const categoriesList = [
  { id: 'iman', name: 'ঈমান', icon: <FaMosque /> },
  { id: 'namaz', name: 'নামাজ', icon: <FaPray /> },
  { id: 'zakat', name: 'যাকাত', icon: <FaHandsHelping /> },
  { id: 'roza', name: 'রোজা', icon: <FaMoon /> },
  { id: 'hajj', name: 'হজ্জ', icon: <FaKaaba /> },
  { id: 'duwa', name: 'দুয়া', icon: <GiPrayerBeads /> },
];

function Test() {
  const [formData, setFormData] = useState({
    title: '',
    imgUrl: '',
    content: '',
    note: '',
    category: 'iman' // ডিফল্ট ক্যাটাগরি সেট করা হলো
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/ayah-post', formData);
      alert("তথ্যটি সফলভাবে সংরক্ষিত হয়েছে। আলহামদুলিল্লাহ!");
      setFormData({ title: '', imgUrl: '', content: '', note: '', category: 'iman' });
    } catch (error) {
      console.error(error);
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
      <div className="relative max-w-2xl w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(4,36,20,0.03)] border border-emerald-100/50 z-10">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60">
            Data Entry Portal
          </span>
          <h1 className="text-4xl font-black text-[#032513] pt-2">নতুন কন্টেন্ট যোগ করুন</h1>
          <p className="text-slate-700 font-semibold italic">একটি সুন্দর দ্বীনি প্রচেষ্টার অপেক্ষায়...</p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- Stylish Radio Button Category Section --- */}
          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-900 uppercase tracking-wider pl-1">
              ক্যাটাগরি নির্বাচন করুন *
            </label>
            
            {/* Responsive Radio Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {categoriesList.map((cat) => {
                const isSelected = formData.category === cat.id;
                return (
                  <label 
                    key={cat.id}
                    className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border cursor-pointer transition-all duration-300 select-none ${
                      isSelected 
                        ? 'bg-[#042414] border-[#042414] shadow-[0_10px_25px_rgba(4,36,20,0.15)] text-white scale-105' 
                        : 'bg-slate-50 border-slate-100 text-slate-900 hover:bg-emerald-50/50 hover:border-emerald-200'
                    }`}
                  >
                    {/* Native Radio Hidden */}
                    <input 
                      type="radio" 
                      name="category" 
                      value={cat.id} 
                      checked={isSelected}
                      onChange={handleChange}
                      className="sr-only" 
                    />
                    
                    {/* Category Icon */}
                    <div className={`text-2xl mb-2 transition-transform duration-300 group-hover:scale-110 ${
                      isSelected ? 'text-amber-400' : 'text-amber-600'
                    }`}>
                      {cat.icon}
                    </div>

                    {/* Category Name */}
                    <span className={`text-sm font-black tracking-wide ${
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
                placeholder="টাইটেল লিখুন..." 
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
              <label className="block text-sm font-black text-slate-900 mb-2 pl-1">মূল কন্টেন্ট (Content) *</label>
              <textarea 
                name="content" 
                placeholder="বিস্তারিত বিবরণ এখানে লিখুন..." 
                value={formData.content} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 
                border border-slate-100 text-slate-950 font-bold rounded-xl focus:bg-white
                 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition h-36
                  " 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2 pl-1">অতিরিক্ত নোট (Note)</label>
              <textarea 
                name="note" 
                placeholder="কোনো বিশেষ মন্তব্য বা ফুটনোট থাকলে যোগ করুন..." 
                value={formData.note} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border 
                border-slate-100 text-slate-950 font-bold rounded-xl 
                focus:bg-white focus:border-amber-500 focus:ring-1 
                focus:ring-amber-500 outline-none transition h-24 resize-none" 
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

export default Test;