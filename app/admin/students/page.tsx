"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, Plus, FileSpreadsheet, Eye, Edit3, Trash2, Loader2 } from "lucide-react";

export default function StudentManagement() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async (search = "") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/students${search ? `?search=${search}` : ""}`);
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStudents(searchTerm);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Student Management</h1>
          <p className="text-slate-500">Manage student profiles, academic history and enrollment.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer">
            <FileSpreadsheet size={16} />
            Bulk Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={16} />
            Add Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Panel */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Filter size={18} />
            Filters
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Student Search</label>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="ID, Name, Email..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none"
                />
              </form>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Class/Section</label>
              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none">
                <option>All Classes</option>
                <option>CSE-A</option>
                <option>CSE-B</option>
                <option>EEE-A</option>
                <option>BBA-C</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Status</label>
              <div className="space-y-2">
                {["Active", "Inactive", "Graduated", "Suspended"].map((status) => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-slate-600">{status}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Student Table */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-[400px]">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Student ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Class</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {students.map((student) => (
                    <tr key={student._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-xs font-bold text-primary">{student.studentId}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800">{student.name}</td>
                      <td className="px-6 py-4 text-xs text-slate-600 font-medium">CSE-A</td> {/* Hardcoded for now until classId populated */}
                      <td className="px-6 py-4 text-xs text-slate-500">{student.email}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          student.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {student.status}
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
                  {students.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-slate-400 text-sm">No students found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

