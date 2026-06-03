import mongoose from "mongoose";

const AyahSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  imgUrl: { 
    type: String, 
    trim: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  note: { 
    type: String 
  },
  category: { 
    type: String, 
    // ফ্রন্টএন্ড ফর্ম থেকে পাঠানো ভ্যালুগুলোর সাথে মিল রেখে enum আপডেট করা হলো
    enum: ['iman', 'namaz', 'zakat', 'roza', 'hajj', 'quran', 'hadith', 'duwa'], 
    default: 'iman' // ফর্মের ডিফল্ট ভ্যালুর সাথে মিল রেখে 'iman' সেট করা হলো
  },
}, { timestamps: true });

// Next.js এর হট-রিলোডিংয়ের জন্য চেক করা হচ্ছে মডেলটি আগে থেকে আছে কি না
const Ayah = mongoose.models.Ayah || mongoose.model("Ayah", AyahSchema);

export default Ayah;