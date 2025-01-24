import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar.component";
import { Providers } from "./providers/providers";
import "@splidejs/react-splide/css";
import Head from "next/head";
import { NavbarMobile } from "@/components/navbar/navbar-mobile.component";
import { BackToTop } from "@/components/back-top/back-top.componet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franciele Cruz - Advogada",
  description: "Especialista em Direito Trabalhista e atuante no Direito Civil, Empresarial, Consumidor, Família e Previdenciário",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#132226",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    locale: "pt-BR",
    title: "Franciele Cruz - Advogada",
    siteName: "Franciele Cruz - Advogada",
    type: "website",
    description: "Especialista em Direito Trabalhista e atuante no Direito Civil, Empresarial, Consumidor, Família e Previdenciário",
    url: "https:///",
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  },
  alternates: {
    canonical: "https:///",
  },
  keywords: [
    "Franciele Cruz",
    "advogada",
    "Direito Trabalhista",
    "Direito Civil",
    "Direito do Consumidor",
    "Direito de Família",
    "consultoria jurídica",
    "advocacia online",
    "atendimento jurídico online",
    "resolução de conflitos",
    "advogada em Jundiaí",
    "advogada trabalhista Jundiaí",
    "processo trabalhista",
    "ação de divórcio",
    "direitos do consumidor",
    "acordo trabalhista",
    "advocacia humanizada",
    "confiança",
    "sensibilidade jurídica",
    "atendimento personalizado",
    "consultoria jurídica Brasil",
    "solução de demandas jurídicas",
    "advogada de confiança",
    "consultoria trabalhista",
    "orientação jurídica",
    "Jundiaí",
    "São Paulo",
    "SP",
    "Brasil",
  ],
  authors: [
    { name: "Fernando Esdras", url: "https://github.com/esdrasfyy" },
    { name: "João Silva", url: "https://github.com/joajo" },
  ],
};

interface RootLayoutProps {
  types: string;
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Providers>
        <body className={`${inter.className} antialiased`}>
          {children}
          <Navbar />
          <NavbarMobile />
          <BackToTop />
        </body>
      </Providers>
    </html>
  );
}
