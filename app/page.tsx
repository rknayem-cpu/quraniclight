'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen font-['Kalpurush'] bg-[#f8fafc] text-slate-900 selection:bg-emerald-200">
      
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-200/40 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-amber-100/50 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            কুরআনের আলোয় আলোকিত জীবন
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 mb-8 leading-[1.1]">
            আপনার আত্মার জন্য <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">প্রশান্তির আশ্রয়স্থল</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Quranic Light-এ আমরা আপনাকে দিচ্ছি আধ্যাত্মিক রিমাইন্ডার, পবিত্র আয়াত এবং দৈনন্দিন যিকিরের এক আধুনিক ডিজিটাল প্ল্যাটফর্ম।
          </p>

          <button className="group relative px-8 py-4 bg-slate-900 rounded-2xl text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20">
            ইসলামকে জানুন
          </button>
        </div>
      </section>

      {/* Featured Verses Section - Glassmorphism Card */}
      <section className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { ayat: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", trans: "নিশ্চয়ই কষ্টের সাথেই স্বস্তি আছে।", ref: "সূরা ইনশিরাহ ৯৪:৫" },
            { ayat: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", trans: "জেনে রেখো, আল্লাহর স্মরণেই কেবল হৃদয় প্রশান্ত হয়।", ref: "সূরা রা'দ ১৩:২৮" }
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-white shadow-2xl shadow-emerald-900/5 transition-all hover:shadow-emerald-900/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl">☪</div>
              <p className="text-3xl font-bold text-emerald-950 mb-6 font-serif">{item.ayat}</p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">{item.trans}</p>
              <p className="text-sm text-emerald-600 font-medium tracking-widest uppercase">{item.ref}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "✨", title: "দৈনিক প্রেরণা", link: "/daily" },
            { icon: "📖", title: "কোরআন এর বিধান শিক্ষা", link: "/ayah" },
            { icon: "🤲", title: "মাসনুন দোয়া", link: "/ayah/duwa" }
          ].map((item, i) => (
            <div key={i} onClick={()=>router.push(`${item.link}`)} className="p-8 cursor-pointer rounded-[2rem] bg-white border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">এখনই আপনার আধ্যাত্মিক যাত্রা শুরু করুন</h2>
        <Link href="/others" className="text-emerald-700 font-semibold border-b-2 border-emerald-700
         pb-1 hover:text-emerald-900">আরও জানুন →</Link>
      </section>
    </main>
  )
}