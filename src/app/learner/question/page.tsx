"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuestionnaireScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    who: "",
    wish: "",
    problem: "",
    dreams: "",
    creativeStuff: null, // Added field for file upload
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, creativeStuff: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/learner/dashboard");
    console.log("Form submitted:", formData);
    // Add your submission logic here (e.g., API call)
  };

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      who: "",
      wish: "",
      problem: "",
      dreams: "",
      creativeStuff: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-[6.43px] shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-[19.3px] leading-[25.73px] font-[600] text-gray-800 mb-6">
          Backpack Questionnaire
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block leading-[100%] text-[13.94px] font-[400] text-gray-700 mb-2">
              Who are you ?
            </label>
            <input
              type="text"
              placeholder="e.g students, gamer etc."
              className="w-full px-4 h-[64.34px]  rounded-[6.43px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[1.07px] border-[#DBDADE] placeholder:text-[16.08px] placeholder:font-[400]"
              value={formData.who}
              onChange={(e) =>
                setFormData({ ...formData, who: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block leading-[100%] text-[13.94px] font-[400] text-gray-700 mb-2">
              What do you wish for? optional
            </label>
            <input
              type="text"
              placeholder="e.g make friends, do well in school"
              className="w-full px-4 h-[64.34px]  rounded-[6.43px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[1.07px] border-[#DBDADE] placeholder:text-[16.08px] placeholder:font-[400]"
              value={formData.wish}
              onChange={(e) =>
                setFormData({ ...formData, wish: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block leading-[100%] text-[13.94px] font-[400] text-gray-700 mb-2">
              What's your problem? optional
            </label>
            <input
              type="text"
              placeholder="e.g Schoolwork, friend, emotions"
              className="w-full px-4 h-[64.34px]  rounded-[6.43px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[1.07px] border-[#DBDADE] placeholder:text-[16.08px] placeholder:font-[400]"
              value={formData.problem}
              onChange={(e) =>
                setFormData({ ...formData, problem: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block leading-[100%] text-[13.94px] font-[400] text-gray-700 mb-2">
              What are your dreams? optional
            </label>
            <input
              type="text"
              placeholder="e.g astronaut, doctor, artist"
              className="w-full px-4 h-[64.34px]  rounded-[6.43px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[1.07px] border-[#DBDADE] placeholder:text-[16.08px] placeholder:font-[400]"
              value={formData.dreams}
              onChange={(e) =>
                setFormData({ ...formData, dreams: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block leading-[100%] text-[13.94px] font-[400] text-gray-700 mb-2">
              Upload Creative stuff optional
            </label>
            <label
              htmlFor="creative-upload"
              className="w-full border-2 h-[64.34px] flex items-center justify-center gap-3  border-dashed border-blue-300 rounded-lg text-center cursor-pointer transition-colors"
            >
              <div className="text-blue-600 mb-2">📷</div>
              <p className="text-blue-600 text-sm">
                {formData.creativeStuff
                  ? formData.creativeStuff.name
                  : "Upload your photo"}
              </p>
            </label>
            <input
              id="creative-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={handleSubmit}
            className="w-full px-4 h-[64.34px] bg-blue-500 cursor-pointer text-white  rounded-[6.43px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[1.07px] border-[#DBDADE] placeholder:text-[16.08px] placeholder:font-[400]"
          >
            Post
          </button>
          <button
            onClick={handleCancel}
            className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium h-[64.34px] cursor-pointer px-6 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
