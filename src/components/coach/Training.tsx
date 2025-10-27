"use client";

import Image from "next/image";
import { Clock, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Training() {
  const router = useRouter();
  const { t } = useTranslation();

  const moveNext = (id: number) => {
    router.push(`/coach/dashboard/play/${id}`);
  };

  return (
    <div className="p-6 flex-1 bg-white rounded-2xl shadow-sm border border-gray-200">
      {/* Page Title */}
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        {t("training.pageTitle")}
      </h2>

      {/* Main Module Section */}
      <section className="bg-white py-4 lg:p-4 flex flex-wrap lg:flex-nowrap gap-6 items-end justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-800 font-semibold mb-4">
            {t("training.modules")}
          </h3>

          <div className="flex flex-col gap-3">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {t("training.mainModuleTitle")}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                {t("training.mainModuleSubTitle")}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {t("training.mainModuleDescription")}
              </p>

              <div className="flex items-center flex-wrap md:flex-nowrap gap-4 text-gray-500 text-sm mb-5">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{t("training.views")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{t("training.duration")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{t("training.lastUpdated")}</span>
                </div>
              </div>

              <button
                onClick={() => moveNext(1)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                {t("training.startNow")}
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-[991px] h-[276px] rounded-lg overflow-hidden">
          <Image
            src="/child.jpg"
            alt="Friendship Work"
            fill
            className="w-full lg:w-[991px] h-[276px] object-cover"
          />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="lg:p-4">
        <h3 className="text-lg font-medium text-gray-800 my-6 mb-4">
          {t("training.popularTitle")}
        </h3>

        <div className="flex items-center justify-center lg:justify-between gap-6 flex-wrap">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 w-[348.48px] rounded-xl p-[6px] shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full h-40">
                <Image
                  src={`/child.jpg`}
                  alt="Course Image"
                  fill
                  className="object-cover rounded-[6px]"
                />
              </div>

              <div className="py-4 px-4">
                <h4 className="text-base font-semibold text-gray-800 mb-1">
                  {t("training.courseTitle")}
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  {t("training.courseSubtitle")}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {t("training.courseDescription")}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="text-blue-600 font-semibold mr-1">
                    ★ 4.7
                  </span>
                  | {t("training.courseViews")}
                </div>

                <button
                  onClick={() => moveNext(i)}
                  className="bg-blue-600 text-white w-full py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  {t("training.startNowLocked")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
