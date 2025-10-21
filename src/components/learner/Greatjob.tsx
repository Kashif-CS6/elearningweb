"use client";

import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RewardScreenProps {
  setOpenReward: Dispatch<SetStateAction<boolean>>;
  openReward: boolean;
  route: string;
  heading: string;
  description: string;
  btnText: string;
}

const RewardScreen: FC<RewardScreenProps> = ({
  setOpenReward,
  openReward,
  route,
  heading,
  description,
  btnText = "Next",
}) => {
  const router = useRouter();

  const GoToPlay = () => {
    setOpenReward(false);
    setTimeout(() => {
      router.push(route);
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-[610px] h-[411px] text-center flex flex-col items-center gap-2 animate-fadeIn">
        <Image
          src="/reward-icon.png"
          width={154}
          height={134}
          alt="Reward"
          className="mb-6"
        />

        <h3 className="text-[24px] leading-[24px] font-[600] mb-2">
          {heading}
        </h3>
        <p className="text-[#7D848D] font-[400] text-[16px] leading-[20px] mb-6 w-[344px] text-center">
          {description}
        </p>

        <button
          onClick={GoToPlay}
          className="w-[340px] h-[52px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-[14.2px] transition-colors"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default RewardScreen;
