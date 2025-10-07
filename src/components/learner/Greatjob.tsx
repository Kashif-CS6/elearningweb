import { FC } from "react";
import Image from "next/image";

interface RewardScreenProps {
  setOpenReward: (a: boolean) => {};
  openReward: boolean;
}
const RewardScreen: FC<RewardScreenProps> = ({ setOpenReward, openReward }) => {
  return (
    <div className="min-h-screen w-full bg-black/50 flex items-center justify-center p-6 fixed">
      <div className="bg-white rounded-2xl shadow-xl p-12 w-[610px] h-[411px] text-center flex flex-col items-center gap-1">
        <div className="mb-6 flex items-center justify-center">
          <Image src="/reward-icon.png" width={154} height={134} alt="Reward" />
        </div>

        <h3 className="text-[24px]  leading-[24px] font-[500] mb-2">
          Great job
        </h3>
        <p className="text-[#7D848D] font-[400] text-[16px] leading-[20px] mb-6 w-[344px] text-center">
          Max! You just trained your focus, just like a football player before a
          big match.
        </p>

        <button
          onClick={() => setOpenReward(false)}
          className="w-[340px] cursor-pointer h-[52px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-[14.2px] transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RewardScreen;
