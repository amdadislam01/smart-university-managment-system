"use client";

import React from "react";
import { 
  AlertCircle, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MoreVertical, 
  ArrowUpRight, 
  Library, 
  Users, 
  DollarSign,
  Info,
  Calendar,
  CreditCard,
  History
} from "lucide-react";
import { motion } from "framer-motion";

const fineRecords = [
  { id: "FN-8801", name: "Md. Amin Islam", stuId: "STU-1001", type: "Library", amount: "250", date: "2026-04-20", status: "Unpaid" },
  { id: "FN-8802", name: "Sifat Rahman", stuId: "STU-1002", type: "Late Fee", amount: "1,200", date: "2026-04-22", status: "Paid" },
  { id: "FN-8803", name: "Jarin Tasnim", stuId: "STU-1003", type: "Attendance", amount: "500", date: "2026-04-18", status: "Unpaid" },
  { id: "FN-8804", name: "Nabil Khan", stuId: "STU-1004", type: "Conduct", amount: "5,000", date: "2026-04-24", status: "Processing" },
  { id: "FN-8805", name: "Mitu Akter", stuId: "STU-1005", type: "Library", amount: "150", date: "2026-04-25", status: "Unpaid" },
];

const stats = [
  { label: "Unpaid Fines", value: "৳ 85,450", icon: AlertCircle, color: "text-red-600 bg-red-100" },
  { label: "Collected (MTD)", value: "৳ 42,100", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-100" },
  { label: "Active Defaulters", value: "324", icon: Users, color: "text-blue-600 bg-blue-100" },
  { label: "Pending Waivers", value: "18", icon: Clock, color: "text-amber-600 bg-amber-100" },
];

export default function FinesManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Fines & Penalties</h1>
          <p className="text-slate-500">Track disciplinary charges, library fines and late payment penalties.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <History size={18} />
            Fine History
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Assign Fine
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Records Table */}
        <div className="xl:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by student name or ID..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
               <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={20} />
              </button>
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none font-bold text-slate-600">
                <option>All Types</option>
                <option>Library Fines</option>
                <option>Late Fees</option>
                <option>Disciplinary</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Fine ID</th>
                    <th className="px-6 py-4">Student Details</th>
                    <th className="px-6 py-4">Fine Category</th>
                    <th className="px-6 py-4 text-right">Amount (BDT)</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {fineRecords.map((record, i) => (
                    <motion.tr 
                      key={record.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-primary">{record.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{record.name}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">{record.stuId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-widest">
                           {record.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                         <span className="text-sm font-extrabold text-slate-800">৳ {record.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          record.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 
                          record.status === 'Unpaid' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {record.status === 'Paid' ? <CheckCircle2 size={12} /> : 
                           record.status === 'Unpaid' ? <XCircle size={12} /> : <Clock size={12} />}
                          {record.status}
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
            <div className="p-4 bg-slate-50 flex items-center justify-center">
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">Generate Defaulter Reports</button>
            </div>
          </div>
        </div>

        {/* Sidebar Utilities */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-6">
                   <DollarSign size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Bulk Fine System</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">Automatically assign fines based on system triggers like library delays (৳10/day) or late semester payments.</p>
                <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <Clock size={18} className="text-slate-500" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Next Trigger: 12 AM</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                  System Settings
                  <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm">
                <CreditCard size={18} className="text-primary" />
                Collection Summary
             </h3>
             <div className="space-y-4">
                {[
                  { name: "Library Fines", collected: "৳ 12,450", color: "bg-blue-500" },
                  { name: "Late Fees", collected: "৳ 24,000", color: "bg-emerald-500" },
                  { name: "Disciplinary", collected: "৳ 5,650", color: "bg-purple-500" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>{item.name}</span>
                        <span>{item.collected}</span>
                     </div>
                     <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${(parseInt(item.collected.replace(/\D/g, ''))/42100)*100}%` }} />
                     </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-3 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all cursor-pointer">
                <Download size={14} />
                Download Report
             </button>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
             <Info size={18} className="text-blue-500 mt-0.5" />
             <p className="text-[11px] text-blue-700 font-medium">Fines older than 6 months without waiver requests are automatically sent to the Board for disciplinary review.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
