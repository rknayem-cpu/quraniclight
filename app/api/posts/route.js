import { connectDB } from "@/lib/db";
import Ayah from "@/models/ayah";
import { NextResponse } from "next/server";



// সব পোস্ট পাওয়ার জন্য (GET) - প্রয়োজনে app/api/posts/route.js এ রাখুন
export async function GET() {
  await connectDB();
  const posts = await Ayah.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}