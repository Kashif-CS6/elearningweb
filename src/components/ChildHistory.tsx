"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
export default function ChildHistory() {
  const [selectedDiagnoses, setSelectedDiagnoses] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState("");

  const diagnoses = [
    "ADHD",
    "Autism Spectrum Disorder",
    "Learning Disability",
    "None",
    "Other",
  ];
  const services = [
    "Speech therapy",
    "Occupational therapy",
    "Counseling/psychology",
    "None",
    "Other",
  ];

  const toggleSelection = (item: any, list: any[], setList: any) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm p-8">
        {/* Progress Bar */}
        <div className="flex items-center mb-12">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div className="w-64 h-0.5 bg-gray-300"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-64 h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Child History
          </h2>
          <p className="text-gray-500 text-sm">
            Purpose: Quick background about Max
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">
              1 Has Max received any previous diagnoses?
            </h3>
            <div className="flex flex-wrap gap-3">
              {diagnoses.map((diagnosis: any) => (
                <button
                  key={diagnosis}
                  onClick={() =>
                    toggleSelection(
                      diagnosis,
                      selectedDiagnoses,
                      setSelectedDiagnoses
                    )
                  }
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedDiagnoses.includes(diagnosis)
                      ? "bg-blue-50 border-blue-600 text-blue-600"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {diagnosis}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">
              2 Has Max ever received support services?
            </h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() =>
                    toggleSelection(
                      service,
                      selectedServices,
                      setSelectedServices
                    )
                  }
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedServices.includes(service)
                      ? "bg-blue-50 border-blue-600 text-blue-600"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">
              3 Briefly describe any important medical/educational history
            </h3>
            <textarea
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              className="w-full h-40 px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Submit Reports Button */}
          <button className="w-full py-4 px-6 bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl text-blue-600 font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Submit Reports
          </button>

          {/* Next Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
