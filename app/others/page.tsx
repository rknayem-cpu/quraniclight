import Link from 'next/link';
import { FaBalanceScale, FaUtensils, FaGavel, FaUsers, FaHandshake, FaBookOpen, FaChevronRight } from 'react-icons/fa';
import { connectDB } from "@/lib/db";
import Other from "@/models/other";
// const categories = [
//   {
//     id: 'halal-haram',
//     title: 'হালাল ও হারাম',
//     description: 'দৈনন্দিন জীবন, খাদ্য, উপার্জন এবং বর্জনীয় বিষয়সমূহের স্পষ্ট ইসলামিক দিকনির্দেশনা।',
//     icon: <FaUtensils />,
//     count: '৪২টি বিষয়',
//     color: 'from-emerald-500 to-teal-600',
//     href: '/others/halal-haram'
//   },
//   {
//     id: 'quranic-laws',
//     title: 'কুরআনিক বিধান ও শাস্তি',
//     description: 'পবিত্র কুরআনে বর্ণিত বিভিন্ন অপরাধের ঐশ্বরিক শাস্তি, ন্যায়বিচার ও আইনি বিধানসমূহ।',
//     icon: <FaGavel />,
//     count: '২৫টি আয়াত',
//     color: 'from-amber-500 to-orange-600',
//     href: '/others/quranic-laws'
//   },
//   {
//     id: 'hudud',
//     title: 'হুদুদ ও বিচারব্যবস্থা',
//     description: 'ইসলামিক শরিয়তের নির্ধারিত সীমানা (হুদুদ), তা’যীর এবং ইসলামী দণ্ডবিধির আলোচনা।',
//     icon: <FaBalanceScale />,
//     count: '১৮টি অধ্যায়',
//     color: 'from-red-500 to-rose-600',
//     href: '/others/hudud'
//   },
//   {
//     id: 'social-life',
//     title: 'পারিবারিক জীবন',
//     description: 'বিয়ে, তালাক, উত্তরাধিকার এবং পিতা-মাতা ও সন্তানের পারস্পরিক অধিকার ও কর্তব্য।',
//     icon: <FaUsers />,
//     count: '৩০টি গাইড',
//     color: 'from-blue-500 to-indigo-600',
//     href: '/others/social-life'
//   },
//   {
//     id: 'business',
//     title: 'ব্যবসা ও লেনদেন',
//     description: 'সুদমুক্ত অর্থনীতি, ক্রয়-বিক্রয়ের সঠিক নিয়ম এবং ব্যবসায়িক সততার ইসলামিক নীতিমালা।',
//     icon: <FaHandshake />,
//     count: '১৫টি নিয়ম',
//     color: 'from-cyan-500 to-blue-600',
//     href: '/others/business'
//   },
//   {
//     id: 'morality',
//     title: 'নৈতিকতা ও চরিত্র',
//     description: 'হিংসা, অহংকার বর্জন করে উত্তম চরিত্র গঠন এবং আত্মশুদ্ধি অর্জনের উপায়।',
//     icon: <FaBookOpen />,
//     count: '50টি হাদিস',
//     color: 'from-violet-500 to-purple-600',
//     href: '/others/morality'
//   },
//    {
//     id: 'fitna',
//     title: 'ফিতনা',
//     description: 'ফিতনার সম্পর্কে কুরআন ও সুন্নাহর আলোচনা এবং এর প্রতিরোধের উপায়।',
//     icon: <FaBookOpen />,
//     count: '30টি হাদিস',
//     color: 'from-violet-500 to-purple-600',
//     href: '/others/fitna'
//   },
// ];

async function CategoriesPage() {
    await connectDB();
  
  // ডাটাবেস থেকে সব ক্যাটাগরির কাউন্ট একসাথে বের করা
  const counts = await Other.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } }
  ]);

  // কাউন্টগুলোকে সহজ ফরম্যাটে আনা (যেমন: { 'fitna': 5, 'namaz': 10 })
  const countMap = counts.reduce((acc, curr) => {
    acc[curr._id] = curr.count;
    return acc;
  }, {});

  const categories = [
  {
    id: 'halal-haram',
    title: 'হালাল ও হারাম',
    description: 'দৈনন্দিন জীবন, খাদ্য, উপার্জন এবং বর্জনীয় বিষয়সমূহের স্পষ্ট ইসলামিক দিকনির্দেশনা।',
    icon: <FaUtensils />,
    color: 'from-emerald-500 to-teal-600',
    href: '/others/halal-haram'
  },
  {
    id: 'quranic-laws',
    title: 'কুরআনিক বিধান ও শাস্তি',
    description: 'পবিত্র কুরআনে বর্ণিত বিভিন্ন অপরাধের ঐশ্বরিক শাস্তি, ন্যায়বিচার ও আইনি বিধানসমূহ।',
    icon: <FaGavel />,
    color: 'from-amber-500 to-orange-600',
    href: '/others/quranic-laws'
  },
  {
    id: 'hudud',
    title: 'হুদুদ ও বিচারব্যবস্থা',
    description: 'ইসলামিক শরিয়তের নির্ধারিত সীমানা (হুদুদ), তা’যীর এবং ইসলামী দণ্ডবিধির আলোচনা।',
    icon: <FaBalanceScale />,
    color: 'from-red-500 to-rose-600',
    href: '/others/hudud'
  },
  {
    id: 'social-life',
    title: 'পারিবারিক জীবন',
    description: 'বিয়ে, তালাক, উত্তরাধিকার এবং পিতা-মাতা ও সন্তানের পারস্পরিক অধিকার ও কর্তব্য।',
    icon: <FaUsers />,
    color: 'from-blue-500 to-indigo-600',
    href: '/others/social-life'
  },
  {
    id: 'business',
    title: 'ব্যবসা ও লেনদেন',
    description: 'সুদমুক্ত অর্থনীতি, ক্রয়-বিক্রয়ের সঠিক নিয়ম এবং ব্যবসায়িক সততার ইসলামিক নীতিমালা।',
    icon: <FaHandshake />,
    color: 'from-cyan-500 to-blue-600',
    href: '/others/business'
  },
  {
    id: 'morality',
    title: 'নৈতিকতা ও চরিত্র',
    description: 'হিংসা, অহংকার বর্জন করে উত্তম চরিত্র গঠন এবং আত্মশুদ্ধি অর্জনের উপায়।',
    icon: <FaBookOpen />,
    color: 'from-violet-500 to-purple-600',
    href: '/others/morality'
  },
   {
    id: 'fitna',
    title: 'ফিতনা',
    description: 'ফিতনার সম্পর্কে কুরআন ও সুন্নাহর আলোচনা এবং এর প্রতিরোধের উপায়।',
    icon: <FaBookOpen />,
    color: 'from-violet-500 to-purple-600',
    href: '/others/fitna'
  },
];

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/30 py-20 px-4 overflow-hidden"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      {/* Decorative Modern Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-emerald-200/15 rounded-full filter blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-amber-100/20 rounded-full filter blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-800 uppercase bg-amber-50 px-5 py-2.5 rounded-full border border-amber-200/50 shadow-sm inline-block">
            Explore Topics
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#032513] tracking-wide">
            বিষয়ভিত্তিক ইসলামি নির্দেশিকা
          </h1>
          <p className="text-slate-800 text-base md:text-lg font-bold max-w-xl mx-auto leading-relaxed">
            কুরআন ও সুন্নাহর আলোতে জীবনের প্রতিটি প্রয়োজনীয় বিষয়ের সঠিক সমাধান ও ব্যাখ্যা এক নজরে দেখে নিন।
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Categories Stylish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.href}
              className="group relative bg-white border border-emerald-100/70 p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(4,36,20,0.02)] hover:shadow-[0_25px_60px_rgba(4,36,20,0.07)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Decorative Hover Background Line */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Top Row: Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl flex items-center justify-center text-xl group-hover:bg-[#042414] group-hover:text-amber-400 group-hover:border-[#042414] transition-all duration-300">
                    {category.icon}
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/50">
                    {countMap[category.id] || 0} টি বিষয়
                  </span>
                </div>

                {/* Title & Description (High Contrast Dark) */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-black text-[#032513] group-hover:text-amber-600 transition-colors duration-200">
                    {category.title}
                  </h2>
                  <p className="text-slate-950 text-sm font-bold leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Bottom Row: CTA link anchor */}
              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-end text-sm font-black text-slate-900 group-hover:text-[#042414] transition-colors">
                <span className="flex items-center gap-1.5 group-hover:mr-1 transition-all">
                  বিস্তারিত দেখুন 
                  <FaChevronRight className="text-[10px] text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CategoriesPage;