"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import RightSideBar from "@/components/learner/RightSideBar";
import Hero from "@/components/learner/dashboard/Hero"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Sidebar (Left) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col gap-2 w-full mt-2">
        <TopHeader />

        <div className="flex gap-4 w-full flex-1">
          {/* Main Page Content */}
          <div className="flex-1">
            <Hero />
            {children}
          </div>

          {/* Right Sidebar */}
          <div>
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
