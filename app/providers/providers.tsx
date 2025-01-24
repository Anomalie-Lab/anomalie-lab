/* eslint-disable */
"use client";

import { AppProvider } from "../contexts/app.context";
import { Provider } from "@/components/ui/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <Provider>{children}</Provider>
    </AppProvider>
  );
}
