"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const PlayVideo: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Update progress bar based on video playback
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100 || 0;
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

  // Handle video end navigation
  const handleVideoEnd = () => {
    router.push("/learner/modcheck/game/play/question");
  };

  // Attach and detach event listener
  useEffect(() => {
    const video = videoRef.current;
    video?.addEventListener("ended", handleVideoEnd);
    return () => {
      video?.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:w-[1113px] py-10 md:py-0 md:h-[593px] rounded-[6px] flex flex-col items-center justify-center gap-5 md:gap-10 shadow-md border border-gray-100 mx-auto">
        <h2 className="text-center font-[600] text-sm md:text-[22px] leading-[24px] text-[#4B465C] md:mb-8">
          {t("playVideo.title")}
        </h2>

        <video
          ref={videoRef}
          width={501}
          height={351}
          controls
          onTimeUpdate={handleTimeUpdate}
          className="cursor-pointer px-4 md:px-0 w-[400px] md:w-[501px] h-[351px] rounded-lg"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          {t("playVideo.unsupportedBrowser")}
        </video>

        <div className="flex items-center gap-2 w-full max-w-[501px]">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-[4px] appearance-none bg-gray-200 rounded-full outline-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1B84F8 ${progress}%, #e5e7eb ${progress}%)`,
            }}
          />
          <span className="text-[11px] font-[400] text-[#545454] leading-[100%] tracking-[1px] w-10 text-right">
            {progress.toFixed()}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
