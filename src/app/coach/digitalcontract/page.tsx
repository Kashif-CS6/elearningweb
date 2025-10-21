"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DigitalContract = () => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleSave = () => {
    // if (!agreed) {
    //   toast.error("Please agree to safeguarding policies before proceeding.");
    //   return;
    // }

    toast.success("Contract saved successfully!");
    setTimeout(() => {
      router.push("/coach/payout");
    }, 2000);
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <div className="w-[747.18px] h-[925px] border border-gray-200 mx-auto bg-white rounded-[6px] p-8 px-5 shadow-lg">
        <h2 className="font-[600] text-[18px] leading-[24px] text-[#4B465C] text-center">
          Digital Contract
        </h2>

        <div className="space-y-6">
          <div className="w-[699px] h-[288px] font-[400] pt-3 text-justify overflow-y-auto">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
             
            </p>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer py-1">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              I agree to safeguarding policies
            </span>
          </label>

          {/* E-Signature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              E-Signature
            </label>
            <div className="border-2 w-[699.18px] h-[134px] border-dashed border-gray-300 rounded-[6px] flex items-center justify-center">
              <span className="text-gray-400 text-sm">Click to sign</span>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="h-[157px] rounded-lg">
            <h3 className="font-[400] text-[24px] leading-[100%] tracking-[1.65px] text-gray-900 mb-4">
              Code of Conduct
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  defaultChecked
                />
                <span className="text-[14px] font-[400] text-[#000000]">
                  I will follow safeguarding guidelines
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  defaultChecked
                />
                <span className="text-[14px] font-[400] text-[#000000]">
                  I understood data protection responsibilities
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                  defaultChecked
                />
                <span className="text-[14px] font-[400] text-[#000000]">
                  I commit to professional conduct
                </span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex-1 px-4 h-[60px] text-[19px] py-3 bg-blue-600 hover:bg-blue-700 text-white font-[500] rounded-[6px] transition"
            >
              Save
            </button>
          </div>

          <div className="text-xs text-gray-500 py-2">
            You will need to wait until the contract is approved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalContract;
