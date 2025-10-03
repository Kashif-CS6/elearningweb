import { useState } from "react";
import { Check } from "lucide-react";
// Component 3: Current Struggles
export default function CurrentStruggles() {
  const [selectedStruggles, setSelectedStruggles] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<string>("");

  const struggles = [
    "Concentration/attention",
    "Reading/writing",
    "Math",
    "Emotional regulation (anger, anxiety, sadness)",
    "Social interactions (making/keeping friends)",
    "Other",
  ];

  const frequencies = ["Rarely", "Sometimes", "Often", "Almost always"];

  const toggleStruggle = (struggle: string) => {
    if (selectedStruggles.includes(struggle)) {
      setSelectedStruggles(selectedStruggles.filter((s) => s !== struggle));
    } else {
      setSelectedStruggles([...selectedStruggles, struggle]);
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
            <div className="w-64 h-0.5 bg-blue-600"></div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          </div>
          <div className="w-64 h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Current Struggles
          </h2>
          <p className="text-gray-500 text-sm">
            Purpose: Quick background about Max
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">
              1 Which areas is Max currently struggling with?
            </h3>
            <div className="flex flex-wrap gap-3">
              {struggles.map((struggle) => (
                <button
                  key={struggle}
                  onClick={() => toggleStruggle(struggle)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedStruggles.includes(struggle)
                      ? "bg-blue-50 border-blue-600 text-blue-600"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {struggle}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">
              2 How often do these struggles affect Max's daily life?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {frequencies.map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`px-4 py-3 rounded-lg border transition-colors ${
                    frequency === freq
                      ? "bg-blue-50 border-blue-600 text-blue-600"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
