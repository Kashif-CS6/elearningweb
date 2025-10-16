"use client";

import Image from "next/image";

export default function AccountSetupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="grid md:grid-cols-2 items-center w-full max-w-6xl gap-8 p-6">
        {/* Left side illustration */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="rounded-full border-4 border-blue-100 p-10">
            <div className="bg-blue-50 rounded-full p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(37 99 235)"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.25c1.242 0 2.25-1.008 2.25-2.25S13.242 6.75 12 6.75 9.75 7.758 9.75 9s1.008 2.25 2.25 2.25zM4.5 19.5a7.5 7.5 0 1115 0m-15 0h15"
                />
              </svg>
            </div>
          </div>
          <div className="absolute top-10 right-24 bg-blue-600 text-white p-3 rounded-xl shadow-md">
            🎓
          </div>
          <div className="absolute bottom-16 left-24 bg-orange-500 text-white p-3 rounded-xl shadow-md">
            📘
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full max-w-md mx-auto shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Image
                src="/user-avatar.png" // replace with your image
                alt="User Avatar"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="text-lg font-semibold text-gray-800">
              Account Setup
            </div>
          </div>
          <div>
            <form className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" placeholder="Usman khan" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Contact
                </label>
                <input type="text" placeholder="Enter your contact" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
