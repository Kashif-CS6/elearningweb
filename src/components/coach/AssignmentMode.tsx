"use client";

import React, { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next"; // ✅ translation hook

const AssignmentMode = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("assignmentMode.toast"));
      router.push("/coach/dashboard/certificate");
    }, 2000);
  };

  return (
    <div className="py-20">
      <Toaster position="top-right" />
      <div className="lg:w-[747px] mx-auto lg:p-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8">
          <h2 className="text-[18px] text-[#4B465C] font-[600] text-center">
            {t("assignmentMode.title")}
          </h2>
          <hr className="text-gray-400 my-4" />

          <div className="space-y-6">
            {/* 📝 Write Exam */}
            <div>
              <label className="block font-medium mb-2">
                {t("assignmentMode.writeExam")}
              </label>
              <textarea
                className="w-full h-32 p-4 border border-gray-300 rounded-[6px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("assignmentMode.placeholder") || ""}
              />
            </div>

            {/* 🎥 Practical Exam */}
            <div>
              <label className="block font-medium mb-3">
                {t("assignmentMode.practicalExam")}
              </label>
              <button className="w-full border-1 border-blue-600 text-blue-600 py-4 rounded-[6px] font-medium hover:bg-blue-50 transition-colors">
                {t("assignmentMode.scheduleSession")}
              </button>
            </div>

            {/* 📂 Portfolio Submission */}
            <div>
              <label className="block font-medium mb-3">
                {t("assignmentMode.portfolioSubmission")}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-[6px] p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <span className="text-gray-600">
                  {t("assignmentMode.upload")}
                </span>
              </div>
            </div>

            {/* 💬 Status */}
            <p className="text-sm text-blue-600">
              {t("assignmentMode.status")}
            </p>

            {/* 💾 Save Button */}
            <button
              onClick={handleSave}
              disabled={loading}
              className="w-full h-[60px] bg-blue-600 text-white py-3 rounded-[6px] font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  {t("assignmentMode.saving")}
                </>
              ) : (
                t("assignmentMode.save")
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentMode;
