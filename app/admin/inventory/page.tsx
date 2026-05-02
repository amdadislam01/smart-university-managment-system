"use client";

import React from "react";
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  AlertTriangle, 
  Activity, 
  DollarSign, 
  Box, 
  Eye, 
  Edit3, 
  Trash2, 
  ArrowUpRight,
  ClipboardList,
  History
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Assets", value: "1,240", icon: Box, color: "bg-blue-500", trend: "+5%" },
  { label: "Low Stock Items", value: "12", icon: AlertTriangle, color: "bg-amber-500", trend: "Critical" },
  { label: "In Maintenance", value: "8", icon: Activity, color: "bg-purple-500", trend: "-2%" },
  { label: "Total Asset Value", value: "৳ 8.5M", icon: DollarSign, color: "bg-emerald-500", trend: "+12%" },
];

const inventory = [
  { id: "AST-001", name: "Dell Latitude 5420", category: "Electronics", quantity: 45, unit: "Pcs", status: "In Stock", lastAudit: "2026-04-01" },
  { id: "AST-002", name: "Ergonomic Office Chair", category: "Furniture", quantity: 120, unit: "Pcs", status: "In Stock", lastAudit: "2026-03-15" },
  { id: "AST-003", name: "Digital Oscilloscope", category: "Lab Equipment", quantity: 5, unit: "Pcs", status: "Low Stock", lastAudit: "2026-04-10" },
  { id: "AST-004", name: "Projector Screen (Motorized)", category: "Electronics", quantity: 0, unit: "Pcs", status: "Out of Stock", lastAudit: "2026-03-20" },
  { id: "AST-005", name: "A4 Paper Reams", category: "Office Supplies", quantity: 250, unit: "Pack", status: "In Stock", lastAudit: "2026-04-20" },
];

const recentActivities = [
  { action: "Issued", item: "Laptop (AST-001)", user: "Dr. Kamrul", date: "2026-04-25 10:00" },
  { action: "Returned", item: "Projector (AST-084)", user: "Staff (Mitu)", date: "2026-04-25 09:30" },
  { action: "Maintenance", item: "AC Unit (AST-112)", user: "Admin", date: "2026-04-24 14:00" },
];

export default function InventoryPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventory & Assets</h1>
          <p className="text-slate-500">Track, manage and audit all university assets and supplies.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer">
            <ClipboardList size={16} />
            Inventory Audit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
            <Plus size={16} />
            Add New Asset
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                stat.trend.includes('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
              }`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Main Inventory Table */}
        <div className="xl:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name, ID or category..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <Filter size={18} />
              </button>
              <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Lab Equipment</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  <tr>
                    <th className="px-6 py-4">Asset ID</th>
                    <th className="px-6 py-4">Item Name</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Stock</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {inventory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 text-xs font-bold text-primary">{item.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{item.name}</span>
                          <span className="text-[10px] text-slate-400">Last Audit: {item.lastAudit}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600">{item.category}</td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-800">
                        {item.quantity} {item.unit}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.status === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 
                          item.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-all cursor-pointer"><Eye size={16} /></button>
                          <button className="p-1.5 text-slate-400 hover:text-amber-600 transition-all cursor-pointer"><Edit3 size={16} /></button>
                          <button className="p-1.5 text-slate-400 hover:text-red-600 transition-all cursor-pointer"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Showing 5 of 1,240 assets</span>
              <button className="text-xs text-primary font-bold hover:underline cursor-pointer">View Full Inventory</button>
            </div>
          </div>
        </div>

        {/* Recent Transactions & Alerts */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <History size={18} className="text-primary" />
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map((act, i) => (
                <div key={i} className="flex gap-3 items-start pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                    act.action === 'Issued' ? 'bg-amber-500' : 
                    act.action === 'Returned' ? 'bg-emerald-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-xs font-bold text-slate-800">{act.action} - {act.item}</p>
                    <p className="text-[10px] text-slate-500">{act.user} • {act.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl text-white">
            <div className="w-10 h-10 bg-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center mb-4">
              <AlertTriangle size={20} />
            </div>
            <h4 className="font-bold mb-2">Audit Required</h4>
            <p className="text-xs text-slate-400 mb-4">The Electronics department's annual inventory audit is due in 3 days. 250 items need verification.</p>
            <button className="w-full py-2 bg-white text-slate-800 rounded-lg text-xs font-bold hover:bg-secondary transition-all cursor-pointer">
              Start Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
