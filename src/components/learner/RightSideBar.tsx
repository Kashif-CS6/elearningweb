"use client";
import React from "react";
import { MoreVertical, Star } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const RightSideBar = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden xl:block min-w-[296px] flex-1 h-[933px] shadow-md border-[1px] border-gray-100">
      {/* Profile Card */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-[500] text-[16px] text-[#202020]">
            {t("rightSidebar.profile")}
          </h3>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <Image
            width={500}
            height={500}
            alt="profile"
            src={"/child.jpg"}
            className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-3 object-cover"
          />
          <h4 className="font-[500] text-[16px] text-[#202020]">Max</h4>
          <p className="text-sm text-gray-500">maxloren@email.com</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border-b border-gray-200">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-[400] text-[14px] text-[#202020]">
              {t("rightSidebar.homeworkHero")}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-[400] text-[14px] text-[#202020]">
              {t("rightSidebar.friendlyStar")}
            </span>
          </div>
        </div>
      </div>

      {/* Sessions */}
      <div className="bg-white rounded-xl px-6">
        <h3 className="font-[500] text-[16px] text-[#202020] mb-4">
          {t("rightSidebar.sessions")}
        </h3>
        <div className="space-y-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border-b border-gray-200 pb-2"
            >
              <div className="w-[18.21px] h-[24px] flex items-center justify-center">
                <Image
                  src={"/ai-icon.svg"}
                  width={18.21}
                  height={24}
                  alt="bot"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-[500] text-gray-900">
                  {t("rightSidebar.magicBall")}
                </p>
                <p className="text-[8px] font-[400] text-gray-500">
                  10/08/2025
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
