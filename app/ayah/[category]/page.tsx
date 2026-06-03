import {connectDB} from "@/lib/db";
import Ayah from "@/models/ayah";
import Link from "next/link";
import { FaArrowLeft, FaBookOpen, FaChevronRight } from "react-icons/fa";

const categoryTitles = {
  iman: "ঈমান",
  namaz: "নামাজ",
  zakat: "যাকাত",
  roza: "রোজা",
  hajj: "হজ্জ",
  duwa: "দোয়া"
};

async function CategoryListPage({ params }) {
  const resolvedParams = await params;
  const currentCategory = resolvedParams.category;

  let posts = [];
  try {
    await connectDB();
    // ডাটাবেস থেকে শুধু টাইটেল এবং আইডি নেওয়া হচ্ছে (অপ্টিমাইজেশনের জন্য)
    posts = await Ayah.find({ category: currentCategory }).select("title").sort({ createdAt: -1 });
  } catch (error) {
    console.error(error);
  }

  const banglaCategoryName = categoryTitles[currentCategory] || "ইসলামিক বিষয়";

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/30 py-16 px-4"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <Link href="/ayah" className="inline-flex items-center gap-2 text-sm font-black text-emerald-950 hover:text-amber-600 bg-white border border-emerald-100 px-4 py-2 rounded-xl shadow-sm transition-all">
            <FaArrowLeft className="text-xs" />  ফিরুন
          </Link>
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black text-[#032513]">
              {banglaCategoryName} বিভাগের সকল বিষয়সমূহ
            </h1>
            <p className="text-slate-600 text-sm font-bold">নিচের যেকোনো একটি শিরোনামে ক্লিক করে বিস্তারিত পড়ুন।</p>
            <div className="w-16 h-1 bg-amber-500 rounded-full mt-2"></div>
          </div>
        </div>

        {/* যদি কোনো পোস্ট না থাকে */}
        {posts.length === 0 && (
          <div className="bg-white border border-slate-100 p-12 rounded-[2rem] text-center shadow-sm">
            <p className="text-slate-950 text-lg font-black">এই ক্যাটাগরিতে এখনো কোনো কন্টেন্ট যুক্ত করা হয়নি।</p>
          </div>
        )}

        {/* টাইটেল সমূহের স্টাইলিশ লিস্ট */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Link
              key={post._id.toString()}
              // এখানে ডায়নামিক আইডি সহ লিঙ্কিং করা হয়েছে
              href={`/ayah/${currentCategory}/${post._id}`}
              className="group flex items-center justify-between bg-white border border-emerald-100/70 p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgba(4,36,20,0.01)] hover:shadow-[0_10px_30px_rgba(4,36,20,0.05)] hover:border-amber-400 transition-all duration-300"
            >
              <div className="flex items-center gap-4 md:gap-5">
                {/* সিরিয়াল নম্বর ব্যাজ */}
                <span className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-emerald-50 text-emerald-900 group-hover:bg-[#042414] group-hover:text-amber-400 transition-colors font-mono font-black rounded-xl flex items-center justify-center text-sm md:text-base border border-emerald-100">
                  {index + 1}
                </span>
                
                {/* পোস্টের শিরোনাম */}
                <h2 className="text-base md:text-xl font-black text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">
                  {post.title}
                </h2>
              </div>

              {/* রাইট অ্যারো আইকন */}
              <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                <FaChevronRight className="text-xs text-slate-400 group-hover:text-amber-500" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CategoryListPage;