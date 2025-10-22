"use client"
import React from "react";
import { Award, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const StudentList = () => {
  const router = useRouter();
  return (
    <div className="w-full mx-auto py-6">
      <div className="mb-6 flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 ">
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span
            className="text-sm"
            onClick={() => router.back()}
          >
            Back
          </span>
        </button>
        <h1 className="text-[24px] font-[500] text-gray-900">Students</h1>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">List of your students</p>
      </div>

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white rounded-[16px] h-[90px] md:h-[79px] px-5 flex items-center gap-4 hover:shadow-md transition-shadow border border-gray-200 cursor-pointer"
          >
            <span className="text-lg font-semibold text-gray-900 w-2">{i}</span>
            <Image
              src={"/child.jpg"}
              height={50}
              width={50}
              alt="child"
              className="w-[50px] h-[50px]  rounded-full overflow-hidden flex-shrink-0"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base mb-0.5">
                Stephane Maarek
              </h3>
              <p className="text-xs text-gray-600">
                CBT | Diagnosis | Crisis Care......
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-600">Level 1</span>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
