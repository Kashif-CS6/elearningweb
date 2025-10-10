"use client";

import { FC, useState } from "react";
import { Check } from "lucide-react";

interface ChildHistoryProps {
  setOption: (option: string) => void;
}

const ChildHistory: FC<ChildHistoryProps> = ({ setOption }) => {
  const [selectedDiagnoses, setSelectedDiagnoses] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [medicalHistory, setMedicalHistory] = useState<string>("");

  const diagnoses: string[] = [
    "ADHD",
    "Autism Spectrum Disorder",
    "Learning Disability",
    "None",
    "Other",
  ];
  const services: string[] = [
    "Speech therapy",
    "Occupational therapy",
    "Counseling/psychology",
    "None",
    "Other",
  ];

  const handleCheckboxChange = (
    value: string,
    selectedList: string[],
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  const changeOption = () => {
    setOption("createChildHistory");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-[747.47px] bg-white rounded-[6px] shadow-sm p-8">
        {/* Progress Bar */}
        <div className="flex items-center mb-12">
          <div className="flex items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div className="w-[300px] h-0.5 bg-gray-300"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-[300px] h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-[16px] font-[500] text-[#282727] mb-2">
            Child History
          </h2>
          <p className="text-[#7C7979] tracking-[1px] text-[10px] font-[400]">
            Purpose: Quick background about Max
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h3 className="text-gray-900 leading-[100%] tracking-[1px] text-[14px] font-[400] mb-4">
              1 Has Max received any previous diagnoses?
            </h3>
            <div className="flex flex-wrap space-x-10 gap-2 w-[360px] items-center">
              {diagnoses.map((diagnosis) => (
                <label
                  key={diagnosis}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={diagnosis}
                    checked={selectedDiagnoses.includes(diagnosis)}
                    onChange={() =>
                      handleCheckboxChange(
                        diagnosis,
                        selectedDiagnoses,
                        setSelectedDiagnoses
                      )
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-[13px]">{diagnosis}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-gray-900 leading-[100%] tracking-[1px] text-[14px] font-[400] mb-4">
              2 Has Max ever received support services?
            </h3>
            <div className="flex flex-wrap space-x-10 gap-2 w-[360px] items-center">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={service}
                    checked={selectedServices.includes(service)}
                    onChange={() =>
                      handleCheckboxChange(
                        service,
                        selectedServices,
                        setSelectedServices
                      )
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-[13px]">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <h3 className="text-gray-900 leading-[100%] tracking-[1px] text-[14px] font-[400] mb-4">
              3 Briefly describe any important medical/educational history
            </h3>
            <textarea
              value={medicalHistory}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMedicalHistory(e.target.value)
              }
              className="w-full h-40 px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Submit Reports Button */}
          <button className="w-full h-[54px] px-6 bg-blue-50 border-2 border-dashed border-blue-300 rounded-[16px] text-blue-600 font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
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
          <button
            onClick={changeOption}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-[54px] px-6 rounded-[6px] cursor-pointer transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildHistory;
