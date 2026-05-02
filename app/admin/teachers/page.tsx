"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, Plus, Mail, Phone, Eye, Edit3, Trash2, Loader2 } from "lucide-react";

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTeachers = async (search = "") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/teachers${search ? `?search=${search}` : ""}`);
      const data = await res.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTeachers(searchTerm);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Teacher Management</h1>
          <p className="text-slate-500">Manage faculty members, departments and contact info.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={16} />
            Add Teacher
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-[400px]">
        <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
          <form onSubmit={handleSearch} className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search teachers..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button type="button" className="p-2 border border-slate-200 rounded-lg bg-white text-slate-500 hover:text-primary cursor-pointer">
              <Filter size={18} />
            </button>
          </form>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Contact Info</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {teachers.map((teacher) => (
                  <tr key={teacher._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-primary">{teacher.teacherId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                          {teacher.name.charAt(0)}
                        </div>
                        <span className="text-sm font-bold text-slate-800">{teacher.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{teacher.department}</td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <Mail size={12} /> {teacher.email}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <Phone size={12} /> 01700000000 {/* Placeholder */}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        teacher.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary transition-all cursor-pointer"><Eye size={16} /></button>
                        <button className="p-1.5 text-slate-400 hover:text-amber-600 transition-all cursor-pointer"><Edit3 size={16} /></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-all cursor-pointer"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {teachers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-slate-400 text-sm">No teachers found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
