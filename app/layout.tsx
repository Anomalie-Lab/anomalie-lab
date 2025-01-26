import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";
import { FooterComponent } from "./components/footer.component";
import { BuilderSession } from "./sessions/builder.session";
import { IndicationsSession } from "./sessions/indications.session";
import { HeaderComponent } from "./components/header.component";
import { HomeSession } from "./sessions/home.session";
import { AboutSession } from "./sessions/about.session";
import { ProjectSession } from "./sessions/project.session";
import { Providers } from "./providers/provider";
import { BackToTop } from "./components/back-top.componet";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anomalielab.com.br"),
  title: "Anomalie Lab - Desenvolvimento de Sites e Apps",
  description: "Especialistas em criação de sites e aplicativos personalizados, com soluções inovadoras e foco em design e experiência do usuário.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    locale: "pt-BR",
    title: "Anomalie Lab - Desenvolvimento de Sites e Apps",
    siteName: "Anomalie Lab",
    type: "website",
    description: "Criamos sites e aplicativos personalizados, focados em inovação e excelência. Soluções que atendem às necessidades de nossos clientes.",
    url: "https://www.anomalielab.com.br",
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  },
  alternates: {
    canonical: "https://www.anomalielab.com.br",
  },
  keywords: [
    "Anomalie Lab",
    "desenvolvimento de sites",
    "desenvolvimento de apps",
    "criação de websites",
    "design de sites",
    "soluções digitais",
    "apps personalizados",
    "design de experiência do usuário",
    "site responsivo",
    "aplicativos móveis",
    "web design",
    "tecnologia",
    "inovação digital",
    "startup de tecnologia",
    "desenvolvimento web",
    "agência de desenvolvimento",
    "serviços digitais",
    "consultoria digital",
    "soluções tecnológicas",
    "sites modernos",
    "programação web",
    "tecnologia em Jundiaí",
    "desenvolvimento web São Paulo",
    "agência digital Brasil",
  ],
  authors: [
    { name: "Fernando Esdras", url: "https://github.com/esdrasfyy" },
    { name: "João Silva", url: "https://github.com/joaosilva25" },
  ],
};

export const viewport = { width: "device-width", initialScale: 1.0 };

export const themeColor = "#000000";

export default function RootLayout() {
  return (
    <html lang="en" className="max-w-screen overflow-x-hidden">
      <Providers>
        <body className={`${inter.variable} antialiased h-fit max-w-[1250px] mx-auto flex flex-col px-4`}>
          <HeaderComponent />
          <HomeSession />
          <AboutSession />
          <ProjectSession />
          <IndicationsSession />
          <BuilderSession />
          <FooterComponent />
          <BackToTop />
        </body>
      </Providers>
    </html>
  );
}
