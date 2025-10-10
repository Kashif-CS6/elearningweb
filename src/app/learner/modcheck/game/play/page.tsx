"use client";

import React, { useState, useRef } from "react";

import { useRouter } from "next/navigation";

const PlayVideo: React.FC = () => {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Update progress bar based on video playback
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  // Handle progress bar scrubbing
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime =
        (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(Number(e.target.value));
    }
  };

  // Navigate to livesession on video click
  const handleVideoClick = () => {
    router.push("/learner/modcheck/livesession");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[1113px] h-[593px] rounded-[6px] flex flex-col items-center justify-center gap-10 shadow-md border border-gray-100 mx-auto">
        <h2 className="text-center font-[600] text-[22px] leading-[24px] text-[#4B465C] mb-8">
          AI Live Session
        </h2>
        <video
          ref={videoRef}
          width={501}
          height={351}
          controls
          onTimeUpdate={handleTimeUpdate}
          onClick={handleVideoClick}
          className="cursor-pointer"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-[384px] h-[2px] appearance-none bg-gray-200 rounded-full outline-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1B84F8 ${progress}%, #e5e7eb ${progress}%)`,
            }}
          />
          <span className="text-[11px] font-[400] text-[#545454] leading-[100%] tracking-[1px]">
            {progress.toFixed()}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
