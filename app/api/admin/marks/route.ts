import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Mark from "@/models/Mark";
import Student from "@/models/Student";
import Class from "@/models/Class";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const classId = searchParams.get("classId");
    const studentId = searchParams.get("studentId");
    const examType = searchParams.get("examType");

    let query: any = {};
    if (classId) query.classId = classId;
    if (studentId) query.studentId = studentId;
    if (examType) query.examType = examType;

    const marks = await Mark.find(query)
      .populate("studentId", "name studentId")
      .populate("classId", "name code")
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json(marks);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Check if it's a bulk upload (array) or single entry
    if (Array.isArray(body)) {
      const marks = await Mark.insertMany(body);
      return NextResponse.json(marks, { status: 201 });
    } else {
      const mark = await Mark.create(body);
      return NextResponse.json(mark, { status: 201 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
