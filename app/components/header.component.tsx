"use client";
import Image from "next/image";
import Link from "next/link";
import { usePreferences } from "../contexts/ContextPreferences";

export function HeaderComponent() {
  const { toggleLang, lang } = usePreferences();

  return (
    <header className="w-full h-32 flex text-sm justify-between items-center font-semibold uppercase">
      <Image
        className="shadow-2xl"
        src="/logo.png"
        width={50}
        height={190}
        alt="Logo"
      />
      <ul className="flex gap-20 max-md:hidden bg-white text-black border border-black p-4 px-10 rounded-full shadow-xl">
        <li>
          <Link href="#" className="menu__link text-xs">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            Awards
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            Interview
          </Link>
        </li>
      </ul>
      <h5>
        <button
          className="font-semibold text-black uppercase"
          onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
        >
          {lang === "pt-BR" ? "PT" : "EN"}
        </button>
      </h5>
    </header>
  );
}
