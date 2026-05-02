"use client";

import React from "react";
import Image from "next/image";
import { Search, Bell, Moon, Sun, User, Settings, LogOut, ChevronDown, UserCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const DashboardHeader = () => {
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
      {/* Brand & Search */}
      <div className="flex items-center gap-8 flex-1">
        <div className="hidden md:flex items-center gap-3 min-w-max">
          <div className="relative w-12 h-12">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 leading-none">NextGen University</h1>
            <p className="text-[10px] text-slate-500 font-medium">of Bangladesh</p>
          </div>
        </div>

        <div className="flex-1 max-w-md relative group ml-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Global search (users, students, courses...)"
            className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle */}
        <button className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer" title="Toggle Dark Mode">
          <Moon size={20} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 relative transition-colors cursor-pointer"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
              >
                <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800">Notifications</h3>
                  <button className="text-xs text-primary font-medium hover:underline cursor-pointer">Mark all read</button>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 cursor-pointer">
                      <p className="text-sm text-slate-600 mb-1">New leave request from <span className="font-medium text-slate-800">Dr. Sarah</span></p>
                      <span className="text-[10px] text-slate-400">2 hours ago</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center bg-slate-50">
                  <button className="text-xs text-slate-500 font-medium hover:text-primary transition-colors cursor-pointer">View all alerts</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile */}
        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 p-1.5 pl-3 rounded-full hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 leading-tight">Admin User</p>
              <p className="text-[10px] text-primary font-medium uppercase tracking-wider">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary overflow-hidden">
               <UserCircle size={24} />
            </div>
            <ChevronDown size={14} className={cn("text-slate-400 transition-transform", showProfile && "rotate-180")} />
          </button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
              >
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all cursor-pointer">
                    <User size={18} />
                    <span>My Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all cursor-pointer">
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                  <div className="my-1 border-t border-slate-100"></div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

