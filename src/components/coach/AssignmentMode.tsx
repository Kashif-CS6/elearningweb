"use client";

import React, { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const AssignmentMode = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Assignment submitted successfully 🎉");
      router.push("/coach/dashboard/certificate");
    }, 2000);
  };

  return (
    <div className="py-20">
      <Toaster position="top-right" />
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
                placeholder="Write here..."
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

            <button
              onClick={handleSave}
              disabled={loading}
              className="w-full h-[60px] bg-blue-600 text-white py-3 rounded-[6px] font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentMode;
