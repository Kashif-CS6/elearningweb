"use client";

import React from "react";
import { Award, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ translation hook

const Certificate = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:w-[747px] mx-auto py-6 lg:p-6 rounded-[6px]">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        {/* Title */}
        <h2 className="text-[18px] font-[600] leading-[24px] text-[#4B465C] text-center">
          {t("certificate.title")}
        </h2>
        <hr className="border-[#D6D6D6] my-4" />

        {/* User Info + Certificate Status */}
        <div className="flex items-center flex-wrap gap-4 md:flex-nowrap justify-between mb-8 pb-6">
          {/* Left - User */}
          <div className="flex items-center gap-4">
            <div className="w-[66.25px] h-[66.25px] bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              DA
            </div>
            <div>
              <h3 className="font-[600] text-[18.38px] leading-[100%]">
                {t("certificate.name")}
              </h3>
              <p className="text-[11.7px] leading-[100%] font-[400] text-gray-400 py-1">
                {t("certificate.email")}
              </p>
            </div>
          </div>

          {/* Middle - Status */}
          <div className="text-center flex items-center gap-3">
            <div className="w-[60px] h-[60px] rounded-[15.31px] mx-auto bg-blue-100 flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-[600]">
                  {t("certificate.certified")}
                </span>
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 text-[11.7px]">
                {t("certificate.level")}
              </p>
            </div>
          </div>

          {/* Right - Button */}
          <button className="bg-blue-600 text-[9px] font-[400] w-[121px] h-[38.82px] rounded-[360px] text-white leading-[100%] tracking-[0.65px] hover:bg-[#0961F5] transition-colors border-[0.65px]">
            {t("certificate.download")}
          </button>
        </div>

        {/* Badge Sharing Section */}
        <div>
          <h3 className="font-[400] text-[16px] tracking-[1px] mb-4">
            {t("certificate.badgeTitle")}
          </h3>
          <div className="flex gap-4 mb-12">
            <button className="w-[188px] h-[60px] border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-400">
              <Linkedin className="w-5 h-5 text-blue-700" />
              {t("certificate.linkedin")}
            </button>
            <button className="w-[188px] h-[60px] border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              {t("certificate.emailShare")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
