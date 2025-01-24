"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { Contexts } from "../@types/contexts.type";

export const ContextApp = createContext<Contexts.AppProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sectionVisible, setSectionVisible] = useState<string | null>("");

  const contextValue: Contexts.AppProps = {
    sectionVisible,
    setSectionVisible,
  };

  return <ContextApp.Provider value={contextValue}>{children}</ContextApp.Provider>;
};

export const useApp = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
