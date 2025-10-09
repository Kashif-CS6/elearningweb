"use client";
import RewardScreen from "@/components/learner/Greatjob";
import Image from "next/image";
import { FC, useState } from "react";

const MathChallengeScreen = () => {
  const [onAnswer, setOnAnswer] = useState<string>("");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [openReward, setOpenReward] = useState<boolean>(false); // ✅ start closed

  const handleAnswer = (num: number) => {
    setSelectedAnswer(num);
    if (num === 7) {
      setOpenReward(true); // ✅ open only when correct
    }
    setTimeout(() => setOnAnswer(num.toString()), 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-12 h-[593px] max-w-[1113px] w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">AI Live Session</h2>
        <div className="mb-6 flex justify-center">
          <Image width={100} height={131} alt="img" src={"/ai-icon.svg"} />
        </div>
        <p className="text-gray-700 w-[937px] text-[22px] font-[700] mb-4">
          Ali, let's try this together. Look at this math problem. Imagine your
          own magic ball is holding all the distractions. Focus only on the
          numbers. Can you solve it?
        </p>

        <div className="rounded-xl p-8 mb-6">
          <div className="flex items-center justify-center gap-4 text-3xl font-bold mb-8">
            <span className="max-w-[336px] text-[24px] font-[400] w-full flex items-center justify-center border-gray-200 h-[60px] border-[2px]">
              2 + 5
            </span>
            <span>=</span>
            <div className="max-w-[336px] text-[24px] font-[400] w-full flex items-center justify-center border-gray-200 h-[60px] border-[2px]">
              {selectedAnswer}
            </div>
          </div>

          <div className="flex items-center justify-center gap-7">
            {[5, 7, -7, 8].map((num) => (
              <button
                key={num}
                onClick={() => handleAnswer(num)}
                className={`max-w-[159px] text-[24px] font-[400] w-full flex items-center justify-center border-gray-200 h-[60px] border-[2px] py-4 text-lg transition-all ${
                  selectedAnswer === num
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-white border-2 border-gray-200 hover:border-blue-400"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Reward modal only opens when correct answer */}
      {openReward && (
        <RewardScreen
          setOpenReward={setOpenReward}
          openReward={openReward}
          route="/learner/modcheck/game/play"
        />
      )}
    </div>
  );
};

export default MathChallengeScreen;
