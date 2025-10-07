import React from "react";
import Image from "next/image";
const PlayVideo = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[1113px] h-[593px] rounded-[6px] flex flex-col items-center justify-center gap-10 shadow-md border border-gray-100 mx-auto">
        <h2 className="text-center font-[600] text-[22px] leading-[24px] text-[#4B465C] mb-8">
          Ai Live Session
        </h2>
        <Image
          src="/child-play.png"
          width={501}
          height={351}
          alt="child play"
        />
        <Image src="/percentage.png" width={384} height={16} alt="percentage" />
      </div>
    </div>
  );
};

export default PlayVideo;
