"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Search, Trash2, Edit3, Loader2 } from "lucide-react";

export default function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // পোস্ট লোড করা
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/sub-posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // ডিলিট ফাংশন
  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই পোস্টটি ডিলিট করতে চান?")) {
      try {
        await axios.delete(`/api/sub-posts/${id}`);
        // লোকালি লিস্ট আপডেট করা
        setPosts(posts.filter(post => post._id !== id));
      } catch (error) {
        alert("ডিলিট করতে সমস্যা হয়েছে!");
      }
    }
  };

  // সার্চ লজিক
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-black text-slate-900 mb-2">পোস্ট ম্যানেজমেন্ট</h1>
      <p className="text-slate-500 font-bold mb-8">সবগুলো পোস্ট এখান থেকে সার্চ, এডিট বা ডিলিট করুন।</p>

      {/* সার্চ বক্স */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-4 text-slate-400" />
        <input
          type="text"
          placeholder="টাইটেল লিখে সার্চ করুন..."
          className="w-full p-4 pl-12 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold bg-white shadow-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* লোডিং স্টেট */}
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
        </div>
      ) : (
        /* পোস্ট লিস্ট */
        <div className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div 
                key={post._id} 
                className="flex justify-between items-center bg-white p-5 border border-slate-100 rounded-2xl shadow-sm hover:border-emerald-200 transition-all"
              >
                <div>
                  <h2 className="font-black text-slate-900 text-lg">{post.title}</h2>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full uppercase font-black tracking-widest mt-1 inline-block">
                    {post.category}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href={`/admin/sub-edit/${post._id}`} 
                    className="p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    <Edit3 className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={() => handleDelete(post._id)} 
                    className="p-3 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 font-bold text-slate-500">কোনো পোস্ট পাওয়া যায়নি।</div>
          )}
        </div>
      )}
    </div>
  );
}