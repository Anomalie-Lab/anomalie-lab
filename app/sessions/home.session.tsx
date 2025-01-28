"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { trans } from "../libs/i18n.lib";
import { Parallax } from "react-parallax";
import Link from "next/link";

export function HomeSession() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  return (
    <section className="uppercase font-semibold max-md:min-h-[90vh] mt-4">
      <motion.h1 ref={ref1} initial={{ opacity: 0, y: 100 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.5 }} className="text-[230px] h-48 flex relative items-center right-5  justify-between max-md:text-7xl max-md:h-fit max-md:right-1.5 max-md:mt-12">
        <span className="drop-shadow-2xl">Lab.</span>
      </motion.h1>
      <Parallax
        bgImage="/TigerCort.png"
        strength={400}
        bgImageStyle={{
          objectFit: "cover", // Faz a imagem cobrir toda a área
          objectPosition: "center", // Centraliza a imagem
        }}
      >
        <div className="shadow-2xl h-96 bg-cover bg-bottom z-20 relative max-md:h-72 max-sm:h-56"></div>
      </Parallax>
      <div className="flex items-center justify-between max-md:items-start max-md:flex-col overflow-hidden">
        <motion.h1 ref={ref2} initial={{ opacity: 0, y: -150 }} animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }} transition={{ duration: 0.5 }} className="text-[230px] relative bottom-36 right-5  z-10 max-md:text-7xl max-md:h-fit max-md:right-1.5 max-md:bottom-4">
          <span className="drop-shadow-2xl z-0">Lab.</span>
        </motion.h1>
        <Link href="#" className="cursor-pointer relative group rounded-full flex -mt-44 max-md:mt-0">
          <span className="absolute pl-12 pr-32 top-1/2 -translate-y-1/2 text-nowrap group-hover:-right-[0px] right-20 p-5 duration-300 ease-linear border rounded-full -z-10 text-black/30 group-hover:text-black group-hover:border-black">{trans.t("CONTACT US")}</span>
          <span className="p-5 bg-black block rounded-full text-white text-2xl">
            <LiaLongArrowAltRightSolid className="group-hover:rotate-45 duration-300" />
          </span>
        </Link>
      </div>
    </section>
  );
}
