import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Globe,
  Moon,
  Grid3x3,
  Bell,
  Mic,
  FileText,
  X,
  ArrowRight,
} from "lucide-react";

interface BotSessionProps {
  Heading: string;
  route: string;
  setValue: string;
  setMessage: () => {};
}

const BotSession: FC<BotSessionProps> = ({
  Heading,
  route,
  setValue,
  setMessage,
}) => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl  w-[1113px] h-[702px] rounded-[6px] flex flex-col justify-between text-center">
        <div>
          <h2 className="text-[22px] font-[600] leading-[24px] mb-4 px-12 pt-6 ">
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
          <p className="text-gray-700 w-[610px] mx-auto text-[22.64px] font-[600] leading-[33px]  mb-8 px-12 py-6">
            {Heading}
          </p>
        </div>
        <div
          className="h-[230px] w-full relative  px-0  flex flex-col items-center  justify-end "
          style={{
            backgroundImage: "url('/live session.svg')",
            backgroundSize: "",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-gradient-to-r w-[117px] h-[117px] from-blue-500 to-green-400 rounded-full p-1 shadow-2xl absolute top-4">
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
            className=" hover:bg-gray-50 p-4 absolute top-16 right-32   rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105"
          >
            <FileText className="w-5 h-5 text-gray-700" />
          </button>

          <button className="bg-white hover:bg-gray-50 absolute  top-16 right-10 p-4 rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotSession;
