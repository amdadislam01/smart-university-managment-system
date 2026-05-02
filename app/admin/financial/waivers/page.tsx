"use client";

import React from "react";
import { 
  Award, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  MoreVertical, 
  Users, 
  DollarSign, 
  GraduationCap, 
  Info, 
  ArrowUpRight, 
  ShieldCheck, 
  History,
  Tag,
  Star
} from "lucide-react";
import { motion } from "framer-motion";

const recipients = [
  { id: "WAV-101", student: "Md. Amin Islam", stuId: "STU-1001", type: "Merit-based", value: "100%", status: "Active", amount: "65,000" },
  { id: "WAV-102", student: "Sifat Rahman", stuId: "STU-1002", type: "Need-based", value: "50%", status: "Active", amount: "36,250" },
  { id: "WAV-103", student: "Jarin Tasnim", stuId: "STU-1003", type: "Freedom Fighter", value: "100%", status: "Active", amount: "58,000" },
  { id: "WAV-104", student: "Nabil Khan", stuId: "STU-1004", type: "Merit-based", value: "25%", status: "Pending", amount: "15,500" },
  { id: "WAV-105", student: "Mitu Akter", stuId: "STU-1005", type: "Sibling", value: "15%", status: "Expired", amount: "9,750" },
];

const stats = [
  { label: "Total Waivers", value: "৳ 4.2M", icon: DollarSign, color: "bg-emerald-500" },
  { label: "Active Recipients", value: "842", icon: Users, color: "bg-blue-500" },
  { label: "Merit Scholars", value: "156", icon: Award, color: "bg-amber-500" },
  { label: "Pending Apps", value: "42", icon: Clock, color: "bg-purple-500" },
];

export default function WaiverManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Waivers & Scholarships</h1>
          <p className="text-slate-500">Manage institutional scholarships, fee waivers and merit-based grants.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Tag size={18} />
            Waiver Types
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            New Application
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
        {/* Main Recipients Table */}
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
                <option>Active Waivers</option>
                <option>Merit-based</option>
                <option>Need-based</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Recipient Details</th>
                    <th className="px-6 py-4">Waiver Category</th>
                    <th className="px-6 py-4">Value (%)</th>
                    <th className="px-6 py-4 text-right">Benefit (BDT)</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recipients.map((rec, i) => (
                    <motion.tr 
                      key={rec.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{rec.student}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">{rec.stuId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                           <Star size={14} className={rec.type === 'Merit-based' ? 'text-amber-400' : 'text-slate-300'} />
                           <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{rec.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">{rec.value}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                         <span className="text-sm font-extrabold text-slate-800">৳ {rec.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          rec.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                          rec.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {rec.status === 'Active' ? <CheckCircle2 size={12} /> : 
                           rec.status === 'Pending' ? <Clock size={12} /> : <XCircle size={12} />}
                          {rec.status}
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
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer flex items-center gap-1">
                View Allocation History
                <History size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <GraduationCap size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Merit Scholarship</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">Automatic waiver application for top 3% of students in the Dean's List for the Summer Semester 2026.</p>
                <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <ShieldCheck size={18} className="text-emerald-400" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">GPA Verification Active</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                   Apply Merit Tiers
                   <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm">
                <Info size={18} className="text-primary" />
                Eligibility Rules
             </h3>
             <ul className="space-y-3">
                {[
                  "Maintain minimum CGPA of 3.50 for merit continuity.",
                  "Zero disciplinary records for the current academic year.",
                  "Minimum 85% attendance required for scholarship claims.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[11px] text-slate-500 font-medium">
                     <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" />
                     {item}
                  </li>
                ))}
             </ul>
             <button className="w-full mt-4 py-3 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all cursor-pointer">
               View Full Policy
             </button>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
             <Star size={18} className="text-blue-500 mt-0.5" />
             <p className="text-[11px] text-blue-700 font-medium leading-relaxed">Freedom Fighter (quota) waivers are lifetime grants and require one-time verification by the registrar's office.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
