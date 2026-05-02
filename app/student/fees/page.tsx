"use client";

import React from "react";
import { CreditCard, DollarSign, Download, History, AlertCircle, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const feeSummary = [
  { label: "Total Payable", value: "৳45,000", sub: "Spring 2026", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Paid Amount", value: "৳30,000", sub: "Paid on 15 Feb", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Due Balance", value: "৳15,000", sub: "Due on 15 May", color: "text-red-600", bg: "bg-red-50" },
  { label: "Waivers", value: "৳5,000", sub: "Merit Scholarship", color: "text-purple-600", bg: "bg-purple-50" },
];

const transactionHistory = [
  { id: "#TX-90123", type: "Semester Fee", method: "bKash", date: "15 Feb 2026", amount: "৳20,000", status: "Completed" },
  { id: "#TX-88231", type: "Exam Fee", method: "Credit Card", date: "10 Feb 2026", amount: "৳5,000", status: "Completed" },
  { id: "#TX-87112", type: "Library Fine", method: "Bank Transfer", date: "05 Feb 2026", amount: "৳500", status: "Completed" },
  { id: "#TX-86001", type: "Semester Fee", method: "bKash", date: "01 Feb 2026", amount: "৳4,500", status: "Completed" },
];

const upcomingFees = [
  { type: "Semester Fee (Installment 2)", amount: "৳10,000", deadline: "15 May 2026", urgent: true },
  { type: "Lab Maintenance Fee", amount: "৳3,000", deadline: "20 May 2026", urgent: false },
  { type: "Library Membership", amount: "৳2,000", deadline: "30 May 2026", urgent: false },
];

export default function FeesPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Fees & Payments</h1>
          <p className="text-gray-500 mt-1">Manage your academic financial records and make secure payments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Fee Structure
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <CreditCard size={18} />
            Pay Now
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feeSummary.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:border-primary/20 transition-all"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className={cn("text-2xl font-black mb-2", stat.color)}>{stat.value}</h3>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-gray-500">{stat.sub}</span>
              <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", stat.bg)}>
                <ArrowUpRight size={14} className={stat.color} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Methods / Promotions */}
          <div className="bg-gradient-to-br from-[#0F2E5D] to-[#2E5E9F] rounded-[2rem] p-8 text-white relative overflow-hidden group">
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                   <h2 className="text-3xl font-black mb-4">Pay securely with <span className="text-secondary">NextPay</span></h2>
                   <p className="text-blue-100 text-sm mb-8 opacity-80">Enjoy up to 5% cashback on early semester fee payments using our integrated payment gateway.</p>
                   <div className="flex flex-wrap gap-4">
                      {['bKash', 'Nagad', 'Visa', 'MasterCard'].map(p => (
                        <span key={p} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold backdrop-blur-sm">
                          {p}
                        </span>
                      ))}
                   </div>
                </div>
                <div className="hidden md:flex justify-center">
                   <div className="w-48 h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 relative shadow-2xl">
                      <div className="w-10 h-10 bg-secondary rounded-lg mb-4"></div>
                      <div className="h-2 w-full bg-white/20 rounded mb-2"></div>
                      <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/5 rounded-full blur-xl"></div>
                   </div>
                </div>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
                <CreditCard size={200} />
             </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                 <History size={20} className="text-primary" />
                 Payment History
               </h2>
               <button className="text-sm font-bold text-primary hover:underline">View All</button>
             </div>
             <div className="overflow-x-auto no-scrollbar">
               <table className="w-full">
                 <thead>
                   <tr className="border-b border-gray-50">
                     <th className="text-left py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transaction ID</th>
                     <th className="text-left py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</th>
                     <th className="text-left py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                     <th className="text-left py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Amount</th>
                     <th className="text-right py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50">
                   {transactionHistory.map((tx, i) => (
                     <tr key={i} className="group hover:bg-gray-50 transition-colors">
                       <td className="py-5 font-medium text-xs text-gray-600">{tx.id}</td>
                       <td className="py-5">
                          <p className="font-bold text-xs text-gray-900">{tx.type}</p>
                          <p className="text-[10px] text-gray-400">{tx.method}</p>
                       </td>
                       <td className="py-5 text-xs text-gray-500 font-medium">{tx.date}</td>
                       <td className="py-5 font-black text-xs text-primary">{tx.amount}</td>
                       <td className="py-5 text-right">
                          <span className="text-[9px] font-black uppercase px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg">
                            {tx.status}
                          </span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Upcoming Dues */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
             <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Dues</h2>
             <div className="space-y-4">
                {upcomingFees.map((fee, i) => (
                  <div key={i} className={cn(
                    "p-5 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer",
                    fee.urgent ? "bg-red-50 border-red-100" : "bg-gray-50 border-gray-100"
                  )}>
                    <div className="flex justify-between items-start mb-4">
                       <div className={cn(
                         "p-2 rounded-xl bg-white shadow-sm",
                         fee.urgent ? "text-red-600" : "text-gray-400"
                       )}>
                         {fee.urgent ? <AlertCircle size={20} /> : <CreditCard size={20} />}
                       </div>
                       <span className={cn(
                         "text-[9px] font-black uppercase px-2 py-1 rounded-lg",
                         fee.urgent ? "bg-red-100 text-red-700" : "bg-white text-gray-500"
                       )}>
                         {fee.urgent ? "Urgent" : "Regular"}
                       </span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{fee.type}</h4>
                    <p className="text-lg font-black text-primary mb-4">{fee.amount}</p>
                    <div className="flex items-center justify-between text-[10px] font-bold">
                       <span className="text-gray-400">Deadline: {fee.deadline}</span>
                       <button className="text-primary hover:underline flex items-center gap-1">
                          Pay <ChevronRight size={12} />
                       </button>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Make Bulk Payment
             </button>
          </div>

          {/* Need help? */}
          <div className="bg-secondary p-8 rounded-[2rem] text-primary relative overflow-hidden group">
             <h3 className="text-xl font-black mb-2">Payment Issues?</h3>
             <p className="text-sm font-medium opacity-80 mb-6">If you're facing any problems with payments or need a waiver application, contact our accounts department.</p>
             <button className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-[#0A1F3D] transition-colors">
                Contact Accounts
             </button>
             <div className="absolute -bottom-4 -right-4 p-8 opacity-10 rotate-12 group-hover:scale-125 transition-transform duration-700">
                <DollarSign size={100} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
