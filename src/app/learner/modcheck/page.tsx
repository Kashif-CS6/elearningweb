"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MoodCheckScreen = () => {
  const router = useRouter();
  const [onMode, onMoodSelect] = useState<string>("happy");

  const handleOption = (e: string) => {
    onMoodSelect(e);
    router.push(`/learner/modcheck/${e}`);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl px-12 py-6 md:w-[1113px] xl:h-[593px] rounded-[6px] text-center">
        <h2 className="text-sm md:text-[22px] font-[600] leading-[24px] mb-8">
          AI Live Session
        </h2>
        <div className="mb-8 flex justify-center">
          <Image src={"/ai-icon.svg"} width={100} height={131.82} alt="Bot" />
        </div>
        <p className="text-gray-700 md:w-[489px] mx-auto text-sm md:text-[22.64px] font-[600] leading-[33px]  mb-14">
          Hi Max! I{"'"}m happy to see you again. Before we start, tell me, how
          do you feel today?
        </p>
        <div className="flex items-center flex-wrap gap-8 justify-center ">
          <button
            onClick={() => handleOption("happy")}
            className=" hover:border-yellow-400  py-4 transition-colors w-[336px] h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😊 Happy
          </button>
          <button
            onClick={() => handleOption("sad")}
            className=" hover:border-yellow-400  py-4 transition-colors w-[336px] h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😢 Sad
          </button>
          <button
            onClick={() => handleOption("okay")}
            className=" hover:border-yellow-400  py-4 transition-colors w-[336px] h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😐 Okay
          </button>
          <button
            onClick={() => handleOption("angry")}
            className=" hover:border-yellow-400  py-4 transition-colors w-[336px] h-[60px] rounded-[6px] border-[1px] border-[#DBDADE]"
          >
            😠 Angry
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodCheckScreen;
