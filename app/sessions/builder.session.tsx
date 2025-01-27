"use client";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { trans } from "../libs/i18n.lib";
import { useState } from "react";

export function BuilderSession() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: any) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const x = (offsetX / width - 0.5) * 20;
    const y = (offsetY / height - 0.5) * -20;

    setStyle({
      transform: `rotateX(${y}deg) rotateY(${x}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
    });
  };
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, width: "30%" }}
      animate={
        isInView ? { opacity: 1, width: "100%" } : { opacity: 0, width: "30%" }
      }
      transition={{ duration: 1 }}
      className="mt-24  h-[600px] flex items-end"
    >
      <div className="p-20 bg-black shadow-xl text-white w-full rounded-xl flex justify-between items-end h-96 max-md:p-8 max-md:h-72">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-4xl max-w-96 font-medium max-md:text-2xl"
        >
          {trans.t("take the first step towards your digital success.")}
        </motion.h4>
        <div className="group">
          <Link
            href="#"
            className="p-5 text-center flex group-hover:hidden transition duration-500 ease-linear bg-white text-black rounded-md text-2xl"
          >
            <LiaLongArrowAltRightSolid />
          </Link>
          <Link
            href="#"
            className="p-5 text-center hidden group-hover:flex  transition duration-500 ease-linear  items-center justify-center gap-5 bg-white text-black rounded-md text-2xl"
          >
            <span className="text-xs font-medium">Dar primeiro passo</span>
            <LiaLongArrowAltRightSolid />
          </Link>
        </div>
    <section className="mt-24  h-[600px] flex items-end hover-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: "1000px" }}>
      <div className="p-20 bg-black shadow-xl duration-500 text-white w-full rounded-xl flex justify-between items-end h-96 max-md:p-8 max-md:h-72 hover-content p" style={{ ...style }}>
        <h4 className="text-4xl max-w-96 font-medium max-md:text-2xl">{trans.t("take the first step towards your digital success.")}</h4>
        <Link href="#" className="p-5 text-center bg-white text-black rounded-md text-2xl">
          <LiaLongArrowAltRightSolid />
        </Link>
      </div>
    </section>
  );
}
