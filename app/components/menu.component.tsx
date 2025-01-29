"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { usePreferences } from "../contexts/ContextPreferences";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { trans } from "../libs/i18n.lib";
function MenuComponent() {
  const ref = useRef(null);
  const { menu, setMenu, toggleLang, lang } = usePreferences();

  return (
    <>
      <motion.div ref={ref} initial={{ top: "-250vh", left: "-200vw" }} animate={menu ? { top: "-100vh", left: "-20vw" } : { top: "-250vh", left: "-200vw" }} transition={{ duration: 0.5 }} className="fixed rotate-[210deg] w-[220vw] h-[250vh] z-40 bg-black shadow-lg hidden max-md:flex"></motion.div>
      <motion.menu ref={ref} initial={{ opacity: 0 }} animate={menu ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: menu ? 0.5 : 0.25, delay: menu ? 0.5 : 0 }} className="flex flex-col gap-20 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white hidden max-md:flex">
        <li>
          <Link onClick={() => setMenu(false)} href="#about" className="menu__link text-2xl tracking-widest">
            {trans.t("About Us")}
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenu(false)} href="#projects" className="menu__link text-2xl tracking-widest">
            {trans.t("Projects")}
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenu(false)} href="#indications" className="menu__link text-2xl tracking-widest">
            {trans.t("Indications")}
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenu(false)} href="#contacts" className="menu__link text-2xl tracking-widest">
            {trans.t("Contact")}
          </Link>
        </li>
      </motion.menu>
      <motion.ul ref={ref} initial={{ opacity: 0 }} animate={menu ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: menu ? 0.5 : 0.25, delay: menu ? 0.5 : 0 }} className="p-6 justify-between w-full items-center fixed bottom-0 left-1/2 -translate-x-1/2 z-50 text-white/50 hidden max-md:flex">
        <li>
          <Link onClick={() => setMenu(false)} href="https://wa.link/qr8nbk" target="_blank" className="menu__link text-sm uppercase tracking-widest">
            whatsapp
          </Link>
        </li>
        <li>
          <Link onClick={() => setMenu(false)} href="https://www.instagram.com/anomalielab/" target="_blank" className="menu__link text-sm uppercase tracking-widest">
            instagram
          </Link>
        </li>
        <li>
          <button className="font-semibold text-white uppercase " onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}>
            {lang === "en-US" ? "PT" : "EN"}
          </button>
        </li>
      </motion.ul>
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={menu ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: menu ? 0.5 : 0.25, delay: menu ? 0.5 : 0 }} className="justify-between items-center fixed top-[53px] right-[14px] z-50 text-white/50 hidden max-md:flex">
        <button onClick={() => setMenu(false)}>
          <IoMdClose />
        </button>
      </motion.div>
    </>
  );
}

export default MenuComponent;
