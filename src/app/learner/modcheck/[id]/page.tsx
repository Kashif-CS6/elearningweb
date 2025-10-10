"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const MoodCheckScreenNext = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl px-12 py-6 w-[1113px] h-[593px] rounded-[6px] text-center">
        <h2 className="text-[22px] font-[600] leading-[24px] mb-8">
          AI Live Session
        </h2>
        <div
          className="mb-8 flex justify-center cursor-pointer"
          onClick={() => router.push("/learner/modcheck/game")}
        >
          <Image
            src={"/circle-bot-icon.svg"}
            width={267}
            height={267}
            alt="Bot"
          />
        </div>
        <p className="text-gray-700 w-[571px] mx-auto text-[22px] font-[600] leading-[33px]  mb-14">
          Got it, you’re feeling just okay today. Don’t worry, I’ve got
          something fun planned that might cheer you up.
        </p>
      </div>
    </div>
  );
};

export default MoodCheckScreenNext;
