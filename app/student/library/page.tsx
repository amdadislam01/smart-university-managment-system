"use client";

import React from "react";
import { Library, Search, Book, Bookmark, Clock, CheckCircle2, ChevronRight, Filter, BookOpen, Download } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const borrowedBooks = [
  { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", dueDate: "2026-05-10", status: "Borrowed", progress: 65 },
  { id: 2, title: "Database System Concepts", author: "Abraham Silberschatz", dueDate: "2026-05-15", status: "Borrowed", progress: 30 },
];

const recommendedBooks = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Software", rating: 4.8, available: true, image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=200" },
  { id: 2, title: "Design Patterns", author: "Erich Gamma", category: "Software", rating: 4.7, available: false, image: "https://images.unsplash.com/photo-1544383335-c5efa9c62524?auto=format&fit=crop&q=80&w=200" },
  { id: 3, title: "Modern Operating Systems", author: "Andrew S. Tanenbaum", category: "System", rating: 4.9, available: true, image: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=200" },
  { id: 4, title: "Artificial Intelligence", author: "Stuart Russell", category: "AI", rating: 4.6, available: true, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=200" },
];

export default function LibraryPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">University Library</h1>
          <p className="text-gray-500 mt-1">Explore books, journals, and digital resources for your studies.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <Bookmark size={18} />
            My Favorites
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <BookOpen size={18} />
            E-Library Access
          </button>
        </div>
      </div>

      {/* Search Header */}
      <div className="bg-gradient-to-br from-primary to-[#0A1F3D] rounded-[2rem] p-10 text-white relative overflow-hidden group">
         <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-black">Search our vast collection</h2>
            <div className="relative group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={24} />
               <input 
                 type="text" 
                 placeholder="Search by title, author, or ISBN..." 
                 className="w-full pl-16 pr-8 py-5 bg-white text-gray-900 rounded-3xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium"
               />
               <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-black transition-colors">
                  Search
               </button>
            </div>
            <div className="flex items-center justify-center gap-6">
               {['Engineering', 'Science', 'Arts', 'Commerce', 'Law'].map(cat => (
                 <button key={cat} className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    {cat}
                 </button>
               ))}
            </div>
         </div>
         <Library size={300} className="absolute -bottom-20 -left-20 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
         <Book size={200} className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Borrowed Books */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Bookmark size={20} className="text-primary" />
                    Currently Borrowed
                 </h2>
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Limit: 5 Books</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {borrowedBooks.map((book) => (
                   <div key={book.id} className="p-6 bg-gray-50/50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all group">
                      <div className="flex items-start justify-between mb-4">
                         <div className="w-12 h-16 bg-white rounded-lg shadow-inner flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors border border-gray-100">
                            <Book size={24} />
                         </div>
                         <div className="text-right">
                            <span className="text-[10px] font-black uppercase px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg">
                               {book.status}
                            </span>
                         </div>
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight mb-1 truncate">{book.title}</h4>
                      <p className="text-xs text-gray-500 mb-6">{book.author}</p>
                      
                      <div className="space-y-4">
                         <div className="flex items-center justify-between text-[10px] font-bold">
                            <span className="text-gray-400">Due Date: {book.dueDate}</span>
                            <span className="text-red-500">12 Days Left</span>
                         </div>
                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${book.progress}%` }}
                               transition={{ duration: 1.5 }}
                               className="h-full bg-primary rounded-full"
                            />
                         </div>
                         <button className="w-full py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:text-primary hover:border-primary/20 transition-all">
                            Renew Book
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Recommended Books Grid */}
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-xl font-bold text-gray-900">Recommended for your Semester</h2>
                 <button className="text-sm font-bold text-primary hover:underline">Browse All</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                 {recommendedBooks.map((book) => (
                   <div key={book.id} className="space-y-3 group cursor-pointer">
                      <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100">
                         <img src={book.image} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <button className="w-full py-2 bg-white text-primary text-xs font-bold rounded-lg shadow-xl">
                               Quick View
                            </button>
                         </div>
                         {!book.available && (
                           <div className="absolute top-2 left-2 bg-red-500 text-white text-[9px] font-black uppercase px-2 py-1 rounded-md shadow-lg">
                              Out of Stock
                           </div>
                         )}
                      </div>
                      <div>
                         <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">{book.title}</h4>
                         <p className="text-[10px] font-medium text-gray-500">{book.author}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Library Info Sidebar */}
        <div className="space-y-6">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Library Stats</h2>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Book size={18} className="text-blue-500" />
                       <span className="text-sm font-bold text-gray-600">Total Borrowed</span>
                    </div>
                    <span className="font-black text-gray-900 text-lg">24</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Bookmark size={18} className="text-emerald-500" />
                       <span className="text-sm font-bold text-gray-600">Returned on time</span>
                    </div>
                    <span className="font-black text-gray-900 text-lg">98%</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Clock size={18} className="text-amber-500" />
                       <span className="text-sm font-bold text-gray-600">Active Fines</span>
                    </div>
                    <span className="font-black text-gray-900 text-lg">৳0.00</span>
                 </div>
              </div>
           </div>

           <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100">
              <h3 className="font-black text-amber-900 mb-2">Notice</h3>
              <p className="text-xs text-amber-700 leading-relaxed mb-6">
                 Library will remain closed on Friday for system maintenance. Please return your books by Thursday 4:00 PM.
              </p>
              <button className="w-full py-3 bg-amber-600 text-white font-bold rounded-xl shadow-lg shadow-amber-600/20 hover:opacity-90 transition-opacity">
                 See More News
              </button>
           </div>
           
           <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                 <h3 className="font-bold text-lg mb-2">Study Room Booking</h3>
                 <p className="text-xs text-gray-400 mb-6">Need a quiet space for group study? Book a room now.</p>
                 <button className="w-full py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-secondary transition-colors">
                    Check Availability
                 </button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000 rotate-45">
                 <MapPin size={100} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function MapPin({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
