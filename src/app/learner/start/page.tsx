"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function OnboardingApp() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center lg:p-6">
      <div className="bg-white rounded-[6px] shadow-sm flex flex-col items-center justify-between py-20 xl:w-[1130px] md:h-[796px] text-center">
        <div>
          <h1 className="text-[20px] md:text-[24px] lg:text-[30px] leading-[40px] text-gray-700 font-[500] mb-2">
            {t("onboarding.title")}
          </h1>
          <p className="text-[20px] md:text-[24px] lg:text-[30px] leading-[40px] text-gray-700 font-[500] mb-2 px-2 md:px-10">
            {t("onboarding.description")}
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative">
            <Image
              src={"/ai-icon.svg"}
              width={184.25}
              height={242.88}
              alt="ai icon"
              className="w-[100px] h-[100px] md:w-[184.25px] md:h-[242.88px]"
            />
          </div>
        </div>

        <button
          onClick={() => router.push("/learner/chat")}
          className="bg-blue-600 hover:bg-blue-700 text-white w-80 md:w-[638px] h-[60px] rounded-[6px] transition-colors duration-200 text-[19px] font-[500]"
        >
          {t("onboarding.button")}
        </button>
      </div>
    </div>
  );
}
