import React from "react";
import { Upload } from "lucide-react";

const AssignmentMode = () => {
  return (
    <div className="w-[747px] mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-[18px] text-[#4B465C] font-[600] text-center">
          Assignment
        </h2>
        <hr className="text-gray-400 my-4" />
        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-2">Write Exam</label>
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-[6px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="write here"
            />
          </div>

          <div>
            <label className="block font-medium mb-3">Practical Exam</label>
            <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-[6px] font-medium hover:bg-blue-50 transition-colors">
              Schedule Live Observed Session
            </button>
          </div>

          <div>
            <label className="block font-medium mb-3">
              Portfolio Submission
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-[6px] p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <span className="text-gray-600">Upload case reports</span>
            </div>
          </div>

          <p className="text-sm text-blue-600">
            Your submitted assignment is under review
          </p>

          <button className="w-full h-[60px] bg-blue-600 text-white py-3 rounded-[6px] font-medium hover:bg-blue-700 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentMode;
