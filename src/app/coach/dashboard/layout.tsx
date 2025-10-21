"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/learner/dashboard/Hero";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6 h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="w-full my-4">
        <Hero />

        {/* Page Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
