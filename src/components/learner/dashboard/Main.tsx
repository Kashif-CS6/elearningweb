import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <div className="min-h-screen w-full py-8">
      <div className=" mx-auto">
        {/* Header Section with Progress Circles and Stats */}
        <div className="">
          <div className="flex items-center justify-between my-10">
            {/* Progress Circles */}
            <div className="relative w-[333px] h-[333px]">
              {/* Outer circle - Blue (Meeting) */}
              <Image
                width={333}
                height={333}
                className="h-fit w-fit"
                src={"/Diagram.svg"}
                alt={"Diagram"}
              />
            </div>

            {/* Stats and Button */}
            <div className="flex-1 ml-12">
              {/* Stats */}
              <div className="flex gap-12 mb-8">
                <div className="flex items-start  gap-3">
                  <div className="w-[20px] h-[20px] bg-blue-400 rounded-full mt-3"></div>
                  <div className="text-[23.33px] font-[500] leading-[33.33px]">
                    <p className="text-gray-600 ">Meeting</p>
                    <p className="">2</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-[20px] h-[20px] bg-red-400 rounded-full mt-3"></div>
                  <div className="text-[23.33px] font-[500] leading-[33.33px]">
                    <p className="text-gray-600 ">Assignment</p>
                    <p className="">10</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-[20px] h-[20px] bg-yellow-400 rounded-full mt-3"></div>
                  <div className="text-[23.33px] font-[500] leading-[33.33px]">
                    <p className="text-gray-600 ">Activities</p>
                    <p className="">20</p>
                  </div>
                </div>
              </div>

              {/* Start Live Session Button */}
              <button className="w-full h-[84px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Start Live Session
              </button>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-700">
            Your can check out the ongoing progress
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Activities Card */}
          <div className="bg-white border-gray-200 border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Activites</span>
            </div>
          </div>

          {/* Chat Kid Card */}
          <div className="bg-white border-gray-200 border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Chat Kid</span>
            </div>
          </div>

          {/* Assignment Card */}
          <div className="bg-white border-gray-200 border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Assignment</span>
            </div>
          </div>

          {/* Chat Parent Card */}
          <div className="bg-white border-gray-200 border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Chat Parent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
