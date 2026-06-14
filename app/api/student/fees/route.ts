import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import dbConnect from "@/lib/db";
import Student from "@/models/Student";
import Class from "@/models/Class";
import Fee from "@/models/Fee";
import FeeHead from "@/models/FeeHead";
import Waiver from "@/models/Waiver";
import Fine from "@/models/Fine";

export async function GET() {
  try {
    await dbConnect();
    const cookieStore = await cookies();
    const studentSession = cookieStore.get("student_session")?.value;

    if (!studentSession) {
      return NextResponse.json({ error: "Unauthorized: No active session" }, { status: 401 });
    }

    // Find the student document without populate
    const student = await Student.findOne({ studentId: studentSession }).lean();
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    // Manually fetch class info
    let classDoc: any = null;
    if (student.classId) {
      classDoc = await Class.findById(student.classId).lean();
    }

    const studentIdQuery = { $in: [student._id, student._id.toString()] };
    const deptCode = classDoc?.code || "CSE";
    const deptName = classDoc?.name || "Computer Science & Engineering";

    // Query fee records without populate
    const dbFeesRaw = await Fee.find({ studentId: studentIdQuery })
      .sort({ dueDate: -1 })
      .lean();

    // Manually populate feeHeadId for each fee
    const dbFees: any[] = [];
    for (const fee of dbFeesRaw) {
      let feeHeadDoc: any = null;
      if (fee.feeHeadId) {
        feeHeadDoc = await FeeHead.findById(fee.feeHeadId).lean();
      }
      dbFees.push({
        ...fee,
        feeHeadId: feeHeadDoc,
      });
    }

    const dbWaivers = await Waiver.find({ studentId: studentIdQuery })
      .sort({ createdAt: -1 })
      .lean();

    const dbFines = await Fine.find({ studentId: studentIdQuery })
      .sort({ createdAt: -1 })
      .lean();

    // Check if we have real fees in the database. If not, use realistic mock fallbacks
    if (dbFees.length > 0 || dbFines.length > 0 || dbWaivers.length > 0) {
      // 1. Calculate Summary Stats
      const paidFeesAmount = dbFees
        .filter((f: any) => f.status === "Paid")
        .reduce((sum: number, f: any) => sum + f.amount, 0);

      const paidFinesAmount = dbFines
        .filter((f: any) => f.status === "Paid")
        .reduce((sum: number, f: any) => sum + f.amount, 0);

      const paidAmount = paidFeesAmount + paidFinesAmount;

      const dueFeesAmount = dbFees
        .filter((f: any) => f.status === "Pending" || f.status === "Unpaid")
        .reduce((sum: number, f: any) => sum + f.amount, 0);

      const dueFinesAmount = dbFines
        .filter((f: any) => f.status === "Unpaid" || f.status === "Processing")
        .reduce((sum: number, f: any) => sum + f.amount, 0);

      const dueBalance = dueFeesAmount + dueFinesAmount;

      const waiversAmount = dbWaivers.reduce((sum: number, w: any) => sum + w.amount, 0);
      const totalPayable = paidAmount + dueBalance;

      // 2. Transaction History
      const transactionHistory: any[] = [];
      dbFees
        .filter((f: any) => f.status === "Paid")
        .forEach((fee: any) => {
          transactionHistory.push({
            id: fee.transactionId || `#TX-${fee._id.toString().slice(-5).toUpperCase()}`,
            type: fee.feeHeadId?.name || "Semester Fee",
            method: fee.paymentMethod || "bKash",
            date: fee.paidDate
              ? new Date(fee.paidDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
              : new Date(fee.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
            amount: `৳${fee.amount.toLocaleString()}`,
            status: "Completed",
          });
        });

      dbFines
        .filter((f: any) => f.status === "Paid")
        .forEach((fine: any) => {
          transactionHistory.push({
            id: fine.fineId || `#FN-${fine._id.toString().slice(-5).toUpperCase()}`,
            type: `${fine.type} Fine`,
            method: "Bank Transfer",
            date: new Date(fine.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
            amount: `৳${fine.amount.toLocaleString()}`,
            status: "Completed",
          });
        });

      // Sort transaction history by date descending
      transactionHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      // 3. Upcoming Dues
      const upcomingFees: any[] = [];
      const today = new Date();

      dbFees
        .filter((f: any) => f.status === "Pending" || f.status === "Unpaid")
        .forEach((fee: any) => {
          const dueDate = new Date(fee.dueDate);
          const diffTime = dueDate.getTime() - today.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const urgent = diffDays <= 7;

          upcomingFees.push({
            id: fee._id.toString(),
            type: fee.feeHeadId?.name || "Semester Fee",
            amount: `৳${fee.amount.toLocaleString()}`,
            deadline: dueDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
            urgent,
            rawAmount: fee.amount,
            itemType: "fee",
          });
        });

      dbFines
        .filter((f: any) => f.status === "Unpaid" || f.status === "Processing")
        .forEach((fine: any) => {
          const fineDate = new Date(fine.date || fine.createdAt || today);
          const dueDate = new Date(fineDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after issue date
          const diffTime = dueDate.getTime() - today.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const urgent = diffDays <= 3; // fines become urgent faster

          upcomingFees.push({
            id: fine._id.toString(),
            type: `${fine.type} Fine`,
            amount: `৳${fine.amount.toLocaleString()}`,
            deadline: dueDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
            urgent,
            rawAmount: fine.amount,
            itemType: "fine",
          });
        });

      // Sort upcoming fees by deadline ascending
      upcomingFees.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());

      // Get primary waiver text
      const primaryWaiverType = dbWaivers[0]?.type || "Academic Scholarship";

      const feeSummary = [
        { label: "Total Payable", value: `৳${totalPayable.toLocaleString()}`, sub: "Academic Year 2026", color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Paid Amount", value: `৳${paidAmount.toLocaleString()}`, sub: transactionHistory[0] ? `Last payment: ${transactionHistory[0].date}` : "No payments made", color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Due Balance", value: `৳${dueBalance.toLocaleString()}`, sub: upcomingFees[0] ? `Next due: ${upcomingFees[0].deadline}` : "No upcoming dues", color: "text-red-600", bg: "bg-red-50" },
        { label: "Waivers", value: `৳${waiversAmount.toLocaleString()}`, sub: primaryWaiverType, color: "text-purple-600", bg: "bg-purple-50" },
      ];

      return NextResponse.json({
        success: true,
        student: {
          name: student.name,
          studentId: student.studentId,
          deptCode,
          deptName,
        },
        feeSummary,
        transactionHistory,
        upcomingFees,
      });
    }

    // 4. Default Fallbacks if no database fee records exist
    let feeSummaryFallback = [];
    let transactionHistoryFallback = [];
    let upcomingFeesFallback = [];

    if (deptCode === "EEE") {
      feeSummaryFallback = [
        { label: "Total Payable", value: "৳52,000", sub: "Spring 2026", color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Paid Amount", value: "৳35,000", sub: "Paid on 12 Feb", color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Due Balance", value: "৳17,000", sub: "Due on 15 May", color: "text-red-600", bg: "bg-red-50" },
        { label: "Waivers", value: "৳8,000", sub: "Freedom Fighter quota", color: "text-purple-600", bg: "bg-purple-50" },
      ];
      transactionHistoryFallback = [
        { id: "#TX-70123", type: "Semester Fee", method: "Nagad", date: "12 Feb 2026", amount: "৳25,000", status: "Completed" },
        { id: "#TX-68231", type: "Lab Fee", method: "Credit Card", date: "08 Feb 2026", amount: "৳6,000", status: "Completed" },
        { id: "#TX-67112", type: "Late Registration Fine", method: "bKash", date: "03 Feb 2026", amount: "৳1,000", status: "Completed" },
        { id: "#TX-66001", type: "Semester Fee", method: "Nagad", date: "01 Feb 2026", amount: "৳3,000", status: "Completed" },
      ];
      upcomingFeesFallback = [
        { id: "mock-eee-1", type: "Semester Fee (Installment 2)", amount: "৳12,000", deadline: "15 May 2026", urgent: true, rawAmount: 12000, itemType: "fee" },
        { id: "mock-eee-2", type: "Equipment Fee", amount: "৳3,000", deadline: "25 May 2026", urgent: false, rawAmount: 3000, itemType: "fee" },
        { id: "mock-eee-3", type: "IEEE Student Membership", amount: "৳2,000", deadline: "05 Jun 2026", urgent: false, rawAmount: 2000, itemType: "fee" },
      ];
    } else if (deptCode === "BBA") {
      feeSummaryFallback = [
        { label: "Total Payable", value: "৳40,000", sub: "Spring 2026", color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Paid Amount", value: "৳28,000", sub: "Paid on 14 Feb", color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Due Balance", value: "৳12,000", sub: "Due on 15 May", color: "text-red-600", bg: "bg-red-50" },
        { label: "Waivers", value: "৳4,000", sub: "Sibling Waiver", color: "text-purple-600", bg: "bg-purple-50" },
      ];
      transactionHistoryFallback = [
        { id: "#TX-50123", type: "Semester Fee", method: "bKash", date: "14 Feb 2026", amount: "৳18,000", status: "Completed" },
        { id: "#TX-48231", type: "Club Fee", method: "Nagad", date: "09 Feb 2026", amount: "৳4,000", status: "Completed" },
        { id: "#TX-47112", type: "Library Fine", method: "Bank Transfer", date: "04 Feb 2026", amount: "৳1,500", status: "Completed" },
        { id: "#TX-46001", type: "Semester Fee", method: "bKash", date: "01 Feb 2026", amount: "৳4,500", status: "Completed" },
      ];
      upcomingFeesFallback = [
        { id: "mock-bba-1", type: "Semester Fee (Installment 2)", amount: "৳8,000", deadline: "15 May 2026", urgent: true, rawAmount: 8000, itemType: "fee" },
        { id: "mock-bba-2", type: "Seminar Fee", amount: "৳2,500", deadline: "22 May 2026", urgent: false, rawAmount: 2500, itemType: "fee" },
        { id: "mock-bba-3", type: "Business Club Membership", amount: "৳1,500", deadline: "10 Jun 2026", urgent: false, rawAmount: 1500, itemType: "fee" },
      ];
    } else {
      // Default to CSE mock fallback (which matches original page)
      feeSummaryFallback = [
        { label: "Total Payable", value: "৳45,000", sub: "Spring 2026", color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Paid Amount", value: "৳30,000", sub: "Paid on 15 Feb", color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Due Balance", value: "৳15,000", sub: "Due on 15 May", color: "text-red-600", bg: "bg-red-50" },
        { label: "Waivers", value: "৳5,000", sub: "Merit Scholarship", color: "text-purple-600", bg: "bg-purple-50" },
      ];
      transactionHistoryFallback = [
        { id: "#TX-90123", type: "Semester Fee", method: "bKash", date: "15 Feb 2026", amount: "৳20,000", status: "Completed" },
        { id: "#TX-88231", type: "Exam Fee", method: "Credit Card", date: "10 Feb 2026", amount: "৳5,000", status: "Completed" },
        { id: "#TX-87112", type: "Library Fine", method: "Bank Transfer", date: "05 Feb 2026", amount: "৳500", status: "Completed" },
        { id: "#TX-86001", type: "Semester Fee", method: "bKash", date: "01 Feb 2026", amount: "৳4,500", status: "Completed" },
      ];
      upcomingFeesFallback = [
        { id: "mock-cse-1", type: "Semester Fee (Installment 2)", amount: "৳10,000", deadline: "15 May 2026", urgent: true, rawAmount: 10000, itemType: "fee" },
        { id: "mock-cse-2", type: "Lab Maintenance Fee", amount: "৳3,000", deadline: "20 May 2026", urgent: false, rawAmount: 3000, itemType: "fee" },
        { id: "mock-cse-3", type: "Library Membership", amount: "৳2,000", deadline: "30 May 2026", urgent: false, rawAmount: 2000, itemType: "fee" },
      ];
    }

    return NextResponse.json({
      success: true,
      student: {
        name: student.name,
        studentId: student.studentId,
        deptCode,
        deptName,
      },
      feeSummary: feeSummaryFallback,
      transactionHistory: transactionHistoryFallback,
      upcomingFees: upcomingFeesFallback,
    });
  } catch (error: any) {
    console.error("Student Fees GET Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const cookieStore = await cookies();
    const studentSession = cookieStore.get("student_session")?.value;

    if (!studentSession) {
      return NextResponse.json({ error: "Unauthorized: No active session" }, { status: 401 });
    }

    const student = await Student.findOne({ studentId: studentSession }).lean();
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const { id, itemType, paymentMethod } = await request.json();
    if (!id || !itemType || !paymentMethod) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const txId = `TX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // If it's a mock ID (e.g. starts with "mock-"), simulate success immediately
    if (id.startsWith("mock-")) {
      return NextResponse.json({
        success: true,
        message: "Payment processed successfully (Mock Mode)",
        transactionId: txId,
      });
    }

    // Otherwise, process database update
    if (itemType === "fee") {
      const fee = await Fee.findById(id);
      if (!fee) {
        return NextResponse.json({ error: "Fee record not found" }, { status: 404 });
      }
      fee.status = "Paid";
      fee.paymentMethod = paymentMethod;
      fee.transactionId = txId;
      fee.paidDate = new Date();
      await fee.save();
    } else if (itemType === "fine") {
      const fine = await Fine.findById(id);
      if (!fine) {
        return NextResponse.json({ error: "Fine record not found" }, { status: 404 });
      }
      fine.status = "Paid";
      fine.date = new Date();
      await fine.save();
    } else {
      return NextResponse.json({ error: "Invalid item type" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Payment processed successfully",
      transactionId: txId,
    });
  } catch (error: any) {
    console.error("Student Fees POST Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
