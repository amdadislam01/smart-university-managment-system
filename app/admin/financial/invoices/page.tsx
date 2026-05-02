"use client";

import React from "react";
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MoreVertical, 
  Eye, 
  Printer, 
  Mail, 
  CreditCard, 
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const invoices = [
  { id: "INV-2026-001", student: "Md. Amin Islam", stuId: "STU-1001", amount: "65,000", dueDate: "2026-05-10", status: "Paid", method: "bKash" },
  { id: "INV-2026-002", student: "Sifat Rahman", stuId: "STU-1002", amount: "72,500", dueDate: "2026-05-15", status: "Pending", method: "Bank" },
  { id: "INV-2026-003", student: "Jarin Tasnim", stuId: "STU-1003", amount: "58,000", dueDate: "2026-04-30", status: "Overdue", method: "N/A" },
  { id: "INV-2026-004", student: "Nabil Khan", stuId: "STU-1004", amount: "62,000", dueDate: "2026-05-12", status: "Paid", method: "Visa" },
  { id: "INV-2026-005", student: "Mitu Akter", stuId: "STU-1005", amount: "65,000", dueDate: "2026-05-10", status: "Pending", method: "Nagad" },
];

const stats = [
  { label: "Total Generated", value: "3,120", icon: FileText, color: "bg-blue-500" },
  { label: "Paid Invoices", value: "2,450", icon: CheckCircle2, color: "bg-emerald-500" },
  { label: "Pending Payments", value: "542", icon: Clock, color: "bg-amber-500" },
  { label: "Overdue", value: "128", icon: AlertCircle, color: "bg-red-500" },
];

export default function InvoiceManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Invoices Management</h1>
          <p className="text-slate-500">Oversee student billing, payment statuses and institutional accounts.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Printer size={18} />
            Bulk Print
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Create Invoice
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
            <div className={`${stat.color} w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-current/10`}>
              <stat.icon size={20} />
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Invoices Table */}
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
                <option>All Statuses</option>
                <option>Paid Only</option>
                <option>Pending Only</option>
                <option>Overdue Only</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Invoice ID</th>
                    <th className="px-6 py-4">Student Details</th>
                    <th className="px-6 py-4 text-right">Amount (BDT)</th>
                    <th className="px-6 py-4">Due Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {invoices.map((inv, i) => (
                    <motion.tr 
                      key={inv.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-primary group-hover:underline cursor-pointer">{inv.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{inv.student}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{inv.stuId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                         <span className="text-sm font-extrabold text-slate-800">৳ {inv.amount}</span>
                         <p className="text-[9px] text-slate-400 mt-0.5">{inv.method !== 'N/A' ? `via ${inv.method}` : 'No Payment'}</p>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-600">{inv.dueDate}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 
                          inv.status === 'Overdue' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {inv.status === 'Paid' ? <CheckCircle2 size={12} /> : 
                           inv.status === 'Overdue' ? <AlertCircle size={12} /> : <Clock size={12} />}
                          {inv.status}
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
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">Export Account Statement (CSV)</button>
            </div>
          </div>
        </div>

        {/* Sidebar Context */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <TrendingUp size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Financial Summary</h3>
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-xs text-slate-400">Total Expected</span>
                      <span className="text-lg font-bold text-white">৳ 45.2M</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-xs text-slate-400">Current Collection</span>
                      <span className="text-lg font-bold text-emerald-400">৳ 38.8M</span>
                   </div>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                   Detailed Ledger
                   <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
             <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <ShieldCheck size={18} className="text-primary" />
                Quick Actions
             </h3>
             <div className="grid grid-cols-1 gap-3">
                <button className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4 group hover:bg-primary transition-all cursor-pointer">
                   <div className="p-3 bg-white rounded-xl text-primary group-hover:bg-primary/20 group-hover:text-white">
                      <Mail size={18} />
                   </div>
                   <div className="text-left">
                      <p className="text-xs font-bold text-slate-800 group-hover:text-white">Send Reminders</p>
                      <p className="text-[10px] text-slate-400 group-hover:text-white/60">For 128 overdue invoices</p>
                   </div>
                </button>
                <button className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4 group hover:bg-primary transition-all cursor-pointer">
                   <div className="p-3 bg-white rounded-xl text-primary group-hover:bg-primary/20 group-hover:text-white">
                      <CreditCard size={18} />
                   </div>
                   <div className="text-left">
                      <p className="text-xs font-bold text-slate-800 group-hover:text-white">Verify Payments</p>
                      <p className="text-[10px] text-slate-400 group-hover:text-white/60">Process bank settlements</p>
                   </div>
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm">
                <Building2 size={18} className="text-primary" />
                Departmental Status
             </h3>
             <div className="space-y-4">
                {[
                  { name: "CSE Dept", paid: 92 },
                  { name: "EEE Dept", paid: 84 },
                  { name: "BBA Dept", paid: 78 },
                ].map((dept, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>{dept.name}</span>
                        <span className="text-primary">{dept.paid}% Paid</span>
                     </div>
                     <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${dept.paid}%` }}
                           className="h-full bg-primary" 
                        />
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
