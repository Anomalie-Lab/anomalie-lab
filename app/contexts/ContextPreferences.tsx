"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { ContextPreferencesT } from "./types/ContextProviderT";

const getInitialLang = () => {
  if (typeof navigator !== "undefined") {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("i18nextLng");
      return storedLang || navigator.language;
    }
    return navigator.language;
  }
  return "pt-BR";
};

const ContextPreferences = createContext<ContextPreferencesT | undefined>(undefined);

const ProviderPreferences: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<string>(getInitialLang());
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleLang = (value: string) => {
    localStorage.setItem("i18nextLng", value);
    setLang(value);
    return (window.location = window.location);
  };

  const contextValue: ContextPreferencesT = {
    lang,
    toggleLang,
    menu,
    setMenu,
    loading,
    setLoading,
  };

  return <ContextPreferences.Provider value={contextValue}>{children}</ContextPreferences.Provider>;
};
export const usePreferences = () => {
  const context = useContext(ContextPreferences);
  if (!context) {
    throw new Error("usePreferences must be used within a AdminProvider");
  }
  return context;
};

export { ContextPreferences, ProviderPreferences };
