"use client";

import React from "react";
import { BarChart3, PieChart, LineChart, Download, FileText, Share2 } from "lucide-react";

export default function Reports() {
  const reports = [
    { name: "Attendance Report", desc: "Daily, weekly and monthly attendance analysis.", icon: BarChart3 },
    { name: "Academic Performance", desc: "GPA distribution and subject-wise results.", icon: LineChart },
    { name: "Financial Summary", desc: "Revenue collection and outstanding dues.", icon: PieChart },
    { name: "Inventory Usage", desc: "Stock levels and asset allocation tracking.", icon: BarChart3 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Reports & Analytics</h1>
        <p className="text-slate-500">Generate and export detailed institutional reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <report.icon size={24} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors cursor-pointer" title="Download PDF"><FileText size={18} /></button>
                <button className="p-2 text-slate-400 hover:text-primary transition-colors cursor-pointer" title="Export CSV"><Download size={18} /></button>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">{report.name}</h3>
            <p className="text-sm text-slate-500 mb-6">{report.desc}</p>
            <button className="w-full py-2.5 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
              Generate Detailed Report
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Custom Report Builder</h2>
          <p className="text-slate-400 max-w-md">Need a specific data set? Use our custom builder to filter exactly what you need and export in your preferred format.</p>
          <button className="mt-6 px-6 py-3 bg-secondary text-primary font-bold rounded-xl hover:bg-white transition-all cursor-pointer">
            Open Builder
          </button>
        </div>
        <div className="relative z-10 hidden md:block opacity-20">
          <Share2 size={120} />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      </div>
    </div>
  );
}
