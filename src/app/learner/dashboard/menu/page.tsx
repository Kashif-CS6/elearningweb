"use client";
import { Search, Globe, Moon, Grid3x3, Bell } from "lucide-react";

import RightSideBar from "@/components/learner/RightSideBar";
import Hero from "@/components/learner/dashboard/Hero";
import LearnerMain from "@/components/learner/dashboard/LearnerMain";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Menu = () => {
  const [showOption, setOption] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth/login");
  };
  return (
    <div className={`flex flex-col gap-4 relative p-6 `}>
      {/* top header */}
      <div className="sticky top-0 bg-white z-10">
        <div className="shadow-sm p-3 flex items-center justify-between mb-2 sticky">
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
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:block">
              <Moon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg md:block hidden transition-colors">
              <Grid3x3 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg hidden md:block transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => setOption(!showOption)}
              className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hidden md:flex items-center justify-center text-white font-semibold relative"
            >
              <span>U</span>
              {showOption ? (
                <span
                  onClick={handleLogout}
                  className="bg-white border border-gray-200 text-black absolute py-2 px-10 rounded-[6px] -bottom-11 right-0"
                >
                  Logout
                </span>
              ) : (
                ""
              )}
            </button>
          </div>
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
