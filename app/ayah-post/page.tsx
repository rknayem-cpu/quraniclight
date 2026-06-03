"use client";
import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaMosque, FaPray, FaHandsHelping, FaMoon, FaKaaba } from 'react-icons/fa';
import { GiPrayerBeads } from "react-icons/gi";

// টাইপ ডিফাইন করা হলো
interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface FormData {
  title: string;
  imgUrl: string;
  content: string;
  note: string;
  category: string;
}

const categoriesList: Category[] = [
  { id: 'iman', name: 'ঈমান', icon: <FaMosque /> },
  { id: 'namaz', name: 'নামাজ', icon: <FaPray /> },
  { id: 'zakat', name: 'যাকাত', icon: <FaHandsHelping /> },
  { id: 'roza', name: 'রোজা', icon: <FaMoon /> },
  { id: 'hajj', name: 'হজ্জ', icon: <FaKaaba /> },
  { id: 'duwa', name: 'দুয়া', icon: <GiPrayerBeads /> },
];

function Test() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    imgUrl: '',
    content: '',
    note: '',
    category: 'iman'
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
      await axios.post('/api/ayah-post', formData);
      alert("তথ্যটি সফলভাবে সংরক্ষিত হয়েছে। আলহামদুলিল্লাহ!");
      setFormData({ title: '', imgUrl: '', content: '', note: '', category: 'iman' });
    } catch (error) {
      console.error(error);
      alert("সংরক্ষণ করতে ব্যর্থ হয়েছে!");
    }
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/40 flex items-center justify-center py-16 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      {/* বাকি ডিজাইন আগের মতোই থাকবে */}
      <div className="relative max-w-2xl w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(4,36,20,0.03)] border border-emerald-100/50 z-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-900 uppercase tracking-wider pl-1">
              ক্যাটাগরি নির্বাচন করুন *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {categoriesList.map((cat) => {
                const isSelected = formData.category === cat.id;
                return (
                  <label 
                    key={cat.id}
                    className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
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
                    <div className={`text-2xl mb-2 ${isSelected ? 'text-amber-400' : 'text-amber-600'}`}>
                      {cat.icon}
                    </div>
                    <span className={`text-sm font-black ${isSelected ? 'text-white' : 'text-slate-950'}`}>
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
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border rounded-xl outline-none" 
                required 
              />
            </div>
            {/* বাকি ইনপুটগুলো একইভাবে handleChange ব্যবহার করবে */}
            <div>
              <label className="block text-sm font-black text-slate-900 mb-2">মূল কন্টেন্ট *</label>
              <textarea 
                name="content" 
                value={formData.content} 
                onChange={handleChange} 
                className="w-full p-4 bg-slate-50 border rounded-xl outline-none h-36" 
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-[#042414] text-white rounded-xl font-black text-lg hover:bg-emerald-950 transition-all"
          >
            ডাটাবেসে সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
}

export default Test;