// app/page.tsx
import { useState } from "react";
import {
  Search,
  Globe,
  Moon,
  Grid3x3,
  Bell,
  Mic,
  FileText,
  X,
  ArrowRight,
} from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* top header */}
      <div className="w-full mx-auto flex items-center justify-between">
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

      {/* hero section */}
      <div className="relative h-[181px] rounded-[20px] bg-gradient-to-r from-blue-600 to-blue-500  overflow-hidden">
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

      {/* end section  */}

      <div className="bg-white h-screen shadow-sm border border-gray-200 rounded-[6px]">
        <div className="bg-white  p-6   ">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ?
              </div>
            </div>
            <span className="text-gray-800 font-medium">Who Are You?</span>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full p-1 shadow-2xl">
            <div className="bg-white rounded-full p-0.5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full transition-all transform hover:scale-110 shadow-lg">
                <Mic className="w-6 h-6" />
              </button>
            </div>
          </div>

          <button className="bg-white hover:bg-gray-50 p-4 rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105">
            <FileText className="w-5 h-5 text-gray-700" />
          </button>

          <button className="bg-white hover:bg-gray-50 p-4 rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
