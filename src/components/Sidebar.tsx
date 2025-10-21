"use client";
import Image from "next/image";
import { useState } from "react";
import {
  LayoutDashboard,
  User,
  Settings,
  Headphones,
  FileText,
  ChevronRight,
  Circle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const { t } = useTranslation();
  return (
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
            <span className="font-medium">{t("sidebar.dashboard")}</span>
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
            <span className="font-medium">{t("sidebar.childProfile")}</span>
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
            <span className="font-medium">{t("sidebar.settings")}</span>
          </button>
        </div>

        {/* Misc Section */}
        <div className="mt-8">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {t("sidebar.misc")}
          </p>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
              <div className="flex items-center gap-3">
                <Headphones className="w-5 h-5" />
                <span className="font-medium">{t("sidebar.support")}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">{t("sidebar.documentation")}</span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
