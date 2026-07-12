"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "react-hot-toast";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname === "/admin" || pathname?.startsWith("/admin/");
  const isStudentRoute = pathname === "/student" || pathname?.startsWith("/student/");

  if (isAdminRoute || isStudentRoute) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <div className="pt-[110px] flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
