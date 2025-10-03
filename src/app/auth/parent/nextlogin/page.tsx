"use client";

import { useState } from "react";
import { User, Users, ChevronRight, BookOpen } from "lucide-react";

export default function ProfileInfoPage() {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "",
  });
  //@ts-ignore:kashif nabeel

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-16">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Outer Circle */}
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>

            {/* Middle Circle */}
            <div className="absolute inset-8 border-2 border-blue-300 rounded-full opacity-50"></div>

            {/* Inner Circle - Main Content */}
            <div className="absolute inset-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              {/* Parent and Child Icon */}
              <svg
                className="w-40 h-40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Parent figure */}
                {/* Head */}
                <circle
                  cx="75"
                  cy="50"
                  r="18"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                />
                {/* Body - dress/skirt shape */}
                <path
                  d="M 60 75 L 75 68 L 90 75 L 95 115 L 55 115 Z"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arm reaching to child */}
                <path
                  d="M 90 80 Q 105 85 110 95"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Child figure */}
                {/* Head */}
                <circle
                  cx="130"
                  cy="85"
                  r="14"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                />
                {/* Body */}
                <path
                  d="M 120 105 L 130 99 L 140 105 L 140 135 L 120 135 Z"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arms up */}
                <path
                  d="M 120 110 L 110 100"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 140 110 L 150 100"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Legs */}
                <path
                  d="M 125 135 L 120 155"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 135 135 L 140 155"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
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
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Enter basic profile info
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum is simply dummy text of the printing
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your name here"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Relationship Dropdown */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  value={formData.relationship}
                  onChange={(e) =>
                    setFormData({ ...formData, relationship: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-400 appearance-none cursor-pointer"
                >
                  <option value="">Relationship With Child</option>
                  <option value="parent">Parent</option>
                  <option value="guardian">Guardian</option>
                  <option value="teacher">Teacher</option>
                  <option value="relative">Relative</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="18"
                      x2="12"
                      y2="18"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="0000 0000000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-400 placeholder-gray-400"
                />
              </div>

              {/* Save Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mt-6"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
