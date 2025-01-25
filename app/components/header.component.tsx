"use client";
import Image from "next/image";
import Link from "next/link";
import { usePreferences } from "../contexts/ContextPreferences";

export function HeaderComponent() {
  const { toggleLang, lang } = usePreferences();
  return (
    <header className="w-full h-32 flex text-sm justify-between items-center font-semibold uppercase">
      <Image src="/logo.png" width={50} height={190} alt="Logo" />
      <ul className="flex gap-20">
        <li>
          <Link href="#" className="menu__link">Projects</Link>
        </li>
        <li>
          <Link href="#" className="menu__link">Awards</Link>
        </li>
        <li>
          <Link href="#" className="menu__link">Interview</Link>
        </li>
      </ul>
      <h5>
        <button className="font-semibold text-black uppercase" onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}>
          {lang === "pt-BR" ? "EN" : "PT"}
        </button>
      </h5>
    </header>
  );
}
