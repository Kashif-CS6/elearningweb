"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import RewardScreen from "../learner/Greatjob";

const RequestDetails = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="w-full mx-auto py-6 relative">
      <div className="flex items-center gap-4 my-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span className="text-sm">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Request</h1>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 space-y-6">
        {/* Student Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <Image
              src="/child.jpg"
              className="w-[79px] h-[79px] object-cover rounded-[12px]"
              width={79}
              height={79}
              alt="child"
            />
            <div>
              <h2 className="font-semibold text-gray-900 text-base mb-1">
                Stephane Maarek
              </h2>
              <p className="text-xs text-gray-600 mb-2">
                CBT | Diagnosis | Crisis Care...
              </p>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <span>English</span>
                </div>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

        {/* Child History */}
        {["Child History", "Current Struggles", "Family Context"].map(
          (section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 text-base mb-2">
                {section}
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                CBT | Diagnosis | Crisis Care | Research | Empathy
              </p>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                lic. phil. & Dipl. Psych., licensed psychotherapist
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Depth psychology, cognitive behavioral therapy, family and
                couples therapy, psychodrama, and resource therapy. Specialist
                for gifted children with learning disabilities and trainer in
                Nonviolent Communication.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                Psychotherapy, supervision, individual, couple, group. Lecturer,
                speaker.
              </p>
            </div>
          )
        )}

        {/* Accept Button */}
        <button
          onClick={() => setModal(true)}
          className="w-full font-[500] text-[16px] bg-blue-600 text-white h-[60px] py-3.5 rounded-[16px] leading-[100%] hover:bg-blue-700 transition-colors shadow-sm"
        >
          Accept
        </button>
      </div>

      {showModal && (
        <RewardScreen
          setOpenReward={setModal}
          openReward={showModal}
          route="/teacher/dashboard"
        />
      )}
    </div>
  );
};

export default RequestDetails;
