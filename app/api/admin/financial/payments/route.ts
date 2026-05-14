import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Fee from "@/models/Fee";
import Student from "@/models/Student";
import FeeHead from "@/models/FeeHead";

export async function GET() {
  try {
    await dbConnect();

    // Fetch paid and failed fees (transactions)
    const transactions = await Fee.find({ 
      status: { $in: ["Paid", "Failed", "Pending"] } 
    })
    .populate("studentId", "name studentId")
    .populate({ path: "feeHeadId", select: "name", strictPopulate: false })
    .sort({ updatedAt: -1 });

    const now = new Date();
    const startOfToday = new Date(now.setHours(0, 0, 0, 0));

    // Calculate stats
    const todayCollection = transactions
      .filter((t: any) => t.status === "Paid" && new Date(t.updatedAt) >= startOfToday)
      .reduce((acc: number, t: any) => acc + t.amount, 0);

    const totalTransactions = transactions.length;
    const pendingVerification = transactions.filter((t: any) => t.status === "Pending").length;

    const stats = [
      { label: "Today's Collection", value: `৳ ${todayCollection.toLocaleString()}`, icon: "DollarSign", color: "bg-emerald-500" },
      { label: "Total Transactions", value: totalTransactions.toLocaleString(), icon: "Zap", color: "bg-blue-500" },
      { label: "Pending Verification", value: pendingVerification.toLocaleString(), icon: "Clock", color: "bg-amber-500" },
      { label: "Refund Requests", value: "0", icon: "RefreshCcw", color: "bg-red-500" },
    ];

    // Method Breakdown
    const methodCounts: { [key: string]: number } = {};
    let totalPaid = 0;
    transactions.forEach((t: any) => {
      if (t.status === "Paid") {
        const method = t.paymentMethod || "Bank Transfer";
        methodCounts[method] = (methodCounts[method] || 0) + 1;
        totalPaid++;
      }
    });

    const methodBreakdown = Object.keys(methodCounts).map(name => ({
      name,
      value: totalPaid > 0 ? Math.round((methodCounts[name] / totalPaid) * 100) : 0,
      color: name.includes("MFS") || name.includes("bKash") ? "bg-primary" : "bg-blue-500"
    })).sort((a, b) => b.value - a.value);

    return NextResponse.json({
      payments: transactions.map((t: any) => ({
        id: t.transactionId || `TXN-${t._id.toString().slice(-5).toUpperCase()}`,
        student: t.studentId?.name || "Unknown",
        amount: t.amount.toLocaleString(),
        method: t.paymentMethod || "Bank Transfer",
        date: new Date(t.updatedAt).toLocaleString('en-US', { 
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', hour12: true 
        }),
        status: t.status === "Paid" ? "Success" : t.status,
        type: t.feeHeadId?.name || "Fee"
      })),
      stats,
      methodBreakdown
    });
  } catch (error: any) {
    console.error("Payments API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
