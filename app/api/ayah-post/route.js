import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Ayah from "@/models/ayah";

export async function POST(request) {
  try {
    // ১. ফ্রন্টএন্ড থেকে পাঠানো সব ডেটা (category, imgUrl, note সহ) এখানে রিসিভ করা হলো
    const { title, content, imgUrl, note, category } = await request.json();

    // ভ্যালিডেশন (অপশনাল কিন্তু ভালো প্র্যাকটিস): জরুরি ফিল্ডগুলো আছে কি না চেক করা
    if (!title || !content || !category) {
      return NextResponse.json({ message: "শিরোনাম, কন্টেন্ট এবং ক্যাটাগরি দেওয়া বাধ্যতামূলক" }, { status: 400 });
    }

    await connectDB();

    // ২. মডেলে নতুন সব ফিল্ড পাস করে দেওয়া হলো
    const newAyah = new Ayah({ 
      title, 
      content, 
      imgUrl, 
      note, 
      category 
    });

    await newAyah.save();
    return NextResponse.json({ message: "Ayah saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error saving Ayah:", error);
    return NextResponse.json({ message: "Failed to save Ayah", error: error.message }, { status: 500 });
  }
}