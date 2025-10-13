import React, { FC, useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mic, FileText, X } from "lucide-react";
import RewardScreen from "./Greatjob";

interface BotSessionProps {
  Heading: string;
  route: string;
  setValue: string;
  setMessage: Dispatch<SetStateAction<string>>;
  onSelect: Dispatch<SetStateAction<string>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  widthX: string;
}

const BotSession: FC<BotSessionProps> = ({
  Heading,
  route,
  setValue,
  setMessage,
  onSelect,
  setOpenModal,
  widthX = "w-[610px]",
}) => {
  const router = useRouter();
  const [openRewardModal, setOpenRewardModal] = useState<boolean>(false);

  const HandleOption = (e: string) => {
    onSelect(e);
    setOpenRewardModal(!openRewardModal);
    // setOpenModal(true);
    setMessage(setValue);
    setOpenModal(false);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center md:p-6">
      <div className="bg-white shadow-xl w-full   md:w-[1113px] h-[702px] rounded-[6px] flex flex-col justify-between text-center">
        <div>
          
          <h2 className="text-sm md:text-[22px] font-[600] leading-[24px] mb-4 px-12 pt-6 ">
            AI Live Session
          </h2>
          <div className="mb-0 flex justify-center px-12 py-2">
            <Image
              src={"/circle-bot-icon.svg"}
              width={162}
              height={180}
              alt="Bot"
            />
          </div>
          <p
            className={`text-gray-700 md:${widthX} mx-auto text-sm md:text-[22.64px] font-[600] leading-[33px]  mb-8 px-12 py-6`}
          >
            {Heading && Heading != "MCQ" && Heading}
          </p>

          {Heading === "MCQ" && (
            <div className=" flex items-center justify-center gap-8">
              <button
                onClick={() => HandleOption("magic-ball")}
                className="md:w-[336px] h-[80px] border-2 border-gray-200 focus:border-purple-300 hover:bg-purple-50 rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors"
              >
                <span className="text-purple-600">🔮</span>
                <span className="font-medium">Magic Ball</span>
              </button>
              <button
                onClick={() => HandleOption("breathing")}
                className="md:w-[336px] h-[80px] border-2 border-gray-200 focus:border-purple-300 hover:bg-purple-50 rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors opacity-50"
              >
                <span>🌬️</span>
                <span className="font-medium">Breathing Game</span>
              </button>
            </div>
          )}
        </div>
        <div
          className="h-[230px] w-full relative  px-0  flex flex-col items-center  justify-end "
          style={{
            backgroundImage: "url('/live session.svg')",
            backgroundSize: "",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-gradient-to-r w-[100px] h-[100px] md:w-[117px] md:h-[117px] from-blue-500 to-green-400 rounded-full p-1 shadow-2xl absolute top-4">
            <div className="bg-white w-full h-full rounded-full p-1 ">
              <button
                onClick={() => setMessage(setValue)}
                className="bg-blue-600 cursor-pointer w-full h-full hover:bg-blue-700 text-white p-1 flex items-center justify-center rounded-full transition-all transform hover:scale-110 shadow-lg"
              >
                <Mic className="w-10 h-10" />
              </button>
            </div>
          </div>
          <button
            onClick={() => router.push(route)}
            className=" hover:bg-gray-50 p-4 absolute top-16 right-20 md:right-32   rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105"
          >
            <FileText className="w-5 h-5 text-gray-700" />
          </button>

          <button className="bg-white hover:bg-gray-50 absolute  top-16 right-3 md:right-10 p-4 rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {Heading === "MCQ" && openRewardModal && (
        <RewardScreen
          setOpenReward={setOpenRewardModal}
          openReward={openRewardModal}
          route="/learner/modcheck/message/ai"
        />
      )}
    </div>
  );
};

export default BotSession;
