"use client";

import React from "react";
import { 
  Award, 
  Settings2, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Info, 
  Percent, 
  Calculator, 
  ShieldCheck, 
  ArrowUpRight,
  History,
  Lock,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

const gradingScale = [
  { grade: "A+", min: 80, max: 100, point: 4.00, remarks: "Excellent" },
  { grade: "A", min: 75, max: 79, point: 3.75, remarks: "Very Good" },
  { grade: "A-", min: 70, max: 74, point: 3.50, remarks: "Good" },
  { grade: "B+", min: 65, max: 69, point: 3.25, remarks: "Satisfactory" },
  { grade: "B", min: 60, max: 64, point: 3.00, remarks: "Above Average" },
  { grade: "C", min: 50, max: 59, point: 2.00, remarks: "Pass" },
  { grade: "F", min: 0, max: 49, point: 0.00, remarks: "Fail" },
];

export default function GradeManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Grade Management</h1>
          <p className="text-slate-500">Configure university grading scales, GPA rules and passing criteria.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Save size={18} />
            Save Configuration
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Grading Scale Table */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  Grading Scale (UGC Standard)
                </h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer">
                  <Plus size={14} />
                  Add Tier
                </button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Letter Grade</th>
                      <th className="px-6 py-4">Percentage Range</th>
                      <th className="px-6 py-4">Grade Point</th>
                      <th className="px-6 py-4">Remarks</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {gradingScale.map((item, i) => (
                      <motion.tr 
                        key={item.grade}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                           <span className={`text-sm font-bold px-3 py-1 rounded-lg ${
                             item.grade === 'F' ? 'bg-red-50 text-red-600' : 'bg-primary/5 text-primary'
                           }`}>{item.grade}</span>
                        </td>
                        <td className="px-6 py-4">
                           <span className="text-xs font-bold text-slate-700">{item.min}% - {item.max}%</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-800">
                           {item.point.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-slate-500">{item.remarks}</td>
                        <td className="px-6 py-4">
                           <div className="flex items-center justify-center gap-2">
                              <button className="p-1.5 text-slate-400 hover:text-amber-600 cursor-pointer"><Edit3 size={14} /></button>
                              <button className="p-1.5 text-slate-400 hover:text-red-600 cursor-pointer"><Trash2 size={14} /></button>
                           </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                   <Target size={18} className="text-primary" />
                   Passing Criteria
                </h4>
                <div className="space-y-4">
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Min. Passing Mark (%)</label>
                      <input type="number" defaultValue={40} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20" />
                   </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <span className="text-xs font-medium text-slate-600">Must pass Mid-Term & Final separately?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                   </div>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                   <Calculator size={18} className="text-primary" />
                   GPA Scaling
                </h4>
                <div className="space-y-4">
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Maximum GPA Point</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20">
                        <option>4.00 Scale (University Standard)</option>
                        <option>5.00 Scale (National Standard)</option>
                      </select>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <span className="text-xs font-medium text-slate-600">Round GPA to 2 decimal places?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar Configuration */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <Settings2 size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Auto-Grading</h3>
                <p className="text-sm text-slate-400 mb-6">Automatically convert marks to letter grades and points based on defined scales during result processing.</p>
                <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Automation Active</span>
                </div>
                <button className="w-full py-4 bg-secondary text-primary font-extrabold rounded-2xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2">
                  System Settings
                  <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                University Compliance
             </h3>
             <div className="space-y-4">
                <div className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                   <Lock size={16} className="text-amber-500 mt-1" />
                   <p className="text-[11px] text-slate-600 leading-relaxed font-medium">Grading changes are locked for the current semester (Summer 2026). Modifications require Academic Council approval.</p>
                </div>
                <button className="w-full py-3 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all cursor-pointer">
                  <History size={14} />
                  Historical Scales
                </button>
             </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
             <Info size={18} className="text-blue-500 mt-0.5" />
             <p className="text-[11px] text-blue-700 font-medium">This scale follows the University Grants Commission (UGC) standardized grading system for higher education.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
