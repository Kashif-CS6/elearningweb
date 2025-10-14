import React from "react";

const Payout = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[747.18px]  border border-gray-200 mx-auto bg-white rounded-[6px] p-8  px-5 shadow-lg">
        <h2 className="font-[600] text-[18px] leading-[24px] text-[#4B465C] text-center">
          Payout Setup
        </h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account holder name
            </label>
            <input
              type="text"
              name="accountHolder"
              placeholder="Write here"
              className="w-full px-4 py-2 border border-[#DBDADE] h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank name
            </label>
            <input
              type="text"
              name="bankName"
              placeholder="Write here"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account number / IBAN
            </label>
            <input
              type="text"
              name="accountNumber"
              placeholder="Write here"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort Code / SWIFT Code
            </label>
            <input
              type="text"
              name="sortCode"
              placeholder="Write here"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              name="currency"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>

          <div className="flex gap-4 pt-6">
            <button className="flex-1 px-4 h-[60px] text-[19px] py-3 bg-blue-600 hover:bg-blue-700 text-white font-[500] rounded-[6px] transition">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
