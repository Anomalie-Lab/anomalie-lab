import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";
import { Footer } from "./sessions/footer.session";
import { AboutSession } from "./sessions/about.session";
import { BuilderSession } from "./sessions/builder.session";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased h-fit max-w-[1250px] mx-auto flex flex-col gap-28 pt-28`}>
        <AboutSession />
        <BuilderSession />
        <Footer />
      </body>
    </html>
  );
}
