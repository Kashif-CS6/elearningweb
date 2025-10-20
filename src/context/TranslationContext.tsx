"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";

interface TranslationContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  ready: boolean;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(i18n.language || "en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on("initialized", () => setReady(true));
    }
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, ready }}>
      {ready ? children : null}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx)
    throw new Error(
      "useTranslationContext must be used inside TranslationProvider"
    );
  return ctx;
};
