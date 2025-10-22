"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState("parent");
  const router = useRouter();
  const { t } = useTranslation();

  const handleLogin = () => {
    if (selectedRole === "learner") {
      router.push("/auth/learnernext");
      return;
    }
    if (selectedRole === "parent") {
      router.push("/auth/parentlogin");
      return;
    }
    if (selectedRole === "teacher") {
      handleTeacher();
      return;
    }
    router.push("/auth/coachnext");
  };

  const handleTeacher = () => {
    router.push("/teacher/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 relative">
      <div className="xl:w-[1152px] flex items-center justify-between md:gap-20">
        {/* Left Side */}
        <div className="flex-1 hidden xl:flex items-center justify-center w-[671px] h-[671px]">
          <Image
            src="/parentlogin.svg"
            alt=""
            className="w-full h-full"
            width={671}
            height={671}
          />
        </div>

        {/* Right Side */}
        <div className="w-full xl:w-[692px] flex-1 p-2 border border-[#DBDBDB] rounded-[30px]">
          <div className="bg-white rounded-2xl p-8 py-16">
            <div className="text-center mb-6 flex flex-col gap-4">
              <h1 className="text-[24px] font-[600] mb-4">
                {t("signup.welcome")}
              </h1>

              {/* Role Selection */}
              <div className="flex gap-3 justify-center flex-wrap mb-6">
                <button
                  onClick={() => setSelectedRole("parent")}
                  className={`px-6 md:px-0 md:w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "parent"
                      ? "bg-blue-600 text-white shadow-md"
                      : " border border-blue-600"
                  }`}
                >
                  {t("signup.parent")}
                </button>
                <button
                  onClick={() => setSelectedRole("coach")}
                  className={`px-6 md:px-0 md:w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "coach"
                      ? "bg-blue-600 text-white shadow-md"
                      : " border border-blue-600"
                  }`}
                >
                  {t("signup.coach")}
                </button>
                <button
                  onClick={() => setSelectedRole("learner")}
                  className={`px-6 md:px-0 md:w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "learner"
                      ? "bg-blue-600 text-white shadow-md"
                      : "border border-blue-600"
                  }`}
                >
                  {t("signup.learner")}
                </button>
                <button
                  onClick={() => setSelectedRole("teacher")}
                  className={`px-6 md:px-0 md:w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "teacher"
                      ? "bg-blue-600 text-white shadow-md"
                      : "border border-blue-600"
                  }`}
                >
                  Teacher
                </button>
              </div>
            </div>

            {/* Social Sign In Buttons */}
            <div className="space-y-3 mb-6 flex flex-col md:items-center xl:items-center gap-4">
              <button
                onClick={handleLogin}
                className="w-full md:w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <span className="flex-1 text-center text-gray-700 font-medium">
                  {t("signup.continueGoogle")}
                </span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full md:w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <span className="flex-1 text-center text-gray-700 font-medium">
                  {t("signup.continueFacebook")}
                </span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full md:w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <span className="flex-1 text-center text-gray-700 font-medium">
                  {t("signup.continueApple")}
                </span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full md:w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <span className="flex-1 text-center text-gray-700 font-medium">
                  {t("signup.continueX")}
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">
                {t("signup.alreadyUser")}
              </span>
            </div>

            {/* Sign In Buttons */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleLogin}
                className="w-full md:w-[452px] h-[60px] cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mb-3"
              >
                {t("signup.signIn")}
              </button>
              <button
                onClick={handleLogin}
                className="w-full md:w-[452px] my-4 h-[60px] cursor-pointer border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                {t("signup.guest")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
