import { useState } from "react";
import { Check } from "lucide-react";

export default function CurrentStruggles({
  setOption,
}: {
  setOption: (option: string) => void;
}) {
  const [selectedStruggles, setSelectedStruggles] = useState<string[]>([]);
  const [selectedFrequencies, setSelectedFrequencies] = useState<string[]>([]);

  const struggles = [
    "Concentration/attention",
    "Reading/writing",
    "Math",
    "Emotional regulation (anger, anxiety, sadness)",
    "Social interactions (making/keeping friends)",
    "Other",
  ];

  const frequencies = ["Rarely", "Sometimes", "Often", "Almost always"];

  const toggleSelection = (
    value: string,
    selectedList: string[],
    setSelectedList: (list: string[]) => void
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((v) => v !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center lg:p-4">
      <div className="lg:w-[747.47px] bg-white rounded-[12px] shadow-sm p-8">
        {/* Progress Bar */}
        <div className="flex items-center mb-12">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div className="w-[100px] md:w-[300px]  h-0.5 bg-blue-600"></div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          </div>
          <div className="w-[100px] md:w-[300px]  h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-[16px] font-[500] text-[#282727] mb-2">
            Current Struggles
          </h2>
          <p className="text-[#7C7979] tracking-[1px] text-[10px] font-[400]">
            Purpose: Quick background about Max
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h3 className="text-gray-900 leading-[100%] tracking-[1px] text-[14px] font-[400] mb-4">
              1. Which areas is Max currently struggling with?
            </h3>
            <div className=" flex flex-wrap space-x-10 gap-2 md:w-[557px] items-center">
              {struggles.map((struggle) => (
                <label
                  key={struggle}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedStruggles.includes(struggle)}
                    onChange={() =>
                      toggleSelection(
                        struggle,
                        selectedStruggles,
                        setSelectedStruggles
                      )
                    }
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>{struggle}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-gray-900 leading-[100%] tracking-[1px] text-[14px] font-[400] mb-4">
              2. How often do these struggles affect Max{"'"}s daily life?
            </h3>
            <div className=" flex flex-wrap space-x-10 gap-2 md:w-[557px] items-center">
              {frequencies.map((freq) => (
                <label
                  key={freq}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFrequencies.includes(freq)}
                    onChange={() =>
                      toggleSelection(
                        freq,
                        selectedFrequencies,
                        setSelectedFrequencies
                      )
                    }
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>{freq}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => setOption("final")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-[54px] px-6 rounded-[6px] transition-colors mt-6"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
