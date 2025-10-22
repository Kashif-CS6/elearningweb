"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const MoodCheckScreenNext = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen  flex items-center justify-center p-6 py-8">
      <div className="bg-white border border-gray-200 shadow-xl w-fit px-12 py-10 md:w-[1113px] xl:h-auto rounded-[6px] text-center">
        <h2 className="text-sm md:text-[22px] font-[600] leading-[24px] mb-8">
          AI Live Session
        </h2>
        <div className="mb-8 flex justify-center cursor-pointer">
          <Image
            src={"/circle-bot-icon.svg"}
            width={267}
            height={267}
            alt="Bot"
            className="w-[200px] md:w-[267px] h-[200px] md:h-[267px]"
          />
        </div>
        <p className="text-gray-700 md:w-[571px] mx-auto text-sm md:text-[22px] font-[600] leading-[33px]  mb-14">
          Got it, you’re feeling just okay today. Don’t worry, I’ve got
          something fun planned that might cheer you up.
        </p>
        <button
          onClick={() => router.push("/learner/modcheck/game")}
          className=" bg-blue-600 hover:bg-blue-700 text-white w-full md:w-[638px] h-[60px] rounded-[6px] transition-colors duration-200 text-[19px] font-[500]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoodCheckScreenNext;
