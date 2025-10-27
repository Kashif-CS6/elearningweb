"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const Payout = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    sortCode: "",
    currency: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const { accountHolder, bankName, accountNumber, sortCode, currency } =
      formData;

    // if (!accountHolder || !bankName || !accountNumber || !sortCode || !currency) {
    //   toast.error(t("payout.toastError"));
    //   return;
    // }

    setLoading(true);
    toast.success(t("payout.toastSuccess"));

    setTimeout(() => {
      setLoading(false);
      router.push("/coach/dashboard");
    }, 2000);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[747.18px] border border-gray-200 bg-white rounded-[6px] p-8 shadow-lg">
        <h2 className="font-[600] text-[18px] leading-[24px] text-[#4B465C] text-center mb-6">
          {t("payout.title")}
        </h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("payout.accountHolder")}
            </label>
            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              placeholder={t("payout.placeholder")}
              className="w-full px-4 py-2 border border-[#DBDADE] h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("payout.bankName")}
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder={t("payout.placeholder")}
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("payout.accountNumber")}
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder={t("payout.placeholder")}
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("payout.sortCode")}
            </label>
            <input
              type="text"
              name="sortCode"
              value={formData.sortCode}
              onChange={handleChange}
              placeholder={t("payout.placeholder")}
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("payout.currency")}
            </label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 h-[60px] rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">{t("payout.selectCurrency")}</option>
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
                  <span>{t("payout.saving")}</span>
                </div>
              ) : (
                t("payout.save")
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
