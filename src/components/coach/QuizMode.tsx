"use client";
import React, { useState } from "react";
import { Users, Video, FileText } from "lucide-react";

const QuizMode = () => {
  const [quizAnswer, setQuizAnswer] = useState("");
  return (
    <div className="py-20">
      <div className="w-[747px] mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-4 px-10">
          <h2 className="text-[18px] font-[600] leading-[24px] text-[#4B465C] text-center pt-2 pb-6">
            Quiz
          </h2>

          {!quizAnswer ? (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[25.2px]  font-[500] leading-[20px]">
                  Ready To Practice?
                </h3>
                <p className="text-gray-600 font-[400]  text-[21.06px]  ">
                  Okay, Show us what you can do!
                </p>
              </div>
              <button
                onClick={() => setQuizAnswer("started")}
                className="bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors h-[60px] w-full mb-10"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-[68px] h-[68px] bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-[500] text-[24px] leading-[28px]">
                    Module 1
                  </h3>
                  <p className="font-[500] text-[24px] leading-[28px]">
                    Safeguarding
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-medium">
                  1. Emotions are called hidden messages because they:
                </p>

                <div className="space-x-14  flex items-center pl-24 flex-wrap">
                  {[
                    { id: "a", text: "Have no meaning" },
                    { id: "c", text: "Are random" },
                    { id: "b", text: "Have no meaning" },
                    { id: "d", text: "Should be ignored" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <span className="text-gray-700">
                        {option.id.toUpperCase()}
                        {")"} {option.text}
                      </span>
                      <input
                        type="radio"
                        name="answer"
                        className="w-5 h-5 text-blue-600"
                        checked={option.id === "a"}
                        readOnly
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-400 pt-4">
                <p className="text-[16px] leading-[100%] font-[400] text-gray-700 mb-3">
                  Related content
                </p>
                <div className="rounded-[6px] flex flex-col gap-4 ">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-[#D1D1D1] h-[60px] border-[1px]"
                    >
                      <Video className="w-5 h-5 text-blue-600" />
                      <span className="flex-1 text-sm">
                        Emotions the hidden message
                      </span>
                      <span className="text-sm text-gray-500">2:40</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Skip
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </div>
              <button className="w-full text-sm text-gray-600 hover:text-gray-800">
                Report a problem
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizMode;
