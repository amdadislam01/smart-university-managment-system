"use client";

import React from "react";
import { MessageSquare, Search, Phone, Video, Info, MoreVertical, Send, Paperclip, Smile, User, Check, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const contacts = [
  { id: 1, name: "Dr. Sarah Johnson", role: "Professor", status: "online", lastMsg: "Please check the assignment feedback.", time: "10:30 AM", unread: 2, image: "SJ" },
  { id: 2, name: "Prof. Michael Chen", role: "Instructor", status: "offline", lastMsg: "The lab session is rescheduled to...", time: "Yesterday", unread: 0, image: "MC" },
  { id: 3, name: "Database Group", role: "Group", status: "online", lastMsg: "Amin: I've uploaded the project...", time: "Yesterday", unread: 5, image: "DG" },
  { id: 4, name: "Dr. Emily Brown", role: "Academic Advisor", status: "online", lastMsg: "Your registration is confirmed.", time: "Monday", unread: 0, image: "EB" },
  { id: 5, name: "Exam Support", role: "Department", status: "offline", lastMsg: "Welcome to support portal.", time: "Sunday", unread: 0, image: "ES" },
];

const messages = [
  { id: 1, sender: "Dr. Sarah Johnson", text: "Hello Amin, I've reviewed your project proposal.", time: "10:15 AM", type: "received" },
  { id: 2, sender: "Me", text: "Thank you, Dr. Sarah! Did you find any major issues?", time: "10:18 AM", type: "sent" },
  { id: 3, sender: "Dr. Sarah Johnson", text: "Overall it looks great. Just a few minor points on the architecture section.", time: "10:20 AM", type: "received" },
  { id: 4, sender: "Dr. Sarah Johnson", text: "Please check the assignment feedback for detailed notes.", time: "10:21 AM", type: "received" },
];

export default function MessagingPage() {
  const [activeChat, setActiveChat] = React.useState(contacts[0]);

  return (
    <div className="h-[calc(100vh-140px)] flex bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
      {/* Sidebar - Contacts */}
      <div className="w-full md:w-80 border-r border-gray-100 flex flex-col bg-gray-50/30">
         <div className="p-6 border-b border-gray-100 bg-white">
            <h2 className="text-xl font-black text-gray-900 mb-4">Messages</h2>
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
               <input 
                 type="text" 
                 placeholder="Search contacts..." 
                 className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
               />
            </div>
         </div>
         <div className="flex-1 overflow-y-auto no-scrollbar">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setActiveChat(contact)}
                className={cn(
                  "w-full p-4 flex items-center gap-4 transition-all hover:bg-white border-b border-gray-50/50",
                  activeChat.id === contact.id ? "bg-white shadow-sm border-l-4 border-l-primary" : "opacity-70 grayscale-[0.5]"
                )}
              >
                 <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
                       {contact.image}
                    </div>
                    {contact.status === 'online' && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
                    )}
                 </div>
                 <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                       <h4 className="text-sm font-bold text-gray-900 truncate">{contact.name}</h4>
                       <span className="text-[10px] text-gray-400">{contact.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate pr-4">{contact.lastMsg}</p>
                 </div>
                 {contact.unread > 0 && (
                   <div className="w-5 h-5 bg-primary text-white rounded-lg flex items-center justify-center text-[9px] font-black shadow-lg shadow-primary/20">
                      {contact.unread}
                   </div>
                 )}
              </button>
            ))}
         </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
         {/* Chat Header */}
         <div className="p-4 px-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-bold">
                  {activeChat.image}
               </div>
               <div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">{activeChat.name}</h3>
                  <p className="text-[10px] font-medium text-emerald-500 flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                     Active Now
                  </p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                  <Phone size={18} />
               </button>
               <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                  <Video size={18} />
               </button>
               <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                  <Info size={18} />
               </button>
               <div className="w-px h-6 bg-gray-100 mx-2" />
               <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                  <MoreVertical size={18} />
               </button>
            </div>
         </div>

         {/* Messages Container */}
         <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar bg-gray-50/20">
            {messages.map((msg, i) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "flex flex-col max-w-[80%]",
                  msg.type === 'sent' ? "ml-auto items-end" : "mr-auto items-start"
                )}
              >
                 <div className={cn(
                   "p-4 rounded-2xl text-sm font-medium shadow-sm",
                   msg.type === 'sent' ? "bg-primary text-white rounded-tr-none" : "bg-white border border-gray-100 text-gray-700 rounded-tl-none"
                 )}>
                    {msg.text}
                 </div>
                 <div className="flex items-center gap-1.5 mt-1 px-1">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{msg.time}</span>
                    {msg.type === 'sent' && <CheckCheck size={12} className="text-emerald-500" />}
                 </div>
              </motion.div>
            ))}
            <div className="flex justify-center my-8">
               <span className="px-4 py-1 bg-gray-100 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest">Today</span>
            </div>
         </div>

         {/* Chat Input */}
         <div className="p-6 pt-2">
            <div className="p-2 bg-gray-50 border border-gray-100 rounded-2xl flex items-end gap-2 shadow-inner group-focus-within:border-primary/20 transition-all">
               <button className="p-2.5 text-gray-400 hover:text-primary transition-colors">
                  <Paperclip size={20} />
               </button>
               <textarea 
                 rows={1}
                 placeholder="Type your message here..." 
                 className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2.5 px-2 no-scrollbar resize-none font-medium placeholder:text-gray-400"
               />
               <button className="p-2.5 text-gray-400 hover:text-primary transition-colors">
                  <Smile size={20} />
               </button>
               <button className="p-3 bg-primary text-white rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all">
                  <Send size={20} fill="currentColor" />
               </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-4">
               Shift + Enter for new line. Files up to 25MB are supported.
            </p>
         </div>
      </div>
    </div>
  );
}
