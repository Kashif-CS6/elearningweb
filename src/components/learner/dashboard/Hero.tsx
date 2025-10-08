import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[181px] rounded-[20px] bg-gradient-to-r from-blue-600 to-blue-500  overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute top-8 right-32 w-16 h-16 opacity-20">
        <div className="absolute inset-0 bg-white transform rotate-45 rounded-lg"></div>
        <div className="absolute inset-2 bg-blue-600 transform rotate-45 rounded-lg"></div>
      </div>
      <div className="absolute top-20 right-64 w-12 h-12 opacity-15">
        <div className="absolute inset-0 bg-white transform rotate-45 rounded-lg"></div>
        <div className="absolute inset-2 bg-blue-600 transform rotate-45 rounded-lg"></div>
      </div>
      <div className="absolute bottom-12 right-48 w-10 h-10 opacity-10">
        <div className="absolute inset-0 bg-white transform rotate-45 rounded-lg"></div>
        <div className="absolute inset-2 bg-blue-600 transform rotate-45 rounded-lg"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-1 p-6">
        <p className="text-white text-[12px] font-[400]  uppercase tracking-wide">
          Online Course
        </p>
        <h1 className="text-white text-[24px] font-[600]   max-w-sm">
          Sharpen Your Skills With Professional Online Courses
        </h1>
        <button className="flex items-center justify-center w-[110px] h-[36px] rounded-[40px] gap-2 bg-gray-900 text-white  font-medium text-[12px] hover:bg-gray-800 transition-all">
          Join Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
