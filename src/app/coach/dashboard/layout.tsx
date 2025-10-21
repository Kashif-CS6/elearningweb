"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/learner/dashboard/Hero";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-col gap-2 w-full">
        <Hero />

        <div className="flex gap-4 w-full flex-1">
          {/* Page Content */}
          <div className="flex-1">{children}</div>

          {/* Right Sidebar */}
        </div>
      </div>
    </div>
  );
}
