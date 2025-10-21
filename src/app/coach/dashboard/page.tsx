"use client";
import React, { useState } from "react";
import Hero from "@/components/learner/dashboard/Hero";
import Sidebar from "@/components/Sidebar";
import VidoePlayer from "@/components/coach/VidoePlayer";
import QuizMode from "@/components/coach/QuizMode";
import AssignmentMode from "@/components/coach/AssignmentMode";
import Certificate from "@/components/coach/Certificate";

const Coach = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-2 md:p-8">
        {/* Hero Banner */}
        <Hero />
        <QuizMode />
      </main>
    </div>
  );
};

export default Coach;
