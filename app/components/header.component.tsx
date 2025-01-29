"use client";
import Image from "next/image";
import Link from "next/link";
import { usePreferences } from "../contexts/ContextPreferences";
import { RxHamburgerMenu } from "react-icons/rx";
import { trans } from "../libs/i18n.lib";

export function HeaderComponent() {
  const { toggleLang, lang, setMenu, menu } = usePreferences();

  return (
    <header className="w-full h-32 flex text-sm justify-between items-center font-semibold uppercase">
      <Image className="relative max-md:w-32" src="/logo-name.png" width={130} height={130} alt="Logo" />
      <ul className="flex gap-20 relative right-16 max-md:hidden  p-4 px-10 rounded-full ">
        <li>
          <Link href="#about" className="menu__link text-xs">
            {trans.t("About Us")}
          </Link>
        </li>
        <li>
          <Link href="#projects" className="menu__link text-xs">
            {trans.t("Projects")}
          </Link>
        </li>
        <li>
          <Link href="#indications" className="menu__link text-xs">
            {trans.t("Indications")}
          </Link>
        </li>
        <li>
          <Link href="#contacts" className="menu__link text-xs">
            {trans.t("Contact")}
          </Link>
        </li>
      </ul>
      <button className="font-semibold text-black uppercase max-md:hidden" onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}>
        {lang === "en-US" ? "PT" : "EN"}
      </button>
      <button className={`font-semibold ${menu && "hidden"} uppercase hidden max-md:block text-3xl`} onClick={() => setMenu(!menu)}>
        <RxHamburgerMenu />
      </button>
    </header>
  );
}
