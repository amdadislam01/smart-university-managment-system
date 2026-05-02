"use client";

import React from "react";
import { 
  FileSpreadsheet, 
  Plus, 
  Search, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  Eye,
  ShieldCheck,
  Printer,
  Download,
  AlertCircle,
  History
} from "lucide-react";
import { motion } from "framer-motion";

const exams = [
  { id: "EXM-001", course: "Computer Fundamentals", code: "CSE-1101", date: "2026-05-15", time: "10:00 AM", hall: "Main Hall A", students: 120, status: "Scheduled" },
  { id: "EXM-002", course: "Electrical Circuits", code: "EEE-1201", date: "2026-05-16", time: "02:00 PM", hall: "Engineering Lab 1", students: 85, status: "Scheduled" },
  { id: "EXM-003", course: "Business Ethics", code: "BBA-2105", date: "2026-05-17", time: "10:00 AM", hall: "Business Annex", students: 150, status: "Draft" },
  { id: "EXM-004", course: "Digital Logic Design", code: "CSE-2201", date: "2026-05-18", time: "02:00 PM", hall: "Main Hall B", students: 95, status: "Scheduled" },
];

const stats = [
  { label: "Upcoming Exams", value: "24", icon: Calendar, color: "bg-blue-500" },
  { label: "Total Examinees", value: "3,850", icon: Users, color: "bg-purple-500" },
  { label: "Exam Halls", value: "12", icon: MapPin, color: "bg-emerald-500" },
  { label: "Invigilators", value: "48", icon: ShieldCheck, color: "bg-amber-500" },
];

export default function ExamManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Exam Management</h1>
          <p className="text-slate-500">Plan exam schedules, seat arrangements and invigilation duties.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Printer size={18} />
            Admit Cards
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Create Exam
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
            <div className={`${stat.color} w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-current/10`}>
              <stat.icon size={20} />
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Exam List Table */}
        <div className="xl:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search exams by course or code..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={20} />
              </button>
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none font-bold text-slate-600">
                <option>Active Semester</option>
                <option>Upcoming Only</option>
                <option>Drafts</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Exam & Course</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Venue / Hall</th>
                    <th className="px-6 py-4">Examinees</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {exams.map((exm, i) => (
                    <motion.tr 
                      key={exm.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{exm.course}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{exm.code}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                            <Calendar size={12} className="text-slate-400" />
                            {exm.date}
                          </span>
                          <span className="text-[10px] text-slate-500 mt-1 flex items-center gap-1.5">
                            <Clock size={12} className="text-slate-400" />
                            {exm.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <MapPin size={14} className="text-slate-300" />
                          {exm.hall}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-800">
                        {exm.students} Students
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          exm.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${exm.status === 'Scheduled' ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'}`} />
                          {exm.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer"><Eye size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-amber-600 transition-all cursor-pointer"><Edit3 size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-red-600 transition-all cursor-pointer"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">Generate Complete Schedule PDF</button>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-2xl p-6 text-white shadow-xl">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/20 rounded-xl">
                   <ShieldCheck size={24} className="text-secondary" />
                </div>
                <h3 className="font-bold text-lg">Seat Planning</h3>
             </div>
             <p className="text-xs text-slate-400 mb-6 leading-relaxed">Automatically generate seat plans for all scheduled exams based on student enrollment and hall capacity.</p>
             <button className="w-full py-3.5 bg-secondary text-primary font-extrabold rounded-xl text-sm shadow-lg hover:shadow-secondary/10 hover:-translate-y-0.5 transition-all cursor-pointer">
                Manage Seat Plan
             </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <History size={18} className="text-primary" />
                Recent Results
             </h3>
             <div className="space-y-4">
                {[
                  { title: "Mid-Term Spring '26", status: "Published" },
                  { title: "Quiz 2 - CSE-1102", status: "In Grading" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                     <div>
                        <p className="text-xs font-bold text-slate-700">{item.title}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{item.status}</p>
                     </div>
                     <Download size={14} className="text-slate-300" />
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start gap-3">
             <AlertCircle size={18} className="text-red-500 mt-0.5" />
             <div>
                <h5 className="text-xs font-bold text-red-900">Room Conflict</h5>
                <p className="text-[10px] text-red-700 mt-1">Main Hall A is overbooked for May 15th morning session.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
