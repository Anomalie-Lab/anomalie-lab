import { ChakraProvider } from "@chakra-ui/react";
import { ProviderPreferences } from "../contexts/ContextPreferences";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ProviderPreferences>{children}</ProviderPreferences>;
    </ChakraProvider>
  );
}
