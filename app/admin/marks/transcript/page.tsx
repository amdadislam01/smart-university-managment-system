"use client";

import React from "react";
import { 
  FileCheck, 
  Search, 
  Download, 
  Printer, 
  ShieldCheck, 
  History, 
  QrCode, 
  User, 
  BookOpen, 
  GraduationCap, 
  ArrowUpRight,
  ExternalLink,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

const requestHistory = [
  { id: "TR-5501", student: "Md. Amin Islam", stuId: "STU-1001", type: "Official", status: "Verified", date: "2026-04-20" },
  { id: "TR-5502", student: "Sifat Rahman", stuId: "STU-1002", type: "Un-official", status: "Ready", date: "2026-04-22" },
  { id: "TR-5503", student: "Jarin Tasnim", stuId: "STU-1003", type: "Official", status: "Pending Signature", date: "2026-04-24" },
];

export default function TranscriptManagement() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Academic Transcripts</h1>
          <p className="text-slate-500">Generate, verify and manage official institutional academic transcripts.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
            <History size={18} />
            Request Logs
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
            <FileCheck size={18} />
            Verify Transcript
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Transcript Generator & Preview Area */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-8 border-b border-slate-50 bg-slate-50/30">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                   <Search size={20} className="text-primary" />
                   Generate Student Transcript
                </h3>
                <div className="flex flex-col md:flex-row gap-4">
                   <div className="flex-1 relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="Enter Student ID (e.g. STU-1001)..." 
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                   </div>
                   <button className="px-8 py-4 bg-primary text-white font-extrabold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                      Fetch Records
                   </button>
                </div>
             </div>

             {/* Preview Placeholder */}
             <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                   <FileText size={40} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-slate-400">No Transcript Loaded</h4>
                   <p className="text-sm text-slate-300 max-w-[300px] mx-auto">Enter a valid student ID above to preview and generate their official transcript.</p>
                </div>
             </div>
          </div>

          {/* Transcript Features Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <QrCode size={20} />
                   </div>
                   <h5 className="font-bold text-emerald-900">QR Verification</h5>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">Every official transcript includes a secure QR code for instant third-party verification via the public portal.</p>
             </div>
             <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <ShieldCheck size={20} />
                   </div>
                   <h5 className="font-bold text-blue-900">Digital Signature</h5>
                </div>
                <p className="text-xs text-blue-700 leading-relaxed">Automatic application of Controller of Examinations' digital signature for all verified transcript generations.</p>
             </div>
          </div>
        </div>

        {/* Recent Requests Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-5 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                   <History size={16} className="text-primary" />
                   Recent Requests
                </h3>
                <button className="text-[10px] font-bold text-primary hover:underline cursor-pointer">View All</button>
             </div>
             <div className="divide-y divide-slate-50">
                {requestHistory.map((req, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="p-4 hover:bg-slate-50 transition-colors group cursor-pointer"
                   >
                      <div className="flex justify-between items-start mb-2">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-[10px] font-bold">
                               {req.student.charAt(0)}
                            </div>
                            <div>
                               <p className="text-xs font-bold text-slate-800">{req.student}</p>
                               <p className="text-[10px] text-slate-400 font-medium">{req.stuId}</p>
                            </div>
                         </div>
                         <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            req.status === 'Verified' ? 'bg-emerald-100 text-emerald-600' : 
                            req.status === 'Ready' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                         }`}>
                            {req.status}
                         </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                         <span>{req.type} Transcript</span>
                         <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                            <Download size={12} />
                            Download
                         </span>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <GraduationCap size={32} className="text-secondary mb-6" />
                <h3 className="text-lg font-bold mb-3">Graduation Clearance</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">Bulk verify all requirements for graduating students before issuing final complete transcripts.</p>
                <button className="w-full py-3.5 bg-secondary text-primary font-extrabold rounded-xl text-xs hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-secondary/5">
                   Process Clearance
                   <ArrowUpRight size={14} />
                </button>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <BookOpen size={100} />
             </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3">
             <AlertCircle size={18} className="text-amber-500 mt-0.5" />
             <p className="text-[10px] text-amber-700 font-medium leading-relaxed">Official transcripts require a fee of 500 BDT. Un-official copies for student reference are free of charge.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
