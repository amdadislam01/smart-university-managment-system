"use client";

import React from "react";
import { 
  Calendar, 
  Plus, 
  Search, 
  Clock, 
  MapPin, 
  User, 
  Filter, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical,
  Printer,
  Copy,
  LayoutGrid,
  Sparkles,
  Edit3,
  Trash2
} from "lucide-react";
import { motion } from "framer-motion";

const timeSlots = [
  "08:30 AM", "09:45 AM", "11:00 AM", "12:15 PM", "01:30 PM", "02:45 PM"
];

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

const routines = [
  { day: "Saturday", time: "08:30 AM", course: "CSE-1101", room: "L-401", teacher: "Dr. Ahmed", section: "A" },
  { day: "Saturday", time: "11:00 AM", course: "MAT-1105", room: "M-201", teacher: "Prof. S. Khan", section: "B" },
  { day: "Sunday", time: "09:45 AM", course: "EEE-1201", room: "E-101", teacher: "Ms. Jahan", section: "A" },
  { day: "Monday", time: "12:15 PM", course: "CSE-1102", room: "L-402", teacher: "Mr. Rakib", section: "C" },
  { day: "Wednesday", time: "08:30 AM", course: "ENG-301", room: "H-305", teacher: "Dr. Mitu", section: "A" },
];

export default function RoutineManagement() {
  const [activeDay, setActiveDay] = React.useState("Saturday");

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Class Routines</h1>
          <p className="text-slate-500">Master timetable management and faculty scheduling.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Printer size={18} />
            Print Routine
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Add Schedule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Filter size={18} className="text-primary" />
              Filter Schedule
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Select Semester</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Summer 2026</option>
                  <option>Spring 2026</option>
                  <option>Fall 2025</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Select Department</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Computer Science (CSE)</option>
                  <option>Electrical (EEE)</option>
                  <option>Business (BBA)</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Select Section</label>
                <div className="grid grid-cols-3 gap-2">
                  {["A", "B", "C", "D", "E", "F"].map(s => (
                    <button key={s} className={`py-2 rounded-lg text-xs font-bold transition-all ${s === 'A' ? 'bg-primary text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                      Section {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3.5 bg-slate-100 text-slate-600 font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all cursor-pointer">
              <Copy size={16} />
              Clone Routine
            </button>
          </div>

          <div className="bg-primary p-6 rounded-2xl text-white shadow-xl shadow-primary/20">
             <div className="flex justify-between items-start mb-4">
                <Sparkles size={32} className="text-secondary" />
                <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold uppercase">Beta</span>
             </div>
             <h4 className="font-bold mb-2 text-lg">Auto-Schedule AI</h4>
             <p className="text-xs text-white/60 mb-4 leading-relaxed">Let our AI engine generate an optimized, conflict-free routine based on faculty availability and room constraints.</p>
             <button className="w-full py-3 bg-white text-primary font-bold rounded-xl text-xs hover:bg-secondary transition-all cursor-pointer">
              Try Smart Scheduler
             </button>
          </div>
        </div>

        {/* Main Timetable Area */}
        <div className="xl:col-span-3 space-y-6">
           {/* Day Selector */}
           <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeDay === day 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {day}
                </button>
              ))}
           </div>

           {/* Routine Grid */}
           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden min-h-[600px]">
              <div className="grid grid-cols-1 divide-y divide-slate-100">
                {timeSlots.map((time, idx) => {
                  const classItem = routines.find(r => r.day === activeDay && r.time === time);
                  return (
                    <div key={idx} className="flex group min-h-[100px] hover:bg-slate-50/30 transition-colors">
                      <div className="w-32 flex flex-col items-center justify-center border-r border-slate-50 bg-slate-50/20 group-hover:bg-primary group-hover:text-white transition-all">
                        <Clock size={16} className="mb-1 opacity-50 group-hover:opacity-100" />
                        <span className="text-[11px] font-bold uppercase tracking-tighter">{time}</span>
                      </div>
                      <div className="flex-1 p-6 relative">
                        {classItem ? (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white border-l-4 border-primary rounded-xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 group/item"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-extrabold text-slate-800">{classItem.course}</span>
                                <span className="px-2 py-0.5 bg-primary/5 text-primary text-[10px] font-bold rounded">Section {classItem.section}</span>
                              </div>
                              <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                                <span className="flex items-center gap-1.5"><User size={14} className="text-slate-400" /> {classItem.teacher}</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-400" /> Room {classItem.room}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <button className="p-2 text-slate-400 hover:text-amber-600 transition-all cursor-pointer"><Edit3 size={16} /></button>
                              <button className="p-2 text-slate-400 hover:text-red-600 transition-all cursor-pointer"><Trash2 size={16} /></button>
                              <button className="p-2 text-slate-400 hover:text-slate-800 transition-all cursor-pointer"><MoreVertical size={16} /></button>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-100 rounded-xl group/empty opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-xs font-bold text-slate-400 hover:text-primary transition-all flex items-center gap-2 cursor-pointer">
                              <Plus size={14} />
                              Add Class Slot
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
           </div>

           {/* Conflict Alert (Fixed Bottom) */}
           <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                    <Calendar size={20} />
                 </div>
                 <div>
                    <h5 className="text-sm font-bold text-amber-900 leading-none">Routine Conflict Detected</h5>
                    <p className="text-[11px] text-amber-700 mt-1">Dr. Ahmed is already scheduled for CSE-4105 at 11:00 AM on Monday in Room L-401.</p>
                 </div>
              </div>
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700 transition-all cursor-pointer">
                Resolve Conflict
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
