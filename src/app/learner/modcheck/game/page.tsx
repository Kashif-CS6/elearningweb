"use client";
import { useState } from "react";
import Image from "next/image";
import RewardScreen from "@/components/learner/Greatjob";

const Game = () => {
  const [openReward, setOpenReward] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center md:p-6">
      <div className="bg-white shadow-xl  md:px-0  pt-6 md:w-[1113px]  rounded-[6px] text-center">
        <h2 className="text-sm md:text-[22px] font-[600] leading-[24px] mb-8">
          AI Live Session
        </h2>
        <div className="mb-8 flex justify-center px-12">
          <Image
            src={"/circle-bot-icon.svg"}
            width={162.88}
            height={180.01}
            alt="Bot"
          />
        </div>
        <p className="text-gray-700  md:w-[809px] mx-auto px-2 md:px-0 text-sm md:text-[22.64px] font-[600] leading-[33px] mb-10">
          Let’s start with a breathing game. Imagine this ball is your breath.
          When it gets big, you breathe in. When it gets small, you breathe out.
          Ready?
        </p>
        <button
          onClick={() => setOpenReward(true)}
          className=" bg-blue-600 hover:bg-blue-700 text-white w-80 md:w-[638px] h-[60px] rounded-[6px] transition-colors duration-200 text-[19px] font-[500]"
        >
          Next
        </button>
        <div
          className="h-[319px] w-full relative  px-0 flex flex-col items-center  justify-end "
          style={{
            backgroundImage: "url('/mask-group.svg')",
            backgroundSize: "",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[110px] h-[118px] relative">
            <Image
              onClick={() => setOpenReward(true)}
              src={"/football.svg"}
              className="absolute left-3 cursor-pointer"
              width={110}
              height={118}
              alt="Football"
            />
          </div>
        </div>
      </div>
      {openReward && (
        <RewardScreen
          openReward={openReward}
          setOpenReward={setOpenReward}
          route="/learner/modcheck/game/play"
        />
      )}
    </div>
  );
};

export default Game;
