"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import enMessages from "@/messages/en.json";
import trMessages from "@/messages/tr.json";

type Language = "en" | "tr";

const dictionaries: Record<Language, any> = {
  en: enMessages,
  tr: trMessages,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (keyPath: string) => keyPath,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("rc_lang") as Language;
    if (saved && (saved === "en" || saved === "tr")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("rc_lang", lang);
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current = dictionaries[language];
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        return keyPath;
      }
    }
    return typeof current === "string" ? current : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
