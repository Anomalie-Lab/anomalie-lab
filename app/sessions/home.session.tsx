"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { trans } from "../libs/i18n.lib";
import { Parallax } from "react-parallax";

export function HomeSession() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  return (
    <section className="uppercase font-semibold max-md:min-h-[90vh]">
      <motion.h1
        ref={ref1}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="text-[230px] h-48 flex relative items-center right-5  justify-between max-md:text-7xl max-md:h-fit max-md:right-1.5 max-md:mt-12"
      >
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
      <div className="flex items-center justify-between max-md:items-start max-md:flex-col overflow-y-hidden">
        <motion.h1
          ref={ref2}
          initial={{ opacity: 0, y: -150 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }}
          transition={{ duration: 0.5 }}
          className="text-[230px] relative bottom-36 right-5  z-10 max-md:text-7xl max-md:h-fit max-md:right-1.5 max-md:bottom-4"
        >
          <span className="drop-shadow-2xl z-0">Lab.</span>
        </motion.h1>
        <button className="text-white flex flex-row-reverse items-center relative group w-full max-w-[340px] overflow-hidden max-md:max-w-full max-md:mt-12">
          <motion.span
            ref={ref2}
            initial={{ opacity: 0, width: "50px" }}
            animate={
              isInView2
                ? { opacity: 1, width: "288px" }
                : { opacity: 0, width: "50px" }
            }
            transition={{ duration: 0.5 }}
            className="absolute text-nowrap shadow-md
 right-0 -z-10 text-black h-full border  border-black rounded-full p-5 mr-4 group-hover:bg-[#e4e4e5] ease-linear duration-300"
          >
            {trans.t("CONTACT US")}
          </motion.span>
          <div className="p-5 bg-black text-3xl rounded-full">
            <LiaLongArrowAltRightSolid />
          </div>
        </button>
      </div>
    </section>
  );
}
