"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Star, Video, Award } from "lucide-react";

const VideoPlayer = () => {
  const router = useRouter();
  const [played, setPlayed] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 🧠 Progress: simulate full playback in 10 seconds
 useEffect(() => {
   let interval: ReturnType<typeof setInterval>;
   if (playing) {
     interval = setInterval(() => {
       setPlayed((p) => {
         const newProgress = p + 0.1;
         if (newProgress >= 1) {
           clearInterval(interval);
           router.push("/coach/dashboard/quiz");
           return 1;
         }
         return newProgress;
       });
     }, 1000);
   }
   return () => clearInterval(interval);
 }, [playing, router]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 🎥 Video Section */}
        <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/zBjJUV-lzHo?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0`}
            title="How to Grow A Great Friendship"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
            {/* 🎬 Title */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-2">How to Grow</h2>
              <h2 className="text-4xl font-bold text-yellow-400">
                A Great Friendship
              </h2>
              <div className="flex items-center gap-2 mt-4">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm">THE CRAPPY CHILDHOOD FAIRY</span>
              </div>
            </div>

            {/* Custom Controls (Same Design) */}
            <div className="flex items-center gap-4 bg-black/60 p-3 rounded-lg pointer-events-auto">
              {/* ▶️ / ❚❚ */}
              <button
                onClick={() => setPlaying((p) => !p)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {playing ? "❚❚" : "▶"}
              </button>

              {/* Speed control (visual only) */}
              <button
                onClick={() => setPlaybackRate((r) => (r === 1 ? 1.5 : 1))}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {playbackRate}x
              </button>

              {/* Progress Bar */}
              <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${played * 100}%` }}
                ></div>
              </div>

              <button className="text-white hover:text-blue-400 transition-colors">
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 📋 Lesson List */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 pb-4 border-b">
            <Video className="w-5 h-5 text-blue-600" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  Emotions: The Hidden Message
                </span>
                <span className="text-sm text-gray-500">2:40</span>
              </div>
              <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${played * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500">
                {Math.round(played * 100)}%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Video className="w-5 h-5 text-blue-600" />
            <div className="flex-1 flex items-center justify-between">
              <span className="font-medium">Building Empathy</span>
              <span className="text-sm text-gray-500">3:10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
