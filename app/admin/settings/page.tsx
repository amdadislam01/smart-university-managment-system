"use client";

import React from "react";
import { Settings as SettingsIcon, Shield, Bell, Mail, Database, Globe, Smartphone } from "lucide-react";

export default function Settings() {
  const sections = [
    { title: "System Configuration", desc: "General university settings and academic cycles.", icon: SettingsIcon },
    { title: "User Roles & Permissions", desc: "Manage access levels for students, teachers and staff.", icon: Shield },
    { title: "Email & Notifications", desc: "Configure SMTP and system-wide alert templates.", icon: Mail },
    { title: "Database & Backup", desc: "Schedule backups and manage data restoration.", icon: Database },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">System Settings</h1>
        <p className="text-slate-500">Global configuration and administrative control panel.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-primary/20 transition-all cursor-pointer group">
              <div className="bg-slate-50 p-3 rounded-xl text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <section.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-1">{section.title}</h3>
                <p className="text-sm text-slate-500">{section.desc}</p>
              </div>
              <button className="px-4 py-2 text-primary font-bold text-sm hover:underline cursor-pointer">Configure</button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Database Size</span>
                <span className="text-sm font-bold">1.2 GB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Last Backup</span>
                <span className="text-sm font-bold">Today, 04:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">System Uptime</span>
                <span className="text-sm font-bold text-emerald-600">99.9%</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2">System Healthy</h3>
            <p className="text-xs text-emerald-600 mb-4">All systems are operational. No critical errors reported in the last 24 hours.</p>
            <button className="w-full py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer">
              View System Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
