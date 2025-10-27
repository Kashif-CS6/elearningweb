"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function BackPack() {
  const router = useRouter();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    educationDate: "",
    licenseDate: "",
    experience: "",
    motivation: "",
    idFile: null as File | null,
    degreeFile: null as File | null,
    licenseFile: null as File | null,
    certificateFile: null as File | null,
    referenceFile: null as File | null,
    agreeSafeguard: false,
    agreePolicy: false,
  });

  const [loading, setLoading] = useState(false);

  const handleFileChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    toast.success(t("backpackQuestion.toast.processing"));

    setTimeout(() => {
      setLoading(false);
      toast.success(t("backpackQuestion.toast.success"));
      router.push("/coach/digitalcontract");
    }, 2000);
  };

  return (
    <div className="my-10 flex justify-center items-center bg-gray-50">
      <div className="w-[747px] mx-auto bg-white border border-gray-300 rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-[#4B465C] mb-8">
          {t("backpackQuestion.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Education */}
          <section>
            <h3 className="text-[20px] font-[400] text-[#282727] mb-4">
              {t("backpackQuestion.education.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  {t("backpackQuestion.education.qualificationDate")}
                </label>
                <input
                  type="date"
                  value={formData.educationDate}
                  onChange={(e) =>
                    setFormData({ ...formData, educationDate: e.target.value })
                  }
                  className="w-full px-4 h-[60px] py-2 border border-gray-200 rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  {t("backpackQuestion.education.uploadDegree")}
                </label>
                <label className="w-full cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                  <Upload size={18} />
                  {formData.degreeFile
                    ? formData.degreeFile.name
                    : t("backpackQuestion.education.uploadDegree")}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="hidden"
                    onChange={(e) => handleFileChange("degreeFile", e)}
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Professional License */}
          <section>
            <h3 className="text-[20px] font-[400] text-[#282727] mb-4">
              {t("backpackQuestion.license.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  {t("backpackQuestion.license.licenseDate")}
                </label>
                <input
                  type="date"
                  value={formData.licenseDate}
                  onChange={(e) =>
                    setFormData({ ...formData, licenseDate: e.target.value })
                  }
                  className="w-full px-4 h-[60px] py-2 border border-gray-200 rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  {t("backpackQuestion.license.uploadLicense")}
                </label>
                <label className="w-full cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                  <Upload size={18} />
                  {formData.licenseFile
                    ? formData.licenseFile.name
                    : t("backpackQuestion.license.uploadLicense")}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="hidden"
                    onChange={(e) => handleFileChange("licenseFile", e)}
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-[20px] font-[400] text-[#282727] mb-4">
              {t("backpackQuestion.experience.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  {t("backpackQuestion.experience.shortCV")}
                </label>
                <input
                  type="text"
                  placeholder={t("backpackQuestion.experience.placeholderCV")}
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-4 h-[60px] py-2 border border-gray-200 rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  {t("backpackQuestion.experience.motivation")}
                </label>
                <select
                  value={formData.motivation}
                  onChange={(e) =>
                    setFormData({ ...formData, motivation: e.target.value })
                  }
                  className="w-full h-[60px] px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">
                    {t("backpackQuestion.experience.selectMotivation")}
                  </option>
                  <option value="growth">
                    {t("backpackQuestion.experience.growth")}
                  </option>
                  <option value="career">
                    {t("backpackQuestion.experience.career")}
                  </option>
                  <option value="education">
                    {t("backpackQuestion.experience.education")}
                  </option>
                </select>
              </div>
            </div>
          </section>

          {/* Documents Upload */}
          <section>
            <h3 className="text-[20px] font-[400] text-[#282727] mb-4">
              {t("backpackQuestion.documents.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <label className="cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                <FileText size={18} />
                {formData.idFile
                  ? formData.idFile.name
                  : t("backpackQuestion.documents.uploadID")}
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange("idFile", e)}
                />
              </label>

              <label className="cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                <Upload size={18} />
                {formData.certificateFile
                  ? formData.certificateFile.name
                  : t("backpackQuestion.documents.uploadCertificate")}
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange("certificateFile", e)}
                />
              </label>
            </div>

            <label className="cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
              <Upload size={18} />
              {formData.referenceFile
                ? formData.referenceFile.name
                : t("backpackQuestion.documents.uploadReference")}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange("referenceFile", e)}
              />
            </label>
          </section>

          {/* Checkboxes */}
          <div className="space-y-3 py-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeSafeguard}
                onChange={(e) =>
                  setFormData({ ...formData, agreeSafeguard: e.target.checked })
                }
                className="w-5 h-5 rounded border-gray-300"
              />
              <span className="text-[14px] text-[#000000]">
                {t("backpackQuestion.agreements.safeguard")}
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreePolicy}
                onChange={(e) =>
                  setFormData({ ...formData, agreePolicy: e.target.checked })
                }
                className="w-5 h-5 rounded border-gray-300"
              />
              <span className="text-[14px] text-[#000000]">
                {t("backpackQuestion.agreements.policy")}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 h-[60px] bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:bg-gray-400"
            >
              {loading
                ? t("backpackQuestion.button.processing")
                : t("backpackQuestion.button.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
