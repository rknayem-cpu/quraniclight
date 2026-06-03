"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'iman',
    imgUrl: '',
    note: ''
  });

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then(res => {
      setFormData(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/posts/${id}`, formData);
    alert("আপডেট সফল হয়েছে!");
    router.push('/admin/posts');
  };

  if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-10 h-10 animate-spin text-emerald-600" /></div>;

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <Link href="/admin/posts" className="flex items-center gap-2 text-slate-500 font-bold mb-6 hover:text-emerald-600">
        <ArrowLeft className="w-4 h-4" /> তালিকায় ফিরে যান
      </Link>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 mb-6">পোস্ট সম্পাদনা করুন</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-black text-slate-700 mb-2">শিরোনাম</label>
            <input className="w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-black text-slate-700 mb-2">ক্যাটাগরি</label>
            <select className="w-full p-4 border border-slate-200 rounded-2xl outline-none" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
              {['iman', 'namaz', 'zakat', 'roza', 'hajj', 'quran', 'hadith', 'duwa'].map(cat => (
                <option key={cat} value={cat}>{cat.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-black text-slate-700 mb-2">ইমেজ URL</label>
            <input className="w-full p-4 border border-slate-200 rounded-2xl outline-none" value={formData.imgUrl} onChange={(e) => setFormData({...formData, imgUrl: e.target.value})} />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-black text-slate-700 mb-2">মূল কন্টেন্ট</label>
            <textarea className="w-full p-4 border border-slate-200 rounded-2xl h-40 outline-none" value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-black text-slate-700 mb-2">নোট (অপশনাল)</label>
            <input className="w-full p-4 border border-slate-200 rounded-2xl outline-none" value={formData.note} onChange={(e) => setFormData({...formData, note: e.target.value})} />
          </div>
        </div>

        <button className="w-full mt-8 py-4 bg-emerald-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all">
          <Save className="w-5 h-5" /> পরিবর্তন সংরক্ষণ করুন
        </button>
      </form>
    </div>
  );
}
export default EditPostPage;