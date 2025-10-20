"use client";
import { useTranslationContext } from "@/context/TranslationContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslationContext();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 w-fit shadow-sm">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-white shadow font-semibold"
            : "text-gray-600 hover:text-black"
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => changeLanguage("de")}
        className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
          language === "de"
            ? "bg-white shadow font-semibold"
            : "text-gray-600 hover:text-black"
        }`}
      >
        🇩🇪 DE
      </button>
    </div>
  );
}
