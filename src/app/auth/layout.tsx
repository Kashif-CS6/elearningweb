import React from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen bg-gray-50">
      {/* ✅ Language Switcher fixed at top-right */}
      <div className="absolute right-4 top-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* ✅ Main Page Content */}
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
