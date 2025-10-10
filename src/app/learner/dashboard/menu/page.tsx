"use client";

import { Search, Globe, Moon, Grid3x3, Bell } from "lucide-react";

import RightSideBar from "@/components/learner/RightSideBar";
import Hero from "@/components/learner/dashboard/Hero";
import LearnerMain from "@/components/learner/dashboard/LearnerMain";

const Menu = () => {
  return (
    <div className={`flex flex-col gap-4 relative p-6 `}>
      {/* top header */}
      <div className="w-full  shadow-sm p-3 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search (Ctrl+/)"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Globe className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Grid3x3 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            U
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div>
          <Hero />
          <LearnerMain />
        </div>

        <RightSideBar />
      </div>
    </div>
  );
};

export default Menu;
