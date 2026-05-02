"use client";

import React from "react";
import { CheckCircle2, XCircle, Clock, Calendar, BarChart3, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const attendanceSummary = [
  { label: "Total Classes", value: "148", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Present", value: "128", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Absent", value: "12", color: "text-red-600", bg: "bg-red-50" },
  { label: "Late", value: "8", color: "text-amber-600", bg: "bg-amber-50" },
];

const subjectWiseAttendance = [
  { subject: "Data Structures", total: 32, present: 30, late: 1, percentage: 94 },
  { subject: "Database Management", total: 30, present: 25, late: 2, percentage: 83 },
  { subject: "Software Engineering", total: 28, present: 22, late: 3, percentage: 78 },
  { subject: "Discrete Mathematics", total: 26, present: 24, late: 1, percentage: 92 },
  { subject: "Digital Logic Design", total: 32, present: 27, late: 1, percentage: 84 },
];

const recentAttendance = [
  { date: "2026-04-27", subject: "Data Structures", status: "Present", time: "10:00 AM" },
  { date: "2026-04-27", subject: "Database Management", status: "Present", time: "02:30 PM" },
  { date: "2026-04-26", subject: "Software Engineering", status: "Absent", time: "11:30 AM" },
  { date: "2026-04-26", subject: "Digital Logic", status: "Present", time: "09:00 AM" },
  { date: "2026-04-25", subject: "Data Structures", status: "Late", time: "10:15 AM" },
];

export default function AttendancePage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Attendance Tracking</h1>
          <p className="text-gray-500 mt-1">Keep track of your presence in all academic sessions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <Calendar size={18} />
            Academic Calendar
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <BarChart3 size={18} />
            Full Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {attendanceSummary.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <span className="text-sm font-semibold text-gray-500 mb-1">{item.label}</span>
            <span className={cn("text-3xl font-black mb-2", item.color)}>{item.value}</span>
            <div className={cn("w-full h-1.5 rounded-full overflow-hidden", item.bg)}>
               <div className={cn("h-full rounded-full", item.color.replace('text', 'bg'))} style={{ width: '100%' }}></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subject wise list */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">Subject-wise Attendance</h2>
              <div className="flex gap-2">
                 <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Filter size={18} /></button>
              </div>
            </div>
            <div className="space-y-6">
              {subjectWiseAttendance.map((subject) => (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{subject.subject}</h4>
                      <p className="text-xs text-gray-500">{subject.present} out of {subject.total} sessions attended</p>
                    </div>
                    <div className="text-right">
                       <span className={cn(
                         "text-sm font-black px-3 py-1 rounded-full",
                         subject.percentage >= 90 ? "bg-emerald-50 text-emerald-600" : 
                         subject.percentage >= 80 ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
                       )}>
                         {subject.percentage}%
                       </span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.percentage}%` }}
                      transition={{ duration: 1.5 }}
                      className={cn(
                        "h-full rounded-full",
                        subject.percentage >= 90 ? "bg-emerald-500" : 
                        subject.percentage >= 80 ? "bg-blue-500" : "bg-amber-500"
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent logs */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent History</h2>
            <div className="space-y-4">
              {recentAttendance.map((log, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                  <div className={cn(
                    "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm",
                    log.status === "Present" ? "bg-emerald-50 text-emerald-600" : 
                    log.status === "Absent" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {log.status === "Present" ? <CheckCircle2 size={20} /> : 
                     log.status === "Absent" ? <XCircle size={20} /> : <Clock size={20} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">{log.subject}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{log.date}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">•</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{log.time}</span>
                    </div>
                  </div>
                  <div className={cn(
                    "text-[10px] font-black uppercase px-2 py-1 rounded-lg h-fit",
                    log.status === "Present" ? "bg-emerald-50 text-emerald-600" : 
                    log.status === "Absent" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {log.status}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-2xl transition-all">
              View Full History
            </button>
          </div>

          <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20 relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="font-bold text-gray-900 mb-2 text-lg">Leave Request</h3>
               <p className="text-sm text-gray-600 mb-6">Need to skip a class? Submit a leave request before the session.</p>
               <button className="w-full py-3 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                 Apply for Leave
               </button>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-5 text-primary rotate-12 -mr-4 -mt-4">
               <Calendar size={120} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
