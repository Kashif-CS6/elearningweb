"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  User,
  Settings,
  Headphones,
  FileText,
  ChevronRight,
  Circle,
  ArrowRight,
} from "lucide-react";
import CreateChildProfile from "@/components/CreateChildProfile";
import StartQuestionnaire from "@/components/StartQuestionaire";
import ChildHistory from "@/components/ChildHistory";
import CurrentStruggles from "@/components/CurrentStruggle";
import GenerateChildID from "@/components/GenerateChildID";

export default function KidzVoiceDashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [option, setOption] = useState("start");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold text-gray-800">KidzVoice</span>
        </div>

        <div className="flex items-center justify-center py-2">
          <Circle className="w-4 h-4 text-gray-400" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeMenu === "dashboard"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveMenu("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeMenu === "profile"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Child Profile</span>
            </button>

            <button
              onClick={() => setActiveMenu("settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeMenu === "settings"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </div>

          {/* Misc Section */}
          <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Misc
            </p>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-3">
                  <Headphones className="w-5 h-5" />
                  <span className="font-medium">Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
                <FileText className="w-5 h-5" />
                <span className="font-medium">Documentation</span>
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 mb-8 overflow-hidden">
          {/* Decorative Stars */}
          <div className="absolute top-8 right-32 w-16 h-16 opacity-20">
            <div className="absolute inset-0 bg-white transform rotate-45 rounded-lg"></div>
            <div className="absolute inset-2 bg-blue-600 transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute top-20 right-64 w-12 h-12 opacity-15">
            <div className="absolute inset-0 bg-white transform rotate-45 rounded-lg"></div>
            <div className="absolute inset-2 bg-blue-600 transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute bottom-12 right-48 w-10 h-10 opacity-10">
            <div className="absolute inset-0 bg-white transform rotate-45 rounded-lg"></div>
            <div className="absolute inset-2 bg-blue-600 transform rotate-45 rounded-lg"></div>
          </div>

          <div className="relative z-10">
            <p className="text-white text-sm font-medium mb-3 uppercase tracking-wide">
              Online Course
            </p>
            <h1 className="text-white text-3xl font-bold mb-6 max-w-md">
              Sharpen Your Skills With Professional Online Courses
            </h1>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all">
              Join Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Statistics</h2>
          <div className="flex-1 mx-8 bg-red-50 border border-red-200 rounded-lg px-6 py-3">
            <p className="text-red-600 font-medium text-center">
              Please Complete Child profile Profile
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Profile</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 font-semibold">5%</span>
            </div>
          </div>
        </div>

        {/* Add Child Card */}
        {option === "start" && (
          <div className="bg-white rounded-2xl shadow-sm p-12 max-w-2xl mx-auto mt-12">
            <h3 className="text-center text-gray-800 text-lg font-medium mb-8">
              Add your child details
            </h3>
            <button
              onClick={() => setOption("form")}
              className="w-full cursor-pointer bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md text-lg"
            >
              Add Child
            </button>
          </div>
        )}
        {option === "form" && <GenerateChildID />}
      </main>
    </div>
  );
}
