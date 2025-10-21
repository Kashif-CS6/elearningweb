"use client";

import Image from "next/image";
import { Clock, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Training() {
  const router = useRouter();

  const moveNext = (id: number) => {
    router.push(`/coach/dashboard/play/${id}`);
  };
  return (
    <div className="p-6 flex-1 bg-white rounded-2xl shadow-sm border border-gray-200">
      {/* Page Title */}
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        Training
      </h2>

      {/* Main Module Section */}
      <section className="bg-white p-6  flex items-end justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-800 font-semibold mb-4">Modules</h3>

          <div className="flex flex-col gap-3">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                Learning And Friendship Work
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                CBT | Diagnosis | Crisis Care
              </p>
              <p className="text-sm text-gray-500 mb-4">
                lic. phil. & Dipl. Psych, licensed psychotherapist Depth
                psychology, cognitive behavioral therapy,
              </p>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-5">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>745,123 Views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 hr</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Last Updated on 23 May, 2023</span>
                </div>
              </div>

              <button
                onClick={() => moveNext(1)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Start now
              </button>
            </div>

            {/* Image Section */}
          </div>
        </div>
        <div className="relative w-[991px] h-[276px] rounded-lg overflow-hidden">
          <Image
            src="/child.jpg"
            alt="Friendship Work"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Our <span className="text-blue-600 font-semibold">popular</span>{" "}
          course in <span className="text-blue-600 font-semibold">2025</span>
        </h3>

        <div className="flex items-center justify-between flex-wrap">
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
                  Learning and friendship work
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  CBT | Diagnosis | Crisis Care
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  lic. phil. & Dipl. Psych, licensed psychotherapist Depth
                  psychology, cognitive behavioral therapy,
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="text-blue-600 font-semibold mr-1">
                    ★ 4.7
                  </span>
                  | 66,255 Views
                </div>

                <button
                  onClick={() => moveNext(i)}
                  className="bg-blue-600 text-white w-full py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Start now 🔒
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
