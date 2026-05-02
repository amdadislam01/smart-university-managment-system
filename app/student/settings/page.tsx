"use client";

import React from "react";
import { Settings, User, Bell, Lock, Shield, Eye, Globe, Moon, Laptop, Trash2, ChevronRight, Save } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState('General');

  const tabs = [
    { name: 'General', icon: Settings },
    { name: 'Profile', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Security', icon: Lock },
    { name: 'Privacy', icon: Shield },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account preferences and application settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
           {tabs.map((tab) => (
             <button
               key={tab.name}
               onClick={() => setActiveTab(tab.name)}
               className={cn(
                 "w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all",
                 activeTab === tab.name ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-gray-500 hover:bg-gray-50 hover:text-primary"
               )}
             >
               <tab.icon size={18} />
               {tab.name}
             </button>
           ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-8">{activeTab} Settings</h2>
              
              <div className="space-y-8">
                 {activeTab === 'General' && (
                   <>
                     <SettingSection title="Appearance" description="Choose how NextGen University looks on your device.">
                        <div className="grid grid-cols-3 gap-4">
                           <ThemeOption icon={Laptop} label="System" active />
                           <ThemeOption icon={Moon} label="Dark" />
                           <ThemeOption icon={Globe} label="Light" />
                        </div>
                     </SettingSection>

                     <SettingSection title="Language" description="Select your preferred language for the interface.">
                        <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                           <option>English (United States)</option>
                           <option>Bengali (Bangladesh)</option>
                           <option>French (France)</option>
                        </select>
                     </SettingSection>

                     <SettingSection title="Timezone" description="All your schedules will be adjusted to this timezone.">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                           <span className="text-sm font-bold text-gray-600">UTC+6 (Dhaka, Bangladesh)</span>
                           <button className="text-primary text-xs font-black hover:underline uppercase tracking-widest">Change</button>
                        </div>
                     </SettingSection>
                   </>
                 )}

                 {activeTab === 'Security' && (
                   <>
                     <SettingSection title="Change Password" description="Update your password regularly to keep your account secure.">
                        <div className="space-y-4">
                           <input type="password" placeholder="Current Password" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
                           <input type="password" placeholder="New Password" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
                           <input type="password" placeholder="Confirm New Password" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm" />
                           <button className="px-8 py-3 bg-primary text-white font-black rounded-xl shadow-lg hover:opacity-90 transition-opacity">
                              Update Password
                           </button>
                        </div>
                     </SettingSection>

                     <SettingSection title="Two-Factor Authentication" description="Add an extra layer of security to your account.">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <Shield size={20} className="text-emerald-500" />
                              <span className="text-sm font-bold text-gray-700">Enable 2FA</span>
                           </div>
                           <Toggle active={false} />
                        </div>
                     </SettingSection>
                   </>
                 )}

                 {activeTab === 'Notifications' && (
                   <div className="space-y-6">
                      <NotificationItem title="Email Notifications" description="Receive updates via your university email." active />
                      <NotificationItem title="Push Notifications" description="Receive alerts on your browser or mobile." active />
                      <NotificationItem title="SMS Alerts" description="Get urgent notices via text message." active={false} />
                   </div>
                 )}
              </div>
           </div>

           {/* Dangerous Zone */}
           <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100">
              <h3 className="text-red-900 font-black mb-2 flex items-center gap-2">
                 <Trash2 size={20} />
                 Danger Zone
              </h3>
              <p className="text-red-700 text-sm mb-6">Once you delete your account data, there is no going back. Please be certain.</p>
              <button className="px-8 py-3 bg-red-600 text-white font-black rounded-xl shadow-lg hover:bg-red-700 transition-colors">
                 Deactivate Account
              </button>
           </div>

           <div className="flex justify-end gap-4">
              <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                 Cancel
              </button>
              <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-black rounded-xl shadow-xl hover:opacity-90 transition-opacity">
                 <Save size={18} />
                 Save Changes
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

function SettingSection({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
  return (
    <div className="space-y-4">
       <div>
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500">{description}</p>
       </div>
       {children}
    </div>
  );
}

function ThemeOption({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all",
      active ? "bg-primary/5 border-primary text-primary" : "bg-gray-50 border-gray-100 text-gray-400 hover:border-primary/20 hover:text-primary"
    )}>
       <Icon size={24} />
       <span className="text-xs font-bold">{label}</span>
    </button>
  );
}

function NotificationItem({ title, description, active }: { title: string, description: string, active: boolean }) {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
       <div>
          <h4 className="text-sm font-bold text-gray-900">{title}</h4>
          <p className="text-[10px] text-gray-500">{description}</p>
       </div>
       <Toggle active={active} />
    </div>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div className={cn(
      "w-12 h-6 rounded-full p-1 transition-colors relative cursor-pointer",
      active ? "bg-primary" : "bg-gray-200"
    )}>
       <div className={cn(
         "w-4 h-4 bg-white rounded-full transition-transform shadow-sm",
         active ? "translate-x-6" : "translate-x-0"
       )}></div>
    </div>
  );
}
