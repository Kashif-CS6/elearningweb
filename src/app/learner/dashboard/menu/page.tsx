"use client";

import RightSideBar from "@/components/learner/RightSideBar";
import Hero from "@/components/learner/dashboard/Hero";
import LearnerMain from "@/components/learner/dashboard/LearnerMain";
import TopHeader from "@/components/TopHeader";

const Menu = () => {
  return (
    <div className={`flex flex-col gap-4 relative p-3 md:p-6 `}>
      {/* top header */}
      <TopHeader />

      <div className="flex gap-6">
        <div>
          <Hero />
          <LearnerMain />
        </div>

        <RightSideBar />
      </div>
    </div>
  );
};

export default Menu;
