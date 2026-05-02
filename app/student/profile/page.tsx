"use client";

import React from "react";
import { 
  User, Mail, Phone, MapPin, Calendar, Book, 
  GraduationCap, Edit3, Camera, Shield, Award, 
  FileText, ExternalLink, QrCode, Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = ["Overview", "Academic Details", "Documents"];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("Overview");

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      {/* Profile Header - Clean & Minimalist */}
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-40 w-full bg-gray-50 relative">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100"></div>
        </div>

        <div className="px-10 pb-10 flex flex-col md:flex-row items-center md:items-end gap-8 -mt-16 relative z-10">
           <div className="relative group">
              <div className="w-40 h-40 rounded-3xl bg-white p-1 shadow-md border border-gray-100">
                 <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center text-primary/30 font-black text-4xl border border-gray-100">
                    MA
                 </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-3 right-3 p-2 bg-white text-gray-400 rounded-xl shadow-lg border border-gray-100 hover:text-primary transition-colors"
              >
                <Camera size={18} />
              </motion.button>
           </div>
           
           <div className="flex-1 text-center md:text-left pb-2">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                 <h1 className="text-3xl font-bold text-gray-900">Md Amin</h1>
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase tracking-wider">
                    Active Student
                 </span>
              </div>
              <p className="text-gray-500 font-medium flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
                 <span>Bachelor of Science in CSE</span>
                 <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-300"></span>
                 <span className="text-gray-400">ID: 2023-01-123</span>
              </p>
           </div>

           <div className="flex items-center gap-3 pb-2">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                 <Edit3 size={16} />
                 Edit Profile
              </button>
           </div>
        </div>
      </section>

      {/* Navigation & Content Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 space-y-1">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-4 mb-4">Account Menu</p>
           {tabs.map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={cn(
                 "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
                 activeTab === tab ? "bg-primary/5 text-primary shadow-sm" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
               )}
             >
               {tab}
               {activeTab === tab && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
             </button>
           ))}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "Overview" && (
                <div className="space-y-10">
                   {/* About Me */}
                   <div className="space-y-4">
                      <h2 className="text-lg font-bold text-gray-900 px-1">About Me</h2>
                      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                         <p className="text-gray-600 leading-relaxed font-medium">
                            Passionate Computer Science student with a strong interest in software development and artificial intelligence. 
                            Always eager to learn new technologies and contribute to innovative projects. 
                            Currently specializing in full-stack web architectures and high-performance data structures.
                         </p>
                         <div className="mt-8 flex items-center gap-3">
                            <SocialLink icon={LinkedinIcon} href="#" />
                            <SocialLink icon={GithubIcon} href="#" />
                            <SocialLink icon={TwitterIcon} href="#" />
                            <SocialLink icon={Globe} href="#" />
                         </div>
                      </div>
                   </div>

                   {/* Information Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Contact Details</h3>
                         <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                            <InfoLine icon={Mail} label="University Email" value="amin.cse23@nextgen.edu" />
                            <InfoLine icon={Phone} label="Primary Phone" value="+880 1712 345678" />
                            <InfoLine icon={MapPin} label="Home Address" value="Dhanmondi, Dhaka" />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Campus ID Card</h3>
                         <div className="bg-gray-900 p-6 rounded-2xl shadow-xl relative overflow-hidden group">
                            <div className="relative z-10 flex items-center gap-6">
                               <div className="w-20 h-20 bg-white rounded-xl p-2 shrink-0">
                                  <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center text-gray-200">
                                     <QrCode size={40} strokeWidth={1} />
                                  </div>
                               </div>
                               <div>
                                  <h4 className="text-white font-bold text-sm">Scan to Access</h4>
                                  <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mt-1">Valid until 2027</p>
                                  <button className="mt-3 text-[10px] font-bold text-secondary hover:underline flex items-center gap-1">
                                     Download Digital ID <ExternalLink size={10} />
                                  </button>
                               </div>
                            </div>
                            <Shield size={100} className="absolute -bottom-10 -right-10 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                         </div>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === "Academic Details" && (
                <div className="space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <StatCard label="Current CGPA" value="3.65" color="text-emerald-600" />
                      <StatCard label="Credits Done" value="84" sub="/ 144" color="text-primary" />
                      <StatCard label="Semester" value="5th" sub="Junior" color="text-gray-900" />
                   </div>

                   <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                         <h3 className="text-sm font-bold text-gray-900">Academic Milestones</h3>
                         <Award size={16} className="text-gray-300" />
                      </div>
                      <div className="p-8 space-y-8 relative before:absolute before:left-[35px] before:top-10 before:bottom-10 before:w-px before:bg-gray-100">
                         <Milestone year="2023" title="Started B.Sc in CSE" desc="Admission with Merit Scholarship" active />
                         <Milestone year="2024" title="Dean's List Award" desc="Academic Excellence Honors" />
                         <Milestone year="2025" title="Research Associate" desc="Joined AI & Robotics Lab" />
                      </div>
                   </div>
                </div>
              )}

              {activeTab === "Documents" && (
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="text-lg font-bold text-gray-900 mb-6">Uploaded Documents</h3>
                   <div className="space-y-4">
                      {[
                        { name: "Transcript_Semester_4.pdf", size: "1.2 MB", date: "Jan 15, 2026" },
                        { name: "NID_Copy.pdf", size: "850 KB", date: "Dec 10, 2025" },
                        { name: "Admission_Letter.pdf", size: "2.4 MB", date: "Feb 20, 2023" },
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group hover:bg-primary/5 transition-colors">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors border border-gray-100">
                                 <FileText size={18} />
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-gray-900">{doc.name}</p>
                                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{doc.size} • {doc.date}</p>
                              </div>
                           </div>
                           <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                              <DownloadIcon size={18} />
                           </button>
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function InfoLine({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group">
       <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
          <Icon size={18} />
       </div>
       <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
          <p className="text-sm font-bold text-gray-900">{value}</p>
       </div>
    </div>
  );
}

function StatCard({ label, value, sub, color }: { label: string, value: string, sub?: string, color: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:border-primary/20 transition-colors">
       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{label}</p>
       <h4 className={cn("text-3xl font-black tracking-tight", color)}>
          {value}
          {sub && <span className="text-xs text-gray-300 ml-1 font-bold">{sub}</span>}
       </h4>
    </div>
  );
}

function Milestone({ year, title, desc, active = false }: { year: string, title: string, desc: string, active?: boolean }) {
  return (
    <div className="flex gap-6 relative group">
       <div className="w-14 text-right shrink-0 py-1">
          <span className={cn("text-xs font-black", active ? "text-primary" : "text-gray-300")}>{year}</span>
       </div>
       <div className={cn(
         "w-4 h-4 rounded-full border-2 bg-white z-10 mt-1.5 transition-colors shadow-sm",
         active ? "border-primary" : "border-gray-200 group-hover:border-gray-300"
       )}></div>
       <div className="pb-2">
          <h4 className="text-sm font-bold text-gray-900 leading-none">{title}</h4>
          <p className="text-xs text-gray-500 mt-1.5 font-medium">{desc}</p>
       </div>
    </div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <motion.a 
      whileHover={{ y: -2 }}
      href={href} 
      className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:text-primary hover:bg-primary/5 transition-all border border-transparent hover:border-primary/10"
    >
       <Icon size={18} />
    </motion.a>
  );
}

const LinkedinIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const GithubIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const DownloadIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);
