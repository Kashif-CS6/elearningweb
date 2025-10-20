"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import English from "../locales/en/translation.json";
import German from "../locales/en/translation.json";

i18n
  .use(LanguageDetector) // detects user's language from browser or localStorage
  .use(initReactI18next) // connects with React
  .init({
    fallbackLng: "en", // default language
    debug: false, // set true for debugging translation issues
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
    resources: {
      en: {
        translation: English,
      },
      de: {
        translation: German,
      },
    },
  });

export default i18n;
