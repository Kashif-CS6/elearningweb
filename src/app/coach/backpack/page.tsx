"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText } from "lucide-react";
import toast from "react-hot-toast";

export default function BackPack() {
  const router = useRouter();

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
    if (
      !formData.educationDate ||
      !formData.licenseDate ||
      !formData.experience ||
      !formData.motivation ||
      !formData.idFile ||
      !formData.degreeFile ||
      !formData.certificateFile ||
      !formData.referenceFile ||
      !formData.agreeSafeguard ||
      !formData.agreePolicy
    ) {
      toast.error("Please fill all fields and upload all required documents.");
      return;
    }

    setLoading(true);

    toast.success("Please wait while we process your form.");

    setTimeout(() => {
      setLoading(false);

      toast.success("Your form has been submitted successfully!");

      router.push("/coach/digitalcontract");
    }, 2000);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="w-[747px] mx-auto bg-white border border-gray-300 rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-[#4B465C] mb-8">
          Backpack Questionnaire
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Education */}
          <section>
            <h3 className="text-[20px] font-[400] text-[#282727] mb-4">
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Highest qualification date
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
                  Upload degree
                </label>
                <label className="w-full cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                  <Upload size={18} />
                  {formData.degreeFile
                    ? formData.degreeFile.name
                    : "Upload Degree"}
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
              Professional License
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  License date
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
                  Upload license
                </label>
                <label className="w-full cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                  <Upload size={18} />
                  {formData.licenseFile
                    ? formData.licenseFile.name
                    : "Upload License"}
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
              Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Short CV
                </label>
                <input
                  type="text"
                  placeholder="Write short CV"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-4 h-[60px] py-2 border border-gray-200 rounded-[6px] focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Motivation
                </label>
                <select
                  value={formData.motivation}
                  onChange={(e) =>
                    setFormData({ ...formData, motivation: e.target.value })
                  }
                  className="w-full h-[60px] px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select motivation</option>
                  <option value="growth">Personal Growth</option>
                  <option value="career">Career Advancement</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </div>
          </section>

          {/* Documents Upload */}
          <section>
            <h3 className="text-[20px] font-[400] text-[#282727] mb-4">
              Documents Upload
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <label className="cursor-pointer bg-blue-100 h-[60px] border-2 border-dotted border-blue-200 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                <FileText size={18} />
                {formData.idFile ? formData.idFile.name : "Upload ID"}
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
                  : "Upload Certificate"}
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
                : "Upload Reference"}
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
                I agree to safeguarding policies
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
                I agree to the data policy
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
              {loading ? "Processing..." : "Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
