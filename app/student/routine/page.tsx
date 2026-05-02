"use client";

import React from "react";
import { Calendar, Clock, MapPin, User, ChevronLeft, ChevronRight, Filter, Download, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

const routines = [
  { day: "Monday", time: "09:00 AM - 10:30 AM", subject: "Data Structures", code: "CSE 301", room: "Room 402", teacher: "Dr. Sarah", color: "bg-blue-500" },
  { day: "Monday", time: "11:00 AM - 12:30 PM", subject: "Database Systems", code: "CSE 302", room: "Lab 101", teacher: "Prof. Michael", color: "bg-purple-500" },
  { day: "Monday", time: "02:30 PM - 04:00 PM", subject: "Software Engineering", code: "CSE 303", room: "Room 305", teacher: "Dr. Emily", color: "bg-emerald-500" },
  { day: "Tuesday", time: "10:00 AM - 11:30 AM", subject: "Discrete Math", code: "MATH 301", room: "Room 201", teacher: "Dr. Robert", color: "bg-amber-500" },
  { day: "Tuesday", time: "12:00 PM - 01:30 PM", subject: "Digital Logic", code: "CSE 304", room: "Lab 102", teacher: "Prof. Hasan", color: "bg-rose-500" },
];

export default function RoutinePage() {
  const [selectedDay, setSelectedDay] = React.useState("Monday");

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Class Routine</h1>
          <p className="text-gray-500 mt-1">Manage your weekly class schedules and session details.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Calendar size={18} />
            Google Calendar
          </button>
        </div>
      </div>

      {/* Day Selector */}
      <div className="bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-between overflow-x-auto no-scrollbar">
         {days.map((day) => (
           <button
             key={day}
             onClick={() => setSelectedDay(day)}
             className={cn(
               "px-8 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap",
               selectedDay === day ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
             )}
           >
             {day}
           </button>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Timeline View */}
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-xl font-bold text-gray-900">{selectedDay}'s Schedule</h2>
                 <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Filter size={18} /></button>
                 </div>
              </div>
              
              <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                 {routines.filter(r => r.day === selectedDay).length > 0 ? (
                   routines.filter(r => r.day === selectedDay).map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="relative pl-10 group"
                     >
                        <div className={cn("absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125", item.color)}></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] group-hover:bg-white group-hover:shadow-xl group-hover:border-primary/10 transition-all">
                           <div className="space-y-3">
                              <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                 <Clock size={14} className="text-primary" />
                                 {item.time}
                              </div>
                              <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                {item.subject} <span className="text-sm font-bold text-gray-300 ml-2">{item.code}</span>
                              </h3>
                              <div className="flex flex-wrap items-center gap-6">
                                 <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                                    <MapPin size={14} className="text-red-400" />
                                    {item.room}
                                 </div>
                                 <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                                    <User size={14} className="text-blue-400" />
                                    {item.teacher}
                                 </div>
                              </div>
                           </div>
                           <div className="mt-4 md:mt-0 flex gap-2">
                              <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:text-primary hover:border-primary/20 transition-all">Materials</button>
                              <button className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">Join Session</button>
                           </div>
                        </div>
                     </motion.div>
                   ))
                 ) : (
                   <div className="py-20 text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                         <Calendar size={32} className="text-gray-300" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">No classes scheduled</h3>
                      <p className="text-sm text-gray-500">Take a break or focus on self-study today.</p>
                   </div>
                 )}
              </div>
           </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
           <div className="bg-primary text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                 <h3 className="text-lg font-bold mb-2">Next Session</h3>
                 <p className="text-blue-200 text-sm mb-6">Starting in 45 minutes</p>
                 <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-6">
                    <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">Database Systems</p>
                    <p className="text-lg font-black leading-tight">Prof. Michael Chen</p>
                    <p className="text-xs text-blue-200/70 mt-2">11:00 AM • Lab 101</p>
                 </div>
                 <button className="w-full py-4 bg-secondary text-primary font-black rounded-2xl hover:scale-105 transition-transform">
                    Set Reminder
                 </button>
              </div>
              <Clock size={150} className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
           </div>

           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Recent Changes</h3>
              <div className="space-y-4">
                 {[1, 2].map((i) => (
                   <div key={i} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                      <div>
                         <p className="text-xs font-bold text-gray-900 leading-snug">Room change for CSE 301. Now in Room 502.</p>
                         <p className="text-[10px] text-gray-400 mt-1">2 hours ago</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-[2rem] flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all group">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-primary transition-colors">
                <Plus size={20} />
              </div>
              <span className="text-xs font-bold text-gray-500 group-hover:text-primary">Add Custom Event</span>
           </button>
        </div>
      </div>
    </div>
  );
}
