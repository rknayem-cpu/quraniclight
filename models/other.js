import mongoose from "mongoose";

const OtherSchema = new mongoose.Schema({
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
    // শুধু other-post পেজের নির্দিষ্ট ক্যাটাগরিগুলো এখানে এনুম (enum) করা হয়েছে
    enum: ['halal-haram', 'quranic-laws', 'hudud', 'social-life', 'business', 'morality','fitna'], 
    default: 'halal-haram' // ফর্মের প্রথম ভ্যালুর সাথে মিল রেখে ডিফল্ট সেট করা হলো
  },
}, { timestamps: true });

// Next.js এর হট-রিলোডিং ট্র্যাকিং (আগে তৈরি থাকলে সেটিই ব্যবহার করবে, নয়তো নতুন মডেল বানাবে)
const Other = mongoose.models.Other || mongoose.model("Other", OtherSchema);

export default Other;