"use client";

import React from "react";
import { 
  FileText, 
  Printer, 
  Mail, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Layout, 
  ArrowUpRight, 
  Layers, 
  Users, 
  ExternalLink,
  Plus,
  Send,
  Eye,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";

const generationHistory = [
  { id: "RC-2026-001", class: "CSE-101", section: "A", count: 45, status: "Ready", date: "2026-04-20" },
  { id: "RC-2026-002", class: "BBA-201", section: "B", count: 60, status: "Processing", date: "2026-04-22" },
  { id: "RC-2026-003", class: "EEE-102", section: "A", count: 38, status: "Sent", date: "2026-04-18" },
  { id: "RC-2026-004", class: "ENG-301", section: "C", count: 25, status: "Ready", date: "2026-04-24" },
];

const templates = [
  { name: "Official Transcript", type: "Standard", img: "bg-slate-50" },
  { name: "Progress Report", type: "Detailed", img: "bg-primary/5" },
  { name: "Semester Marksheet", type: "Simple", img: "bg-slate-100" },
];

export default function ReportCardManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Report Card Management</h1>
          <p className="text-slate-500">Generate, review and distribute digital and physical semester report cards.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Layout size={18} />
            Templates
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Generate Batch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Column: Generator & Stats */}
        <div className="xl:col-span-3 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Batches</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">128</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Distributed</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">8,450</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Send size={20} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pending Email</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">320</p>
            </div>
          </div>

          {/* History Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <FileText size={18} className="text-primary" />
                Recent Generation History
              </h3>
              <div className="flex items-center gap-3">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input type="text" placeholder="Search batch..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-primary/20" />
                 </div>
                 <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-primary transition-all cursor-pointer"><Filter size={16} /></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Batch ID</th>
                    <th className="px-6 py-4">Class & Section</th>
                    <th className="px-6 py-4">Students</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Created On</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {generationHistory.map((batch, i) => (
                    <motion.tr 
                      key={batch.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-primary">{batch.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{batch.class}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">Section {batch.section}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-700">{batch.count} Students</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                          batch.status === 'Ready' ? 'bg-blue-100 text-blue-700' : 
                          batch.status === 'Sent' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {batch.status === 'Ready' ? <CheckCircle2 size={12} /> : 
                           batch.status === 'Sent' ? <Send size={12} /> : <Clock size={12} />}
                          {batch.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-500">{batch.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><Printer size={16} /></button>
                          <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><Download size={16} /></button>
                          <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><Mail size={16} /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline cursor-pointer">View Archive Log</button>
            </div>
          </div>
        </div>

        {/* Right Column: Templates & Actions */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-secondary">
                   <Layout size={20} />
                   Active Template
                </h3>
                <div className="space-y-3 mb-8">
                   {templates.map((tpl, i) => (
                      <div key={i} className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group/tpl ${
                        i === 1 ? 'bg-white/10 border-white/20' : 'bg-white/5 border-transparent hover:bg-white/10'
                      }`}>
                         <div className="flex items-center gap-3">
                            <div className={`w-8 h-10 rounded shadow-sm ${tpl.img}`} />
                            <div>
                               <p className="text-xs font-bold">{tpl.name}</p>
                               <p className="text-[10px] text-white/40">{tpl.type}</p>
                            </div>
                         </div>
                         {i === 1 && <CheckCircle2 size={16} className="text-secondary" />}
                      </div>
                   ))}
                </div>
                <button className="w-full py-3.5 bg-white text-primary font-bold rounded-xl text-xs hover:bg-secondary transition-all cursor-pointer flex items-center justify-center gap-2">
                   Edit Template Design
                   <Settings size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Users size={18} className="text-primary" />
                Quick Search
             </h3>
             <div className="space-y-3">
                <input type="text" placeholder="Enter Student ID..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs outline-none focus:ring-2 focus:ring-primary/20" />
                <button className="w-full py-3 bg-primary text-white font-bold rounded-xl text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/20">
                   Generate Single
                   <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3">
             <Printer size={18} className="text-amber-500 mt-0.5" />
             <div>
                <h5 className="text-xs font-bold text-amber-900">Printer Queue</h5>
                <p className="text-[10px] text-amber-700 mt-1">45 report cards currently in the physical printing queue for CSE-101 Sec A.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
