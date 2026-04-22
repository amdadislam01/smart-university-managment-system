"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Scale, 
  FileCheck, 
  ShieldAlert, 
  History, 
  Download, 
  CheckCircle2,
  BookOpenCheck,
  Building2,
  Clock,
  ArrowRight
} from "lucide-react";

const ruleCategories = [
  {
    title: "General Conduct",
    description: "Fundamental expectations for all applicants and students within the university system.",
    icon: Scale,
  },
  {
    title: "Academic Standing",
    description: "Regulations regarding GPA maintenance, credit requirements, and degree progress.",
    icon: BookOpenCheck,
  },
  {
    title: "Disciplinary Policy",
    description: "Procedural guidelines for addressing violations of university statutes or integrity.",
    icon: ShieldAlert,
  },
  {
    title: "Financial Obligations",
    description: "Terms and conditions regarding tuition payments, refunds, and aid maintenance.",
    icon: FileCheck,
  },
];

const detailedRegulations = [
  {
    category: "Academic Integrity",
    points: [
      "Plagiarism in any form is grounds for immediate disciplinary action.",
      "Collaboration on individual assignments is prohibited unless specified.",
      "Strict adherence to examination protocols is mandatory.",
      "Falsification of academic records result in permanent dismissal."
    ]
  },
  {
    category: "Campus Attendance",
    points: [
      "Minimum 75% attendance is required for all enrolled courses.",
      "Medical leaves must be certified by the University Health Services.",
      "Continued absence without notice leads to administrative withdrawal.",
      "Participation in mandatory orientations is a prerequisite for enrollment."
    ]
  }
];

export default function RulesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Authoritative Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <Image
          src="/admission/rules-hero.png"
          alt="University Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-secondary shadow-2xl mx-auto">
              <Scale size={18} />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Institutional Governance</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
              Governing <br/>
              <span className="text-secondary font-serif normal-case tracking-tight text-6xl lg:text-[7.5rem]">Principles</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
              "Honesty, Transparency, and Excellence: The pillars upon which our academic community is built."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foundations of Integrity */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5"
              >
                 <Image src="/admission/rules-integrity.png" alt="Library Integrity" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </motion.div>
              
              <div className="space-y-10">
                 <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase leading-tight tracking-tight">Academic <span className="text-secondary font-serif normal-case">Foundation</span></h2>
                    <div className="w-24 h-1.5 bg-secondary rounded-full" />
                 </div>
                 
                 <p className="text-lg text-text-main/70 font-medium leading-relaxed">
                   At NextGen University, rules are not mere restrictions; they are the framework that ensures every student has an equal opportunity to excel. We maintain the highest standards of academic and personal conduct to protect the value of your degree.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: ShieldAlert, text: "Zero Tolerance Policy" },
                      { icon: Clock, text: "Strict Procedural Timelines" },
                      { icon: Building2, text: "Statutory Governance" },
                      { icon: History, text: "Preserving Tradition" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-primary/5 text-primary font-bold shadow-sm">
                         <item.icon className="text-secondary" size={20} />
                         <span className="text-sm uppercase tracking-tight">{item.text}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Categorized Guidelines */}
      <section className="py-24 bg-surface">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
               <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase tracking-tight">Statutory <span className="text-secondary">Categories</span></h2>
               <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {ruleCategories.map((reg, i) => (
                 <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white p-10 rounded-[3rem] border border-primary/5 hover:border-secondary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary mb-6">
                       <reg.icon size={26} />
                    </div>
                    <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-4">{reg.title}</h3>
                    <p className="text-sm font-medium text-text-main/40 leading-relaxed mb-6">{reg.description}</p>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                       Read Full Policy <ArrowRight size={14} />
                    </button>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Detailed Regulations Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {detailedRegulations.map((group, i) => (
                 <div key={i} className="space-y-8 p-12 bg-white rounded-[4rem] border-2 border-surface shadow-lg">
                    <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-4">
                       <div className="w-2 h-8 bg-secondary rounded-full" /> {group.category}
                    </h3>
                    <div className="space-y-6">
                       {group.points.map((point, j) => (
                         <div key={j} className="flex gap-4 group">
                            <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={18} />
                            <p className="text-sm font-medium text-text-main/60 leading-relaxed group-hover:text-primary transition-colors">{point}</p>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Official Documentation Download */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="bg-primary rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
               
               <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="space-y-6 max-w-2xl">
                     <h2 className="text-4xl lg:text-6xl font-black text-white uppercase leading-none tracking-tighter">Official <br/><span className="text-secondary font-serif normal-case">Manuals</span></h2>
                     <p className="text-xl text-white/40 leading-relaxed font-light">
                       All students are required to read the official Admission Handbook for the current academic year. Ignorance of regulations is not considered a valid ground for exemption.
                     </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                     {[
                       { title: "Admission Handbook 2026", format: "PDF — 4.2 MB" },
                       { title: "Conduct Statutes", format: "PDF — 1.8 MB" }
                     ].map((doc, i) => (
                       <button key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white hover:text-primary transition-all group flex flex-col items-center gap-4 min-w-[240px]">
                          <Download className="text-secondary group-hover:scale-110 transition-transform" size={32} />
                          <div className="text-center">
                             <div className="font-black uppercase tracking-tight text-sm text-white group-hover:text-primary">{doc.title}</div>
                             <div className="text-[10px] font-bold text-white/30 group-hover:text-primary/40 uppercase tracking-widest">{doc.format}</div>
                          </div>
                       </button>
                     ))}
                  </div>
               </div>
            </div>
            
            <div className="mt-16 text-center space-y-4">
               <p className="text-text-main/30 font-bold uppercase text-[9px] tracking-[0.3em]">Last updated: April 22, 2026 • Office of the Registrar</p>
               <div className="flex justify-center gap-8">
                  <Link href="#" className="text-primary hover:text-secondary text-[10px] font-black uppercase tracking-widest">Privacy Policy</Link>
                  <Link href="#" className="text-primary hover:text-secondary text-[10px] font-black uppercase tracking-widest">Term of Use</Link>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
