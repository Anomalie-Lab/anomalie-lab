import { ProviderPreferences } from "../contexts/ContextPreferences";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProviderPreferences>{children}</ProviderPreferences>;
}
