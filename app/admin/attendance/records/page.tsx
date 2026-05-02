"use client";

import React from "react";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  Plus, 
  MoreVertical, 
  User, 
  BookOpen, 
  ArrowUpRight,
  ClipboardCheck,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

const attendanceData = [
  { id: "STU-1001", name: "Md. Amin Islam", class: "CSE-101", section: "A", time: "08:15 AM", status: "Present" },
  { id: "STU-1002", name: "Sifat Rahman", class: "CSE-101", section: "A", time: "08:45 AM", status: "Late" },
  { id: "STU-1003", name: "Jarin Tasnim", class: "CSE-101", section: "B", time: "-", status: "Absent" },
  { id: "STU-1004", name: "Nabil Khan", class: "EEE-102", section: "A", time: "08:20 AM", status: "Present" },
  { id: "STU-1005", name: "Mitu Akter", class: "EEE-102", section: "A", time: "08:10 AM", status: "Present" },
];

const stats = [
  { label: "Today's Presence", value: "2,840", total: "3,100", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-100" },
  { label: "Late Arrivals", value: "142", total: "2,840", icon: Clock, color: "text-amber-600 bg-amber-100" },
  { label: "Total Absentees", value: "260", total: "3,100", icon: XCircle, color: "text-red-600 bg-red-100" },
  { label: "Leave Requests", value: "18", total: "25", icon: AlertCircle, color: "text-blue-600 bg-blue-100" },
];

export default function AttendanceRecords() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Attendance Records</h1>
          <p className="text-slate-500">Track and manage daily student and staff presence.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Download size={18} />
            Daily Report
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Mark Manual
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
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today</span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-end gap-2 mt-1">
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-bold mb-1">/ {stat.total}</p>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
              <div 
                className={`h-full ${stat.color.split(' ')[0].replace('text', 'bg')}`} 
                style={{ width: `${(parseInt(stat.value.replace(',', '')) / parseInt(stat.total.replace(',', ''))) * 100}%` }}
              />
            </div>
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
                placeholder="Search by student ID or name..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
               <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <Calendar size={16} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-600">April 25, 2026</span>
               </div>
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
                    <th className="px-6 py-4">Student Details</th>
                    <th className="px-6 py-4">Class & Section</th>
                    <th className="px-6 py-4">Check-in Time</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {attendanceData.map((record, i) => (
                    <motion.tr 
                      key={record.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                            {record.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{record.name}</p>
                            <p className="text-[10px] text-slate-400 font-medium">{record.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-700">{record.class}</span>
                          <span className="text-[10px] text-slate-400 font-medium">Section {record.section}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                          {record.time !== '-' && <Clock size={14} className="text-slate-400" />}
                          {record.time}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          record.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 
                          record.status === 'Late' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {record.status === 'Present' ? <CheckCircle2 size={12} /> : 
                           record.status === 'Late' ? <Clock size={12} /> : <XCircle size={12} />}
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
            <div className="p-4 bg-slate-50 text-center">
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">View Complete Presence History</button>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6">
                   <ClipboardCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">RFID Terminal</h3>
                <p className="text-sm text-slate-400 mb-6">Configure and monitor live RFID/Biometric gate entry terminals for all university campuses.</p>
                <div className="flex items-center gap-3 mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">3 Terminals Active</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                  System Settings
                  <ArrowUpRight size={18} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                Departmental Summary
             </h3>
             <div className="space-y-4">
                {[
                  { name: "CSE Department", percent: 94 },
                  { name: "EEE Department", percent: 88 },
                  { name: "BBA Department", percent: 92 },
                  { name: "English Dept", percent: 82 },
                ].map((dept, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-700">{dept.name}</span>
                        <span className="text-primary">{dept.percent}%</span>
                     </div>
                     <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${dept.percent}%` }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
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
