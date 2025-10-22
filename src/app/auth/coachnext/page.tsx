"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChildNext() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: "",
    relationship: "",
    image: null as File | null,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // You can handle form submission here
    console.log("Form Data:", formData);
    router.push("/coach/backpack");
    setTimeout(
      () => setLoading(false),

      1500
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center md:p-4">
      <div className="xl:w-[1152px] flex items-center justify-between gap-16 p-2">
        {/* Left Side - Illustration */}
        <div className="flex-1 hidden xl:flex items-center justify-center w-[671px] p-8 h-[671px]">
          <Image
            src="/parentlogin.svg"
            alt=""
            className="w-full h-full"
            width={671}
            height={671}
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 xl:w-[692px] h-[829px] border border-[#DBDBDB] rounded-[30px] bg-white flex justify-center items-center">
          <div className="bg-white h-fit rounded-2xl p-8 py-16 m-1">
            {/* ✅ Image Upload + Preview */}
            <div className="flex flex-col items-center justify-center mb-8">
              {preview ? (
                <div className="relative">
                  <Image
                    src={preview}
                    alt="Uploaded Preview"
                    width={149}
                    height={149}
                    className="w-[149px] h-[149px] object-cover rounded-full border border-gray-300"
                  />
                  <label
                    htmlFor="image-upload"
                    className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full cursor-pointer"
                  >
                    Change
                  </label>
                </div>
              ) : (
                <label
                  htmlFor="image-upload"
                  className="w-[149px] h-[149px] flex flex-col justify-center items-center border-2 border-dashed border-blue-400 rounded-full text-gray-500 cursor-pointer hover:border-blue-600 transition"
                >
                  <svg
                    className="w-8 h-8 text-blue-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Upload Image
                </label>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="font-[500] text-[28.4px] leading-[100%] tracking-[1.65px] pb-8">
                Account Setup
              </h1>
              <h1 className="text-start font-[400] text-[24px] leading-[100%] tracking-[1.65px]">
                Personal Info
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* ID Input */}
                <div className="relative space-y-2">
                  <label
                    htmlFor="#"
                    className="font-[400] text-[16px] leading-[100%] tracking-[1px] mb-3"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="XYZ"
                    value={formData.id}
                    onChange={(e) =>
                      setFormData({ ...formData, id: e.target.value })
                    }
                    className="w-full lg:w-[452px] h-[60px] px-4 pr-4 py-3 border-2 border-gray-200 rounded-[16px] focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Date of birth */}
                <div className="relative">
                  <label
                    htmlFor="#"
                    className="font-[400] text-[16px] leading-[100%] tracking-[1px] mb-3"
                  >
                    Date of birth
                  </label>

                  <input
                    type="date"
                    placeholder="Acceptance and Commitment Therapy (ACT)"
                    value={formData.id}
                    onChange={(e) =>
                      setFormData({ ...formData, id: e.target.value })
                    }
                    className="w-full lg:w-[452px] h-[60px] px-4 pr-4 py-3 border-2 border-gray-200 rounded-[16px] focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="#"
                    className="font-[400] text-[16px] leading-[100%] tracking-[1px] mb-3"
                  >
                    Contact
                  </label>

                  <input
                    type="text"
                    placeholder="Acceptance and Commitment Therapy (ACT)"
                    value={formData.id}
                    onChange={(e) =>
                      setFormData({ ...formData, id: e.target.value })
                    }
                    className="w-full lg:w-[452px] h-[60px] px-4 pr-4 py-3 border-2 border-gray-200 rounded-[16px] focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-[452px] cursor-pointer h-[60px] bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mt-6"
                >
                  {loading ? "..." : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
    </div>
  );
}
