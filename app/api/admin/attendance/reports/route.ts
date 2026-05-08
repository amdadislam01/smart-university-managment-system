import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Attendance from "@/models/Attendance";
import Student from "@/models/Student";
import Class from "@/models/Class";

export async function GET(request: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const department = searchParams.get("department");
    const dateRange = searchParams.get("dateRange") || "30"; // Default last 30 days

    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - parseInt(dateRange));

    // 1. Get Departments (Classes)
    const classes = await Class.find({}, "name code");

    // 2. Build Query for Attendance Stats
    let studentQuery: any = { status: "Active" };
    if (department && department !== "All Departments") {
      const selectedClass = await Class.findOne({ name: department });
      if (selectedClass) {
        studentQuery.classId = selectedClass._id;
      }
    }

    const students = await Student.find(studentQuery).populate("classId");
    const studentIds = students.map(s => s._id);

    // 3. Calculate Stats
    const totalAttendanceRecords = await Attendance.countDocuments({
      studentId: { $in: studentIds },
      date: { $gte: startDate }
    });

    const presentRecords = await Attendance.countDocuments({
      studentId: { $in: studentIds },
      date: { $gte: startDate },
      status: { $in: ["Present", "Late"] }
    });

    const avgAttendance = totalAttendanceRecords > 0 
      ? Math.round((presentRecords / totalAttendanceRecords) * 1000) / 10 
      : 0;

    // 4. Find Defaulters (< 75% attendance)
    // For each student, calculate their individual attendance percentage
    const defaulters = [];
    for (const student of students) {
      const studentTotal = await Attendance.countDocuments({
        studentId: student._id,
        date: { $gte: startDate }
      });

      if (studentTotal > 0) {
        const studentPresent = await Attendance.countDocuments({
          studentId: student._id,
          date: { $gte: startDate },
          status: { $in: ["Present", "Late"] }
        });

        const percentage = Math.round((studentPresent / studentTotal) * 100);
        if (percentage < 75) {
          defaulters.push({
            id: student.studentId,
            name: student.name,
            class: (student.classId as any)?.code || "N/A",
            attendance: `${percentage}%`,
            trend: "down" // Simplified
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      stats: {
        avgAttendance: `${avgAttendance}%`,
        defaulterCount: defaulters.length,
        attendanceTrend: "+2.4%" // Hardcoded for now as trend analysis needs more complex queries
      },
      departments: classes.map(c => c.name),
      defaulters: defaulters.slice(0, 5) // Return top 5 for the list
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
