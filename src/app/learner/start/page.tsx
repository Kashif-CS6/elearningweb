"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OnboardingApp() {
  const router = useRouter();

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center lg:p-6">
      <div className="bg-white rounded-[6px] shadow-sm flex flex-col  items-center justify-between py-20  xl:w-[1130px] h-[796px]  text-center">
        <div>
          <h1 className="text-[24px] lg:text-[30px] leading-[40px]  text-gray-700 font-[500] mb-2">
            This is your magic backpack.
          </h1>
          <p className="text-[24px] lg:text-[30px] leading-[40px]  text-gray-700 font-[500] mb-2 px-2 md:px-10">
            Let{"'"}s pack it with your dreams and secrets so I can know you
            better!
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative">
            <Image
              src={"/ai-icon.svg"}
              width={184.25}
              height={242.88}
              alt="ai icon"
            />
          </div>
        </div>

        <button
          onClick={() => router.push("/learner/chat")}
          className=" bg-blue-600 hover:bg-blue-700 text-white w-80 md:w-[638px] h-[60px] rounded-[6px] transition-colors duration-200 text-[19px] font-[500]"
        >
          Let{"'"}s Started
        </button>
      </div>
    </div>
  );
}
