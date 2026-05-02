"use client";

import React from "react";
import { 
  Upload, 
  FileSpreadsheet, 
  Search, 
  Plus, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MoreVertical, 
  BookOpen, 
  Users, 
  Download,
  ShieldCheck,
  ArrowUpRight,
  ClipboardList
} from "lucide-react";
import { motion } from "framer-motion";

const recentUploads = [
  { id: "UP-101", course: "Data Structures", code: "CSE-2101", section: "A", type: "Mid-Term", status: "Verified", date: "2026-04-20" },
  { id: "UP-102", course: "Circuit Theory", code: "EEE-1102", section: "B", type: "Final Exam", status: "Pending", date: "2026-04-22" },
  { id: "UP-103", course: "Microeconomics", code: "BBA-1201", section: "A", type: "Quiz 2", status: "Verified", date: "2026-04-18" },
  { id: "UP-104", course: "English I", code: "ENG-1011", section: "C", type: "Assignment", status: "Rejected", date: "2026-04-24" },
];

export default function MarksUpload() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Marks Entry & Upload</h1>
          <p className="text-slate-500">Submit and verify student academic performances for various assessments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Download size={18} />
            CSV Template
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Manual Entry
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Main Selection & Upload Area */}
        <div className="xl:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-8 border-b border-slate-50 bg-slate-50/30">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                   <Filter size={18} className="text-primary" />
                   Select Assessment Target
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Select Course</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Computer Fundamentals (CSE-1101)</option>
                        <option>Electronic Circuits (EEE-1201)</option>
                        <option>Principles of BBA (BBA-2101)</option>
                      </select>
                   </div>
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Select Section</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Section A</option>
                        <option>Section B</option>
                        <option>Section C</option>
                      </select>
                   </div>
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Assessment Type</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Mid-Term (30%)</option>
                        <option>Final Exam (50%)</option>
                        <option>Quiz 1 (10%)</option>
                        <option>Assignment (10%)</option>
                      </select>
                   </div>
                </div>
             </div>

             <div className="p-12">
                <div className="max-w-xl mx-auto border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:bg-slate-50 hover:border-primary/30 transition-all group cursor-pointer">
                   <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <Upload size={32} />
                   </div>
                   <h4 className="text-xl font-bold text-slate-800 mb-2">Upload Excel or CSV File</h4>
                   <p className="text-sm text-slate-400 mb-8">Drag and drop your marksheet file here or click to browse files from your computer.</p>
                   <div className="flex justify-center gap-3">
                      <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-500">.XLSX</span>
                      <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-500">.CSV</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                   <ClipboardList size={18} className="text-primary" />
                   Recent Submission History
                </h3>
                <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline cursor-pointer">View All Logs</button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Submission ID</th>
                      <th className="px-6 py-4">Course & Type</th>
                      <th className="px-6 py-4">Sec</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentUploads.map((up, i) => (
                      <motion.tr 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="px-6 py-4">
                           <span className="text-xs font-bold text-primary">{up.id}</span>
                        </td>
                        <td className="px-6 py-4">
                           <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-800">{up.course}</span>
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{up.type}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-700">{up.section}</td>
                        <td className="px-6 py-4">
                           <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                              up.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 
                              up.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                           }`}>
                              {up.status === 'Verified' ? <CheckCircle2 size={12} /> : 
                               up.status === 'Pending' ? <Clock size={12} /> : <AlertCircle size={12} />}
                              {up.status}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-slate-500">{up.date}</td>
                        <td className="px-6 py-4 text-center">
                           <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><MoreVertical size={18} /></button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        </div>

        {/* Sidebar Info & Guides */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <ShieldCheck size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Multi-Step Verification</h3>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">Uploaded marks are not published immediately. All submissions must be verified by the Head of Department before appearing in student portals.</p>
                <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Active Guard System</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                   Check Pending
                   <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm">
                <BookOpen size={18} className="text-primary" />
                Quick Guidelines
             </h3>
             <ul className="space-y-3">
                {[
                  "Use the standard university template for all CSV uploads.",
                  "Student IDs must match official university registration records.",
                  "Mark ranges are validated against course credit weights.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[11px] text-slate-500 font-medium">
                     <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" />
                     {item}
                  </li>
                ))}
             </ul>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
             <FileSpreadsheet size={18} className="text-blue-500 mt-0.5" />
             <div>
                <h5 className="text-xs font-bold text-blue-900">Need a Template?</h5>
                <p className="text-[10px] text-blue-700 mt-1 leading-relaxed">Download the pre-formatted Excel template with student names already filled for your selected section.</p>
                <button className="mt-3 text-[10px] font-extrabold text-blue-800 uppercase tracking-widest flex items-center gap-1 hover:underline cursor-pointer">
                   Download Now
                   <Download size={12} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
