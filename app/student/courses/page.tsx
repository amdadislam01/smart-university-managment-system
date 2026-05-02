"use client";

import React from "react";
import { BookOpen, User, Clock, CheckCircle2, ChevronRight, Play, FileText, Layout, Grid, List } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const enrolledCourses = [
  { 
    id: 1, 
    name: "Advanced Data Structures", 
    code: "CSE 301", 
    instructor: "Dr. Sarah Johnson", 
    progress: 75, 
    completed: 18, 
    total: 24, 
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 2, 
    name: "Database Management Systems", 
    code: "CSE 302", 
    instructor: "Prof. Michael Chen", 
    progress: 60, 
    completed: 15, 
    total: 25, 
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1544383335-c5efa9c62524?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 3, 
    name: "Software Engineering", 
    code: "CSE 303", 
    instructor: "Dr. Emily Brown", 
    progress: 45, 
    completed: 11, 
    total: 24, 
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 4, 
    name: "Discrete Mathematics", 
    code: "MATH 301", 
    instructor: "Dr. Robert Smith", 
    progress: 90, 
    completed: 18, 
    total: 20, 
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400"
  },
];

export default function CoursesPage() {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Courses</h1>
          <p className="text-gray-500 mt-1">Manage your enrolled courses and academic resources.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white border border-gray-200 rounded-xl p-1">
             <button 
               onClick={() => setView('grid')}
               className={cn("p-2 rounded-lg transition-colors", view === 'grid' ? "bg-primary text-white" : "text-gray-400 hover:text-gray-600")}
             >
               <Grid size={18} />
             </button>
             <button 
               onClick={() => setView('list')}
               className={cn("p-2 rounded-lg transition-colors", view === 'list' ? "bg-primary text-white" : "text-gray-400 hover:text-gray-600")}
             >
               <List size={18} />
             </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Layout size={18} />
            Course Catalog
          </button>
        </div>
      </div>

      {/* Categories / Filter */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
         {['All Courses', 'In Progress', 'Completed', 'Upcoming'].map((cat, i) => (
           <button 
             key={cat} 
             className={cn(
               "px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
               i === 0 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white border border-gray-100 text-gray-500 hover:border-primary/20 hover:text-primary"
             )}
           >
             {cat}
           </button>
         ))}
      </div>

      <div className={cn(
        "grid gap-8",
        view === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
      )}>
        {enrolledCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group",
              view === 'list' && "flex md:items-center p-2"
            )}
          >
            <div className={cn(
              "relative",
              view === 'grid' ? "h-48" : "w-48 h-40 shrink-0 rounded-2xl overflow-hidden"
            )}>
               <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
               <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-black uppercase tracking-widest border border-white/30">
                  {course.code}
               </div>
               <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-xl scale-75 group-hover:scale-100 transition-transform">
                    <Play size={24} fill="currentColor" />
                  </div>
               </button>
            </div>

            <div className={cn("p-6 flex-1", view === 'list' && "flex items-center justify-between")}>
               <div className={view === 'list' ? "max-w-md" : ""}>
                 <div className="flex items-center gap-2 text-xs font-bold text-primary mb-2">
                    <div className={cn("w-2 h-2 rounded-full", course.color)}></div>
                    Engineering
                 </div>
                 <h3 className="text-lg font-black text-gray-900 group-hover:text-primary transition-colors leading-tight mb-2">
                   {course.name}
                 </h3>
                 <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                    <User size={14} />
                    {course.instructor}
                 </div>
               </div>

               <div className={cn(
                 view === 'grid' ? "space-y-4" : "flex items-center gap-12"
               )}>
                 <div className={view === 'list' ? "w-48" : "w-full"}>
                   <div className="flex items-center justify-between text-[10px] font-bold mb-1.5 uppercase tracking-tighter">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-gray-900">{course.progress}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className={cn("h-full rounded-full", course.color)}
                      />
                   </div>
                 </div>

                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                          <FileText size={12} />
                          {course.completed}/{course.total} Lessons
                       </div>
                       <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                          <Clock size={12} />
                          4h Remaining
                       </div>
                    </div>
                    {view === 'grid' && (
                      <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                        <ChevronRight size={16} />
                      </button>
                    )}
                 </div>
                 {view === 'list' && (
                   <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                      Continue Learning
                   </button>
                 )}
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Resources */}
      <div className="mt-12 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
         <h2 className="text-xl font-bold text-gray-900 mb-8">Recommended for You</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-3 cursor-pointer group">
                 <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Play size={24} className="text-primary" />
                    </div>
                 </div>
                 <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">Special Lecture: Microservices with Docker</h4>
                 <p className="text-[10px] font-medium text-gray-500">By Dr. Ahmed • 45 mins</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
