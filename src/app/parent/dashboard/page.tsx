"use client";

import { useState } from "react";
import CreateChildProfile from "@/components/CreateChildProfile";
import StartQuestionnaire from "@/components/StartQuestionaire";
import ChildHistory from "@/components/ChildHistory";
import CurrentStruggles from "@/components/CurrentStruggle";
import GenerateChildID from "@/components/GenerateChildID";
import Hero from "@/components/learner/dashboard/Hero";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/Sidebar";

export default function KidzVoiceDashboard() {
  const [option, setOption] = useState("start");
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-2 xl:p-4">
        {/* Hero Banner */}
        <Hero />

        {/* Statistics Section */}
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 justify-center lg:justify-between my-4">
          <h2 className="text-[18px] font-semibold text-[#4B465C]">
            {t("dashboard.statistics")}
          </h2>

          <div className="w-80 md:w-[450px] h-[43.84px] flex items-center justify-center  bg-[linear-gradient(90deg,rgba(255,62,62,0)_0%,#FF4B4B_200%,rgba(255,75,75,0)_100.97%)] rounded-md">
            <p className="text-[#FF4B4B] text-[18px] font-[400] text-center">
              {t("dashboard.childProfile")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">
              {t("dashboard.profile")}
            </span>
            <div className="flex items-center gap-2 w-[274.61px]">
              <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 font-semibold">5%</span>
            </div>
          </div>
        </div>

        {/* Add Child Card */}
        {option === "start" && (
          <div className="bg-white rounded-[6px] shadow-sm md:w-[747.41px] h-[171px] mx-auto my-10 flex flex-col justify-between p-8">
            <h3 className="text-gray-800 text-[18px] leading-[24px] font-medium">
              {t("dashboard.childheading")}
            </h3>
            <button
              onClick={() => setOption("form")}
              className="md:w-[695px] cursor-pointer bg-blue-600 text-white h-[54px] rounded-[6px] hover:bg-blue-700 transition-all shadow-md text-sm font-[500]"
            >
              {t("dashboard.childbtn")}
            </button>
          </div>
        )}

        {/* Conditional Pages */}
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
