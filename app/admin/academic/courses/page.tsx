"use client";

import React from "react";
import { 
  Book, 
  Plus, 
  Search, 
  Building2, 
  Award, 
  FileText, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  Eye,
  GraduationCap,
  Download,
  Upload,
  BookOpen,
  Library
} from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  { id: "CSE-1101", title: "Introduction to Computer Science", dept: "CSE", credits: 3.0, type: "Core", status: "Active" },
  { id: "CSE-1102", title: "Structured Programming Language", dept: "CSE", credits: 4.0, type: "Core", status: "Active" },
  { id: "EEE-1201", title: "Electrical Circuits", dept: "EEE", credits: 3.0, type: "Core", status: "Active" },
  { id: "MAT-1105", title: "Differential and Integral Calculus", dept: "Science", credits: 3.0, type: "General", status: "Active" },
  { id: "CSE-4105", title: "Artificial Intelligence", dept: "CSE", credits: 3.0, type: "Elective", status: "Active" },
  { id: "BBA-2101", title: "Principles of Accounting", dept: "BBA", credits: 3.0, type: "Core", status: "Active" },
];

const stats = [
  { label: "Total Courses", value: "420", icon: Library, color: "bg-blue-500" },
  { label: "Core Courses", value: "280", icon: BookOpen, color: "bg-emerald-500" },
  { label: "Elective Courses", value: "140", icon: Award, color: "bg-purple-500" },
  { label: "Total Credits", value: "1,260", icon: FileText, color: "bg-amber-500" },
];

export default function CourseManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Course Management</h1>
          <p className="text-slate-500">Manage university curriculum, course codes, and credit distributions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Upload size={18} />
            Bulk Import
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Add Course
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

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {/* Table Filters */}
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search courses by title, code or department..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:text-primary transition-all cursor-pointer">
              <Filter size={18} />
              All Depts
            </button>
            <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none font-bold text-slate-600">
              <option>Undergraduate</option>
              <option>Graduate</option>
              <option>Post-Graduate</option>
            </select>
          </div>
        </div>

        {/* Courses Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
              <tr>
                <th className="px-6 py-4">Course Info</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Credits</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Syllabus</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {courses.map((course, i) => (
                <motion.tr 
                  key={course.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{course.title}</span>
                      <span className="text-[10px] text-slate-400 font-bold tracking-widest">{course.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                      <Building2 size={14} className="text-slate-300" />
                      {course.dept}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 w-fit px-2 py-1 rounded">
                      <Award size={14} className="text-amber-500" />
                      {course.credits.toFixed(1)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      course.type === 'Core' ? 'bg-blue-50 text-blue-600' : 
                      course.type === 'Elective' ? 'bg-purple-50 text-purple-600' : 'bg-slate-50 text-slate-600'
                    }`}>
                      {course.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:underline cursor-pointer">
                      <FileText size={14} />
                      View PDF
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary transition-all cursor-pointer" title="Preview Course"><Eye size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-amber-600 transition-all cursor-pointer" title="Edit Course"><Edit3 size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-red-600 transition-all cursor-pointer" title="Delete Course"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium tracking-wide">Showing 6 courses of 420 items in catalog</p>
          <div className="flex items-center gap-4">
            <button className="text-xs text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer">
              Download Catalog (CSV)
              <Download size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
