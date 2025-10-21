"use client";
import React from "react";

import Training from "@/components/coach/Training";

const Coach = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 my-5">
        <Training />
      </main>
    </div>
  );
};

export default Coach;
