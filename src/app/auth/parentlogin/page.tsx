"use client";

import { useState } from "react";
import { User, Users, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ParentLogin() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "+41",
  });

  const handleSubmit = () => {
    setLoading(true);

    // Basic field validation
    if (!formData.name) {
      toast.error(t("toast.name"));
      setLoading(false);
      return;
    }
    if (!formData.relationship) {
      toast.error(t("toast.relation"));
      setLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^\+41\d{9}$/; // +41 followed by exactly 9 digits
    if (!phoneRegex.test(formData.phone)) {
      toast.error(t("toast.phone"));
      setLoading(false);
      return;
    }

    setTimeout(() => {
      router.push("/parent/dashboard");
      setLoading(false);
      console.log("Form submitted:", formData);
    }, 1000);
  };

  // Handle phone input ensuring it always starts with +41
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Ensure +41 stays at the beginning
    if (!value.startsWith("+41")) {
      value = "+41" + value.replace(/\D/g, ""); // remove non-digits
    }

    // Limit to +41 + 9 digits
    if (value.length > 12) {
      value = value.slice(0, 12);
    }

    setFormData({ ...formData, phone: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center md:p-4">
      <div className="xl:w-[1152px] flex items-center justify-between gap-16 p-2">
        {/* Left Side - Illustration */}
        <div className="flex-1 hidden xl:flex items-center justify-center w-[671px] p-8 h-[671px]">
          <Image
            src="/parentlogin.svg"
            alt="Parent Login Illustration"
            className="w-full h-full"
            width={671}
            height={671}
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 xl:w-[692px] border border-[#DBDBDB] rounded-[30px]">
          <div className="bg-white rounded-2xl p-8 py-16 m-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {t("parentPage.basic")}
              </h1>
              <p className="text-sm text-gray-500">{t("parentPage.desc")}</p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder={t("parentPage.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full md:w-[452px] h-[60px] pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Relationship Dropdown */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  value={formData.relationship}
                  onChange={(e) =>
                    setFormData({ ...formData, relationship: e.target.value })
                  }
                  className="w-full md:w-[452px] h-[60px] pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-800 appearance-none cursor-pointer"
                >
                  <option value="">
                    {t("parentPage.relationPlaceholder")}
                  </option>
                  <option value="parent"> {t("parentPage.parent")}</option>
                  <option value="guardian">{t("parentPage.guardian")}</option>
                  <option value="teacher">{t("parentPage.teacher")}</option>
                  <option value="relative">{t("parentPage.relative")}</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="18"
                      x2="12"
                      y2="18"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="+41XXXXXXXXX"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full md:w-[452px] h-[60px] pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Save Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full md:w-[452px] cursor-pointer h-[60px] bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md mt-6"
              >
                {loading ? "..." : t("parentPage.save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
