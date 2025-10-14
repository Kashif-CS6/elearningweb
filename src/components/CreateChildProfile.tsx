"use client";

import { useState, FC } from "react";
import { ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

interface ChildHistoryProps {
  setOption: (option: string) => void;
}
const CreateChildProfile: FC<ChildHistoryProps> = ({ setOption }) => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
  });

  const [showGradeDropdown, setShowGradeDropdown] = useState(false);
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);

  const handleSubmit = () => {
    if (!formData.name) {
      toast.error("Name is required!");
      return;
    }
    if (!formData.dateOfBirth) {
      toast.error("Date of birth is required!");
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

          {/* Date of Birth */}
          <div>
            <label className="block text-[13px] font-[400] text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
              placeholder="DD/MM/YY"
              className="w-full px-4 h-[54px] border-[1px] rounded-[6px]  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* School Dropdown */}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-[500] text-[16px] cursor-pointer h-[54px] px-4 rounded-[6px] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
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
