"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";

// Component 1: Start Questionnaire
//@ts-ignore
export default function StartQuestionnaire({ setOption }) {
  return (
    <div className="my-10 bg-gray-50 flex items-center justify-center p-4">
      <div className="w-[747.18px] bg-white rounded-[6px] shadow-sm p-12 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <path
                d="M60 40 Q50 20 65 25 Q80 30 75 45"
                fill="none"
                stroke="#FDB022"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <circle cx="75" cy="75" r="8" fill="#FDB022" />

              <path
                d="M90 25 Q85 10 100 15 Q115 20 110 35"
                fill="none"
                stroke="#0066CC"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <circle cx="105" cy="65" r="10" fill="#0066CC" />

              <path
                d="M120 40 Q115 25 130 30 Q145 35 140 50"
                fill="none"
                stroke="#4CAF89"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <circle cx="135" cy="75" r="8" fill="#4CAF89" />
            </svg>
            <div className="absolute -left-8 top-12">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-400 rounded"></div>
              </div>
            </div>
            <div className="absolute -right-8 top-12">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transform rotate-12">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="#0066CC"
                    strokeWidth="2"
                  />
                  <path d="M7 10h6M10 7v6" stroke="#0066CC" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[24px] font-[500] text-[#282727] leading-[100%] tracking-[1.65px] mb-2">
          Start Questionnaire
        </h1>
        <p className="text-[16px] font-[400] text-gray-600 mb-1">
          his helps us understand Max's needs. It only takes about 5 minutes.
        </p>
        <p className="text-[16px] font-[400] text-gray-600  mb-8">
          You can pause and return anytime.
        </p>

        <button
          onClick={() => setOption("begin")}
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium text-[19px] h-[54px] px-6 rounded-[6px] transition-colors"
        >
          Begin
        </button>
      </div>
    </div>
  );
}
