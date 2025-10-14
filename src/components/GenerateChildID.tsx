import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import { useRouter } from "next/navigation";
export default function GenerateChildID() {
  const [childID, setChildID] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const generateID = () => {
    if (childID) {
      router.push("/");
      return;
    }
    const id = "CH-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    setChildID(id);
    localStorage.setItem("childid", id);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(childID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-10 bg-gray-50 flex items-center justify-center lg:p-4">
      <div className=" md:w-[747.47px] bg-white rounded-[6px] shadow-sm p-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <rect
                x="40"
                y="20"
                width="100"
                height="140"
                rx="8"
                fill="#F5F5F5"
              />
              <rect
                x="45"
                y="25"
                width="90"
                height="130"
                rx="4"
                fill="white"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
              <line
                x1="55"
                y1="45"
                x2="125"
                y2="45"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
              <line
                x1="55"
                y1="60"
                x2="125"
                y2="60"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
              <line
                x1="55"
                y1="75"
                x2="100"
                y2="75"
                stroke="#E0E0E0"
                strokeWidth="2"
              />

              <path
                d="M70 110 L75 120 L90 100"
                stroke="#0066CC"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="130" cy="110" r="35" fill="#0066CC" />
              <path
                d="M115 110 L125 120 L145 95"
                stroke="white"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute left-8 top-24">
              <svg width="40" height="60" viewBox="0 0 40 60">
                <circle cx="20" cy="15" r="8" fill="#4A5568" />
                <path
                  d="M20 25 Q10 30 8 45 L32 45 Q30 30 20 25"
                  fill="#60A5FA"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-700 font-medium">
            Your answers are securely saved.
          </p>
          <p className="text-gray-600">You can update anytime</p>
        </div>

        <div className="space-y-4">
          <button className="w-full h-[54px] px-4 bg-white border border-gray-300 rounded-[6px] text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="14" height="14" rx="2" />
                <line x1="7" y1="7" x2="13" y2="7" />
                <line x1="7" y1="10" x2="13" y2="10" />
                <line x1="7" y1="13" x2="10" y2="13" />
              </svg>
              <span>View summary</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <div>
            <p className="text-sm text-gray-600 mb-2">
              Secure link between account
            </p>
            <div className="relative">
              <input
                type="text"
                value={childID}
                readOnly
                placeholder="Generate child ID"
                className="w-full h-[54px] pl-10 pr-12 bg-white border border-gray-300 rounded-[6px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {childID && (
                <button
                  onClick={copyToClipboard}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              )}
            </div>
            {childID && (
              <p className="text-sm text-gray-600 text-center mt-3">
                When your child installs the app and uses this ID,
                <br />
                their account will connect with yours.
              </p>
            )}
          </div>

          <button
            onClick={generateID}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-[54px] px-6 rounded-[6px] cursor-pointer transition-colors"
          >
            Generate Child ID
          </button>
        </div>
      </div>
    </div>
  );
}
