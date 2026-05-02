"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, Download, TrendingUp, BarChart3, ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const semesters = [
  { id: 4, name: "Semester 4 (Spring 2026)", gpa: "3.75", credits: 18, status: "Published" },
  { id: 3, name: "Semester 3 (Fall 2025)", gpa: "3.60", credits: 21, status: "Published" },
  { id: 2, name: "Semester 2 (Summer 2025)", gpa: "3.55", credits: 15, status: "Published" },
  { id: 1, name: "Semester 1 (Spring 2025)", gpa: "3.45", credits: 18, status: "Published" },
];

const currentResults = [
  { course: "Data Structures", code: "CSE 301", marks: 88, grade: "A", status: "Pass" },
  { course: "Database Management", code: "CSE 302", marks: 92, grade: "A+", status: "Pass" },
  { course: "Software Engineering", code: "CSE 303", marks: 78, grade: "B+", status: "Pass" },
  { course: "Digital Logic", code: "CSE 304", marks: 85, grade: "A", status: "Pass" },
];

export default function ResultsPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Marks & Results</h1>
          <p className="text-gray-500 mt-1">Access your transcripts and academic performance reports.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Full Transcript
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Award size={18} />
            Certificates
          </button>
        </div>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-[#0A1F3D] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-widest mb-1">Current Cumulative GPA</p>
                  <h2 className="text-6xl font-black">3.65</h2>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-xs font-bold">
                     <TrendingUp size={14} className="text-emerald-400" />
                     Top 10%
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg backdrop-blur-sm text-xs font-bold">
                     84 Credits
                   </div>
                </div>
                <button className="px-8 py-3 bg-secondary text-primary font-black rounded-2xl hover:scale-105 transition-transform">
                  View Detailed Analysis
                </button>
              </div>
              <div className="hidden md:flex items-center justify-center">
                 <div className="w-48 h-48 rounded-full border-[12px] border-white/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 border-[12px] border-secondary rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 85%)' }}></div>
                    <GraduationCap size={64} className="text-secondary" />
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-1000">
             <BarChart3 size={300} />
           </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
           <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
             <BookOpen size={20} className="text-primary" />
             Semester GPA Trend
           </h3>
           <div className="flex-1 flex items-end justify-between gap-4 px-2 pb-2">
             {[3.2, 3.5, 3.4, 3.8, 3.6, 3.7].map((val, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                 <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: `${(val/4)*100}%` }}
                   transition={{ duration: 1, delay: i * 0.1 }}
                   className={cn(
                     "w-full rounded-t-lg transition-all duration-300",
                     i === 5 ? "bg-primary" : "bg-primary/10 group-hover:bg-primary/20"
                   )}
                 />
                 <span className="text-[10px] font-bold text-gray-400">S{i+1}</span>
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GPA: {val}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Semester-wise details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-xl font-bold text-gray-900">Academic History</h2>
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                 <input 
                   type="text" 
                   placeholder="Filter semesters..." 
                   className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                 />
               </div>
             </div>
             <div className="space-y-4">
               {semesters.map((sem) => (
                 <div key={sem.id} className="p-6 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all cursor-pointer group">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                          {sem.id}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{sem.name}</h4>
                          <p className="text-xs text-gray-500">{sem.credits} Credits • {sem.status}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <div className="text-right">
                           <p className="text-xs font-bold text-gray-400 uppercase">GPA</p>
                           <p className="text-lg font-black text-primary">{sem.gpa}</p>
                        </div>
                        <ChevronDown size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Current Semester Breakdown */}
        <div className="space-y-6">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Current Semester Results</h2>
              <div className="space-y-4">
                 {currentResults.map((res, i) => (
                   <div key={i} className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 group">
                      <div className="flex items-start justify-between mb-2">
                         <div>
                            <h4 className="text-sm font-bold text-gray-900">{res.course}</h4>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{res.code}</p>
                         </div>
                         <div className="text-right">
                            <span className={cn(
                              "text-sm font-black px-2 py-0.5 rounded-lg",
                              res.grade.includes('A') ? "text-emerald-600 bg-emerald-50" : "text-blue-600 bg-blue-50"
                            )}>
                              {res.grade}
                            </span>
                         </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                         <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden mr-4">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${res.marks}%` }}
                              transition={{ duration: 1.5, delay: i * 0.1 }}
                              className={cn(
                                "h-full rounded-full",
                                res.marks >= 90 ? "bg-emerald-500" : "bg-blue-500"
                              )}
                            />
                         </div>
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{res.marks}/100</span>
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                 Grade Conversion Table
              </button>
           </div>
           
           <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">Result Re-check</h3>
              <p className="text-xs text-amber-700 leading-relaxed mb-6">
                Not satisfied with your results? You can apply for a formal re-check within 7 days of result publication.
              </p>
              <button className="w-full py-3 bg-amber-600 text-white font-bold rounded-xl shadow-lg shadow-amber-600/20 hover:opacity-90 transition-opacity">
                 Apply for Review
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
