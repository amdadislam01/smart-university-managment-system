"use client";

import React from "react";
import { 
  Building2, 
  Bus, 
  Users, 
  MapPin, 
  Search, 
  Plus, 
  ChevronRight, 
  Bed, 
  Home, 
  Navigation,
  Clock,
  Settings,
  MoreVertical
} from "lucide-react";
import { motion } from "framer-motion";

const hostelStats = [
  { label: "Total Capacity", value: "850", icon: Bed, color: "bg-blue-100 text-blue-600" },
  { label: "Occupied", value: "742", icon: Users, color: "bg-emerald-100 text-emerald-600" },
  { label: "Available", value: "108", icon: Home, color: "bg-amber-100 text-amber-600" },
];

const transportStats = [
  { label: "Total Vehicles", value: "24", icon: Bus, color: "bg-purple-100 text-purple-600" },
  { label: "Active Routes", value: "12", icon: Navigation, color: "bg-orange-100 text-orange-600" },
  { label: "Subscribed", value: "1,240", icon: Users, color: "bg-indigo-100 text-indigo-600" },
];

const hostels = [
  { name: "Shaheed Minar Hall", type: "Boys", capacity: 300, occupied: 285, status: "Full" },
  { name: "Begum Rokeya Hall", type: "Girls", capacity: 250, occupied: 210, status: "Available" },
  { name: "International Hostel", type: "Mixed", capacity: 100, occupied: 45, status: "Available" },
];

const busRoutes = [
  { route: "Route A (Mirpur-10)", vehicle: "Bus-04", time: "07:30 AM", students: 45, status: "On Time" },
  { route: "Route B (Uttara)", vehicle: "Bus-07", time: "07:15 AM", students: 52, status: "Delayed" },
  { route: "Route C (Dhanmondi)", vehicle: "Bus-12", time: "07:45 AM", students: 38, status: "On Time" },
];

export default function HostelTransportPage() {
  const [activeTab, setActiveTab] = React.useState<"hostel" | "transport">("hostel");

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Hostel & Transport</h1>
          <p className="text-slate-500">Manage student accommodation and university transportation system.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => setActiveTab("hostel")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'hostel' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-primary'
            }`}
          >
            Hostel
          </button>
          <button 
            onClick={() => setActiveTab("transport")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'transport' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-primary'
            }`}
          >
            Transport
          </button>
        </div>
      </div>

      {activeTab === "hostel" ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Hostel Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hostelStats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className={`${stat.color} p-4 rounded-xl`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hostel List */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Building2 size={20} className="text-primary" />
                  Hostel Inventory
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Plus size={14} />
                  Add Hostel
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Hostel Name</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Occupancy</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {hostels.map((hostel, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-800 text-sm">{hostel.name}</td>
                        <td className="px-6 py-4 text-xs text-slate-500">{hostel.type}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[10px] font-bold">
                              <span>{hostel.occupied}/{hostel.capacity}</span>
                              <span>{Math.round((hostel.occupied/hostel.capacity)*100)}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${hostel.status === 'Full' ? 'bg-red-500' : 'bg-emerald-500'}`} 
                                style={{ width: `${(hostel.occupied/hostel.capacity)*100}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                            hostel.status === 'Full' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
                          }`}>
                            {hostel.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-primary font-bold text-xs hover:underline cursor-pointer">Manage</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Allocation */}
            <div className="bg-slate-800 rounded-2xl p-6 text-white h-fit">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-secondary">
                <Bed size={20} />
                Quick Allocation
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Student ID</label>
                  <input type="text" placeholder="e.g. STU12345" className="w-full bg-slate-700 border-none rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-secondary/50" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Select Hostel</label>
                  <select className="w-full bg-slate-700 border-none rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-secondary/50">
                    <option>Select Option</option>
                    <option>Shaheed Minar Hall</option>
                    <option>Begum Rokeya Hall</option>
                  </select>
                </div>
                <button className="w-full py-3 bg-secondary text-primary font-bold rounded-xl text-sm hover:bg-white transition-all cursor-pointer mt-4">
                  Allocate Room
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Transport Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportStats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className={`${stat.color} p-4 rounded-xl`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bus Routes List */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Navigation size={20} className="text-primary" />
                  Active Bus Routes
                </h3>
                <div className="flex gap-2">
                   <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 cursor-pointer"><Search size={16} /></button>
                   <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold shadow-lg shadow-primary/20 cursor-pointer">
                    <Plus size={14} />
                    New Route
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Route Name</th>
                      <th className="px-6 py-4">Vehicle</th>
                      <th className="px-6 py-4">Departure</th>
                      <th className="px-6 py-4">Subscribed</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {busRoutes.map((route, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-800 text-sm">{route.route}</td>
                        <td className="px-6 py-4 text-xs text-slate-500">{route.vehicle}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <Clock size={14} className="text-slate-400" />
                            {route.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-slate-600">{route.students} Students</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                            route.status === 'On Time' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                          }`}>
                            {route.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 cursor-pointer"><MoreVertical size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tracking Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Live Fleet Tracking</h3>
                <p className="text-sm text-slate-500 mb-6">Real-time GPS tracking for all active university buses and shuttle services.</p>
                <button className="w-full py-3 bg-primary text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all cursor-pointer">
                  Launch Map
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Navigation size={120} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
