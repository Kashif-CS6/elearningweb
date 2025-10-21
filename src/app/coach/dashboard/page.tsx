"use client";
import React, { useState } from "react";
import Hero from "@/components/learner/dashboard/Hero";
import Sidebar from "@/components/Sidebar";
import VidoePlayer from "@/components/coach/VidoePlayer";
import QuizMode from "@/components/coach/QuizMode";
import AssignmentMode from "@/components/coach/AssignmentMode";
import Certificate from "@/components/coach/Certificate";
import Training from "@/components/coach/Training";

const Coach = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 my-5">
        <QuizMode />
      </main>
    </div>
  );
};

export default Coach;
