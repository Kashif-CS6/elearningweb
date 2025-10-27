"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, Globe, Moon, Grid3x3, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslationContext } from "@/context/TranslationContext";

const TopHeader = () => {
  const [showOption, setOption] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const router = useRouter();
  const { language, changeLanguage } = useTranslationContext();
  const langRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth/login");
  };

  // ✅ Hide popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setShowLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="shadow-sm p-3 flex items-center justify-between mb-2">
        {/* 🔍 Search */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search (Ctrl+/)"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* 🌍 Icons Section */}
        <div className="flex items-center gap-4">
          {/* 🌍 Globe - Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setShowLang(!showLang)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5 text-gray-600" />
            </button>

            {showLang && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-32 text-sm z-20">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setShowLang(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    language === "en" ? "font-semibold text-blue-600" : ""
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => {
                    changeLanguage("de");
                    setShowLang(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    language === "de" ? "font-semibold text-blue-600" : ""
                  }`}
                >
                  🇩🇪 Deutsch
                </button>
              </div>
            )}
          </div>

          {/* 🌙 Other Icons */}
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

          {/* 👤 User Avatar */}
          <button
            onClick={() => setOption(!showOption)}
            className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hidden md:flex items-center justify-center text-white font-semibold relative"
          >
            <span>U</span>
            {showOption && (
              <span
                onClick={handleLogout}
                className="bg-white border border-gray-200 text-black absolute py-2 px-10 rounded-[6px] -bottom-11 right-0"
              >
                Logout
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
