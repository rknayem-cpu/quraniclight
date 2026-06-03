import { connectDB } from "@/lib/db";
import Ayah from "@/models/ayah";
import { NextResponse } from "next/server";

// পোস্টটি লোড করা
export async function GET(request, { params }) {
  await connectDB();
  const post = await Ayah.findById(params.id);
  return NextResponse.json(post);
}

export async function DELETE(request, { params }) {
  await connectDB();
  await Ayah.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Post deleted" });
}

// পোস্ট আপডেট করা
export async function PUT(request, { params }) {
  await connectDB();
  const data = await request.json();
  await Ayah.findByIdAndUpdate(params.id, data);
  return NextResponse.json({ message: "Updated" });
}