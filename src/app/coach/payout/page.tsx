"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Payout = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    sortCode: "",
    currency: "",
  });

  const [loading, setLoading] = useState(false); // 🔹 loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const { accountHolder, bankName, accountNumber, sortCode, currency } =
      formData;

    // Optional validation
    // if (
    //   !accountHolder ||
    //   !bankName ||
    //   !accountNumber ||
    //   !sortCode ||
    //   !currency
    // ) {
    //   toast.error("Please fill in all required fields.");
    //   return;
    // }

    setLoading(true);
    toast.success("Payout setup done! Redirecting...");

    // Simulate API delay (2 seconds)
    setTimeout(() => {
      setLoading(false);
      router.push("/coach/dashboard");
    }, 2000);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[747.18px] border border-gray-200 bg-white rounded-[6px] p-8 shadow-lg">
        <h2 className="font-[600] text-[18px] leading-[24px] text-[#4B465C] text-center mb-6">
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
              value={formData.accountHolder}
              onChange={handleChange}
              placeholder="Write here"
              className="w-full px-4 py-2 border border-[#DBDADE] h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank name
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Write here"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account number / IBAN
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Write here"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort Code / SWIFT Code
            </label>
            <input
              type="text"
              name="sortCode"
              value={formData.sortCode}
              onChange={handleChange}
              placeholder="Write here"
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={handleSave}
              disabled={loading}
              className={`flex-1 h-[60px] text-[19px] py-3 rounded-[6px] font-[500] transition flex items-center justify-center ${
                loading
                  ? "bg-blue-400 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Saving...</span>
                </div>
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

export default Payout;
