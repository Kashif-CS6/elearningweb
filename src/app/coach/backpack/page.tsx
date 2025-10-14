"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";

export default function BackPack() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Backpack Questionnaire
      </h2>

      <div className="space-y-8">
        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Highest qualification
              </label>
              <input
                type="text"
                name="education"
                // value={formData.education}
                // onChange={handleInputChange}
                placeholder="DD/MM/YY"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Upload documents
              </label>
              <button className="w-full px-4 py-2 border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
                <Upload size={18} />
                Upload degree
              </button>
            </div>
          </div>
        </div>

        {/* Professional License */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Professional License
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                License no (Optional)
              </label>
              <input
                type="text"
                name="license"
                // value={formData.license}
                // onChange={handleInputChange}
                placeholder="DD/MM/YY"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Upload documents
              </label>
              <button className="w-full px-4 py-2 border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
                <Upload size={18} />
                Upload degree
              </button>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Short CV
              </label>
              <input
                type="text"
                name="experience"
                // value={formData.experience}
                // onChange={handleInputChange}
                placeholder="DD/MM/YY"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Motivation
              </label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
                <option>Select class</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documents Upload */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Documents Upload
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <button className="px-4 py-2 border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <FileText size={18} />
              Upload ID
            </button>
            <button className="px-4 py-2 border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Upload size={18} />
              Upload Certificate
            </button>
          </div>
          <button className="w-full px-4 py-2 border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
            <Upload size={18} />
            Upload Reference
          </button>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 py-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              I agree to safeguarding policies
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              I agree to the data policy
            </span>
          </label>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
