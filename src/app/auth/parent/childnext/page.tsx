"use client";

import React, { useState } from "react";
import { User, Users, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ChildNext() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    image: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Instead of redirecting immediately, open the modal
    setIsModalOpen(true);
    console.log("Form submitted:", formData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Redirect after closing modal if needed
    router.push("/parent/dashboard");
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close modal only if the click is on the overlay (not the modal content)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-16 p-2">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex items-center justify-center w-[671px] p-8 h-[671px]">
          <img
            src="/parentlogin.svg"
            alt=""
            className="w-full h-full"
            width={671}
            height={671}
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 max-w-[692px] border border-[#DBDBDB] rounded-[30px]">
          <div className="bg-white rounded-2xl p-8 py-16 m-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Account Setup
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
                  type="number"
                  placeholder="ID"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-[452px] h-[60px] pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
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
                  className="w-[452px] h-[60px] pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-400 appearance-none cursor-pointer"
                >
                  <option value="">Enter Your Name here</option>
                  <option value="parent">Parent</option>
                  <option value="guardian">Guardian</option>
                  <option value="teacher">Teacher</option>
                  <option value="relative">Relative</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Image Upload Button */}
              <div className="relative">
                <label
                  htmlFor="image-upload"
                  className="w-[452px] bg-[#0961F51A] h-[60px] flex items-center justify-center pr-4 py-3 border-2 border-dashed border-[#0961F5] rounded-lg text-black hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-5">
                    <div className="">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    {/* @ts-ignore */}
                    {formData.image ? formData.image.name : "Upload Image"}
                  </div>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              {/* Save Button */}
              <button
                onClick={handleSubmit}
                className="w-[452px] cursor-pointer h-[60px] bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mt-6"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white rounded-[23.25px] w-[649px] h-[379px] text-center relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent click from propagating to overlay
          >
            <div className="w-[460px] h-[252.1px] flex flex-col justify-center items-center gap-4">
              <Image
                src={"/icon-b.svg"}
                width={120.11}
                height={120.11}
                alt="Icon-b"
              />
              <h2 className="text-[34.87px] font-[500] leading-[46.5px] text-gray-800">
                Connected
              </h2>
              <p className="text-[31px] leading-[38.75px] font-[400] text-[#7D848D]">
                You're now linked with your parent!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
