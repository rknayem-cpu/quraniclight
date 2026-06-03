import { connectDB } from "@/lib/db";
import Other from "@/models/other";
import Link from "next/link";
import { FaArrowLeft, FaRegStickyNote, FaCalendarAlt, FaBookmark } from "react-icons/fa";

// পোস্ট ডাটার জন্য টাইপ ডিফাইন করা
interface Post {
  _id: string;
  title: string;
  content: string;
  category: string;
  imgUrl?: string;
  note?: string;
  createdAt: Date;
}

interface SinglePostPageProps {
  params: Promise<{ category: string; id: string }>;
}

async function SinglePostPage({ params }: SinglePostPageProps) {
  const resolvedParams = await params;
  const { category, id } = resolvedParams;

  let post: Post | null = null;
  try {
    await connectDB();
    // lean() ব্যবহার করা হয়েছে পারফরম্যান্স এবং টাইপ সাশ্রয়ী অবজেক্ট পাওয়ার জন্য
    post = await Other.findById(id).lean<Post>();
  } catch (error) {
    console.error("পোস্টটি খুঁজে পাওয়া যায়নি:", error);
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-bold text-slate-950">
        দুঃখিত, পোস্টটি পাওয়া যায়নি অথবা ডিলেট করা হয়েছে।
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/30 py-16 px-4"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto bg-white border border-emerald-100/60 p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(4,36,20,0.03)] relative">
        
        {/* Back to List Button */}
        <div className="mb-8">
          <Link 
            href={`/others/${category}`} 
            className="inline-flex items-center gap-2 text-xs font-black text-slate-700 hover:text-amber-600 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl shadow-sm transition-all"
          >
            <FaArrowLeft /> তালিকায় ফিরে যান
          </Link>
        </div>

        {/* Post Meta info */}
        <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-4">
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-2.5 py-1 rounded-md border border-emerald-100 uppercase tracking-wider text-[10px]">
            <FaBookmark className="text-amber-500" /> {category}
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>{new Date(post.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Full Title */}
        <h1 className="text-2xl md:text-4xl font-black text-[#032513] leading-tight mb-8">
          {post.title}
        </h1>

        {/* Featured Image */}
        {post.imgUrl && (
          <div className="w-full max-h-[380px] overflow-hidden rounded-2xl border border-slate-100 mb-8 shadow-sm">
            <img src={post.imgUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Main Content Body */}
        <div className="text-slate-950 text-base md:text-xl leading-relaxed whitespace-pre-line border-l-4 border-emerald-800 pl-4 md:pl-6 mb-8 text-justify">
          {post.content}
        </div>

        {/* Optional Note Box */}
        {post.note && (
          <div className="bg-amber-50/70 border border-amber-200/50 p-5 rounded-2xl space-y-1.5 mt-10">
            <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <FaRegStickyNote className="text-amber-600" /> বিশেষ দ্রষ্টব্য / ফুটনোট:
            </h4>
            <p className="text-slate-950 text-sm md:text-base font-bold italic leading-relaxed">
              {post.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePostPage;