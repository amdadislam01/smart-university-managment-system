import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Parent from "@/models/Parent";
import Student from "@/models/Student"; // Ensure Student model is registered

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    const query: any = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { parentId: { $regex: search, $options: "i" } },
      ];
    }

    const parents = await Parent.find(query).populate("studentId").sort({ createdAt: -1 });
    return NextResponse.json(parents);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const parent = await Parent.create(body);
    return NextResponse.json(parent, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
