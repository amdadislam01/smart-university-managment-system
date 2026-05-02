"use client";

import React from "react";
import { Download, FileText, File, Image as ImageIcon, Music, Video, Search, Filter, MoreVertical, Trash2, ExternalLink, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const files = [
  { id: 1, name: "Semester_Routine_Spring26.pdf", type: "PDF", size: "2.4 MB", date: "27 Apr 2026", category: "Academic" },
  { id: 2, name: "Data_Structures_Lecture_05.pptx", type: "PPTX", size: "15.8 MB", date: "25 Apr 2026", category: "Coursework" },
  { id: 3, name: "Project_Proposal_Draft.docx", type: "DOCX", size: "1.2 MB", date: "24 Apr 2026", category: "Coursework" },
  { id: 4, name: "Fee_Receipt_Jan26.pdf", type: "PDF", size: "850 KB", date: "20 Apr 2026", category: "Financial" },
  { id: 5, name: "Library_Guide_2026.pdf", type: "PDF", size: "5.1 MB", date: "15 Apr 2026", category: "Guides" },
  { id: 6, name: "Convocation_Photo.jpg", type: "JPG", size: "4.2 MB", date: "10 Apr 2026", category: "Misc" },
];

export default function DownloadsPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Downloads</h1>
          <p className="text-gray-500 mt-1">Access all your course materials, forms, and digital resources.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Download size={18} />
            Download All
          </button>
        </div>
      </div>

      {/* Storage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <HardDrive size={20} className="text-primary" />
                  Storage Overview
               </h2>
               <span className="text-xs font-bold text-gray-400">75% Used</span>
            </div>
            <div className="space-y-6">
               <div className="h-4 w-full bg-gray-50 rounded-full overflow-hidden flex">
                  <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
                  <div className="h-full bg-purple-500" style={{ width: '20%' }}></div>
                  <div className="h-full bg-emerald-500" style={{ width: '15%' }}></div>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <StorageType label="Documents" size="1.2 GB" color="bg-blue-500" />
                  <StorageType label="Media" size="650 MB" color="bg-purple-500" />
                  <StorageType label="Forms" size="120 MB" color="bg-emerald-500" />
                  <StorageType label="Others" size="80 MB" color="bg-gray-300" />
               </div>
            </div>
         </div>
         <div className="bg-gradient-to-br from-[#0F2E5D] to-[#2E5E9F] rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="relative z-10">
               <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download size={32} className="text-secondary" />
               </div>
               <h3 className="text-lg font-black mb-2">Cloud Backup</h3>
               <p className="text-xs text-blue-100 opacity-80 mb-6">Your downloads are synced across all your devices automatically.</p>
               <button className="px-6 py-2 bg-white text-primary text-xs font-black rounded-xl hover:bg-secondary transition-colors">
                  Sync Now
               </button>
            </div>
            <Download size={150} className="absolute -bottom-10 -right-10 opacity-5" />
         </div>
      </div>

      {/* File List */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
         <div className="p-8 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Files</h2>
            <div className="flex items-center gap-4">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search files..." 
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
               </div>
               <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <Filter size={20} />
               </button>
            </div>
         </div>
         <div className="overflow-x-auto no-scrollbar">
            <table className="w-full">
               <thead>
                  <tr className="bg-gray-50/50">
                     <th className="text-left py-4 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</th>
                     <th className="text-left py-4 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                     <th className="text-left py-4 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Size</th>
                     <th className="text-left py-4 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                     <th className="text-right py-4 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  {files.map((file, i) => (
                    <motion.tr 
                      key={file.id} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group hover:bg-gray-50 transition-colors"
                    >
                       <td className="py-5 px-8">
                          <div className="flex items-center gap-4">
                             <div className={cn(
                               "w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[10px]",
                               file.type === 'PDF' ? "bg-red-500" : 
                               file.type === 'PPTX' ? "bg-amber-500" : 
                               file.type === 'DOCX' ? "bg-blue-500" : "bg-purple-500"
                             )}>
                                {file.type}
                             </div>
                             <div>
                                <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{file.name}</p>
                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">{file.type} File</p>
                             </div>
                          </div>
                       </td>
                       <td className="py-5 px-8">
                          <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-black uppercase tracking-wider">
                             {file.category}
                          </span>
                       </td>
                       <td className="py-5 px-8 text-xs font-bold text-gray-500">{file.size}</td>
                       <td className="py-5 px-8 text-xs font-bold text-gray-400">{file.date}</td>
                       <td className="py-5 px-8 text-right">
                          <div className="flex items-center justify-end gap-2">
                             <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                                <Download size={18} />
                             </button>
                             <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                <Trash2 size={18} />
                             </button>
                             <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                                <MoreVertical size={18} />
                             </button>
                          </div>
                       </td>
                    </motion.tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-6 bg-gray-50/50 text-center">
            <button className="text-sm font-bold text-primary hover:underline">Show all 48 files</button>
         </div>
      </div>
    </div>
  );
}

function StorageType({ label, size, color }: { label: string, size: string, color: string }) {
  return (
    <div className="flex items-center gap-3">
       <div className={cn("w-2 h-2 rounded-full", color)}></div>
       <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">{label}</p>
          <p className="text-xs font-black text-gray-900 mt-1">{size}</p>
       </div>
    </div>
  );
}
