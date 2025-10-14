"use client";

import { useState } from "react";
import { User, Users, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ParentLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "",
  });

  const handleSubmit = () => {
    if (!formData.name) {
      toast.error("Name is required!");
      return;
    }
    if (!formData.relationship) {
      toast.error("Relationship is required!");
      return;
    }
    if (!formData.phone) {
      toast.error("Phone Number is required!");
      return;
    }
    router.push("/parent/dashboard");

    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50  flex items-center justify-center md:p-4">
      <div className="xl:w-[1152px] flex items-center justify-between gap-16 p-2 ">
        {/* Left Side - Illustration */}
        <div className="flex-1 hidden  xl:flex items-center justify-center w-[671px] p-8 h-[671px]">
          <Image
            src="/parentlogin.svg"
            alt=""
            className="w-full h-full"
            width={671}
            height={671}
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 xl:w-[692px] border border-[#DBDBDB] rounded-[30px]">
          <div className="bg-white rounded-2xl p-8 py-16 m-1">
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
                  required={true}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full md:w-[452px] h-[60px] pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
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
                  className="w-full md:w-[452px] h-[60px] pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-400 appearance-none cursor-pointer"
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
                  className="w-full md:w-[452px] h-[60px] pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-400 placeholder-gray-400"
                />
              </div>

              {/* Save Button */}
              <button
                onClick={handleSubmit}
                className="w-full md:w-[452px] cursor-pointer h-[60px] bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mt-6"
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
