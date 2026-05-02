"use client";

import React from "react";
import { 
  GraduationCap, 
  Search, 
  Plus, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  Filter, 
  Eye, 
  FileText, 
  MoreVertical,
  Clock,
  ExternalLink,
  Award,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

const resultsData = [
  { id: "RES-101", course: "Data Structures", code: "CSE-2101", semester: "Summer 2026", avgGpa: 3.42, passRate: "92%", status: "Published" },
  { id: "RES-102", course: "Electronic Devices", code: "EEE-1102", semester: "Summer 2026", avgGpa: 3.15, passRate: "85%", status: "Published" },
  { id: "RES-103", course: "Microeconomics", code: "BBA-1201", semester: "Spring 2026", avgGpa: 3.65, passRate: "98%", status: "Archived" },
  { id: "RES-104", course: "Operating Systems", code: "CSE-3105", semester: "Summer 2026", avgGpa: 0.00, passRate: "0%", status: "Pending" },
];

const stats = [
  { label: "Overall Passing Rate", value: "94.2%", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-100" },
  { label: "Average CGPA", value: "3.28", icon: TrendingUp, color: "text-blue-600 bg-blue-100" },
  { label: "Pending Gradings", value: "12", icon: Clock, color: "text-amber-600 bg-amber-100" },
  { label: "Top Performer", value: "STU-1024", icon: Award, color: "text-purple-600 bg-purple-100" },
];

export default function AcademicResults() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Academic Results</h1>
          <p className="text-slate-500">Publish, manage and analyze university-wide academic performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <BarChart3 size={18} />
            Analytics
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Publish Result
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
        {/* Results List */}
        <div className="xl:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by course or code..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
               <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={20} />
              </button>
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none font-bold text-slate-600">
                <option>Summer 2026</option>
                <option>Spring 2026</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Course & ID</th>
                    <th className="px-6 py-4">Semester</th>
                    <th className="px-6 py-4">Avg GPA</th>
                    <th className="px-6 py-4">Pass Rate</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {resultsData.map((res, i) => (
                    <motion.tr 
                      key={res.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{res.course}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{res.code}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600">{res.semester}</td>
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-800">{res.avgGpa.toFixed(2)}</span>
                            {res.avgGpa > 0 && <BarChart3 size={14} className="text-emerald-500" />}
                         </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-800">{res.passRate}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          res.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 
                          res.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {res.status === 'Published' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><Eye size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><Download size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-slate-800 transition-all cursor-pointer"><MoreVertical size={18} /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 flex items-center justify-center">
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">View All Semester Archives</button>
            </div>
          </div>
        </div>

        {/* Sidebar Context */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6">
                   <GraduationCap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Result Builder</h3>
                <p className="text-sm text-slate-400 mb-6">Generate and verify official transcripts and semester marksheets with digital signatures.</p>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2">
                  <FileText size={18} />
                  Compile Transcripts
                </button>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <BookOpen size={120} />
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Award size={18} className="text-primary" />
                Dean's List Contenders
             </h3>
             <div className="space-y-4">
                {[
                  { name: "Abir Hasan", gpa: "3.98", dept: "CSE" },
                  { name: "Tahsin Noor", gpa: "3.95", dept: "BBA" },
                  { name: "Nabila Khan", gpa: "3.92", dept: "EEE" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-primary/5 transition-colors group cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-primary">
                           {item.name.charAt(0)}
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-800">{item.name}</p>
                           <p className="text-[10px] text-slate-400 font-medium">{item.dept}</p>
                        </div>
                     </div>
                     <span className="text-xs font-bold text-primary">{item.gpa}</span>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 text-[10px] font-bold text-primary uppercase tracking-widest flex items-center justify-center gap-2 hover:underline cursor-pointer">
               View Full Rankings
               <ExternalLink size={12} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
