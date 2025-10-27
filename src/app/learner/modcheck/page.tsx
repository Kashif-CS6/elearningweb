"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const MoodCheckScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [onMode, onMoodSelect] = useState<string>("happy");

  const handleOption = (mood: string) => {
    onMoodSelect(mood);
    router.push(`/learner/modcheck/${mood}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white border border-gray-200 shadow-xl px-12 w-80 py-6 md:w-[1113px] xl:h-[593px] rounded-[6px] text-center">
        <h2 className="text-sm md:text-[22px] font-[600] leading-[24px] mb-8">
          {t("moodCheck.title")}
        </h2>

        <div className="mb-8 flex justify-center">
          <Image src={"/ai-icon.svg"} width={100} height={131.82} alt="Bot" />
        </div>

        <p className="text-gray-700 md:w-[489px] mx-auto text-sm md:text-[22.64px] font-[600] leading-[33px] mb-14">
          {t("moodCheck.greeting")}
        </p>

        <div className="flex items-center flex-wrap gap-4 md:gap-8 justify-center">
          <button
            onClick={() => handleOption("happy")}
            className="hover:border-yellow-400 md:py-4 transition-colors w-[336px] h-[50px] md:h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😊 {t("moodCheck.happy")}
          </button>

          <button
            onClick={() => handleOption("sad")}
            className="hover:border-yellow-400 md:py-4 transition-colors w-[336px] h-[50px] md:h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😢 {t("moodCheck.sad")}
          </button>

          <button
            onClick={() => handleOption("okay")}
            className="hover:border-yellow-400 md:py-4 transition-colors w-[336px] h-[50px] md:h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😐 {t("moodCheck.okay")}
          </button>

          <button
            onClick={() => handleOption("angry")}
            className="hover:border-yellow-400 md:py-4 transition-colors w-[336px] h-[50px] md:h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😠 {t("moodCheck.angry")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodCheckScreen;
