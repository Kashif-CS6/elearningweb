import React from "react";

import { BookOpen, Lightbulb, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

const LearnerMain = () => {
  const router = useRouter();
  return (
    <main className=" py-6 ">
      <div className=" mx-auto">
        <div className="">
          {/* Left Column */}
          <div className="">
            {/* Progress Section */}
            <div className="flex items-center flex-wrap justify-between gap-6">
              <div className="flex items-end gap-2 shadow-md border border-gray-200 w-80 md:min-w-[382px] flex-1 h-[86px] rounded-[12px] px-4 py-3">
                <div className="w-14  flex flex-col gap-2">
                  <p className="text-xs md:text-sm text-gray-500 w-full">Level 1</p>
                  <div>
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-gray-900">60% </p>
                    <span className="text-sm font-normal text-gray-500">
                      Completed
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push("/learner/modcheck")}
                className="bg-blue-600 md:min-w-[397px] flex-1 h-[86px] md:text-[24px] text-white px-8 py-3 rounded-xl md:rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
              >
                AI Live Session
              </button>
            </div>

            {/* Growth Section */}
            <div className="my-10">
              <h2 className="text-[16px] font-[600] text-gray-900 mb-4">
                Growth
              </h2>
              <div className="flex gap-4  items-center flex-wrap md:flex-nowrap">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-400 font-[400]">
                        2/10 Completed
                      </p>
                      <p className="text-[16px] font-[500] text-gray-900">
                        Assignment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-400 font-[400]">
                        2/10 Completed
                      </p>
                      <p className="text-[16px] font-[500] text-gray-900">
                        Activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Growth Journey */}
            <div>
              <h2 className="text-[16px] font-[600] text-gray-900 mb-4">
                Your Personal Growth Journey
              </h2>
              <div className="w-full flex justify-center md:items-start flex-wrap gap-4 flex-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg w-[300px] min-h-[262.13px] p-2 transition-shadow"
                  >
                    <div className="bg-gray-900 h-40 flex items-center justify-center relative rounded-xl">
                      <div className="text-gray-600 text-sm font-mono">
                        {"</>"}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        Learning And Friendship Wrok...
                      </h3>
                      <p className="text-xs text-gray-500 mb-3">
                        CBT | Diagnosis | Crisis Care......
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Globe className="w-3 h-3" />
                        <span>English</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Lic. Phil. & Dip. Psych., Licensed Psychologist In
                        Health Psychology, Cognitive Behavioral Therapy.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LearnerMain;
