"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaMosque, FaBars, FaTimes, FaHeart } from 'react-icons/fa';

const navLinks = [
  { name: 'হোম', href: '/' },
  { name: 'কোরানিক বিধান', href: '/ayah' },
  { name: 'দৈনিক আয়াত', href: '/daily-ayat' },
  //{ name: 'হাদিস', href: '/hadith' },
  { name: 'দোয়া', href: '/ayah/duwa' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
const router = useRouter();
  return (
    <nav 
      className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-emerald-100/60 z-50 shadow-[0_2px_20px_rgba(4,36,20,0.02)]"
      style={{ fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center text-xl text-amber-600 border border-amber-200/50 group-hover:bg-[#042414] group-hover:text-amber-400 transition-all duration-300">
              <FaMosque />
            </div>
            <span className="text-2xl font-black text-[#032513] tracking-wide">
              কোরানের আলো
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-bold transition-all duration-300 relative py-2 ${
                    isActive 
                      ? 'text-amber-600' 
                      : 'text-slate-900 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                  {/* Active Bottom Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:block">
            <button onClick={()=>router.push('/help')} className="flex items-center gap-2 bg-[#042414] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-950 transition-all active:scale-95 shadow-sm">
              <FaHeart className="text-amber-400" />
              <span>সহযোগিতা</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-900 text-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all active:scale-95"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* Smooth Mobile Menu Dropdown */}
      <div 
        className={`md:hidden bg-white/95 backdrop-blur-lg border-b border-emerald-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-[450px] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-amber-50 text-amber-700 border-l-4 border-amber-500' 
                    : 'text-slate-900 hover:bg-slate-50 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-4">
            <button onClick={()=>router.push('/help')} className="w-full flex items-center justify-center gap-2 bg-[#042414] text-white py-3 rounded-xl font-bold text-base shadow-md hover:bg-emerald-950 transition-all active:scale-95">
              <FaHeart className="text-amber-400" />
              <span>সহযোগিতা</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;