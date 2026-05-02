"use client";

import React from "react";
import { 
  CreditCard, 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  ArrowUpRight, 
  Smartphone, 
  Building, 
  MoreVertical, 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  ExternalLink,
  Calendar,
  Eye,
  RefreshCcw,
  Zap,
  PieChart
} from "lucide-react";
import { motion } from "framer-motion";

const payments = [
  { id: "TXN-77401", student: "Md. Amin Islam", amount: "65,000", method: "bKash", date: "2026-04-25 10:15 AM", status: "Success", type: "Tuition" },
  { id: "TXN-77402", student: "Sifat Rahman", amount: "72,500", method: "Bank Transfer", date: "2026-04-25 11:20 AM", status: "Success", type: "Admission" },
  { id: "TXN-77403", student: "Jarin Tasnim", amount: "2,500", method: "Nagad", date: "2026-04-25 01:45 PM", status: "Pending", type: "Library Fine" },
  { id: "TXN-77404", student: "Nabil Khan", amount: "12,000", method: "Visa Card", date: "2026-04-24 04:30 PM", status: "Success", type: "Lab Fee" },
  { id: "TXN-77405", student: "Mitu Akter", amount: "65,000", method: "bKash", date: "2026-04-24 09:12 AM", status: "Failed", type: "Tuition" },
];

const stats = [
  { label: "Today's Collection", value: "৳ 142,500", icon: DollarSign, color: "bg-emerald-500" },
  { label: "Total Transactions", value: "842", icon: Zap, color: "bg-blue-500" },
  { label: "Pending Verification", value: "18", icon: Clock, color: "bg-amber-500" },
  { label: "Refund Requests", value: "4", icon: RefreshCcw, color: "bg-red-500" },
];

export default function PaymentTracking() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Payment Tracking</h1>
          <p className="text-slate-500">Monitor real-time transactions, verify settlements and manage refunds.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Download size={18} />
            Reconciliation
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <ShieldCheck size={18} />
            Settle Pending
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white shadow-lg shadow-current/10`}>
                <stat.icon size={20} />
              </div>
              <TrendingUp size={16} className="text-emerald-500" />
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Transaction Table */}
        <div className="xl:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search transaction ID or student..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
               <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600">
                  <Calendar size={14} />
                  Today
               </button>
               <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Transaction ID</th>
                    <th className="px-6 py-4">Student & Type</th>
                    <th className="px-6 py-4 text-right">Amount (BDT)</th>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {payments.map((txn, i) => (
                    <motion.tr 
                      key={txn.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-primary cursor-pointer hover:underline">{txn.id}</span>
                        <p className="text-[9px] text-slate-400 mt-0.5">{txn.date}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{txn.student}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{txn.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                         <span className="text-sm font-extrabold text-slate-800">৳ {txn.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                           {txn.method.includes('bKash') || txn.method.includes('Nagad') ? <Smartphone size={14} className="text-slate-400" /> : <Building size={14} className="text-slate-400" />}
                           {txn.method}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                          txn.status === 'Success' ? 'bg-emerald-100 text-emerald-700' : 
                          txn.status === 'Failed' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {txn.status === 'Success' ? <CheckCircle2 size={12} /> : 
                           txn.status === 'Failed' ? <XCircle size={12} /> : <Clock size={12} />}
                          {txn.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><MoreVertical size={18} /></button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 flex items-center justify-center gap-4">
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer flex items-center gap-1">
                Download Reconciliation Report
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <Smartphone size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">MFS Settlement</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">Daily settlement of bKash and Nagad payments is scheduled for 4:00 PM. All verified transactions will be moved to the Main Ledger.</p>
                <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <RefreshCcw size={18} className="text-emerald-400 animate-spin-slow" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Next Sync in 2h 45m</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                   Manual Sync Now
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
             <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <PieChart size={18} className="text-primary" />
                Method Breakdown
             </h3>
             <div className="space-y-4">
                {[
                  { name: "MFS (bKash/Nagad)", value: 65, color: "bg-primary" },
                  { name: "Bank Transfer", value: 25, color: "bg-blue-500" },
                  { name: "Card Payment", value: 10, color: "bg-emerald-500" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>{item.name}</span>
                        <span>{item.value}%</span>
                     </div>
                     <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${item.value}%` }}
                           className={`h-full ${item.color}`} 
                        />
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm">
                <ShieldCheck size={18} className="text-primary" />
                Fraud Prevention
             </h3>
             <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-[10px] text-red-700 font-medium leading-relaxed">System flagged 2 transactions from IP: 103.25.XX.XX for further manual verification due to payment gateway timeout.</p>
                <button className="mt-2 text-[10px] font-bold text-red-600 hover:underline cursor-pointer uppercase">Review Now</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
