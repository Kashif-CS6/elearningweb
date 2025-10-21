import React from "react";
import { Bell, Users, Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TeacherRequest = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/teacher/dashboard/recent");
  };
  return (
    <div className="w-full mx-auto  mt-4  space-y-6">
      <div
        onClick={handleRoute}
        className="bg-white cursor-pointer rounded-lg shadow-sm border border-gray-200 p-6 flex items-start gap-4"
      >
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer">
          <Bell className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Upto 15 students request</p>
          <p className="font-bold">New Request</p>
        </div>
      </div>
      <div className="flex items-center flex-1 gap-4 w-full flex-wrap">
        <div
          onClick={handleRoute}
          className="bg-white cursor-pointer flex-1 rounded-lg shadow-sm border border-gray-200 p-6 flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              30 students in your class
            </p>
            <p className="font-bold">Students</p>
          </div>
        </div>

        <div
          onClick={handleRoute}
          className="bg-white cursor-pointer flex-1 rounded-lg shadow-sm border border-gray-200 p-6 flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              5 meeting have upcoming
            </p>
            <p className="font-bold">Schedule</p>
          </div>
        </div>
      </div>

      <div className="  ">
        <h3 className="font-bold text-lg mb-4">Recent students meeting</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-[90px] items-center gap-4 p-1 pr-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <Image
                src={"/child.jpg"}
                width={500}
                height={500}
                className="w-20 h-20 bg-gray-300  rounded-lg  object-cover"
                alt=""
              />
              <div className="flex-1">
                <h4 className="font-semibold text-blue-600 mb-1">
                  Stephane Maarek
                </h4>
                <p className="text-xs text-gray-600">
                  CBT | Diagnosis | Crisis Care | Research | Empathy
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">15 Classes Done</span>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <span className="text-2xl">⋮</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherRequest;
