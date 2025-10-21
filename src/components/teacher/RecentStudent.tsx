"use client";
import React from "react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RecentStudent = () => {
  const router = useRouter();

  const handleRouter = (id: number) => {
    router.push(`/teacher/dashboard/recent/${id}`);
  };
  return (
    <div className="w-full mx-auto py-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Recent students meeting
      </h2>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl h-[89px] p-1 flex items-center gap-4 hover:shadow-md transition-shadow border border-gray-200"
          >
            <Image
              src={"/child.jpg"}
              width={500}
              height={500}
              className="rounded-xl w-[79px] h-[79px] object-cover"
              alt="profile"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-blue-600 text-base mb-1">
                Stephane Maarek
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                CBT | Diagnosis | Crisis Care | Research | Empathy
              </p>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">15 Classes Done</span>
              </div>
            </div>
            <button
              onClick={() => handleRouter(i)}
              className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer text-sm pr-10"
            >
              view report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStudent;
