"use client";
import { useState } from "react";
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
  CopyIcon,
  ShareIcon,
  Link,
} from "lucide-react";
import Image from "next/image";
import MessageInput from "@/components/learner/dashboard/MessageInput";
import Hero from "@/components/learner/dashboard/Hero";
export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [replay, setReplay] = useState<boolean>(false);

  const onClose = () => {
    setOpenModal(false);
  };
  return (
    <div className={`flex flex-col gap-4 relative ${openModal ? "" : "p-6"} `}>
      {/* top header */}
      <div>
        <div className="shadow-sm p-3 flex items-center justify-between mx-4">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search (Ctrl+/)"
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Moon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Grid3x3 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              U
            </button>
          </div>
        </div>

        <Hero />
      </div>
      {/* end section  */}

      <div className="h-screen flex flex-col justify-between relative shadow-sm border border-gray-200 rounded-[6px]">
        <div>
          <div className="bg-white  p-6  flex flex-col gap-10 ">
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src="/ai-icon.svg"
                  width={30}
                  height={39.55}
                  alt="ai-icon"
                />
              </div>
              <span className="text-gray-800 font-medium">Who Are You?</span>
            </div>

            {replay && (
              <div className="flex items-end gap-2 justify-end">
                <div className="w-80 md:w-[500px] bg-gray-100 rounded-[6px]  py-4 pl-4 pr-10 rounded-tr-full">
                  <h1 className="text-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam accusamus quos vero aliquam nesciunt dolore
                    distinctio at illo eligendi rerum?
                  </h1>
                  <div className="flex items-center gap-2 justify-end">
                    <button className="text-gray-300">
                      <CopyIcon size={15} />
                    </button>
                    <button className="text-gray-300">
                      <Link size={15} />
                    </button>
                  </div>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
                  alt=""
                  width={40}
                  height={100}
                  className="rounded-md h-12 w-12 object-cover"
                />
              </div>
            )}
          </div>

          {/* Floating Action Buttons */}
          {!replay && (
            <div className="absolute bottom-10  left-1/2 transform -translate-x-1/2 flex items-center  gap-10">
              <div className="bg-gradient-to-r w-[117px] h-[117px] from-blue-500 to-green-400 rounded-full p-1 shadow-2xl">
                <div className="bg-white w-full h-full rounded-full p-1 ">
                  <button
                    onClick={() => setReplay(true)}
                    className="bg-blue-600 w-full h-full hover:bg-blue-700 text-white p-1 flex items-center justify-center rounded-full transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Mic className="w-10 h-10" />
                  </button>
                </div>
              </div>

              <button className=" hover:bg-gray-50 p-4   rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105">
                <FileText className="w-5 h-5 text-gray-700" />
              </button>

              <button className="bg-white hover:bg-gray-50 p-4 rounded-2xl shadow-lg border border-gray-200 transition-all transform hover:scale-105">
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          )}
        </div>
        {/* @ts-ignore */}
        {replay && <MessageInput openModal={setOpenModal} />}
      </div>
      {openModal && (
        <div className="absolute bg-black/20 w-full h-full  flex items-center justify-center">
          <div className="w-[519.65px] h-[374.26px] rounded-[16.16px] bg-white flex flex-col gap-5 items-center justify-center shadow-xl ">
            <Image
              width={129.24}
              height={129.24}
              alt="loading"
              src={"/loader.svg"}
            />
            <h1 className="text-center font-[400] tracking-[0.2px] text-[21.54px] leading-[160%] px-16">
              Please hold on while we summarize your profile.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
