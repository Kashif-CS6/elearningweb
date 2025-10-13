"use client";

import { useState, FC } from "react";
import { ChevronRight } from "lucide-react";

interface ChildHistoryProps {
  setOption: (option: string) => void;
}
const CreateChildProfile: FC<ChildHistoryProps> = ({ setOption }) => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    grade: "",
    school: "",
  });

  const [showGradeDropdown, setShowGradeDropdown] = useState(false);
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);

  const grades = [
    "Nursery",
    "Kindergarten",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];

  const schools = [
    "Sunshine Elementary School",
    "Green Valley High School",
    "Riverside Academy",
    "Mountain View School",
    "Oak Tree International",
  ];

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.dateOfBirth ||
      !formData.grade ||
      !formData.school
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    setOption("start-question");
    // alert("Child profile created successfully!");
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      dateOfBirth: "",
      grade: "",
      school: "",
    });
  };

  return (
    <div className="py-10 bg-gray-50 flex items-center justify-center p-2 ">
      <div className="w-full lg:w-[747.18px] bg-white rounded-[6px] shadow-sm p-8">
        <h1 className="text-[18px] leading-[24px] font-[600] text-[#4B465C] mb-8">
          Create Child Profile
        </h1>

        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-[13px] font-[400] text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter name here"
              className="w-full px-4 h-[54px] border-[1px] rounded-[6px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Date of Birth and Grade Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date of Birth */}
            <div>
              <label className="block text-[13px] font-[400] text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="text"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                placeholder="DD/MM/YY"
                className="w-full px-4 h-[54px] border-[1px] rounded-[6px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Grade Dropdown */}
            <div className="relative">
              <label className="block text-[13px] font-[400] text-gray-700 mb-2">
                Grade
              </label>
              <button
                type="button"
                onClick={() => {
                  setShowGradeDropdown(!showGradeDropdown);
                  setShowSchoolDropdown(false);
                }}
                className="w-full px-4 h-[54px] border-[1px] rounded-[6px] border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between bg-white"
              >
                <span
                  className={formData.grade ? "text-gray-900" : "text-gray-400"}
                >
                  {formData.grade || "Select class"}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              {showGradeDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {grades.map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, grade });
                        setShowGradeDropdown(false);
                      }}
                      className="w-full px-4 h-[54px]  rounded-[6px] text-left hover:bg-gray-50 text-gray-900 transition-colors"
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* School Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select School
            </label>
            <button
              type="button"
              onClick={() => {
                setShowSchoolDropdown(!showSchoolDropdown);
                setShowGradeDropdown(false);
              }}
              className="w-full px-4 h-[54px] border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between bg-white"
            >
              <span
                className={formData.school ? "text-gray-900" : "text-gray-400"}
              >
                {formData.school || "Select School"}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            {showSchoolDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {schools.map((school) => (
                  <button
                    key={school}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, school });
                      setShowSchoolDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 transition-colors"
                  >
                    {school}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-[500] text-[16px] cursor-pointer h-[54px] px-4 rounded-[6px] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Post
          </button>

          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="w-full bg-indigo-50 hover:bg-indigo-100 text-gray-900 font-[500] cursor-pointer text-[16px] h-[54px] px-4 rounded-[6px] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChildProfile;
