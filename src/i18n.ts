"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ✅ Import JSON files using ES module syntax
import enTranslation from "../locales/en/translation.json";
import deTranslation from "../locales/de/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
    },
  });

export default i18n;
