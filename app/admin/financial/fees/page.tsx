"use client";

import React from "react";
import { 
  DollarSign, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  CreditCard, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight, 
  FileText, 
  MoreVertical,
  Layers,
  Building2,
  Edit3,
  Trash2,
  PieChart
} from "lucide-react";
import { motion } from "framer-motion";

const feeHeads = [
  { id: "FH-101", name: "Admission Fee", dept: "All", amount: "25,000", frequency: "One-time", status: "Active" },
  { id: "FH-102", name: "Tuition Fee (CSE)", dept: "CSE", amount: "65,000", frequency: "Semester", status: "Active" },
  { id: "FH-103", name: "Library Fee", dept: "All", amount: "2,500", frequency: "Semester", status: "Active" },
  { id: "FH-104", name: "Lab & Development", dept: "Science/Eng", amount: "12,000", frequency: "Semester", status: "Active" },
  { id: "FH-105", name: "Student Insurance", dept: "All", amount: "1,200", frequency: "Annual", status: "Active" },
];

const stats = [
  { label: "Total Revenue", value: "৳ 24.5M", icon: DollarSign, color: "bg-emerald-500" },
  { label: "Collection Rate", value: "82.4%", icon: TrendingUp, color: "bg-blue-500" },
  { label: "Outstanding", value: "৳ 4.2M", icon: AlertCircle, color: "bg-amber-500" },
  { label: "Total Waivers", value: "৳ 1.8M", icon: PieChart, color: "bg-purple-500" },
];

export default function FeeStructureManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Fees & Structure</h1>
          <p className="text-slate-500">Configure university fee categories, payment schedules and departmental structures.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <FileText size={18} />
            Fee Policy
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Add Fee Head
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
              <ArrowUpRight size={14} className="text-slate-300" />
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Main Fee Table */}
        <div className="xl:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search fee categories..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
               <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={20} />
              </button>
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none font-bold text-slate-600">
                <option>Active Semester</option>
                <option>2026-27 Plan</option>
                <option>Archives</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Fee Head & ID</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4 text-right">Amount (BDT)</th>
                    <th className="px-6 py-4">Frequency</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {feeHeads.map((fee, i) => (
                    <motion.tr 
                      key={fee.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{fee.name}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{fee.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                          <Building2 size={14} className="text-slate-300" />
                          {fee.dept}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                         <span className="text-sm font-extrabold text-slate-800">৳ {fee.amount}</span>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-500 uppercase">{fee.frequency}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {fee.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-amber-600 transition-all cursor-pointer"><Edit3 size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-red-600 transition-all cursor-pointer"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Context */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <CreditCard size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Bulk Billing</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">Automatically generate invoices for all active students based on the current semester's fee structure.</p>
                <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <Layers size={18} className="text-slate-500" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">3,100 Students Pending</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                   Generate Invoices
                   <Download size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Payment Gateways
             </h3>
             <div className="space-y-4">
                {[
                  { name: "bKash / Nagad", status: "Active" },
                  { name: "Bank Deposit", status: "Active" },
                  { name: "Visa / Mastercard", status: "Active" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                     <span className="text-xs font-bold text-slate-700">{item.name}</span>
                     <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-3 border border-slate-200 text-slate-500 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all cursor-pointer">
                Gateway Settings
             </button>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3">
             <AlertCircle size={18} className="text-amber-500 mt-0.5" />
             <p className="text-[11px] text-amber-700 font-medium">Changes to core tuition fees require a board-level digital authorization token for this academic year.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
