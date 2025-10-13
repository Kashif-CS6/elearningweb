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
import Image from "next/image";

export default function KidzVoiceDashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [option, setOption] = useState("start");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-72 bg-white border-r border-gray-200 xl:flex flex-col">
        {/* Logo */}
        <div className="px-6 py-5 flex items-center gap-3">
          <Image src={"/elogo.svg"} width={45.54} height={47.72} alt="e logo" />
          <div className="flex items-center justify-between w-full">
            <span className="text-[25.48px] tracking-normal leading-[100%] font-[600] text-[#1B84F8]">
              KidzVoice
            </span>
            <div className="flex items-center justify-center py-2">
              <Circle className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-3">
          <div className="space-y-1">
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
      <main className="flex-1 p-2 md:p-8">
        {/* Hero Banner */}
        <div className="relative md:h-[181px] rounded-[20px] bg-gradient-to-r from-blue-600 to-blue-500  overflow-hidden">
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

          <div className="relative z-10 flex flex-col gap-1 p-6">
            <p className="text-white text-[12px] font-[400]  uppercase tracking-wide">
              Online Course
            </p>
            <h1 className="text-white text-[24px] font-[600]   max-w-sm">
              Sharpen Your Skills With Professional Online Courses
            </h1>
            <button className="flex items-center justify-center w-[110px] h-[36px] rounded-[40px] gap-2 bg-gray-900 text-white  font-medium text-[12px] hover:bg-gray-800 transition-all">
              Join Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 justify-between my-4">
          <h2 className="text-[18px] font-semibold text-[#4B465C]">
            Statistics
          </h2>
          <div className="w-80 md:w-[450px] h-[43.84px] flex items-center justify-center  bg-[linear-gradient(90deg,rgba(255,62,62,0)_0%,#FF4B4B_200%,rgba(255,75,75,0)_100.97%)] rounded-md   ">
            <p className="text-[#FF4B4B] text-[18px] font-[400] text-center">
              Please Complete Child Profile
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Profile</span>
            <div className="flex items-center gap-2 w-[274.61px] ">
              <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 font-semibold">5%</span>
            </div>
          </div>
        </div>

        {/* Add Child Card */}
        {option === "start" && (
          <div className="bg-white rounded-[6px] shadow-sm  md:w-[747.41px] h-[171px] mx-auto my-10 flex flex-col justify-between p-8  ">
            <h3 className="text-gray-800 text-[18px] leading-[24px] font-medium ">
              Add your child details
            </h3>
            <button
              onClick={() => setOption("form")}
              className="md:w-[695px]  cursor-pointer bg-blue-600 text-white h-[54px] rounded-[6px]  hover:bg-blue-700 transition-all shadow-md text-[19px] font-[500]"
            >
              Add Child
            </button>
          </div>
        )}
        {option === "form" && <CreateChildProfile setOption={setOption} />}
        {option === "start-question" && (
          <StartQuestionnaire setOption={setOption} />
        )}
        {option === "begin" && <ChildHistory setOption={setOption} />}
        {option === "createChildHistory" && (
          <CurrentStruggles setOption={setOption} />
        )}
        {option === "final" && <GenerateChildID />}
      </main>
    </div>
  );
}
