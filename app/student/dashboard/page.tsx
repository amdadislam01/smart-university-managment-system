"use client";


import React from "react";
import { 
  Users, 
  TrendingUp, 
  CreditCard, 
  MessageSquare, 
  Calendar, 
  Clock, 
  AlertCircle, 
  ChevronRight,
  BookOpen,
  ArrowUpRight,
  MoreVertical,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Attendance",
    value: "87%",
    trend: "+2%",
    icon: Users,
    color: "bg-blue-500",
    bgLight: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    title: "CGPA",
    value: "3.65",
    trend: "+0.15",
    icon: TrendingUp,
    color: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    title: "Fees Due",
    value: "৳15,000",
    trend: "Due in 15 days",
    icon: CreditCard,
    color: "bg-amber-500",
    bgLight: "bg-amber-50",
    text: "text-amber-600",
  },
  {
    title: "Messages",
    value: "3 New",
    trend: "2 from teachers",
    icon: MessageSquare,
    color: "bg-purple-500",
    bgLight: "bg-purple-50",
    text: "text-purple-600",
  },
];

const alerts = [
  {
    id: 1,
    type: "warning",
    message: "Semester fee due on 2026-05-15",
    date: "15 May 2026",
    icon: AlertCircle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    id: 2,
    type: "message",
    message: "New message from Dr. Sarah (Data Structures)",
    date: "Just now",
    icon: MessageSquare,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
];

const courses = [
  {
    id: 1,
    name: "Advanced Data Structures",
    code: "CSE 301",
    teacher: "Dr. Sarah Johnson",
    progress: 75,
    nextClass: "Tomorrow, 10:00 AM",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Database Management Systems",
    code: "CSE 302",
    teacher: "Prof. Michael Chen",
    progress: 60,
    nextClass: "Today, 02:30 PM",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Software Engineering",
    code: "CSE 303",
    teacher: "Dr. Emily Brown",
    progress: 45,
    nextClass: "Wednesday, 11:30 AM",
    color: "bg-emerald-500",
  },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back, Md Amin! 👋</h1>
          <p className="text-gray-500 mt-1">Here's what's happening with your academic progress today.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
          <Calendar size={16} />
          <span>Monday, 27 April 2026</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-xl", stat.bgLight)}>
                <stat.icon className={cn("size-6", stat.text)} />
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", stat.bgLight, stat.text)}>
                  {stat.trend}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress & Charts Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Charts Placeholder - In a real app, use a charting library like Recharts or Chart.js */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Attendance & Performance</h3>
                <p className="text-sm text-gray-500">Academic year 2025-2026 progress</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-xs font-medium text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Attendance
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-xs font-medium text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  CGPA
                </div>
              </div>
            </div>
            
            {/* Mock Chart Visualization */}
            <div className="h-64 flex items-end justify-between gap-4 px-2">
              {[65, 80, 45, 90, 75, 85, 60, 95, 87].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={cn(
                      "w-full rounded-t-lg transition-all duration-300 relative overflow-hidden",
                      i === 8 ? "bg-primary" : "bg-blue-100 group-hover:bg-blue-200"
                    )}
                  >
                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 1.5 }}
                       className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" 
                    />
                  </motion.div>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][i]}
                  </span>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {height}% Attendance
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Courses */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Current Courses</h3>
              <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                View All <ChevronRight size={14} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div 
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold", course.color)}>
                      {course.code.split(' ')[0][0]}{course.code.split(' ')[1][0]}
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{course.code}</span>
                      <p className="text-xs font-medium text-gray-900 mt-0.5">{course.nextClass}</p>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{course.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{course.teacher}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-500 font-medium">Syllabus Progress</span>
                      <span className="text-gray-900 font-bold">{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className={cn("h-full rounded-full", course.color)}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar content */}
        <div className="space-y-8">
          {/* Alerts Section */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Alerts</h3>
              <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider animate-pulse">
                Action Required
              </span>
            </div>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={cn("p-4 rounded-2xl border flex gap-4 transition-transform hover:scale-[1.02] cursor-pointer", alert.bg, alert.border)}
                >
                  <div className={cn("shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm", alert.color)}>
                    <alert.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{alert.message}</p>
                    <p className="text-[10px] font-medium text-gray-500 mt-1 uppercase tracking-tight flex items-center gap-1">
                      <Clock size={10} /> {alert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sm font-semibold text-gray-500 hover:border-primary/50 hover:text-primary transition-all">
              Dismiss All Alerts
            </button>
          </div>

          {/* Upcomming Events/Tasks */}
          <div className="bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-700">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Final Exams</h3>
              <p className="text-primary-foreground/70 text-sm mb-6">Your final exams start in 24 days. Start your preparation today!</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="bg-secondary text-primary p-2 rounded-lg">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Exam Schedule</p>
                    <p className="text-[10px] opacity-70">Released on 2026-04-20</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto opacity-50" />
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="bg-emerald-500 text-white p-2 rounded-lg">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Admit Card</p>
                    <p className="text-[10px] opacity-70">Ready to download</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto opacity-50" />
                </div>
              </div>
              
              <button className="w-full mt-6 bg-secondary text-primary font-bold py-3 rounded-2xl hover:bg-white transition-colors">
                View Exam Center
              </button>
            </div>
          </div>

          {/* Quick Support */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                <HelpCircle size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Need Help?</p>
                <p className="text-xs text-gray-500">Contact academic advisor</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpCircle({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
    </svg>
  );
}
