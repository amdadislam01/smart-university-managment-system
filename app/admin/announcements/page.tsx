"use client";

import React, { useEffect, useState } from "react";
import { 
  Bell, 
  Plus, 
  Search, 
  Megaphone, 
  Calendar, 
  Users, 
  Eye, 
  Edit3, 
  Trash2, 
  MoreHorizontal,
  Clock,
  CheckCircle2,
  AlertCircle,
  Filter,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

export default function AnnouncementsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAnnouncements = async (category = "All") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/announcements${category !== "All" ? `?category=${category}` : ""}`);
      const data = await res.json();
      setAnnouncements(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements(activeCategory);
  }, [activeCategory]);

  const categories = [
    { name: "All", count: announcements.length },
    { name: "Academic", count: announcements.filter(a => a.category === "Academic").length },
    { name: "Administrative", count: announcements.filter(a => a.category === "Administrative").length },
    { name: "Event", count: announcements.filter(a => a.category === "Event").length },
    { name: "Urgent", count: announcements.filter(a => a.category === "Urgent").length },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Announcements & Notices</h1>
          <p className="text-slate-500">Create, manage and schedule system-wide notifications.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer">
          <Plus size={20} />
          Create Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Filter size={18} />
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === cat.name 
                    ? 'bg-primary/5 text-primary border-l-4 border-primary' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  {cat.name}
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeCategory === cat.name ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
            <div className="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center mb-4">
              <Megaphone size={20} />
            </div>
            <h4 className="font-bold text-primary mb-2">Emergency Alert?</h4>
            <p className="text-xs text-slate-600 mb-4">You can broadcast critical alerts instantly to all active users via mobile push notifications.</p>
            <button className="text-xs font-bold text-primary hover:underline cursor-pointer">Configure Alerts →</button>
          </div>
        </div>

        {/* Announcement List */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search & Bulk Actions */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search announcements..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex items-center gap-2">
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none">
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          {/* List */}
          <div className="space-y-4 min-h-[400px]">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            ) : (
              <>
                {announcements.map((ann, i) => (
                  <motion.div
                    key={ann._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            ann.category === 'Urgent' ? 'bg-red-100 text-red-600' :
                            ann.category === 'Event' ? 'bg-purple-100 text-purple-600' :
                            ann.category === 'Academic' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'
                          }`}>
                            {ann.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Users size={14} />
                            <span className="text-xs font-medium">{ann.targetAudience}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors mb-2">{ann.title}</h3>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{ann.content}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {new Date(ann.createdAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            By Admin
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between items-end gap-4">
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${
                          ann.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {ann.status === 'Published' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                          {ann.status}
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all cursor-pointer"><Eye size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all cursor-pointer"><Edit3 size={18} /></button>
                          <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {announcements.length === 0 && (
                  <div className="py-20 text-center text-slate-400">
                    No announcements found.
                  </div>
                )}
              </>
            )}
          </div>

          <button className="w-full py-4 bg-slate-50 text-slate-500 rounded-2xl text-sm font-bold border-2 border-dashed border-slate-200 hover:bg-slate-100 hover:border-primary/20 hover:text-primary transition-all cursor-pointer">
            Load More Announcements
          </button>
        </div>
      </div>
    </div>
  );
}
