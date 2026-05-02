"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");
  const isStudentRoute = pathname?.startsWith("/student");

  if (isAdminRoute || isStudentRoute) {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-[110px] flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
