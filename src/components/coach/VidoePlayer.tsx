import React from "react";
import { Star, Play, Video, Award } from "lucide-react";
const VidoePlayer = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 relative"
        style={{ aspectRatio: "16/9" }}
      >
        <div className="absolute inset-0 flex items-center justify-between p-12">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-2">How to Grow</h2>
            <h2 className="text-5xl font-bold text-yellow-400">A Great</h2>
            <h2 className="text-5xl font-bold text-yellow-400">Friendship</h2>
            <div className="flex items-center gap-2 mt-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">THE CRAPPY CHILDHOOD FAIRY</span>
            </div>
          </div>
          <div className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">Instructor</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-blue-400 transition-colors">
              <Play className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-blue-400 transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <span className="text-white text-sm">1x</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full w-2/5 bg-blue-500"></div>
            </div>
            <button className="text-white hover:text-blue-400 transition-colors">
              <span className="text-sm">HD</span>
            </button>
            <button className="text-white hover:text-blue-400 transition-colors">
              <Award className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 pb-4 border-b">
          <Video className="w-5 h-5 text-blue-600" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-medium">Emotions the hidden message</span>
              <span className="text-sm text-gray-500">2:40</span>
            </div>
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-2/5 bg-blue-500"></div>
            </div>
            <span className="text-xs text-gray-500">40%</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Video className="w-5 h-5 text-blue-600" />
          <div className="flex-1 flex items-center justify-between">
            <span className="font-medium">Emotions the hidden message</span>
            <span className="text-sm text-gray-500">2:40</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VidoePlayer