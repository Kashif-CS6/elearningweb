"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const DigitalContract = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);

  const handleSave = () => {
    // if (!agreed) {
    //   toast.error(t("digitalContract.toastError"));
    //   return;
    // }

    toast.success(t("digitalContract.toastSuccess"));
    setTimeout(() => {
      router.push("/coach/payout");
    }, 2000);
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <div className="md:w-[747.18px] md:h-[925px] border border-gray-200 mx-auto bg-white rounded-[16px] md:rounded-[6px] p-8 px-5 shadow-lg">
        <h2 className="font-[600] text-[18px] leading-[24px] text-[#4B465C] text-center">
          {t("digitalContract.title")}
        </h2>

        <div className="space-y-6">
          {/* Contract Text */}
          <div className="md:w-[699px] h-[288px] font-[400] pt-3 text-justify overflow-y-auto">
            <p>{t("digitalContract.contractText")}</p>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer py-1">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              {t("digitalContract.agreeText")}
            </span>
          </label>

          {/* E-Signature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t("digitalContract.eSignature")}
            </label>
            <div className="border-2 md:w-[699.18px] h-[134px] border-dashed border-gray-300 rounded-[6px] flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                {t("digitalContract.clickToSign")}
              </span>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="h-[157px] rounded-lg">
            <h3 className="font-[400] text-[24px] leading-[100%] tracking-[1.65px] text-gray-900 mb-4">
              {t("digitalContract.codeOfConduct")}
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  defaultChecked
                />
                <span className="text-[14px] font-[400] text-[#000000]">
                  {t("digitalContract.followGuidelines")}
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  defaultChecked
                />
                <span className="text-[14px] font-[400] text-[#000000]">
                  {t("digitalContract.dataProtection")}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  defaultChecked
                />
                <span className="text-[14px] font-[400] text-[#000000]">
                  {t("digitalContract.professionalConduct")}
                </span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex-1 px-4 h-[60px] text-[19px] py-3 bg-blue-600 hover:bg-blue-700 text-white font-[500] rounded-[6px] transition"
            >
              {t("digitalContract.save")}
            </button>
          </div>

          <div className="text-xs text-gray-500 py-2">
            {t("digitalContract.approvalNote")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalContract;
