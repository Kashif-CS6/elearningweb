"use client";

import { useState } from "react";

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState("parent");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-12">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Outer Circle */}
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-40"></div>

            {/* Middle Circle */}
            <div className="absolute inset-8 border-2 border-blue-300 rounded-full opacity-30"></div>

            {/* Inner Circle - Main Content */}
            <div className="absolute inset-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="relative">
                {/* Brain Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M9.5 2c-1.5 0-2.5 1-2.5 2.5 0 .5.1.9.3 1.3C6.4 6.1 6 6.8 6 7.5c0 .8.4 1.5 1 2-.5.4-1 1-1 1.8 0 .9.5 1.6 1.2 2C7.1 13.5 7 13.7 7 14c0 1.1.9 2 2 2h.5c.5 1.2 1.7 2 3 2h1c1.3 0 2.5-.8 3-2h.5c1.1 0 2-.9 2-2 0-.3-.1-.5-.2-.8.7-.4 1.2-1.1 1.2-2 0-.8-.5-1.4-1-1.8.6-.5 1-1.2 1-2 0-.7-.4-1.4-1.1-1.7.2-.4.3-.8.3-1.3 0-1.5-1-2.5-2.5-2.5-.5 0-1 .2-1.4.4C14.8 2.2 14.2 2 13.5 2c-.5 0-1 .1-1.4.4C11.7 2.2 11.2 2 10.7 2c-.7 0-1.2.2-1.6.6-.4-.4-.9-.6-1.6-.6z" />
                  </svg>
                </div>

                {/* Graduation Cap */}
                <div className="absolute -top-2 -right-2">
                  <div className="w-28 h-28 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Cap base */}
                      <path
                        d="M20 45 L50 35 L80 45 L50 55 Z"
                        fill="#FDB755"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                      {/* Cap top */}
                      <rect
                        x="47"
                        y="25"
                        width="6"
                        height="12"
                        fill="#F59E0B"
                      />
                      <circle cx="50" cy="23" r="4" fill="#FDB755" />
                      {/* Tassel */}
                      <line
                        x1="50"
                        y1="23"
                        x2="56"
                        y2="18"
                        stroke="#F59E0B"
                        strokeWidth="1.5"
                      />
                      <circle cx="56" cy="18" r="3" fill="#FDB755" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            {/* Graduation Cap Icon - Top Right */}
            <div className="absolute top-16 right-0 w-14 h-14 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>

            {/* Book Icon - Left */}
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-12 h-12 bg-orange-400 rounded-full shadow-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-xl font-medium text-gray-800 mb-4">
                Welcome! Tell us who you are 👋
              </h1>

              {/* Role Selection */}
              <div className="flex gap-3 justify-center mb-6">
                <button
                  onClick={() => setSelectedRole("parent")}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedRole === "parent"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Parent
                </button>
                <button
                  onClick={() => setSelectedRole("coach")}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedRole === "coach"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Be A Coach
                </button>
                <button
                  onClick={() => setSelectedRole("learner")}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedRole === "learner"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Learner
                </button>
              </div>
            </div>

            {/* Social Sign In Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all group">
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

              <button className="w-full flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
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

              <button className="w-full flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
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

              <button className="w-full flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
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
            <div className="text-center mb-6">
              <span className="text-sm text-gray-500">Already User?</span>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mb-3">
              Sign In
            </button>

            {/* Guest Button */}
            <button className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
