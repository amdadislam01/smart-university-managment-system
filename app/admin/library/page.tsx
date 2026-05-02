"use client";

import React from "react";
import { 
  Library, 
  Search, 
  Plus, 
  BookOpen, 
  UserPlus, 
  History, 
  AlertCircle, 
  CheckCircle2, 
  MoreVertical,
  Book,
  Clock,
  ArrowRight,
  Filter,
  Download
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Books", value: "12,450", icon: Library, color: "bg-blue-500" },
  { label: "Issued Books", value: "3,240", icon: BookOpen, color: "bg-emerald-500" },
  { label: "Overdue Books", value: "158", icon: AlertCircle, color: "bg-red-500" },
  { label: "New Arrivals", value: "45", icon: Plus, color: "bg-purple-500" },
];

const recentIssues = [
  { id: "ISS-1024", book: "Fundamentals of Algorithms", member: "Md. Amin (STU-1001)", date: "2026-04-25", dueDate: "2026-05-02", status: "Active" },
  { id: "ISS-1025", book: "Organic Chemistry Vol. 2", member: "Dr. Sarah (TCH-042)", date: "2026-04-24", dueDate: "2026-05-15", status: "Active" },
  { id: "ISS-1022", book: "Modern Economic Theory", member: "Jarin Tasnim (STU-2045)", date: "2026-04-10", dueDate: "2026-04-17", status: "Overdue" },
];

const popularBooks = [
  { title: "Introduction to AI", author: "Russell & Norvig", available: 5, total: 12 },
  { title: "Calculus Early Transcendentals", author: "James Stewart", available: 2, total: 8 },
  { title: "Clean Code", author: "Robert C. Martin", available: 0, total: 5 },
];

export default function LibraryPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Library Management</h1>
          <p className="text-slate-500">Manage catalog, student borrowings, and digital resources.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <Download size={18} />
            Export Catalog
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={18} />
            Add New Book
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white shadow-lg shadow-current/10`}>
                <stat.icon size={20} />
              </div>
              <button className="text-slate-300 hover:text-slate-600 transition-colors cursor-pointer">
                <MoreVertical size={16} />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Records Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by book title, ISBN or member..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={18} />
              </button>
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none font-medium">
                <option>Active Borrowings</option>
                <option>Overdue Only</option>
                <option>Returned History</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <History size={18} className="text-primary" />
                Current Borrowings
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Issue ID</th>
                    <th className="px-6 py-4">Book & Member</th>
                    <th className="px-6 py-4">Issue Date</th>
                    <th className="px-6 py-4">Due Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentIssues.map((issue) => (
                    <tr key={issue.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 text-xs font-bold text-slate-500">{issue.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{issue.book}</span>
                          <span className="text-[10px] text-primary font-medium">{issue.member}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-600 font-medium">{issue.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                          <Clock size={14} className={issue.status === 'Overdue' ? 'text-red-500' : 'text-slate-400'} />
                          {issue.dueDate}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          issue.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {issue.status === 'Active' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                          {issue.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="px-3 py-1 bg-slate-100 text-slate-600 hover:bg-primary hover:text-white rounded-lg text-[10px] font-bold transition-all cursor-pointer">
                          Return
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">View All Transactions</button>
            </div>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          {/* Issue Book Form Card */}
          <div className="bg-slate-800 rounded-2xl p-6 text-white shadow-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-secondary">
              <UserPlus size={20} />
              Quick Issue
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Member ID</label>
                <input type="text" placeholder="STU-1001" className="w-full bg-slate-700 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Book ISBN / ID</label>
                <input type="text" placeholder="ISBN 978-01..." className="w-full bg-slate-700 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none" />
              </div>
              <button className="w-full py-3.5 bg-secondary text-primary font-extrabold rounded-xl text-sm shadow-lg hover:shadow-secondary/10 hover:-translate-y-0.5 transition-all cursor-pointer">
                Process Issue
              </button>
            </div>
          </div>

          {/* Popular / Low Stock */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Book size={18} className="text-primary" />
              High Demand Books
            </h3>
            <div className="space-y-6">
              {popularBooks.map((book, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{book.title}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{book.author}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      book.available === 0 ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {book.available} Available
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${book.available === 0 ? 'bg-red-500' : 'bg-primary'}`} 
                      style={{ width: `${(book.available/book.total)*100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 flex items-center justify-center gap-2 text-xs font-bold text-primary group cursor-pointer">
              View Analytics
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
