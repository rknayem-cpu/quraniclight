import { NextResponse } from "next/server";
import Other from "@/models/other";
// আপনার প্রোজেক্টের ডাটাবেস কানেকশন ফাইলটি এখানে ইমপোর্ট করুন
// (নিচে একটি স্ট্যান্ডার্ড কানেকশন ফাংশন কমেন্ট আকারে দেওয়া হলো যদি আপনার না থাকে)
import { connectDB } from "@/lib/db";

// ১. নতুন পোস্ট তৈরি করার হ্যান্ডলার (POST Request)
export async function POST(request) {
  try {
    // ডাটাবেস কানেক্ট করা হচ্ছে
    await connectDB();

    // ফ্রন্টএন্ড থেকে পাঠানো বডি রিড করা হচ্ছে
    const body = await request.json();
    const { title, imgUrl, content, note, category } = body;

    // ভ্যালিডেশন চেক (প্রয়োজনীয় ফিল্ড ফাঁকা আছে কি না)
    if (!title || !content || !category) {
      return NextResponse.json(
        { success: false, message: "শিরোনাম, মূল কন্টেন্ট এবং ক্যাটাগরি আবশ্যিক।" },
        { status: 400 }
      );
    }

    // ডাটাবেসে নতুন রেকর্ড তৈরি
    const newPost = await Other.create({
      title,
      imgUrl,
      content,
      note,
      category,
    });

    return NextResponse.json(
      { success: true, message: "তথ্যটি সফলভাবে সংরক্ষিত হয়েছে। আলহামদুলিল্লাহ!", data: newPost },
      { status: 201 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "সার্ভারে কোনো সমস্যা হয়েছে।", error: error.message },
      { status: 500 }
    );
  }
}

// ২. ডাটাবেস থেকে সব পোস্ট বা ক্যাটাগরি ওয়াইজ পোস্ট রিটার্ন করার হ্যান্ডলার (GET Request)
export async function GET(request) {
  try {
    await connectDB();
    
    // ইউআরএল থেকে ক্যাটাগরি কোয়েরি ফিল্টার নেওয়া (ঐচ্ছিক - যেমন: /api/other-post?category=hudud)
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let query = {};
    if (category) {
      query.category = category;
    }

    // সর্বশেষ পোস্টগুলো আগে দেখানোর জন্য sort করা হলো
    const posts = await Other.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: posts }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "ডাটা লোড করতে সমস্যা হয়েছে।" },
      { status: 500 }
    );
  }
}