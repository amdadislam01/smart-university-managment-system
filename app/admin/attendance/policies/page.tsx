"use client";

import React from "react";
import { 
  Settings2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Info, 
  Bell, 
  ArrowUpRight,
  Globe,
  UserCheck,
  History,
  Lock
} from "lucide-react";
import { motion } from "framer-motion";

const holidays = [
  { id: 1, name: "Eid-ul-Fitr", type: "Religious", start: "2026-03-31", end: "2026-04-02", status: "Upcoming" },
  { id: 2, name: "Bengali New Year", type: "National", start: "2026-04-14", end: "2026-04-14", status: "Upcoming" },
  { id: 3, name: "Independence Day", type: "National", start: "2026-03-26", end: "2026-03-26", status: "Passed" },
];

export default function AttendancePolicies() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Attendance Policies</h1>
          <p className="text-slate-500">Configure global attendance rules, thresholds and holiday schedules.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <Save size={18} />
            Apply Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Policy Configuration */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Settings2 size={18} className="text-primary" />
                  Global Attendance Rules
                </h3>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">Active</span>
             </div>
             <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                   <div>
                      <label className="text-xs font-bold text-slate-600 block mb-2 flex items-center gap-2">
                         Minimum Attendance (%)
                         <Info size={14} className="text-slate-300" />
                      </label>
                      <input type="number" defaultValue={75} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20" />
                      <p className="text-[10px] text-slate-400 mt-2">Students below this threshold will be flagged as defaulters.</p>
                   </div>
                   <div>
                      <label className="text-xs font-bold text-slate-600 block mb-2">Late Entrance Buffer (Min)</label>
                      <div className="flex items-center gap-3">
                        <input type="number" defaultValue={15} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20" />
                        <span className="text-xs font-bold text-slate-400">Minutes</span>
                      </div>
                   </div>
                </div>
                <div className="space-y-6">
                   <div>
                      <label className="text-xs font-bold text-slate-600 block mb-2">Penalty for Absence</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Deduct Marks (Automatic)</option>
                        <option>Fine Assignment (Daily)</option>
                        <option>Manual Review Only</option>
                      </select>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl border border-primary/10">
                      <div>
                        <p className="text-xs font-bold text-primary">Biometric Sync</p>
                        <p className="text-[10px] text-slate-500">Auto-sync gate entries daily</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                   </div>
                </div>
             </div>
          </div>

          {/* Holiday Calendar */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  Holiday Calendar 2026
                </h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer">
                  <Plus size={14} />
                  Add Holiday
                </button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Holiday Name</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Duration</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {holidays.map((h) => (
                      <tr key={h.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                           <span className="text-sm font-bold text-slate-800">{h.name}</span>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-slate-500">{h.type}</td>
                        <td className="px-6 py-4">
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-slate-700">{h.start}</span>
                              {h.start !== h.end && <span className="text-[10px] text-slate-400">to {h.end}</span>}
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                             h.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                           }`}>
                             {h.status}
                           </span>
                        </td>
                        <td className="px-6 py-4">
                           <div className="flex gap-2">
                              <button className="p-1.5 text-slate-400 hover:text-amber-600 cursor-pointer"><Edit3 size={14} /></button>
                              <button className="p-1.5 text-slate-400 hover:text-red-600 cursor-pointer"><Trash2 size={14} /></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <Bell size={32} className="text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Automation Hub</h3>
                <div className="space-y-4 mb-8">
                   {[
                     { label: "Auto-SMS on Absence", active: true },
                     { label: "Weekly Admin Reports", active: false },
                     { label: "Student Threshold Alerts", active: true },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-300">{item.label}</span>
                        <div className={`w-8 h-4 rounded-full relative transition-colors ${item.active ? 'bg-secondary' : 'bg-slate-700'}`}>
                           <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`} />
                        </div>
                     </div>
                   ))}
                </div>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer">
                  Configure Notifications
                  <ArrowUpRight size={14} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                Compliance & Rules
             </h3>
             <div className="space-y-4">
                <div className="flex gap-3 items-start">
                   <div className="mt-1 p-1 bg-blue-50 text-blue-600 rounded">
                      <Globe size={14} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-700">Academic Ordinance 2024</p>
                      <p className="text-[10px] text-slate-500 mt-1">Policies are synced with University regulation § 4.2.</p>
                   </div>
                </div>
                <div className="flex gap-3 items-start">
                   <div className="mt-1 p-1 bg-emerald-50 text-emerald-600 rounded">
                      <UserCheck size={14} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-700">Biometric Integrity</p>
                      <p className="text-[10px] text-slate-500 mt-1">Manual edits require HOD digital signature.</p>
                   </div>
                </div>
             </div>
             <button className="w-full mt-6 py-3 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all cursor-pointer">
                <History size={14} />
                View Policy History
             </button>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3">
             <Lock size={18} className="text-amber-500 mt-0.5" />
             <p className="text-[11px] text-amber-700 font-medium">Only Super Admins can modify Global Attendance Rules. Changes are logged for audit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
