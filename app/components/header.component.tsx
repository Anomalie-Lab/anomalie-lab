"use client";
import Image from "next/image";
import Link from "next/link";
import { usePreferences } from "../contexts/ContextPreferences";
import { TbMenu4 } from "react-icons/tb";

export function HeaderComponent() {
  const { toggleLang, lang, setMenu, menu } = usePreferences();

  return (
    <header className="w-full h-32 flex text-sm justify-between items-center font-semibold uppercase z-50">
      <Image className="shadow-2xl  bg-blend-difference text-blend-difference rounded-md" src="/logo.png" width={50} height={50} alt="Logo" />
      <ul className="flex gap-20 max-md:hidden bg-white text-black">
        <li>
          <Link href="#" className="menu__link text-xs">
            INSTAGRAM
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            WHATSAPP
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            LINKEDIN
          </Link>
        </li>
      </ul>
      <button className="font-semibold text-black uppercase max-md:hidden" onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}>
        {lang === "pt-BR" ? "PT" : "EN"}
      </button>
      <button className={`font-semibold ${menu && "hidden"} uppercase hidden max-md:block text-3xl`} onClick={() => setMenu(!menu)}>
        <TbMenu4 />
      </button>
    </header>
  );
}
