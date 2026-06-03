import Link from 'next/link';
import { 
  FilePlus,        // Add Post
  FolderPlus,      // Add Sub-Post
  Edit3,           // Edit
  Trash2,          // Delete
  LayoutDashboard, 
  Settings ,
  LogOut
} from 'lucide-react';

const adminActions = [
  { 
    name: 'নতুন পোস্ট যোগ', 
    href: '/ayah-post', 
    icon: <FilePlus className="w-6 h-6" />, 
    desc: 'মূল ক্যাটাগরিতে নতুন আর্টিকেল যোগ করুন' 
  },
  { 
    name: 'সাব-পোস্ট যোগ', 
    href: '/other-post', 
    icon: <FolderPlus className="w-6 h-6" />, 
    desc: 'নির্দিষ্ট পোস্টের ভেতরে সাব-কন্টেন্ট যোগ করুন' 
  },
  { 
    name: 'পোস্ট দেখুন ও সম্পাদনা', 
    href: '/admin/posts', 
    icon: <Edit3 className="w-6 h-6" />, 
    desc: 'বিদ্যমান পোস্টগুলোর ভুল সংশোধন বা আপডেট' 
  },
  { 
    name: 'সাব পোস্ট দেখুন ও সম্পাদনা', 
    href: '/admin/sub-posts', 
    icon: <Edit3 className="w-6 h-6" />, 
    desc: 'বিদ্যমান সাব-পোস্টগুলোর ভুল সংশোধন বা আপডেট' 
  },
  { 
    name: 'লগআউট', 
    href: '/admin/logout', 
    icon: <LogOut className="w-6 h-6" />, 
    desc: 'অ্যাডমিন সেশন শেষ করুন' 
  }
];

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-black mb-8 text-slate-900">অ্যাডমিন কন্ট্রোল প্যানেল</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminActions.map((action) => (
          <Link 
            key={action.name}
            href={action.href}
            className="flex items-start p-6 bg-white border border-slate-200 rounded-3xl hover:border-emerald-500 hover:shadow-lg transition-all"
          >
            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl mr-5">
              {action.icon}
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">{action.name}</h2>
              <p className="text-slate-500 font-bold text-sm mt-1">{action.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}