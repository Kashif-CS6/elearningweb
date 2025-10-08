"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState("parent");
  const router = useRouter();

  const handleLogin = () => {
    if (selectedRole === "learner") {
      router.push("/auth/learnernext");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl  flex items-center justify-between gap-20">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex items-center justify-center w-[671px] h-[671px]">
          <img
            src="/parentlogin.svg"
            alt=""
            className="w-full h-full"
            width={671}
            height={671}
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 w-[692px] p-2 border border-[#DBDBDB] rounded-[30px]">
          <div className="bg-white rounded-2xl  p-8 py-16">
            {/* Header */}
            <div className="text-center mb-6 flex flex-col gap-4">
              <h1 className="text-[24px] font-[600] mb-4">
                Welcome! Tell us who you are 👋
              </h1>

              {/* Role Selection */}
              <div className="flex gap-3 justify-center mb-6">
                <button
                  onClick={() => setSelectedRole("parent")}
                  className={`w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "parent"
                      ? "bg-blue-600 text-white shadow-md"
                      : " border border-blue-600"
                  }`}
                >
                  Parent
                </button>
                <button
                  onClick={() => setSelectedRole("coach")}
                  className={`w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "coach"
                      ? "bg-blue-600 text-white shadow-md"
                      : " border border-blue-600"
                  }`}
                >
                  Be A Coach
                </button>
                <button
                  onClick={() => setSelectedRole("learner")}
                  className={`w-[132px] h-[60px] rounded-[16px] font-[400] text-[16px] transition-all ${
                    selectedRole === "learner"
                      ? "bg-blue-600 text-white shadow-md"
                      : "border border-blue-600"
                  }`}
                >
                  Learner
                </button>
              </div>
            </div>

            {/* Social Sign In Buttons */}
            <div className="space-y-3 mb-6 flex flex-col gap-4">
              <button className="w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all group">
                <span className="flex-1 text-center text-gray-700 font-medium">
                  Continue with Google
                </span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
              </button>

              <button className="w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
                <span className="flex-1 text-center text-gray-700 font-medium">
                  Continue with Facebook
                </span>
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </button>

              <button className="w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
                <span className="flex-1 text-center text-gray-700 font-medium">
                  Continue with Apple
                </span>
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
              </button>

              <button className="w-[452px] h-[60px] cursor-pointer flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
                <span className="flex-1 text-center text-gray-700 font-medium">
                  Continue with X
                </span>
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">Already User?</span>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleLogin}
              className="w-[452px] h-[60px] cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mb-3"
            >
              Sign In
            </button>

            {/* Guest Button */}
            <button
              onClick={handleLogin}
              className="w-[452px] my-4 h-[60px] cursor-pointer border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
