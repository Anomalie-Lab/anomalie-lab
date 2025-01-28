"use client";
import Image from "next/image";
import Link from "next/link";
import { usePreferences } from "../contexts/ContextPreferences";
import { TbMenu4 } from "react-icons/tb";
import { trans } from "../libs/i18n.lib";

export function HeaderComponent() {
  const { toggleLang, lang, setMenu, menu } = usePreferences();

  return (
    <header className="w-full h-32 flex text-sm justify-between items-center font-semibold uppercase">
      <Image
        className="relative right-[70px]"
        src="/LogoAnomalie.png"
        width={300}
        height={300}
        alt="Logo"
      />
      <ul className="flex gap-20 relative right-16 max-md:hidden  p-4 px-10 rounded-full ">
        <li>
          <Link href="#" className="menu__link text-xs">
            {trans.t("About Us")}
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            {trans.t("Projects")}
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            {trans.t("Indications")}
          </Link>
        </li>
        <li>
          <Link href="#" className="menu__link text-xs">
            {trans.t("Contact")}
          </Link>
        </li>
      </ul>
      <button
        className="font-semibold text-black uppercase max-md:hidden"
        onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
      >
        {lang === "pt-BR" ? "PT" : "EN"}
      </button>
      <button
        className={`font-semibold ${menu && "hidden"} uppercase hidden max-md:block text-3xl`}
        onClick={() => setMenu(!menu)}
      >
        <TbMenu4 />
      </button>
    </header>
  );
}
